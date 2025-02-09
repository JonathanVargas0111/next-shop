'use client'
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './slideshow.css'; 


interface Props {
    images: string[];
    title: string;
    className?: string
}

export function ProductMobileSlideshow({ images, title, className }: Props) {

    return (
        <div className={`${className}`}>
            <Swiper
                style={{
                    width: '100vw',
                    height: '500px'
                }}
                pagination
                autoplay={
                    { delay: 2500 }
                }
                modules={[FreeMode, Autoplay, Pagination]}
                className="mySwiper2"
            >
                {
                    images.map(image => (
                        <SwiperSlide key={image}>
                            <Image
                                width={1024}
                                height={800}
                                src={`/products/${image}`}
                                alt={title}
                                className='rounded-lg object-fill'
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
}   