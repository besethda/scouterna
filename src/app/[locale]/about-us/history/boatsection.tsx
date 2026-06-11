"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import { urlFor } from "@/sanity/lib/image"

const BoatSection = ({images}:{images:any[]}) => {
  
const middleImageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = middleImageRef.current;

        if (window.innerWidth < 1024 && container) {
            const maxScroll = container.scrollWidth - container.clientWidth;
            container.scrollLeft = maxScroll / 2;
        }
    }, []);

  const move = (forwards:boolean) => {
    const container = middleImageRef.current
    container?.scrollBy({left: (forwards ? 360 : -360), behavior: 'smooth'})
}

return (
  <div className="w-full pb-16 pt-6">
    {images && <div className={`w-full ${images.length < 4 && "justify-center"} relative flex`}>
      {images.length > 4 && <div className={`w-full h-full absolute z-20 flex justify-between items-center px-3 pointer-events-none`}>
        <svg onClick={()=> move(false)} className="pointer-events-auto hidden md:block hover:scale-105 -rotate-90 duration-100 fill-text-black active:fill-text-gray/90 active:scale-95 cursor-pointer" width="30" height="30" viewBox="144 144 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m399.44 263.41 189.21 221.68c10.078 11.195 8.3984 29.668-2.8008 39.184-11.195 9.5156-29.668 8.3984-39.184-2.8008l-147.22-170.73-147.22 170.73c-10.078 11.195-27.988 12.875-39.184 2.8008-11.195-10.078-12.875-27.988-2.8008-39.184z"/></svg>
        <svg onClick={()=> move(true)} className="pointer-events-auto hidden md:block hover:scale-105 rotate-90 duration-100 fill-text-black active:fill-text-gray/90 active:scale-95 cursor-pointer" width="30" height="30" viewBox="144 144 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m399.44 263.41 189.21 221.68c10.078 11.195 8.3984 29.668-2.8008 39.184-11.195 9.5156-29.668 8.3984-39.184-2.8008l-147.22-170.73-147.22 170.73c-10.078 11.195-27.988 12.875-39.184 2.8008-11.195-10.078-12.875-27.988-2.8008-39.184z"/></svg>
      </div>}
      <div ref={middleImageRef}
        className={`overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-none flex
        lg:px-0 lg:snap-none px-10`}>
        {images && images?.map((imgbox: any, index: number) => (
          <div
              key={index}
              className='w-75 h-52 mx-2 snap-center shrink-0 relative overflow-hidden rounded-2xl lg:snap-none'>
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
  </div>}
</div>
)
}

export default BoatSection

