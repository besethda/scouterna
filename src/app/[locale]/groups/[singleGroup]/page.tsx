import { En} from "@/messages/en";
import { Sv } from "@/messages/sv";
import { use } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getPageHeadTitle } from "@/lib/utils";
import ContentSection from "@/components/ContentSection";
import Image from "next/image";
import CTABtn from "@/components/CTA-button";
import Sjohulorna from "../../../../../public/images/DSCF3033.jpg";
import GroupIntro from "@/components/GroupIntro";

const pageItems = [
  "sjohumlorna",
  "kaparna",
  "utmanare",
  "konvojen",
  "familjescouter",
];
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; singleGroup: string }>;
}) {
  const { locale, singleGroup } = await params;
  const IsSingleGroup = pageItems.includes(singleGroup);
  const tabTitle = IsSingleGroup
    ? getPageHeadTitle(locale, singleGroup)
    : getPageHeadTitle(locale, "HSS | Hem");
  return tabTitle;
}

const Groups = ({
  params,
}: {
  params: Promise<{ locale: string; singleGroup: string }>;
}) => {


  
  const { singleGroup, locale } = use(params);
  const messages = locale === "en" ? En : Sv;

  if (singleGroup === "sjohumlorna") {
    return (
      <>
      <Breadcrumbs />
      <GroupIntro headline={messages?.GroupIntro?.FAMheadline} title={messages?.GroupIntro?.SJMtitle}  text={messages?.GroupIntro?.SJMtext}  logo="/sjohumlor-frame.svg" />
      <div className="bg-bg-blue md:pl-5 pt-20 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center md:pt-10">
            <div className="flex-1">
              <ContentSection
                sectionLayout={["s", "p"]}
                page="sjohumlornaSpårarscouter"
                background={"blue"}
                padding={"5"}
              />
            </div>
            <div className="flex-1 flex justify-center">
              <Image
                src={Sjohulorna}
                alt="sjohulorna"
                className="rounded-2xl object-cover"
                width={358}
                height={257}
              />
            </div>
          </div>
          <ContentSection
            sectionLayout={["s", "p"]}
            page="sjohumlornaAge"
            background={"blue"}
            padding={"3"}
          />
          <div className="flex flex-col gap-4 justify-center pb-4">
            <ContentSection
              sectionLayout={["s", "p", "p"]}
              page="sjohumlorMeeting"
              background={"blue"}
              padding={"5"}
            />
            <ContentSection
              sectionLayout={["s", "p"]}
              page="sjohumlorPlace"
              background={"blue"}
              padding={"5"}
            />
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
           [&_button]:hover:brightness-102
           pl-4
           "
          >
            <CTABtn text={messages?.sjohumlorButton} />
          </div>
        </div>
      </div>
      </>
    );
  } else if (singleGroup === "kaparna") {
    return (
      <>
      <Breadcrumbs />
      <GroupIntro headline={messages?.GroupIntro?.FAMheadline} title={messages?.GroupIntro?.KAPtitle}  text={messages?.GroupIntro?.KAPtext}  logo="/kaparna-frame.svg"/>
      <div className="bg-bg-blue md:pl-5 pt-20 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center md:pt-10">
            <div className="flex-1">
              <ContentSection
                sectionLayout={["s", "p"]}
                page="kaparnaUpptäckarscouter"
                background={"blue"}
                padding={"5"}
              />
            </div>
            <div className="flex-1 flex justify-center">
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
            sectionLayout={["s", "p"]}
            page="kaparnaAge"
            background={"blue"}
            padding={"3"}
          />
          <div className="flex flex-col gap-4 justify-center pb-4">
            <ContentSection
              sectionLayout={["s", "p", "p"]}
              page="kaparnaMeeting"
              background={"blue"}
              padding={"5"}
            />
            <ContentSection
              sectionLayout={["s", "p"]}
              page="kaparnaPlace"
              background={"blue"}
              padding={"5"}
            />
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
           [&_button]:hover:brightness-102
           pl-4
           "
          >
            <CTABtn text={messages?.kaparnaButton} />
          </div>
        </div>
      </div>
      </>
    );
  } else if (singleGroup === "utmanare") {
    return (
      <>
      <Breadcrumbs />
      <GroupIntro headline={messages?.GroupIntro?.FAMheadline} title={messages?.GroupIntro?.UTtitle}  text={messages?.GroupIntro?.UTtext}  logo="/utmanare-frame.svg" />
      <div className="bg-bg-blue md:pl-5 pt-20 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center md:pt-10">
            <div className="flex-1">
              <ContentSection
                sectionLayout={["s", "p"]}
                page="utmanarscouter"
                background={"blue"}
                padding={"5"}
              />
            </div>
            <div className="flex-1 flex justify-center">
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
            sectionLayout={["s", "p"]}
            page="utmanareAge"
            background={"blue"}
            padding={"3"}
          />
          <div className="flex flex-col gap-4 justify-center pb-4">
            <ContentSection
              sectionLayout={["s", "p", "p"]}
              page="utmanareMeeting"
              background={"blue"}
              padding={"5"}
            />
            <ContentSection
              sectionLayout={["s", "p"]}
              page="utmanarePlace"
              background={"blue"}
              padding={"5"}
            />
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
           [&_button]:hover:brightness-104
           pl-4
           "
          >
            <CTABtn text={messages?.utmanareButton} />
          </div>
        </div>
      </div>
      </>
    );
  } else if (singleGroup === "konvojen") {
    return (
      <>
      <Breadcrumbs />
      <GroupIntro headline={messages?.GroupIntro?.FAMheadline} title={messages?.GroupIntro?.KONtitle}  text={messages?.GroupIntro?.KONtext}  logo="/konvojen-frame.svg" />
      <div className="bg-bg-blue md:pl-5 pt-20 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center md:pt-10">
            <div className="flex-1">
              <ContentSection
                sectionLayout={["s", "p"]}
                page="äventyrarscouter"
                background={"blue"}
                padding={"5"}
              />
            </div>
            <div className="flex-1 flex justify-center">
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
            sectionLayout={["s", "p"]}
            page="konvojenAge"
            background={"blue"}
            padding={"3"}
          />
          <div className="flex flex-col gap-4 justify-center pb-4">
            <ContentSection
              sectionLayout={["s", "p", "p", "p"]}
              page="konvojenMeeting"
              background={"blue"}
              padding={"5"}
            />
            <ContentSection
              sectionLayout={["s", "p"]}
              page="konvojenPlace"
              background={"blue"}
              padding={"5"}
            />
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
           [&_button]:hover:brightness-102
           pl-4
           "
          >
            <CTABtn text={messages?.konvojenButton} />
          </div>
        </div>
      </div>
      </>
    );
  } else if (singleGroup === "familjescouter") {
    return (
    <>
    <Breadcrumbs />
    <GroupIntro headline={messages?.GroupIntro?.FAMheadline} title={messages?.GroupIntro?.FAMtitle} text={messages?.GroupIntro?.FAMtext} logo="/familje-frame.svg" />
    </>
    )
  }
};

export default Groups;
