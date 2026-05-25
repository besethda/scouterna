"use client"

import useMessages from "@/hook/useMessages"
import HeroSection from "./Hero-section"
import CTABtn from "../CTA-button"

const HeroContainer = () => {

  const messages = useMessages()

  return (
    <HeroSection
    bgImages={{mobile: "bg-[url('/images/IMG_3420.JPEG')]", desktop:"md:bg-[url('/images/IMG_3752.JPEG')]"}}
    title01={messages?.hero.hero_subtitle01}
    title02={messages?.hero.hero_subtitle02}
    description={messages?.hero.hero_description}
  >
    <CTABtn
      text={messages?.CTABtn.text}
      onClick={() => { }} 
      width="mobile"/>
  </HeroSection>
  )
}

export default HeroContainer