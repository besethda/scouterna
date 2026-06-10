"use client";

import CTABtn from "../CTA-button";
import useMessages from "@/hook/useMessages";
import Image from "next/image";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

const handleClick = () => {
    window.open("https://www.scoutnet.se/f/login", "(_blank)")
  }

const ScoutInfo = () => {
  const messages = useMessages();
  const params = useParams();
  const pathname = usePathname();
  const urlLocale = pathname?.split("/")[1]
  const currentLocal = params?.local || urlLocale || "sv"

  return (
    <div className="bg-white flex flex-col 2xl:items-start 2xl:text-left py-8 px-4 mx-4 lg:mx-auto rounded-3xl shrink-0 lg:w-[848px] lg:px-10 lg:py-8 xl:w-[1265px] 2xl:w-[1544px] ">
      <div className="font-albert w-full flex flex-col gap-4">
        <h2 className="text-h2 md:text-h2-desktop text-primary font-fraunces font-bold">{messages?.good}</h2>
        <div className="flex gap-6 xl:gap-8 flex-col md:mt-5 md:items-stretch">
            <div className="flex flex-col gap-6 lg:max-w-117.5 xl:max-w-200">
              <div className="flex flex-col gap-2">
                <h3 className="text-primary  text-h3 md:text-h4-desktop whitespace-nowrap font-fraunces font-bold">{messages?.question.title}</h3>
                <p className="text-text-black text-body md:text-h5-desktop ">{messages?.question.paraph}</p>
              </div>
              <div className="">
                <Link
                  href={`/${currentLocal}/join/faq`}>
                  <CTABtn text={messages?.toFAQButton} />
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-6 lg:max-w-117.5 xl:max-w-200">
              <div>
                <h3 className="text-primary text-h3 md:text-h4-desktop whitespace-nowrap font-fraunces font-bold pb-2">{messages?.policy.title}</h3>
                <p className="text-text-black text-body md:text-h5-desktop hidden md:block ">{messages?.policy.desktop}</p>
                <p className="text-text-black text-body md:text-h5-desktop block md:hidden py-1 pb-4">{messages?.policy.paraph}</p>
                <p className="text-text-black text-body md:text-h5-desktop block md:hidden py-1">{messages?.policy.mer}</p>
              </div>
              <div className="hidden md:block">
                <Link
                  href={`/${currentLocal}/members/safety`}>
                  <CTABtn text={messages?.moreButton} />
                </Link>
              </div>
              <div className="block md:hidden whitespace-nowrap">
                <CTABtn text={messages?.secondButton} />
              </div>
            </div>
            <div className="flex flex-col gap-6 lg:max-w-117.5 xl:max-w-200">
              <div>
                <h3 className="text-primary text-h3 md:text-h4-desktop whitespace-nowrap font-fraunces font-bold pb-2">{messages?.memberScoutnet.title}</h3>
                <p className="text-text-black text-body md:text-h5-desktop block py-1 pb-4">{messages?.memberScoutnet.text01}</p>
                <p className="text-text-black text-body md:text-h5-desktop block  py-1">{messages?.memberScoutnet.text02}</p>
              </div>
              <div className="">
                <CTABtn text={messages?.memberScoutnetButton} onClick={handleClick} />
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ScoutInfo;
