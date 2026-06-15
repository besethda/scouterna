import DivisionsBox from "@/components/DivisionsContainer/DivisionsBox";
import MapWrapper from "@/components/Map/MapWrapper";
import ContentSection from "@/components/ContentSection";
import { getPageHeadTitle } from "@/lib/utils"
import Breadcrumbs from "@/components/Breadcrumbs";
import { getId } from "@/lib/utils";
import CardWithLogo from "@/components/CardWithLogo";
import birds from '../../../../../../public/blueBirds1.png'
import Image from "next/image";
import boat from '../../../../../../public/blueBoat1.svg'


const pageItem = "ruffen"
const headDescription = "ruffen"
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params
    return getPageHeadTitle(locale, pageItem, headDescription)
}

const Ruffen = async () => {


  
    const groupData = await getId('2a5a4f80-b206-44b9-9e00-6b870a00f90e')


    return (
        <main className="w-full mx-auto lg:max-w-[var(--max-w-laptop)] 2xl:max-w-[var(--max-w-desktop)]">
            <Breadcrumbs />
            <div className="flex flex-col items-center w-full">
                <CardWithLogo image="/cabinYellowBg.svg" sectionTitle="ruffen" isH1 logoTopRight />
                <div className="relative bg-white rounded-2xl shadow-xl mb-12.5 mx-4 md:mx-0 md:w-[96%] lg:w-full ">
                    <ContentSection sectionLayout={["t", "p", "t", "p", "s", "p", "p", "p"]} page="aboutRuffen" padding="both" />
                    <Image src={birds} alt="birds" height={150} width={150} className="-top-10 right-0 md:block absolute md:top-15 md:right-10 opacity-90 " />
                    <Image src={boat} alt="boat" height={150} width={150} className="hidden md:block md:absolute md:bottom-15 md:right-40 opacity-90 w-37.5 h-37.5" />          
                </div>
                <section className="md:bg-bg-blue flex w-full flex-col items-center">
                    <div className="md:w-[92%] w-[90%] lg:w-full">
                      <ContentSection sectionLayout={["t", "p"]} page={"ruffenDivisions"} child={true} padding="none" />
                    </div>
                    <div className="flex flex-col px-4 lg:px-0 gap-1 md:grid md:grid-cols-2 w-full lg:max-w-430 md:gap-2 [&>*]:w-full">
                        <DivisionsBox division={"spararscouter"} boxStyle={"info"} data={groupData?.groups.find((e: any) => e.name_slug === "sjohumlorna") || null} />
                        <DivisionsBox division={"upptackarscouter"} boxStyle={"info"} data={groupData?.groups.find((e: any) => e.name_slug === "kaparna") || null} />
                        <DivisionsBox division={"utmanarscouter"} boxStyle={"info"} data={groupData?.groups.find((e: any) => e.name_slug === "utmanare") || null} />
                        <DivisionsBox division={"aventyrarscouter"} boxStyle={"info"} data={groupData?.groups.find((e: any) => e.name_slug === "konvojen") || null} />
                        <DivisionsBox division={"familjescouter"} boxStyle={"info"} data={groupData?.groups.find((e: any) => e.name_slug === "smattarne") || null} />
                    </div>
                </section>
                <section className="pb-10 md:pt-6 md:pb-16 px-4 lg:px-[22px] w-full 2xl:px-0 ">
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
