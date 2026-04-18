import { NextResponse } from "next/server";
import { Resend } from "resend";

import { siteConfig } from "@/lib/site-data";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  gameType?: string;
  message?: string;
  context?: string;
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatLine(label: string, value: string) {
  return `<p style="margin:0 0 12px;"><strong>${label}:</strong> ${escapeHtml(value)}</p>`;
}

export async function POST(request: Request) {
  const body = (await request.json()) as ContactPayload;

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const phone = body.phone?.trim() ?? "";
  const company = body.company?.trim() ?? "";
  const gameType = body.gameType?.trim() ?? "";
  const message = body.message?.trim() ?? "";
  const context = body.context?.trim() ?? "Websiteformulier";

  if (!name || !email || !phone || !company || !gameType || !message) {
    return NextResponse.json(
      { message: "Gelieve alle verplichte velden in te vullen." },
      { status: 400 }
    );
  }

  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      {
        message:
          "Het contactformulier is nog niet gekoppeld aan Resend. Voeg een geldige RESEND_API_KEY toe."
      },
      { status: 500 }
    );
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const fromEmail =
      process.env.RESEND_FROM_EMAIL || `${siteConfig.shortName} <onboarding@resend.dev>`;

    const html = `
      <div style="font-family:Arial,sans-serif;line-height:1.6;color:#101321;">
        <h2 style="margin:0 0 20px;">Nieuwe lead via ${escapeHtml(siteConfig.name)}</h2>
        ${formatLine("Context", context)}
        ${formatLine("Naam", name)}
        ${formatLine("E-mail", email)}
        ${formatLine("Telefoonnummer", phone)}
        ${formatLine("Bedrijfsnaam", company)}
        ${formatLine("Type spel", gameType)}
        <p style="margin:0 0 12px;"><strong>Bericht:</strong><br />${escapeHtml(message).replaceAll("\n", "<br />")}</p>
      </div>
    `;

    await resend.emails.send({
      from: fromEmail,
      to: siteConfig.email,
      replyTo: email,
      subject: `Nieuwe lead: ${company} - ${gameType}`,
      html
    });

    return NextResponse.json({ message: "Uw aanvraag werd succesvol verzonden." });
  } catch (error) {
    console.error("Resend contact error", error);

    return NextResponse.json(
      {
        message:
          "Het verzenden van het formulier is mislukt. Probeer later opnieuw of mail rechtstreeks."
      },
      { status: 500 }
    );
  }
}
