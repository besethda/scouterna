"use client"

import useMessages from "@/hook/useMessages"
import HeroSection from "./Hero-section"
import CTABtn from "../CTA-button"

type messageTypes = "hero_subtitle01"

const HeroContainer = ({ bgImages, messageSection, position }: { bgImages: { mobile: string, desktop: string }, messageSection: string, position?: string }) => {

  const messages = useMessages()
  if (!messages) return null

  const handleClick = () => {
    window.open("https://www.scoutnet.se/register/in/group/764")
  }

  console.log((messages as any)?.[`${messageSection}`]?.button)

  return (
    <HeroSection
      bgImages={bgImages}
      title01={(messages as any)?.[`${messageSection}`]?.hero_subtitle01}
      title02={(messages as any)?.[`${messageSection}`]?.hero_subtitle02}
      top={(messages as any)?.[`${messageSection}`]?.hero_title}
      description={(messages as any)?.[`${messageSection}`]?.hero_description}
      position={position}
    >
      <CTABtn
        text={`${(messages as any)?.[`${messageSection}`]?.button}`}
        onClick={handleClick}
        width="mobile" />
    </HeroSection>
  )
}

export default HeroContainer