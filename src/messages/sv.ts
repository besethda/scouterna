//data files depends on what you fill in, blew is example

type MessagesSvType = {
  path:string;
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
    nav_members: string,
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
  division: {
    sjohumlorna_title: string,
    sjohumlorna_ages: string,
    sjohumlorna_day: string,
    sjohumlorna_time: string,
    sjohumlorna_place: string,
    sjohumlorna_paragraph: string,
    kaparna_title: string,
    kaparna_ages: string,
    kaparna_day: string,
    kaparna_time: string,
    kaparna_place: string,
    kaparna_paragraph: string,
    konvojen_title: string,
    konvojen_ages: string,
    konvojen_day: string,
    konvojen_time: string,
    konvojen_place: string,
    konvojen_paragraph: string,
    utmanare_title: string,
    utmanare_ages: string,
    utmanare_day: string,
    utmanare_time: string,
    utmanare_place: string,
    utmanare_paragraph: string,
    image_message: string,
    basic_message: string,
    day: string,
    time: string,
    place: string
  },
  homePage: {
    title: string, 
    subtitle: string, 
    subtitle2: string, 
    button: string
  },
  homePageCard: {
    headline: string, 
    title: string, 
    text: string,
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
  hero: {
    hero_title: string,
    hero_subtitle01:string,
    hero_subtitle02:string,
    hero_description:string
  };
  whiteImageBox: {
    header:string,
    title1:string,
    title2:string,
    title3:string
  };
  CTABtn: {
    text:string
  },
  breadcrumbs:{
    title:string,
    path: string,
    page: {
      "about-us": string,
      history: string,
      contact: string,
      gdpr: string,
      members:string,
      information: string,
      safety: string,
      "what-we-do": string,
      lifestyle: string,
      boats: string,
      cabins: string,
      myset:string,
      ruffen:string,
      groups: string,
      "age-sections": string,
      sjohumlorna: string,
      kaparna: string,
      utmanare: string,
      konvojen: string,
      join: string,
      "become-a-scout": string,
      faq: string,
      [key: string]: string
    };
  };
  faq:{
    title: string,
    title02: string
  };
  fragorSvar: {
    question: string;
    answer: string;
  }[];
  fragorSvar02: {
    question: string;
    answer: string;
  }[];
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
  homePage: {
    title: "HSS välkomnar alla", 
    subtitle: "Oavsett vem du är eller vilka förkunskaper du har så finns här en plats för dig.", 
    subtitle2: "HSS är en inkluderande förening. Oavsett vem du är eller vilka förkunskaper du har så finns här en plats för dig. Gå med i föreningen som Scout eller engagera dig som förälder eller Scoutledare.",
    button: "Gå med i Scouterna"
  },
    homePageCard: {
    headline: "Bli Scout",
    title: "Vågorna väntar", 
    text: "HSS är en inkluderande förening där trygghet och glädje står i centrum. Vi lär genom att göra – ute i naturen och till sjöss – och du får både kunskap, vänner och minnen för livet.",
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
  },
  whiteImageBox: {
    header: "Vad vi erbjuder",
    title1:"Segling & sjöliv",
    title2:"Trygg gemenskap",
    title3:"Friluftsliv"
  },
  breadcrumbs:{
    title:"Startsidan",
    path: "/sv",
    page: {
      "about-us": "Om HSS",
      history: "Vår historia",
      contact: "Kontakt",
      gdpr: "GDPR",
      members:"För medlemmar",
      information: "Information för medlemmar",
      safety: "HSS flytvästpolicy",
      "what-we-do": "Vad vi gör",
      lifestyle: "Livet som Sjöscout",
      boats: "Våra båtar",
      cabins: "Våra Scoutstugor",
      myset:"Myset",
      ruffen:"Ruffen",
      groups: "Våra avdelningar",
      "age-sections": "Åldersanpassade avdelningar",
      sjohumlorna: "Sjöhumlorna",
      kaparna: "Kaparna",
      utmanare: "Utmanare",
      konvojen: "Konvojen",
      join: "Gå med i Scouterna",
      "become-a-scout": "Bli Sjöscout",
      faq: "Frågor & svar"
    }
  },
  path:"/sv",
  
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
  },
  faq: {
    title: "Bli Scout",
    title02: "Medlemsfrågor"
  },
  fragorSvar: [
  { question: "Behöver vi köpa en scoutuniform på en gång?", answer: "svar" },
  { question: "Vad för kläder brukar scouterna ha på sig?", answer: "svar" },
  { question: "Hålls möten alltid utomhus?", answer: "svar" },
  { question: "Hur mycket kostar det att vara med i scouterna?", answer: "svar" },
  { question: "Måste barnet ha tidigare erfarenhet av segling eller scouting?", answer: "svar" },
  { question: "Vi har blivit medlemmar- vad händer nu?", answer: "svar" },
  ],
  fragorSvar02: [
    { 
      question: "Varför har vi en scoutdräkt?", 
      answer: `Den allra första utbildningen du ska gå är Trygga möten. Det är den enda obligatoriska utbildningen som du måste ha gått för att kunna vara scoutledare. Trygga möten är en webbkurs som du gör på egen hand och den tar ca 1 timme att göra.
      Så här kommer du igång med Trygga möten >> 
      Efter Trygga möten är det lämpligt att gå Leda scouting. Här får du kunskap som gör dig tryggare i din ledarroll i Scouterna. Du lär dig bland annat om Scouternas program och får förståelse för vad ledarskap i Scouterna innebär. Efter denna utbildning kan du själv välja hur du vill utvecklas.
      Läs mer om Leda socuting här >> När du känner dig redo att fortsätta utveckla ditt ledarskap inom Scouterna så finns det många fler utbildningar att wybrać mellan. Du hittar dem alla på Ledarskapsön. Läs mer om dem här >>` 
    },
    { 
      question: "Jag är ny scoutledare! Vilken utbildning ska jag gå först?", 
      answer: `Du betalar en avgift till Scouterna, eventuell samverkansorganisation och distrikt. Det ingår en försäkring i avgiften till Scouterna och det är därför viktigt att man betalar sin medlemsavgift. Medlemsavgiften innehåller även kårens lokala avgift.` 
    },
    { 
      question: "Jag har tappat bort min faktura. Vad gör jag?", 
      answer: `Skicka ett mejl till support@scouterna.se med ditt namn och medlemsnummer så får du en kopia av fakturan via e-post.` 
    },
    { 
      question: "Vad ingår i min medlemsavgift?", 
      answer: `Du betalar en avgift till Scouterna, eventuell samverkansorganisation och distrikt. Det ingår en försäkring i avgiften till Scouterna och det är därför viktigt att man betalar sin medlemsavgift. Medlemsavgiften innehåller även kårens lokala avgift.` 
    },
    { 
      question: "Hur ändrar jag min fakturaadress?", 
      answer: "Gå till www.scoutnet.se, logga in och ändra din fakturaadress." 
    },
    { 
      question: "Min faktura har felaktigt belopp. Vad gör jag?", 
      answer: `Skicka ett mejl till support@scouterna.se och ange varför du anser att det är fel belopp, ditt medlemsnummer, namnet på din kår samt vilken faktura det gäller.` 
    },
    { 
      question: "Hur ändrar jag mina kontaktuppgifter?", 
      answer: `Logga in på www.scoutnet.se där kan du uppdatera dina uppgifter.` 
    },
  ]
};