"use client";

import * as React from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/landing/container";
import { Calculator, Minus, Plus, ArrowRight, DollarSign } from "lucide-react";

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);

export function CalculatorPreview() {
  const [callsPerDay, setCallsPerDay] = React.useState(30);
  const [missedPercent, setMissedPercent] = React.useState(20);
  const [valuePerCall, setValuePerCall] = React.useState(150);
  const [isAnimating, setIsAnimating] = React.useState(false);

  const monthlyLost = Math.round(callsPerDay * (missedPercent / 100) * valuePerCall * 30);
  const dailyLost = Math.round(callsPerDay * (missedPercent / 100) * valuePerCall);

  const adjustValue = (setter: React.Dispatch<React.SetStateAction<number>>, delta: number, min: number, max: number) => {
    setIsAnimating(true);
    setter(prev => Math.max(min, Math.min(max, prev + delta)));
    setTimeout(() => setIsAnimating(false), 150);
  };

  return (
    <section id="calculator" className="scroll-mt-24 py-16 bg-zinc-950">
      <Container className="space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-red-500/20 px-4 py-1.5 text-sm text-red-400">
            <Calculator className="h-4 w-4" />
            Revenue calculator
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            How much are you losing?
          </h2>
          <p className="text-xl text-zinc-400">
            Adjust the numbers. Watch the money disappear.
          </p>
        </div>

        {/* Calculator */}
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] items-center">
            {/* Left: Controls */}
            <div className="space-y-6">
              {/* Calls per day */}
              <div className="rounded-2xl bg-zinc-900 p-6">
                <div className="text-sm text-zinc-500 mb-3">Calls per day</div>
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => adjustValue(setCallsPerDay, -5, 0, 500)}
                    className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white transition-colors"
                  >
                    <Minus className="h-5 w-5" />
                  </button>
                  <span className="text-4xl font-bold text-white">{callsPerDay}</span>
                  <button
                    onClick={() => adjustValue(setCallsPerDay, 5, 0, 500)}
                    className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white transition-colors"
                  >
                    <Plus className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Missed percent */}
              <div className="rounded-2xl bg-zinc-900 p-6">
                <div className="text-sm text-zinc-500 mb-3">% you miss</div>
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => adjustValue(setMissedPercent, -5, 0, 100)}
                    className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white transition-colors"
                  >
                    <Minus className="h-5 w-5" />
                  </button>
                  <span className="text-4xl font-bold text-red-400">{missedPercent}%</span>
                  <button
                    onClick={() => adjustValue(setMissedPercent, 5, 0, 100)}
                    className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white transition-colors"
                  >
                    <Plus className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Value per call */}
              <div className="rounded-2xl bg-zinc-900 p-6">
                <div className="text-sm text-zinc-500 mb-3">Value per call</div>
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => adjustValue(setValuePerCall, -25, 0, 1000)}
                    className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white transition-colors"
                  >
                    <Minus className="h-5 w-5" />
                  </button>
                  <span className="text-4xl font-bold text-emerald-400">${valuePerCall}</span>
                  <button
                    onClick={() => adjustValue(setValuePerCall, 25, 0, 1000)}
                    className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white transition-colors"
                  >
                    <Plus className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right: Result */}
            <div className="rounded-3xl bg-gradient-to-br from-red-500 to-red-600 p-8 text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <DollarSign className="h-6 w-6 text-red-200" />
                <span className="text-red-200 font-medium">Money you're losing</span>
              </div>
              
              <div className={`transition-transform duration-150 ${isAnimating ? 'scale-105' : 'scale-100'}`}>
                <div className="text-6xl font-bold text-white mb-2 sm:text-7xl">
                  {formatCurrency(monthlyLost)}
                </div>
                <div className="text-xl text-red-200">every month</div>
              </div>

              <div className="mt-8 pt-6 border-t border-red-400/30">
                <div className="text-red-200 mb-1">That's</div>
                <div className="text-2xl font-bold text-white">{formatCurrency(dailyLost)} / day</div>
              </div>

              <div className="mt-8 space-y-3">
                <Button asChild className="w-full h-12 bg-white text-red-600 hover:bg-red-50 font-bold">
                  <Link href="/missed-calls-calculator">
                    Full calculator
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="ghost" className="w-full h-12 text-white hover:bg-red-400/20 font-medium">
                  <a href="#examples">Hear how we fix this</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
