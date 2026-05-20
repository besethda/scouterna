'use client'
import useMessages from "@/hook/useMessages";
import CardWithImage from "@/components/CardWithImage";
import Instagram from "@/components/Instagram";

import HeroSection from "@/components/Hero-section";
import bgImage01 from "../../../public/images/hero-img01.png"
import CTABtn from "@/components/CTA-button";
import HomeSection from "@/components/Home-Section";

const Home = () => {
  const messages = useMessages()

  if (!messages) {
    return null
  }

  return (
    <div>
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
        <HomeSection />
        <CardWithImage headline={messages?.homePageCard?.headline} logo="/heartIcon.png" title={messages?.homePageCard?.title} text={messages?.homePageCard?.text} image="/images/IMG_9122.jpeg" />
        <Instagram infoText={true} />
      </div>
    </div>
  );
}
export default Home