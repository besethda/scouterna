"use client"

import useMessages from "@/hook/useMessages"
import HeroSection from "./Hero-section"
import CTABtn from "../CTA-button"

type messageTypes = "hero_subtitle01" 

const HeroContainer = ({bgImages, messageSection}:{bgImages:{mobile:string, desktop:string}, messageSection:Record<string, string>}) => {

  const messages= useMessages()
  if(!messages) return null

  return (
    <HeroSection
    bgImages={bgImages}
    title01={(messages as any)?.[`${messageSection}`]?.hero_subtitle01}
    title02={(messages as any)?.[`${messageSection}`]?.hero_subtitle02}
    top={(messages as any)?.[`${messageSection}`]?.top}
    description={(messages as any)?.[`${messageSection}`]?.hero_description}
  >
    <CTABtn
      text={(messages as any)?.[`${messageSection}`]?.button}
      onClick={() => { }} 
      width="mobile"/>
  </HeroSection>
  )
}

export default HeroContainer