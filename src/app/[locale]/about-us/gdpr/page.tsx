import { getPageHeadTitle } from "@/lib/utils"
import Breadcrumbs from "@/components/Breadcrumbs";
import { getId } from "@/lib/utils";
import SanityFlex from "@/components/SanityFlex";
import CardWithLogo from "@/components/CardWithLogo";
import ContentSection from "@/components/ContentSection";
import heart from '../../../../../public/blueHeart1.svg'
import Image from "next/image";

const pageItem = "gdpr"
const headDescription = "gdpr"
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return getPageHeadTitle(locale, pageItem, headDescription)
}

const Gdpr = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = await params
  const data = await getId("ec7ef49d-c0a3-4326-98ab-681d90994d8e")

  return (
    <main>
      <Breadcrumbs />
      <CardWithLogo image="/informationYellowBg.svg" sectionTitle="gdprcard" isH1 />
      <h2 className="text-nowrap w-fit py-2 md:px-22 px-3.5 text-h2 md:text-h2-desktop text-primary font-fraunces font-bold">{locale === "sv" ? data?.gdpr_section.title_se : data?.gdpr_section.title_en}</h2>
      <div className="flex justify-center bg-bg-blue pb-10">
        <div className="relative max-w-[92%] md:max-w-[95%] xl:max-w-[89%] lg:max-w-430 rounded-3xl w-full shadow-xl bg-bg-white overflow-hidden py-3 px-10">
          <SanityFlex data={data?.history_layout.scout_life} locale={locale} />
          <div>
            <Image src={heart} alt="birds" height={150} width={150} className="hidden lg:block lg:absolute top-0 lg:top-30 lg:right-30 opacity-70 lg:-rotate-12 " />
          </div>
        </div>
      </div>
      <div className="bg-bg-blue flex justify-center pb-10">
        <div className="max-w-[92%] md:max-w-[95%] xl:max-w-[89%] lg:max-w-430 rounded-3xl w-full shadow-xl overflow-hidden bg-primary **:text-text-white">
          <ContentSection sectionLayout={["s", "p"]} page={"syfte"} />
        </div>
      </div>
      <ContentSection sectionLayout={["s", "p", "p", "p", "p", "p", "p"]} page={"ethics"} display={"mobile"} />
    </main>
  );
}

export default Gdpr