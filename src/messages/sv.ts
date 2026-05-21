//data files depends on what you fill in, blew is example

type MessagesSvType = {
  home: {
    title: string;
  };
  about: {
    title: string;
  };
  footer: {
    footer_service: string
    footer_school: string
    footer_shop: string,
    footer_contact: string,
    footer_followUs: string
  };
  header: {
    header_title: string,
    header_subtitle: string,
    header_join: string
  },
  goodToKnow: {
    headline: string,
    card_title_1: string,
    card_headline_1: string,
    card_text_1: string,
    card_title_2: string,
    card_headline_2: string,
    card_text_2: string,
    card_title_3: string,
    card_headline_3: string,
    card_text_3: string,
    span_3: string,
    card_title_4: string,
    card_headline_4: string,
    card_text_4: string,
    span_4: string
  }
};

export const Sv: MessagesSvType = {
  home: {
    title: "Välkommen to HSS",
  },
  about: {
    title: "Om HSS"
  },
  footer: {
    footer_service: "Scouternas tjänster",
    footer_school: "Scouternas Folkhögskola",
    footer_shop: "Scoutshop",
    footer_contact: "Kontakt",
    footer_followUs: "Följ oss"
  },
  header: {
    header_title: "Hässelby Strands",
    header_subtitle: "Sjöscouter",
    header_join: "Bli Scout"
  },
  goodToKnow: {
    headline: "Bra att veta",
    card_title_1: "Tid",
    card_headline_1: "En kväll i veckan",
    card_text_1: "Scouternas avdelningar träffas en gång i veckan för att göra aktiviteter, samarbeta och utvecklas tillsammans.",
    card_title_2: "Inkluderande",
    card_headline_2: "Spännande för alla åldrar",
    card_text_2: "HSS har åldersindelade avdelningar från och med 8 års ålder och uppåt.",
    card_title_3: "Värderingar",
    card_headline_3: "Respekt & ansvar",
    card_text_3: "Vi är en inkluderande förening där vi tar hand om varandra.",
    span_3: "Här är alla välkomna, oavsett bakgrund och förmågor.",
    card_title_4: "Trygghet",
    card_headline_4: "Utbildade ledare",
    card_text_4: "Våra ledare har gedigen erfarenhet och utbildning inom Scouting och sjösäkerhet.",
    span_4: "Alla som vill bli Scoutledare måste visa upp utdrag ur belastningsregistret."
  }
};