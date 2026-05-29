"use client";

import CTABtn from "../CTA-button";
import useMessages from "@/hook/useMessages";
import Image from "next/image";

const ScoutInfo = () => {
  const messages = useMessages();
  return (
    <div className="bg-bg-blue pt-20 pb-30 md:px-23">
      <div className="text-3xl text-primary px-5 md:px-1">{messages?.good}</div>
      <div className="flex gap-5 flex-col md:flex-row md:mt-5 md:items-stretch">
          <div className="md:bg-bg-white flex flex-col shrink flex-1 md:border md:border-lightGray rounded-2xl px-5 py-5">
            <div className="hidden md:flex items-center justify-center md:bg-accent shrink-0 md:h-11 md:w-11 rounded-[50%] ">
              <Image src='/question.png' alt="logo" width={24} height={17} className="w-auto h-8" />
            </div>
            <div className="text-primary pt-2 pb-2 text-2xl whitespace-nowrap">{messages?.question.title}</div>
            <p className="text-text-black py-3 ">{messages?.question.paraph}</p>
            <div className="py-5">
              <CTABtn text={messages?.toFAQButton} />
            </div>
          </div>
          <div className="flex flex-col flex-1 shrink md:border md:border-lightGray rounded-2xl md:bg-bg-white px-5 md:py-5">
            <div className="hidden md:flex items-center justify-center md:bg-accent shrink-0 md:h-11 md:w-11 rounded-[50%] ">
              <Image src='/blue-lifejacket.svg' alt="logo" width={24} height={17} className="w-auto h-4.5" />
            </div>
            <div className="text-primary pt-2 pb-2 text-2xl whitespace-nowrap">{messages?.policy.title}</div>
            <p className="text-text-black hidden md:block py-3 ">{messages?.policy.desktop}</p>
            <p className="text-text-black block md:hidden py-1">{messages?.policy.paraph}</p>
            <p className="text-text-black block md:hidden py-1">{messages?.policy.mer}</p>
            <div className="hidden md:block py-5">
              <CTABtn text={messages?.moreButton} />
            </div>
             <div className="block md:hidden py-5 whitespace-nowrap">
              <CTABtn text={messages?.secondButton} />
            </div>
          </div>
      </div>
    </div>
  );
};

export default ScoutInfo;
