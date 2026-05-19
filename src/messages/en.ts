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
  },
  homePage: {
    title: string,
    subtitle: string, 
    subtitle2: string
  }
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
  homePage: {
    title: "HSS welcomes everyone",
    subtitle: "No matter who you are or your level of experience, there is a place for you here.", 
    subtitle2: "No matter who you are or your level of experience, there is a place for you here. Join us as a Scout, or get involved as a parent or Scout leader."
  }
};