import { getPageHeadTitle, getSectionById } from "@/lib/utils"
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


const LifeStyle = async () => {
    const data = await getSectionById('17520090-02e5-4b1c-b8e0-af8801314244', "lifestyle_images")

    return (
        <main>
            <HeroContainer bgImages={{ mobile: data.lifestyle_images.lifestyle_hero_mobile.asset._ref, desktop: data.lifestyle_images.lifestyle_hero_desktop.asset._ref }} messageSection={"lifestyleHero"} position={"center"} />
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