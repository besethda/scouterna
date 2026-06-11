import { getPageHeadTitle } from "@/lib/utils"
import { En} from "@/messages/en";
import { Sv } from "@/messages/sv";
import { use } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import Optimister from "@/components/Optimister";
import { getId } from "@/lib/utils";
import CardWithLogo from "@/components/CardWithLogo";



const pageItem = "boats"
const headDescription = "boats"
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params
    return getPageHeadTitle(locale, pageItem, headDescription)
}

const Boats = async ({params}:{params: Promise<{locale: string}>}) => {
    const {locale} = await params
    const messages = locale === "en" ? En : Sv
    const data = await getId("a5df4d9e-daa3-4a1a-9b30-0780f314d5ec")

    return (
        <main>
            <Breadcrumbs />
            <div className="flex flex-col items-center">
                <CardWithLogo sectionTitle="boatsCard" image="/boatYellowBg.svg" isH1/>
                <div className="bg-bg-blue w-full flex flex-col items-center pb-8 md:pb-12">
                    {data?.boats.map((boatType:any, index:number)=> (
                        <Optimister 
                        title={{en: boatType.title_en, sv: boatType.title_sv}}
                        text={{en: boatType.description_en, sv: boatType.description_sv}}
                        images={boatType.boatSectionImages}
                        locale={locale}
                        key={index}
                    />
                    ))}

                </div>
            </div>
        </main>
    );
}

export default Boats