import { getPageHeadTitle } from "@/lib/utils"
import Breadcrumbs from "@/components/Breadcrumbs";
import { getId } from "@/lib/utils";
import SanityFlex from "@/components/SanityFlex";
import CardWithLogo from "@/components/CardWithLogo";
import ContentSection from "@/components/ContentSection";

const pageItem = "gdpr"
const headDescription = "gdpr"
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params
    return getPageHeadTitle(locale, pageItem, headDescription)
}

const Gdpr = async ({params}:{params: Promise<{locale: string}>}) => {
    const {locale} = await params
    const data = await getId("ec7ef49d-c0a3-4326-98ab-681d90994d8e")
        
    if(data?.history_layout.scout_life) return (
        <main>
            <Breadcrumbs />
            <CardWithLogo image="/informationYellowBg.svg" sectionTitle="gdprcard" isH1/> 
            <div className="flex flex-col items-center bg-bg-blue pb-10">
              {data?.history_layout.scout_life.map((e:any, index:number)=> {return(
                <div key={index} className={`max-w-[92%] md:max-w-[95%] xl:max-w-[89%] lg:max-w-430 rounded-3xl w-full shadow-xl ${index%2 === 0 ? "bg-bg-white" : "bg-primary"} my-8 overflow-hidden py-3 px-10`}>
                  <SanityFlex data={e.section_array} locale={locale} color={index%2 === 0 ? "black" : "white"}/>
                </div>
                )})}              
            </div>
        </main>
    );
}

export default Gdpr