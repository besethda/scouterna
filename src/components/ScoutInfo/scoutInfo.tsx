"use client";

import CTABtn from "../CTA-button";
import useMessages from "@/hook/useMessages";
import Image from "next/image";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

const ScoutInfo = () => {
  const messages = useMessages();
  const params = useParams();
  const pathname = usePathname();
  const urlLocale =pathname?.split("/")[1]
  const currentLocal = params?.local || urlLocale|| "sv"

  return (
    <div className="bg-bg-blue w-full flex flex-col items-center pt-8 md:pt-16 md:pb-12 pb-6">
      <div className="lg:max-w-430 lg:px-22 px-4 font-albert w-full ">
        <div className="text-h2 md:text-h2-desktop text-primary">{messages?.good}</div>
        <div className="flex gap-5 flex-col md:flex-row md:mt-5 md:items-stretch">
            <div className="md:bg-bg-white flex flex-col shrink flex-1 md:border md:border-lightGray rounded-2xl md:px-5 md:py-5">
              <div className="hidden md:flex items-center justify-center md:bg-accent shrink-0 md:h-11 md:w-11 rounded-[50%] ">
                <Image src='/question.png' alt="logo" width={24} height={17} className="w-auto h-8" />
              </div>
              <div className="text-primary pt-2 text-h3 md:text-h3-desktop whitespace-nowrap">{messages?.question.title}</div>
              <p className="text-text-black text-body md:text-body-desktop py-3 ">{messages?.question.paraph}</p>
              <div className="py-5">
                <Link
                  href={`/${currentLocal}/join/faq`}>
                    <CTABtn text={messages?.toFAQButton} />
                  </Link>
              </div>
            </div>
            <div className="flex flex-col flex-1 shrink md:border md:border-lightGray rounded-2xl md:bg-bg-white md:px-5 px-0 md:py-5">
              <div className="hidden md:flex items-center justify-center md:bg-accent shrink-0 md:h-11 md:w-11 rounded-[50%] ">
                <Image src='/blue-lifejacket.svg' alt="logo" width={24} height={17} className="w-auto h-4.5" />
              </div>
              <div className="text-primary text-h3 md:text-h3-desktop pt-2 whitespace-nowrap">{messages?.policy.title}</div>
              <p className="text-text-black text-body md:text-body-desktop hidden md:block py-3 ">{messages?.policy.desktop}</p>
              <p className="text-text-black text-body md:text-body-desktop block md:hidden py-1">{messages?.policy.paraph}</p>
              <p className="text-text-black text-body md:text-body-desktop block md:hidden py-1">{messages?.policy.mer}</p>
              <div className="hidden md:block py-5">
                <Link
                  href={`/${currentLocal}/members/safety`}>
                  <CTABtn text={messages?.moreButton} />
                </Link>
              </div>
              <div className="block md:hidden py-5 whitespace-nowrap">
                <CTABtn text={messages?.secondButton} />
              </div>
            </div>
        </div>    
      </div>
    </div>
  );
};

export default ScoutInfo;
