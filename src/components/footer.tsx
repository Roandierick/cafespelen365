import Link from "next/link";

import { siteConfig } from "@/lib/site-data";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/aanbod", label: "Aanbod" },
  { href: "/verhuur", label: "Te huur" },
  { href: "/verkoop", label: "Te koop" },
  { href: "/over-ons", label: "Over ons" },
  { href: "/contact", label: "Contact" }
];

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-900 text-white">
      <div className="container grid gap-10 py-12 md:grid-cols-[1.1fr_0.9fr_0.9fr]">
        <div>
          <div className="font-display text-3xl">{siteConfig.name}</div>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/72">
            Premium cafespelen te huur en te koop voor cafés, horeca, feestzalen,
            evenementen en bedrijven in heel Vlaanderen.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {siteConfig.serviceArea.map((region) => (
              <span
                className="rounded-full border border-white/12 px-3 py-1 text-xs font-medium text-white/70"
                key={region}
              >
                {region}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-white/60">
            Navigatie
          </h3>
          <div className="mt-5 grid gap-3">
            {footerLinks.map((link) => (
              <Link
                className="text-sm text-white/78 transition hover:text-white"
                href={link.href}
                key={link.href}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-white/60">
            Contact
          </h3>
          <div className="mt-5 grid gap-3 text-sm text-white/78">
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            <span>{siteConfig.phone}</span>
            <span>KBO: {siteConfig.kbo}</span>
          </div>
        </div>
      </div>
      <div className="container border-t border-white/10 pb-6 pt-4 text-sm text-white/55">
        BTW: {siteConfig.vatNumber} | Ondernemingsnummer: {siteConfig.enterpriseNumber}
      </div>
    </footer>
  );
}
