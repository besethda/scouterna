import { getPageHeadTitle } from "@/lib/utils"
import CardWithImage from "@/components/CardWithImage";
import WhiteGridContainer from "@/components/WhiteGridBox/WhiteGridContainer";
import { En} from "@/messages/en";
import { Sv } from "@/messages/sv";
import { use } from "react";

const pageItem = "lifestyle"
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params
    return getPageHeadTitle(locale, pageItem)
}


const LifeStyle = ({params}:{params: Promise<{locale: string}>}) => {
    const {locale} = use(params)
    const messages = locale === "en" ? En : Sv

    return (
        <div>
            <CardWithImage sectionTitle="lifestyle" logo="/heart.png" image="/images/DSCF3033.jpg"/>
            <WhiteGridContainer backgroundBlue={false} messageTitle="learning"/>
        </div>
    );
}

export default LifeStyle