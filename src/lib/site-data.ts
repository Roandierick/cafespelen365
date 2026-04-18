export type Product = {
  slug: string;
  name: string;
  shortDescription: string;
  detailedDescription: string;
  idealFor: string;
  idealUseCases: string[];
  highlight: string;
  gradient: string;
  imageUrl: string;
  imageAlt: string;
};

export const siteConfig = {
  name: "Caféspelen 365",
  shortName: "Caféspelen 365",
  domain: "https://www.cafespelen365.be",
  email: "dierick.roan@gmail.com",
  phone: "+32 (0)9 000 00 00",
  kbo: "1027.147.747",
  enterpriseNumber: "1027.147.747",
  vatNumber: "BE1027.147.747",
  address: ["Adres op aanvraag", "9000 Gent, Vlaanderen"],
  tagline: "Topkwaliteit cafespelen huren of kopen in heel Vlaanderen",
  serviceArea: [
    "Antwerpen",
    "Oost-Vlaanderen",
    "West-Vlaanderen",
    "Vlaams-Brabant",
    "Limburg"
  ]
};

export const products: Product[] = [
  {
    slug: "boksmachine",
    name: "Boksbal / Boksmachine",
    shortDescription:
      "Een boksmachine trekt meteen aandacht en zorgt voor competitie aan de toog of op het eventplein. Ideaal voor cafés, studentenevents en bedrijfsevents waar sfeer, uitdaging en doorloop belangrijk zijn.",
    detailedDescription:
      "Onze boksmachines combineren robuuste bouwkwaliteit met een opvallende presentatie die gasten spontaan laat deelnemen. Ze zijn perfect voor cafés die extra beleving willen creëren, maar ook voor events waar u een eyecatcher zoekt met hoge interactiewaarde. Wij leveren, plaatsen en stemmen de opstelling af op de beschikbare ruimte.",
    idealFor:
      "Perfect voor cafés met veel passage, feestzalen, tentfeesten en promotionele evenementen.",
    idealUseCases: ["Afterwork events", "Studentencafés", "Kermisconcepten"],
    highlight: "Publiekstrekker met hoge speelfrequentie",
    gradient: "from-amber-500 via-orange-500 to-red-700",
    imageUrl: "https://picsum.photos/seed/boxing/800/600",
    imageAlt: "boksmachine huren Vlaanderen"
  },
  {
    slug: "golfbiljart",
    name: "Golfbiljart",
    shortDescription:
      "Golfbiljart is een klassieker die generaties samenbrengt en tegelijk laagdrempelig blijft. Het spel past uitstekend in bruine cafés, feestzalen en verenigingslokalen waar gezelligheid primeert.",
    detailedDescription:
      "Met een golfbiljart haalt u een typisch Vlaams caféspel in huis dat meteen herkenbaar en uitnodigend is. Het spel vraagt weinig uitleg, neemt gasten snel mee en zorgt voor een ontspannen maar competitieve sfeer. Zowel voor permanente plaatsing als tijdelijk te huur is dit een sterke keuze voor horecazaken en evenementen.",
    idealFor:
      "Ideaal voor dorpscafés, feestzalen, clubs en locaties met een traditioneel publiek.",
    idealUseCases: ["Thema-avonden", "Familiefeesten", "Verenigingslokalen"],
    highlight: "Authentieke Vlaamse klassieker",
    gradient: "from-emerald-500 via-teal-500 to-forest",
    imageUrl: "https://picsum.photos/seed/billiards/800/600",
    imageAlt: "golfbiljart huren Vlaanderen"
  },
  {
    slug: "pooltafel",
    name: "Pooltafel / Biljarttafel",
    shortDescription:
      "Een pooltafel tilt de uitstraling van uw zaak meteen naar een hoger niveau en nodigt uit tot langer verblijf. Ideaal voor cafés, jeugdhuizen en eventlocaties die sfeer willen koppelen aan kwaliteit.",
    detailedDescription:
      "Onze pooltafels zijn geschikt voor zowel commerciële horeca-opstellingen als tijdelijke plaatsingen op events. Ze combineren een professionele look met sterk speelcomfort en vormen vaak het sociale middelpunt van de ruimte. Voor cafespelen te huur en te koop adviseren we het juiste formaat, afwerking en gebruikstype op maat van uw locatie.",
    idealFor:
      "Sterke keuze voor cafés, sportbars, jeugdhuizen en multifunctionele eventruimtes.",
    idealUseCases: ["Sportbars", "Bedrijfslounges", "Jeugdhuiswerking"],
    highlight: "Premium uitstraling met lange verblijfsduur",
    gradient: "from-sky-500 via-cyan-500 to-blue-800",
    imageUrl: "https://picsum.photos/seed/pool/800/600",
    imageAlt: "pooltafel huren Vlaanderen"
  },
  {
    slug: "flipperkast",
    name: "Flipperkast / Pinball",
    shortDescription:
      "Een flipperkast geeft uw zaak instant karakter en brengt nostalgie samen met spektakel. Gasten blijven kijken, proberen opnieuw en delen hun scores graag met vrienden of collega’s.",
    detailedDescription:
      "Voor cafés en evenementen is een flipperkast een stijlvolle blikvanger met een hoge entertainmentwaarde. We voorzien modellen met klassieke uitstraling of modernere thema’s, afhankelijk van de sfeer die u wilt neerzetten. Het resultaat is een opvallende machine die beleving toevoegt zonder extra personeel te vragen.",
    idealFor:
      "Uitstekend voor conceptcafés, retro-events, mancaves en belevingsruimtes.",
    idealUseCases: ["Retro parties", "Concepthoreca", "VIP-hoeken"],
    highlight: "Nostalgische eyecatcher met premium feel",
    gradient: "from-fuchsia-500 via-pink-500 to-rose-700",
    imageUrl: "https://picsum.photos/seed/pinball/800/600",
    imageAlt: "flipperkast huren Vlaanderen"
  },
  {
    slug: "tafelvoetbal",
    name: "Tafelvoetbal",
    shortDescription:
      "Tafelvoetbal is snel, competitief en ideaal om groepen spontaan in beweging te krijgen. Het is een bewezen publieksfavoriet voor cafés, kantoren, events en ontspanningsruimtes.",
    detailedDescription:
      "Een degelijke tafelvoetbaltafel zorgt voor constante interactie en werkt uitstekend als sociaal spel in horecazaken en op bedrijfsevents. Het spel is direct toegankelijk, vraagt weinig ruimte en lokt vaak extra rondes en langere bezoeken uit. Wij voorzien cafespelen te huur en te koop met focus op duurzaamheid, stabiliteit en speelplezier.",
    idealFor:
      "Ideaal voor cafés, jeugdhuizen, bedrijfsruimtes en events met groepsdynamiek.",
    idealUseCases: ["Afterwork toernooien", "Teambuildings", "Sportcafés"],
    highlight: "Toegankelijk, snel en altijd competitief",
    gradient: "from-lime-400 via-green-500 to-emerald-700",
    imageUrl: "https://picsum.photos/seed/foosball/800/600",
    imageAlt: "tafelvoetbal huren Vlaanderen"
  },
  {
    slug: "basketbalautomaat",
    name: "Basketbalautomaat",
    shortDescription:
      "Een basketbalautomaat brengt snelheid, geluid en competitie in elke ruimte. Ideaal voor events en horecazaken die een energieke activiteit willen aanbieden met hoge doorstroom.",
    detailedDescription:
      "Onze basketbalautomaten zijn echte sfeermakers voor bedrijfsfeesten, pop-up activaties en family entertainment zones. Ze werken sterk als attractie voor duo’s of groepen en trekken veel bekijks dankzij hun dynamiek. Voor tijdelijk te huur is dit een slimme keuze wanneer u beleving en zichtbaarheid wilt combineren.",
    idealFor:
      "Geschikt voor events, feestzalen, fanzones en locaties met een speels karakter.",
    idealUseCases: ["Bedrijfsevents", "Familiedagen", "Fanzones"],
    highlight: "Energieke attractie met veel zichtbaarheid",
    gradient: "from-orange-400 via-amber-500 to-yellow-600",
    imageUrl: "https://picsum.photos/seed/basketball/800/600",
    imageAlt: "basketbalautomaat huren Vlaanderen"
  },
  {
    slug: "darts",
    name: "Darts / Elektronisch Dartbord",
    shortDescription:
      "Darts blijft een klassieker voor cafés omdat het weinig plaats inneemt en toch veel herhaalspel oplevert. Met een elektronisch dartbord houdt u scores eenvoudig bij en verlaagt u de instap voor nieuwe spelers.",
    detailedDescription:
      "Of u nu een vaste speelhoek wilt uitbouwen of een tijdelijke activiteit zoekt voor een event, elektronische darts is een veilige en toegankelijke oplossing. Het combineert competitiviteit met overzicht en past perfect in horecazaken waar bezoekers graag even blijven hangen. We adviseren over plaatsing, wandbescherming en het meest geschikte type opstelling.",
    idealFor:
      "Zeer geschikt voor cafés, feestzalen, bedrijfslounges en recreatieruimtes.",
    idealUseCases: ["Dartavonden", "Afterwork corners", "Recreatiezones"],
    highlight: "Compacte klassieker met hoge herhaalwaarde",
    gradient: "from-slate-400 via-zinc-500 to-neutral-800",
    imageUrl: "https://picsum.photos/seed/darts/800/600",
    imageAlt: "darts huren Vlaanderen"
  },
  {
    slug: "airhockey",
    name: "Air Hockey Tafel",
    shortDescription:
      "Air hockey zorgt voor actie, snelheid en een moderne arcade-uitstraling. Het is ideaal voor events en horecalocaties die een visueel sterk en interactief spel zoeken.",
    detailedDescription:
      "Met air hockey kiest u voor een attractie die direct beweging in de ruimte brengt en spelers van alle leeftijden aanspreekt. Het spel is intuïtief, trekt omstaanders aan en werkt uitstekend als extra activatie in cafés en eventhallen. Onze tafels zijn stabiel, betrouwbaar en klaar voor intensief gebruik.",
    idealFor:
      "Uitstekend voor recreatiezones, eventhallen, family days en moderne cafés.",
    idealUseCases: ["Arcade corners", "Corporate events", "Family entertainment"],
    highlight: "Snelle actie met moderne uitstraling",
    gradient: "from-cyan-400 via-sky-500 to-indigo-700",
    imageUrl: "https://picsum.photos/seed/airhockey/800/600",
    imageAlt: "air hockey tafel huren Vlaanderen"
  },
  {
    slug: "hammerspel",
    name: "Hammerspel / High Striker",
    shortDescription:
      "Een hammerspel brengt instant fun en een kermissfeer naar uw event of horecaconcept. De combinatie van krachtmeting en spektakel zorgt voor veel aandacht en veel foto’s.",
    detailedDescription:
      "Het high striker-concept is ideaal voor activaties waar u letterlijk impact wilt maken. Gasten worden uitgedaagd, supporters verzamelen zich errond en het spel levert een zichtbaar hoog amusementsgehalte op. Vooral bij openluchtfeesten, bedrijfsdagen en tijdelijke events is dit een sterke publiekstrekker.",
    idealFor:
      "Perfect voor festivals, tentfeesten, bedrijfsdagen en outdoor events.",
    idealUseCases: ["Kermisstands", "Openluchtfeesten", "Brand activations"],
    highlight: "Kermisgevoel met sterke fotowaarde",
    gradient: "from-red-500 via-orange-500 to-yellow-500",
    imageUrl: "https://picsum.photos/seed/hammer/800/600",
    imageAlt: "hammerspel huren Vlaanderen"
  },
  {
    slug: "arcade-games",
    name: "Arcade Games",
    shortDescription:
      "Retro en moderne arcade games voegen beleving, kleur en entertainment toe aan elke locatie. Ze werken uitstekend als sfeermakers in horecazaken en als activatie op events waar gasten verschillende spellen willen ontdekken.",
    detailedDescription:
      "Van klassieke arcadekasten tot moderne multiplayer-opstellingen: arcade games creëren een unieke mix van nostalgie en hedendaags amusement. Ze zijn geschikt voor losse plaatsing of als complete arcadehoek binnen een evenement of zaak. We helpen u bij de juiste mix op basis van ruimte, doelgroep en gewenste uitstraling.",
    idealFor:
      "Ideaal voor conceptbars, eventcorners, recreatieruimtes en pop-up belevingen.",
    idealUseCases: ["Retro nights", "Game corners", "Beurzen en activaties"],
    highlight: "Veel variatie en opvallende beleving",
    gradient: "from-violet-500 via-indigo-500 to-blue-700",
    imageUrl: "https://picsum.photos/seed/arcade/800/600",
    imageAlt: "arcade games huren Vlaanderen"
  },
  {
    slug: "gezelschapsspelen",
    name: "Gezelschapsspelen XL",
    shortDescription:
      "Grote versies van Jenga, Kubb en andere gezelschapsspelen zorgen voor luchtige interactie en werken bijzonder goed in open opstellingen. Ze zijn laagdrempelig, mobiel en ideaal voor gemengd publiek.",
    detailedDescription:
      "XL-gezelschapsspelen zijn een slimme keuze wanneer u flexibiliteit en toegankelijkheid belangrijk vindt. Ze vragen weinig technische voorbereiding, passen in binnen- en buitenopstellingen en laten gasten spontaan deelnemen zonder drempel. Voor recepties, familiedagen en terrasconcepten zijn ze bijzonder waardevol.",
    idealFor:
      "Sterk voor terrassen, tuinfeesten, recepties en bedrijfsevents met veel circulatie.",
    idealUseCases: ["Recepties", "Terrasactivaties", "Familiedagen"],
    highlight: "Flexibel, mobiel en laagdrempelig",
    gradient: "from-yellow-400 via-lime-400 to-green-500",
    imageUrl: "https://picsum.photos/seed/boardgames/800/600",
    imageAlt: "gezelschapsspelen huren Vlaanderen"
  },
  {
    slug: "ping-pong",
    name: "Ping Pong Tafel / Tafeltennisset",
    shortDescription:
      "Ping pong combineert sportiviteit met een ontspannen sfeer en werkt verrassend sterk als publieksmagneet. Het spel is ideaal voor binnenruimtes, terrassen en events waar interactie centraal staat.",
    detailedDescription:
      "Een ping pong tafel is een veelzijdige toevoeging voor horecazaken, bedrijven en eventlocaties die een toegankelijke activiteit zoeken met hoge rotatie. Ze past perfect in informele settings en stimuleert korte, spontane wedstrijden tussen gasten of collega’s. We voorzien cafespelen te huur of te koop inclusief advies over plaatsing en gebruikscomfort.",
    idealFor:
      "Geschikt voor bedrijfsfeesten, terrassen, eventhallen en creatieve horecazaken.",
    idealUseCases: ["Afterworks", "Terrasbeleving", "Informele competities"],
    highlight: "Sportief, toegankelijk en veelzijdig",
    gradient: "from-teal-400 via-cyan-500 to-sky-700",
    imageUrl: "https://picsum.photos/seed/pingpong/800/600",
    imageAlt: "ping pong tafel huren Vlaanderen"
  }
];

export const uspItems = [
  {
    title: "Snelle levering",
    description: "Vlotte planning en strakke opvolging voor cafés, events en feestzalen."
  },
  {
    title: "Heel Vlaanderen",
    description: "Levering en plaatsing in alle Vlaamse provincies, van kust tot centrumstad."
  },
  {
    title: "Op maat samengesteld",
    description: "Van één tafel tot een volledige spelhoek, afgestemd op uw publiek en ruimte."
  },
  {
    title: "Kwaliteitsgarantie",
    description: "Degelijke toestellen, verzorgd transport en professionele installatie."
  }
];

export const trustSignals = [
  {
    title: "Professionele plaatsing",
    description:
      "Wij leveren, installeren en testen elk toestel zodat u zonder zorgen kunt opstarten."
  },
  {
    title: "Advies voor horeca en events",
    description:
      "We denken mee over de juiste mix van spellen op basis van doelgroep, ruimte en rendement."
  },
  {
    title: "Flexibele formules",
    description:
      "Dagverhuur, weekendverhuur, langdurige huur of aankoop: u kiest wat het best past."
  }
];

export const processSteps = [
  {
    title: "Vraag offerte aan",
    description:
      "Vertel ons welke spellen u zoekt, voor welke locatie en wanneer u levering nodig hebt."
  },
  {
    title: "Wij leveren en installeren",
    description:
      "We plannen alles in, leveren op locatie en zorgen voor een nette, veilige opstelling."
  },
  {
    title: "U geniet van extra beleving",
    description:
      "Uw gasten spelen, blijven langer en onthouden uw locatie of event als iets bijzonders."
  }
];

export const testimonials = [
  {
    name: "Tom V.",
    role: "Café-uitbater in Gent",
    quote:
      "De pooltafel en dartsopstelling brachten meteen meer sfeer in onze zaak. Levering en service verliepen professioneel en stipt."
  },
  {
    name: "Sofie D.",
    role: "Eventmanager in Antwerpen",
    quote:
      "Voor ons bedrijfsevent huurden we arcade games en een basketbalautomaat. Alles stond perfect klaar en de reacties van bezoekers waren top."
  },
  {
    name: "Milan R.",
    role: "Feestzaal in West-Vlaanderen",
    quote:
      "Sterke communicatie, mooie toestellen en duidelijke afspraken. Wij werken graag opnieuw samen voor volgende events."
  }
];

export const faqs = [
  {
    question: "Kunnen we in heel Vlaanderen cafespelen huren?",
    answer:
      "Ja. Wij leveren en installeren in Antwerpen, Oost-Vlaanderen, West-Vlaanderen, Vlaams-Brabant en Limburg. Voor elke aanvraag bekijken we timing, bereikbaarheid en opstelling op maat."
  },
  {
    question: "Kunnen jullie meerdere cafespelen tegelijk leveren?",
    answer:
      "Zeker. We stellen vaak combinaties samen voor cafés, bedrijfsevents, feestzalen en tijdelijke activaties. Zo krijgt u een complete spelhoek die past bij uw publiek en budget."
  },
  {
    question: "Is installatie inbegrepen bij cafespelen te huur?",
    answer:
      "Ja, installatie en basisopstelling zijn standaard voorzien bij onze verhuurformules. We zorgen dat het toestel correct geplaatst en gebruiksklaar staat."
  },
  {
    question: "Werken jullie met vaste prijzen?",
    answer:
      "We werken voornamelijk op offertebasis omdat transport, looptijd, type toestel en aantal spellen sterk kunnen verschillen. Zo krijgt u een correcte prijs op maat van uw project."
  },
  {
    question: "Kunnen cafés ook langdurig huren?",
    answer:
      "Ja. Naast dag- en weekendverhuur bieden we ook cafespelen langdurig te huur voor cafés, horeca en recreatieruimtes. Dat is interessant wanneer u flexibiliteit wilt zonder meteen aan te kopen."
  },
  {
    question: "Kunnen we ook toestellen kopen?",
    answer:
      "Ja. U kunt bij ons terecht voor cafespelen te huur en voor aankoop van geselecteerde cafespelen. We adviseren welk type toestel het best past bij intensiteit, ruimte en uitstraling."
  },
  {
    question: "Zijn jullie spellen geschikt voor bedrijfsevents?",
    answer:
      "Absoluut. Veel van onze spellen doen het uitstekend op teambuildings, opendeurdagen, familiedagen en merkactivaties. We helpen graag bij een mix die interactie en fun stimuleert."
  },
  {
    question: "Hoe snel kunnen jullie leveren?",
    answer:
      "Dat hangt af van het type spel en de planning, maar we proberen altijd snel te schakelen. Stuur ons uw gewenste datum en locatie, dan bekijken we meteen de mogelijkheden."
  }
];

export const contactOptions = [
  ...products.map((product) => product.name),
  "Meerdere spelen"
];
