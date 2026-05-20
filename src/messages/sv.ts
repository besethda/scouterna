//data files depends on what you fill in, blew is example

type MessagesSvType = {
  home: {
    title: string;
  };
  about: {
    title: string;
  };
  navigation: {
    nav_joinScout: string,
    nav_becomeScout: string,
    nav_faq: string,
    nav_ourUnits: string,
    nav_ourUnitStructure: string,
    nav_unit1: string,
    nav_unit2: string,
    nav_unit3: string,
    nav_unit4: string,
    nav_whatWeDo: string,
    nav_LifeScout: string,
    nav_boats: string,
    nav_cabins: string,
    nav_myset: string,
    nav_ruffen: string,
    nav_members: string
    nav_information: string,
    nav_lifeJacketPolicy: string,
    nav_aboutUs: string,
    nav_history: string,
    nav_contact: string,
    nav_gdpr: string,
    nav__service: string,
    nav_school: string,
    nav_shop: string,
    nav_scoutnet: string
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
  }
};

export const Sv: MessagesSvType = {
  home: {
    title: "Välkommen to HSS",
  },
  about: {
    title: "Om HSS"
  },
  navigation: {
    nav_joinScout: "Gå med i Scouterna",
    nav_becomeScout: "Bli Sjöscout",
    nav_faq: "Frågor och svar",
    nav_ourUnits: "Våra avdelningar",
    nav_ourUnitStructure: "Vår avdelningsstruktur",
    nav_unit1: "Sjöhumlorna",
    nav_unit2: "Kaparna",
    nav_unit3: "Konvojen",
    nav_unit4: "Utmanare",
    nav_whatWeDo: "Vad vi gör",
    nav_LifeScout: "Livet som Sjöscout",
    nav_boats: "Våra båtar",
    nav_cabins: "Våra Scoutstugor",
    nav_myset: "Myset",
    nav_ruffen: "Ruffen",
    nav_members: "För medlemmar",
    nav_information: "Information för medlemmar",
    nav_lifeJacketPolicy: "HSS flytvästpolicy",
    nav_aboutUs: "Om HSS",
    nav_history: "Vår historia",
    nav_contact: "Kontakt",
    nav_gdpr: "GDPR",
    nav__service: "Scouternas tjänster",
    nav_school: "Scouternas Folkhögskola",
    nav_shop: "Scoutshop",
    nav_scoutnet: "Scoutnet"
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
  }
};