"use client";

import ContentSection from "../ContentSection";
import CTABtn from "../CTA-button";
import useMessages from "@/hook/useMessages";

const Scoutnet = () => {
  const messages = useMessages();
  return (
    <div className="md:pl-18 pt-20">
      <div className="-mt-6">
        <ContentSection sectionLayout={["t", "p", "p"]} page="scoutnet" />
      </div>
      <div className="-mt-14 mb-7 pl-4">
        <CTABtn text={messages?.scoutnetButton} />
      </div>
    </div>
  );
};

export default Scoutnet;
