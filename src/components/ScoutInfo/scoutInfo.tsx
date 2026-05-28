"use client";

import ContentSection from "../ContentSection";
import CTABtn from "../CTA-button";
import useMessages from "@/hook/useMessages";

const ScoutInfo = () => {
  const messages = useMessages();
  return (
    <div className="bg-bg-blue md:pl-4 pb-20">
        <div className="flex flex-col gap-4 md:pt-10 md:ml-10">
          <div className="flex-1">
            <ContentSection
              sectionLayout={["h"]}
              page="good"
              background={"blue"}
              padding={"5"}
            />
            <ContentSection
              sectionLayout={["t", "p"]}
              page="question"
              background="blue"
              padding={"5"}
            />
        </div>
      </div>
      <div className="pt-3 pb-3 pl-3 md:pl-12">
        <CTABtn text={messages?.toFAQButton} />
      </div>
        <div className="flex flex-col gap-4 md:pt-10 md:ml-8">
          <div className="flex-1">
            <ContentSection
              sectionLayout={["t", "p", "p"]}
              page="policy"
              background="blue"
              padding={"5"}
            />
          </div>
        </div>
      
      <div>
        <div className="pt-3 pl-3 md:pl-12">
          <CTABtn text={messages?.moreButton} />
        </div>
      </div>
    </div>
  );
};

export default ScoutInfo;
