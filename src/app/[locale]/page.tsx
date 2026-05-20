'use client'

import useMessages from "@/hook/useMessages";
import Instagram from "@/components/Instagram";

import HeroSection from "@/components/Hero-section";
import bgImage01 from "../../../public/images/hero-img01.png"

const Home = () => {
  const messages = useMessages()

  return (
    <div className="">
      <HeroSection 
        bgImage={bgImage01} 
        title01={messages?.hero.hero_subtitle01}
        title02={messages?.hero.hero_subtitle02}
        description={messages?.hero.hero_description}
      />
      <Instagram infoText={true}/>
    </div>
  );
}

export default Home