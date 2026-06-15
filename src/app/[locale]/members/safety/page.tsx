import { getPageHeadTitle } from "@/lib/utils"
import Breadcrumbs from "@/components/Breadcrumbs";
import ContentSection from "@/components/ContentSection";
import CardWithLogo from "@/components/CardWithLogo";
import Image from "next/image";
import vest from '../../../../../public/blueLifevest.svg'
import whiteAnchor from '../../../../../public/whiteAnchor.png'



const pageItem = "safety"
const headDescription = "safety"
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params
    return getPageHeadTitle(locale, pageItem, headDescription)
}


const Safety = () => {


    return (
        <main className="w-full mx-auto lg:max-w-[var(--max-w-laptop)] 2xl:max-w-[var(--max-w-desktop)]">
            <Breadcrumbs />
            <div className="flex flex-col items-center ">
                <section className="h-fit">
                    <CardWithLogo image="/informationYellowBg.svg" sectionTitle="safetyCard" isH1 /> 
                </section>
                <div className="flex flex-col w-full px-4 lg:px-0 gap-10 lg:max-w-430  md:gap-20 md:pb-16 pb-10" >
                    <section className="order-2 bg-white rounded-2xl relative"> 
                        <ContentSection sectionLayout={["h", "w", "p", "s", "p", "s", "p", "s", "p"]} page="safeScout" padding="both" />
                        <Image src={vest} alt="vest" height={150} width={150} className="hidden lg:block lg:absolute lg:bottom-20 lg:right-20 opacity-70 lg:rotate-12 " />
                    </section>
                    <section className="order-1 bg-primary rounded-2xl relative">
                        <ContentSection sectionLayout={["h", "p", "p", "t", "p", "w", "l", "l", "l", "t", "p", "w", "l", "l", "l", "t", ]} page={"guidelines"} padding="both" color="white"/>
                        <Image src={whiteAnchor} alt="anchor" height={150} width={150} className="hidden lg:block lg:absolute lg:top-30 lg:right-20 opacity-70 lg:-rotate-12 " />
                    </section>
                    <section className="order-3 bg-primary rounded-2xl">
                        <ContentSection sectionLayout={["h", "w", "p", "w"]} page="lockable" display="desktop" color="white" padding="both" />
                        <ContentSection sectionLayout={["h", "w", "p", ]} page="vests" display="mobile" padding="both" color="white" />
                    </section>
                </div>
            </div>
        </main>
    );
}

export default Safety