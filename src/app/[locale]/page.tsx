import WhiteImageBox from "@/components/WhiteImageBox";
import HomeSection from "@/components/Home-Section";
import CardWithImage from "@/components/CardWithImage";
import GoodToKnow from "@/components/GoodToKnow-home";
import HeroContainer from "@/components/HeroContainer/HeroContainer";
import DivisionsContainer from "@/components/DivisionsContainer/DivisionsContainer";
import InstagramContainer from "@/components/Instagram/InstagramContainer";


const Home = () => {
  return (
    <div className="">
      <HeroContainer />
      <div className="flex flex-col items-center">
        <CardWithImage sectionTitle={"homePageCard"} logo="/heart.png" image="/images/IMG_9122.jpeg" />
        <HomeSection />
        <GoodToKnow />
        <WhiteImageBox />
        <DivisionsContainer />
        <InstagramContainer />
      </div>
    </div>
  );
}
export default Home