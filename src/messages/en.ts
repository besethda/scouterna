export type MessagesEngType = {
  home: {
    title: string;
  };
  about: {
    title: string;
  };
  footer: {
    footer_service: string;
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
  hero: {
    hero_title: string,
    hero_subtitle01:string,
    hero_subtitle02:string,
    hero_description:string
  };

};

export const En: MessagesEngType = {
  home: {
    title: "Welcome to HSS",
  },
  about: {
    title: "About HSS"
  },
  footer: {
    footer_service: "Scout Services",
    footer_school: "The Scouts' Folk High School",
    footer_shop: "Scout shop",
    footer_contact: "Contact",
    footer_followUs: "Follow us"
  },
  header: {
    header_title: "Hässelby Strand",
    header_subtitle: "Sea Scouts",
    header_join: "Become a Scout"
  },
  hero: {
    hero_title: "Hässelby Strand Sea Scouts",
    hero_subtitle01: "Adventures begin",
    hero_subtitle02: "at the water's edge",
    hero_description: "On the waves of Lake Mälaren, children learn to sail, collaborate, and grow within a safe community in Hässelby Strand."
  }


};