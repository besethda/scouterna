//data files depends on what you fill in, blew is example

type MessagesSvType = {
  home: {
    title: string;
    divisions: string;
    divisions_text: string;
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
<<<<<<< HEAD
  CTABtn: {
    text:string
  }
=======
  CTAButton: {
    text:string
  }, 
  homePageCard: {
    headline: string, 
    title: string, 
    text: string,
  }
  
>>>>>>> a6829434e3055e247cf9cb135e9047c1a9d217ef
};

export const Sv: MessagesSvType = {
  home: {
    title: "Välkommen to HSS",
    divisions: "Avdelningar",
    divisions_text: "Vi har åldersindelade avdelningar från och med 8 års ålder."
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
  CTAButton: {
    text: "Gå med i Scouterna"
  }, 
   homePageCard: {
    headline: "Bli Scout",
    title: "Vågorna väntar", 
    text: "HSS är en inkluderande förening där trygghet och glädje står i centrum. Vi lär genom att göra – ute i naturen och till sjöss – och du får både kunskap, vänner och minnen för livet.",
<<<<<<< HEAD
  },
  division: {
    sjohumlorna_title: "Sjöhumlorna",
    sjohumlorna_ages: "8-9 år",
    sjohumlorna_day: "Måndag",
    sjohumlorna_time: "18:00",
    sjohumlorna_place: "Ruffen",
    sjohumlorna_paragraph: "De yngsta scouterna upptäcker sjölivet genom lek, sång och små äventyr vid vattnet. Här lär man sig samarbeta, knyta sina första knopar och känna sig hemma i naturen.",
    kaparna_title: "Kaparna",
    kaparna_ages: "10-11 år",
    kaparna_day: "Tisdag",
    kaparna_time: "18:00",
    kaparna_place: "Ruffen",
    kaparna_paragraph: "Nu blir det mer segling och längre utflykter i skärgården. Kaparna tar mer ansvar, lär sig grunderna i navigation och bygger vänskap som varar långt utanför scoutkåren.",
    konvojen_title: "Konvojen",
    konvojen_ages: "12-14 år",
    konvojen_day: "Torsdag",
    konvojen_time: "18:00",
    konvojen_place: "Ruffen",
    konvojen_paragraph: "Här seglar man större jollar och planerar egna hajker tillsammans med ledarna. Konvojen lär sig leda, fatta beslut och hantera utmaningar både till sjöss och på land.",
    utmanare_title: "Utmanare",
    utmanare_ages: "15+",
    utmanare_day: "Tisdag or Torsdag",
    utmanare_time: "18:00",
    utmanare_place: "Ruffen",
    utmanare_paragraph: "De äldsta scouterna driver egna projekt, deltar i internationella läger och tar ledarroller för de yngre. Här blir scoutingen ett sätt att forma sig själv och sin omvärld.",
    image_message: "Läs mer om ",
    basic_message: "Gå till ",
    day: "Dag: ",
    time: "Tid: ",
    place: "Plats: "
  },
  hero: {
    hero_title: "Hässelby Strands Sjöscouter",
    hero_subtitle01:"Äventyr börjar",
    hero_subtitle02:"vid vattenbrynet",
    hero_description:"På Mälarens vågor lär sig barn att segla, samarbeta och växa i en trygg gemenskap i Hässelby Strand."
  },
  CTABtn: {
    text:"Gå med i Scouterna"
=======
>>>>>>> a6829434e3055e247cf9cb135e9047c1a9d217ef
  }
};