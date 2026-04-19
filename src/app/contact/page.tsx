import { Suspense } from "react";

import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-data";

export const metadata = createMetadata({
  title: "Contacteer Caféspelen 365 voor cafespelen te huur of te koop in Vlaanderen",
  description:
    "Vraag een offerte aan bij Caféspelen 365 voor cafespelen in Vlaanderen. Contacteer ons voor caféspelen te huur of te koop, levering en installatie voor horeca en events.",
  path: "/contact",
  keywords: [
    "contact cafespelen Vlaanderen",
    "offerte cafespelen huren",
    "cafespelen te huur contact",
    "pooltafel offerte België",
    "event games contact Vlaanderen"
  ]
});

function FormFallback() {
  return (
    <div className="surface-panel p-6 text-sm text-gray-500 md:p-8">
      Contactformulier wordt geladen...
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        badges={[
          "Snelle reactie",
          "Voor horeca, events en bedrijven",
          "Levering in heel Vlaanderen"
        ]}
        description="Heeft u een concreet project in gedachten of wilt u eerst advies? Vul het formulier in en we nemen zo snel mogelijk contact op voor een voorstel op maat."
        kicker="Contact"
        primaryAction={{ href: "#formulier", label: "Ga naar het formulier" }}
        secondaryAction={{ href: "/aanbod", label: "Bekijk ons aanbod" }}
        title="Neem contact op voor cafespelen te huur of te koop"
      />

      <section className="section-space" id="formulier">
        <div className="container">
          <SectionHeading
            description="Hoe duidelijker uw project, hoe gerichter wij kunnen adviseren. Geef gerust al mee om welke spellen, datum, locatie en setting het gaat."
            kicker="Vraag uw offerte aan"
            title="Vertel ons wat u zoekt"
          />
          <div className="mt-10 grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
            <Suspense fallback={<FormFallback />}>
              <ContactForm contextLabel="Contactpagina" />
            </Suspense>
            <div className="grid gap-6">
              <div className="surface-panel p-8">
                <p className="section-kicker">Rechtstreeks</p>
                <h2 className="display-title mt-4 text-4xl">Contactgegevens</h2>
                <div className="mt-6 grid gap-3 text-sm leading-7 text-gray-500 md:text-base">
                  <div>
                    <span className="font-semibold text-gray-900">E-mail:</span> {siteConfig.email}
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Telefoon:</span> {siteConfig.phone}
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">KBO:</span> {siteConfig.kbo}
                  </div>
                  <div>
                    BTW: {siteConfig.vatNumber} | Ondernemingsnummer: {siteConfig.enterpriseNumber}
                  </div>
                </div>
              </div>
              <div className="surface-panel p-8">
                <p className="section-kicker">Google Maps</p>
                <h2 className="display-title mt-4 text-4xl">Embed placeholder</h2>
                <div className="mt-6 rounded-[28px] border border-dashed border-gray-200 bg-sand/65 px-5 py-12 text-center text-sm text-gray-500">
                  Hier kan later een Google Maps embed of kaartmodule worden geplaatst.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
