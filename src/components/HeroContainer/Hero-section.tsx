"use client"

import useMessages from '@/hook/useMessages'
import { urlFor } from "@/sanity/lib/image";

interface HeroSectionProps {
    bgImages: { mobile: string, desktop: string };
    title01: string;
    title02: string;
    description: string;
    top: string;
    position?:string;
    children?: React.ReactNode;

}

const HeroSection = ({ bgImages, title01, title02, description, top, position, children }: HeroSectionProps) => {

    const messages = useMessages()

    return (
        <>
            <style>{`
                .hero-background { background-image: url(${urlFor(bgImages.mobile)})}
                @media (min-width: 768px){ .hero-background { background-image: url(${urlFor(bgImages.desktop)})}}
            `}
            </style>
            <div className={`hero-background h-165 md:h-185 w-full bg-cover ${position === "center" ? "md:bg-position-[center_60%]" : "md:bg-bottom"} bg-right bg-gray-900 bg-no-repeat flex flex-col gap-10`}>
                <div className='w-full bg-gray-800/40 h-full'>
                    <div className="flex flex-col items-center md:items-start gap-10 md:w-150 md:ml-37.5 md:gap-7 mx-auto text-left">
                        <div className="flex md:w-100 w-80 justify-center h-9 bg-primary mx-auto rounded-3xl 
                            border border-solid border-accent mt-16 md:opacity-60 md:ml-0">
                            <p className="text-body-bold font-albert items-center leading-[3] md:mr-2 text-accent flex gap-2 uppercase">
                                <span className="w-2 h-2 rounded-full bg-accent hidden md:block" />
                                {top}
                            </p>
                        </div>
                        <div className="w-80 md:w-190 mx-auto text-white flex flex-col gap-3">
                            <h1 className="text-hero font-fraunces md:leading-19 leading-10 font-bold md:text-hero-desktop">{title01}<br />
                                <span className="text-accent font-fraunces">{title02}</span>
                            </h1>
                            <p className="text-body md:text-body-desktop font-albert font-normal">{description}</p>
                        </div>
                        <div className='pt-30 md:pt-36 w-61.5 '>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>


    )
}

export default HeroSection
