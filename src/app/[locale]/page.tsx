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
  const groupsData = await getId("2a5a4f80-b206-44b9-9e00-6b870a00f90e")

  return (
    <main className="">
      <HeroContainer bgImages={{ mobile: data.home_images.home_hero_mobile.asset._ref, desktop: data.home_images.home_hero_desktop.asset._ref }} messageSection={"homeHero"} />
      <section className="flex flex-col items-center w-full lg:max-w-245 2xl:max-w-360  mx-auto">
        <CardWithLogo sectionTitle={"homePageCard"} image="/anchorYellowBg.svg" />
        <GoodToKnow />
        <WhiteImageBox />
        <div className="md:w-full bg-white rounded-2xl shadow-lg mb-4 mx-4 px-4">
          <DivisionsContainer data={groupsData} />
        </div>
        <InstagramContainer bgBlue={true} />
      </section>
    </main>
  );
}
export default Home