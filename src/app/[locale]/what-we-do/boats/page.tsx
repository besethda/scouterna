import { getPageHeadTitle } from "@/lib/utils"
import CardWithoutImage from "@/components/CardWithoutImage";
import { En} from "@/messages/en";
import { Sv } from "@/messages/sv";
import { use } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import Optimister from "@/components/Optimister";
import Image01 from '../../../../../public/images/DSCF3036.jpg';
import Image02 from '../../../../../public/images/DSCF3036.jpg';
import Image03 from '../../../../../public/images/DSCF3017.jpg';
import Image04 from '../../../../../public/images/DSCF3017.jpg';
import Image05 from '../../../../../public/images/DSCF3111.jpg';
import Image06 from '../../../../../public//images/DSCF3071.jpg';
import Image07 from '../../../../../public/images/DSCF3076.jpg';
import Image08 from '../../../../../public/images/DSCF3089.jpg';
import Image09 from '../../../../../public/images/DSCF3095.jpg';


const pageItem = "boats"
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params
    return getPageHeadTitle(locale, pageItem)
}

const Boats = ({params}:{params: Promise<{locale: string}>}) => {
    const images = [Image01, Image02, Image03];
    const images02 = [Image04, Image05, Image06];
    const images03 = [Image07, Image08, Image09];
    const {locale} = use(params)
    const messages = locale === "en" ? En : Sv
    return (
        <div>
            <Breadcrumbs />
            <CardWithoutImage headline={messages?.boatsCard?.headline} logo="/blueBoat.svg" title={messages?.boatsCard?.title} text={messages?.boatsCard?.text} MDlogo="/blueBoatYellowBg.svg" />
            <Optimister 
                title={messages?.optimisterSection?.title}
                text={messages?.optimisterSection?.text}
                images={images}
            />
            <Optimister 
                title={messages?.optimisterSection?.title02}
                text={messages?.optimisterSection?.text02}
                images={images02}
            />
            <Optimister 
                title={messages?.optimisterSection?.title03}
                text={messages?.optimisterSection?.text03}
                images={images03}
            />
        </div>
    );
}

export default Boats