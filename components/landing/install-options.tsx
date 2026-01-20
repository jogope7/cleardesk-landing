"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/landing/container";
import { Phone, Shield, ArrowRight, Check } from "lucide-react";

type InstallOptionsProps = {
  onSelectExample: (exampleId: string) => void;
};

export function InstallOptions({ onSelectExample }: InstallOptionsProps) {
  return (
    <section className="py-24">
      <Container className="space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-4 py-1.5 text-sm text-zinc-600">
            <span className="h-1.5 w-1.5 rounded-full bg-zinc-400" />
            Two options
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            Choose how ClearDesk
            <br />
            <span className="text-zinc-400">runs your phones.</span>
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 max-w-5xl mx-auto">
          {/* Front Desk Option - Dark Card */}
          <div className="relative rounded-3xl bg-zinc-900 p-8">
            {/* Badge */}
            <div className="absolute top-6 right-6">
              <span className="rounded-full bg-emerald-500 px-3 py-1.5 text-xs font-medium text-white">
                Most popular
              </span>
            </div>

            {/* Icon */}
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800">
              <Phone className="h-6 w-6 text-emerald-400" />
            </div>

            {/* Content */}
            <h3 className="text-2xl font-bold text-white mb-2">Front Desk AI</h3>
            <p className="text-emerald-400 text-sm font-medium mb-4">Answers every call</p>
            <p className="text-zinc-400 leading-relaxed mb-6">
              ClearDesk answers every call. Humans only step in when needed.
            </p>

            {/* Benefits */}
            <div className="space-y-2.5 mb-8">
              {["High call volume", "24/7 operations", "Maximum cost savings"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <Check className="h-4 w-4 text-emerald-400" />
                  <span className="text-sm text-zinc-300">{item}</span>
                </div>
              ))}
            </div>

            <Button
              onClick={() => onSelectExample("sales-en")}
              className="w-full h-11 rounded-full bg-white text-zinc-900 hover:bg-zinc-100 font-medium"
            >
              Hear front desk example
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Safety Net Option - Light Card */}
          <div className="relative rounded-3xl border border-zinc-200 bg-white p-8">
            {/* Badge */}
            <div className="absolute top-6 right-6">
              <span className="rounded-full bg-zinc-100 px-3 py-1.5 text-xs font-medium text-zinc-600">
                Zero risk
              </span>
            </div>

            {/* Icon */}
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-100">
              <Shield className="h-6 w-6 text-blue-600" />
            </div>

            {/* Content */}
            <h3 className="text-2xl font-bold text-zinc-900 mb-2">Miss Calls Safety Net</h3>
            <p className="text-blue-600 text-sm font-medium mb-4">Steps in when calls would be missed</p>
            <p className="text-zinc-500 leading-relaxed mb-6">
              Your team answers calls. ClearDesk watches. When calls get missed, it jumps in.
            </p>

            {/* Benefits */}
            <div className="space-y-2.5 mb-8">
              {["Overflow protection", "After-hours coverage", "Gradual transition"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <Check className="h-4 w-4 text-zinc-400" />
                  <span className="text-sm text-zinc-600">{item}</span>
                </div>
              ))}
            </div>

            <Button
              onClick={() => onSelectExample("overflow")}
              variant="outline"
              className="w-full h-11 rounded-full border-zinc-200 text-zinc-700 hover:bg-zinc-50 font-medium"
            >
              Hear safety net example
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
