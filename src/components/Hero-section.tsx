import useMessages from '@/hook/useMessages'
import undefinedBg from "../../public/images/DSCF3020.jpg"

interface HeroSectionProps{
    bgImage? :{src: string};
    title01? : string;
    title02? :string;
    description? :string

}

const HeroSection = ({bgImage, title01,title02, description}:HeroSectionProps) => {

    const messages = useMessages()
    const finalBg = bgImage ? bgImage.src : undefinedBg.src

    return (
        <div className="h-175 w-full bg-cover bg-center bg-no-repeat flex flex-col gap-10"
            style={{backgroundImage: `url(${finalBg})`}}>
                <div className="flex flex-col gap-10 md:text-left md:w-150 md:ml-37.5 md:gap-7 mx-auto">
                    <div className="flex gap-2 w-87.5 h-9 bg-primary mx-auto rounded-3xl 
                        border border-solid border-accent mt-16 md:opacity-60 md:ml-0">
                        <p className="text-body-bold leading-[3] mx-auto text-accent flex items-center gap-2 uppercase">
                            <span className="w-2 h-2 rounded-full bg-accent  hidden md:block"/>
                            {messages?.hero.hero_title}
                        </p>
                    </div>
                    <div className="w-80.75 md:w-150 mx-auto text-white flex flex-col gap-11">
                        <h1 className="text-hero font-bold md:text-hero-desktop">{title01}<br />
                            <span className="text-accent">{title02}</span>
                        </h1>
                        <p className="text-body md:text-body-desktop">{description}</p>
                    </div>
                </div>
        </div>
    )
}

export default HeroSection
