"use client"

import { useRef, useState } from "react"

export type instaType = {
  mediaUrl:string
  permalink: string
  mediaType: string
  caption: string
  timestamp: number 
  imageIndex: number
}

const Gallery = ({fade=false, photoObject}:{fade?:boolean, photoObject: instaType[]}) => {

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

  return (
        <div className="flex w-full overflow-clip flex-col items-center">
          <div onScroll={scroll} ref={containerReference} className="w-full scroll-smooth snap-x snap-mandatory overflow-scroll lg:max-w-335 md:max-w-130 max-w-85 scrollbar-none">
            <div className="lg:w-[180vw] md:w-[130vw] w-[170vw] flex lg:max-w-675 md:max-w-258 max-w-180 mx-2">
              {currentImages.map(image => <a target="_blank" href={photoObject[image].permalink} className={`snap-center relative w-[15.66%] mx-[.5%] hover:brightness-110 duration-150`} key={photoObject[image].imageIndex}>
                  <img src={`${photoObject[image].mediaUrl}`} alt={`image-${photoObject[image].timestamp}`} className='aspect-6/5 rounded-3xl object-cover' />
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