import WhiteImageBox from "@/components/WhiteImageBox";
import HomeSection from "@/components/Home-Section";
import CardWithImage from "@/components/CardWithImage";
import GoodToKnow from "@/components/GoodToKnow-home";
import HeroContainer from "@/components/HeroContainer/HeroContainer";
import DivisionsContainer from "@/components/DivisionsContainer/DivisionsContainer";
import InstagramContainer from "@/components/Instagram/InstagramContainer";
import { getId, getSectionById } from "@/lib/utils";
import CardWithLogo from "@/components/CardWithLogo";



const Home = async () => {

    const data = await getSectionById('17520090-02e5-4b1c-b8e0-af8801314244', "home_images")

  return (
    <main className="">
      <HeroContainer bgImages={{ mobile: data.home_images.home_hero_mobile.asset._ref, desktop: data.home_images.home_hero_desktop.asset._ref }} messageSection={"homeHero"} />
      <section className="flex flex-col items-center w-full">
        <CardWithLogo sectionTitle={"homePageCard"}  image="/anchorYellowBg.svg" />
        <GoodToKnow />
        <WhiteImageBox />
        <DivisionsContainer />
        <InstagramContainer bgBlue={true} />
      </section>
    </main>
  );
}
export default Home