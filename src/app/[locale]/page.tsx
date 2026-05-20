'use client'

import useMessages from "@/hook/useMessages";
<<<<<<< HEAD
import Instagram from "@/components/Instagram";

import HeroSection from "@/components/Hero-section";
import bgImage01 from "../../../public/images/hero-img01.png"
import CTABtn from "@/components/CTA-button";
=======
import CardWithImage from "@/components/CardWithImage";
>>>>>>> HSS-036-Homepage-section

const Home = () => {
  const messages = useMessages()
  
  if (!messages) {
    return null
  }

  return (
<<<<<<< HEAD
    <div className="">
      <HeroSection 
        bgImage={bgImage01} 
        title01={messages?.hero.hero_subtitle01}
        title02={messages?.hero.hero_subtitle02}
        description={messages?.hero.hero_description}
      >
        <CTABtn 
        text={messages?.CTABtn.text}
        onClick={() => {}}/>
      </HeroSection>
      <Instagram infoText={true}/>
=======
    <div >
      <CardWithImage headline={messages?.homePageCard?.headline} logo="/heartIcon.png" title={messages?.homePageCard?.title} text={messages?.homePageCard?.text} image="/images/IMG_9122.jpeg" />
>>>>>>> HSS-036-Homepage-section
    </div>
  );
}

export default Home