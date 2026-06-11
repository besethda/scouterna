'use client'

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';

interface OptimisterProps {
    title: {en:string, sv:string};
    text: {en:string, sv:string};
    images: any[];
    locale:string
}

const Optimister = ({ title, text, images, locale }: OptimisterProps) => {
    const middleImageRef = useRef<HTMLDivElement>(null);
    const [galleryOpen, setGalleryOpen] = useState(false)
    const [currentImage, setCurrentImage] = useState<number|null>(null)

    useEffect(() => {
        const container = middleImageRef.current;
        if (window.innerWidth < 1024 && container) {
            const maxScroll = container.scrollWidth - container.clientWidth;
            container.scrollLeft = maxScroll / 2;
        }
    }, []);

    const move = (forward:boolean) => {
        const container = middleImageRef.current;
        container?.scrollBy({left: (forward ? 340 : -340), behavior: 'smooth'})
    }

    const changePhoto = () => {
    
    }

    return (
        <div className='w-full relative pb-6 pt-6 lg:max-w-430 lg:px-22 px-4 overflow-hidden'>
            {galleryOpen && <div onClick={()=> setGalleryOpen(false)} className='fixed w-screen h-screen bg-gray-800/50 backdrop-blur-sm top-0 left-0 z-70 flex items-center justify-center overscroll-contain overflow-hidden'>
                {currentImage !== null && <div className='h-[80%] w-[80%] overflow-hidden relative '>
                    <Image src={urlFor(images[currentImage].asset._ref).url()} alt={images[currentImage].alt} fill className='object-contain'/>
                </div>}
                <div className='absolute w-full h-full flex items-center justify-between lg:px-8'>
                    <div  className='md:w-20 w-12 h-full flex items-center justify-center'>
                        <svg onClick={()=> move(true)} className="pointer-events-auto active:drop-shadow-none drop-shadow-lg hover:scale-105 -rotate-90 duration-100 fill-text-white active:fill-text-gray/90 active:scale-95 cursor-pointer" width="30" height="30" viewBox="144 144 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m399.44 263.41 189.21 221.68c10.078 11.195 8.3984 29.668-2.8008 39.184-11.195 9.5156-29.668 8.3984-39.184-2.8008l-147.22-170.73-147.22 170.73c-10.078 11.195-27.988 12.875-39.184 2.8008-11.195-10.078-12.875-27.988-2.8008-39.184z"/></svg>
                    </div>
                    <div className='md:w-20 w-12 h-full flex items-center justify-center'>
                        <svg onClick={()=> move(true)} className="pointer-events-auto active:drop-shadow-none drop-shadow-lg hover:scale-105 rotate-90 duration-100 fill-text-white active:fill-text-gray/90 active:scale-95 cursor-pointer" width="30" height="30" viewBox="144 144 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m399.44 263.41 189.21 221.68c10.078 11.195 8.3984 29.668-2.8008 39.184-11.195 9.5156-29.668 8.3984-39.184-2.8008l-147.22-170.73-147.22 170.73c-10.078 11.195-27.988 12.875-39.184 2.8008-11.195-10.078-12.875-27.988-2.8008-39.184z"/></svg>
                    </div>
                </div>
            </div>}
            <div className=''>
                <div className='flex flex-col gap-2 py-4 lg:w-120'>
                    <h2 className='text-h2 font-fraunces font-bold text-primary lg:text-h2-desktop'>{locale === "sv" ? title.sv : title.en}</h2>
                    <p className='text-body text-text-black font-albert lg:text-body-desktop'>{locale === "sv" ? text.sv : text.en}</p>
                </div>
                     <div className='w-full relative flex'>
                     {images.length > 4 &&<div className='w-full h-full absolute z-7 flex justify-between items-center px-3 pointer-events-none'>
                    <svg onClick={()=> move(false)} className="pointer-events-auto active:drop-shadow-none drop-shadow-lg drop-shadow-white hidden md:block hover:scale-105 -rotate-90 duration-100 fill-text-black active:fill-text-gray/90 active:scale-95 cursor-pointer" width="30" height="30" viewBox="144 144 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m399.44 263.41 189.21 221.68c10.078 11.195 8.3984 29.668-2.8008 39.184-11.195 9.5156-29.668 8.3984-39.184-2.8008l-147.22-170.73-147.22 170.73c-10.078 11.195-27.988 12.875-39.184 2.8008-11.195-10.078-12.875-27.988-2.8008-39.184z"/></svg>
                    <svg onClick={()=> move(true)} className="pointer-events-auto active:drop-shadow-none drop-shadow-lg drop-shadow-white hidden md:block hover:scale-105 rotate-90 duration-100 fill-text-black active:fill-text-gray/90 active:scale-95 cursor-pointer" width="30" height="30" viewBox="144 144 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m399.44 263.41 189.21 221.68c10.078 11.195 8.3984 29.668-2.8008 39.184-11.195 9.5156-29.668 8.3984-39.184-2.8008l-147.22-170.73-147.22 170.73c-10.078 11.195-27.988 12.875-39.184 2.8008-11.195-10.078-12.875-27.988-2.8008-39.184z"/></svg>
                    </div>}
                    <div ref={middleImageRef}
                        style={{}}
                        className="overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-none flex
                        lg:px-0 lg:snap-none px-10"
                    >
                        {images.map((imgbox: any, index: number) => (
                            <div
                                key={index}
                                onClick={()=>{setGalleryOpen(true); setCurrentImage(index)}}
                                className='w-75 h-52 cursor-pointer mx-2 snap-center shrink-0 relative overflow-hidden rounded-2xl 
                                lg:snap-none'
                            >
                                <Image
                                    src={urlFor(imgbox.asset._ref).url()}
                                    alt={imgbox.alt}
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
        </div>
    );
};

export default Optimister;