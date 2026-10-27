/**
 * Parish facts that do NOT change with language (contact, links, images).
 * All on-page wording — in English, Setswana and Afrikaans — lives in
 * src/lib/i18n.ts. Items marked PLACEHOLDER should be confirmed with
 * the parish office.
 */

export const PARISH = {
  name: "St Boniface Catholic Church",
  shortName: "St Boniface",
  emblem: "St Boniface Parish · Kimberley",
  founded: 1925,
  centenary: "8 December 2025",
  address: {
    line1: "St Boniface Mission",
    line2: "3–5 Caritas Road, Galeshewe",
    city: "Kimberley, Northern Cape",
    postal: "P O Box 31, Kimberley, 8301",
  },
  phone: "+27 53 831 4411",
  phoneHref: "tel:+27538314411",
  email: "stbonifacekim@gmail.com",
  officeHours: "Monday – Friday · 08:30–16:30", // PLACEHOLDER
  directionsUrl:
    "https://www.google.com/maps/search/?api=1&query=St+Boniface+Catholic+Church+Caritas+Road+Galeshewe+Kimberley",
  diocese: "Roman Catholic Diocese of Kimberley",
  bishop: "Bishop Duncan Tsoke",
  parishPriest: "Fr T. Mosito",
};

/** Credit for the demo build — shown in the footer in every language. */
export const DEMO_CREDIT = {
  label: "BusinessHustle",
  url: "https://businesshustle.co.za",
};

/** Gallery image paths, in display order (captions live in i18n). */
export const GALLERY_SRCS = [
  "/images/hero-mass.jpg",
  "/images/worship-ambo.jpg",
  "/images/clergy.jpg",
  "/images/sodality.jpg",
  "/images/story-lector.jpg",
  "/images/story-bottles.jpg",
];
