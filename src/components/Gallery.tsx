"use client"

import Image from "next/image"
import { useRef, useState } from "react"

export type instaType = {
  mediaUrl:string
  permalink: string
  mediaType: string
  caption: string
  timestamp: number 
  imageIndex: number
}

const Gallery = ({caption=false, photoObject}:{caption?:boolean, photoObject: instaType[]}) => {

  const [imageIndex, setImageIndex] = useState(0)
  const [currentImages, setCurrentImages] = useState(photoObject.map(e=> e.imageIndex))
  const containerReference = useRef<HTMLDivElement>(null)
  const dotArray:instaType[] = photoObject.filter((e, i)=> {
    if(i !== 0 && i !== photoObject.length - 1) {
      return e
    }})

  const scroll = () => {
    if(containerReference.current){
      const scrollWidth = containerReference.current.scrollWidth
      const singlePicWidth = scrollWidth * .16667
      const scrollLeft = containerReference.current.scrollLeft
      const snappedIndex = Math.round(scrollLeft / singlePicWidth)
      setImageIndex(snappedIndex)
    }
  }

  const scrollToPlace = (position:number) => {
    if(containerReference.current){
    const scrollWidth = containerReference.current.scrollWidth
    const singlePicWidth = scrollWidth * .166667
    const index = position < 0 ? photoObject.length -2: position >= photoObject.length -2 ? 0 : position
    const scrollPosition = index * singlePicWidth
    setImageIndex(index)
    containerReference.current.scrollTo(scrollPosition, 0)
  }
}

const clipWords = (text:string) => {
  const shortened = `${text.slice(0, 30)}${text.length > 30 ? "..." : ""}`
  return shortened
}

  return (
        <div className="flex w-full overflow-clip flex-col  mt-3 items-center">
          <div onScroll={scroll} ref={containerReference} className="w-full scroll-smooth snap-x snap-mandatory overflow-scroll xl:max-w-234 lg:max-w-300 md:max-w-180 max-w-91 scrollbar-none">
            <div className="w-1000 flex xl:max-w- lg:max-w-468 md:max-w-354 max-w-180 mx-2">
              {currentImages.map(image => <a target={caption? undefined : "_blank"} href={caption ? undefined : photoObject[image].permalink} className={`snap-center relative w-[15.66%] bg-bg-white rounded-3xl h-fit mx-[.5%] hover:brightness-110 duration-150`} key={photoObject[image].imageIndex}>
                {photoObject[image].caption && <div className=" border-gray-400/70 md:block border rounded-t-3xl">
                  <div className="flex">
                    <div className="mt-2 w-7 h-7 md:w-10 md:h-10 relative mx-1.5">
                      <Image className="object-contain" src={"/HSSicon.png"} alt={'HSS Icon'} fill/>
                    </div>
                    <p className="font-albert md:ml-1 text-xs lg:ml-0 pt-3 pb-1 pr-3 md:pl-0 grow font-bold text-text-black md:text-body">@hss_scout</p>
                  </div>
                  <p className="text-text-black hidden md:block font-albert min-h-14 text-body px-4 pb-2">{clipWords(photoObject[image].caption)}</p>
                </div>}
                <div className={`relative w-full lg:h-67 md:h-50 h-24 overflow-hidden rounded-3xl rounded-t-none`}>
                  <Image fill src={`${photoObject[image].mediaUrl}`} alt={`image-${photoObject[image].timestamp}`} className={` object-cover object-center`} />
                </div>
                  {caption && photoObject[image].caption && <div className="w-full text-center text-text-black font-albert text-body lg:text-body-desktop">{photoObject[image].caption}</div>}
                </a>)}
            </div>
          </div>
          <div className="w-full flex justify-center">
          <div className="flex justify-between w-full pt-6 max-w-44 ">
              <div className="w-fit rotate-270 md:flex flex-col justify-center">
                <svg onClick={()=> scrollToPlace(imageIndex - 1)} className="hover:scale-105 duration-100 fill-text-black/80 active:fill-text-gray/90 active:scale-95 cursor-pointer" width="21" height="21" viewBox="144 144 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m399.44 263.41 189.21 221.68c10.078 11.195 8.3984 29.668-2.8008 39.184-11.195 9.5156-29.668 8.3984-39.184-2.8008l-147.22-170.73-147.22 170.73c-10.078 11.195-27.988 12.875-39.184 2.8008-11.195-10.078-12.875-27.988-2.8008-39.184z"/></svg>
              </div>
              <div className="flex h-full items-center scroll-auto">
                {dotArray && dotArray.map((e, i)=> <div key={i} onClick={()=> scrollToPlace(e.imageIndex -1)} className={`h-3.5 cursor-pointer rounded-2xl mx-1 active:bg-gray-400/30 duration-400 ${imageIndex === e.imageIndex -1 ? "w-8 bg-text-black/80" : "w-4 bg-text-gray/30"}`}></div>)}
              </div>
              <div className="w-fit rotate-90 md:flex flex-col justify-center">
                <svg onClick={()=> scrollToPlace(imageIndex + 1)} className="hover:scale-105 duration-100 fill-text-black/80 active:fill-text-gray/90 active:scale-95 cursor-pointer" width="21" height="21" viewBox="144 144 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m399.44 263.41 189.21 221.68c10.078 11.195 8.3984 29.668-2.8008 39.184-11.195 9.5156-29.668 8.3984-39.184-2.8008l-147.22-170.73-147.22 170.73c-10.078 11.195-27.988 12.875-39.184 2.8008-11.195-10.078-12.875-27.988-2.8008-39.184z"/></svg>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Gallery