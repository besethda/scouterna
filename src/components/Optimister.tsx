'use client'

import { useEffect, useRef, useState } from 'react';
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

    const [isZoomed, setIsZoomed] = useState<number | null>(null)

    const handleClick = (index:number) => {
        setIsZoomed(isZoomed === index ? null : index);
    }

    return (
        <div className='w-full pb-6 pt-6 lg:max-w-430 lg:px-22 px-4 overflow-hidden'>
            <div className=''>
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
                            onClick={() => handleClick(index)}
                            className={`
                                ${isZoomed === index 
                                    ? 'fixed! inset-0 z-50 items-center justify-center bg-black/60 backdrop-blur-md cursor-zoom-out w-screen h-screen m-0 ' 
                                    :' w-52.5 h-25  shrink-0 lg:w-[33vw] lg:flex-1 lg:h-52 lg:snap-none rounded-2xl'
                                } 
                                snap-center relative overflow-hidden
                            `} 
                        >
                            <Image
                                src={imgbox}
                                alt={"images"}
                                fill
                                className={`${isZoomed === index 
                                    ? 'object-contain w-[70vw]! h-auto! p-4 mx-auto top-1/2! left-1/2! -translate-x-1/2! -translate-y-1/2!' 
                                    :'object-cover'
                                    }
                                `} 
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