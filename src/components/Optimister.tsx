'use client'

import { useEffect, useRef } from 'react';
import Image from 'next/image';

interface OptimisterProps {
    title: string;
    text: string;
    images: any[];
}

const Optimister = ({ title, text, images }: OptimisterProps) => {
    const middleImageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = middleImageRef.current;
        
        if (window.innerWidth < 1024 && container) {
            const maxScroll = container.scrollWidth - container.clientWidth;
            container.scrollLeft = maxScroll / 2; 
        }
    }, []);

    return (
        <div className='w-full bg-bg-blue pb-13.25 pt-13 overflow-hidden'>
            <div className='mx-auto w-[80%]'>
                <div className='flex flex-col gap-2 py-4 lg:w-120'>
                    <h2 className='text-h2 font-albert text-primary lg:text-h2-desktop'>{title}</h2>
                    <p className='text-body text-text-black font-albert lg:text-body-desktop'>{text}</p>
                </div>
                <div
                    ref={middleImageRef}
                    className="overflow-x-auto scroll-smooth snap-x snap-mandatory snap-center scrollbar-none flex flex-row gap-4 px-[15vw] w-full
                    mx-auto lg:px-0 lg:overflow-x-visible lg:snap-none lg:justify-center"
                >
                    {images.map((imgbox: any, index: number) => (
                        <div 
                            key={index}
                            className='w-52.5 h-25 snap-center shrink-0 relative overflow-hidden rounded-2xl 
                            lg:w-[33vw] lg:flex-1 lg:h-52 lg:snap-none' 
                        >
                            <Image
                                src={imgbox}
                                alt={"images"}
                                fill
                                className="object-cover" 
                                priority={index === 1}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Optimister;