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
  header: {
    header_title: "Hässelby Strands",
    header_subtitle: "Sjöscouter",
    header_join: "Bli Scout"
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
  }
};