"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { CloseIcon, MenuIcon } from "@/components/icons";
import { siteConfig } from "@/lib/site-data";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/aanbod", label: "Aanbod" },
  { href: "/verhuur", label: "Te huur" },
  { href: "/verkoop", label: "Te koop" },
  { href: "/over-ons", label: "Over ons" },
  { href: "/contact", label: "Contact" }
];

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-[#fffaf3]/85 backdrop-blur-xl">
      <div className="container flex items-center justify-between py-4">
        <Link
          aria-label={`Ga naar de homepage van ${siteConfig.name}`}
          className="group flex items-center gap-3"
          href="/"
          onClick={() => setIsOpen(false)}
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-900 text-base font-semibold text-white shadow-soft transition group-hover:-translate-y-0.5">
            365
          </div>
          <div>
            <div className="font-display text-2xl leading-none text-gray-900">{siteConfig.name}</div>
            <div className="text-xs uppercase tracking-[0.22em] text-clay">
              Cafespelen in Vlaanderen
            </div>
          </div>
        </Link>
        <nav className="hidden items-center gap-2 lg:flex">
          {navigation.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? "bg-gray-900 text-white"
                    : "text-gray-500 hover:bg-white hover:text-gray-900"
                }`}
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="hidden lg:block">
          <Link className="button-primary" href="/contact">
            Vraag offerte
          </Link>
        </div>
        <button
          aria-label={isOpen ? "Sluit menu" : "Open menu"}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-900 lg:hidden"
          onClick={() => setIsOpen((current) => !current)}
          type="button"
        >
          {isOpen ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </div>
      {isOpen ? (
        <div className="border-t border-gray-200 bg-white/95 px-5 py-4 lg:hidden">
          <div className="container grid gap-2 px-0">
            {navigation.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  className={`rounded-2xl px-4 py-3 text-sm font-medium ${
                    isActive ? "bg-gray-900 text-white" : "bg-sand/60 text-gray-600"
                  }`}
                  href={item.href}
                  key={item.href}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      ) : null}
    </header>
  );
}
