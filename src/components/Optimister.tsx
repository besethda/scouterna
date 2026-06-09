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
        <div className='w-full pb-6 pt-6 lg:max-w-430 lg:px-22 px-4 overflow-hidden'>
            <div className=''>
                <div className='flex flex-col gap-2 py-4 lg:w-120'>
                    <h2 className='text-h2 font-fraunces font-bold text-primary lg:text-h2-desktop'>{title}</h2>
                    <p className='text-body text-text-black font-albert lg:text-body-desktop'>{text}</p>
                </div>
                <div ref={middleImageRef}
                    style={{}}
                    className="overflow-x-auto scroll-smooth snap-x snap-mandatory snap-center scrollbar-none flex flex-row gap-4 px-[15vw] w-full
                    mx-auto lg:px-0 lg:max-w-420 lg:snap-none lg:justify-center"
                >
                    {images.map((imgbox: any, index: number) => (
                        <div
                            key={index}
                            className='w-75 h-52 snap-center shrink-0 relative overflow-hidden rounded-2xl 
                            lg:snap-none'
                        >
                            <Image
                                src={imgbox}
                                alt={"images"}
                                width={300}
                                height={212}
                                className="object-cover aspect-7/5"
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