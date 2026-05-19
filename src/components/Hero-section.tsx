import useMessages from '@/hook/useMessages'

interface HeroSectionProps{
    bgImage:{src: string};
    title01?: string;
    title02?:string;
    description?:string

}

const HeroSection = ({bgImage, title01,title02, description}:HeroSectionProps) => {

    const messages = useMessages()

    return (
        <div className="h-[700] w-full bg-cover bg-center bg-no-repeat flex flex-col gap-10"
            style={{backgroundImage: bgImage?`url(${bgImage.src})`:'none'}}>
                <div className="flex flex-col gap-10 xl:text-left xl:w-[527] xl:ml-[150] xl:gap-7">
                    <div className="flex gap-2 w-[350] h-[36] bg-primary mx-auto rounded-3xl 
                        border border-solid border-accent mt-16 xl:opacity-60 xl:ml-0">
                        <p className="text-body-bold leading-[3] mx-auto text-accent flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-accent  hidden xl:block "/>
                            {messages?.hero.hero_title}
                        </p>
                    </div>
                    <div className="w-[323] xl:w-[600] mx-auto text-white flex flex-col gap-11">
                        <h1 className="text-hero font-bold xl:text-hero-desktop">{title01}<br />
                            <span className="text-accent">{title02}</span>
                        </h1>
                        <p className="text-body xl:text-body-desktop">{description}</p>
                    </div>
                </div>
        </div>
    )
}

export default HeroSection
