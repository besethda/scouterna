import WhiteImageBox from "@/components/WhiteImageBox";
import HomeSection from "@/components/Home-Section";
import CardWithImage from "@/components/CardWithImage";
import GoodToKnow from "@/components/GoodToKnow-home";
import HeroContainer from "@/components/HeroContainer/HeroContainer";
import DivisionsContainer from "@/components/DivisionsContainer/DivisionsContainer";
import InstagramContainer from "@/components/Instagram/InstagramContainer";
import CardWithLogo from "@/components/CardWithLogo";



const Home = () => {
  return (
    <main className="">
      <HeroContainer bgImages={{ mobile: "bg-[url('/images/IMG_3420.JPEG')]", desktop: "md:bg-[url('/images/IMG_3752.JPEG')]" }} messageSection={"homeHero"} />
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