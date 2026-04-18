import Image from "next/image";
import Link from "next/link";

import { ArrowRightIcon, CheckIcon } from "@/components/icons";
import type { Product } from "@/lib/site-data";

type ProductCardProps = {
  product: Product;
  variant?: "compact" | "detailed";
};

export function ProductCard({
  product,
  variant = "compact"
}: ProductCardProps) {
  const isDetailed = variant === "detailed";

  return (
    <article
      className="surface-panel group h-full overflow-hidden"
      id={isDetailed ? product.slug : undefined}
    >
      <div className={`relative overflow-hidden ${isDetailed ? "h-64 md:h-72" : "h-48"}`}>
        <Image
          alt={product.imageAlt}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          height={600}
          sizes={
            isDetailed
              ? "(min-width: 1280px) 50vw, 100vw"
              : "(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
          }
          src={product.imageUrl}
          width={800}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/5" />
        <div className="absolute inset-x-0 bottom-0 p-6 text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/75">
            Foto ter illustratie
          </p>
          <h3 className="mt-2 font-display text-3xl leading-none md:text-4xl">{product.name}</h3>
        </div>
      </div>
      <div className="p-6 md:p-8">
        <div className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-clay">
          {product.highlight}
        </div>
        <p className="muted-copy mt-4">{isDetailed ? product.detailedDescription : product.shortDescription}</p>
        <div className="mt-5 rounded-3xl bg-sand/70 px-4 py-4 text-sm leading-7 text-gray-600">
          <span className="font-semibold text-gray-900">Ideaal voor:</span> {product.idealFor}
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {product.idealUseCases.map((useCase) => (
            <span
              className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-gray-500"
              key={useCase}
            >
              <CheckIcon className="h-3.5 w-3.5 text-forest" />
              {useCase}
            </span>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          {isDetailed ? (
            <Link className="button-primary gap-2" href={`/contact?spel=${product.slug}`}>
              Vraag prijs aan
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          ) : (
            <>
              <Link className="button-primary gap-2" href={`/aanbod#${product.slug}`}>
                Meer info
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <Link className="button-secondary" href={`/contact?spel=${product.slug}`}>
                Vraag offerte
              </Link>
            </>
          )}
        </div>
      </div>
    </article>
  );
}
