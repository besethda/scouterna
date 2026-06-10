import { En } from "@/messages/en";
import { Sv } from "@/messages/sv";
import { use } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getPageHeadTitle } from "@/lib/utils";
import ContentSection from "@/components/ContentSection";
import Image from "next/image";
import CTABtn from "@/components/CTA-button";
import Sjohulorna from "../../../../../public/images/DSCF3033.jpg";
import { getId } from "@/lib/utils";
import Family from '../../../../../public/images/ParumMagna.png'
import FamilyEn from '../../../../../public/images/ParumMagnaEng.png'
import CardWithLogo from "@/components/CardWithLogo";
import ImageCard from "@/components/ImageCard";
import { PortableText } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";

const pageItems = [
  "spararscouter",
  "upptackarscouter",
  "utmanarscouter",
  "aventyrarscouter",
  "familjescouter",
];
const headDescriptions = [
  "spararscouter",
  "upptackarscouter",
  "utmanarscouter",
  "aventyrarscouter",
  "familjescouter",
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

const Groups = async ({
  params,
}: {
  params: Promise<{ locale: string; singleGroup: string }>;
}) => {

  const { singleGroup, locale } = await params
  const messages = locale === "en" ? En : Sv;

  const familyImageSrc = locale === "en" ? "/images/ParumMagnaEng.png" : "/images/ParumMagna.png";
  const data = await getId("2a5a4f80-b206-44b9-9e00-6b870a00f90e")
  if (!data) return null
  const sjohumlorna = data?.groups.find((e: any) => e.name_slug === "sjohumlorna") || null
  const kaparna = data?.groups.find((e: any) => e.name_slug === "kaparna") || null
  const utmanare = data?.groups.find((e: any) => e.name_slug === "utmanare") || null
  const konvojen = data?.groups.find((e: any) => e.name_slug === "konvojen") || null
  const smattarne = data?.groups.find((e: any) => e.name_slug === "smattarne") || null




  if (singleGroup === "spararscouter") {
    return (
      <main>
        <Breadcrumbs />
        <CardWithLogo image="/sjohumlor-frame.svg" sectionTitle="GroupSjohumlorna" isH1 logoTopRight />
        <section className="w-full flex flex-col bg-bg-white px-4 lg:px-22 rounded-3xl shadow-xl">
          <div className="md:flex md:gap-5 lg:gap-10">
            <div className="flex flex-col lg:max-w-280 px-4 py-10 pb-10 lg:pb-29 lg:pt-20">
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
                <div className="flex w-89.5 h-auto md:pt-5 md:pb-4 pb-6 md:hidden">
                  <ImageCard
                    imageTitle="spararscouter_title"
                    image={urlFor(sjohumlorna.groups.image.asset._ref).url()}
                    section="division"
                    page="group"
                    text=""
                    pin="red"
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
                  sectionLayout={["t"]}
                  page="sjohumlorMeeting"
                  background={"blue"}
                  padding={"none"}
                  child={true}
                />
                <div className="">
                  <div className="w-fit pt-2 text-body md:text-body-desktop text-text-black font-albert">{`${messages?.path === "/sv" ? "Dag: " : "Day: "}${messages?.path === "/sv" ? utmanare?.groups?.day_sv : utmanare.groups.day_en}`}</div>
                  <div className="w-fit pb-2 text-body md:text-body-desktop text-text-black font-albert">{`${messages?.path === "/sv" ? "Plats: " : "Place: "}${messages?.path === "/sv" ? utmanare?.groups?.place_sv : utmanare.groups.place_en}`}</div>
                </div>
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
            <div className="w-89.5 h-auto md:pt-20 md:pb-4 pb-6 hidden md:block">
              <ImageCard
                imageTitle="spararscouter_title"
                image={urlFor(sjohumlorna.groups.image.asset._ref).url()}
                section="division"
                page="group"
                text=""
                pin="red"
              />
            </div>
          </div>
        </section>
        <section className="bg-white w-full lg:max-w-430 lg:px-22 px-4 items-center mt-10 mb-10 max-w-7xl mx-auto rounded-3xl shadow-xl">
          <div className="w-full py-2">
            <ContentSection
              sectionLayout={["t"]}
              page="avdelningsledare"
              padding={"none"}
              child={true}
            />
            <PortableText components={{
              block:
              {
                normal: ({ children }) => <p className="w-fit py-2 text-body md:text-body-desktop text-text-black font-albert lg:max-w-[63%] mb-3">{children}</p>,
                h3: ({ children }) => <h3 className="w-fit py-2 text-h3 md:text-h3-desktop text-primary font-fraunces font-bold">{children}</h3>
              }, list: {
                bullet: ({ children }) => <p className="w-fit py-2 text-body md:text-body-desktop text-text-black font-albert lg:max-w-[63%] mb-3 list-disc pl-5">{children}</p>,
              }
            }}
              value={locale === "en" ? sjohumlorna?.leader.text_object.text_en_array : sjohumlorna?.leader.text_object.text_sv_array} />
          </div>
          <div className="flex w-89.5 aspect-7/5 h-auto md:pt-5 md:pb-4 pb-6">
            <Image
              src={urlFor(sjohumlorna.leader.text_object.image.asset._ref).url()}
              alt={sjohumlorna.leader.text_object.image.alt}
              className="rounded-2xl object-cover"
              width={358}
              height={257}
            />
          </div>
        </section>
      </main>
    );
  } else if (singleGroup === "upptackarscouter") {
    return (
      <main>
        <Breadcrumbs />
        <CardWithLogo image="/Kaparna-frame.svg" sectionTitle="GroupKaparna" isH1 logoTopRight />
        <section className="w-full flex flex-col bg-bg-white px-4 lg:px-22 rounded-3xl shadow-xl">
          <div className="md:flex md:gap-5 lg:gap-10">
            <div className="flex flex-col lg:max-w-280 px-4 py-10 pb-10 lg:pb-29 lg:pt-20">
              <div className="flex flex-col lg:flex-row xl:gap-55 items-center md:items-start">
                <div className="flex-1 [&_div]:w-full [&_div]:max-w-none">
                  <ContentSection
                    sectionLayout={["t", "p"]}
                    page="kaparnaUpptäckarscouter"
                    background={"blue"}
                    padding={"5"}
                    child={true}
                  />
                </div>
                <div className="flex w-89.5 h-auto md:pt-5 md:pb-4 pb-6 md:hidden">
                  <ImageCard
                    imageTitle="upptackarscouter_title"
                    image={urlFor(kaparna.groups.image.asset._ref).url()}
                    section="division"
                    page="group"
                    text=""
                    pin="pink"
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
                  sectionLayout={["t"]}
                  page="kaparnaMeeting"
                  background={"blue"}
                  padding={"5"}
                  child={true}
                />
                <div className="">
                  <div className="w-fit pt-2 text-body md:text-body-desktop text-text-black font-albert">{`${messages?.path === "/sv" ? "Dag: " : "Day: "}${messages?.path === "/sv" ? utmanare?.groups?.day_sv : utmanare.groups.day_en}`}</div>
                  <div className="w-fit pb-2 text-body md:text-body-desktop text-text-black font-albert">{`${messages?.path === "/sv" ? "Plats: " : "Place: "}${messages?.path === "/sv" ? utmanare?.groups?.place_sv : utmanare.groups.place_en}`}</div>
                </div>
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
            <div className="w-89.5 h-auto md:pt-20 md:pb-4 pb-6 hidden md:block">
              <ImageCard
                imageTitle="upptackarscouter_title"
                image={urlFor(kaparna.groups.image.asset._ref).url()}
                section="division"
                page="group"
                text=""
                pin="pink"
              />
            </div>
          </div>
        </section>
        <section className="bg-white w-full lg:max-w-430 lg:px-22 px-4 items-center mt-10 mb-10 max-w-7xl mx-auto rounded-3xl shadow-xl">
          <div className="w-full py-2">
            <ContentSection
              sectionLayout={["t"]}
              page="avdelningsledare"
              background={"white"}
              padding={"none"}
              child={true}
            />
            <PortableText components={{
              block:
              {
                normal: ({ children }) => <p className="w-fit py-2 text-body md:text-body-desktop text-text-black font-albert lg:max-w-[63%] mb-3">{children}</p>,
                h3: ({ children }) => <h3 className="w-fit py-2 text-h3 md:text-h3-desktop text-primary font-fraunces font-bold">{children}</h3>
              }, list: {
                bullet: ({ children }) => <p className="w-fit py-2 text-body md:text-body-desktop text-text-black font-albert lg:max-w-[63%] mb-3 list-disc pl-5">{children}</p>,
              }
            }}
              value={locale === "en" ? kaparna?.leader.text_object.text_en_array : kaparna?.leader.text_object.text_sv_array} />
          </div>
          <div className="flex w-89.5 aspect-7/5 h-auto md:pt-5 md:pb-4 pb-6">
            <Image
              src={urlFor(kaparna.leader.text_object.image.asset._ref).url()}
              alt={kaparna.leader.text_object.image.alt}
              className="rounded-2xl object-cover"
              width={358}
              height={257}
            />
          </div>
        </section>
      </main>
    );
  } else if (singleGroup === "utmanarscouter") {
    return (
      <main>
        <Breadcrumbs />
        <CardWithLogo image="/Utmanare-frame.svg" sectionTitle="GroupUtmanare" isH1 logoTopRight />
        <section className="w-full flex flex-col bg-bg-white px-4 lg:px-22 rounded-3xl shadow-xl">
          <div className="md:flex md:gap-5 lg:gap-10">
            <div className="flex flex-col lg:max-w-280 px-4 py-10 pb-10 lg:pb-29 lg:pt-20">
              <div className="flex flex-col lg:flex-row xl:gap-55 items-center md:items-start">
                <div className="flex-1 [&_div]:w-full [&_div]:max-w-none">
                  <ContentSection
                    sectionLayout={["t", "p"]}
                    page="utmanarscouter"
                    background={"blue"}
                    padding={"none"}
                    child={true}
                  />
                </div>
                <div className="flex w-89.5 h-auto md:pt-5 md:pb-4 pb-6 md:hidden">
                  <ImageCard
                    imageTitle="utmanarscouter_title"
                    image={urlFor(utmanare.groups.image.asset._ref).url()}
                    section="division"
                    page="group"
                    text=""
                    pin="red"
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
                  sectionLayout={["t"]}
                  page="utmanareMeeting"
                  background={"blue"}
                  padding={"5"}
                  child={true}
                />
                <div className="">
                  <div className="w-fit pt-2 text-body md:text-body-desktop text-text-black font-albert">{`${messages?.path === "/sv" ? "Dag: " : "Day: "}${messages?.path === "/sv" ? utmanare?.groups?.day_sv : utmanare.groups.day_en}`}</div>
                  <div className="w-fit pb-2 text-body md:text-body-desktop text-text-black font-albert">{`${messages?.path === "/sv" ? "Plats: " : "Place: "}${messages?.path === "/sv" ? utmanare?.groups?.place_sv : utmanare.groups.place_en}`}</div>
                </div>
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
            <div className="w-89.5 h-auto md:pt-20 md:pb-4 pb-6 hidden md:block">
              <ImageCard
                imageTitle="utmanarscouter_title"
                image={urlFor(utmanare.groups.image.asset._ref).url()}
                section="division"
                page="group"
                text=""
                pin="red"
              />
            </div>
          </div>
        </section>
        <section className="bg-white lg:max-w-430 lg:px-22 px-4 w-full mt-10 mb-10 max-w-7xl mx-auto rounded-3xl shadow-xl">
          <div className="w-full py-2">
            <ContentSection
              sectionLayout={["t"]}
              page="avdelningsledare"
              padding={"none"}
              background={"white"}
              child={true}
            />
            <PortableText components={{
              block:
              {
                normal: ({ children }) => <p className="w-fit py-2 text-body md:text-body-desktop text-text-black font-albert lg:max-w-[63%] mb-3">{children}</p>,
                h3: ({ children }) => <h3 className="w-fit py-2 text-h3 md:text-h3-desktop text-primary font-fraunces font-bold">{children}</h3>
              }, list: {
                bullet: ({ children }) => <p className="w-fit py-2 text-body md:text-body-desktop text-text-black font-albert lg:max-w-[63%] mb-3 list-disc pl-5">{children}</p>,
              }
            }}
              value={locale === "en" ? utmanare?.leader.text_object.text_en_array : utmanare?.leader.text_object.text_sv_array} />
          </div>
          <div className="flex w-89.5 aspect-7/5 h-auto md:pt-5 md:pb-4 pb-6">
            <Image
              src={urlFor(utmanare.leader.text_object.image.asset._ref).url()}
              alt={utmanare.leader.text_object.image.alt}
              className="rounded-2xl object-cover"
              width={358}
              height={257}
            />
          </div>
        </section>
      </main>
    );
  } else if (singleGroup === "aventyrarscouter") {
    return (
      <main>
        <Breadcrumbs />
        <CardWithLogo image="/Konvojen-frame.svg" sectionTitle="GroupKonvojen" isH1 logoTopRight />
        <section className="w-full flex flex-col  bg-bg-white px-4 lg:px-22 rounded-3xl shadow-xl">
          <div className="md:flex md:gap-5 lg:gap-10">
            <div className="flex flex-col lg:max-w-280 px-4 py-10 pb-10 lg:pb-29 lg:pt-20">
              <div className="flex flex-col lg:flex-row xl:gap-55 items-center md:items-start">
                <div className="flex-1 [&_div]:w-full [&_div]:max-w-none">
                  <ContentSection
                    sectionLayout={["t", "p"]}
                    page="äventyrarscouter"
                    background={"blue"}
                    padding={"5"}
                    child={true}
                  />
                </div>
                <div className="flex w-89.5 h-auto md:pt-5 md:pb-4 pb-6 md:hidden">
                  <ImageCard
                    imageTitle="aventyrarscouter_title"
                    image={urlFor(konvojen?.groups?.image.asset._ref).url()}
                    section="division"
                    page="group"
                    text=""
                    pin="dark_red"
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
                  sectionLayout={["t"]}
                  page="konvojenMeeting"
                  background={"blue"}
                  padding={"5"}
                  child={true}
                />
                <div className="">
                  <div className="w-fit pt-2 text-body md:text-body-desktop text-text-black font-albert">{`${messages?.path === "/sv" ? "Dag: " : "Day: "}${messages?.path === "/sv" ? konvojen?.groups?.day_sv : konvojen.groups.day_en}`}</div>
                  <div className="w-fit pb-2 text-body md:text-body-desktop text-text-black font-albert">{`${messages?.path === "/sv" ? "Plats: " : "Place: "}${messages?.path === "/sv" ? konvojen?.groups?.place_sv : konvojen.groups.place_en}`}</div>
                </div>
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
            <div className="w-89.5 h-auto md:pt-20 md:pb-4 pb-6 hidden md:block">
              <ImageCard
                imageTitle="aventyrarscouter_title"
                image={urlFor(konvojen?.groups?.image.asset._ref).url()}
                section="division"
                page="group"
                text=""
                pin="dark_red"
              />
            </div>
          </div>
        </section>
        <section className="bg-white lg:max-w-430 lg:px-22 px-4 w-full mt-10 mb-10 max-w-7xl mx-auto rounded-3xl shadow-xl">
          <div className="w-full py-2">
            <ContentSection
              sectionLayout={["t"]}
              page="avdelningsledare"
              padding={"none"}
              background={"white"}
              child={true}
            />
            <PortableText components={{
              block:
              {
                normal: ({ children }) => <p className="w-fit py-2 text-body md:text-body-desktop text-text-black font-albert lg:max-w-[63%] mb-3">{children}</p>,
                h3: ({ children }) => <h3 className="w-fit py-2 text-h3 md:text-h3-desktop text-primary font-fraunces font-bold">{children}</h3>
              }, list: {
                bullet: ({ children }) => <p className="w-fit py-2 text-body md:text-body-desktop text-text-black font-albert lg:max-w-[63%] mb-3 list-disc pl-5">{children}</p>,
              }
            }}
              value={locale === "en" ? konvojen?.leader.text_object.text_en_array : konvojen?.leader.text_object.text_sv_array} />
          </div>
          <div className="flex w-89.5 aspect-7/5 h-auto md:pt-5 md:pb-4 pb-6">
            <Image
              src={urlFor(konvojen.leader.text_object.image.asset._ref).url()}
              alt={konvojen.leader.text_object.image.alt}
              className="rounded-2xl object-cover"
              width={358}
              height={257}
            />
          </div>
        </section>
      </main>
    );
  } else if (singleGroup === "familjescouter") {
    return (
      <main>
        <Breadcrumbs />
        <CardWithLogo image="/Familje-frame.svg" sectionTitle="GroupFamily" isH1 logoTopRight />
        <section className="w-full flex flex-col  bg-bg-white rounded-3xl shadow-xl">
          <div className="flex flex-col lg:max-w-430 lg:px-22 w-full px-4 mx-auto py-10 pb-10 lg:pb-29 lg:pt-20">
            <div className="flex flex-col lg:flex-row gap-4 xl:gap-55 md:items-start ">
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
                <ImageCard
                  imageTitle="familjescouter_title"
                  image={urlFor(smattarne?.groups?.image.asset._ref).url()}
                  section="division"
                  page="group"
                  text=""
                  pin="red"
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
                <ImageCard
                  imageTitle="familjescouter_photoTitle"
                  image={familyImageSrc}
                  section="division"
                  page="group"
                  text=""
                  pin="red"
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
                padding={"3"}
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
            [&_button]:hover:hover:brightness-104
          ">
              <a
                href="https://media.scoutcontent.se/uploads/2021/03/markbart-2020.pdf"
                target="_blank"
              >
                <CTABtn text={messages?.familjescouterButton} />
              </a>
            </div>
          </div>
        </section>
      </main >
    )
  }
};

export default Groups;
