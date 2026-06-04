import WhiteImageBox from "@/components/WhiteImageBox";
import HomeSection from "@/components/Home-Section";
import CardWithImage from "@/components/CardWithImage";
import GoodToKnow from "@/components/GoodToKnow-home";
import HeroContainer from "@/components/HeroContainer/HeroContainer";
import DivisionsContainer from "@/components/DivisionsContainer/DivisionsContainer";
import InstagramContainer from "@/components/Instagram/InstagramContainer";
import { getId } from "@/lib/utils";


const Home = async () => {

    const data = await getId('f8289432-da1c-4c3a-9990-ee87e97a82f7')
    console.log(data)


  return (
    <main className="">
      <HeroContainer bgImages={{ mobile: "bg-[url('/images/IMG_3420.JPEG')]", desktop: "md:bg-[url('/images/IMG_3752.JPEG')]" }} messageSection={"homeHero"} />
      <section className="flex flex-col items-center w-full">
        <CardWithImage sectionTitle={"homePageCard"} logo="/heart.png" image="/images/IMG_6743.JPEG" />
        <HomeSection />
        <GoodToKnow />
        <WhiteImageBox />
        <DivisionsContainer />
        <InstagramContainer bgBlue={true} />
      </section>
    </main>
  );
}
export default Home