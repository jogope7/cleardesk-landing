"use client";

import { Container } from "@/components/landing/container";
import { Phone, GitBranch, Languages, BarChart3 } from "lucide-react";

const items = [
  {
    title: "Every call answered",
    description: "24/7, no voicemail. Never miss an opportunity again.",
    icon: Phone,
    iconBg: "bg-emerald-500",
  },
  {
    title: "Resolved or routed",
    description: "Completes tasks or hands off to the right person.",
    icon: GitBranch,
    iconBg: "bg-blue-500",
  },
  {
    title: "Bilingual conversations",
    description: "Fluent in English and Spanish. No awkward transfers.",
    icon: Languages,
    iconBg: "bg-amber-500",
  },
  {
    title: "Full transparency",
    description: "Dashboard, outcomes, summaries. See everything.",
    icon: BarChart3,
    iconBg: "bg-violet-500",
  },
];

export function WhatYouGet() {
  return (
    <section id="product" className="relative scroll-mt-24 py-16 overflow-hidden">
      {/* Subtle background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-0 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-gradient-to-br from-emerald-50 to-transparent blur-3xl" />
        <div className="absolute right-1/4 bottom-0 h-[300px] w-[300px] translate-y-1/2 rounded-full bg-gradient-to-tr from-blue-50 to-transparent blur-3xl" />
      </div>

      <Container className="space-y-16">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-4 py-1.5 text-sm text-zinc-600">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            After every call
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            What you get
          </h2>
          <p className="text-xl text-zinc-500 max-w-2xl mx-auto">
            Every call is answered, handled, and documented automatically.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="group relative rounded-2xl bg-white p-6 shadow-sm border border-zinc-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-zinc-50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              
              <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl ${item.iconBg} shadow-lg`}>
                <item.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-zinc-900">
                {item.title}
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
