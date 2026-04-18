import { CTABanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-data";

export const metadata = createMetadata({
  title: "Over ons | Partner voor cafespelen in Vlaanderen",
  description:
    "Lees meer over Caféspelen 365: onze missie, aanpak en servicegebied voor cafespelen te huur en te koop in Vlaanderen.",
  path: "/over-ons",
  keywords: [
    "over ons cafespelen Vlaanderen",
    "bedrijf cafespelen België",
    "horeca spelverhuur Vlaanderen",
    "event games leverancier Vlaanderen",
    "cafespelen partner horeca"
  ]
});

const values = [
  {
    title: "Kwaliteit in presentatie",
    description:
      "Wij geloven dat goed gekozen spelbeleving niet alleen fun toevoegt, maar ook uw merk en ruimte versterkt."
  },
  {
    title: "Lokale service",
    description:
      "Met focus op Vlaanderen kunnen we snel schakelen, duidelijk communiceren en praktisch meedenken."
  },
  {
    title: "Advies op maat",
    description:
      "Geen standaardlijst, maar voorstellen die passen bij doelgroep, ruimte en commerciële doelstelling."
  }
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        badges={[
          "Focus op Vlaanderen",
          "Voor horeca en events",
          "Praktische service met premium uitstraling"
        ]}
        description="Caféspelen 365 is opgebouwd rond één duidelijke missie: cafés, horecazaken, events en bedrijven helpen om meer beleving te creëren met sterke en professioneel gepresenteerde spelconcepten."
        kicker="Over ons"
        primaryAction={{ href: "/contact", label: "Neem contact op" }}
        secondaryAction={{ href: "/aanbod", label: "Ontdek het aanbod" }}
        title="Een Vlaamse partner voor spelbeleving die blijft hangen"
      />

      <section className="section-space">
        <div className="container grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="surface-panel p-8 md:p-10">
            <p className="section-kicker">Ons verhaal</p>
            <h2 className="display-title mt-4 text-4xl md:text-5xl">
              Ontstaan uit liefde voor horeca, events en sterke sfeer
            </h2>
            <p className="muted-copy mt-6">
              Caféspelen 365 is gestart vanuit een oprechte liefde voor plekken waar mensen
              samenkomen. In cafés, op evenementen en tijdens bedrijfsfeesten zagen we telkens
              opnieuw hoe een goed spel de sfeer meteen verandert: mensen praten sneller met
              elkaar, blijven langer hangen en maken van een gewone avond iets dat bijblijft.
              Tegelijk merkten we dat kwaliteitsvolle caféspelen in Vlaanderen niet altijd
              eenvoudig te vinden of te huren waren, zeker niet met een betrouwbare service
              erbij.
            </p>
            <p className="muted-copy mt-4">
              Vanuit die vaststelling groeide het idee om het veel eenvoudiger te maken. Of u
              nu café-uitbater bent, een evenement organiseert of voor uw bedrijf een originele
              activatie zoekt: bij Caféspelen 365 moet u zonder omwegen topkwaliteit
              caféspelen kunnen huren of kopen. Met snelle levering, persoonlijke opvolging en
              een duidelijke aanpak in heel Vlaanderen willen we de drempel zo laag mogelijk
              maken.
            </p>
            <p className="muted-copy mt-4">
              Wat ons anders maakt, zit in de manier waarop we werken. We houden van persoonlijk
              contact, luisteren eerst naar wat u nodig hebt en denken daarna praktisch mee over
              de juiste mix van spellen. We bieden flexibele huurperiodes, professionele
              installatie is inbegrepen en u kunt kiezen uit een breed aanbod, van klassieke
              caféfavorieten tot opvallende eyecatchers. Daarbij bedienen we heel Vlaanderen,
              zodat klanten overal op dezelfde vlotte en verzorgde service kunnen rekenen.
            </p>
            <p className="muted-copy mt-4">
              We bouwen Caféspelen 365 stap voor stap verder uit, met een groeiend aanbod en
              dezelfde ambitie als op dag één: mensen in heel Vlaanderen samenbrengen rond
              sterke spellen en memorabele momenten.
            </p>
          </div>
          <div className="surface-panel p-8 md:p-10">
            <p className="section-kicker">Missie</p>
            <h2 className="display-title mt-4 text-4xl md:text-5xl">
              Beleving tastbaar maken voor Vlaamse locaties
            </h2>
            <p className="muted-copy mt-6">
              Onze missie is om cafés, horecazaken, eventlocaties en bedrijven in Vlaanderen
              te helpen met spelconcepten die direct werken: zichtbaar, aantrekkelijk en
              afgestemd op de context.
            </p>
            <div className="mt-8 grid gap-4">
              {values.map((value) => (
                <div
                  className="rounded-3xl border border-gray-200 bg-sand/70 px-5 py-5"
                  key={value.title}
                >
                  <h3 className="text-xl font-semibold text-gray-900">{value.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-gray-500 md:text-base">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container">
          <SectionHeading
            description="We ondersteunen klanten in alle Vlaamse provincies en houden onze service bewust lokaal, snel en persoonlijk."
            kicker="Servicegebied"
            title="Actief in heel Vlaanderen"
          />
          <div className="mt-10 surface-panel overflow-hidden p-8 md:p-10">
            <div className="max-w-4xl">
              <h3 className="font-display text-4xl text-gray-900">Van kust tot centrumstad</h3>
              <p className="muted-copy mt-4">
                We ondersteunen projecten in {siteConfig.serviceArea.join(", ")}. Dankzij die
                duidelijke focus kunnen we snel plannen, praktisch afstemmen en de service
                persoonlijk houden.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {siteConfig.serviceArea.map((area) => (
                  <span
                    className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-500"
                    key={area}
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container">
          <CTABanner
            description="Wilt u samenwerken voor een café, eventlocatie, bedrijfsfeest of tijdelijke activatie? We denken graag met u mee."
            title="Zoekt u een betrouwbare partner voor cafespelen in Vlaanderen?"
          />
        </div>
      </section>
    </>
  );
}
