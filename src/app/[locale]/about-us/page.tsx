'use client'

import useMessages from "@/hook/useMessages"

const About = () =>{
  const messages = useMessages()
  return(
    <div>{messages?.about.title}</div>
  )
}

export default About