

"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Target, MessageSquare, DollarSign, Settings, Home } from "lucide-react"
import { Tooltip } from "./ui/tooltip-card"

const moduleIcons = [Target, MessageSquare, DollarSign, Settings, Home]

const moduleColors = [
    { color: "#a78bfa", gradient: "from-violet-400 to-purple-500" },  // Purple - Event Production
    { color: "#a78bfa", gradient: "from-violet-400 to-purple-500" },  // Purple - Games and Activities
    { color: "#a78bfa", gradient: "from-violet-400 to-purple-500" },   // Purple - Branding
    { color: "#a78bfa", gradient: "from-violet-400 to-purple-500" },   // Purple - Guest Experience
    { color: "#a78bfa", gradient: "from-violet-400 to-purple-500" },  // Purple - Fabrication
]

// Pentagon positions for the orbital layout
// Calculated for a circle with radius 170px
// Starting from top (angle 0 = top), using: x = r * sin(angle), y = -r * cos(angle)
// For 5 modules: 360/5 = 72 degrees between each
const dummyModules = [
    {
        title: "Event Production",
        subtitle: "Complete Event Production Services",
        description: "Lighting & sound, Venue flow, Live Streaming, Editing & Event media direction, Photography, Videography, Highlight reels, Pre- During and Post event content support, MC, Translation Services"
    },
    {
        title: "Games and Activities",
        subtitle: "Entertainment & Interactive Activities",
        description: "Table & Board games, Inflatable Games, Giant Games, PS5 & kinect Games, Indoor & Outdoor Activities"
    },
    {
        title: "Branding",
        subtitle: "Creative Design & Branding Solutions",
        description: "Story boarding, Motion graphics, 2D/3D Design, Graphics, Branding, Printing, Giveaways & Gifts"
    },
    {
        title: "Guest Experience",
        subtitle: "Premium Guest Services",
        description: "Ushers & hosts, Registration, VIP support, Hospitality & comfort, Valet services, Catering, Cleaners, Security, Body guard"
    },
    {
        title: "Fabrication",
        subtitle: "Custom Installations & Structures",
        description: "Booths, Installations, Sculptural elements, Tent"
    }
]

const hexPositions = [
    { angle: 0, x: 0, y: -170 },          // Top: Event Production
    { angle: 72, x: 161.7, y: -52.5 },   // Top-right: Games and Activities
    { angle: 144, x: 99.9, y: 137.5 },   // Bottom-right: Branding
    { angle: 216, x: -99.9, y: 137.5 },  // Bottom-left: Guest Experience
    { angle: 288, x: -161.7, y: -52.5 }, // Top-left: Fabrication
]

export function ModulesSection() {

    const [activeModule, setActiveModule] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)
    const [isMounted, setIsMounted] = useState(false)
    const [containerWidth, setContainerWidth] = useState(1200)

    // Only render particles after mount to avoid hydration mismatch
    useEffect(() => {
        setIsMounted(true)
        setContainerWidth(typeof window !== "undefined" ? window.innerWidth : 1200)
        
        const handleResize = () => {
            setContainerWidth(window.innerWidth)
        }
        
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    // Use dummy data instead of translations
    const modules = dummyModules

    const modulesWithMetadata = modules.map((module, index) => ({
        ...module,
        icon: moduleIcons[index],
        ...moduleColors[index],
    }))

    //   // Auto-rotate through modules
    //   useEffect(() => {
    //     if (!isAutoPlaying) return
    //     const interval = setInterval(() => {
    //       setActiveModule((prev) => (prev + 1) % modules.length)
    //     }, 4000)
    //     return () => clearInterval(interval)
    //   }, [isAutoPlaying])

    return (
        <section className="w-full px-5 py-16 md:py-24 relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Central Glow */}
                <motion.div
                    className="absolute inset-0"
                    style={{
                        background: `radial-gradient(circle at center, #c4b5fd10 0%, transparent 70%)`,
                    }}
                />

                {/* Floating Particles */}
                {isMounted && [...Array(20)].map((_, i) => {
                    // Generate consistent random values per particle index
                    // Using a simple seeded random function based on index for deterministic values
                    const seed = i * 12345
                    const random1 = ((seed * 9301 + 49297) % 233280) / 233280
                    const random2 = ((seed * 9301 + 49297 + 1) % 233280) / 233280
                    const random3 = ((seed * 9301 + 49297 + 2) % 233280) / 233280
                    const random4 = ((seed * 9301 + 49297 + 3) % 233280) / 233280
                    
                    return (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 rounded-full bg-gray-900/30"
                            initial={{
                                x: random1 * containerWidth,
                                y: random2 * 800,
                            }}
                            animate={{
                                y: [null, -100],
                                opacity: [0, 1, 0],
                            }}
                            transition={{
                                duration: random3 * 3 + 2,
                                repeat: Number.POSITIVE_INFINITY,
                                delay: random4 * 2,
                            }}
                        />
                    )
                })}
            </div>

            {/* Header */}
            <div className="relative z-10 text-center mb-4">

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 tracking-tight"
                >
                    Our Services
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-lg text-gray-600 max-w-2xl mx-auto"
                >
                    Explore our comprehensive suite of services designed to make your events unforgettable
                </motion.p>
            </div>

            {/* Desktop: Orbital/Hexagonal Layout */}
            <div className="hidden lg:block relative z-10 max-w-6xl mx-auto">
                <div className="relative h-[600px] flex items-center justify-center">
                    {/* Connection Lines */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
                        <defs>
                            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.2" />
                                <stop offset="50%" stopColor="#a78bfa" stopOpacity="0.4" />
                                <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.2" />
                            </linearGradient>
                        </defs>
                        {/* Draw lines from center to each module */}
                        {hexPositions.map((pos, i) => (
                            <motion.line
                                key={i}
                                x1="50%"
                                y1="50%"
                                x2={`calc(50% + ${pos.x}px)`}
                                y2={`calc(50% + ${pos.y}px)`}
                                stroke="#a78bfa"
                                strokeWidth={activeModule === i ? 2.5 : 1.5}
                                strokeOpacity={activeModule === i ? 0.6 : 0.3}
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 0.8, delay: i * 0.1 }}
                            />
                        ))}
                        {/* Orbital Ring */}
                        <motion.circle
                            cx="50%"
                            cy="50%"
                            r="160"
                            fill="none"
                            stroke="#a78bfa"
                            strokeWidth="1.5"
                            strokeOpacity="0.3"
                            strokeDasharray="6 6"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 60, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                            style={{ transformOrigin: "center" }}
                        />
                    </svg>

                    {/* Center Hub */}
                    <motion.div
                        className="absolute z-20 w-32 h-32 rounded-full flex items-center justify-center"
                        style={{
                            background: `radial-gradient(circle, #c4b5fd30 0%, transparent 70%)`,
                        }}
                    >
                        <motion.div
                            className="w-24 h-24 rounded-full flex items-center justify-center"
                            style={{
                                background: `linear-gradient(135deg, #c4b5fd40, #c4b5fd20)`,
                                border: "2px solid #a78bfa60",
                            }}
                        >
                            <DollarSign className="w-12 h-12" style={{ color: "#a78bfa" }} />
                        </motion.div>
                    </motion.div>

                    {/* Module Nodes */}
                    {modulesWithMetadata.map((module, index) => {
                        const pos = hexPositions[index]
                        const isActive = activeModule === index
                        const Icon = module.icon

                        return (

                            <motion.div
                                key={index}
                                className="absolute cursor-pointer"
                                style={{
                                    left: `calc(46% + ${pos.x}px)`,
                                    top: `calc(43% + ${pos.y}px)`,
                                    transform: "translate(-50%, -50%)",
                                    zIndex: isActive ? 30 : 10,
                                }}
                                onMouseEnter={() => {
                                    setIsAutoPlaying(false)
                                    setActiveModule(index)
                                }}
                                onMouseLeave={() => setIsAutoPlaying(true)}
                                onClick={() => setActiveModule(index)}
                                whileHover={{ scale: 1.1 }}
                                animate={{
                                    scale: isActive ? 1.15 : 1,
                                }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            >
                                <Tooltip
                                    containerClassName="text-gray-600"
                                    content={module.description}
                                >
                                    {/* Hexagon Shape */}
                                    <div
                                        className={`
                    relative w-20 h-20 flex items-center justify-center
                    transition-all duration-500
                  `}
                                    >
                                        {/* Pentagon Background */}
                                        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
                                            <defs>
                                                <linearGradient id={`grad-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                                    <stop
                                                        offset="0%"
                                                        stopColor={isActive ? "#c4b5fd" : "#f3f4f6"}
                                                        stopOpacity={isActive ? 0.8 : 0}
                                                    />
                                                    <stop
                                                        offset="100%"
                                                        stopColor={isActive ? "#a78bfa" : "#f3f4f6"}
                                                        stopOpacity={isActive ? 0.6 : 0}
                                                    />
                                                </linearGradient>
                                            </defs>
                                            <polygon
                                                points="50,5 95.5,35.2 77.3,88.8 22.7,88.8 4.5,35.2"
                                                fill={isActive ? `url(#grad-${index})` : "transparent"}
                                                stroke={isActive ? "#a78bfa" : "#d1d5db"}
                                                strokeWidth={isActive ? 2.5 : 1.5}
                                                strokeOpacity={isActive ? 0.8 : 0.5}
                                            />
                                        </svg>

                                        {/* Icon */}
                                        <Icon
                                            className={`w-6 h-6 relative z-10 transition-colors duration-300`}
                                            style={{ color: isActive ? "#a78bfa" : "#9ca3af" }}
                                        />
                                    </div>

                                    {/* Label */}
                                    <motion.div
                                        className={`
                    absolute whitespace-nowrap text-center
                    ${pos.y < 0 ? "-top-12" : "top-full mt-2"}
                    left-1/2 -translate-x-1/2
                  `}
                                        animate={{
                                            opacity: isActive ? 1 : 0.5,
                                        }}
                                    >
                                        <span
                                            className="text-sm font-medium"
                                            style={{ color: isActive ? "#a78bfa" : "#6b7280" }}
                                        >
                                            {module.title}
                                        </span>
                                    </motion.div>
                                </Tooltip>

                            </motion.div>
                        )
                    })}


                </div>
            </div>

            {/* Mobile: 3D Card Stack */}
            <div className="lg:hidden relative z-10">
                <div className="relative h-[500px] flex items-center justify-center overflow-visible">
                    {modulesWithMetadata.map((module, index) => {
                        const Icon = module.icon
                        const isActive = activeModule === index
                        const offset = index - activeModule
                        const absOffset = Math.abs(offset)
                        
                        // Calculate z-index: active card on top, adjacent cards visible
                        const zIndexValue = modulesWithMetadata.length - absOffset
                        
                        // Show cards within range (current, prev, next, and one more on each side)
                        const isVisible = absOffset <= 2
                        
                        // Better positioning: cards spread horizontally with slight vertical offset
                        const xOffset = offset * 40 // Increased horizontal spacing
                        const yOffset = absOffset * 15 // Slight vertical offset for depth
                        
                        // Opacity: keep adjacent cards visible
                        const opacityValue = isVisible 
                            ? (isActive ? 1 : 0.6 - absOffset * 0.15)
                            : 0

                        return (
                            <motion.div
                                key={index}
                                className="absolute w-[85%] max-w-[320px] cursor-pointer"
                                initial={false}
                                animate={{
                                    x: xOffset,
                                    y: yOffset,
                                    scale: isActive ? 1 : 0.85 - absOffset * 0.05,
                                    opacity: 1,
                                }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                onClick={() => setActiveModule(index)}
                                style={{ 
                                    zIndex: zIndexValue,
                                    pointerEvents: isVisible ? "auto" : "none"
                                }}
                            >

                                <div
                                    className="p-6 rounded-3xl backdrop-blur-xl border-2 h-[380px] flex flex-col bg-white/90"
                                    style={{
                                        background: `linear-gradient(135deg, ${module.color}15, white)`,
                                        borderColor: `${module.color}40`,
                                    }}
                                >
                                    {/* Module Number */}
                                    <div className="flex justify-between items-start mb-6">
                                        <div
                                            className="w-14 h-14 rounded-2xl flex items-center justify-center"
                                            style={{ background: `${module.color}20` }}
                                        >
                                            <Icon className="w-7 h-7" style={{ color: module.color }} />
                                        </div>
                                        <span className="text-5xl font-bold" style={{ color: `${module.color}20` }}>
                                            {String(index + 1).padStart(2, "0")}
                                        </span>
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{module.title}</h3>
                                    <p className="text-base mb-4" style={{ color: module.color }}>
                                        {module.subtitle}
                                    </p>
                                    <p className="text-sm text-gray-600 leading-relaxed flex-1">
                                        {module.description}
                                    </p>

                                    {/* Swipe Indicator */}
                                    {isActive && (
                                        <motion.div
                                            className="mt-4 flex justify-center gap-2"
                                            
                                        >
                                            {modulesWithMetadata.map((_, i) => (
                                                <div
                                                    key={i}
                                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${i === activeModule ? "w-6" : ""
                                                        }`}
                                                    style={{
                                                        background: i === activeModule ? module.color : "rgba(0, 0, 0, 0.2)",
                                                    }}
                                                />
                                            ))}
                                        </motion.div>
                                    )}
                                </div>
                            </motion.div>
                        )
                    })}
                </div>

                {/* Mobile Navigation Buttons */}
                <div className="flex justify-center gap-4 mt-4">
                    <button
                        onClick={() => {
                            setActiveModule((prev) => (prev - 1 + modulesWithMetadata.length) % modulesWithMetadata.length)
                        }}
                        className="p-4 rounded-full bg-gray-900/10 border-2 border-gray-900/20 hover:bg-gray-900/20 transition-colors"
                    >
                        <svg 
                            className="w-5 h-5 text-gray-900" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                            style={{ transform: "scaleX(-1)" }}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                    <button
                        onClick={() => {
                            setActiveModule((prev) => (prev + 1) % modulesWithMetadata.length)
                        }}
                        className="p-4 rounded-full bg-gray-900/10 border-2 border-gray-900/20 hover:bg-gray-900/20 transition-colors"
                    >
                        <svg 
                            className="w-5 h-5 text-gray-900" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                            style={{ transform: "scaleX(-1)" }}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    )
}
