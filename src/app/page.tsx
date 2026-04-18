import { Suspense } from "react";
import Link from "next/link";

import { ContactForm } from "@/components/contact-form";
import { CTABanner } from "@/components/cta-banner";
import {
  CrownIcon,
  DeliveryIcon,
  HandshakeIcon,
  MapIcon,
  SettingsIcon,
  ShieldIcon,
  SparkIcon
} from "@/components/icons";
import { FAQAccordion } from "@/components/faq-accordion";
import { ProductCard } from "@/components/product-card";
import { SectionHeading } from "@/components/section-heading";
import { createMetadata } from "@/lib/metadata";
import {
  faqs,
  processSteps,
  products,
  siteConfig,
  testimonials,
  trustSignals,
  uspItems
} from "@/lib/site-data";

export const metadata = createMetadata({
  title: "Cafespelen huren in Vlaanderen voor cafés, events en horeca",
  description:
    "Bij Caféspelen 365 huurt of koopt u premium cafespelen in heel Vlaanderen. Van pooltafels en tafelvoetbal tot boksmachines, flipperkasten en arcade games.",
  path: "/",
  keywords: [
    "cafespelen huren Vlaanderen",
    "cafespelen huren België",
    "pooltafel te huur Vlaanderen",
    "tafelvoetbal huren café",
    "flipperkast huren event"
  ]
});

const uspIcons = [DeliveryIcon, MapIcon, SettingsIcon, ShieldIcon];
const trustIcons = [CrownIcon, SparkIcon, HandshakeIcon];

function FormFallback() {
  return (
    <div className="surface-panel p-6 text-sm text-gray-500 md:p-8">
      Contactformulier wordt geladen...
    </div>
  );
}

export default function HomePage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    description: siteConfig.tagline,
    taxID: siteConfig.vatNumber,
    vatID: siteConfig.vatNumber,
    areaServed: siteConfig.serviceArea,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      addressCountry: "BE",
      addressRegion: "Vlaanderen",
      addressLocality: "Gent"
    },
    url: siteConfig.domain,
    knowsAbout: products.map((product) => product.name)
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema)
        }}
        type="application/ld+json"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
        }}
        type="application/ld+json"
      />
      <section className="pt-10 md:pt-16">
        <div className="container">
          <div className="surface-panel relative overflow-hidden bg-hero-glow px-6 py-12 md:px-12 md:py-16">
            <div className="absolute -left-16 top-6 h-48 w-48 rounded-full bg-amber-100 blur-3xl" />
            <div className="absolute right-0 top-10 h-56 w-56 rounded-full bg-forest/12 blur-3xl" />
            <div className="absolute bottom-0 left-1/3 h-32 w-32 rounded-full bg-white/70 blur-3xl" />
            <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div className="max-w-3xl animate-reveal">
                <p className="section-kicker">Premium cafespelen voor Vlaanderen</p>
                <h1 className="display-title mt-5 text-5xl md:text-6xl lg:text-7xl">
                  Cafespelen huren in Vlaanderen voor cafés, events en horeca
                </h1>
                <p className="muted-copy mt-6 max-w-2xl md:text-lg">
                  Caféspelen 365 helpt cafés, feestzalen, bedrijven en
                  evenementenorganisatoren aan sterke spelbeleving met premium cafespelen te
                  huur en te koop. Van een enkele pooltafel tot een volledige arcade- of
                  caféspelhoek: wij leveren, installeren en adviseren in heel Vlaanderen.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link className="button-primary" href="#contactformulier">
                    Vraag uw offerte aan
                  </Link>
                  <Link className="button-secondary" href="/aanbod">
                    Bekijk het volledige aanbod
                  </Link>
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  {[
                    "Levering in heel Vlaanderen",
                    "Te huur en te koop",
                    "Installatie inbegrepen"
                  ].map((item) => (
                    <span
                      className="rounded-full border border-gray-200 bg-white/75 px-4 py-2 text-sm font-medium text-gray-500"
                      key={item}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="grid gap-4 lg:max-w-md lg:justify-self-end">
                <div className="surface-panel animate-float bg-white/90 p-6">
                  <div className="text-sm font-semibold uppercase tracking-[0.22em] text-clay">
                    Gericht op resultaat
                  </div>
                  <div className="mt-3 font-display text-4xl text-gray-900">12+</div>
                  <p className="mt-2 text-sm leading-7 text-gray-500">
                    populaire cafespelen voor horeca, events, feestzalen en bedrijven
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                  <div className="rounded-[24px] border border-white/70 bg-gray-900 p-5 text-white shadow-luxe">
                    <div className="text-xs uppercase tracking-[0.22em] text-white/60">
                      Sterke mix
                    </div>
                    <div className="mt-2 text-lg font-semibold">Klassiekers en eyecatchers</div>
                  </div>
                  <div className="rounded-[24px] border border-white/70 bg-white/85 p-5">
                    <div className="text-xs uppercase tracking-[0.22em] text-clay">
                      Op maat
                    </div>
                    <div className="mt-2 text-lg font-semibold text-gray-900">
                      Van één toestel tot een complete spelzone
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space pb-8">
        <div className="container">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {uspItems.map((item, index) => {
              const Icon = uspIcons[index];

              return (
                <div className="surface-panel flex h-full gap-4 p-6" key={item.title}>
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sand text-clay">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900">{item.title}</h2>
                    <p className="mt-2 text-sm leading-7 text-gray-500">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-space pt-6">
        <div className="container">
          <SectionHeading
            description="Een breed assortiment van klassieke Vlaamse favorieten tot moderne publiekstrekkers. Elk product is inzetbaar voor cafés, evenementen, horeca en belevingsruimtes."
            kicker="Ons aanbod"
            title="12 cafespelen die sfeer, interactie en rendement brengen"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container">
          <SectionHeading
            description="Wij combineren verzorgde toestellen, strakke organisatie en advies op maat zodat uw zaak of event professioneel oogt en maximaal rendeert."
            kicker="Waarom kiezen voor ons?"
            title="Een partner die meedenkt met horeca, events en bedrijven"
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {trustSignals.map((signal, index) => {
              const Icon = trustIcons[index];

              return (
                <div className="surface-panel p-8" key={signal.title}>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-900 text-white">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 font-display text-3xl">{signal.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-gray-500 md:text-base">
                    {signal.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container">
          <SectionHeading
            description="Een eenvoudig traject met één aanspreekpunt, van eerste aanvraag tot plaatsing op locatie."
            kicker="Hoe het werkt"
            title="In 3 duidelijke stappen naar extra beleving"
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {processSteps.map((step, index) => (
              <div className="surface-panel p-8" key={step.title}>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sand font-display text-2xl text-clay">
                  {index + 1}
                </div>
                <h3 className="mt-5 text-2xl font-semibold text-gray-900">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-500 md:text-base">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container">
          <SectionHeading
            align="center"
            description="Een greep uit de reacties die we vaak willen oproepen: zorgeloos, professioneel en meteen extra sfeer op locatie."
            kicker="Testimonials"
            title="Wat klanten waarderen aan onze service"
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <blockquote className="surface-panel h-full p-8" key={testimonial.name}>
                <div className="text-3xl text-amber-500">&ldquo;</div>
                <p className="mt-4 text-sm leading-8 text-gray-500 md:text-base">
                  {testimonial.quote}
                </p>
                <footer className="mt-6">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container">
          <SectionHeading
            description="Veelgestelde vragen van café-uitbaters, eventorganisatoren en bedrijven die cafespelen willen huren of kopen in Vlaanderen."
            kicker="FAQ"
            title="Antwoorden op praktische vragen"
          />
          <div className="mt-10">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container">
          <CTABanner
            description="Vertel ons welke sfeer u wilt neerzetten, hoeveel ruimte u hebt en op welke datum u levering nodig hebt. Wij werken een voorstel uit dat past bij uw zaak of event."
            title="Klaar om uw café of event sterker te laten opvallen?"
          />
        </div>
      </section>

      <section className="section-space pt-0" id="contactformulier">
        <div className="container grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="self-start">
            <p className="section-kicker">Contactformulier</p>
            <h2 className="display-title mt-4 text-4xl md:text-5xl">
              Vraag vandaag nog uw voorstel op maat aan
            </h2>
            <p className="muted-copy mt-5">
              Laat weten welke spellen u nodig hebt, voor welke datum of locatie, en we
              contacteren u zo snel mogelijk met een passende oplossing voor cafespelen te
              huur of te koop in Vlaanderen.
            </p>
          </div>
          <Suspense fallback={<FormFallback />}>
            <ContactForm contextLabel="Homepage leadformulier" />
          </Suspense>
        </div>
      </section>
    </>
  );
}
