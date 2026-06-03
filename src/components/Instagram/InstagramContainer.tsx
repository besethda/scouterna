import Instagram from "./Instagram"
import { instaType } from "../Gallery"

const InstagramContainer = async ({bgBlue=false, mobileOnly=false, showText=false}:{bgBlue?:boolean, mobileOnly?:boolean, showText?:boolean}) => {

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

  const response = await fetch("https://feeds.behold.so/cpFFCBnZsZUNtLg9vY4Y")
  const data = response.ok ? await response.json() : null
  if(response.ok && (data?.posts && data.posts.length > 5)){
    const filteredData: instaType[]= data.posts.map((post: any, index:number)=> {
      return {mediaUrl:post.mediaUrl, permalink: post.permalink, mediaType:post.mediaType, caption:post.caption, timestamp:post.timestamp, imageIndex:index}
    })
    return (
      <div className={`${bgBlue ? "bg-bg-blue" : "bg-bg-white"} ${mobileOnly ? "md:hidden block" : ""} md:pt-10 w-full pt-5`}>
        <Instagram photoObject={filteredData} infoText={showText}/>
      </div>
    )
  } else {
    const fallbackFilteredData: instaType[]= fallbackData.map((post: any, index:number)=> {
      return {mediaUrl:post.mediaUrl, permalink: `link${index}`, mediaType: "image", caption:"boat picture", timestamp: (index*2), imageIndex:index}
    })
    return (
      <div className={`${bgBlue ? "bg-bg-blue" : "bg-bg-white"} ${mobileOnly ? "md:hidden block" : ""} md:pt-10 w-full pt-5`}>
        <Instagram photoObject={fallbackFilteredData} infoText={showText}/>
      </div>
    )
  }
  }


export default InstagramContainer