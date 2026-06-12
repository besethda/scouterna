import { getPageHeadTitle } from "@/lib/utils"
import Breadcrumbs from "@/components/Breadcrumbs";
import Optimister from "@/components/Optimister";
import { getId } from "@/lib/utils";
import CardWithLogo from "@/components/CardWithLogo";
import { imageObjectType } from "@/components/Optimister";

type singleBoat = {
    boatSectionImages: imageObjectType[],
    description_en: string,
    description_sv: string,
    title_en: string,
    title_sv: string,
}

const pageItem = "boats"
const headDescription = "boats"
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params
    return getPageHeadTitle(locale, pageItem, headDescription)
}

const Boats = async ({params}:{params: Promise<{locale: string}>}) => {
    const {locale} = await params
    const data = await getId("a5df4d9e-daa3-4a1a-9b30-0780f314d5ec")

    return (
        <main className="w-full mx-auto lg:max-w-[var(--max-w-laptop)] 2xl:max-w-[var(--max-w-desktop)]">
            <Breadcrumbs />
            <div className="flex flex-col items-center">
                <CardWithLogo sectionTitle="boatsCard" image="/boatYellowBg.svg" isH1/>
                <div className="bg-bg-blue w-full flex flex-col items-center pb-8 md:pb-12">
                    {data?.boats.map((boatType:singleBoat, index:number)=> (
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