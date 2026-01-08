'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export function SwiperCards({ data, className }: { data: any, className?: string }) {
    const { name, logo, photos, bg } = data;
    return (
        <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards]}
            className={cn("mySwiper", className)}
        >
            {photos.map((photo: string, index: number) => (
                <SwiperSlide key={index} className="h-full rounded-xl w-full relative group">
                    <div
                        className="absolute top-0 left-0 right-0 bottom-0 w-full h-full z-20"
                        style={{
                            background: bg === "white" ? 'linear-gradient(180deg, rgba(0, 0, 0, 0) 40%, #ffffff9a 83.46%)' : 'linear-gradient(180deg, rgba(0, 0, 0, 0) 40%, #0000009a 83.46%)',
                        }}
                    />
                    <div className='absolute top-4 left-4 dark:bg-black bg-white px-2 py-1 rounded-full text-xs border'>
                        {name}
                    </div>
                    <div className=' absolute bottom-4 right-0 z-20 w-full px-6'>
                        <Image src={logo} alt={name} quality={100} className='w-full h-full object-contain' width={1000} height={0} />
                    </div>
                    <Image
                        src={photo}
                        alt={name}
                        className="w-full h-full object-cover"
                        width={1000}
                        height={1000}
                    />
                </SwiperSlide>
            ))}



        </Swiper>
    );
}

