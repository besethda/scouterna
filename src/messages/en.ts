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