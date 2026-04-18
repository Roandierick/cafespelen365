import { CTABanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Cafespelen kopen voor cafés, horeca en belevingsruimtes",
  description:
    "Koop cafespelen voor uw café, horecazaak, recreatieruimte of eventlocatie in Vlaanderen. Professioneel advies, sterke toestellen en begeleiding bij de juiste keuze.",
  path: "/verkoop",
  keywords: [
    "cafespelen kopen Vlaanderen",
    "pooltafel kopen België",
    "tafelvoetbal kopen horeca",
    "arcadekast kopen Vlaanderen",
    "flipperkast te koop België"
  ]
});

const ownershipBenefits = [
  {
    title: "Volledige controle",
    description:
      "Een eigen toestel staat permanent ter beschikking en kan volledig geïntegreerd worden in uw zaak of concept."
  },
  {
    title: "Sterke langetermijninvestering",
    description:
      "Voor locaties met regelmatig gebruik is aankoop vaak een interessante keuze op lange termijn."
  },
  {
    title: "Afgestemd op uw uitstraling",
    description:
      "We adviseren welke speltypes en formaten aansluiten bij uw ruimte, publiek en positionering."
  },
  {
    title: "Professioneel aankoopadvies",
    description:
      "U krijgt begeleiding bij de juiste keuze, zodat u investeert in een toestel dat effectief rendeert."
  }
];

const comparison = [
  {
    title: "Aankoop is slim wanneer...",
    points: [
      "u een vaste speelhoek wilt uitbouwen",
      "uw klanten het toestel frequent zullen gebruiken",
      "u uw concept op lange termijn wilt versterken"
    ]
  },
  {
    title: "Verhuur is slimmer wanneer...",
    points: [
      "u flexibiliteit nodig hebt voor tijdelijke acties",
      "u verschillende speltypes wilt testen",
      "u een event of seizoensmoment wilt activeren"
    ]
  }
];

export default function SalesPage() {
  return (
    <>
      <PageHero
        badges={[
          "Voor vaste opstellingen",
          "Advies op maat van uw zaak",
          "Alternatief voor langdurige huur"
        ]}
        description="Wilt u cafespelen structureel inzetten in uw zaak of locatie? Dan is aankoop vaak de meest interessante piste. Wij begeleiden u naar een oplossing die past bij uw publiek, ruimte en commerciële doelstelling."
        kicker="Te koop"
        primaryAction={{ href: "/contact", label: "Vraag aankoopadvies aan" }}
        secondaryAction={{ href: "/verhuur", label: "Vergelijk met te huur aanbod" }}
        title="Cafespelen kopen voor blijvende beleving en een sterkere zaak"
      />

      <section className="section-space">
        <div className="container">
          <SectionHeading
            description="Aankoop is vooral interessant voor klanten die een vaste spelzone willen creëren en inzetten op langdurige aantrekkingskracht."
            kicker="Voordelen van eigendom"
            title="Waarom kiezen voor aankoop in plaats van huur?"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {ownershipBenefits.map((benefit) => (
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
        <div className="container grid gap-6 xl:grid-cols-2">
          {comparison.map((column) => (
            <div className="surface-panel p-8 md:p-10" key={column.title}>
              <p className="section-kicker">Vergelijking</p>
              <h2 className="display-title mt-4 text-4xl md:text-5xl">{column.title}</h2>
              <div className="mt-8 grid gap-4">
                {column.points.map((point) => (
                  <div
                    className="rounded-2xl border border-gray-200 bg-sand/65 px-4 py-4 text-sm text-gray-600"
                    key={point}
                  >
                    {point}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container">
          <div className="surface-panel grid gap-8 p-8 md:p-10 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <p className="section-kicker">Onze aanpak</p>
              <h2 className="display-title mt-4 text-4xl md:text-5xl">
                Praktisch advies zonder overbodige complexiteit
              </h2>
              <p className="muted-copy mt-5">
                We bekijken samen welke toestellen commercieel het meest interessant zijn
                voor uw zaak of locatie. Daarbij letten we op beschikbare ruimte, type
                publiek, verwachte gebruiksintensiteit en de uitstraling die u wilt
                neerzetten.
              </p>
            </div>
            <div className="rounded-[28px] bg-gray-900 px-6 py-8 text-white">
              <div className="text-xs uppercase tracking-[0.22em] text-white/60">
                Ownership vs rental
              </div>
              <p className="mt-4 text-sm leading-7 text-white/80">
                Twijfelt u nog tussen kopen en huren? Dat is heel normaal. We adviseren
                eerlijk welke formule het best aansluit bij uw gebruiksritme en budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container">
          <CTABanner
            description="Laat ons weten welke speltypes u overweegt en hoe de opstelling eruitziet. We helpen u graag naar een doordachte aankoopbeslissing."
            title="Op zoek naar een cafespel dat perfect past bij uw vaste concept?"
          />
        </div>
      </section>
    </>
  );
}
