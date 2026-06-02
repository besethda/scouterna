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
      const currentIndex = newIndex >= photoArray.length ? 0 : newIndex < 0 ? (photoArray.length -1 ) : newIndex
      if (currentIndex < 4) {
        setCurrentImages(photoArray.slice(currentIndex, (currentIndex + 3)))
      } else {
        setCurrentImages([...photoArray.slice(currentIndex), ...photoArray.slice(0, (currentIndex - 3))])
      }
      setImageIndex(newIndex >= photoArray.length ? 0 : newIndex)
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
          <div className="flex justify-between w-full pt-4 max-w-50 ">
              <div className="hidden w-fit md:flex flex-col justify-center">
                <svg onClick={() => changeIndex(imageIndex - 1)} className="hover:scale-105 duration-100 active:scale-95 cursor-pointer" fill="#000" width="24" height="24" viewBox="144 144 512 512" xmlns="http://www.w3.org/2000/svg"><g><path d="m4e2 630.91c-127.33.0-230.91-103.58-230.91-230.91S272.68 169.09 4e2 169.09 630.91 272.68 630.91 4e2c0 127.33-103.58 230.91-230.91 230.91zm0-444.19c-117.61.0-213.28 95.672-213.28 213.28.0 117.6 95.672 213.28 213.28 213.28 117.6.0 213.28-95.68 213.28-213.28.0-117.6-95.68-213.28-213.28-213.28z" /><path d="m433.94 508.75c-2.1406.0-4.2891-.76953-5.9844-2.3359l-108.21-99.938c-1.8086-1.668-2.8359-4.0156-2.8359-6.4805.0-2.4648 1.0273-4.8125 2.8359-6.4805l108.21-99.93c3.5781-3.293 9.1484-3.0898 12.465.5 3.3008 3.5781 3.0781 9.1523-.5 12.461l-101.2 93.457 101.2 93.453c3.5781 3.3047 3.7969 8.8867.5 12.465-1.7422 1.875-4.1094 2.8281-6.4766 2.8281z" /></g></svg>
              </div>
              <div className="flex h-full items-center">
                {photoArray && photoArray.map((e, i)=> <div key={i} className={`h-3 bg-text-gray/30 rounded-2xl mx-1 duration-150 ${e.imageIndex === i ? "w-6" : "w-3"}`}></div>)}
              </div>
              <div className="hidden w-fit rotate-180 md:flex flex-col justify-center">
                <svg onClick={() => changeIndex(imageIndex + 1)} className="hover:scale-105 duration-100 active:scale-95 cursor-pointer" fill="#000" width="24" height="24" viewBox="144 144 512 512" xmlns="http://www.w3.org/2000/svg"><g><path d="m4e2 630.91c-127.33.0-230.91-103.58-230.91-230.91S272.68 169.09 4e2 169.09 630.91 272.68 630.91 4e2c0 127.33-103.58 230.91-230.91 230.91zm0-444.19c-117.61.0-213.28 95.672-213.28 213.28.0 117.6 95.672 213.28 213.28 213.28 117.6.0 213.28-95.68 213.28-213.28.0-117.6-95.68-213.28-213.28-213.28z" /><path d="m433.94 508.75c-2.1406.0-4.2891-.76953-5.9844-2.3359l-108.21-99.938c-1.8086-1.668-2.8359-4.0156-2.8359-6.4805.0-2.4648 1.0273-4.8125 2.8359-6.4805l108.21-99.93c3.5781-3.293 9.1484-3.0898 12.465.5 3.3008 3.5781 3.0781 9.1523-.5 12.461l-101.2 93.457 101.2 93.453c3.5781 3.3047 3.7969 8.8867.5 12.465-1.7422 1.875-4.1094 2.8281-6.4766 2.8281z" /></g></svg>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Gallery