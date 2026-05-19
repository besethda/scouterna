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


};