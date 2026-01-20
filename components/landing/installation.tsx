"use client";

import { Container } from "@/components/landing/container";
import { Phone, Settings, GraduationCap, TestTube, Rocket, Check } from "lucide-react";

const steps = [
  { icon: Phone, text: "Connect your phone number", detail: "Works with any provider" },
  { icon: Settings, text: "Build your call logic", detail: "Custom to your business" },
  { icon: GraduationCap, text: "Train it on your workflows", detail: "Booking, routing, FAQs" },
  { icon: TestTube, text: "Test real scenarios", detail: "Before going live" },
  { icon: Rocket, text: "Deploy it live", detail: "Same day activation" },
];

export function InstallationSection() {
  return (
    <section id="how-it-works" className="relative scroll-mt-24 py-24 overflow-hidden">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-0 top-1/4 h-[500px] w-[500px] translate-x-1/3 rounded-full bg-gradient-to-br from-violet-50 to-transparent blur-3xl" />
      </div>

      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Left: Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-4 py-1.5 text-sm text-zinc-600">
                <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
                Done for you
              </div>
              <h2 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
                Fully installed.
                <br />
                <span className="text-zinc-400">Zero setup for you.</span>
              </h2>
              <p className="text-xl text-zinc-500 max-w-md">
                We handle the entire implementation. You just watch it work.
              </p>
            </div>

            <div className="flex items-center gap-3 rounded-full bg-emerald-50 px-5 py-3 w-fit">
              <Check className="h-5 w-5 text-emerald-600" />
              <span className="text-sm font-medium text-emerald-700">From day one, your phone is handled.</span>
            </div>
          </div>

          {/* Right: Steps Card (dark like hero) */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl bg-zinc-900 p-8 shadow-2xl">
              {/* Header */}
              <div className="flex items-center gap-2 mb-8">
                <div className="h-2 w-2 rounded-full bg-emerald-500" />
                <span className="text-sm font-medium text-zinc-400">Installation Process</span>
              </div>

              {/* Steps */}
              <div className="space-y-4">
                {steps.map((step, index) => (
                  <div
                    key={step.text}
                    className="flex items-center gap-4 rounded-xl bg-zinc-800/50 p-4 border border-zinc-800 transition-colors hover:bg-zinc-800"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-zinc-700 text-white">
                      <step.icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-medium text-zinc-500">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="text-white font-medium">{step.text}</span>
                      </div>
                      <p className="text-sm text-zinc-500 mt-0.5">{step.detail}</p>
                    </div>
                    <div className="h-6 w-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                      <Check className="h-3.5 w-3.5 text-emerald-400" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative gradient behind card */}
            <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-3xl bg-gradient-to-br from-violet-100/50 to-emerald-100/50" />
          </div>
        </div>
      </Container>
    </section>
  );
}
