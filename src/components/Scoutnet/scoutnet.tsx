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
    <div className="md:pl-18  px-4 md:px-0">
      <div className="">
        <ContentSection sectionLayout={["t", "p", "p"]} page="scoutnet" padding="bottom" child={true}/>
      </div>
      <div className="">
        <CTABtn text={messages?.scoutnetButton} onClick={handleClick} />
      </div>
    </div>
  );
};

export default Scoutnet;
