'use client'

import DivisionsBox from "@/components/DivisionsBox";
import useMessages from "@/hook/useMessages";
import CardWithImage from "@/components/CardWithImage";
import Instagram from "@/components/Instagram";
import HeroSection from "@/components/Hero-section";
import bgImage01 from "../../../public/images/hero-img01.png"
import CTABtn from "@/components/CTA-button";

const Home = () => {
  const messages = useMessages()

  if (!messages) {
    return null
  }

  return (
    <div className="">
    <HeroSection
      bgImage={bgImage01}
      title01={messages?.hero.hero_subtitle01}
      title02={messages?.hero.hero_subtitle02}
      description={messages?.hero.hero_description}
    >
      <CTABtn
        text={messages?.CTABtn.text}
        onClick={() => { }} />
    </HeroSection>
      <div className="flex flex-col items-center">
        <CardWithImage headline={messages?.homePageCard?.headline} logo="/heartIcon.png" title={messages?.homePageCard?.title} text={messages?.homePageCard?.text} image="/images/IMG_9122.jpeg" />
        <div className="text-h2 md:text-h2-desktop text-primary mt-8 px-5 w-full md:max-w-200 lg:max-w-400">{messages?.home.divisions}</div>
        <div className="px-5 text-body font-albert text-text-black w-full md:max-w-200 lg:max-w-400">{messages?.home.divisions_text}</div>
        <div className="flex flex-col md:flex-row my-3 px-4 w-full md:max-w-200 lg:max-w-400">
          <DivisionsBox division={"sjohumlorna"} boxStyle={"basic"} />
          <DivisionsBox division={"kaparna"} boxStyle={"basic"} />
          <DivisionsBox division={"konvojen"} boxStyle={"basic"} />
          <DivisionsBox division={"utmanare"} boxStyle={"basic"} />
        </div>
        <Instagram infoText={true}/>
        </div>
      </div>
  );
}

export default Home