import { title } from "process";

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
    title1:string,
    title2:string,
    title3:string
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
  hero: {
    hero_title: string,
    hero_subtitle01: string,
    hero_subtitle02: string,
    hero_description: string
  };
  CTABtn: {
    text: string
  };
  breadcrumbs: {
    title: string,
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
      myset: string,
      ruffen: string,
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
};

export const En: MessagesEngType = {
  home: {
    title: "Welcome to HSS",
    divisions: "Groups",
    divisions_text: "We have age-based groups for children from 8 years old and up."
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
    title1:"Sailing & Sea Life",
    title2:"Safe Community",
    title3:"Discovery & Learning"
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
  hero: {
    hero_title: "Hässelby Strand Sea Scouts",
    hero_subtitle01: "Adventures begin",
    hero_subtitle02: "at the water's edge",
    hero_description: "On the waves of Lake Mälaren, children learn to sail, collaborate, and grow within a safe community in Hässelby Strand."
  },
  CTABtn: {
    text: "Join the Sea Scouts"
  },
  breadcrumbs: {
    title: "Home",
    path: "/en",
    page: {
      "about-us": "About HSS",
      history: "History",
      contact: "Contact",
      gdpr: "GDPR",
      members:"Members",
      information: "Member Information",
      safety: "HSS Life Jacket Policy",
      "what-we-do": "What We Do",
      lifestyle: "Lifestyle",
      boats: "Our Boats",
      cabins: " Our Scout Cabins",
      myset:"Myset",
      ruffen:"Ruffen",
      groups: "Group Structure",
      "age-sections": "Age Groups",
      sjohumlorna: "Sjöhumlorna",
      kaparna: "Kaparna",
      utmanare: "Utmanare",
      konvojen: "Konvojen",
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
  ]
};