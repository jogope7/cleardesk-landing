"use client";

import { Container } from "@/components/landing/container";
import { Brain, DollarSign, TrendingUp, AlertCircle, Zap } from "lucide-react";

export function AIIntelligenceSection() {
  return (
    <section className="relative py-16 overflow-hidden bg-zinc-50">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-0 h-[500px] w-[500px] -translate-y-1/3 rounded-full bg-gradient-to-br from-emerald-50 to-transparent blur-3xl" />
        <div className="absolute right-1/4 bottom-0 h-[400px] w-[400px] translate-y-1/3 rounded-full bg-gradient-to-tr from-blue-50 to-transparent blur-3xl" />
      </div>

      <Container className="space-y-12">
        {/* Header */}
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1.5 text-sm text-emerald-600">
            <Brain className="h-4 w-4" />
            Intelligence
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl">
            Every call analyzed.
            <br />
            <span className="text-zinc-400">In real time.</span>
          </h2>
          <p className="text-lg text-zinc-500 max-w-2xl mx-auto sm:text-xl">
            ClearDesk doesn't just answer calls—it understands them.
          </p>
        </div>

        {/* Single card with three items */}
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl border border-zinc-200 bg-white shadow-lg shadow-zinc-200/50 p-8 sm:p-10">
            <div className="grid gap-8 md:grid-cols-3">
              {/* Call Value */}
              <div className="space-y-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500">
                  <DollarSign className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-zinc-900">Call Value</h3>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  Every call tagged with estimated revenue potential.
                </p>
              </div>

              {/* Buying Patterns */}
              <div className="space-y-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500">
                  <TrendingUp className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-zinc-900">Buying Patterns</h3>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  Spots repeat callers and intent signals automatically.
                </p>
              </div>

              {/* Urgency */}
              <div className="space-y-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500">
                  <AlertCircle className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-zinc-900">Urgency Scoring</h3>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  Hot leads and complaints flagged instantly.
                </p>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="mt-8 pt-8 border-t border-zinc-100 flex items-center justify-center gap-2 text-sm text-zinc-600">
              <Zap className="h-4 w-4 text-emerald-500" />
              <span>Analysis happens <strong className="text-zinc-900">during the call</strong>—not after.</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

