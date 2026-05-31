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
    <>
      <div className="hidden md:block">
        <CardWithImage
          sectionTitle={page}
          logo={logo}
          image={image}
        />
      </div>
      <div className="block md:hidden">
        <CardWithoutImage
          headline={messages?.[card]?.headline || ""}
          logo={logo}
          title={messages?.[card]?.title || ""}
          text={messages?.[card]?.text || ""}
          MDlogo={MDlogo}
        />
      </div>
    </>
  );
};

export default CardAbout;
