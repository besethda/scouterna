'use client'

import DivisionsBox from "@/components/DivisionsBox";
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
      <div className="flex flex-col items-center">
      <div className="text-h2 md:text-h2-desktop text-primary mt-8 px-5 w-full md:max-w-200 lg:max-w-400">{messages?.home.divisions}</div>
      <div className="px-5 text-body font-albert text-text-black w-full md:max-w-200 lg:max-w-400">{messages?.home.divisions_text}</div>
      <div className="flex flex-col md:flex-row my-3 px-4 w-full md:max-w-200 lg:max-w-400">
        <DivisionsBox division={"sjohumlorna"} boxStyle={"basic"} />
        <DivisionsBox division={"utmanare"} boxStyle={"basic"} />
        <DivisionsBox division={"konvojen"} boxStyle={"basic"} />
        <DivisionsBox division={"kaparna"} boxStyle={"basic"} />
      </div>
      <div className="flex flex-col md:flex-row flex-wrap my-3 px-4 w-full md:max-w-200 lg:max-w-400">
        <DivisionsBox division={"sjohumlorna"} boxStyle={"info"} />
        <DivisionsBox division={"utmanare"} boxStyle={"info"} />
        <DivisionsBox division={"konvojen"} boxStyle={"info"} />
        <DivisionsBox division={"kaparna"} boxStyle={"info"} />
      </div>
      <div className="flex flex-col items-center my-3 px-4 w-full md:max-w-200 lg:max-w-400">
        <DivisionsBox division={"sjohumlorna"} boxStyle={"image"} />
        <DivisionsBox division={"utmanare"} boxStyle={"image"} />
        <DivisionsBox division={"konvojen"} boxStyle={"image"} />
        <DivisionsBox division={"kaparna"} boxStyle={"image"} />
      </div>
      <div className="">
      <Instagram infoText={true}/>
      </div>
    </div>
    </div>

  );
}

export default Home