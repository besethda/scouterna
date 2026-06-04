"use client";

import ContentSection from "../ContentSection";
import CTABtn from "../CTA-button";
import useMessages from "@/hook/useMessages";

const Scoutnet = () => {
  const messages = useMessages();

  const handleClick = () => {
    window.open("https://www.scoutnet.se/f/login", "(_blank)")
  }
  return (
    <div className="md:pl-18 md:pt-14 pt-8 md:pb-12 pb-8 px-4 md:px-0">
      <div className="-mt-6">
        <ContentSection sectionLayout={["t", "p", "p"]} page="scoutnet" padding="bottom" child={true}/>
      </div>
      <div className="-mt-10 mb-4 md:pl-4">
        <CTABtn text={messages?.scoutnetButton} onClick={handleClick} />
      </div>
    </div>
  );
};

export default Scoutnet;
