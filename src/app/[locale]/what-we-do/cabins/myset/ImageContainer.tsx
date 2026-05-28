"use client"
import Image from "next/image"



const ImageContainer = () => {


  return (
    <>
      <div className="rounded-[50%] min-w-73.5 min-h-55.25">
        <Image
          src="/images/IMG_5133.JPG"
          alt="image"
          width={800}
          height={600}

          className=" bg-white rounded-2xl object-cover md:max-w-150 md:max-h-109" />
      </div>
    </>
  )
}

export default ImageContainer 