import backgroundImg01 from "../../public/images/hero-img01.png"
import backgroundImg02 from "../../public/images/hero-img02.jpg"
import backgroundImg03 from "../../public/images/hero-img03.jpg"

const HeroSection = () => {
    return (
        <div className="h-[700] w-full bg-cover bg-center bg-no-repeat flex flex-col gap-10"
            style={{backgroundImage: `url(${backgroundImg01.src})`}}>
                <div className="hidden xl:text-left xl:w-[527] xl:ml-[150]  xl:flex xl:flex-col xl:gap-7">
                    <div className="flex gap-2 w-[350] h-[36] bg-primary mx-auto rounded-3xl 
                        border border-solid border-accent mt-16 xl:opacity-60 xl:ml-0">
                        <p className="text-body-bold leading-[3] mx-auto text-accent flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-accent hidden xl:block "/>
                            HÄSSELBY STRANDS SJÖSCOUTER
                        </p>
                    </div>
                    <div className="w-[323] xl:w-[527] mx-auto text-white flex flex-col gap-11">
                        <p className="text-hero font-bold xl:text-hero-desktop">Äventyr börjar <br />
                            <span className="text-accent">vid vattenbrynet</span>
                        </p>
                        <p className="text-body xl:text-body-desktop">På Mälarens vågor lär sig barn att segla, samarbeta och växa i en trygg gemenskap i Hässelby Strand.</p>
                    </div>
                </div>
        </div>
    )
}

export default HeroSection
