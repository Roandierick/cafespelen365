import Link from "next/link";

import { CTABanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-data";

export const metadata = createMetadata({
  title: "Cafespelen huren in heel Vlaanderen met levering en installatie",
  description:
    "Huur cafespelen in Vlaanderen voor cafés, events, feestzalen en bedrijven. Offerte op maat, levering in heel Vlaanderen en installatie inbegrepen.",
  path: "/verhuur",
  keywords: [
    "cafespelen huren Vlaanderen",
    "caféspel huur België",
    "arcade te huur event Vlaanderen",
    "pooltafel huren horeca",
    "tafelvoetbal huren bedrijfsevent"
  ]
});

const rentalBenefits = [
  {
    title: "Offerte op maat",
    description:
      "De huurprijs hangt af van type toestel, looptijd, aantal spellen, transport en de opstelling op locatie."
  },
  {
    title: "Levering in heel Vlaanderen",
    description:
      "Wij plannen leveringen in alle Vlaamse provincies en stemmen timing af op uw openingsuren of eventplanning."
  },
  {
    title: "Installatie inbegrepen",
    description:
      "We leveren niet alleen, maar zorgen ook voor een nette plaatsing en basiscontrole voor gebruik."
  }
];

const rentalPeriods = [
  {
    title: "Dagverhuur",
    description:
      "Geschikt voor activaties, openingen, opendeurdagen, beurzen en ééndaagse events met een sterke impact."
  },
  {
    title: "Weekendverhuur",
    description:
      "Een populaire formule voor tentfeesten, familiefeesten, weekendconcepten en tijdelijke horecaprogramma's."
  },
  {
    title: "Langdurig te huur",
    description:
      "Interessant voor cafés en horecazaken die extra beleving willen zonder meteen te investeren in aankoop."
  }
];

const includedItems = [
  "Professionele levering op locatie",
  "Plaatsing en basisafstelling",
  "Advies over ruimtegebruik en opstelling",
  "Transparante communicatie over timing en praktische vereisten"
];

export default function RentalPage() {
  return (
    <>
      <PageHero
        badges={[
          "Quote-based pricing",
          "Dag, weekend of langdurig",
          "Voor horeca, events en bedrijven"
        ]}
        description="Onze verhuurservice is gericht op klanten die snel en professioneel extra beleving willen toevoegen aan hun locatie. U krijgt een voorstel op maat, levering in heel Vlaanderen en installatie inbegrepen."
        kicker="Verhuurservice"
        primaryAction={{ href: "/contact", label: "Vraag een huurvoorstel aan" }}
        secondaryAction={{ href: "/aanbod", label: "Bekijk alle spellen" }}
        title="Cafespelen huren zonder zorgen, met één partner voor levering en plaatsing"
      />

      <section className="section-space">
        <div className="container">
          <SectionHeading
            description="We combineren praktische ontzorging met een premium uitstraling op locatie. Zo kunt u focussen op uw gasten, klanten of bezoekers."
            kicker="Waarom huren?"
            title="Een flexibele service voor drukke horecazaken en events"
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {rentalBenefits.map((benefit) => (
              <div className="surface-panel p-8" key={benefit.title}>
                <h2 className="font-display text-3xl">{benefit.title}</h2>
                <p className="mt-4 text-sm leading-7 text-gray-500 md:text-base">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div className="surface-panel p-8 md:p-10">
            <p className="section-kicker">Verhuurperiodes</p>
            <h2 className="display-title mt-4 text-4xl md:text-5xl">
              Kies de huurformule die past bij uw locatie of event
            </h2>
            <div className="mt-8 grid gap-5">
              {rentalPeriods.map((period) => (
                <div className="rounded-3xl bg-sand/70 px-5 py-5" key={period.title}>
                  <h3 className="text-xl font-semibold text-gray-900">{period.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-gray-500 md:text-base">
                    {period.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="surface-panel p-8 md:p-10">
            <p className="section-kicker">Inbegrepen</p>
            <h2 className="display-title mt-4 text-4xl md:text-5xl">Wat u van ons mag verwachten</h2>
            <div className="mt-8 grid gap-4">
              {includedItems.map((item) => (
                <div
                  className="rounded-2xl border border-gray-200 bg-white px-4 py-4 text-sm text-gray-600"
                  key={item}
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-3xl bg-gray-900 px-5 py-6 text-white">
              <div className="text-xs uppercase tracking-[0.22em] text-white/60">Leverzone</div>
              <p className="mt-3 text-sm leading-7 text-white/78">
                Actief in {siteConfig.serviceArea.join(", ")}. Heeft u een bijzondere
                opstelling of een eventlocatie met strakke timing? Dan stemmen we het traject
                vooraf zorgvuldig met u af.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container">
          <div className="surface-panel grid gap-8 p-8 md:p-10 lg:grid-cols-[1fr_0.8fr]">
            <div>
              <p className="section-kicker">Hoe we werken</p>
              <h2 className="display-title mt-4 text-4xl md:text-5xl">
                Snel schakelen, helder communiceren
              </h2>
              <p className="muted-copy mt-5">
                We starten altijd vanuit uw doel: meer sfeer in de zaak, een sterkere
                activatie op een event, of een spelhoek die bezoekers langer laat blijven. Op
                basis daarvan adviseren we de juiste toestellen, looptijd en praktische
                opstelling.
              </p>
            </div>
            <div className="flex flex-col justify-center gap-4">
              <Link className="button-primary" href="/contact">
                Vraag een offerte aan
              </Link>
              <Link className="button-secondary" href="/aanbod">
                Eerst het aanbod bekijken
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container">
          <CTABanner
            description="We bekijken graag welke formule, toestellen en planning het meest geschikt zijn voor uw café, event of bedrijfslocatie."
            title="Een cafespel huren in Vlaanderen? Laat ons uw project mee uitwerken."
          />
        </div>
      </section>
    </>
  );
}
