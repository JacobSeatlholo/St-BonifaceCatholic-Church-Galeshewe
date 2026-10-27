/**
 * ─────────────────────────────────────────────────────────────
 *  St Boniface Catholic Church — trilingual dictionary
 *  English (en) · Setswana (tn) · Afrikaans (af)
 *
 *  All on-page wording lives here, grouped by section.
 *  To edit a translation, find its block below.
 *  NOTE: Setswana/Afrikaans text should be reviewed by a
 *  first-language speaker of the parish before launch.
 * ─────────────────────────────────────────────────────────────
 */

export type Lang = "en" | "tn" | "af";

export const LANGS: {
  code: Lang;
  short: string;
  native: string;
}[] = [
  { code: "en", short: "EN", native: "English" },
  { code: "tn", short: "TN", native: "Setswana" },
  { code: "af", short: "AF", native: "Afrikaans" },
];

const en = {
  meta: {
    htmlLang: "en",
    switchLabel: "Change language",
  },
  nav: {
    links: [
      { href: "#story", label: "Our Story" },
      { href: "#worship", label: "Worship" },
      { href: "#centenary", label: "Centenary" },
      { href: "#community", label: "Parish Life" },
      { href: "#gallery", label: "Gallery" },
      { href: "#visit", label: "Visit" },
    ],
    join: "Join us for Mass",
    subtitle: "Catholic Church · Galeshewe",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    menuLabel: "Menu",
    navLabel: "Primary",
    welcomeNote: "All are welcome",
  },
  hero: {
    eyebrow: "St Boniface Catholic Church · Est. 1925",
    titleA: "A hundred years of",
    titleEm: "grace",
    titleB: "in Galeshewe.",
    body: "On the historic streets of Kimberley’s oldest township, a parish has kept the faith for a century — through struggle and celebration, always with open doors and open arms.",
    ctaMass: "Join us for Mass",
    ctaStory: "Read our story",
    stripTime: "Sundays · Mass at 08:00 & 10:00",
    stripWelcome: "All are welcome",
    alt: "Sunday Mass at St Boniface, Galeshewe, beneath the mosaic of Christ with arms outstretched",
  },
  welcome: {
    eyebrow: "Dumelang · A warm welcome",
    title: "Welcome home.",
    body: "Whether this is your first visit or your family has knelt here for four generations, you belong. St Boniface is a living parish — a place where the Word is proclaimed, the sacraments are celebrated, and no one walks through the door a stranger.",
    facts: [
      {
        figure: "1925",
        label: "Founded",
        body: "The year the parish was planted, within living memory of the diamond rush that built Kimberley.",
      },
      {
        figure: "100",
        label: "Years of faith",
        body: "A century of worship, resilience and service in the heart of Galeshewe.",
      },
      {
        figure: "08.12.25",
        label: "The centenary",
        body: "A Thanksgiving Mass celebrated by the whole community, one hundred years to the day.",
      },
    ],
  },
  story: {
    eyebrow: "Our story",
    title: "Faith planted deep, growing for a century.",
    p1: "St Boniface was founded in 1925, in the township that grew up beside Kimberley’s diamond mines. Galeshewe — one of the oldest townships in South Africa — has known hardship, removals and resistance; through all of it, the parish has been a fixed point: a sanctuary of stone and mosaic where generations came to be baptised, married, mourned and sent out again.",
    p2: "Over ten decades the parish raised choirs and catechists, altar servers and sodalities. It taught children their prayers, stood with families in bereavement and in celebration, and kept its doors open through the hardest years of the country’s history. Many who lead in the parish today first served on its altars as children — the faith handed on, generation to generation, exactly as it was handed to us.",
    quote:
      "“Celebrating 100 years of Excellence, Resilience, Strength, and Supporting the Community.”",
    quoteAttr: "The parish’s own words, centenary year 2025",
    p3: "On 8 December 2025 the parish marked its centenary with a Thanksgiving Mass — the whole of Galeshewe gathered under one roof, in shirts and banners of purple and gold. Even the bottles of water set out for the crowd wore the parish emblem: a saint bending to bless two children, drawn in a single blue line. That line has always been the whole story.",
    p4: "Today St Boniface looks to its second century with the same quiet confidence it has always had: the doors open, the mosaics glowing above the altar, and the welcome as wide as the arms of Christ depicted there.",
    timeline: [
      {
        year: "1925",
        title: "A mission is planted",
        body: "In the township growing up beside Kimberley’s diamond diggings, a Catholic community gathers under the patronage of St Boniface.",
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
    ],
    cap1: "Centenary Thanksgiving Mass · December 2025",
    cap2: "Centenary keepsakes, 1925–2025",
    cap3: "The parish emblem",
    altLector:
      "A parishioner in the St Boniface centenary t-shirt carrying the Book of the Gospels",
    altBottles:
      "Commemorative centenary water bottles bearing the parish emblem, address and contact details",
    altEmblem:
      "The parish emblem on ochre: St Boniface blessing two children, drawn in a single blue line",
  },
  patron: {
    eyebrow: "Our patron",
    title: "St Boniface, bishop & martyr",
    p1a: "Born Wynfrith in Devon around the year 675, Boniface left everything to preach the Gospel among the Germanic peoples. A Benedictine monk, bishop and reformer, he became known as the ",
    p1em: "Apostle of the Germans",
    p1b: " — and for the night at Fritzlar when, armed only with an axe, he felled the sacred oak of Thor and built a chapel from its timber.",
    p2: "He died a martyr at Dokkum in 754, and the Church honours him on 5 June. Every Catholic of this parish inherits his example: a faith planted deep enough to fell giants, and humble enough to stoop and bless children. It is why our emblem shows the bishop bowing towards the smallest ones — the strong protecting, the little ones welcomed.",
    facts: [
      { when: "c. 675", what: "Born Wynfrith, in Devon, England" },
      { when: "716", what: "Leaves England as a missionary to the Germanic peoples" },
      { when: "754", what: "Martyred at Dokkum, Frisia" },
      { when: "5 June", what: "Feast day — patron of Germany" },
    ],
  },
  mosaic: {
    quote:
      "“Come to me, all you who labour and are burdened, and I will give you rest.”",
    caption: "The mosaics above our altar · Matthew 11:28",
    alt: "The mosaic of Christ with arms outstretched and Our Lady above the altar of St Boniface",
  },
  worship: {
    eyebrow: "Worship with us",
    title: "Mass times & sacraments",
    intro:
      "The centre of our life together is the altar. Whatever week you have had, there is a place set for you at the Lord’s table.",
    weekTitle: "The week at St Boniface",
    massTimes: [
      { day: "Sunday", detail: "Mass at 08:00 & 10:00", note: "The Lord’s Day" },
      { day: "Monday", detail: "Communion service at 09:00", note: "Start of the week" },
      { day: "Tuesday – Friday", detail: "Mass at 09:00", note: "Weekday Eucharist" },
      { day: "Saturday", detail: "Vigil Mass at 17:30", note: "Sunday anticipates" },
      { day: "Confessions", detail: "Saturday 16:30–17:15, or by appointment", note: "Reconciliation" },
    ],
    scheduleNote:
      "Times may change on feast days and public holidays — please confirm with the parish office.",
    amboCaption: "The Word proclaimed at the ambo of the Chi-Rho",
    verse: "“Your word is a lamp for my steps”",
    amboAlt:
      "The Word proclaimed at the ambo of the Chi-Rho, altar servers standing alongside",
    sacEyebrow: "The sacraments",
    sacTitle: "Christ meeting us at every stage of life",
    sacraments: [
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
    ],
    sacNote:
      "To arrange any of the sacraments, please contact the parish office. For the sick and housebound, a priest will gladly visit.",
  },
  centenary: {
    eyebrow: "8 December 2025 · A century of grace",
    title: "One hundred years. One Mass of thanksgiving.",
    p1: "The parish’s hundredth year fell within the Church’s Jubilee — a year of hope. On 8 December 2025, St Boniface gathered exactly as it had done for a hundred years: at the altar. The mosaics gleamed, the choir gave everything, and the altar servers stood in ranks of white along the sanctuary.",
    p2: "Parishioners wore the centenary colours of purple and gold; the emblem of the blessing saint was on shirts, on banners, even on bottles of water set out for the crowd. It was, in the truest sense, a family occasion — grandparents who were baptised here, beside babies waiting for the same sacrament.",
    words: ["Excellence", "Resilience", "Strength", "Community"],
    wordsNote:
      "The four words the parish chose for its hundredth year — and a fair description of the next hundred, should the Lord grant them.",
    posterCaption: "The centenary programme cover · 1925–2025",
    posterAlt:
      "St Boniface centenary poster — 100th year anniversary, 08 December 2025, in purple and gold",
  },
  community: {
    eyebrow: "Parish life",
    title: "A parish of many hands",
    intro:
      "The Mass is the source and summit of everything we do — and around the altar, the parish hums with the work of many hands. There is a place for yours.",
    ministries: [
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
        body: "From first lessons to confirmation, generations of Galeshewe’s children have learned the faith in these classrooms.",
      },
      {
        title: "Sodalities & Guilds",
        body: "The men’s and women’s sodalities carry the parish’s prayer and service beyond Sunday, in uniform and in visits to the sick.",
      },
      {
        title: "Youth",
        body: "Young Catholics finding friendship, formation and a place to belong between two Sundays.",
      },
      {
        title: "Outreach",
        body: "From bereavement to harvest, the parish stands with families in hard seasons — quietly, and without keeping count.",
      },
    ],
    note: "Groups meet through the week; meeting times are arranged through the parish office. New members are always welcome.",
  },
  gallery: {
    eyebrow: "Moments",
    title: "The parish in pictures",
    intro:
      "Photographs from the life of St Boniface — most of them from the centenary Thanksgiving Mass on 8 December 2025.",
    items: [
      {
        caption: "Sunday Mass before the mosaic of Christ in glory",
        alt: "Sunday Mass at St Boniface, celebrated beneath the mosaic of Christ in glory",
      },
      {
        caption: "Proclaiming the Word at the ambo of the Chi-Rho",
        alt: "The Word of God proclaimed at the ambo of the Chi-Rho, flanked by altar servers",
      },
      {
        caption: "Ministers of the altar in the centenary year",
        alt: "Four ministers of the altar in white vestments with Marian emblems",
      },
      {
        caption: "The men’s sodality on its centenary Sunday",
        alt: "The men’s sodality in red ties standing before the mosaic of Christ",
      },
      {
        caption: "Carrying the Book — centenary shirt and all",
        alt: "A lector in the centenary t-shirt carrying the Book of the Gospels",
      },
      {
        caption: "Centenary keepsakes — even the water wore the emblem",
        alt: "Commemorative centenary water bottles bearing the parish emblem",
      },
    ],
    viewPhotoAria: "View photo",
    lightboxLabel: "Photo viewer",
    closeLabel: "Close photo viewer",
    prevLabel: "Previous photo",
    nextLabel: "Next photo",
  },
  visit: {
    eyebrow: "Find us",
    title: "Come and see.",
    intro:
      "The parish is easy to find in the heart of Galeshewe. Ring the office, write to us, or simply walk through the door on Sunday — the welcome is the same either way.",
    officeLabel: "Parish office",
    emailLabel: "Email",
    hoursLabel: "Office hours",
    directionsBtn: "Get directions",
    emailBtn: "Email the parish",
    sundayEyebrow: "This Sunday",
    sundayMassA: "Mass at 08:00",
    sundayMassB: "10:00",
    parkingNote:
      "Parking on the grounds — arrive a few minutes early and settle in.",
    dioceseLine: "A parish of the Roman Catholic Diocese of Kimberley",
    leaderLine: "Under the leadership of",
    priestLabel: "Parish priest:",
    quote: "“I was a stranger and you welcomed me.”",
  },
  footer: {
    blurb:
      "A hundred years of grace — and a second century begun. Whatever brings you to Galeshewe, you will find a chair saved and a candle lit.",
    explore: "Explore",
    contact: "Contact",
    links: [
      { href: "#story", label: "Our story" },
      { href: "#worship", label: "Mass times & sacraments" },
      { href: "#centenary", label: "The centenary" },
      { href: "#community", label: "Parish life" },
      { href: "#gallery", label: "Gallery" },
      { href: "#visit", label: "Find us" },
    ],
    copyrightSuffix: "A parish of the Roman Catholic Diocese of Kimberley.",
    tagline: "1925 – 2025 · A hundred years of grace",
    credit: "Demo website built by",
  },
};

export type Dict = typeof en;

/* ─── Setswana ─────────────────────────────────────────────── */

const tn: Dict = {
  meta: {
    htmlLang: "tn",
    switchLabel: "Fetola puo",
  },
  nav: {
    links: [
      { href: "#story", label: "Kgang ya Rona" },
      { href: "#worship", label: "Kobamelo" },
      { href: "#centenary", label: "Moletlo wa 100" },
      { href: "#community", label: "Botshelo jwa Parose" },
      { href: "#gallery", label: "Ditshwantsho" },
      { href: "#visit", label: "Etela Rona" },
    ],
    join: "Tla rapeleng le rona",
    subtitle: "Kereke ya Katoliki · Galeshewe",
    openMenu: "Bula menu",
    closeMenu: "Tswala menu",
    menuLabel: "Menu",
    navLabel: "Tsamaiso",
    welcomeNote: "Botlhe ba amogelwa",
  },
  hero: {
    eyebrow: "Kereke ya Katoliki ya St Boniface · E tlhomilwe ka 1925",
    titleA: "Lekgolo la dingwaga tsa",
    titleEm: "mosa",
    titleB: "mo Galeshewe.",
    body: "Kwa Galeshewe, toropaneng e e bogologolo ya Kimberley, parose e tshegetse tumelo dingwaga di le lekgolo — ka nako ya ntwa le ya boitumelo, ka metlha ka kgoro e e butsweng le ka dikou tse di butsweng.",
    ctaMass: "Tla rapeleng le rona",
    ctaStory: "Bala kgang ya rona",
    stripTime: "Ka Tshipi · Misa ka 08:00 le 10:00",
    stripWelcome: "Botlhe ba amogelwa",
    alt: "Misa ya Tshipi kwa St Boniface, Galeshewe, ka fa tlase ga mosaik ya Keresete a atasoloditse dikou",
  },
  welcome: {
    eyebrow: "Dumelang · Kamogelo e e bothitho",
    title: "Amogelwa gae.",
    body: "Go sa kgaotse gore ke ketelo ya gago ya ntlha kgotsa lelapa la lona le kopile fano dingwaga di le nne, o wa rona. St Boniface ke parose e e tshelang — lefelo leo Lefoko le begelwang teng, sakramente di ketekwang teng, mme ga go na yo tsenang kgorong a le moeng.",
    facts: [
      {
        figure: "1925",
        label: "Tshimologo",
        body: "Ngwaga oo parose e tlhomilweng ka one — ka nako eo batho ba santse ba gopola letsholo la ditaemane le laga Kimberley.",
      },
      {
        figure: "100",
        label: "Dingwaga tsa tumelo",
        body: "Sekete sa dingwaga sa kobamelo, boikanyego le tirelo mo gare ga Galeshewe.",
      },
      {
        figure: "08.12.25",
        label: "Moletlo wa lekgolo",
        body: "Misa ya Tebogo e e ketekiwang ke setšhaba ka bophara, sekete sa dingwaga ka ntlha ya tsela.",
      },
    ],
  },
  story: {
    eyebrow: "Kgang ya rona",
    title: "Tumelo e e jalilweng ka botono, e gola ka dingwaga di le lekgolo.",
    p1: "St Boniface e tlhomilwe ka 1925, mo toropaneng e e golang kwa ntle ga meepo ya ditaemane ya Kimberley. Galeshewe — e nngwe ya matoropana a bogologolo mo Aforika Borwa — e bone bothata, go gogiwa batho le kganetso; mo tsotlhe seo parose e tsamile e le botshabelo jo bo tshepagetseng: kereke ya majwe le mosaik kwa dikokomana di neng di tla go kolobetsiwa, go nyalelwa, go lapadiwa le go romelwa kwa gape.",
    p2: "Mo dingwageng di le lesome, parose e godisitse dikhorale le barutisi ba katekisimo, batlankedi ba baltafora le disodality. E rutile bana mathamiko a bona, e eme le malapa fa ba latlhegile le fa ba keteka, mme e bolokile dikoro tsa yone di butsitseng le mo dingwageng tse di thatafetseng tsa hisitori ya naga. Bontsi jwa ba eteletseng pele mo paroseng gompieno, pele e ne e direla mo baltaforeng ya yone e le bana — tumelo e fediwa pele, kokomana go ya go kokomana, ka tsela e e neng e fedisiwa mo go rona ka yona.",
    quote:
      "“Keteka dingwaga di le lekgolo tsa Bokgoni, Boikanyego, Nonofa, le Go Thelela Setšhaba.”",
    quoteAttr: "Mafoko a parose ka boyone, ngwaga wa moletlo wa lekgolo wa 2025",
    p3: "Ka 08 Sedimonthole 2025 parose e ketekile moletlo wa yone wa lekgolo ka Misa ya Tebogo — Galeshewe yotlhe e kopane mmogo mo kgorong e le nngwe, ka dihemete le mefala ya purple le gauta. Le dibotlholo tsa metsi tse di neng di abetswe setshabeng di ne di rwala leswao la parose: moitshepile yo o kobamang go tshegofatsa bana ba le babedi, o thaliwa ke mola o le mongwe wa buluu. Mola woo, go tloga kwa tshimologong, e ne e le kgang yotlhe.",
    p4: "Gompieno St Boniface e lebeletse kwa sekheteng sa bobedi sa dingwaga ka boikanyego jo bo ntseng jalo go tloga kwa tshimologong: dikoro di butsitswe, mosaik e phatsimang mo godimo ga baltafora, le kamogelo e kholo jaaka dikou tsa Keresete tse thaliweng teng.",
    timeline: [
      {
        year: "1925",
        title: "Misione e jalwa",
        body: "Mo toropaneng e e golang kwa ntle ga ditaemane tsa Kimberley, setšhaba sa Bakatoliki se kopana ka fa tlase ga ga St Boniface jaaka mmoledi wa sona.",
      },
      {
        year: "1925 – 2025",
        title: "Tumelo e fediwa pele",
        body: "Ka dikgato tsotlhe tsa sekete sa dingwaga — dikolobetso, dikopano tsa ntlha, dinyalano, diofela, dikhorale le disodality — tumelo e fediwa go tswa mo batsading go ya go bana, mme parose e nna gae la bobedi.",
      },
      {
        year: "08 Sedimonthole 2025",
        title: "Moletlo wa lekgolo",
        body: "Misa ya Tebogo e kgobokanyetsa Galeshewe yotlhe go keteka dingwaga di le lekgolo tsa bokgoni, boikanyego, nonofa le go thelela setšhaba.",
      },
    ],
    cap1: "Misa ya Tebogo ya Moletlo wa Lekgolo · Sedimonthole 2025",
    cap2: "Dibotlholo tsa segopotso sa moletlo wa lekgolo, 1925–2025",
    cap3: "Leswao la parose",
    altLector:
      "Mokeresete a apere hemete ya moletlo wa lekgolo wa St Boniface a rwala Buka ya Ewangeli",
    altBottles:
      "Dibotlholo tsa metsi tsa segopotso sa moletlo wa lekgolo tse di rwalang leswao la parose le tshedimosetso ya tshwaragano",
    altEmblem:
      "Leswao la parose mo bokgubeng: St Boniface a tshegofatsa bana ba le babedi, o thaliwa ke mola o le mongwe wa buluu",
  },
  patron: {
    eyebrow: "Mmoledi wa rona",
    title: "St Boniface, bishop yo o bolailweng ka ntlha ya tumelo",
    p1a: "A belegwe e le Wynfrith kwa Devon, Engelane, go ka nna ka ngwaga wa 675, Boniface o tlogetse tsotlhe go ya go begela Pego e e Tumelwang mo gare ga merafe ya Jeremane. E le mmonki wa Benedictine, bishop le morutabara, o itsege e le ",
    p1em: "Moromuwa wa Bageremane",
    p1b: " — mme ka bosigo jwa kwa Fritzlar, a nna fela ka sekepe, a kgaola setlhare sa bodumedi sa Thor mme a aga kerekana ka logong la sona.",
    p2: "O tlhokofetse ka ntlha ya tumelo kwa Dokkum ka 754, mme Kereke e mo tlotla ka 5 Seetebosigo. Mongwe le mongwe wa Bakatoliki ba parose e o jitlhela a amogela sekao sa gagwe: tumelo e e jalilweng ka botono, e e ka kgaolang ditlhare tse dikgolo, mme e lena botlhoko go kobama go tshegofatsa bana. Ke ka moo leswao la rona le bontshang bishop a kobama go ya kwa go baneng ba ba potlana — ba ba nonofileng ba sireletsa, ba bannyane ba amogelwa.",
    facts: [
      { when: "go ka nna 675", what: "A belegwe e le Wynfrith, kwa Devon, Engelane" },
      { when: "716", what: "O tlogela Engelane a ya go begela merafe ya Jeremane" },
      { when: "754", what: "O tlhokofa ka ntlha ya tumelo kwa Dokkum, Frisia" },
      { when: "5 Seetebosigo", what: "Letsatsi la moletlo wa gagwe — mmoledi wa Jeremane" },
    ],
  },
  mosaic: {
    quote:
      "“Tlang mo go nna, lotallele ba berekang ka natla ba tsere dikgobo, mme ke tla neelang boikhutso.”",
    caption: "Mosaik e e mo godimo ga baltafora ya rona · Mateo 11:28",
    alt: "Mosaik ya Keresete a atasoloditse dikou le Mmabatho mo godimo ga baltafora ya St Boniface",
  },
  worship: {
    eyebrow: "Tla rapeleng le rona",
    title: "Nako tsa Misa le sakramente",
    intro:
      "Bogare jwa botshelo jwa rona jwa mmogo ke baltafora. Be ya gago e sale e le efe, go na le tulo e e lokaditsweng go lona tafoleng ya Morena.",
    weekTitle: "Be kwa St Boniface",
    massTimes: [
      { day: "Tshipi", detail: "Misa ka 08:00 le 10:00", note: "Be ya Morena" },
      { day: "Mosupologo", detail: "Tirelo ya Kopano ka 09:00", note: "Tshimologo ya be" },
      { day: "Labobedi – Labotlhano", detail: "Misa ka 09:00", note: "Eukaristi ya matsatsi a be" },
      { day: "Lamatlhatso", detail: "Misa ya bosigo ka 17:30", note: "Pele ga Be" },
      { day: "Boitshwarelo", detail: "Lamatlhatso 16:30–17:15, kgotsa ka beekanyo", note: "Sakramente ya Boitshwarelo" },
    ],
    scheduleNote:
      "Nako di ka fetoga ka matsatsi a moletlo le a phomolo a setšhaba — ka kopa o netefatse le ofising ya parose.",
    amboCaption: "Lefoko le begelwa kwa ambo ya Chi-Rho",
    verse: "“Lefoko la gago ke sebati sa magaolo a me, le lesedi la tsela ya me.”",
    amboAlt:
      "Lefoko le begelwa kwa ambo ya Chi-Rho, batlankedi ba baltafora ba eme fa pe ga yona",
    sacEyebrow: "Sakramente",
    sacTitle: "Keresete a kopana le rona mo maemong otlhe a botshelo",
    sacraments: [
      {
        title: "Kolobetso",
        body: "Kgoro ya botshelo jwa Sekeresete. Ipaaetso ya batsadi le ba ba tla emang bana fa pele ga Kereke e rulaganyiwa ka ofising ya parose.",
      },
      {
        title: "Eukaristi e e Boitshepo",
        body: "Dithuto tsa Kopano ya Ntlha tsa bana di tsamaya ngwaga le ngwaga ka mananeo a rona a katekisimo.",
      },
      {
        title: "Tlhomo",
        body: "Leswao la Moya o o Boitshepo, le abiwang bacha ba parose morago ga nako ya go ithutela.",
      },
      {
        title: "Lenyalo",
        body: "Banyalani ba tshwanetse go simolola go rulaganya kwa ofising ya parose bonya dikgwedi di le thatharo pele ga lenyalo.",
      },
      {
        title: "Boitshwarelo",
        body: "Boitshwarelo bo utlwiwa masigo a Lamatlhatso pele ga Misa ya bosigo, kgotsa nako nngwe le nngwe ka beekanyo.",
      },
      {
        title: "Fulafo ya ba ba lwetsweng",
        body: "Go bagolo le ba ba lwetsweng. Ka kopa o bitse ofisi gore moruti a kgone go isa sakramente kwa gae.",
      },
    ],
    sacNote:
      "Go rulaganya sakramente epe fela, ka kopa o ikopanye le ofisi ya parose. Go ba ba lwetsweng le ba ba sa kgoneng go tswa kwa gae, moruti o tla etela ka boitumelo.",
  },
  centenary: {
    eyebrow: "08 Sedimonthole 2025 · Sekete sa dingwaga sa mosa",
    title: "Dingwaga di le lekgolo. Misa e le nngwe ya tebogo.",
    p1: "Ngwaga wa parose wa lekgolo o wela mo gare ga Jubilee ya Kereke — ngwaga wa tshepho. Ka 08 Sedimonthole 2025, St Boniface e kopane ka tsela e le nngwe fela e e neng e kopane ka yona dingwaga di le lekgolo: kwa baltaforeng. Mosaik e phatsimetse, khoralo e neetse tsotlhe, mme batlankedi ba baltafora ba eme ka mela ya bosweu mo santuareng.",
    p2: "Bakriste ba apere mebala ya moletlo wa lekgolo ya purple le gauta; leswao la moitshepile yo o tshegofatsang le ne le mo dihemeteng, mo mefaleng, le mo dibotlholong tsa metsi tse di neng di abetswe setshabeng. E ne e le, ka boammaaruri, moletlo wa lelapa — bogogo ba kolobeditsweng fano, ba eme fa pe ga masea a letang kolobetso e le nngwe.",
    words: ["Bokgoni", "Boikanyego", "Nonofa", "Setšhaba"],
    wordsNote:
      "Mafoko a mane a parose e a kgethileng a ngwaga wa yone wa lekgolo — mme ke tlhaloso e e tshwanetseng ya lekgolo le le latelang, fa Morena a ka a fa paka.",
    posterCaption: "Sekaba sa porogamo ya moletlo wa lekgolo · 1925–2025",
    posterAlt:
      "Sekaba sa moletlo wa lekgolo wa St Boniface — ngwaga wa bo lekgolo, 08 Sedimonthole 2025, ka purple le gauta",
  },
  community: {
    eyebrow: "Botshelo jwa parose",
    title: "Parose ya diatla di le mantsi",
    intro:
      "Misa ke methombo le bogodimo jwa tsotlhe se re se dirang — mme fa pe ga baltafora, parose e phapha ka tirelo ya diatla di le mantsi. Go na le tulo e e letang diatla tsa gago.",
    ministries: [
      {
        title: "Batlankedi ba Baltafora",
        body: "Bacha ba ba rwalang khalaboro le dikherese — setso se se ratilweng thata sa parose, le se se itumedisang thata ka Tshipi.",
      },
      {
        title: "Khoralo le Baopedi",
        body: "Khoralo e eteletsa pele kopelo ya setšhaba. Tla ka lentswe, ka sebedi, kgotsa ka fela lorato la go opela.",
      },
      {
        title: "Katekisimo",
        body: "Go tswa mo dithutong tsa ntlha go fitlha kwa Tlhomong, dikokomana tsa bana ba Galeshewe di rutegile tumelo mo dikamorong tse.",
      },
      {
        title: "Disodality le Ditlhopha",
        body: "Disodality tsa borre le tsa basadi di isa mathamiko le tirelo ya parose kwa ntle ga Tshipi, ka diaparo tsa sodality le go etela ba ba lwetsweng.",
      },
      {
        title: "Bacha",
        body: "Bakatoliki ba bacha ba bonang botshwaragane, thuto le lefelo la go nna mo gare ga matshipi a mabedi.",
      },
      {
        title: "Go Thelela Setšhaba",
        body: "Go tloga fa go latlhegile go fitlha kwa thobong, parose e eme le malapa mo dinakong tse di thata — ka boikuelo, e se na go bala.",
      },
    ],
    note: "Ditlhopha di kopana ka matsatsi a be; dinako tsa dikopano di rulaganywa ka ofisi ya parose. Maloko a masha a amogelwa ka metlha.",
  },
  gallery: {
    eyebrow: "Metsotso",
    title: "Parose ka ditshwantsho",
    intro:
      "Ditshwantsho go tswa mo botshelong jwa St Boniface — bontsi jwa tsone ke tsa Misa ya Tebogo ya moletlo wa lekgolo ka 08 Sedimonthole 2025.",
    items: [
      {
        caption: "Misa ya Tshipi fa pe ga mosaik ya Keresete a le ka tlotlo",
        alt: "Misa ya Tshipi kwa St Boniface, e ketekwa ka fa tlase ga mosaik ya Keresete a le ka tlotlo",
      },
      {
        caption: "Go begela Lefoko kwa ambo ya Chi-Rho",
        alt: "Lefoko la Modimo le begelwa kwa ambo ya Chi-Rho, batlankedi ba baltafora ba eme fa pe ga yona",
      },
      {
        caption: "Batlankedi ba baltafora ngwageng wa moletlo wa lekgolo",
        alt: "Batlankedi ba le bane ba baltafora ka diaparo tsa bosweu tse di rwalang leswao la Mmabatho",
      },
      {
        caption: "Sodality ya borre ka Tshipi ya moletlo wa lekgolo",
        alt: "Sodality ya borre ka ditai tsa seboholo ba eme fa pe ga mosaik ya Keresete",
      },
      {
        caption: "Go rwala Buka — le hemete ya moletlo wa lekgolo le yona",
        alt: "Mobadi a apere hemete ya moletlo wa lekgolo a rwala Buka ya Ewangeli",
      },
      {
        caption: "Dibotlholo tsa segopotso — le metsi a rwala leswao",
        alt: "Dibotlholo tsa metsi tsa segopotso sa moletlo wa lekgolo tse di rwalang leswao la parose",
      },
    ],
    viewPhotoAria: "Bona seswantsho",
    lightboxLabel: "Moboni wa ditshwantsho",
    closeLabel: "Tswala moboni wa ditshwantsho",
    prevLabel: "Seswantsho se se fetileng",
    nextLabel: "Seswantsho se se latelang",
  },
  visit: {
    eyebrow: "Fa re leng teng",
    title: "Tla o bone.",
    intro:
      "Parose e bonwa motlhofo mo gare ga Galeshewe. Bitsa ofisi, kwalela rona, kgotsa fela tsene ka kgoro ka Tshipi — kamogelo e ya tshwana ka bobedi jwa tsone.",
    officeLabel: "Ofisi ya parose",
    emailLabel: "Imeile",
    hoursLabel: "Nako tsa ofisi",
    directionsBtn: "Bona ditsela",
    emailBtn: "Kwalela parose",
    sundayEyebrow: "Ka Tshipi e",
    sundayMassA: "Misa ka 08:00",
    sundayMassB: "10:00",
    parkingNote:
      "Lebala la dikoloi le mo lefelong la kereke — goroga metsotso e le mabedi pele o bo o itshwarele.",
    dioceseLine: "Parose ya Dioseisi ya Katoliki ya Roma ya Kimberley",
    leaderLine: "Ka taolo ya",
    priestLabel: "Moruti wa parose:",
    quote: "“Ke ne ke le moeng, mme lona lo n amogela.”",
  },
  footer: {
    blurb:
      "Sekete sa dingwaga tsa mosa — mme sekete sa bobedi se simolotse. Sepe se se tla isang kwa Galeshewe, o tla fitlhela setulo se se bolokilweng le mokherese o o tshetsweng.",
    explore: "Ithute ka rona",
    contact: "Ikgolaganya le rona",
    links: [
      { href: "#story", label: "Kgang ya rona" },
      { href: "#worship", label: "Nako tsa Misa le sakramente" },
      { href: "#centenary", label: "Moletlo wa lekgolo" },
      { href: "#community", label: "Botshelo jwa parose" },
      { href: "#gallery", label: "Ditshwantsho" },
      { href: "#visit", label: "Fa re leng teng" },
    ],
    copyrightSuffix: "Parose ya Dioseisi ya Katoliki ya Roma ya Kimberley.",
    tagline: "1925 – 2025 · Sekete sa dingwaga tsa mosa",
    credit: "Webosaete ya demo e agilwe ke",
  },
};

/* ─── Afrikaans ────────────────────────────────────────────── */

const af: Dict = {
  meta: {
    htmlLang: "af",
    switchLabel: "Verander taal",
  },
  nav: {
    links: [
      { href: "#story", label: "Ons Verhaal" },
      { href: "#worship", label: "Aanbidding" },
      { href: "#centenary", label: "Eeufees" },
      { href: "#community", label: "Gemeentelewe" },
      { href: "#gallery", label: "Fotogalery" },
      { href: "#visit", label: "Vind Ons" },
    ],
    join: "Kom vier Mis met ons",
    subtitle: "Katolieke Kerk · Galeshewe",
    openMenu: "Maak spyskaart oop",
    closeMenu: "Maak spyskaart toe",
    menuLabel: "Spyskaart",
    navLabel: "Primêr",
    welcomeNote: "Almal is welkom",
  },
  hero: {
    eyebrow: "Katolieke Kerk St Boniface · Gestig in 1925",
    titleA: "Honderd jaar van",
    titleEm: "genade",
    titleB: "in Galeshewe.",
    body: "In die historiese strate van Kimberley se oudste township het ’n gemeente vir ’n eeu lank in die geloof volgehou — deur stryd en viering heen, altyd met oop deure en oop arms.",
    ctaMass: "Kom vier Mis met ons",
    ctaStory: "Lees ons verhaal",
    stripTime: "Sondae · Mis om 08:00 & 10:00",
    stripWelcome: "Almal is welkom",
    alt: "Sondagmis by St Boniface, Galeshewe, onder die mosaiek van Christus met uitgestrekte arms",
  },
  welcome: {
    eyebrow: "Dumelang · ’n Hartlike welkom",
    title: "Welkom tuis.",
    body: "Of dit u eerste besoek is, of u gesin al vir vier geslagte hier gekniel het — u hoort hier. St Boniface is ’n lewende gemeente: ’n plek waar die Woord verkondig word, die sakramente gevier word, en niemand as ’n vreemdeling deur die deur stap nie.",
    facts: [
      {
        figure: "1925",
        label: "Gestig",
        body: "Die jaar toe die gemeente geplant is — toe mense nog die diamantstormloop onthou het wat Kimberley gebou het.",
      },
      {
        figure: "100",
        label: "Jaar van geloof",
        body: "’n Eeu van aanbidding, deursettingsvermoë en diens in die hart van Galeshewe.",
      },
      {
        figure: "08.12.25",
        label: "Die eeufees",
        body: "’n Dankseggingsmis deur die hele gemeenskap gevier, honderd jaar tot op die dag.",
      },
    ],
  },
  story: {
    eyebrow: "Ons verhaal",
    title: "’n Geloof wat diep geplant is en al ’n eeu lank groei.",
    p1: "St Boniface is in 1925 gestig, in die township wat langs Kimberley se diamantmyne ontstaan het. Galeshewe — een van die oudste townships in Suid-Afrika — het ontbering, verskuiwings en verset geken; deur dit alles was die gemeente ’n vaste punt: ’n heiligdom van klip en mosaiek waar geslagte gedoop, getrou, gerou en weer uitgestuur is.",
    p2: "Oor tien dekades het die gemeente kore, kategete, misdienaars en sodaliteite grootgemaak. Dit het kinders hul gebede geleer, saam met gesinne gestaan in rou en in viering, en sy deure oopgehou deur die swaarste jare van die land se geskiedenis. Baie wat die gemeente vandag lei, het as kinders eerste by sy altare gedien — die geloof oorhandig, van geslag tot geslag, presies soos dit aan ons oorhandig is.",
    quote:
      "“Vier 100 jaar van uitnemendheid, deursettingsvermoë, sterkte en gemeenskapsdiens.”",
    quoteAttr: "Die gemeente se eie woorde, eeufeesjaar 2025",
    p3: "Op 8 Desember 2025 het die gemeente sy eeufees gevier met ’n Dankseggingsmis — die hele Galeshewe het onder een dak vergader, in hempies en baniers van pers en goud. Selfs die bottels water wat vir die skare uitgesit is, het die gemeente se embleem gedra: ’n heilige wat buk om twee kinders te seën, getrek in ’n enkele blou lyn. Daardie lyn was nog altyd die hele storie.",
    p4: "Vandag kyk St Boniface uit na sy tweede eeu met dieselfde stille vertroue as altyd: die deure staan oop, die mosaieke gloei bo die altaar, en die welkom is so wyd soos die arms van Christus wat daar uitgebeeld word.",
    timeline: [
      {
        year: "1925",
        title: "’n Sendinggemeente word geplant",
        body: "In die township wat langs Kimberley se diamantdorpies groei, kom ’n Katolieke gemeenskap bymekaar onder die beskerming van St Boniface as beskermheilige.",
      },
      {
        year: "1925 – 2025",
        title: "Geloof oorgedra",
        body: "Deur elke seisoen van die eeu — doop, eerste communies, troues, begrafnisse, kore en sodaliteite — word die geloof van ouers na kinders oorgedra, en die gemeente word ’n tweede tuiste.",
      },
      {
        year: "8 Des 2025",
        title: "Die eeufees",
        body: "’n Dankseggingsmis bring die hele Galeshewe bymekaar om honderd jaar van uitnemendheid, deursettingsvermoë, sterkte en gemeenskapsdiens te vier.",
      },
    ],
    cap1: "Dankseggingsmis van die eeufees · Desember 2025",
    cap2: "Eeufees-aandenkings, 1925–2025",
    cap3: "Die gemeente se embleem",
    altLector:
      "’n Gemeentelid in die St Boniface-eeufeeshempie wat die Boek van die Evangelies dra",
    altBottles:
      "Gedenkbottels water met die gemeente se embleem, adres en kontakbesonderhede",
    altEmblem:
      "Die gemeente se embleem op oker: St Boniface wat twee kinders seën, getrek in ’n enkele blou lyn",
  },
  patron: {
    eyebrow: "Ons beskermheilige",
    title: "St Boniface, biskop en martelaar",
    p1a: "Gebore as Wynfrith in Devon omstreeks 675, het Boniface alles agtergelaat om die Evangelie onder die Germaanse volke te verkondig. As Benediktynse monnik, biskop en hervormer het hy bekend gestaan as die ",
    p1em: "Apostel van die Duitsers",
    p1b: " — en vir die nag by Fritzlar toe hy, gewapen net met ’n byl, Thor se heilige eik geveld en ’n kapelletjie uit die hout gebou het.",
    p2: "Hy is in 754 as martelaar by Dokkum dood, en die Kerk vereer hom op 5 Junie. Elke Katoliek van hierdie gemeente erf sy voorbeeld: ’n geloof wat diep geplant is om reuse te vel, en nederig genoeg om te buk en kinders te seën. Dit is hoekom ons embleem die biskop toon wat buig na die kleinstes — die sterktes wat beskerm, die kleintjies wat verwelkom word.",
    facts: [
      { when: "ca. 675", what: "Gebore as Wynfrith in Devon, Engeland" },
      { when: "716", what: "Verlaat Engeland as sendeling na die Germaanse volke" },
      { when: "754", what: "As martelaar dood by Dokkum, Frisie" },
      { when: "5 Junie", what: "Feesdag — beskermheilige van Duitsland" },
    ],
  },
  mosaic: {
    quote:
      "“Kom na My toe, julle wat uitgeput is en swaar lankas dra, en Ek sal vir julle rus gee.”",
    caption: "Die mosaieke bo ons altaar · Matteüs 11:28",
    alt: "Die mosaiek van Christus met uitgestrekte arms en Ons Liewe Vrou bo die altaar van St Boniface",
  },
  worship: {
    eyebrow: "Kom aanbid saam met ons",
    title: "Mistye en sakramente",
    intro:
      "Die middelpunt van ons lewe saam is die altaar. Wat vir week u ook al gehad het, daar is ’n plek vir u aan die Here se tafel gedek.",
    weekTitle: "Die week by St Boniface",
    massTimes: [
      { day: "Sondag", detail: "Mis om 08:00 & 10:00", note: "Die Here se dag" },
      { day: "Maandag", detail: "Kommuniediens om 09:00", note: "Die begin van die week" },
      { day: "Dinsdag – Vrydag", detail: "Mis om 09:00", note: "Eucharistie deur die week" },
      { day: "Saterdag", detail: "Vigielmis om 17:30", note: "Vooruitskouing van Sondag" },
      { day: "Belydenis", detail: "Saterdag 16:30–17:15, of per afspraak", note: "Versoening" },
    ],
    scheduleNote:
      "Tye kan verander op feesdae en openbare vakansiedae — bevestig asseblief by die gemeentekantoor.",
    amboCaption: "Die Woord verkondig aan die lezenaar van die Chi-Rho",
    verse: "“U woord is ’n lamp vir my voet en lig op my pad.”",
    amboAlt:
      "Die Woord verkondig aan die lezenaar van die Chi-Rho, met misdienaars langsaan",
    sacEyebrow: "Die sakramente",
    sacTitle: "Christus wat ons op elke stadium van die lewe ontmoet",
    sacraments: [
      {
        title: "Doop",
        body: "Die deur van die Christelike lewe. Voorbereiding vir ouers en peetouers word deur die gemeentekantoor gereël.",
      },
      {
        title: "Heilige Eucharistie",
        body: "Eerste Communieklasse vir kinders loop elke jaar deur ons katkisasieprogram.",
      },
      {
        title: "Vormsel",
        body: "Die seël van die Heilige Gees, opgedra aan die jongmense van die gemeente na ’n tyd van vorming.",
      },
      {
        title: "Huwelik",
        body: "Paartjies moet minstens ses maande voor die troue reëlings by die gemeentekantoor begin.",
      },
      {
        title: "Versoening",
        body: "Belydenisse word Saterdagemiddag voor die vigielmis gehoor, of enige tyd per afspraak.",
      },
      {
        title: "Salwing van die siekes",
        body: "Vir bejaardes en siekes. Skakel die kantoor sodat ’n priester die sakrament na die huis kan bring.",
      },
    ],
    sacNote:
      "Om enige van die sakramente te reël, kontak asseblief die gemeentekantoor. Vir siekes en huisgebonde mense sal ’n priester graag ’n besoek aflê.",
  },
  centenary: {
    eyebrow: "8 Desember 2025 · ’n Eeu van genade",
    title: "Honderd jaar. Een dankseggingsmis.",
    p1: "Die gemeente se honderdste jaar het binne die Kerk se Jubileum geval — ’n jaar van hoop. Op 8 Desember 2025 het St Boniface presies so vergader soos dit ’n honderd jaar lank gedoen het: by die altaar. Die mosaieke het geblink, die koor het alles gegee, en die misdienaars het in rye wit in die altaarruimte gestaan.",
    p2: "Gemeentelede het die eeufeeskleure van pers en goud gedra; die embleem van die seënende heilige was op hempies, op baniers, selfs op bottels water vir die skare uitgesit. Dit was, in die ware sin van die woord, ’n gesinsgeleentheid — grootouers wat hier gedoop is, langs babatjies wat vir dieselfde sakrament gewag het.",
    words: ["Uitnemendheid", "Deursettingsvermoë", "Sterkte", "Gemeenskap"],
    wordsNote:
      "Die vier woorde wat die gemeente vir sy honderdste jaar gekies het — en ’n billike beskrywing van die volgende honderd, as die Here hulle verleen.",
    posterCaption: "Voorblad van die eeufeesprogram · 1925–2025",
    posterAlt:
      "St Boniface-eeufeesplakkaat — 100ste herdenkingsjaar, 08 Desember 2025, in pers en goud",
  },
  community: {
    eyebrow: "Gemeentelewe",
    title: "’n Gemeente van baie hande",
    intro:
      "Die Mis is die bron en hoogtepunt van alles wat ons doen — en om die altaar is die gemeente vol bedrywige hande. Daar is ’n plek vir joune.",
    ministries: [
      {
        title: "Misdienaars",
        body: "Die jongmense wat die kruis en die kersies dra — ’n geliefde tradisie van die gemeente, en sy trotsste gesig op ’n Sondag.",
      },
      {
        title: "Koor en musikante",
        body: "Die koor lei die sang van die gemeente. Bring ’n stem, ’n instrument, of bloot ’n liefde vir sang.",
      },
      {
        title: "Katkisasie",
        body: "Van die eerste lesse tot die vormsel — geslagte van Galeshewe se kinders het die geloof in hierdie klaskamers geleer.",
      },
      {
        title: "Sodaliteite en gildes",
        body: "Die mans- en vrouesodaliteite dra die gemeente se gebed en diens buite die Sondag om, in uniform en in besoeke aan siekes.",
      },
      {
        title: "Jeug",
        body: "Jong Katolieke wat vriendskap, vorming en ’n plek om te behoort tussen twee Sondae vind.",
      },
      {
        title: "Buitediens",
        body: "Van rou tot oes, staan die gemeente saam met gesinne in swaar seisoene — stil, en sonder om te tel.",
      },
    ],
    note: "Groepe kom deur die week bymekaar; vergadertye word deur die gemeentekantoor gereël. Nuwe lede is altyd welkom.",
  },
  gallery: {
    eyebrow: "Oomblikke",
    title: "Die gemeente in prente",
    intro:
      "Foto’s uit die lewe van St Boniface — die meeste daarvan van die eeufees-Dankseggingsmis op 8 Desember 2025.",
    items: [
      {
        caption: "Sondagmis voor die mosaiek van Christus in heerlikheid",
        alt: "Sondagmis by St Boniface, gevier onder die mosaiek van Christus in heerlikheid",
      },
      {
        caption: "Die Woord verkondig aan die lezenaar van die Chi-Rho",
        alt: "Die Woord van God verkondig aan die lezenaar van die Chi-Rho, met misdienaars weerskante",
      },
      {
        caption: "Dienaars van die altaar in die eeufeesjaar",
        alt: "Vier dienaars van die altaar in wit kerkgewade met Maria-embleme",
      },
      {
        caption: "Die manssodaliteit op hul eeufees-Sondag",
        alt: "Die manssodaliteit met rooi dasse voor die mosaiek van Christus",
      },
      {
        caption: "Die Boek dra — eeufeeshempie en alles",
        alt: "’n Lector in die eeufeeshemp wat die Boek van die Evangelies dra",
      },
      {
        caption: "Eeufees-aandenkings — selfs die water het die embleem gedra",
        alt: "Gedenkbottels water met die gemeente se embleem",
      },
    ],
    viewPhotoAria: "Sien foto",
    lightboxLabel: "Fotokyker",
    closeLabel: "Sluit fotokyker",
    prevLabel: "Vorige foto",
    nextLabel: "Volgende foto",
  },
  visit: {
    eyebrow: "Vind ons",
    title: "Kom en sien.",
    intro:
      "Die gemeente is maklik om te vind, reg in die hart van Galeshewe. Skakel die kantoor, skryf vir ons, of stap bloot Sondag deur die deur — die welkom is albei pad net so warm.",
    officeLabel: "Gemeentekantoor",
    emailLabel: "E-pos",
    hoursLabel: "Kantoorure",
    directionsBtn: "Kry aanwysings",
    emailBtn: "E-pos die gemeente",
    sundayEyebrow: "Hierdie Sondag",
    sundayMassA: "Mis om 08:00",
    sundayMassB: "10:00",
    parkingNote:
      "Parkering op die terrein — kom ’n paar minute vroeg en raak tuis.",
    dioceseLine: "’n Gemeente van die Rooms-Katolieke Bisdom van Kimberley",
    leaderLine: "Onder leiding van",
    priestLabel: "Gemeentepriester:",
    quote: "“Ek was ’n vreemdeling en julle het My verwelkom.”",
  },
  footer: {
    blurb:
      "’n Honderd jaar van genade — en ’n tweede eeu het begin. Wat u ook al na Galeshewe bring, u sal ’n stoel ingeruim en ’n kers aangesteek vind.",
    explore: "Verken",
    contact: "Kontak",
    links: [
      { href: "#story", label: "Ons verhaal" },
      { href: "#worship", label: "Mistye en sakramente" },
      { href: "#centenary", label: "Die eeufees" },
      { href: "#community", label: "Gemeentelewe" },
      { href: "#gallery", label: "Fotogalery" },
      { href: "#visit", label: "Vind ons" },
    ],
    copyrightSuffix: "’n Gemeente van die Rooms-Katolieke Bisdom van Kimberley.",
    tagline: "1925 – 2025 · ’n Honderd jaar van genade",
    credit: "Demo-webwerf gebou deur",
  },
};

export const T: Record<Lang, Dict> = { en, tn, af };
