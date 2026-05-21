export type MessagesEngType = {
  path: string;
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
    nav_gdpr: string
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
    }
  }


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
    nav_gdpr: "GDPR"
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
  }
};