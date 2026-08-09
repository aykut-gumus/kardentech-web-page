export type Locale = 'tr' | 'en' | 'ru';

export type Dictionary = {
  common: {
    learnMore: string;
    contactUs: string;
    phone: string;
    whatsapp: string;
    openInMaps: string;
    all: string;
  };
  nav: {
    home: string;
    about: string;
    services: string;
    references: string;
    contact: string;
    serviceDropdown: {
      electrical: string;
      mechanical: string;
      finishing: string;
    };
  };
  home: {
    hero: {
      title: string;
      subtitle: string;
    };
  };
  about: {
    slogan: string;
    intro: {
      p1: string;
      p2: string;
    };
    expertiseTitle: string;
    expertise: {
      decoration: string;
      turnkey: string;
      design: string;
      electroMechanical: string;
    };
    experienceTitle: string;
  };
  services: {
    approachTitle: string;
    categories: {
      electrical: { title: string; desc: string };
      mechanical: { title: string; desc: string };
      finishing: { title: string; desc: string };
    };
  };
  references: {
    filters: {
      all: string;
      residential: string;
      hotel: string;
      commercial: string;
      industrial: string;
    };
    projectPrefix: string;
    projectSuffix: string;
  };
  contact: {
    title: string;
    info: {
      address: string;
      phone: string;
      email: string;
      instagram: string;
      call: string;
      viewProfile: string;
    };
    form: {
      title: string;
      fullName: string;
      email: string;
      phone: string;
      subject: string;
      message: string;
      submit: string;
      sending: string;
      success: string;
      error: string;
      honeypot: string;
      validation: {
        requiredName: string;
        requiredEmail: string;
        invalidEmail: string;
        requiredMessage: string;
      };
    };
    bottom: {
      title: string;
      desc: string;
      location: string;
    };
  };
};
