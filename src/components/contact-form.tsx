"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import { contactOptions, products } from "@/lib/site-data";

type ContactFormProps = {
  contextLabel: string;
};

type FormState = {
  name: string;
  email: string;
  phone: string;
  company: string;
  gameType: string;
  message: string;
};

const emptyForm: FormState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  gameType: "",
  message: ""
};

export function ContactForm({ contextLabel }: ContactFormProps) {
  const searchParams = useSearchParams();
  const [form, setForm] = useState<FormState>(emptyForm);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    const requestedGame = searchParams.get("spel");
    if (!requestedGame) {
      return;
    }

    const matchedProduct = products.find(
      (product) => product.slug === requestedGame || product.name === requestedGame
    );

    if (matchedProduct) {
      setForm((current) => ({
        ...current,
        gameType: matchedProduct.name
      }));
    }
  }, [searchParams]);

  function updateField<Key extends keyof FormState>(field: Key, value: FormState[Key]) {
    setForm((current) => ({
      ...current,
      [field]: value
    }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...form,
          context: contextLabel
        })
      });

      const payload = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(payload.message || "Er liep iets mis.");
      }

      setStatus("success");
      setFeedback("Bedankt. Uw aanvraag werd goed ontvangen. We nemen zo snel mogelijk contact op.");
      setForm((current) => ({
        ...emptyForm,
        gameType: current.gameType
      }));
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof Error
          ? error.message
          : "Er liep iets mis bij het verzenden van uw aanvraag."
      );
    }
  }

  return (
    <form className="surface-panel p-6 md:p-8" onSubmit={handleSubmit}>
      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-gray-700">
          Naam
          <input
            className="input-shell"
            onChange={(event) => updateField("name", event.target.value)}
            placeholder="Uw naam"
            required
            type="text"
            value={form.name}
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-gray-700">
          E-mail
          <input
            className="input-shell"
            onChange={(event) => updateField("email", event.target.value)}
            placeholder="naam@bedrijf.be"
            required
            type="email"
            value={form.email}
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-gray-700">
          Telefoonnummer
          <input
            className="input-shell"
            onChange={(event) => updateField("phone", event.target.value)}
            placeholder="+32 468 41 45 55"
            required
            type="tel"
            value={form.phone}
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-gray-700">
          Bedrijfsnaam
          <input
            className="input-shell"
            onChange={(event) => updateField("company", event.target.value)}
            placeholder="Uw café, zaak of organisatie"
            required
            type="text"
            value={form.company}
          />
        </label>
      </div>
      <div className="mt-5 grid gap-5">
        <label className="grid gap-2 text-sm font-medium text-gray-700">
          Type spel
          <select
            className="input-shell appearance-none"
            onChange={(event) => updateField("gameType", event.target.value)}
            required
            value={form.gameType}
          >
            <option value="">Selecteer een spel</option>
            {contactOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-medium text-gray-700">
          Bericht
          <textarea
            className="input-shell min-h-[160px] resize-y"
            onChange={(event) => updateField("message", event.target.value)}
            placeholder="Vertel ons welke spellen u zoekt, voor welke datum of locatie, en hoeveel ruimte beschikbaar is."
            required
            value={form.message}
          />
        </label>
      </div>
      <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="text-sm text-gray-500">We antwoorden doorgaans binnen 1 werkdag.</div>
        <button
          className="button-primary min-w-[200px] disabled:cursor-not-allowed disabled:opacity-70"
          disabled={status === "loading"}
          type="submit"
        >
          {status === "loading" ? "Aanvraag verzenden..." : "Verstuur aanvraag"}
        </button>
      </div>
      {feedback ? (
        <div
          className={`mt-5 rounded-2xl px-4 py-3 text-sm ${
            status === "success"
              ? "bg-forest/10 text-forest"
              : "bg-red-50 text-red-700"
          }`}
        >
          {feedback}
        </div>
      ) : null}
    </form>
  );
}
