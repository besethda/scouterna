import { En } from "@/messages/en";
import { Sv } from "@/messages/sv";
import { use } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getPageHeadTitle } from "@/lib/utils";
import ContentSection from "@/components/ContentSection";
import Image from "next/image";
import CTABtn from "@/components/CTA-button";
import Sjohulorna from "../../../../../public/images/DSCF3033.jpg";
import GroupIntro from "@/components/GroupIntro";
import Link from 'next/link';
import Family from '../../../../../public/images/ParumMagna.png'
import FamilyEn from '../../../../../public/images/ParumMagnaEng.png'

const pageItems = [
  "sjohumlorna",
  "kaparna",
  "utmanare",
  "konvojen",
  "smattarne",
];
const headDescriptions = [
  "sjohumlorna",
  "kaparna",
  "utmanare",
  "konvojen",
  "smattarne",
]
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; singleGroup: string }>;
}) {
  const { locale, singleGroup } = await params;
  const IsSingleGroup = pageItems.includes(singleGroup);
  const matchedTabTitle = headDescriptions.find(title => title === singleGroup)
  const tabTitle = IsSingleGroup && matchedTabTitle
    ? getPageHeadTitle(locale, singleGroup, matchedTabTitle)
    : getPageHeadTitle(locale, "HSS | Hem", "Hem sidan");
  return tabTitle
}

const Groups = ({
  params,
}: {
  params: Promise<{ locale: string; singleGroup: string }>;
}) => {



  const { singleGroup, locale } = use(params);
  const messages = locale === "en" ? En : Sv;

  const familyImageSrc = locale === "en" ? FamilyEn : Family;

  if (singleGroup === "sjohumlorna") {
    return (
      <main>
        <Breadcrumbs />
        <div className="flex justify-center">
          <GroupIntro headline={messages?.GroupIntro?.FAMheadline} title={messages?.GroupIntro?.SJMtitle} text={messages?.GroupIntro?.SJMtext} logo="/sjohumlor-frame.svg" />
        </div>
        <section className="w-full flex flex-col items-center bg-bg-blue">
          <div className="flex flex-col lg:max-w-430 lg:px-22 w-full px-4 py-10 pb-10 lg:pb-29 lg:pt-20">
            <div className="flex flex-col lg:flex-row xl:gap-55 items-center md:items-start">
              <div className="flex-1 [&_div]:w-full [&_div]:max-w-none">
                <ContentSection
                  sectionLayout={["t", "p"]}
                  page="sjohumlornaSpårarscouter"
                  background={"blue"}
                  padding={"none"}
                  child={true}
                />
              </div>
              <div className="flex w-89.5 h-auto md:pt-5 md:pb-4 pb-6">
                <Image
                  src={Sjohulorna}
                  alt="sjöhumlorna"
                  className="rounded-2xl object-cover"
                  width={358}
                  height={257}
                />
              </div>
            </div>
            <ContentSection
              sectionLayout={["t", "p"]}
              page="sjohumlornaAge"
              background={"blue"}
              padding={"none"}
              child={true}
            />
            <div className="flex flex-col pb-4 w-full">
              <ContentSection
                sectionLayout={["t", "p", "p"]}
                page="sjohumlorMeeting"
                background={"blue"}
                padding={"none"}
                child={true}
              />
              <ContentSection
                sectionLayout={["t", "p"]}
                page="sjohumlorPlace"
                background={"blue"}
                padding={"none"}
                child={true}
              />
            </div>
            <div className="
              [&_button]:border 
            [&_button]:border-green
            [&_button]:bg-green-opaque 
            [&_button]:text-primary
              [&_button]:rounded-2xl
              [&_button]:px-6
              [&_button]:py-3
            [&_button]:hover:bg-green-opaque
              [&_button]:hover:brightness-102"
            >
              <a
              href="https://media.scoutcontent.se/uploads/2021/02/Markesaffisch-A3-Sparare-20211.pdf"
              target="_blank"
              className="px-0"
              >
                <CTABtn text={messages?.sjohumlorButton} />
              </a>
            </div>
          </div>
        </section>
        <section className="bg-white w-full lg:max-w-430 lg:px-22 px-4 items-center mt-10 mb-10 max-w-7xl mx-auto">
          <ContentSection
            sectionLayout={["t", "p"]}
            page="avdelningsledare"
            padding={"5"}
            child={true}
          />
        </section>
      </main>
    );
  } else if (singleGroup === "kaparna") {
    return (
      <main>
        <Breadcrumbs />
        <div className="flex justify-center">
          <GroupIntro headline={messages?.GroupIntro?.FAMheadline} title={messages?.GroupIntro?.KAPtitle} text={messages?.GroupIntro?.KAPtext} logo="/Kaparna-frame.svg" />
        </div>
        <section className="w-full flex flex-col items-center bg-bg-blue">
          <div className="flex flex-col lg:max-w-430 lg:px-22 w-full px-4 mx-auto py-10 pb-10 lg:pb-29 lg:pt-20">
            <div className="flex flex-col lg:flex-row gap-4 xl:gap-55 items-center md:items-start">
              <div className="flex-1 [&_div]:w-full [&_div]:max-w-none">
                <ContentSection
                  sectionLayout={["t", "p"]}
                  page="kaparnaUpptäckarscouter"
                  background={"blue"}
                  padding={"5"}
                  child={true}
                />
              </div>
              <div className="flex w-89.5 h-auto md:pt-5 md:px-4">
                <Image
                  src={Sjohulorna}
                  alt="kaparna"
                  className="rounded-2xl object-cover"
                  width={358}
                  height={257}
                />
              </div>
            </div>
            <ContentSection
              sectionLayout={["t", "p"]}
              page="kaparnaAge"
              background={"blue"}
              padding={"3"}
              child={true}
            />
            <div className="flex flex-col gap-4 justify-center pb-4">
              <ContentSection
                sectionLayout={["t", "p", "p"]}
                page="kaparnaMeeting"
                background={"blue"}
                padding={"5"}
                child={true}
              />
              <ContentSection
                sectionLayout={["t", "p"]}
                page="kaparnaPlace"
                background={"blue"}
                padding={"5"}
                child={true}
              />
            </div>
            <div className="
              [&_button]:border 
            [&_button]:border-lightBlue
            [&_button]:bg-lightBlue-opaque
            [&_button]:text-primary
              [&_button]:rounded-2xl
              [&_button]:px-6
              [&_button]:py-3
            [&_button]:hover:bg-lightBlue-opaque
              [&_button]:hover:brightness-102"
            >
              <a
              href="https://media.scoutcontent.se/uploads/2021/02/Markesaffisch-A3-Upptackare-20211.pdf"
              target="_blank"
              > 
              <CTABtn text={messages?.kaparnaButton} />
              </a>
            </div>
          </div>
        </section>
        <section className="bg-white w-full lg:max-w-430 lg:px-22 px-4 items-center mt-10 mb-10 max-w-7xl mx-auto">
          <ContentSection
            sectionLayout={["t", "p"]}
            page="avdelningsledare"
            padding={"5"}
            child={true}
          />
        </section>
      </main>
    );
  } else if (singleGroup === "utmanare") {
    return (
      <main>
        <Breadcrumbs />
        <div className="flex justify-center">
          <GroupIntro headline={messages?.GroupIntro?.FAMheadline} title={messages?.GroupIntro?.UTtitle} text={messages?.GroupIntro?.UTtext} logo="/Utmanare-frame.svg" />
        </div>
        <section className="w-full flex flex-col items-center bg-bg-blue">
          <div className="flex flex-col lg:max-w-430 lg:px-22 w-full px-4 mx-auto py-10 pb-10 lg:pb-29 lg:pt-20">
            <div className="flex flex-col lg:flex-row gap-4 xl:gap-55 items-center md:items-start">
              <div className="flex-1 [&_div]:w-full [&_div]:max-w-none">
                <ContentSection
                  sectionLayout={["t", "p"]}
                  page="utmanarscouter"
                  background={"blue"}
                  padding={"5"}
                  child={true}
                />
              </div>
              <div className="flex w-89.5 h-auto md:pt-5 md:px-4">
                <Image
                  src={Sjohulorna}
                  alt="utmanare"
                  className="rounded-2xl object-cover"
                  width={358}
                  height={257}
                />
              </div>
            </div>
            <ContentSection
              sectionLayout={["t", "p"]}
              page="utmanareAge"
              background={"blue"}
              padding={"3"}
              child={true}
            />
            <div className="flex flex-col gap-4 justify-center pb-4">
              <ContentSection
                sectionLayout={["t", "p", "p"]}
                page="utmanareMeeting"
                background={"blue"}
                padding={"5"}
                child={true}
              />
              <ContentSection
                sectionLayout={["t", "p"]}
                page="utmanarePlace"
                background={"blue"}
                padding={"5"}
                child={true}
              />
            </div>
            <div className="
              [&_button]:border 
            [&_button]:border-pink
            [&_button]:bg-pink-opaque 
            [&_button]:text-primary
              [&_button]:rounded-2xl
              [&_button]:px-6
              [&_button]:py-3
            [&_button]:hover:bg-pink-opaque
              [&_button]:hover:brightness-104"
            >
              <a
              href="https://www.scouterna.se/scout-ledare-kar/leda-scouting/program/utmanare/"
              target="_blank"
              >
                <CTABtn text={messages?.utmanareButton} />
              </a>
            </div>
          </div>
        </section>
        <section className="bg-white lg:max-w-430 lg:px-22 px-4 w-full mt-10 mb-10 max-w-7xl mx-auto">
          <ContentSection
            sectionLayout={["t", "p"]}
            page="avdelningsledare"
            padding={"5"}
            child={true}
          />
        </section>
      </main>
    );
  } else if (singleGroup === "konvojen") {
    return (
      <main>
        <Breadcrumbs />
        <div className="flex justify-center">
          <GroupIntro headline={messages?.GroupIntro?.FAMheadline} title={messages?.GroupIntro?.KONtitle} text={messages?.GroupIntro?.KONtext} logo="/Konvojen-frame.svg" />
        </div>
        <section className="w-full flex flex-col items-center bg-bg-blue">
        <div className="flex flex-col lg:max-w-430 lg:px-22 w-full px-4 mx-auto py-10 pb-10 lg:pb-29 lg:pt-20">
            <div className="flex flex-col lg:flex-row gap-4 xl:gap-55 items-center md:items-start">
              <div className="flex-1 [&_div]:w-full [&_div]:max-w-none">
                <ContentSection
                  sectionLayout={["t", "p"]}
                  page="äventyrarscouter"
                  background={"blue"}
                  padding={"5"}
                  child={true}
                />
              </div>
              <div className="flex w-89.5 h-auto md:pt-5 md:px-4">
                <Image
                  src={Sjohulorna}
                  alt="konvojen"
                  className="rounded-2xl object-cover"
                  width={358}
                  height={257}
                />
              </div>
            </div>
            <ContentSection
              sectionLayout={["t", "p"]}
              page="konvojenAge"
              background={"blue"}
              padding={"3"}
              child={true}
            />
            <div className="flex flex-col gap-4 justify-center pb-4">
              <ContentSection
                sectionLayout={["t", "p", "p", "p"]}
                page="konvojenMeeting"
                background={"blue"}
                padding={"5"}
                child={true}
              />
              <ContentSection
                sectionLayout={["t", "p"]}
                page="konvojenPlace"
                background={"blue"}
                padding={"5"}
                child={true}
              />
            </div>
            <div className="
              [&_button]:border 
            [&_button]:border-orange
            [&_button]:bg-orange-opaque
            [&_button]:text-primary
              [&_button]:rounded-2xl
              [&_button]:px-6
              [&_button]:py-3
            [&_button]:hover:bg-orange-opaque
              [&_button]:hover:brightness-102"
            >
              <a
              href="https://media.scoutcontent.se/uploads/2021/02/Markesaffisch-A3-Aventyrare-20211.pdf"
              target="_blank"
              >
                <CTABtn text={messages?.konvojenButton} />
              </a>
            </div>
          </div>
        </section>
        <section className="bg-white lg:max-w-430 lg:px-22 px-4 w-full mt-10 mb-10 max-w-7xl mx-auto">
          <ContentSection
            sectionLayout={["t", "p"]}
            page="avdelningsledare"
            padding={"5"}
            child={true}
          />
        </section>
      </main>
    );
  } else if (singleGroup === "smattarne") {
    return (
    <main>
      <Breadcrumbs />
        <div className="flex justify-center">
          <GroupIntro headline={messages?.GroupIntro?.FAMheadline} title={messages?.GroupIntro?.FAMtitle} text={messages?.GroupIntro?.FAMtext} logo="/Familje-frame.svg" />
        </div>
        <section className="w-full flex flex-col items-center bg-bg-blue">
        <div className="flex flex-col lg:max-w-430 lg:px-22 w-full px-4 mx-auto py-10 pb-10 lg:pb-29 lg:pt-20">
          <div className="flex flex-col lg:flex-row gap-4 xl:gap-55 items-center md:items-start ">
            <div className="flex-1 [&_div]:w-full [&_div]:max-w-none">
              <ContentSection 
                sectionLayout={["t", "p", "p", "p"]}
                page="BarnOchVuxnaTillsammans"
                background={"blue"}
                padding={"5"}
                child={true}
              />
            </div>
            <div className="flex w-89.5 h-auto md:pt-5 md:px-4">
              <Image
                src={Sjohulorna}
                alt="konvojen"
                className="rounded-2xl object-cover w-full"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 xl:gap-55 items-center lg:flex-row md:items-start">
              <div className="flex-1 [&_div]:w-full [&_div]:max-w-none">
                <ContentSection
                  sectionLayout={["t", "p", "p"]}
                  page="ParumMagna"
                  background={"blue"}
                  padding={"3"}
                  child={true}
                />
              </div>
              <div className="flex w-89.5 h-auto md:pt-5 md:px-4">
                <Image
                  src={familyImageSrc}
                  alt="Parum & Magna"
                  className="rounded-2xl object-cover w-full"
                  width={358}
                  height={257}
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 justify-center">
              <ContentSection
                sectionLayout={["t", "p", "p"]}
                page="Familjescoutsagor"
                background={"blue"}
                padding={"3"}
                child={true}
              />
              <ContentSection
                sectionLayout={["t", "p"]}
                page="Märken"
                background={"blue"}
                padding={"3"}
                child={true}
              />
            </div>
            <div className="flex w-89.5 h-auto md:pt-5 md:px-4">
              <Image
                src={Sjohulorna}
                alt="Familjescouter img"
                className="rounded-2xl object-cover w-full"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 justify-center pb-4">
            <ContentSection
              sectionLayout={["t", "p", "p"]}
              page="Familjescoutsagor"
              background={"blue"}
              padding={"3"}
              child={true} 
            />
            <ContentSection
              sectionLayout={["t", "p"]}
              page="Märken"
              background={"blue"}
              padding={"5"}
              child={true} 
            />
          </div>
          <div className="
              [&_button]:border 
            [&_button]:border-purple
          [&_button]:bg-purple-opaque
          [&_button]:text-primary
            [&_button]:rounded-2xl
            [&_button]:px-6
            [&_button]:py-3
            [&_button]:hover:bg-purple-opaque
            [&_button]:hover:hover:brightness-104">
            <a
              href="https://media.scoutcontent.se/uploads/2021/03/markbart-2020.pdf"
              target="_blank"
              >
              <CTABtn text={messages?.familjescouterButton} />
              </a>
          </div>
      </section>
    </main> 
    )
  }
};

export default Groups;
