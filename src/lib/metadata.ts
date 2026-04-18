import type { Metadata } from "next";

import { siteConfig } from "@/lib/site-data";

type MetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords: string[];
};

export function createMetadata({
  title,
  description,
  path,
  keywords
}: MetadataInput): Metadata {
  const canonical = new URL(path, siteConfig.domain).toString();

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
      locale: "nl_BE",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description
    },
    robots: {
      index: true,
      follow: true
    }
  };
}
