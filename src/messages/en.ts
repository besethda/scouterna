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
    homePageCard: {
    headline: string,
    title: string,
    text: string,
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
  homePageCard: {
    headline: "Become a Scout",
    title: "The waves are waiting",
    text: "HSS is an inclusive association where safety and joy are at the center. We learn by doing – out in nature and at sea – and you will gain knowledge, friends, and memories for life.",
  }

};