'use client'


import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay} from 'swiper/modules';
import 'swiper/css';
import Image from 'next/image';
import Image01 from '../../public/images/DSCF3033.jpg';
import Image02 from '../../public/images/DSCF3036.jpg'
import Image03 from '../../public/images/DSCF3017.jpg'



const Optimister = () => {
    const images = [Image01, Image02,Image03,Image01,Image02,Image03];
    return (
        <div className='w-full'>
            <Swiper
                modules={[Autoplay]}
                slidesPerView={2} 
                centeredSlides={true}
                spaceBetween={16}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    1024: {
                    enabled: false, 
                    centeredSlides: false,
                    },
                }}
                className='w-full! md:flex! md:flex-row! md:justify-between! md:gap-6 md:transform-non!'
            >
                {images.map((imageFile:any,index:number) => (
                    <SwiperSlide 
                        key={index}
                        className={`h-auto w-52.5  md:w-[calc(40%-16px)]! 
                            ${index >= 3 ? 'md:hidden' : ''}`}
                    >
                    <div className="flex  gap-3">
                        <div className='relative w-52.5 h-25 overflow-hidden rounded-2xl md:w-48 md:h-52'>
                            <Image 
                                src={imageFile}
                                alt={`slide img ${index + 1}`}
                                fill
                                className='object-cover'
                                priority={index < 3}
                                />
                        </div>
                        </div>
                    </SwiperSlide>
                ))}
                
            </Swiper>   
        </div>
    )
}

export default Optimister