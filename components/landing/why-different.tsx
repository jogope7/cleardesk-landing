"use client";

import { Container } from "@/components/landing/container";
import { Check, X } from "lucide-react";

const clearDeskFeatures = [
  "We install it for you",
  "Works from day one",
  "Real call transparency",
  "Bilingual, human-level",
  "Built for real volume",
];

const otherToolsFeatures = [
  "You implement it yourself",
  "Weeks of setup",
  "Just call counts",
  "Robotic, English-only",
  "Breaks under load",
];

export function WhyDifferentSection() {
  return (
    <section className="py-16">
      <Container className="space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-4 py-1.5 text-sm text-zinc-600">
            <span className="h-1.5 w-1.5 rounded-full bg-zinc-400" />
            The difference
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            Why ClearDesk is different
          </h2>
        </div>

        {/* Two Cards Side by Side */}
        <div className="grid gap-6 lg:grid-cols-2 max-w-4xl mx-auto">
          {/* ClearDesk Card - Dark/Prominent */}
          <div className="rounded-2xl bg-zinc-900 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500">
                <Check className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">ClearDesk</span>
            </div>
            <div className="space-y-4">
              {clearDeskFeatures.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-emerald-400 shrink-0" />
                  <span className="text-zinc-200">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Other Tools Card - Light/Muted */}
          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-200">
                <X className="h-5 w-5 text-zinc-400" />
              </div>
              <span className="text-xl font-bold text-zinc-400">Other tools</span>
            </div>
            <div className="space-y-4">
              {otherToolsFeatures.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <X className="h-5 w-5 text-zinc-300 shrink-0" />
                  <span className="text-zinc-400 line-through decoration-zinc-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom tagline */}
        <p className="text-center text-zinc-500">
          Same price. Completely different experience.
        </p>
      </Container>
    </section>
  );
}
