import HeroSection from "@/conponents/Hero-section";
import bgImage01 from "../../public/images/hero-img01.png"

const Home = () => {
  return (
    <div className="">
    <HeroSection bgImage={bgImage01} 
      title01="Äventyr börjar" 
      title02="vid vattenbrynet" 
      description="På Mälarens vågor lär sig barn att segla,
      samarbeta och växa i en trygg gemenskap i Hässelby Strand."/>
    </div>
  );
}

export default Home