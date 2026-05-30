"use client";

import CardWithImage from "../CardWithImage";
import CardWithoutImage from "../CardWithoutImage";
import useMessages from "@/hook/useMessages";

const CardAbout = () => {
  const messages = useMessages();
  return (
    <>
      <div className="hidden md:block">
        <CardWithImage
          sectionTitle="historycard"
          logo="/heart.png"
          image="/images/IMG_1943.jpeg"
        />
      </div>
      <div className="block md:hidden">
        <CardWithoutImage 
        headline={messages?.historymobilecard?.headline || ''}
        logo="/heart.png" 
        title={messages?.historymobilecard?.title || ''}
        text={messages?.historymobilecard?.text || ''}
        MDlogo="/bg-heart.svg"
        />
      </div>
    </>
  );
};

export default CardAbout;
