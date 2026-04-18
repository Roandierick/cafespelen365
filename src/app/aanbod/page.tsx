import { CTABanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { ProductCard } from "@/components/product-card";
import { SectionHeading } from "@/components/section-heading";
import { createMetadata } from "@/lib/metadata";
import { products } from "@/lib/site-data";

export const metadata = createMetadata({
  title: "Aanbod cafespelen te huur en te koop in Vlaanderen",
  description:
    "Ontdek ons volledige aanbod cafespelen te huur en te koop in Vlaanderen: pooltafels, flipperkasten, tafelvoetbal, darts, boksmachines en meer.",
  path: "/aanbod",
  keywords: [
    "aanbod cafespelen Vlaanderen",
    "cafespelen kopen België",
    "cafespelen horeca",
    "cafespelen evenement huren",
    "pooltafel en flipperkast te huur"
  ]
});

const combinations = [
  {
    title: "Cafécombinatie",
    description:
      "Pooltafel, darts en tafelvoetbal voor een sterke mix van klassiekers met hoge herhaalwaarde."
  },
  {
    title: "Eventmix",
    description:
      "Boksmachine, basketbalautomaat en air hockey voor maximale zichtbaarheid en doorloop."
  },
  {
    title: "Retro corner",
    description:
      "Flipperkast, arcade games en XL-spellen voor een originele en memorabele belevingszone."
  }
];

export default function OfferPage() {
  return (
    <>
      <PageHero
        badges={[
          "12 zorgvuldig gekozen spellen",
          "Voor cafés, evenementen en bedrijven",
          "Verhuur of aankoop mogelijk"
        ]}
        description="Van authentieke Vlaamse klassiekers tot opvallende publiekstrekkers: ons aanbod is samengesteld voor locaties die meer sfeer, beleving en interactie willen creëren."
        kicker="Volledig aanbod"
        primaryAction={{ href: "/contact", label: "Vraag advies op maat" }}
        secondaryAction={{ href: "/verhuur", label: "Bekijk te huur aanbod" }}
        title="Cafespelen voor elke zaak, elk event en elk publiek"
      />

      <section className="section-space">
        <div className="container">
          <SectionHeading
            description="Elk toestel is geselecteerd op uitstraling, gebruiksgemak en impact op locatie. Klik door of vraag meteen een prijs op maat aan."
            kicker="Producten in detail"
            title="Ons volledig assortiment cafespelen"
          />
          <div className="mt-10 grid gap-6 xl:grid-cols-2">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} variant="detailed" />
            ))}
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container">
          <SectionHeading
            description="Veel klanten kiezen voor een slimme combinatie van klassieke speltypes en opvallende activaties. Zo verhoogt u zowel verblijfstijd als beleving."
            kicker="Veel gekozen"
            title="Sterke combinaties voor horeca en events"
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {combinations.map((combination) => (
              <div className="surface-panel p-8" key={combination.title}>
                <h3 className="font-display text-3xl text-gray-900">{combination.title}</h3>
                <p className="mt-4 text-sm leading-7 text-gray-500 md:text-base">
                  {combination.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container">
          <CTABanner
            description="We adviseren graag welke spellen het best passen bij uw ruimte, publiek en timing. Ook combinaties en langere trajecten zijn mogelijk."
            title="Niet zeker welke cafespelen het meest geschikt zijn?"
          />
        </div>
      </section>
    </>
  );
}
