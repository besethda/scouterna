import Gallery from "@/components/Gallery"
import { instaType } from "@/components/Gallery"

const BoatSection = ({photoArray}:{photoArray?:any[]}) => {

  const fallbackData:Object[] = [
    {
      mediaUrl: "/images/boat12.jpg",
    },
    {
      mediaUrl: "/images/DSCF1948.jpg",
    },
    {
      mediaUrl: "/images/DSCF3076.jpg",
    },
    {
      mediaUrl: "/images/DSCF3797.jpg",
    },
    {
      mediaUrl: "/images/IMG_0184.JPEG",
    },
    {
      mediaUrl: "/images/IMG_0411.JPEG",
    },
  ]

    const useableArray = photoArray && photoArray.length < 5 ? photoArray : fallbackData
    const galleryPhotos: instaType[]= useableArray?.map((post: any, index:number)=> {
      return {mediaUrl:post.mediaUrl, permalink: `link${index}`, mediaType: "image", caption:"boat picture", timestamp: (index*2), imageIndex:index}
    })

  return (
    <div className="w-full bg-bg-white pb-16 pt-6">
      <Gallery photoObject={galleryPhotos} fade={true}/>
    </div>
  )
}

export default BoatSection