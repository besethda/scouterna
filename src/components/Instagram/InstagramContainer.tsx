import Instagram from "./Instagram"
import { instaType } from "../Gallery"

const InstagramContainer = async () => {

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
  if(data.posts && data.posts.length > 5){
    const filteredData: instaType[]= data.posts.map((post: any, index:number)=> {
      return {mediaUrl:post.mediaUrl, permalink: post.permalink, mediaType:post.mediaType, caption:post.caption, timestamp:post.timestamp, imageIndex:index}
    })
    return (
      <div className="">
        <Instagram photoObject={filteredData}/>
      </div>
    )
  } else {
    const filteredData: instaType[]= fallbackData.map((post: any, index:number)=> {
      return {mediaUrl:post.mediaUrl, permalink: `link${index}`, mediaType: "image", caption:"boat picture", timestamp: (index*2), imageIndex:index}
    })
    return (
      <div className="md:bg-bg-blue md:pt-10 w-full">
        <Instagram photoObject={filteredData}/>
      </div>
    )
  }
  }
  const response = await fetch("https://feeds.behold.so/cpFFCBnZsZUNtLg9vY4Y")
  const data = await response.json()
  const filteredData: instaType[]= data.posts.map((post: any, index:number)=> {
    return {mediaUrl:post.mediaUrl, permalink: post.permalink, mediaType:post.mediaType, caption:post.caption, timestamp:post.timestamp, imageIndex:index}
  })


export default InstagramContainer