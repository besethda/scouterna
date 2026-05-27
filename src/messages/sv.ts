//data files depends on what you fill in, blew is example

type MessagesSvType = {
  path: string;
  home: {
    title: string;
    divisions: string;
    divisions_text: string;
  },
  about: {
    title: string;
  },
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
    nav_unit5: string,
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
  },
  footer: {
    footer_service: string
    footer_school: string
    footer_shop: string,
    footer_contact: string,
    footer_followUs: string
  },
  instagram: {
    head: string,
    button_text: string,
    text: string
  },
  header: {
    header_title: string,
    header_subtitle: string,
    header_join: string
  },
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
    familjescouter_title: string,
    familjescouter_ages: string,
    familjescouter_day: string,
    familjescouter_time: string,
    familjescouter_place: string,
    familjescouter_paragraph: string,
    scouts_title: string,
    scouts_paragraph: string,
    family_title: string,
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
  },
  hero: {
    hero_title: string,
    hero_subtitle01: string,
    hero_subtitle02: string,
    hero_description: string
  },
  whiteImageBox: {
    header: string,
    title1: string,
    title2: string,
    title3: string
  },
  CTABtn: {
    text: string
  },
  breadcrumbs: {
    title: string,
    path: string,
    page: {
      "about-us": string,
      history: string,
      contact: string,
      gdpr: string,
      members: string,
      information: string,
      safety: string,
      "what-we-do": string,
      lifestyle: string,
      boats: string,
      cabins: string,
      myset: string,
      ruffen: string,
      groups: string,
      sjohumlorna: string,
      kaparna: string,
      utmanare: string,
      konvojen: string,
      familjescouter:string,
      join: string,
      "become-a-scout": string,
      faq: string,
      [key: string]: string
    }
  },
  faqCard: {
    title: string,
    text: string
  },
  joinCard: {
    headline: string,
    title: string,
    text: string,
  },
  tabTitle:{
      history:string,
      join:string, 
      "become-a-scout": string,
      faq:string, 
      "groups":string, 
      sjohumlorna:string, 
      kaparna:string,
      konvojen:string, 
      utmanare:string, 
      familjescouterna:string, 
      lifestyle:string, 
      boats:string,
      cabins:string, 
      myset:string, 
      ruffen:string, 
      members:string, 
      information:string,
      safety:string,
      contact:string, 
      gdpr:string,
      [key: string]: string
     },
    description:string,
  groupsCard: {
    headline: string,
    title: string,
    text: string,
  },
  boatsCard: {
    headline: string,
    title: string,
    text: string,
  },
  cabinsCard: {
    headline: string,
    title: string,
    text: string,
  },
  mysetCard: {
    headline: string,
    title: string,
    text: string,
  },
  
  history: Record <string, string>
  guidelines: Record <string, string>
  safeScout: Record <string, string>
  vests: Record <string, string>
  lockable: Record <string, string>
  gdpr: Record <string, string>
  ethics: Record<string, string>
  email: Record<string, string>
  bank: Record<string, string>
 
  faq: {
    title: string,
    title02: string
  },
  fragorSvar: {
    question: string;
    answer: string;
  }[],
  fragorSvar02: {
    question: string;
    answer: string;
  }[],
  lifestyle: {
    headline: string,
    title: string,
    text: string,
  },
  ruffen: {
    headline: string,
    title: string,
    text: string,
  },
  memberInfo: {
    headline: string,
    title: string,
    text: string
  },
  safetyCard: {
    headline: string,
    title: string,
    text: string
  },
  safetyBtn: {
    btnMobile: string,
    btnDesktop: string
  },
  becomeScoutSmallCard: {
    title: string,
    subtitle: string,
    secondTitle: string,
    secondText: string,
    thirdtext: string,
    button: string
  }

};

export const Sv: MessagesSvType = {
  home: {
    title: "Välkommen till HSS",
    divisions: "Avdelningar",
    divisions_text: "Vi delar in våra avdelningar efter åldrar. Innehållet anpassas efter Scouternas intressen och behov, och utformas för att vara roligt, givande och tryggt för alla.",
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
    nav_unit5: "Familjescouter",
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
    familjescouter_title: "Familjescouter",
    familjescouter_ages: "Under 8 år",
    familjescouter_day: "Fredag",
    familjescouter_time: "18:00",
    familjescouter_place: "Ruffen",
    familjescouter_paragraph: "Familjescouting är scouting för barn under åtta år tillsammans med en vuxen de känner sig trygga med. Det kan vara en förälder, mor- eller farförälder, släkting eller någon annan nära vuxen.",
    scouts_title: "Scouter",
    scouts_paragraph: "Vi har åldersindelade avdelningar från och med 8 års ålder. ",
    family_title: "Familjescouting",
    image_message: "Läs mer om ",
    basic_message: "Gå till ",
    day: "Dag: ",
    time: "Tid: ",
    place: "Plats: "
  },
  hero: {
    hero_title: "Hässelby Strands Sjöscouter",
    hero_subtitle01: "Äventyr börjar",
    hero_subtitle02: "vid vattenbrynet",
    hero_description: "På Mälarens vågor lär sig barn att segla, samarbeta och växa i en trygg gemenskap i Hässelby Strand."
  },
  CTABtn: {
    text: "Gå med i Scouterna"
  },
  whiteImageBox: {
    header: "Vad vi erbjuder",
    title1: "Segling & sjöliv",
    title2: "Trygg gemenskap",
    title3: "Friluftsliv"
  },
  breadcrumbs: {
    title: "Startsidan",
    path: "/sv",
    page: {
      "about-us": "Om HSS",
      history: "Vår historia",
      contact: "Kontakt",
      gdpr: "GDPR",
      members: "För medlemmar",
      information: "Information för medlemmar",
      safety: "HSS flytvästpolicy",
      "what-we-do": "Vad vi gör",
      lifestyle: "Livet som Sjöscout",
      boats: "Våra båtar",
      cabins: "Våra Scoutstugor",
      myset: "Myset",
      ruffen: "Ruffen",
      groups: "Våra avdelningar",
      sjohumlorna: "Sjöhumlorna",
      kaparna: "Kaparna",
      utmanare: "Utmanare",
      konvojen: "Konvojen",
      familjescouter:"Familjescouter",
      join: "Gå med i Scouterna",
      "become-a-scout": "Bli Sjöscout",
      faq: "Frågor & svar"
    }
  },
  path: "/sv",

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
  faqCard: {
    title: "Frågor & svar",
    text: "Här har vi samlat vanliga frågor vi får från blivande och nuvarande medlemmar i föreningen."
  },
  joinCard: {
    headline: "Bli Scout",
    title: "Bli en del av HSS",
    text: "Hos HSS får du kunskaper för livet, härliga naturupplevelser och fin gemenskap"
  },
  tabTitle:{
      history:"HSS | Historia",
      join:"HSS | Gå med i Scouterna", 
      "become-a-scout": "HSS | Bli Sjöscout",
      faq:"HSS | FAQ", 
      "groups":"HSS | Våra avdelningar", 
      sjohumlorna:"HSS | Sjöhumlorna", 
      kaparna: "HSS | Kaparna",
      konvojen:"HSS | Konvojen", 
      utmanare:"HSS | Utmanare", 
      familjescouterna:"HSS | Familjescouterna", 
      lifestyle:"HSS | Livet som Sjöscout", 
      boats:"HSS | Båtar",
      cabins:"HSS | Scoutstugor", 
      myset:"HSS | Myset", 
      ruffen:"HSS | Ruffen", 
      members:"HSS | För medlemma", 
      information:"HSS | Information för medlemmar",
      safety:"HSS | Flytvästpolicy",
      contact:"HSS | Kontakt", 
      gdpr:"HSS | GDPR"
    }, 
    description:"HSS webplats",
  groupsCard: {
    headline: "Avdelningar",
    title: "Åldersanpassade avdelningar",
    text: "Vi har fyra åldersanpassade avdelningar. Verksamhetens innehåll utformas efter scouternas åldrar för att scouterna ska få erfarenheter och upplevelser som passar dem. Barn kan gå med i scouterna från och med 8 års ålder. I Utmarnarna, där våra äldsta scouter går, kan man gå med från och med 15 års ålder. ",
  },
  boatsCard: {
    headline: "Scoutliv",
    title: "Våra båtar",
    text: "Våra båtar är en viktig del av scoutlivet. Här lär vi oss samarbeta, utveckla sjömanskap och uppleva äventyr tillsammans på vattnet.",
  },
  cabinsCard: {
    headline: "Scoutliv",
    title: "Våra Scoutstugor",
    text: "Livet som sjöscout är fyllt av äventyr, gemenskap och frihet. Du möter havet och naturen tillsammans med andra och skapar minnen för livet. Här börjar äventyret.",
  },
  mysetCard: {
    headline: "Scoutstugor",
    title: "Myset",
    text: "I skogen mellan Lövsta och Gåseborg ligger Myset - vår stora och fina scoutstuga. Här samlas kåren för en mängd olika aktiviteter, inte minst hajker som bjuder på både äventyr och gemenskap.",
  },
  history: {
    h0: "Historian om HSS",
    p0: "Kåren grundades år 1959 och växte snabbt.",
    p1: "Engagemanget var stort, inte minst från föräldrar som hjälpte till att ordna aktiviteter, samla in pengar och bygga upp verksamheten.",
    p2: "Den allra första båten, Blekingeekan “Inga-Lunda”, blev starten på kårens sjöliv, och med tiden kunde fler båtar köpas in tack vare basarer, lotterier och hårt arbete.",
    p3: "I början av 60-talet hade kåren vuxit rejält, med många scouter som ville ut på Mälaren. Nya båtar sjösattes och segling blev en självklar del av scoutlivet.",
    p4: "Samtidigt växte behovet av en egen plats på land. En scoutstuga byggdes upp under flera år av ideella krafter och invigdes 1968. Stugan fick namnet Myset och används än idag som en plats för gemenskap, läger och minnen. ",
    p5: "Sedan starten 1959 har HSS varit en sjöscoutkår byggd på engagemang, samarbete och viljan att ge unga äventyr och gemenskap, och den lågan brinner fortfarande starkt idag."
  },
  guidelines: {
    t0: "HSS riktlinjer",
    p0: "Vi har skapat riktlinjer för vilka typer av flytvästar som ska användas av Scouter som inte kan simma, och Scouter som kan simma. ",
    p1: "Det är bra att utgå från att alla, oavsett simkunnighet, ska ha på sig flytväst på bryggor och i båtar. Det är också viktigt att flytvästen är rätt knäppt eller knuten.",
    p2: "Scouter som för HSS ej kunnat uppvisa simkunnighet om 200 m bör bära räddningsväst.",
    p3: "Scouter som för HSS kunnat uppvisa simkunnighet om 200 m kan bära en seglarväst.",
    t1: "Ej simkunniga scouter",
    t2: "Simkunniga scouter",
    w0: "HSS krav på räddningsväst:",
    w1: "HSS krav på seglarväst:",
    l0: "Flytkraft minst 90 N",
    l1: "Storlek och passform anpassad till scoutens vikt",
    l2: "Grenrem",
    l3: "Flytkraft minst 45 N",
    l4: "Storlek och passform anpassad till scoutens vikt",
    l5: "Grenrem (Sjöhumlor och Kapare)"
  },
  safeScout: {
    h0: "Säker scout",
    s0: "Bad från brygga",
    s1: "Bad från båt",
    s2: "Seglingshajk eller eskader",
    t0: "Undantag",
    w0: "Alla som är på bryggor eller i båtar ska ha flytväst.",
    p0: "Man ska inte gå ut på brygga eller i båt utan flytväst, om inte kåren och skepparen bestämmer något annat i särskilda fall. Flytvästen måste vara hel, fungera som den ska och passa personen i storlek.",
    p1: "Vid bad från brygga kan man ta av sig flytvästen om en ledare med flytväst övervakar badet och är redo att livrädda om något händer. Det är bara okej om ledaren känner sig trygg med att låta deltagarna bada utan flytväst.",
    p2: "Vid bad från båt kan flytvästen tas av om båten är förtöjd och en ledare eller skeppare med flytväst är kvar och kan hjälpa, så länge som ledaren/skepparen ger sin tillåtelse och är trygg med situationen.",
    p3: "Vid seglingshajk eller eskader, när båtarna ligger förtöjda över natten, behövs inte flytväst i sittbrunnen eller ruffen. Men flytväst rekommenderas när man går mellan båt och land."
  },
  vests: {
    h0: "Uppblåsbara västar",
    w0: "HSS avråder från användning av uppblåsbara flytvästar.",
    p0: "Det finns flera risker med att använda uppblåsbara flytvästar. Använd i stället räddningsväst eller seglarväst, beroende på simkunskap."
  },
  lockable: {
    h0: "Upplåsbara flytvästar",
    w0: "HSS avråder från användning av uppblåsbara flytvästar.",
    p0: "Det finns flera risker med att använda uppblåsbara flytvästar. När den blåsts upp blir den stor och kan göra det svårare att röra sig, simma och ta sig upp ur vattnet. Dessutom blir en uppblåsbar flytväst förstörd om den löser ut vid bad. Då kan den inte användas mer under aktiviteten, och därför behövs alltid en extra flytväst.",
    w1: "Använd i stället räddningsväst eller seglarväst, beroende på simkunskap."
  },
  gdpr: {
    t0: "Uppgiftsinsamling via Scoutnet",
    p0: "Scoutnet är Scouternas gemensamma medlemsregister och där samlar vi följande information om varje medlem:",
    p1: "*Dessa uppgifter samlar vi även in för barn i anmälningsregistret (kölistan) som är en del av Scoutnet. Informationen om syskon och föräldrar är för att erbjuda syskonförtur och kunna prioritera barn vars föräldrar har en roll i kåren.",
    p2: "Syftet med uppgiftsinsamlingen i Scoutnet är att veta vilka våra medlemmar är, för att kunna nå ut med information till dem, för närvaroregistrering, för att se avdelnings- och patrulltillhörighet, och för fakturering.",
    s0: "Personuppgifter",
    s1: "Kårinformation",
    s2: "Uppgiftsinsamlingens syfte",
    l0: "Namn*",
    l1: "Personnummer*",
    l2: "Adress*",
    l3: "Telefonnummer* (minst ett telefonnummer till föräldrar för omyndig scout, och frivilligt till scout)",
    l4: "E-postadress* (minst en e-postadress till föräldrar för omyndig scout, och frivilligt till scout)",
    l5: "Avdelning",
    l6: "Patrull",
    l7: "Startdatum i kåren",
    l8: "Medlemsavgift",
    l9: "Ev om förälder har roll i kåren*",
    l10: "Ev om syskon är medlemmar i kåren*",
    l11: "Genomförda utbildningar (aktuellt framförallt för ledare)",
    l12: "Roll i kåren (aktuellt endast för ledare)",
    l13: "Eventuella utmärkelser"
  },
  ethics: {
    s0: "Etiska riktlinjer för uppgiftsinsamling",
    p0: "Vi skriver aldrig in hälsouppgifter om en medlem i Scoutnet.",
    p1: "Ledare och styrelse kan ta ut rapporter på våra medlemmar från registret. Inga personer utanför HSS har tillgång till matrikeln, och den finns inte att ladda ned från hemsidan.",
    p2: "Alla medlemsuppgifter som ska sparas läggs in i Scoutnet och all e-postkorrespondens raderas efteråt.",
    p3: "Relevanta uppgifter i listan ovan delas med kommunen i vår närvarorapportering, i syfte att få bidrag till vår verksamhet. När en medlem avslutar sitt medlemskap försvinner alla uppgifter om medlemmen från HSS:s vy i Scoutnet.",
    p4: "Medlemsuppgifterna finns dock kvar i Scoutnet, men så länge personen inte har något aktivt medlemskap, är det endast ett fåtal anställda på Scouternas kansli som kan komma åt uppgifterna.",
    p5: "I och med medlemskapet är man försäkrad via Scouternas gruppförsäkring och försäkringsbolaget kräver att uppgifterna sparas i upp till tio år, vilket är den tidsbegränsning som man kan kräva ersättning för ett försäkringsärende."
  },
  email : {
    t0: "E-post",
    s0: "E-post till kåren",
    p0: "info@hss-scout.org",
    s1: "E-post för medlemsärenden",
    p1: "register@hss-scout.org"
  },
  bank: {
    t0: "Bankuppgifter",
    s0: "Postgiro",
    p0: "404418 - 6",
    s1: "Organisationsnummer",
    p1: "802006 - 2389"
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
      answer: `Skicka ett mejl till support@scouterna.se med ditt namn och medlemsnummer så får du en kopia av fakturan via e-post.`
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
      answer: `Skicka ett mejl till support@scouterna.se och ange varför du anser att det är fel belopp, ditt medlemsnummer, namnet på din kår samt vilken faktura det gäller.`
    },
    {
      question: "Hur ändrar jag mina kontaktuppgifter?",
      answer: `Logga in på www.scoutnet.se där kan du uppdatera dina uppgifter.`
    },
  ],
  lifestyle: {
    headline: "Scoutliv",
    title: "Vågorna Väntar",
    text: "Livet som sjöscout är fyllt av äventyr, gemenskap och frihet. Du möter havet och naturen tillsammans med andra och skapar minnen för livet. Här börjar äventyret."
  },
  ruffen: {
    headline: "Scoutstugor",
    title: "Ruffen",
    text: "Ruffen är vår lokal vid Hässelby Strandbad. Här har vi våra avdelningsmöten och den huserar även våra optimistjollar."
  },
  memberInfo: {
    headline: "Scoutliv",
    title: "Information",
    text: "Här har vi samlat information som är bra att veta för våra medlemmar."
  },
  safetyCard: {
    headline: "Säkerhet",
    title: "HSS Flytvästpolicy",
    text: "För att alla scouter och deras vårdnadshavare ska få tydliga instruktioner om vilka regler som gäller kring användning av flytväst har HSS styrelse tagit fram en flytvästpolicy.Här finns en sammanfattad version. För att läsa flytvästpolicyn i sin helhet, ladda ner PDF:en."
  },
  safetyBtn: {
    btnMobile: "Ladda ner PDF",
    btnDesktop: "Ladda ner flytvästpolicyn som PDF"
  },
  becomeScoutSmallCard: {
    title: "Scoutliv för ung som vuxen",
    subtitle: "Vi har åldersanpassade avdelningar för våra scouter. Som vuxen kan du engagera dig som ledare, eller hjälpa till som förälder. ",
    secondTitle: "Scout",
    secondText: "Man kan bli Scout från och med 8 års ålder. Medlemmarna på avdelningen för våra äldsta Scouter är 15 år och uppåt.",
    thirdtext: "Avdelningarnas innehåll är anpassat efter Scouternas ålder för att göra Scoutlivet tryggt, roligt och spännande för alla våra Scouter.",
    button: "Läs mer om våra avdelningar"
  }
};