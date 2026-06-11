import DivisionsBox from "@/components/DivisionsContainer/DivisionsBox";
import MapWrapper from "@/components/Map/MapWrapper";
import { En } from "@/messages/en";
import { Sv } from "@/messages/sv";
import ContentSection from "@/components/ContentSection";
import { getPageHeadTitle } from "@/lib/utils"
import Breadcrumbs from "@/components/Breadcrumbs";
import { getSectionById, getId } from "@/lib/utils";
import CardWithLogo from "@/components/CardWithLogo";



const pageItem = "ruffen"
const headDescription = "ruffen"
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params
    return getPageHeadTitle(locale, pageItem, headDescription)
}

const Ruffen = async ({ params }: { params: Promise<{ locale: string }> }) => {

    const { locale } = await params
    const messages = locale === "en" ? En : Sv
    const data = await getSectionById('17520090-02e5-4b1c-b8e0-af8801314244', "cabin_images")
    const groupData = await getId('2a5a4f80-b206-44b9-9e00-6b870a00f90e')
    

    return (
        <main>
            <Breadcrumbs />
            <div className="flex flex-col items-center w-full">
                <CardWithLogo image="/cabinYellowBg.svg" sectionTitle="ruffen" isH1 logoTopRight/>
                <section className="md:bg-bg-blue py-10 flex w-full flex-col items-center lg:max-w-[980px] 2xl:max-w-[1440px]">
                    <ContentSection sectionLayout={["t", "p"]} page={"ruffenDivisions"} child={false} padding="none" />
                    <div className="flex flex-col px-4 lg:px-0 gap-1 md:grid md:grid-cols-2 w-full lg:max-w-430 md:gap-2 [&>*]:w-full">
                        <DivisionsBox division={"spararscouter"} boxStyle={"info"} data={groupData?.groups.find((e:any) => e.name_slug === "sjohumlorna") || null}/>
                        <DivisionsBox division={"upptackarscouter"} boxStyle={"info"} data={groupData?.groups.find((e:any) => e.name_slug === "kaparna") || null}/>
                        <DivisionsBox division={"utmanarscouter"} boxStyle={"info"} data={groupData?.groups.find((e:any) => e.name_slug === "utmanare") || null}/>
                        <DivisionsBox division={"aventyrarscouter"} boxStyle={"info"} data={groupData?.groups.find((e:any) => e.name_slug === "konvojen") || null}/>
                        <DivisionsBox division={"familjescouter"} boxStyle={"info"} data={groupData?.groups.find((e:any) => e.name_slug === "smattarne") || null}/>
                    </div>
                </section>
                <section className="pb-10 md:py-25 px-4 lg:px-[22px] lg:max-w-430 w-full 2xl:max-w-[1440px] 2xl:px-0 ">
                    <ContentSection sectionLayout={["t", "p", "p"]} page={"map"} padding="top" child={true} />
                    <div className="2xl:pt-[50px]">
                        <MapWrapper page="ruffen" />
                    </div>
                </section>
            </div>

        </main>
    );
}

export default Ruffen
