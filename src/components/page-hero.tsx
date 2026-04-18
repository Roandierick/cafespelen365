import Link from "next/link";

import { ArrowRightIcon } from "@/components/icons";

type HeroAction = {
  label: string;
  href: string;
};

type PageHeroProps = {
  kicker: string;
  title: string;
  description: string;
  primaryAction: HeroAction;
  secondaryAction?: HeroAction;
  badges?: string[];
};

export function PageHero({
  kicker,
  title,
  description,
  primaryAction,
  secondaryAction,
  badges = []
}: PageHeroProps) {
  return (
    <section className="pt-10 md:pt-16">
      <div className="container">
        <div className="surface-panel relative overflow-hidden bg-hero-glow px-6 py-12 md:px-12 md:py-16">
          <div className="absolute -right-16 top-10 h-44 w-44 rounded-full bg-amber-100 blur-3xl" />
          <div className="absolute bottom-0 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-forest/10 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
            <div className="max-w-3xl">
              <p className="section-kicker">{kicker}</p>
              <h1 className="display-title mt-5 text-5xl md:text-6xl lg:text-7xl">{title}</h1>
              <p className="muted-copy mt-6 max-w-2xl md:text-lg">{description}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link className="button-primary gap-2" href={primaryAction.href}>
                  {primaryAction.label}
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
                {secondaryAction ? (
                  <Link className="button-secondary" href={secondaryAction.href}>
                    {secondaryAction.label}
                  </Link>
                ) : null}
              </div>
            </div>
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-1">
              {badges.map((badge) => (
                <div
                  className="rounded-3xl border border-white/70 bg-white/80 px-5 py-4 text-sm font-medium text-gray-600 shadow-sm"
                  key={badge}
                >
                  {badge}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
