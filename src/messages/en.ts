export type MessagesEngType = {
  path: string,
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
  };
  footer: {
    footer_service: string;
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
  },
  whiteImageBox: {
    header: string
    title1: string,
    title2: string,
    title3: string
  }
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
  homeHero: {
    hero_title: string,
    hero_subtitle01: string,
    hero_subtitle02: string,
    hero_description: string
    button: string
  },
  joinHero: {
    hero_title: string,
    hero_subtitle01: string,
    hero_subtitle02: string,
    hero_description: string
    button: string
  },
  lifestyleHero: {
    hero_title: string,
    hero_subtitle01: string,
    hero_subtitle02: string,
    hero_description: string
    button: string
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
    text: string
  },
  tabTitle: {
    history: string,
    join: string,
    "become-a-scout": string,
    faq: string,
    "groups": string,
    sjohumlorna: string,
    kaparna: string,
    konvojen: string,
    utmanare: string,
    familjescouter: string,
    lifestyle: string,
    boats: string,
    cabins: string,
    myset: string,
    ruffen: string,
    members: string,
    information: string,
    safety: string,
    contact: string,
    gdpr: string,
    [key: string]: string
  },
  description: string,
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
  history: Record<string, string>
  guidelines: Record<string, string>
  safeScout: Record<string, string>
  vests: Record<string, string>
  lockable: Record<string, string>
  gdpr: Record<string, string>
  ethics: Record<string, string>
  email: Record<string, string>
  bank: Record<string, string>
  offers: Record<string, string>
  map: Record<string, string>
  scoutLife: Record<string, string>
  learning: Record<string, string>
  faq: {
    title: string,
    title02: string;
  };
  fragorSvar: {
    question: string,
    answer: string
  }[];
  fragorSvar02: {
    question: string,
    answer: string
  }[];
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
  },
  groupCard: {
    headline: string,
    title: string,
    text: string
  },
  faqContact: {
    title: string,
    text: string
  },
  joinContent: {
    title: string,
    text: string,
    button: string,
    text02: string,
    button02: string,
    title02: string,
    text03: string
  },
  joinPage: {
    title: string,
    text: string,
    buttonText: string
  },
  myset01: Record<string, string>
  myset02: Record<string, string>
  myset03: Record<string, string>,
  mysetBtn: {
    text: string
  },
  sjohumlornaSpårarscouter: Record<string, string>
  sjohumlornaAge: Record<string, string>
  sjohumlorMeeting: Record<string, string>
  sjohumlorPlace: Record<string, string>
  sjohumlorButton: string,
  kaparnaUpptäckarscouter: Record<string, string>
  kaparnaAge: Record<string, string>
  kaparnaMeeting: Record<string, string>
  kaparnaPlace: Record<string, string>
  kaparnaButton: string,
  utmanarscouter: Record<string, string>
  utmanareAge: Record<string, string>
  utmanareMeeting: Record<string, string>
  utmanarePlace: Record<string, string>
  utmanareButton: string,
  äventyrarscouter: Record<string, string>
  konvojenAge: Record<string, string>
  konvojenMeeting: Record<string, string>
  konvojenPlace: Record<string, string>
  konvojenButton: string,
};

export const En: MessagesEngType = {
  home: {
    title: "Welcome to HSS",
    divisions: "Groups",
    divisions_text: "We divide our departments by age. The content is adapted to the Scouts' interests and needs, and is designed to be fun, rewarding and safe for everyone.",
  },
  about: {
    title: "About HSS"
  },
  navigation: {
    nav_joinScout: "Join the Scouts",
    nav_becomeScout: "Become a Sea Scout",
    nav_faq: "FAQ",
    nav_ourUnits: "Our Groups",
    nav_ourUnitStructure: "Our Group Structure",
    nav_unit1: "Sjöhumlorna",
    nav_unit2: "Kaparna",
    nav_unit3: "Konvojen",
    nav_unit4: "Utmanare",
    nav_unit5: "Familjescouter",
    nav_whatWeDo: "What We Do",
    nav_LifeScout: "Life as a Sea Scout",
    nav_boats: "Our Boats",
    nav_cabins: "Our Scout Cabins",
    nav_myset: "Myset",
    nav_ruffen: "Ruffen",
    nav_members: "For Members",
    nav_information: "Member Information",
    nav_lifeJacketPolicy: "HSS Life Jacket Policy",
    nav_aboutUs: "About HSS",
    nav_history: "Our History",
    nav_contact: "Contact",
    nav_gdpr: "GDPR",
    nav__service: "Scout Services",
    nav_school: "The Scouts' Folk High School",
    nav_shop: "Scout shop",
    nav_scoutnet: "Scout net"
  },
  footer: {
    footer_service: "Scout Services",
    footer_school: "The Scouts' Folk High School",
    footer_shop: "Scout shop",
    footer_contact: "Contact",
    footer_followUs: "Follow us"
  },
  instagram: {
    head: "Follow our adventure on Instagram",
    button_text: "Follow us",
    text: "We use Instagram to share our adventures. There you can follow our excursions, camps and everyday moments in nature."
  },
  header: {
    header_title: "Hässelby Strand",
    header_subtitle: "Sea Scouts",
    header_join: "Become a Scout"
  },
  whiteImageBox: {
    header: "What we offer",
    title1: "Sailing & Sea Life",
    title2: "Safe Community",
    title3: "Discovery & Learning"
  },
  division: {
    sjohumlorna_title: "Sjöhumlorna",
    sjohumlorna_ages: "8-9 Years",
    sjohumlorna_day: "Monday",
    sjohumlorna_time: "18:00",
    sjohumlorna_place: "Ruffen",
    sjohumlorna_paragraph: "The youngest scouts discover marine life through play, singing and small adventures by the water. Here they learn to cooperate, tie their first knots and feel at home in nature.",
    kaparna_title: "Kaparna",
    kaparna_ages: "10-11 Years",
    kaparna_day: "Tuesday",
    kaparna_time: "18:00",
    kaparna_place: "Ruffen",
    kaparna_paragraph: "You do more sailing and longer excursions in the archipelago. The Kaparna take on more responsibility, learn the basics of navigation and build friendships that last far beyond the scout corps.",
    konvojen_title: "Konvojen",
    konvojen_ages: "12-14 Years",
    konvojen_day: "Thursday",
    konvojen_time: "18:00",
    konvojen_place: "Ruffen",
    konvojen_paragraph: "You will sail larger dinghies and plan their own trips together with the leaders. The Konvojen learns to lead, make decisions and handle challenges both at sea and on land.",
    utmanare_title: "Utmanare",
    utmanare_ages: "15+",
    utmanare_day: "Tuesday or Thursday",
    utmanare_time: "18:00",
    utmanare_place: "Ruffen",
    utmanare_paragraph: "The oldest scouts run their own projects, participate in international camps and take on leadership roles for the younger ones. Scouting becomes a way to shape themselves and their surroundings.",
    familjescouter_title: "Familjescouter",
    familjescouter_ages: "Under 8 Years",
    familjescouter_day: "Friday",
    familjescouter_time: "18:00",
    familjescouter_place: "Ruffen",
    familjescouter_paragraph: "Familjescouter is for children under eight years of age, together with an adult they feel safe with. This can be a parent, grandparent, relative or another close adult.",
    scouts_title: "Scouts",
    scouts_paragraph: "We have age-separated departments from the age of 8.",
    family_title: "Familjescouter",
    image_message: "Read more about ",
    basic_message: "Check out ",
    day: "Day: ",
    time: "Time: ",
    place: "Place: "
  },
  homePage: {
    title: "HSS welcomes everyone",
    subtitle: "No matter who you are or your level of experience, there is a place for you here.",
    subtitle2: "No matter who you are or your level of experience, there is a place for you here. Join us as a Scout, or get involved as a parent or Scout leader.",
    button: "Join the Scouts"
  },
  homePageCard: {
    headline: "Become a Scout",
    title: "The waves are waiting",
    text: "HSS is an inclusive association where safety and joy are at the center. We learn by doing – out in nature and at sea – and you will gain knowledge, friends, and memories for life.",
  },
  homeHero: {
    hero_title: "Hässelby Strand Sea Scouts",
    hero_subtitle01: "Adventures begin",
    hero_subtitle02: "at the water's edge",
    hero_description: "On the waves of Lake Mälaren, children learn to sail, collaborate, and grow within a safe community in Hässelby Strand.",
    button: "Join the Sea Scouts"
  },
  joinHero: {
    hero_title: "Hässelby Strand Sea Scouts",
    hero_subtitle01: "The waves are waiting-",
    hero_subtitle02: "Join HSS",
    hero_description: "At HSS Scouts, we offer a safe and active free time for children and young people.",
    button: "Join the Scouts"
  },
  lifestyleHero: {
    hero_title: "Hässelby Strand Sea Scouts",
    hero_subtitle01: "Toward new",
    hero_subtitle02: "horizons",
    hero_description: "Sail, discover, and grow together. Life as a sea scout is all about adventures at sea and a community that lasts.",
    button: "Join the Scouts"
  },
  breadcrumbs: {
    title: "Home",
    path: "/en",
    page: {
      "about-us": "About HSS",
      history: "History",
      contact: "Contact",
      gdpr: "GDPR",
      members: "Members",
      information: "Member Information",
      safety: "HSS Life Jacket Policy",
      "what-we-do": "What We Do",
      lifestyle: "Lifestyle",
      boats: "Our Boats",
      cabins: " Our Scout Cabins",
      myset: "Myset",
      ruffen: "Ruffen",
      groups: "Group Structure",
      sjohumlorna: "Sjöhumlorna",
      kaparna: "Kaparna",
      utmanare: "Utmanare",
      konvojen: "Konvojen",
      familjescouter: "Familjescouter",
      join: "Join The Scouts",
      "become-a-scout": "Become a Scout",
      faq: "FAQ"
    }
  },
  path: "/en",

  goodToKnow: {
    headline: "Good to know",
    card_title_1: "Time",
    card_headline_1: "One evening a week",
    card_text_1: "The Scout units meet once a week to do activities, collaborate, and grow together.",
    card_title_2: "Inclusive",
    card_headline_2: "Exciting for all ages",
    card_text_2: "HSS has age-specific units starting from 8 years old and up.",
    card_title_3: "Values",
    card_headline_3: "Respect & responsibility",
    card_text_3: "We are an inclusive association where we take care of one another.",
    span_3: "Everyone is welcome here, regardless of background and abilities..",
    card_title_4: "Safety & Security",
    card_headline_4: "Trained leaders",
    card_text_4: "Our leaders have extensive experience and training in Scouting and maritime safety.",
    span_4: "Anyone who wants to become a Scout leader must present a criminal record check."
  },
  faqCard: {
    title: "Frequently asked questions",
    text: "Here, we have gathered frequently asked questions from both future and current members of the association."
  },
  joinCard: {
    headline: "Become a scout",
    title: "Become a part of HSS",
    text: "At HSS, you will gain skills for life, experience the great outdoors and enjoy a wonderful sense of community."
  },
  tabTitle: {
    history: "HSS | History",
    join: "HSS | Join",
    "become-a-scout": "HSS | Become a scout",
    faq: "HSS | FAQ",
    "groups": "HSS | Groups",
    sjohumlorna: "HSS | Sjöhumlorna",
    kaparna: "HSS | Kaparna",
    konvojen: "HSS | Konvojen",
    utmanare: "HSS | Utmanare",
    familjescouter: "HSS | Familjescouter",
    lifestyle: "HSS | Lifestyle",
    boats: "HSS | Boats",
    cabins: "HSS | Cabins",
    myset: "HSS | Myset",
    ruffen: "HSS | Ruffen",
    members: "HSS | Members",
    information: "HSS | Members Infomation",
    safety: "HSS | Life Jacket Policy",
    contact: "HSS | Contact",
    gdpr: "HSS | GDPR"
  },
  description: "HSS website",
  groupsCard: {
    headline: "Groups",
    title: "Age Groups",
    text: "We have four age-appropriate sections. The program's content is tailored to the scouts' ages to ensure they get experiences and adventures that suit them. Children can join the scouts from the age of 8. In Utmanarna, our oldest scout section, you can join from the age of 15.",
  },
  boatsCard: {
    headline: "Scout Life",
    title: "Our Boats",
    text: "Our boats are an important part of scout life. Here, we learn to cooperate, develop seamanship, and experience adventures together on the water.",
  },
  cabinsCard: {
    headline: "Scout Life",
    title: "Our Scout Cabins",
    text: "Life as a sea scout is full of adventure, community, and freedom. You encounter the sea and nature together with others and create memories for life. This is where the adventure begins.",
  },
  mysetCard: {
    headline: "Scout Cabins",
    title: "Myset",
    text: "In the forest between Lövsta and Gåseborg lies Myset – our large and beautiful scout cabin. This is where the troop gathers for a variety of activities, especially hikes that offer both adventure and fellowship.",
  },
  history: {
    t0: "The History of HSS",
    p0: "The scout group was founded in 1959 and grew rapidly.",
    p1: "The commitment was immense, especially from parents who helped organize activities, raise funds, and build up the operations.",
    p2: "The very first boat, a 'Blekingeeka' (traditional wooden boat) named 'Inga-Lunda', marked the beginning of the group's seafaring life. Over time, more boats could be purchased thanks to bazaars, lotteries, and hard work.",
    p3: "By the early '60s, the group had grown substantially, with many scouts wanting to venture out onto Lake Mälaren. New boats were launched and sailing became an integral part of scout life.",
    p4: "At the same time, the need for a dedicated place on land grew. A scout hut was built over several years by volunteers and was inaugurated in 1968. The cabin was named 'Myset' and is still used today as a place for fellowship, camps, and memories.",
    p5: "Since its inception in 1959, HSS has been a sea scout group built on dedication, cooperation, and the desire to give young people adventure and community—and that flame still burns brightly today."
  },
  guidelines: {
    t0: "HSS guidelines",
    p0: "We have created guidelines for which types of life jackets should be used by Scouts who cannot swim, and Scouts who can swim.",
    p1: "It is best to assume that everyone, regardless of swimming ability, should wear a life jacket on docks and in boats. It is also important that the life jacket is properly buckled or tied.",
    p2: "Scouts who have not been able to demonstrate a 200m swimming proficiency to HSS should wear a life jacket (buoyancy aid/life vest with collar).",
    t1: "Non-swimming scouts",
    t2: "Swimming scouts",
    w0: "HSS requirements for life jackets (with collar):",
    w1: "HSS requirements for sailing vests:",
    l0: "Buoyancy of at least 90 N",
    l1: "Size and fit adapted to the scout's weight",
    l2: "Crotch strap",
    l3: "Buoyancy of at least 45 N",
    l4: "Size and fit adapted to the scout's weight",
    l5: "Crotch strap (Sjöhumlor and Kapare branches)"
  },
  safeScout: {
    h0: "Safe Scout",
    s0: "Swimming from a dock",
    s1: "Swimming from a boat",
    s2: "Sailing hike or flotilla",
    t0: "Exceptions",
    w0: "Everyone on docks or in boats must wear a life jacket.",
    p0: "No one should go out onto a dock or into a boat without a life jacket, unless the scout group and the skipper decide otherwise in special cases. The life jacket must be intact, function properly, and be the correct size for the person.",
    p1: "When swimming from a dock, the life jacket can be removed if a leader wearing a life jacket supervises the swimming and is ready to perform a rescue if anything happens. This is only okay if the leader feels safe and confident allowing the participants to swim without life jackets.",
    p2: "When swimming from a boat, the life jacket can be removed if the boat is moored and a leader or skipper wearing a life jacket remains on board to help, provided that the leader/skipper gives their permission and feels safe and confident with the situation.",
    p3: "During a sailing hike or flotilla, when the boats are moored overnight, a life jacket is not needed in the cockpit or the cabin. However, a life jacket is recommended when moving between the boat and land."
  },
  vests: {
    h0: "Inflatable vests",
    w0: "HSS advises against the use of inflatable life jackets.",
    p0: "There are several risks associated with using inflatable life jackets. Use a traditional life jacket or sailing vest instead, depending on swimming ability."
  },
  lockable: {
    h0: "Inflatable life jackets",
    w0: "HSS advises against the use of inflatable life jackets.",
    p0: "There are several risks associated with using inflatable life jackets. Once inflated, it becomes bulky and can make it harder to move around, swim, and climb out of the water. Additionally, an inflatable life jacket gets ruined if it deploys during a swim. It cannot be used for the remainder of the activity, which means a spare life jacket is always required.",
    w1: "Use a traditional life jacket or sailing vest instead, depending on swimming ability."
  },
  gdpr: {
    t0: "Data Collection via Scoutnet",
    p0: "Scoutnet is the Scouts' joint member registry, where we collect the following information about each member:",
    p1: "*We also collect this information for children in the registration registry (waiting list), which is a part of Scoutnet. The information regarding siblings and parents is used to offer sibling priority and to prioritize children whose parents hold a role within the scout group.",
    p2: "The purpose of collecting data in Scoutnet is to know who our members are, to be able to reach them with information, for attendance registration, to track section and patrol affiliation, and for invoicing.",
    s0: "Personal Data",
    s1: "Scout Group Information",
    s2: "Purpose of Data Collection",
    l0: "Name*",
    l1: "Personal identity number*",
    l2: "Address*",
    l3: "Phone number* (at least one phone number to a parent/guardian for a minor scout, and optional for the scout)",
    l4: "Email address* (at least one email address to a parent/guardian for a minor scout, and optional for the scout)",
    l5: "Section",
    l6: "Patrol",
    l7: "Start date in the scout group",
    l8: "Membership fee",
    l9: "If applicable, whether a parent holds a role in the scout group*",
    l10: "If applicable, whether siblings are members of the scout group*",
    l11: "Completed training/courses (primarily relevant for leaders)",
    l12: "Role in the scout group (only relevant for leaders)",
    l13: "Any awards or decorations"
  },
  ethics: {
    s0: "Ethical guidelines for data collection",
    p0: "We never enter a member's health information into Scoutnet.",
    p1: "Leaders and the board can export reports regarding our members from the registry. No individuals outside of HSS have access to the roster, and it cannot be downloaded from the website.",
    p2: "All member data that needs to be saved is entered into Scoutnet, and all email correspondence is deleted afterward.",
    p3: "Relevant data from the list above is shared with the municipality in our attendance reporting, for the purpose of receiving grants for our operations. When a member terminates their membership, all information about that member disappears from HSS's view in Scoutnet.",
    p4: "The member data does remain in Scoutnet, however, as long as the person does not have an active membership, only a few employees at the National Scout Office can access the information.",
    p5: "Through membership, individuals are insured via the Scouts' group insurance. The insurance company requires that data be saved for up to ten years, which is the time limit during which one can claim compensation for an insurance matter."
  },
  email: {
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
  map: {
    t0: "Directions",
    p0: "Turn down onto Hässelby Strandväg from Sandviksvägen. There is a parking lot by the beach where you can park your car.",
    p1: "Walk down toward the water and turn left (toward the power plant). The grey-green cabin (Ruffen) is located diagonally across from the dock."
  },
  scoutLife: {
    t0: "Scoutlife within HSS",
    header0: "Learning by doing",
    header1: "We are brave",
    header2: "Stronger together",
    text0: "In the scouts, you learn by doing—testing things yourself and growing through practical experiences together with others.",
    text1: "In the scouts, we dare to do more together and support each other in trying new things.",
    text2: "In the scouts, we become stronger together, lifting each other up and sharing a warm, safe community."
  },
  learning: {
    t0: "Learning for life",
    header0: "Seamanship",
    header1: "Nature education",
    header2: "Outdoor skills",
    text0: "We learn how to handle boats, tie knots, and navigate safely at sea.",
    text1: "We learn about animals and plants, nature's cycles, and how we can take care of the environment.",
    text2: "We learn how to cook outdoors, set up tents, and spend time in nature in a safe and secure way."
  },
  offers: {
    title: "What Scout Life Offers",
    header0: "Life on the waves",
    header1: "Naturally exciting",
    header2: "Confidence in yourself",
    header3: "Friends for life",
    text0: "Together we explore, sail, and challenge ourselves with laughter, community, and the spray of salt water in the air. It’s real adventure—and it begins on the water.",
    text1: "With soil on our hands and fresh air in our lungs, every meeting becomes an adventure—where nature is our playground and movement is a natural part of everything we do.",
    text2: "We learn by doing things ourselves. With every step you take and every challenge you dare to face, your courage grows—and you discover just how much you can actually achieve.",
    text3: "Through everything we experience together, strong bonds are formed. Here you can find good friends—the kind that stick around long after the adventure is over."
  },
  faq: {
    title: "Join the Scouts",
    title02: "Membership Questions"
  },
  fragorSvar: [
    { question: "Do we need to buy a scout uniform right away?", answer: "answer" },
    { question: "What kind of clothes do scouts usually wear?", answer: "answer" },
    { question: "Are meetings always held outdoors?", answer: "answer" },
    { question: "How much does it cost to join the scouts?", answer: "answer" },
    { question: "Does the child need to have prior experience with sailing or scouting?", answer: "answer" },
    { question: "We have become members—what happens now?", answer: "answer" },
  ],
  fragorSvar02: [
    {
      question: "Why do we have a scout uniform?",
      answer: `The very first training you should take is "Safe Meetings" (Trygga möten). It is the only mandatory training you must complete to be a scout leader. Safe Meetings is a web-based course that you complete on your own, and it takes about 1 hour.
    Here is how you get started with Safe Meetings >> 
    After Safe Meetings, it is appropriate to take "Leading Scouting" (Leda scouting). Here, you will gain knowledge that makes you feel more confident in your leadership role within the Scouts. You will learn about the Scouts' program and gain an understanding of what leadership in the Scouts entails. After this training, you can choose how you want to develop further.
    Read more about Leading Scouting here >> When you feel ready to continue developing your leadership within the Scouts, there are many more training courses to choose from. You can find them all on the Leadership Island. Read more about them here >>`
    },
    {
      question: "I am a new scout leader! Which training should I take first?",
      answer: `You pay a fee to the Scouts, any cooperating organization, and the district. Insurance is included in the fee to the Scouts, which is why it is important to pay your membership fee. The membership fee also includes the local troop's fee.`
    },
    {
      question: "I have lost my invoice. What should I do?",
      answer: `Send an email to support@scouterna.se with your name and membership number, and you will receive a copy of the invoice via email.`
    },
    {
      question: "What is included in my membership fee?",
      answer: `You pay a fee to the Scouts, any cooperating organization, and the district. Insurance is included in the fee to the Scouts, which is why it is important to pay your membership fee. The membership fee also includes the local troop's fee.`
    },
    {
      question: "How do I change my billing address?",
      answer: "Go to www.scoutnet.se, log in, and change your billing address."
    },
    {
      question: "My invoice has the wrong amount. What should I do?",
      answer: `Send an email to support@scouterna.se and state why you believe the amount is incorrect, along with your membership number, the name of your troop, and which invoice it concerns.`
    },
    {
      question: "How do I change my contact information?",
      answer: `Log in to www.scoutnet.se, where you can update your information.`
    }
  ],
  lifestyle: {
    headline: "Scout Life",
    title: "The Waves are Waiting",
    text: "Life as a sea scout is filled with adventure, community, and freedom. You encounter the sea and nature together with others and create memories for life. This is where the adventure begins."
  },
  ruffen: {
    headline: "Scout Cabins",
    title: "Ruffen",
    text: "Ruffen is our premises located by Hässelby Strandbad. This is where we hold our troop meetings, and it also houses our Optimist dinghies.",
  },
  memberInfo: {
    headline: "Scout Life",
    title: "Information",
    text: "Here we have gathered useful information for our members to know."
  },
  safetyCard: {
    headline: "Safety",
    title: "HSS Life Jacket Policy",
    text: "To ensure that all scouts and their guardians receive clear instructions regarding the rules for life jacket use, the HSS board has developed a life jacket policy. A summarized version is available here. To read the life jacket policy in its entirety, please download the PDF."
  },
  safetyBtn: {
    btnMobile: "Download PDF",
    btnDesktop: "Download the life jacket policy as PDF"
  },
  becomeScoutSmallCard: {
    title: "Scout Life for youth and adults",
    subtitle: "We have age-appropriate groups for our scouts. As an adult, you can get involved as a leader, or help out as a parent.",
    secondTitle: "Scout",
    secondText: "You can become a Scout from the age of 8. The members in the group for our oldest Scouts are 15 years and older.",
    thirdtext: "The content of each group is adapted to the Scouts' age to make Scout life safe, fun, and exciting for all our Scouts.",
    button: "Read more about our groups"
  },
  groupCard: {
    headline: "groups",
    title: "Age groups",
    text: "We have four age groups. The program content is tailored to the scouts' ages so they can gain experiences that suit them. Children can join the scouts from the age of 8. In the Senior Scouts (Utmanarna), our oldest scout group, members can join from the age of 15."
  },
  faqContact: {
    title: "Contact us",
    text: "We hope you've found the answers to your questions. However, if there is anything else you are still wondering about, feel free to contact us and we'll help you out."
  },
  joinContent: {
    title: "Scout Leader",
    text: "As an adult, you can make a vital impact as a scout leader. You will coach the scouts and create a safe environment that encourages them to challenge themselves and grow. All our Scout Leaders are required to complete the Safe Meetings (Trygga Möten) training.",
    button: "Get started with Safe Meetings",
    text02: "After completing the Safe Meetings course, you can continue your training if you wish. We highly recommend taking the Leading Scouting (Leda Scouting) course. You can read more about our training programs at Leadership Island (Ledarskapsön).",
    button02: "Visit Leadership Island",
    title02: "Parent",
    text03: "As a parent, you play an important part in HSS Scouterna. It is thanks to committed adults that we are able to provide children with all the experiences and opportunities that scouting offers. You don't need any prior experience with scouting – the most important thing is your willingness to help out."

  },
  joinPage: {
    title: "Express Your Interest",
    text: "Future Scout, leader, or supportive parent? Start the adventure by expressing your interest!",
    buttonText: "Join the Scouts"
  },
  myset01: {
    t0: "Interested in renting Myset?",
    p0: "Email myset.hss.scout@gmail.com to make a booking inquiry.",
  },

  myset02: {
    s0: "Amenities",
    t1: "Myset is a pleasant and well-maintained scout cabin. With radiators and a modern ventilation system, it is easy to keep warm, and the cabin always feels welcoming and cozy &ndash; regardless of the season.",
    p2: "The cabin features a large gathering room where a cozy fireplace naturally becomes the center of attention. There is also a spacious kitchen and two smaller leader rooms that provide space for both planning and rest.",
  },

  myset03: {
    t1: "Equipment",
    p3: "The kitchen is fully equipped with both electric and wood-burning stoves, a dishwasher, microwave, and a large refrigerator. It is a complete kitchen that can easily prepare and serve meals for up to 30 people &ndash; perfect for camps, hikes, and shared meals.",
  },
  mysetBtn: {
    text: "View floor plan"
  },
  sjohumlornaSpårarscouter: {
    s0: "Spårarscouts",
    p0: "The scouts at the Sjöhumlorna section are Spårarscouts. Spårarna is the beginning of the scouting journey, where each child gets to grow, explore, and feel pride in what they can accomplish.",
  },
  sjohumlornaAge: {
    s0: "Age",
    p0: "The children at Sjöhumlorna are between 8 and 9 years old.",
  },
  sjohumlorMeeting: {
    s0: "Section meetings",
    p0: "Day: Monday",
    p1: "Ruffen at Hässelby Strandbad.",
  },
  sjohumlorPlace: {
    s0: "Badges",
    p0: "For Spårare, there are plenty of exciting badges. Lighting a lantern for the first time can be a big challenge. Or making popcorn on a storm kitchen. There are also badges that focus on how to be a good friend or how to take care of the environment.",
  },
  sjohumlorButton: "Badge poster for Spårare",
  kaparnaUpptäckarscouter: {
    s0: "Upptäckarscouts",
    p0: "Many at this age are curious about the world around them, and at Kaparna we encourage that engagement. We often work practically and concretely - it can range from solving missions together to learning to take responsibility in small and big situations."
  },
  kaparnaAge: {
    s0: "Age",
    p0: "The children at Kaparna are between 10 and 11 years old.",
  },
  kaparnaMeeting: {
    s0: "Section meetings",
    p0: "Day: Tuesday",
    p1: "Ruffen at Hässelby Strandbad",
  },
  kaparnaPlace: {
    s0: "Badges",
    p0: "There are plenty of badges that suit Upptäckare. For example, they can show that they can handle a knife and axe. Or one of the many interest badges can serve as a framework for the program. There are badges for everything from first aid, fire-making and cooking to water, darkness and superheroes.",
  },
  kaparnaButton: "Badge poster for Upptäckare",
  utmanarscouter: {
    s0: "Utmanarscouts",
    p0: "In the adventure patrol, they collaborate, test different roles and take on bigger challenges, both in outdoor life and problem-solving. They also get to have more say themselves, with support from leaders, and develop in taking a stand and seeing different perspectives.",
  },
  utmanareAge: {
    s0: "Age",
    p0: "The scouts in the Utmanare section are 15 years and older.",
  },
  utmanareMeeting: {
    s0: "Section meetings",
    p0: "Day: Tuesday or Thursday.",
    p1: "Ruffen at Hässelby Strandbad.",
  },
  utmanarePlace: {
    s0: "Challenges",
    p0: "There are ten challenges. Two of them are done individually and the rest are done together in the Utmanare team. The individual challenges have slightly stricter rules. The others are decided together in the Utmanare team.",
  },
  utmanareButton: "Discover the challenges",
  äventyrarscouter: {
    s0: "Äventyrarscouts",
    p0: "In the adventure patrol, they collaborate, test different roles and take on bigger challenges, both in outdoor life and problem-solving. They also get to have more say themselves, with support from leaders, and develop in taking a stand and seeing different perspectives.",
  },
  konvojenAge: {
    s0: "Age",
    p0: "The children at Kaparna are between 12 and 14 years old.",
  },
  konvojenMeeting: {
    s0: "Section meetings",
    p0: "Day: Thursday",
    p1: "Time: 18:00",
    p2: "Location: Ruffen at Hässelby Strandbad.",
  },
  konvojenPlace: {
    s0: "Badges",
    p0: "Badges are a fun way to connect knowledge or an experience to something. As an Äventyrare, there are many exciting badges to take. Dare to challenge yourself to bigger adventures and bigger thoughts!",
  },
  konvojenButton: "Badge poster for Äventyrare",
};