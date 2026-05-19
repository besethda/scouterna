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
  instagram: {
    head: string,
    button_text: string,
    text: string
  };
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
  instagram: {
    head: "Följ våra äventyr på Instagram",
    button_text: "Följ oss",
    text: "Vi på Scouterna använder Instagram för att dela med oss av våra äventyr. Där kan du följa våra utflykter, läger och vardagsstunder i naturen."
  },

};