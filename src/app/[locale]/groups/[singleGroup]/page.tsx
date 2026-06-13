import { En } from "@/messages/en";
import { Sv } from "@/messages/sv";
import { use } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getPageHeadTitle } from "@/lib/utils";
import ContentSection from "@/components/ContentSection";
import Image from "next/image";
import CTABtn from "@/components/CTA-button";
import { getId } from "@/lib/utils";
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
];
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; singleGroup: string }>;
}) {
  const { locale, singleGroup } = await params;
  const IsSingleGroup = pageItems.includes(singleGroup);
  const matchedTabTitle = headDescriptions.find(
    (title) => title === singleGroup,
  );
  const tabTitle =
    IsSingleGroup && matchedTabTitle
      ? getPageHeadTitle(locale, singleGroup, matchedTabTitle)
      : getPageHeadTitle(locale, "HSS | Hem", "Hem sidan");
  return tabTitle;
}

const Groups = async ({
  params,
}: {
  params: Promise<{ locale: string; singleGroup: string }>;
}) => {
  const { singleGroup, locale } = await params;
  const messages = locale === "en" ? En : Sv;

  const familyImageSrc =
    locale === "en" ? "/images/ParumMagnaEng.png" : "/images/ParumMagna.png";
  const data = await getId("2a5a4f80-b206-44b9-9e00-6b870a00f90e");
  if (!data) return null;
  const sjohumlorna =
    data?.groups.find((e: any) => e.name_slug === "sjohumlorna") || null;
  const kaparna =
    data?.groups.find((e: any) => e.name_slug === "kaparna") || null;
  const utmanare =
    data?.groups.find((e: any) => e.name_slug === "utmanare") || null;
  const konvojen =
    data?.groups.find((e: any) => e.name_slug === "konvojen") || null;
  const smattarne =
    data?.groups.find((e: any) => e.name_slug === "smattarne") || null;

  if (singleGroup === "spararscouter") {
    return (
      <>
        <main className="md:max-w-360 md:mx-auto">
          <Breadcrumbs />
          <CardWithLogo
            image="/sjohumlor-frame.svg"
            sectionTitle="GroupSjohumlorna"
            isH1
            logoTopRight
          />
          <div className="px-4 md:px-4 lg:px-0 2xl:px-4 lg:max-w-245 xl:mx-auto 2xl:max-w-360">
            <section className="w-auto flex flex-col bg-bg-white px-4 rounded-3xl shadow-xl">
              <div className="md:flex md:gap-5 lg:gap-20">
                <div className="flex flex-col lg:min-w-[50%] lg:px-6 px-0 py-4 pb-7 lg:pb-15 ">
                  <div className="flex flex-col lg:flex-row xl:gap-20 items-center md:items-start">
                    <div className="flex-1 [&_div]:w-full [&_div]:max-w-none">
                      <ContentSection
                        sectionLayout={["g", "p"]}
                        page="sjohumlornaSpårarscouter"
                        padding={"none"}
                        child={true}
                      />
                    </div>
                    <div className="flex justify-center w-89.5 h-auto py-5 md:pt-5 md:pb-4 pb-6 md:hidden">
                      <ImageCard
                        imageTitle="spararscouter_title"
                        image={urlFor(
                          sjohumlorna.groups.image.asset._ref,
                        ).url()}
                        section="division"
                        page="group"
                        text=""
                        pin="red"
                      />
                    </div>
                  </div>
                  <ContentSection
                    sectionLayout={["g", "p"]}
                    page="sjohumlornaAge"
                    padding={"none"}
                    child={true}
                  />
                  <div className="flex flex-col pb-4 w-full">
                    <ContentSection
                      sectionLayout={["g"]}
                      page="sjohumlorMeeting"
                      padding={"none"}
                      child={true}
                    />
                    <div className="">
                      <div className="w-fit pt-2 text-body md:text-body-desktop text-text-black font-albert">{`${messages?.path === "/sv" ? "Dag: " : "Day: "}${messages?.path === "/sv" ? utmanare?.groups?.day_sv : utmanare.groups.day_en}`}</div>
                      <div className="w-fit pb-2 text-body md:text-body-desktop text-text-black font-albert">{`${messages?.path === "/sv" ? "Plats: " : "Place: "}${messages?.path === "/sv" ? utmanare?.groups?.place_sv : utmanare.groups.place_en}`}</div>
                    </div>
                    <div className="flex-1 [&_div]:w-full [&_div]:max-w-none">
                      <ContentSection
                        sectionLayout={["g", "p"]}
                        page="sjohumlorPlace"
                        padding={"none"}
                        child={true}
                      />
                    </div>
                  </div>
                  <div
                    className="
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
                <div className="w-full h-auto md:pt-20 md:pb-4 pb-6 hidden md:flex md:justify-end md:px-5.75">
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
            <section className="bg-white w-full h-160 md:h-110 lg:max-w-430 lg:px-10 px-4 items-center mt-12.5 mb-12.5 max-w-7xl mx-auto rounded-3xl shadow-xl md:flex">
              <div className="w-full py-2 pb-15 self-start">
                <ContentSection
                  sectionLayout={["g"]}
                  page="avdelningsledare"
                  padding={"none"}
                  child={true}
                />
                <PortableText
                  components={{
                    block: {
                      normal: ({ children }) => (
                        <p className="w-fit py-2 text-body md:text-body-desktop text-text-black font-albert lg:max-w-[63%] mb-3">
                          {children}
                        </p>
                      ),
                      h3: ({ children }) => (
                        <h3 className="w-fit py-2 text-h3 md:text-h3-desktop text-primary font-fraunces font-bold">
                          {children}
                        </h3>
                      ),
                    },
                    list: {
                      bullet: ({ children }) => (
                        <p className="w-fit py-2 text-body md:text-body-desktop text-text-black font-albert lg:max-w-[63%] mb-3 list-disc pl-5">
                          {children}
                        </p>
                      ),
                    },
                  }}
                  value={
                    locale === "en"
                      ? sjohumlorna?.leader.text_object.text_en_array
                      : sjohumlorna?.leader.text_object.text_sv_array
                  }
                />
              </div>
              <div className="flex w-89.5 aspect-7/5 h-auto md:pt-5 md:pb-4 pb-6 self-start">
                <ImageCard
                  imageTitle="spararscouter_title"
                  image={urlFor(
                    sjohumlorna.leader.text_object.image.asset._ref,
                  ).url()}
                  section="division"
                  page="group"
                  text=""
                  pin="red"
                />
              </div>
            </section>
          </div>
        </main>
      </>
    );
  } else if (singleGroup === "upptackarscouter") {
    return (
      <>
        <main className="md:max-w-360 md:mx-auto">
          <Breadcrumbs />
          <CardWithLogo
            image="/Kaparna-frame.svg"
            sectionTitle="GroupKaparna"
            isH1
            logoTopRight
          />
          <div className="px-4 md:px-4 lg:px-0 2xl:px-4 lg:max-w-245 xl:mx-auto  2xl:max-w-360 w-full">
            <section className="w-auto flex flex-col bg-bg-white px-4 rounded-3xl shadow-xl">
              <div className="md:flex md:gap-5 lg:gap-10">
                <div className="flex flex-col lg:min-w-[50%] lg:px-6 px-0 py-4 pb-7 lg:pb-15">
                  <div className="flex flex-col lg:flex-row xl:gap-20 items-center md:items-start">
                    <div className="flex-1 [&_div]:w-full [&_div]:max-w-none">
                      <ContentSection
                        sectionLayout={["g", "p"]}
                        page="kaparnaUpptäckarscouter"
                        padding={"none"}
                        child={true}
                      />
                    </div>
                    <div className="flex justify-center w-89.5 h-auto py-5 md:pt-5 md:pb-4 pb-6 md:hidden">
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
                    sectionLayout={["g", "p"]}
                    page="kaparnaAge"
                    padding={"3"}
                    child={true}
                  />
                  <div className="flex flex-col gap-4 justify-center pb-4">
                    <ContentSection
                      sectionLayout={["g"]}
                      page="kaparnaMeeting"
                      padding={"5"}
                      child={true}
                    />
                    <div className="">
                      <div className="w-fit pt-2 text-body md:text-body-desktop text-text-black font-albert">{`${messages?.path === "/sv" ? "Dag: " : "Day: "}${messages?.path === "/sv" ? utmanare?.groups?.day_sv : utmanare.groups.day_en}`}</div>
                      <div className="w-fit pb-2 text-body md:text-body-desktop text-text-black font-albert">{`${messages?.path === "/sv" ? "Plats: " : "Place: "}${messages?.path === "/sv" ? utmanare?.groups?.place_sv : utmanare.groups.place_en}`}</div>
                    </div>
                    <div className="flex-1 [&_div]:w-full [&_div]:max-w-none">
                      <ContentSection
                        sectionLayout={["g", "p"]}
                        page="kaparnaPlace"
                        padding={"5"}
                        child={true}
                      />
                    </div>
                  </div>
                  <div
                    className="
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
                <div className="w-full h-auto md:pt-20 md:pb-4 pb-6 hidden md:flex md:justify-end md:px-5.75">
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
            <section className="bg-white w-full h-160 md:h-110  lg:max-w-430 lg:px-10 px-4 items-center mt-12.5 mb-12.5  max-w-7xl mx-auto rounded-3xl shadow-xl  md:flex">
              <div className="w-full py-2 pb-15 self-start">
                <ContentSection
                  sectionLayout={["g"]}
                  page="avdelningsledare"
                  padding={"none"}
                  child={true}
                />
                <PortableText
                  components={{
                    block: {
                      normal: ({ children }) => (
                        <p className="w-fit py-2 text-body md:text-body-desktop text-text-black font-albert lg:max-w-[63%] mb-3">
                          {children}
                        </p>
                      ),
                      h3: ({ children }) => (
                        <h3 className="w-fit py-2 text-h3 md:text-h3-desktop text-primary font-fraunces font-bold">
                          {children}
                        </h3>
                      ),
                    },
                    list: {
                      bullet: ({ children }) => (
                        <p className="w-fit py-2 text-body md:text-body-desktop text-text-black font-albert lg:max-w-[63%] mb-3 list-disc pl-5">
                          {children}
                        </p>
                      ),
                    },
                  }}
                  value={
                    locale === "en"
                      ? kaparna?.leader.text_object.text_en_array
                      : kaparna?.leader.text_object.text_sv_array
                  }
                />
              </div>
              <div className="flex w-89.5 aspect-7/5 h-auto md:pt-5 md:pb-4 pb-6 self-start">
                <ImageCard
                  imageTitle="spararscouter_title"
                  image={urlFor(
                    kaparna.leader.text_object.image.asset._ref,
                  ).url()}
                  section="division"
                  page="group"
                  text=""
                  pin="pink"
                />
              </div>
            </section>
          </div>
        </main>
      </>
    );
  } else if (singleGroup === "utmanarscouter") {
    return (
      <>
        <main className="md:max-w-360 md:mx-auto">
          <Breadcrumbs />
          <CardWithLogo
            image="/Utmanare-frame.svg"
            sectionTitle="GroupUtmanare"
            isH1
            logoTopRight
          />
          <div className="px-4 md:px-4 lg:px-0 2xl:px-4 lg:max-w-245 xl:mx-auto  2xl:max-w-360">
            <section className="w-auto flex flex-col bg-bg-white px-4 rounded-3xl shadow-xl">
              <div className="md:flex md:gap-5 lg:gap-10">
                <div className="flex flex-col lg:min-w-[50%] lg:px-6 px-0 py-4 pb-7 lg:pb-15 ">
                  <div className="flex flex-col lg:flex-row xl:gap-20 items-center md:items-start">
                    <div className="flex-1 [&_div]:w-full [&_div]:max-w-none">
                      <ContentSection
                        sectionLayout={["g", "p"]}
                        page="utmanarscouter"
                        padding={"none"}
                        child={true}
                      />
                    </div>
                    <div className="flex justify-center w-89.5 h-auto py-5 md:pt-5 md:pb-4 pb-6 md:hidden">
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
                    sectionLayout={["g", "p"]}
                    page="utmanareAge"
                    padding={"3"}
                    child={true}
                  />
                  <div className="flex flex-col gap-4 justify-center pb-4">
                    <ContentSection
                      sectionLayout={["g"]}
                      page="utmanareMeeting"
                      padding={"5"}
                      child={true}
                    />
                    <div className="">
                      <div className="w-fit pt-2 text-body md:text-body-desktop text-text-black font-albert">{`${messages?.path === "/sv" ? "Dag: " : "Day: "}${messages?.path === "/sv" ? utmanare?.groups?.day_sv : utmanare.groups.day_en}`}</div>
                      <div className="w-fit pb-2 text-body md:text-body-desktop text-text-black font-albert">{`${messages?.path === "/sv" ? "Plats: " : "Place: "}${messages?.path === "/sv" ? utmanare?.groups?.place_sv : utmanare.groups.place_en}`}</div>
                    </div>
                    <div className="flex-1 [&_div]:w-full [&_div]:max-w-none">
                      <ContentSection
                        sectionLayout={["g", "p"]}
                        page="utmanarePlace"
                        padding={"5"}
                        child={true}
                      />
                    </div>
                  </div>
                  <div
                    className="
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
                <div className="w-full h-auto md:pt-20 md:pb-4 pb-6 hidden md:flex md:justify-end md:px-5.75">
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
            <section className="bg-white w-full h-160 md:h-110  lg:max-w-430 lg:px-10 px-4 items-center mt-12.5 mb-12.5  max-w-7xl mx-auto rounded-3xl shadow-xl md:flex">
              <div className="w-full py-2 pb-15 self-start">
                <ContentSection
                  sectionLayout={["g"]}
                  page="avdelningsledare"
                  padding={"none"}
                  child={true}
                />
                <PortableText
                  components={{
                    block: {
                      normal: ({ children }) => (
                        <p className="w-fit py-2 text-body md:text-body-desktop text-text-black font-albert lg:max-w-[63%] mb-3">
                          {children}
                        </p>
                      ),
                      h3: ({ children }) => (
                        <h3 className="w-fit py-2 text-h3 md:text-h3-desktop text-primary font-fraunces font-bold">
                          {children}
                        </h3>
                      ),
                    },
                    list: {
                      bullet: ({ children }) => (
                        <p className="w-fit py-2 text-body md:text-body-desktop text-text-black font-albert lg:max-w-[63%] mb-3 list-disc pl-5">
                          {children}
                        </p>
                      ),
                    },
                  }}
                  value={
                    locale === "en"
                      ? utmanare?.leader.text_object.text_en_array
                      : utmanare?.leader.text_object.text_sv_array
                  }
                />
              </div>
              <div className="flex w-89.5 aspect-7/5 h-auto md:pt-5 md:pb-4 pb-6 self-start">
                <ImageCard
                  imageTitle="utmanarscouter_title"
                  image={urlFor(
                    utmanare.leader.text_object.image.asset._ref,
                  ).url()}
                  section="division"
                  page="group"
                  text=""
                  pin="red"
                />
              </div>
            </section>
          </div>
        </main>
      </>
    );
  } else if (singleGroup === "aventyrarscouter") {
    return (
      <>
        <main className="md:max-w-360 md:mx-auto">
          <Breadcrumbs />
          <CardWithLogo
            image="/Konvojen-frame.svg"
            sectionTitle="GroupKonvojen"
            isH1
            logoTopRight
          />
          <div className="px-4 md:px-4 lg:px-0 2xl:px-4 lg:max-w-245 xl:mx-auto 2xl:max-w-360">
            <section className="w-auto flex flex-col bg-bg-white px-4 rounded-3xl shadow-xl">
              <div className="md:flex md:gap-5 lg:gap-10">
                <div className="flex flex-col lg:min-w-[50%] px-0 lg:px-6 py-4 pb-7 lg:pb-15">
                  <div className="flex flex-col lg:flex-row xl:gap-20 items-center md:items-start">
                    <div className="flex-1 [&_div]:w-full [&_div]:max-w-none">
                      <ContentSection
                        sectionLayout={["g", "p"]}
                        page="äventyrarscouter"
                        padding={"none"}
                        child={true}
                      />
                    </div>
                    <div className="flex justify-center w-89.5 h-auto py-5 md:pt-5 md:pb-4 pb-6 md:hidden">
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
                    sectionLayout={["g", "p"]}
                    page="konvojenAge"
                    padding={"3"}
                    child={true}
                  />
                  <div className="flex flex-col gap-4 justify-center pb-4">
                    <ContentSection
                      sectionLayout={["g"]}
                      page="konvojenMeeting"
                      padding={"5"}
                      child={true}
                    />
                    <div className="">
                      <div className="w-fit pt-2 text-body md:text-body-desktop text-text-black font-albert">{`${messages?.path === "/sv" ? "Dag: " : "Day: "}${messages?.path === "/sv" ? konvojen?.groups?.day_sv : konvojen.groups.day_en}`}</div>
                      <div className="w-fit pb-2 text-body md:text-body-desktop text-text-black font-albert">{`${messages?.path === "/sv" ? "Plats: " : "Place: "}${messages?.path === "/sv" ? konvojen?.groups?.place_sv : konvojen.groups.place_en}`}</div>
                    </div>
                    <div className="flex-1 [&_div]:w-full [&_div]:max-w-none">
                      <ContentSection
                        sectionLayout={["g", "p"]}
                        page="konvojenPlace"
                        padding={"5"}
                        child={true}
                      />
                    </div>
                  </div>
                  <div
                    className="
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
                <div className="w-full h-auto md:pt-20 md:pb-4 pb-6 hidden md:flex md:justify-end md:px-5.75">
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
            <section className="bg-white w-full h-160 md:h-110  lg:max-w-430 lg:px-10 px-4 items-center mt-12.5 mb-12.5  max-w-7xl mx-auto rounded-3xl shadow-xl md:flex">
              <div className="w-full py-2 pb-15 self-start">
                <ContentSection
                  sectionLayout={["g"]}
                  page="avdelningsledare"
                  padding={"none"}
                  child={true}
                />
                <PortableText
                  components={{
                    block: {
                      normal: ({ children }) => (
                        <p className="w-fit py-2 text-body md:text-body-desktop text-text-black font-albert lg:max-w-[63%] mb-3">
                          {children}
                        </p>
                      ),
                      h3: ({ children }) => (
                        <h3 className="w-fit py-2 text-h3 md:text-h3-desktop text-primary font-fraunces font-bold">
                          {children}
                        </h3>
                      ),
                    },
                    list: {
                      bullet: ({ children }) => (
                        <p className="w-fit py-2 text-body md:text-body-desktop text-text-black font-albert lg:max-w-[63%] mb-3 list-disc pl-5">
                          {children}
                        </p>
                      ),
                    },
                  }}
                  value={
                    locale === "en"
                      ? konvojen?.leader.text_object.text_en_array
                      : konvojen?.leader.text_object.text_sv_array
                  }
                />
              </div>
              <div className="flex w-89.5 aspect-7/5 h-auto md:pt-5 md:pb-4 pb-6 self-start">
                <ImageCard
                  imageTitle="aventyrarscouter_title"
                  image={urlFor(
                    konvojen.leader.text_object.image.asset._ref,
                  ).url()}
                  section="division"
                  page="group"
                  text=""
                  pin="dark_red"
                />
              </div>
            </section>
          </div>
        </main>
      </>
    );
  } else if (singleGroup === "familjescouter") {
    return (
      <>
        <main className="md:max-w-360 md:mx-auto">
          <Breadcrumbs />
          <CardWithLogo
            image="/Familje-frame.svg"
            sectionTitle="GroupFamily"
            isH1
            logoTopRight
          />
          <div className="px-3.75 md:px-4 lg:px-0 2xl:px-4 lg:max-w-245 xl:mx-auto  2xl:max-w-360 pb-30">
            <div className="flex flex-col md:px-4 mx-auto bg-bg-white rounded-3xl shadow-xl">
              <div className="flex flex-col w-full px-4 md:px-0 lg:px-6 mx-auto py-4 pb-7 lg:pb-15">
                <div className="flex flex-col lg:flex-row gap-4 xl:gap-20 md:items-start ">
                  <div className="flex-1 [&_div]:w-full [&_div]:max-w-none">
                    <ContentSection
                      sectionLayout={["g", "p", "p", "p"]}
                      page="BarnOchVuxnaTillsammans"
                      padding={"5"}
                      child={true}
                      width="full"
                    />
                  </div>
                  <div className="flex h-auto md:pt-5 md:px-4 py-5 ">
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
                <div className="flex flex-col gap-4 xl:gap-10 items-center lg:flex-row md:items-start">
                  <div className="flex-1 [&_div]:w-full [&_div]:max-w-none">
                    <ContentSection
                      sectionLayout={["g", "p", "p"]}
                      page="ParumMagna"
                      padding={"3"}
                      child={true}
                      width="full"
                    />
                  </div>
                  <div className="flex h-auto md:pt-5 md:px-4 py-5 ">
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
                    sectionLayout={["g", "p", "p"]}
                    page="Familjescoutsagor"
                    padding={"3"}
                    child={true}
                    width="full"
                  />
                  <ContentSection
                    sectionLayout={["g", "p"]}
                    page="Märken"
                    padding={"3"}
                    child={true}
                    width="full"
                  />
                </div>
                <div
                  className="
            [&_button]:border 
            [&_button]:border-purple
          [&_button]:bg-purple-opaque
          [&_button]:text-primary
            [&_button]:rounded-2xl
            [&_button]:px-6
            [&_button]:py-3
            [&_button]:hover:bg-purple-opaque
            [&_button]:hover:hover:brightness-104
          "
                >
                  <a
                    href="https://media.scoutcontent.se/uploads/2021/03/markbart-2020.pdf"
                    target="_blank"
                  >
                    <CTABtn text={messages?.familjescouterButton} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }
};

export default Groups;
