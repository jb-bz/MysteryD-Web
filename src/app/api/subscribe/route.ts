import { NextResponse } from "next/server";
import { Resend } from "resend";

interface SubscribeRequest {
  email: string;
  source?: string;
  utm_source?: string | null;
  utm_medium?: string | null;
  utm_campaign?: string | null;
  timestamp?: string;
}

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "Service unavailable" }, { status: 503 });
    }

    const resend = new Resend(apiKey);

    const body: SubscribeRequest = await request.json();

    if (!body.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    const audienceId = process.env.RESEND_AUDIENCE_ID;
    if (!audienceId) {
      console.error("RESEND_AUDIENCE_ID not configured");
      return NextResponse.json({ error: "Service unavailable" }, { status: 503 });
    }

    const { error } = await resend.contacts.create({
      email: body.email,
      audienceId,
      unsubscribed: false,
      properties: {
        source: body.source || "website",
        utm_source: body.utm_source || "",
        utm_medium: body.utm_medium || "",
        utm_campaign: body.utm_campaign || "",
      },
    } as { email: string; audienceId: string; unsubscribed: boolean; properties: Record<string, string> });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Subscribe route error:", err);
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}