import { getPageHeadTitle } from "@/lib/utils"
import CardWithoutImage from "@/components/CardWithoutImage";
import { En} from "@/messages/en";
import { Sv } from "@/messages/sv";
import { use } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import CabinsSection from "@/components/CabinsSection";
import { getSectionById } from "@/lib/utils";

const pageItem = "cabins"
const headDescription = "cabins"
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params
    return getPageHeadTitle(locale, pageItem, headDescription)
}


const Cabins = async ({params}:{params: Promise<{locale: string}>}) => {
    const {locale} = await params
    const messages = locale === "en" ? En : Sv

    const data = await getSectionById('17520090-02e5-4b1c-b8e0-af8801314244', "cabin_images")

    return (
        <main>
            <Breadcrumbs />
            <div className="flex flex-col w-full items-center">
                <CardWithoutImage headline={messages?.cabinsCard?.headline} logo="/blueHouse.png" 
                title={messages?.cabinsCard?.title} text={messages?.cabinsCard?.text} MDlogo="/blueHouseYellowBg.svg" />  
            </div>
            <div className="flex justify-center">
                <CabinsSection images={{
                    imageMyset:data.cabin_images.myset.asset._ref, refMyset:data.cabin_images.myset.alt,
                    imageRuffen:data.cabin_images.ruffen.asset._ref, refRuffen:data.cabin_images.ruffen.alt,
                }}/>
            </div>
        </main>
    );
}

export default Cabins