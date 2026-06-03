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
      <HeroContainer bgImages={{mobile: "bg-[url('/images/IMG_3420.JPEG')]", desktop:"md:bg-[url('/images/IMG_3752.JPEG')]"}} messageSection={"homeHero"} />
      <div className="flex flex-col items-center w-full">
        <CardWithImage sectionTitle={"homePageCard"} logo="/heart.png" image="/images/IMG_6743.JPEG" />
        <HomeSection /> 
        <GoodToKnow />
        <WhiteImageBox />
        <DivisionsContainer />
        <InstagramContainer bgBlue={true}/>
      </div>
    </div>
  );
}
export default Home