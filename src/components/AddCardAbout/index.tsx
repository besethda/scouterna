"use client";

import CardWithImage from "../CardWithImage";
import CardWithoutImage from "../CardWithoutImage";
import useMessages from "@/hook/useMessages";



type cards = 'historymobilecard' | 'contactmobilecard' | 'gdprmobilecard'
type pathType = {
  card: cards;
  page: string;
  logo: string;
  image: string;
  MDlogo: string;
};

const CardAbout = ({ card, page, image, logo, MDlogo}: pathType) => {
  const messages = useMessages();
  return (
    <div>
      <div className="hidden w-full justify-center md:flex">

      </div>
      <div className="flex md:hidden">
        <div className="md:px-0 w-full"> 
          <CardWithoutImage
            headline={messages?.[card]?.headline || ""}
            logo={logo}
            title={messages?.[card]?.title || ""}
            text={messages?.[card]?.text || ""}
            MDlogo={MDlogo}
          />
        </div>
      </div>
    </div>
  );
};

export default CardAbout;
