"use client";

import { useState } from "react";

import { ChevronDownIcon } from "@/components/icons";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQAccordionProps = {
  items: FAQItem[];
};

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <div className="grid gap-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div className="surface-panel overflow-hidden" key={item.question}>
            <button
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left md:px-8"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              type="button"
            >
              <span className="text-base font-semibold text-gray-900 md:text-lg">{item.question}</span>
              <ChevronDownIcon
                className={`h-5 w-5 shrink-0 text-clay transition ${isOpen ? "rotate-180" : ""}`}
              />
            </button>
            {isOpen ? (
              <div className="border-t border-gray-200 px-6 py-5 text-sm leading-7 text-gray-500 md:px-8 md:text-base">
                {item.answer}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
