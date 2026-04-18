import Link from "next/link";

type CTABannerProps = {
  title: string;
  description: string;
};

export function CTABanner({ title, description }: CTABannerProps) {
  return (
    <div className="surface-panel relative overflow-hidden bg-hero-glow px-6 py-10 md:px-10">
      <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-amber-100 blur-3xl" />
      <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <p className="section-kicker">Vraag een voorstel op maat</p>
          <h2 className="display-title mt-3 text-3xl md:text-4xl">{title}</h2>
          <p className="muted-copy mt-4">{description}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link className="button-primary" href="/contact">
            Contacteer ons
          </Link>
          <Link className="button-secondary" href="/aanbod">
            Bekijk het aanbod
          </Link>
        </div>
      </div>
    </div>
  );
}
