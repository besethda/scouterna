import Instagram from "./Instagram"
import { instaType } from "../Gallery"

const InstagramContainer = async () => {

  const response = await fetch("https://feeds.behold.so/3JS61tNj0rPJBZc2QNTD")
  const data = await response.json()
  const filteredData: instaType= data.posts.map((post: any, index:number)=> {
    return {mediaUrl:post.mediaUrl, permalink: post.permalink, mediaType:post.mediaType, caption:post.caption, timestamp:post.timestamp, imageIndex:index}
  })

  return (
    <div className="">
      <Instagram photoObject={filteredData}/>
    </div>
  )
}

export default InstagramContainer