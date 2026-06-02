import { getPageHeadTitle } from "@/lib/utils"
import { En } from "@/messages/en";
import { Sv } from "@/messages/sv";
import Breadcrumbs from "@/components/Breadcrumbs";
import { use } from "react";
import CardWithImage from "@/components/CardWithImage";
import Union from "./union";
import Scoutnet from "@/components/Scoutnet/scoutnet";
import ScoutInfo from "@/components/ScoutInfo";

const pageItem = "information"
const headDescription = "information"
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params
    return getPageHeadTitle(locale, pageItem, headDescription)
}

const Information = ({ params }: { params: Promise<{ locale: string }> }) => {

    const { locale } = use(params)
    const messages = locale === "en" ? En : Sv
    return (
        <div>
            <Breadcrumbs />
                <div className="w-full flex flex-col items-center">
                    <CardWithImage sectionTitle="memberInfo" logo="/dark-blue-hand.svg" image="/images/Boatsinarow.JPG" />
                    <ScoutInfo />
                    <Scoutnet />
                    <Union />
                </div>


            
           
        </div>
    );
}

export default Information