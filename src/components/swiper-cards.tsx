'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { SlideshowLightbox } from 'lightbox.js-react';
import { useMemo } from 'react';
import { ChevronRight } from 'lucide-react';

interface SwiperCardsProps {
  data: {
    name: string;
    logo: string;
    photos: string[];
    bg: 'white' | 'dark';
  };
  className?: string;
}

export function SwiperCards({ data, className }: SwiperCardsProps) {
  const { name, logo, photos, bg } = data;
  
  const lightboxIdentifier = useMemo(() => {
    return `lightbox-${name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
  }, [name]);

  const images = useMemo(() => {
    return photos.map((photo) => ({
      src: photo,
      alt: `${name} - ${photo.split('/').pop()}`,
    }));
  }, [photos, name]);

  const displayedPhotos = useMemo(() => {
    return photos.length > 3 ? photos.slice(0, 3) : photos;
  }, [photos]);

  const hasMorePhotos = photos.length > 3;

  return (
    <SlideshowLightbox
      lightboxIdentifier={lightboxIdentifier}
      framework="next"
      images={images}
      showThumbnails={true}
    >
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className={cn("mySwiper h-full", className)}
      >
        {displayedPhotos.map((photo: string, index: number) => (
          <SwiperSlide key={index} className="h-full rounded-xl w-full relative group cursor-pointer">
            <div
              className="absolute top-0 left-0 right-0 bottom-0 w-full h-full z-20 pointer-events-none"
              style={{
                background: bg === "white" ? 'linear-gradient(180deg, rgba(0, 0, 0, 0) 40%, #ffffff9a 83.46%)' : 'linear-gradient(180deg, rgba(0, 0, 0, 0) 40%, #0000009a 83.46%)',
              }}
            />
            <div className='absolute top-4 left-4 dark:bg-black bg-white px-2 py-1 rounded-full text-xs border pointer-events-none z-30'>
              {name}
            </div>
            <div className='absolute bottom-4 right-0 z-20 w-full px-6 pointer-events-none'>
              <Image src={logo} alt={name} quality={100} className='w-full h-full object-contain' width={1000} height={0} />
            </div>
            <Image
              src={photo}
              alt={`${name} - Image ${index + 1}`}
              className="w-full h-full object-cover"
              width={1000}
              height={1000}
              data-lightboxjs={lightboxIdentifier}
              quality={80}
              loading={index === 0 ? 'eager' : 'lazy'}
            />
          </SwiperSlide>
        ))}
        {hasMorePhotos && (
          <SwiperSlide className="h-full rounded-xl w-full relative group cursor-pointer border">
            <div className='h-full w-full relative'>
              <div
                className="absolute top-0 dark:!bg-black !bg-white left-0 right-0 bottom-0 w-full h-full z-20 pointer-events-none"
              />
              <div 
                className="absolute inset-0 flex items-center justify-center z-30 pointer-events-auto"
                data-lightboxjs={lightboxIdentifier}
              >
                <div className='flex items-center justify-center gap-2 dark:bg-black bg-white px-4 py-2 rounded-full border-2 border-foreground/20 hover:border-foreground/40 transition-colors'>
                  <ChevronRight className="w-6 h-6 text-foreground" />
                  <span className="text-sm font-medium dark:text-white text-black">View more</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        )}
      </Swiper>
    </SlideshowLightbox>
  );
}

