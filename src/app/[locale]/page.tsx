'use client'
import DivisionsBox from "@/components/DivisionsBox";
import WhiteImageBox from "@/components/WhiteImageBox";
import useMessages from "@/hook/useMessages";
import Instagram from "@/components/Instagram";
import HeroSection from "@/components/Hero-section";
import bgImage01 from "../../../public/images/hero-img01.png"
import CTABtn from "@/components/CTA-button";
import HomeSection from "@/components/Home-Section";
import CardWithImage from "@/components/CardWithImage";
import GoodToKnow from "@/components/GoodToKnow-home";
import FragorSvar from "@/components/Fragor-svar";


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
          onClick={() => { }} 
          width="mobile"/>
      </HeroSection>
      <FragorSvar 
      question={messages?.fragorSvar?.question}
      answer={messages?.fragorSvar?.answer}
      />
      <div className="flex flex-col items-center">
        <CardWithImage headline={messages?.homePageCard?.headline} logo="/heart.png" title={messages?.homePageCard?.title} text={messages?.homePageCard?.text} image="/images/IMG_9122.jpeg" />
        <HomeSection />
        <GoodToKnow />
        <WhiteImageBox/>
        <div className="text-h2 font-varela md:text-h2-desktop text-primary mt-15 lg:px-22 px-5 w-full md:max-w-200 lg:max-w-430">{messages?.home.divisions}</div>
        <div className="px-5 text-body font-albert md:text-body-desktop lg:px-22 text-text-black w-full md:max-w-200 lg:max-w-430">{messages?.home.divisions_text}</div>
        <div className="flex flex-col md:flex-row my-3 md:mb-25 mb-10 px-4 md:px-10 lg:px-20 w-full md:max-w-200 lg:max-w-430">
          <DivisionsBox division={"sjohumlorna"} boxStyle={"basic"} />
          <DivisionsBox division={"kaparna"} boxStyle={"basic"} />
          <DivisionsBox division={"konvojen"} boxStyle={"basic"} />
          <DivisionsBox division={"utmanare"} boxStyle={"basic"} />
        </div>
        <Instagram infoText={true} />
      </div>
    </div>
  );
}
export default Home