"use client"

import { useState } from "react"

export type instaType = {
  mediaUrl:string
  permalink: string
  mediaType: string
  caption: string
  timestamp: number 
  imageIndex: number
}

const Gallery = ({type="instagram", photoObject}:{type?:string, photoObject: instaType[]}) => {

  const photoArray = photoObject.map(e=> e.imageIndex)

  const [imageIndex, setImageIndex] = useState(0)
  const [currentImages, setCurrentImages] = useState(photoArray.slice(0, 3))

  const changeIndex = (newIndex:number) => {
      const currentIndex = newIndex >= photoArray.length ? 0 : newIndex < 0 ? photoArray.length -1 : newIndex
      if (currentIndex < 4) {
        setCurrentImages(photoArray.slice(currentIndex, (currentIndex + 3)))
      } else {
        setCurrentImages([...photoArray.slice(currentIndex), ...photoArray.slice(0, (currentIndex - 3))])
      }
      setImageIndex(newIndex >= photoArray.length ? 0 : newIndex < 0 ? photoArray.length -1 : newIndex)
    }

  return (
        <div className="flex flex-col justify-center">
          <div className="flex">
            {currentImages.map(image => <a target="_blank" href={photoObject[image].permalink} className="relative w-[60%] mx-[1.5%] hover:brightness-110 duration-150" key={photoObject[image].timestamp}>
                <img src={`${photoObject[image].mediaUrl}`} alt={`image-${photoObject[image].timestamp}`} className='aspect-6/5 rounded-3xl object-cover' />
              </a>)
              }
          </div>
          <div className="w-full flex justify-center">
          <div className="flex justify-between w-full pt-6 max-w-54 ">
              <div className="w-fit rotate-270 md:flex flex-col justify-center">
                <svg onClick={() => changeIndex(imageIndex - 1)} className="hover:scale-105 duration-100 fill-text-black/80 active:fill-text-gray/90 active:scale-95 cursor-pointer" width="21" height="21" viewBox="144 144 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m399.44 263.41 189.21 221.68c10.078 11.195 8.3984 29.668-2.8008 39.184-11.195 9.5156-29.668 8.3984-39.184-2.8008l-147.22-170.73-147.22 170.73c-10.078 11.195-27.988 12.875-39.184 2.8008-11.195-10.078-12.875-27.988-2.8008-39.184z"/></svg>
              </div>
              <div className="flex h-full items-center">
                {photoArray && photoArray.map((e, i)=> <div onClick={()=> changeIndex(i)} key={i} className={`h-3.5 cursor-pointer rounded-2xl mx-1 duration-150 ${imageIndex === i ? "w-8 bg-text-black/80" : "w-4 bg-text-gray/30"}`}></div>)}
              </div>
              <div className="w-fit rotate-90 md:flex flex-col justify-center">
                <svg onClick={() => changeIndex(imageIndex + 1)} className="hover:scale-105 duration-100 fill-text-black/80 active:fill-text-gray/90 active:scale-95 cursor-pointer" width="21" height="21" viewBox="144 144 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m399.44 263.41 189.21 221.68c10.078 11.195 8.3984 29.668-2.8008 39.184-11.195 9.5156-29.668 8.3984-39.184-2.8008l-147.22-170.73-147.22 170.73c-10.078 11.195-27.988 12.875-39.184 2.8008-11.195-10.078-12.875-27.988-2.8008-39.184z"/></svg>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Gallery