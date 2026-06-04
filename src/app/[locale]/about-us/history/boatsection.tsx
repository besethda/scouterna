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
    <div className="bg-bg-white pt-6 md:pb-25 pb-15 px-6.5 w-full md:px-17 md:max-w-200 lg:max-w-430">
      <Gallery photoObject={galleryPhotos} caption={true}/>
    </div>
  )
}

export default BoatSection