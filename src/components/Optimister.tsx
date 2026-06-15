'use client'

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
interface OptimisterProps {
    title: {en:string, sv:string};
    text: {en:string, sv:string};
    images: imageObjectType[];
    locale:string
}

export type imageObjectType = {
    description_en:string,
    description_sv:string,
    title_en:string,
    title_sv:string
    alt:string
    asset: {_ref:string}
}

const Optimister = ({ title, text, images, locale }: OptimisterProps) => {
    const middleImageRef = useRef<HTMLDivElement>(null);
    const [galleryOpen, setGalleryOpen] = useState(false)
    const [currentImage, setCurrentImage] = useState<number|null>(null)
    const [arrowsShown, setArrowsShown] = useState(false)

    useEffect(() => {
        const container = middleImageRef.current;
        if (window.innerWidth < 1024 && container) {
            const maxScroll = container.scrollWidth - container.clientWidth;
            container.scrollLeft = maxScroll / 2;
        }
    }, []);

    useEffect(()=> {
        const checkWindow = () => {
            if(window.innerWidth > 1500 && images.length > 4) {
                setArrowsShown(true)
            } else if(window.innerWidth < (images.length * 340)) {
                setArrowsShown(true)
            }
        }
        checkWindow()
    },[])

    const move = (forward:boolean) => {
        const container = middleImageRef.current;
        container?.scrollBy({left: (forward ? 340 : -340), behavior: 'smooth'})
    }

    const forwardPhoto = (click:React.MouseEvent, index:number) => {
        click.stopPropagation()
        images.length > index ? setCurrentImage(index) : setCurrentImage(0)
    }

    const backPhoto = (click:React.MouseEvent, index:number) => {
        click.stopPropagation()
        index === -1 ? setCurrentImage(images.length - 1) : setCurrentImage(index)
    }

    const shortenText = (text:string) => {
        return(`${text.slice(0, 25)}${text.length > 25 ? "..." : ""}`)
    }

    return (
        <div className='w-full relative pb-6 pt-6 py-4 px-4 overflow-hidden'>
            {galleryOpen && <div onClick={()=> setGalleryOpen(false)} className='fixed hidden w-screen h-screen bg-gray-800/50 backdrop-blur-sm top-0 left-0 z-70 md:flex items-center justify-center overscroll-contain overflow-hidden'>
                {currentImage !== null && <div className={'h-[80%] md:w-[80%] w-75% flex flex-col items-center overflow-hidden'}>
                    <div className='h-[80%] w-full relative rounded-3xl overflow-hidden'>
                        <Image src={urlFor(images[currentImage].asset._ref).url()} alt={images[currentImage].alt} fill className='object-contain rounded-3xl'/>
                    </div>
                    <div className='w-fit min-w-50 mt-[1%] max-h-[19%] rounded-3xl bg-bg-white'>
                        <div className='text-primary font-fraunces text-center text-h3 md:text-h3-desktop font-bold py-3 px-5 '>{locale === "sv" ? images[currentImage].title_sv : images[currentImage].title_en}</div>
                        <div className='text-text-black font-fraunces text-center text-body md:text-body-desktop pb-3 px-5 '>{locale === "sv" ? images[currentImage].description_sv : images[currentImage].description_en}</div>
                    </div>
                </div>}
                <div className='absolute w-full h-full flex items-center justify-between md:pb-[20vh] lg:px-8'>
                    <div  className='md:w-20 w-12 h-full flex items-center justify-center'>
                        <svg onClick={(e)=> backPhoto(e, (currentImage !==null ? currentImage - 1 : 0))} className="pointer-events-auto active:drop-shadow-none drop-shadow-lg hover:scale-105 -rotate-90 duration-100 fill-text-white active:fill-text-gray/90 active:scale-95 cursor-pointer" width="30" height="30" viewBox="144 144 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m399.44 263.41 189.21 221.68c10.078 11.195 8.3984 29.668-2.8008 39.184-11.195 9.5156-29.668 8.3984-39.184-2.8008l-147.22-170.73-147.22 170.73c-10.078 11.195-27.988 12.875-39.184 2.8008-11.195-10.078-12.875-27.988-2.8008-39.184z"/></svg>
                    </div>
                    <div className='md:w-20 w-12 h-full flex items-center justify-center'>
                        <svg onClick={(e)=> forwardPhoto(e, (currentImage !==null ? currentImage + 1 : 0))} className="pointer-events-auto active:drop-shadow-none drop-shadow-lg hover:scale-105 rotate-90 duration-100 fill-text-white active:fill-text-gray/90 active:scale-95 cursor-pointer" width="30" height="30" viewBox="144 144 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m399.44 263.41 189.21 221.68c10.078 11.195 8.3984 29.668-2.8008 39.184-11.195 9.5156-29.668 8.3984-39.184-2.8008l-147.22-170.73-147.22 170.73c-10.078 11.195-27.988 12.875-39.184 2.8008-11.195-10.078-12.875-27.988-2.8008-39.184z"/></svg>
                    </div>
                </div>
            </div>}
            <div>
                <div className='flex flex-col gap-2 lg:w-120 pb-4'>
                    <h2 className='text-h2 font-fraunces font-bold text-primary lg:text-h2-desktop'>{locale === "sv" ? title.sv : title.en}</h2>
                    <p className='text-body text-text-black font-albert lg:text-body-desktop'>{locale === "sv" ? text.sv : text.en}</p>
                </div>
                     <div className='w-full relative flex'>
                     {arrowsShown && <div className='w-full pb-7 h-full absolute z-7 flex justify-between items-center px-3 pointer-events-none'>
                    <svg onClick={()=> move(false)} className="pointer-events-auto active:drop-shadow-none drop-shadow-lg drop-shadow-white hidden md:block hover:scale-105 -rotate-90 duration-100 fill-text-black active:fill-text-gray/90 active:scale-95 cursor-pointer" width="30" height="30" viewBox="144 144 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m399.44 263.41 189.21 221.68c10.078 11.195 8.3984 29.668-2.8008 39.184-11.195 9.5156-29.668 8.3984-39.184-2.8008l-147.22-170.73-147.22 170.73c-10.078 11.195-27.988 12.875-39.184 2.8008-11.195-10.078-12.875-27.988-2.8008-39.184z"/></svg>
                    <svg onClick={()=> move(true)} className="pointer-events-auto active:drop-shadow-none drop-shadow-lg drop-shadow-white hidden md:block hover:scale-105 rotate-90 duration-100 fill-text-black active:fill-text-gray/90 active:scale-95 cursor-pointer" width="30" height="30" viewBox="144 144 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m399.44 263.41 189.21 221.68c10.078 11.195 8.3984 29.668-2.8008 39.184-11.195 9.5156-29.668 8.3984-39.184-2.8008l-147.22-170.73-147.22 170.73c-10.078 11.195-27.988 12.875-39.184 2.8008-11.195-10.078-12.875-27.988-2.8008-39.184z"/></svg>
                    </div>
                    }
                    <div ref={middleImageRef}
                        className={`overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-none flex
                        lg:px-0 lg:snap-none px-10`}
                    >
                        {images.map((imgbox: any, index: number) => (
                            <div
                                key={index}
                                onClick={()=>{setGalleryOpen(true); setCurrentImage(index)}}
                                className='w-75 h-65 hover:brightness-110 duration-150 group md:cursor-pointer flex flex-col mx-2 snap-center shrink-0 relative rounded-2xl 
                                lg:snap-none'>
                                <Image
                                    src={urlFor(imgbox.asset._ref).url()}
                                    alt={imgbox.alt}
                                    width={300}
                                    height={212}
                                    className="object-cover aspect-7/5 rounded-3xl w-75 h-53"
                                    priority={index === 1}
                                />
                                <div className='text-body mt-2 font-bold group-hover:opacity-70 font-fraunces px-4 rounded-3xl text-center grow text-primary '>{locale === "sv" ? shortenText(imgbox?.title_sv) : shortenText(imgbox?.title_en)}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Optimister;