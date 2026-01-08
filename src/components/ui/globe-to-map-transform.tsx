"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import * as d3 from "d3"
import { feature } from "topojson-client"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"

interface GeoFeature {
  type: string
  geometry: any
  properties: any
}

interface City {
  name: string
  coordinates: [number, number] // [longitude, latitude]
}

const cities: City[] = [
  { name: "Jeddah", coordinates: [39.1925, 21.4858] },
  { name: "Dammam", coordinates: [50.0888, 26.4207] },
  { name: "Dubai", coordinates: [55.2708, 25.2048] },
  { name: "Riyadh", coordinates: [46.6753, 24.7136] },
]

function interpolateProjection(raw0: any, raw1: any) {
  const mutate: any = d3.geoProjectionMutator((t: number) => (x: number, y: number) => {
    const [x0, y0] = raw0(x, y)
    const [x1, y1] = raw1(x, y)
    return [x0 + t * (x1 - x0), y0 + t * (y1 - y0)]
  })
  let t = 0
  return Object.assign((mutate as any)(t), {
    alpha(_: number) {
      return arguments.length ? (mutate as any)((t = +_)) : t
    },
  })
}

export function GlobeToMapTransform() {
  const svgRef = useRef<SVGSVGElement>(null)
  const [isAnimating, setIsAnimating] = useState(false)
  const [progress, setProgress] = useState([0])
  const [worldData, setWorldData] = useState<GeoFeature[]>([])
  const [rotation, setRotation] = useState([0, 0])
  const [translation, setTranslation] = useState([0, 0])
  const [zoomLevel, setZoomLevel] = useState(1)
  const [isDragging, setIsDragging] = useState(false)
  const [lastMouse, setLastMouse] = useState([0, 0])
  const [hoveredCity, setHoveredCity] = useState<string | null>(null)
  const [cityPositions, setCityPositions] = useState<Record<string, { svgX: number; svgY: number }>>({})
  const [cityScreenPositions, setCityScreenPositions] = useState<Record<string, [number, number]>>({})
  const [tooltipPosition, setTooltipPosition] = useState<[number, number] | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const { theme, resolvedTheme } = useTheme()

  const width = 800
  const height = 500

  // Convert SVG coordinates to screen coordinates
  const getScreenPosition = (svgX: number, svgY: number): [number, number] => {
    if (!svgRef.current || !containerRef.current) return [0, 0]

    const svg = svgRef.current
    const container = containerRef.current
    const svgRect = svg.getBoundingClientRect()
    const containerRect = container.getBoundingClientRect()

    // Get viewBox dimensions
    const viewBox = svg.viewBox.baseVal
    const viewBoxWidth = viewBox.width || width
    const viewBoxHeight = viewBox.height || height

    // Calculate scale factors
    const scaleX = svgRect.width / viewBoxWidth
    const scaleY = svgRect.height / viewBoxHeight

    // Convert SVG coordinates to screen coordinates relative to container
    const screenX = (svgX * scaleX) + (svgRect.left - containerRect.left)
    const screenY = (svgY * scaleY) + (svgRect.top - containerRect.top)

    return [screenX, screenY]
  }

  // Update tooltip positions when city positions, progress, or rotation changes
  useEffect(() => {
    const updatePositions = () => {
      if (svgRef.current && containerRef.current) {
        const positions: Record<string, [number, number]> = {}
        Object.keys(cityPositions).forEach((cityName) => {
          const pos = cityPositions[cityName]
          const [screenX, screenY] = getScreenPosition(pos.svgX, pos.svgY)
          positions[cityName] = [screenX, screenY]
        })
        setCityScreenPositions(positions)
      }
    }
    updatePositions()
    window.addEventListener("resize", updatePositions)
    return () => window.removeEventListener("resize", updatePositions)
  }, [cityPositions, progress, rotation])

  // Update tooltip position when hovered city changes
  useEffect(() => {
    if (hoveredCity && cityScreenPositions[hoveredCity]) {
      setTooltipPosition(cityScreenPositions[hoveredCity])
    } else {
      setTooltipPosition(null)
    }
  }, [hoveredCity, cityScreenPositions])

  // Load world data
  useEffect(() => {
    const loadWorldData = async () => {
      try {
        // Using Natural Earth data from a CDN
        const response = await fetch("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json")
        const world: any = await response.json()
        const featureCollection = feature(world, world.objects.countries) as unknown as GeoJSON.FeatureCollection
        const countries = featureCollection.features
        setWorldData(countries)
        console.log("[v0] Successfully loaded world data with", countries.length, "countries")
      } catch (error) {
        console.log("[v0] Error loading world data:", error)
        // Fallback: create a simple world outline
        const fallbackData = [
          {
            type: "Feature",
            geometry: {
              type: "Polygon",
              coordinates: [
                [
                  [-180, -90],
                  [180, -90],
                  [180, 90],
                  [-180, 90],
                  [-180, -90],
                ],
              ],
            },
            properties: {},
          },
        ]
        setWorldData(fallbackData)
      }
    }

    loadWorldData()
  }, [])

  const handleMouseDown = (event: React.MouseEvent) => {
    setIsDragging(true)
    const rect = svgRef.current?.getBoundingClientRect()
    if (rect) {
      setLastMouse([event.clientX - rect.left, event.clientY - rect.top])
    }
  }

  const handleMouseMove = (event: React.MouseEvent) => {
    if (!isDragging) return

    const rect = svgRef.current?.getBoundingClientRect()
    if (!rect) return

    const currentMouse = [event.clientX - rect.left, event.clientY - rect.top]
    const dx = currentMouse[0] - lastMouse[0]
    const dy = currentMouse[1] - lastMouse[1]

    const t = progress[0] / 100

    if (t < 0.5) {
      // Globe mode - rotate
      const sensitivity = 0.5
      // NOTE: flip horizontal sign so dragging right rotates globe to the right
      setRotation((prev) => [prev[0] + dx * sensitivity, Math.max(-90, Math.min(90, prev[1] - dy * sensitivity))])
    } else {
      // Map mode - rotate the projection (not simple pan)
      // This updates the projection.rotate(...) used when in equirectangular mode.
      const sensitivityMap = 0.25 // lower sensitivity for longitude/latitude rotation
      setRotation((prev) => [prev[0] + dx * sensitivityMap, Math.max(-90, Math.min(90, prev[1] - dy * sensitivityMap))])
    }

    setLastMouse(currentMouse)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleTouchStart = (event: React.TouchEvent) => {
    event.preventDefault()
    setIsDragging(true)
    const rect = svgRef.current?.getBoundingClientRect()
    if (rect && event.touches.length > 0) {
      const touch = event.touches[0]
      setLastMouse([touch.clientX - rect.left, touch.clientY - rect.top])
    }
  }

  const handleTouchMove = (event: React.TouchEvent) => {
    if (!isDragging) return
    event.preventDefault()

    const rect = svgRef.current?.getBoundingClientRect()
    if (!rect || event.touches.length === 0) return

    const touch = event.touches[0]
    const currentMouse = [touch.clientX - rect.left, touch.clientY - rect.top]
    const dx = currentMouse[0] - lastMouse[0]
    const dy = currentMouse[1] - lastMouse[1]

    const t = progress[0] / 100

    if (t < 0.5) {
      // Globe mode - rotate
      const sensitivity = 0.5
      // NOTE: flip horizontal sign so dragging right rotates globe to the right
      setRotation((prev) => [prev[0] + dx * sensitivity, Math.max(-90, Math.min(90, prev[1] - dy * sensitivity))])
    } else {
      // Map mode - rotate the projection (not simple pan)
      // This updates the projection.rotate(...) used when in equirectangular mode.
      const sensitivityMap = 0.25 // lower sensitivity for longitude/latitude rotation
      setRotation((prev) => [prev[0] + dx * sensitivityMap, Math.max(-90, Math.min(90, prev[1] - dy * sensitivityMap))])
    }

    setLastMouse(currentMouse)
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(3, prev * 1.2))
  }

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(0.5, prev / 1.2))
  }

  // Initialize and update visualization
  useEffect(() => {
    if (!svgRef.current || worldData.length === 0) return

    const svg = d3.select(svgRef.current)
    svg.selectAll("*").remove()

    // Use CSS variables directly - they will update automatically with theme changes
    const isDark = resolvedTheme === "dark"

    const t = progress[0] / 100
    const alpha = Math.pow(t, 0.5) // Ease-out for smoother animation

    const scale = d3.scaleLinear().domain([0, 1]).range([280, 120])
    const baseRotate = d3.scaleLinear().domain([0, 1]).range([0, 0])

    // Apply zoom in all modes
    const finalScale = scale(alpha) * zoomLevel

    const projection = interpolateProjection(d3.geoOrthographicRaw, d3.geoEquirectangularRaw)
      .scale(finalScale)
      .translate([width / 2 + translation[0], height / 2 + translation[1]])
      .rotate([baseRotate(alpha) + rotation[0], rotation[1]])
      .precision(0.1)

    // Set the interpolation parameter
    projection.alpha(alpha)

    // Create path generator
    const path = d3.geoPath(projection)

    // Add graticule (grid lines) above ocean fill but below countries
    try {
      const graticule = d3.geoGraticule()
      const graticulePath = path(graticule())
      if (graticulePath) {
        svg
          .append("path")
          .datum(graticule())
          .attr("d", graticulePath)
          .attr("fill", "none")
          .attr("class", "globe-graticule")
          .style("stroke", "hsl(var(--muted-foreground))")
          .attr("stroke-width", 1)
          .attr("opacity", isDark ? 0.2 : 0.3)
      }
    } catch (error) {
      console.log("[v0] Error creating graticule:", error)
    }

    // Add countries
    svg
      .selectAll(".country")
      .data(worldData)
      .enter()
      .append("path")
      .attr("class", "country globe-country")
      .attr("d", (d) => {
        try {
          const pathString = path(d as any)
          if (!pathString) return ""
          if (typeof pathString === "string" && (pathString.includes("NaN") || pathString.includes("Infinity"))) {
            return ""
          }
          return pathString
        } catch (error) {
          console.log("[v0] Error generating path for country:", error)
          return ""
        }
      })
      .attr("fill", "none")
      .style("stroke", "hsl(var(--foreground))")
      .attr("stroke-width", 1.0)
      .attr("opacity", 1.0)
      .style("visibility", function () {
        const pathData = d3.select(this).attr("d")
        return pathData && pathData.length > 0 && !pathData.includes("NaN") ? "visible" : "hidden"
      })
    // hover handlers removed to keep country borders style constant

    // Draw sphere outline on top so the map border overlays countries
    try {
      const sphereOutline = path({ type: "Sphere" })
      if (sphereOutline) {
        svg
          .append("path")
          .datum({ type: "Sphere" })
          .attr("d", sphereOutline)
          .attr("fill", "none")
          .attr("class", "globe-sphere-outline")
          .style("stroke", "hsl(var(--border))")
          .attr("stroke-width", 1)
          .attr("opacity", 1.0)
      }
    } catch (error) {
      console.log("[v0] Error creating sphere outline:", error)
    }

    // Add city markers
    const positions: Record<string, { svgX: number; svgY: number }> = {}
    cities.forEach((city) => {
      const [lon, lat] = city.coordinates
      const projected = projection([lon, lat])
      if (projected && projected[0] !== null && projected[1] !== null && !isNaN(projected[0]) && !isNaN(projected[1])) {
        positions[city.name] = { svgX: projected[0], svgY: projected[1] }

        // Create marker group
        const markerGroup = svg.append("g").attr("class", `city-marker-${city.name}`)

        // Add SVG image marker (pin icon)
        // The image is 15x45, so we center it horizontally and anchor it at the bottom point
        const markerWidth = 15
        const markerHeight = 45
        markerGroup
          .append("image")
          .attr("href", "/mark.svg")
          .attr("x", projected[0] - markerWidth / 2)
          .attr("y", projected[1] - markerHeight)
          .attr("width", markerWidth)
          .attr("height", markerHeight)
          .attr("opacity", 0.9)
          .style("cursor", "pointer")
          .on("mouseenter", () => setHoveredCity(city.name))
          .on("mouseleave", () => setHoveredCity(null))
      }
    })
    setCityPositions(positions)

    console.log("[v0] Visualization updated with progress:", progress[0], "theme:", resolvedTheme || theme)
  }, [worldData, progress, rotation, translation, zoomLevel, theme, resolvedTheme])

  const handleAnimate = () => {
    if (isAnimating) return

    setIsAnimating(true)
    setZoomLevel(1) // Reset zoom level when animating
    const startProgress = progress[0]
    const endProgress = startProgress === 0 ? 100 : 0
    const duration = 2000

    const startTime = Date.now()

    const animate = () => {
      const elapsed = Date.now() - startTime
      const t = Math.min(elapsed / duration, 1)

      // Smooth easing function
      const eased = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
      const currentProgress = startProgress + (endProgress - startProgress) * eased

      setProgress([currentProgress])

      if (t < 1) {
        requestAnimationFrame(animate)
      } else {
        setIsAnimating(false)
      }
    }

    animate()
  }

  const handleSliderChange = (value: number[]) => {
    if (!isAnimating) {
      setProgress(value)
    }
  }

  const handleReset = () => {
    setRotation([0, 0])
    setTranslation([0, 0])
    setZoomLevel(1)
  }

  return (
    <div ref={containerRef} className="relative flex items-center justify-center w-full h-full">
      <svg
        ref={svgRef}
        viewBox={`0 0 ${width} ${height}`}
        className="w-full h-full border rounded-lg bg-transparent cursor-grab active:cursor-grabbing touch-none"
        preserveAspectRatio="xMidYMid meet"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchEnd}
      />
      {/* City tooltip - shown on hover */}
      {hoveredCity && tooltipPosition && (
        <div
          className="absolute z-50 px-3 py-1.5 text-xs rounded-md bg-primary text-primary-foreground pointer-events-none shadow-lg whitespace-nowrap"
          style={{
            left: `${tooltipPosition[0]}px`,
            top: `${tooltipPosition[1] - 10}px`,
            transform: "translateX(-50%)",
          }}
        >
          {hoveredCity}
        </div>
      )}

      <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
        <Button
          onClick={handleZoomIn}
          variant="outline"
          size="icon"
          disabled={zoomLevel >= 3}
        >
          +
        </Button>
        <Button
          onClick={handleZoomOut}
          variant="outline"
          size="icon"
          disabled={zoomLevel <= 0.5}
        >
          −
        </Button>
      </div>

      <div className="absolute bottom-4 right-4 flex gap-2 z-10">
        <Button onClick={handleAnimate} disabled={isAnimating} className="cursor-pointer min-w-[120px] rounded">
          {isAnimating ? "Loading..." : progress[0] === 0 ? "Unroll Globe" : "Roll to Globe"}
        </Button>
        <Button
          onClick={handleReset}
          variant="outline"
          className="cursor-pointer min-w-[80px] text-neutral-800 dark:text-white border-neutral-300 dark:border-white/20 hover:bg-neutral-100 dark:hover:bg-white/10 bg-transparent rounded"
        >
          Reset
        </Button>
      </div>
    </div>
  )
}
