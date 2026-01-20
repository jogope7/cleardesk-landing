"use client";

import { Container } from "@/components/landing/container";
import { ArrowRight } from "lucide-react";

const tools = [
  "RingCentral",
  "Google Calendar",
  "Outlook",
  "Attio",
  "HubSpot",
  "Salesforce",
  "Twilio",
  "Calendly",
];

export function IntegrationsSection() {
  return (
    <section id="integrations" className="scroll-mt-24 py-24">
      <Container>
        <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-12 text-center">
          <h2 className="text-3xl font-bold text-zinc-900 mb-4">
            Works with your stack
          </h2>
          
          {/* Scrolling tools */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full bg-white border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-700"
              >
                {tool}
              </span>
            ))}
            <span className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white">
              + more
            </span>
          </div>

          <p className="text-zinc-500 mb-6">
            Phones, calendars, CRMs — we connect to what you use.
          </p>

          <a
            href="https://calendly.com/jose-cleardesk/30-min-meeting" target="_blank"
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-900 hover:underline"
          >
            Need a custom integration?
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </Container>
    </section>
  );
}
