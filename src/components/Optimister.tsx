'use client'

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Image01 from '../../public/images/DSCF3033.jpg';
import Image02 from '../../public/images/DSCF3036.jpg';
import Image03 from '../../public/images/DSCF3017.jpg';

interface OptimisterProps {
    title: string;
    text: string;
}

const Optimister = ({ title, text }: OptimisterProps) => {
    const images = [Image01, Image02, Image03];
    
    const middleImageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (window.innerWidth < 1024 && middleImageRef.current) {
            middleImageRef.current.scrollIntoView({
                behavior: 'auto', 
                inline: 'center'  
            });
        }
    }, []);

    return (
        <div className='w-full bg-bg-blue pb-13.25 overflow-hidden'>
            <div className='mx-auto w-[80%]'>
                <div className='flex flex-col gap-2 py-4 '>
                    <h2 className='text-big-body font-albert text-primary'>{title}</h2>
                    <p className='text-body font-albert'>{text}</p>
                </div>
                <div className="overflow-x-auto scroll-smooth snap-x snap-mandatory snap-center scrollbar-none flex flex-row gap-4 px-[15vw] w-full
                    mx-auto lg:px-0 lg:overflow-x-visible lg:snap-none lg:justify-center"
                >
                    {images.map((imgbox: any, index: number) => (
                        <div 
                            key={index}
                            ref={index === 1 ? middleImageRef : null}
                            className='w-[70vw] h-44 snap-center shrink-0 relative overflow-hidden rounded-2xl 
                            lg:w-full lg:flex-1 lg:h-52 lg:snap-none' 
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