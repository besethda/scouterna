import { getPageHeadTitle } from "@/lib/utils"
import CardWithImage from "@/components/CardWithImage";
import WhiteGridContainer from "@/components/WhiteGridBox/WhiteGridContainer";
import { En } from "@/messages/en";
import { Sv } from "@/messages/sv";
import { use } from "react";
import LifeStyleSection from "./lifestyleSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import HeroContainer from "@/components/HeroContainer/HeroContainer";
import Activities from "@/components/Activities";
import PhotoContainer from "./photoContainer";
import CardWithLogo from "@/components/CardWithLogo";



const pageItem = "lifestyle"
const headDescription = "lifestyle"
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params
    return getPageHeadTitle(locale, pageItem, headDescription)
}


const LifeStyle = ({ params }: { params: Promise<{ locale: string }> }) => {
    const { locale } = use(params)
    const messages = locale === "en" ? En : Sv

    return (
        <main>
            <HeroContainer bgImages={{ mobile: "bg-[url('/images/IMG_1939.JPEG')]", desktop: "md:bg-[url('/images/rock.JPG')]" }} messageSection={"lifestyleHero"} position={"center"} />
            <Breadcrumbs />
            <div className="flex flex-col items-center">
                <CardWithLogo image="/wavesYellowBg.svg" sectionTitle="lifestyle" />
                <LifeStyleSection />
                <PhotoContainer backgroundBlue={false} messageTitle="learning" />
            </div>
            <Activities />

        </main>
    );
}

export default LifeStyle