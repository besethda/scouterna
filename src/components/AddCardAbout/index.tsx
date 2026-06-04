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
        <CardWithImage
          sectionTitle={page}
          logo={logo}
          image={image}
        />
      </div>
      <div className="block md:hidden">
        <div className="-ml-2 sm:-ml-3 max-[345px]:ml-4 min-[412px]:-ml-10 min-[480px]:-ml-43 md:-ml-5"> 
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
