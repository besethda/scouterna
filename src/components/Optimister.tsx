'use client'


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import Image01 from '../../public/images/DSCF3033.jpg';
import Image02 from '../../public/images/DSCF3036.jpg'
import Image03 from '../../public/images/DSCF3017.jpg'

interface OptimisterProps {
    title:string,
    text:string
}



const Optimister = ({title,text}:OptimisterProps) => {
    const images = [Image01, Image02,Image03,Image01,Image02,Image03];
    return (
        <div className='w-full '>
            <div>
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
            <Swiper
                slidesPerView={2} 
                centeredSlides={true}
                spaceBetween={12}
                loop={true}
                
                breakpoints={{
                    1024: {
                    enabled: false, 
                    centeredSlides: false,
                    },
                }}
                className='w-full! flex justify-center lg:gap-6 lg:transform-non!'
            >
                {images.map((imageFile:any,index:number) => (
                    <SwiperSlide 
                        key={index}
                        className={`h-auto w-[210px] shrink-0  lg:w-87.25! lg:shrink-0!
                            ${index >= 3 ? 'lg:hidden' : ''}`}
                    >
                    <div className="flex  gap-3">
                        <div className='relative w-full h-25 overflow-hidden rounded-2xl lg:w-full lg:h-52'>
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