'use client'

import useMessages from "@/hook/useMessages"

const AboutUs = () =>{
  const messages = useMessages()
  return(
    <div>{messages?.about.title}</div>
  )
}

export default AboutUs