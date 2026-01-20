"use client";

import { Container } from "@/components/landing/container";
import { X, TrendingDown } from "lucide-react";

const painPoints = [
  { text: "Calls go to voicemail", stat: "23%" },
  { text: "Staff can't keep up", stat: "—" },
  { text: "Hot leads hang up", stat: "$$$" },
  { text: "Support gets overwhelmed", stat: "—" },
  { text: "You don't know how much you're losing", stat: "?" },
];

export function PainSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-0 top-1/2 h-[400px] w-[400px] -translate-x-1/3 -translate-y-1/2 rounded-full bg-gradient-to-br from-red-50 to-transparent blur-3xl" />
      </div>

      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Left: Copy */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-1.5 text-sm text-red-600">
              <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
              The problem
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
              Calls come in.
              <br />
              <span className="text-zinc-400">The business still leaks money.</span>
            </h2>
            <p className="text-xl text-zinc-500 max-w-md">
              Every missed call is a missed opportunity. Most businesses don't even know how much they're losing.
            </p>
          </div>

          {/* Right: Pain Points Card (dark) */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl bg-zinc-900 p-8 shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-sm font-medium text-zinc-400">Revenue Leaks</span>
                </div>
                <div className="flex items-center gap-1 text-red-400">
                  <TrendingDown className="h-4 w-4" />
                  <span className="text-sm font-medium">Daily</span>
                </div>
              </div>

              {/* Pain Points */}
              <div className="space-y-3">
                {painPoints.map((point) => (
                  <div
                    key={point.text}
                    className="flex items-center gap-4 rounded-xl bg-zinc-800/50 p-4 border border-zinc-800"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-500/20">
                      <X className="h-4 w-4 text-red-400" />
                    </div>
                    <span className="flex-1 text-white font-medium">{point.text}</span>
                    <span className="text-sm font-mono text-zinc-500">{point.stat}</span>
                  </div>
                ))}
              </div>

              {/* Bottom stat */}
              <div className="mt-6 pt-6 border-t border-zinc-800">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-zinc-500">Estimated monthly loss</span>
                  <span className="text-2xl font-bold text-red-400">$???</span>
                </div>
              </div>
            </div>

            {/* Decorative gradient behind card */}
            <div className="absolute -bottom-4 -left-4 -z-10 h-full w-full rounded-3xl bg-gradient-to-br from-red-100/50 to-orange-100/50" />
          </div>
        </div>
      </Container>
    </section>
  );
}
