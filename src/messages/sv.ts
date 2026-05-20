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
    nav_board: string,
    nav_gdpr: string
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
  header: {
    header_title: string,
    header_subtitle: string,
    header_join: string
  };
  hero: {
    hero_title: string,
    hero_subtitle01:string,
    hero_subtitle02:string,
    hero_description:string
  };
  CTABtn :{
    text: string
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
    nav_board: "Styrelsen",
    nav_gdpr: "GDPR"
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

  header: {
    header_title: "Hässelby Strands",
    header_subtitle: "Sjöscouter",
    header_join: "Bli Scout"
  },
  hero: {
    hero_title: "Hässelby Strands Sjöscouter",
    hero_subtitle01:"Äventyr börjar",
    hero_subtitle02:"vid vattenbrynet",
    hero_description:"På Mälarens vågor lär sig barn att segla, samarbeta och växa i en trygg gemenskap i Hässelby Strand."
  },
  CTABtn: {
    text: "Gå med i Scouterna"
  }
};