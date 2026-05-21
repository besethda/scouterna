export type MessagesEngType = {
  path:string;
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
  hero: {
    hero_title: string,
    hero_subtitle01:string,
    hero_subtitle02:string,
    hero_description:string
  };
  CTABtn: {
    text:string
  };
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
   }
  }


};

export const En: MessagesEngType = {
  home: {
    title: "Welcome to HSS",
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
    text:"Join the Sea Scouts"
  }, 
   breadcrumbs:{
    title:"Home",
    path:  "/en",
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
  path:"/en"

};