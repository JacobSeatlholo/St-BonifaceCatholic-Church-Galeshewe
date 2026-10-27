/**
 * Central place to edit parish details.
 * Items marked PLACEHOLDER should be confirmed with the parish office.
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

export const NAV_LINKS = [
  { href: "#story", label: "Our Story" },
  { href: "#worship", label: "Worship" },
  { href: "#centenary", label: "Centenary" },
  { href: "#community", label: "Parish Life" },
  { href: "#gallery", label: "Gallery" },
  { href: "#visit", label: "Visit" },
];

export const MASS_TIMES = [
  {
    day: "Sunday",
    detail: "Mass at 08:00 & 10:00", // PLACEHOLDER — confirm with office
    note: "The Lord's Day",
  },
  {
    day: "Monday",
    detail: "Communion service at 09:00", // PLACEHOLDER
    note: "Start of the week",
  },
  {
    day: "Tuesday – Friday",
    detail: "Mass at 09:00", // PLACEHOLDER
    note: "Weekday Eucharist",
  },
  {
    day: "Saturday",
    detail: "Vigil Mass at 17:30", // PLACEHOLDER
    note: "Sunday anticipates",
  },
  {
    day: "Confessions",
    detail: "Saturday 16:30–17:15, or by appointment", // PLACEHOLDER
    note: "Reconciliation",
  },
];

export const SACRAMENTS = [
  {
    title: "Baptism",
    body: "The door of the Christian life. Preparation for parents and godparents is arranged through the parish office.",
  },
  {
    title: "Holy Eucharist",
    body: "First Communion classes for children run each year through our catechism programme.",
  },
  {
    title: "Confirmation",
    body: "The seal of the Holy Spirit, conferred on the young people of the parish after a period of formation.",
  },
  {
    title: "Matrimony",
    body: "Couples should begin arrangements at the parish office at least six months before the wedding.",
  },
  {
    title: "Reconciliation",
    body: "Confessions are heard on Saturday afternoons before the vigil Mass, or anytime by appointment.",
  },
  {
    title: "Anointing of the Sick",
    body: "For the elderly and the ill. Please call the office so a priest can bring the sacrament to the home.",
  },
];

export const MINISTRIES = [
  {
    title: "Altar Servers",
    body: "The young people who carry the cross and candles — a beloved tradition of the parish, and its proudest sight on a Sunday.",
  },
  {
    title: "Choir & Musicians",
    body: "The choir leads the song of the congregation. Bring a voice, an instrument, or simply a love of singing.",
  },
  {
    title: "Catechism",
    body: "From first lessons to confirmation, generations of Galeshewe's children have learned the faith in these classrooms.",
  },
  {
    title: "Sodalities & Guilds",
    body: "The men's and women's sodalities carry the parish's prayer and service beyond Sunday, in uniform and in visits to the sick.",
  },
  {
    title: "Youth",
    body: "Young Catholics finding friendship, formation and a place to belong between two Sundays.",
  },
  {
    title: "Outreach",
    body: "From bereavement to harvest, the parish stands with families in hard seasons — quietly, and without keeping count.",
  },
];

export const GALLERY = [
  {
    src: "/images/hero-mass.jpg",
    alt: "Sunday Mass at St Boniface, celebrated beneath the mosaic of Christ in glory",
    caption: "Sunday Mass before the mosaic of Christ in glory",
  },
  {
    src: "/images/worship-ambo.jpg",
    alt: "The Word of God proclaimed at the ambo of the Chi-Rho, flanked by altar servers",
    caption: "Proclaiming the Word at the ambo of the Chi-Rho",
  },
  {
    src: "/images/clergy.jpg",
    alt: "Four ministers of the altar in white vestments with Marian emblems",
    caption: "Ministers of the altar in the centenary year",
  },
  {
    src: "/images/sodality.jpg",
    alt: "The men's sodality in red ties standing before the mosaic of Christ",
    caption: "The men's sodality on its centenary Sunday",
  },
  {
    src: "/images/story-lector.jpg",
    alt: "A lector in the centenary t-shirt carrying the Book of the Gospels",
    caption: "Carrying the Book — centenary shirt and all",
  },
  {
    src: "/images/story-bottles.jpg",
    alt: "Commemorative centenary water bottles bearing the parish emblem",
    caption: "Centenary keepsakes — even the water wore the emblem",
  },
];

export const TIMELINE = [
  {
    year: "1925",
    title: "A mission is planted",
    body: "In the township growing up beside Kimberley's diamond diggings, a Catholic community gathers under the patronage of St Boniface.",
  },
  {
    year: "1925 – 2025",
    title: "Faith handed on",
    body: "Through every season of the century — baptisms, first communions, weddings, funerals, choirs and sodalities — the faith is passed from parents to children, and the parish becomes a second home.",
  },
  {
    year: "8 Dec 2025",
    title: "The centenary",
    body: "A Thanksgiving Mass gathers the whole of Galeshewe to celebrate one hundred years of excellence, resilience, strength and support for the community.",
  },
];
