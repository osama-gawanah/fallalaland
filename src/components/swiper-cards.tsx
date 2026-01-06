'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import Image from 'next/image';

export function SwiperCards() {
    return (
        <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
        >
            <SwiperSlide className="h-full rounded-xl relative group">
                <div
                    className="absolute top-0 left-0 right-0 bottom-0 w-full h-full z-20"
                    style={{
                        background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 40%, #0000009a 83.46%)',
                    }}
                />
                <h2 className="absolute top-4 left-4 rounded-full text-xs z-50 bg-background/80 backdrop-blur-sm w-fit px-2 py-1">Dammam Integrated Logistics Zone.</h2>

                <div className=' absolute bottom-4 right-0 z-20 w-full '>
                    <Image src="/events/dammam-integrated-logistics-zone/logo.png" alt="Swiper Card 1" className='w-full h-full object-contain' width={1000} height={0} />
                </div>
                <Image
                    src="/events/dammam-integrated-logistics-zone/1.png"
                    alt="Swiper Card 1"
                    className="w-full h-full object-contain"
                    width={1000}
                    height={1000}
                />
            </SwiperSlide>
            <SwiperSlide className="h-full rounded-xl relative group">
                <div
                    className="absolute top-0 left-0 right-0 bottom-0 w-full h-full z-20"
                    style={{
                        background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 40%, #0000009a 83.46%)',
                    }}
                />
                <div className=' absolute bottom-4 right-0 z-20 w-full '>
                    <Image src="/events/dammam-integrated-logistics-zone/logo.png" alt="Swiper Card 1" className='w-full h-full object-contain' width={1000} height={0} />
                </div>
                <Image
                    src="/events/dammam-integrated-logistics-zone/2.png"
                    alt="Swiper Card 1"
                    className="w-full h-full object-contain"
                    width={1000}
                    height={1000}
                />
            </SwiperSlide> <SwiperSlide className="h-full rounded-xl relative group">
                <div
                    className="absolute top-0 left-0 right-0 bottom-0 w-full h-full z-20"
                    style={{
                        background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 40%, #0000009a 83.46%)',
                    }}
                />
                <div className=' absolute bottom-4 right-0 z-20 w-full '>
                    <Image src="/events/dammam-integrated-logistics-zone/logo.png" alt="Swiper Card 1" className='w-full h-full object-contain' width={1000} height={0} />
                </div>
                <Image
                    src="/events/dammam-integrated-logistics-zone/1.png"
                    alt="Swiper Card 1"
                    className="w-full h-full object-contain"
                    width={1000}
                    height={1000}
                />
            </SwiperSlide> <SwiperSlide className="h-full rounded-xl relative group">
                <div
                    className="absolute top-0 left-0 right-0 bottom-0 w-full h-full z-20"
                    style={{
                        background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 40%, #0000009a 83.46%)',
                    }}
                />
                <div className=' absolute bottom-4 right-0 z-20 w-full '>
                    <Image src="/events/dammam-integrated-logistics-zone/logo.png" alt="Swiper Card 1" className='w-full h-full object-contain' width={1000} height={0} />
                </div>
                <Image
                    src="/events/dammam-integrated-logistics-zone/2.png"
                    alt="Swiper Card 1"
                    className="w-full h-full object-contain"
                    width={1000}
                    height={1000}
                />
            </SwiperSlide>
        </Swiper>
    );
}

