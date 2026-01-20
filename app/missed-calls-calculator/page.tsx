"use client";

import * as React from "react";
import Link from "next/link";

import { SiteHeader } from "@/components/landing/header";
import { Container } from "@/components/landing/container";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Minus, Plus, DollarSign, TrendingDown, HelpCircle } from "lucide-react";

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);

const faqs = [
  {
    q: "Is this exact?",
    a: "No. It's a simple estimate. Your real results depend on how many calls you miss and how many become real revenue.",
  },
  {
    q: "What if our calls aren't sales?",
    a: "Use the average value of a saved customer or resolved issue. Missed service calls still create churn and extra labor.",
  },
  {
    q: "What if we already have staff?",
    a: "ClearDesk can run as a safety net so you never miss another call.",
  },
];

export default function MissedCallsCalculatorPage() {
  const [callsPerDay, setCallsPerDay] = React.useState(30);
  const [missedPercent, setMissedPercent] = React.useState(20);
  const [valuePerCall, setValuePerCall] = React.useState(150);
  const [closeRate, setCloseRate] = React.useState(30);
  const [bookingRate, setBookingRate] = React.useState(70);
  const [showAdvanced, setShowAdvanced] = React.useState(false);
  const [isAnimating, setIsAnimating] = React.useState(false);

  const monthlyBase = callsPerDay * (missedPercent / 100) * valuePerCall * 30;
  const advancedMultiplier = showAdvanced ? (closeRate / 100) * (bookingRate / 100) : 1;
  const monthlyAdjusted = Math.round(monthlyBase * advancedMultiplier);
  const yearlyAdjusted = Math.round(monthlyAdjusted * 12);
  const dailyLost = Math.round((monthlyAdjusted / 30));

  const adjustValue = (setter: React.Dispatch<React.SetStateAction<number>>, delta: number, min: number, max: number) => {
    setIsAnimating(true);
    setter(prev => Math.max(min, Math.min(max, prev + delta)));
    setTimeout(() => setIsAnimating(false), 150);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <SiteHeader basePath="/" />
      <main className="pt-32 pb-24">
        <Container className="space-y-16">
          {/* Header */}
          <div className="space-y-6">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to home
            </Link>
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-red-500/20 px-4 py-1.5 text-sm text-red-400">
                <TrendingDown className="h-4 w-4" />
                Revenue calculator
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Missed Calls Revenue Calculator
              </h1>
              <p className="max-w-2xl text-xl text-zinc-400">
                Adjust the numbers. See exactly how much you're losing.
              </p>
            </div>
          </div>

          {/* Calculator Grid */}
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Left: Controls */}
            <div className="space-y-4">
              {/* Calls per day */}
              <div className="rounded-2xl bg-zinc-900 p-6">
                <div className="text-sm text-zinc-500 mb-3">Calls per day</div>
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => adjustValue(setCallsPerDay, -5, 0, 500)}
                    className="flex h-14 w-14 items-center justify-center rounded-xl bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white transition-colors"
                  >
                    <Minus className="h-6 w-6" />
                  </button>
                  <span className="text-5xl font-bold text-white">{callsPerDay}</span>
                  <button
                    onClick={() => adjustValue(setCallsPerDay, 5, 0, 500)}
                    className="flex h-14 w-14 items-center justify-center rounded-xl bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white transition-colors"
                  >
                    <Plus className="h-6 w-6" />
                  </button>
                </div>
              </div>

              {/* Missed percent */}
              <div className="rounded-2xl bg-zinc-900 p-6">
                <div className="text-sm text-zinc-500 mb-3">% of calls you miss</div>
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => adjustValue(setMissedPercent, -5, 0, 100)}
                    className="flex h-14 w-14 items-center justify-center rounded-xl bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white transition-colors"
                  >
                    <Minus className="h-6 w-6" />
                  </button>
                  <span className="text-5xl font-bold text-red-400">{missedPercent}%</span>
                  <button
                    onClick={() => adjustValue(setMissedPercent, 5, 0, 100)}
                    className="flex h-14 w-14 items-center justify-center rounded-xl bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white transition-colors"
                  >
                    <Plus className="h-6 w-6" />
                  </button>
                </div>
              </div>

              {/* Value per call */}
              <div className="rounded-2xl bg-zinc-900 p-6">
                <div className="text-sm text-zinc-500 mb-3">Average value per call</div>
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => adjustValue(setValuePerCall, -25, 0, 1000)}
                    className="flex h-14 w-14 items-center justify-center rounded-xl bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white transition-colors"
                  >
                    <Minus className="h-6 w-6" />
                  </button>
                  <span className="text-5xl font-bold text-emerald-400">${valuePerCall}</span>
                  <button
                    onClick={() => adjustValue(setValuePerCall, 25, 0, 1000)}
                    className="flex h-14 w-14 items-center justify-center rounded-xl bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white transition-colors"
                  >
                    <Plus className="h-6 w-6" />
                  </button>
                </div>
              </div>

              {/* Advanced toggle */}
              <button
                onClick={() => setShowAdvanced(!showAdvanced)}
                className="w-full rounded-2xl bg-zinc-900 p-4 text-left text-zinc-400 hover:text-white transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm">Advanced options (close rate, booking rate)</span>
                  <span>{showAdvanced ? "−" : "+"}</span>
                </div>
              </button>

              {showAdvanced && (
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-zinc-900 p-6">
                    <div className="text-sm text-zinc-500 mb-3">Close rate</div>
                    <div className="flex items-center justify-between">
                      <button
                        onClick={() => adjustValue(setCloseRate, -5, 0, 100)}
                        className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white transition-colors"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="text-3xl font-bold text-white">{closeRate}%</span>
                      <button
                        onClick={() => adjustValue(setCloseRate, 5, 0, 100)}
                        className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white transition-colors"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  <div className="rounded-2xl bg-zinc-900 p-6">
                    <div className="text-sm text-zinc-500 mb-3">Booking rate</div>
                    <div className="flex items-center justify-between">
                      <button
                        onClick={() => adjustValue(setBookingRate, -5, 0, 100)}
                        className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white transition-colors"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="text-3xl font-bold text-white">{bookingRate}%</span>
                      <button
                        onClick={() => adjustValue(setBookingRate, 5, 0, 100)}
                        className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white transition-colors"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right: Result */}
            <div className="lg:sticky lg:top-32">
              <div className="rounded-3xl bg-gradient-to-br from-red-500 to-red-600 p-8">
                <div className="flex items-center justify-center gap-2 mb-6">
                  <DollarSign className="h-6 w-6 text-red-200" />
                  <span className="text-red-200 font-medium">Money you're losing</span>
                </div>
                
                <div className={`text-center transition-transform duration-150 ${isAnimating ? 'scale-105' : 'scale-100'}`}>
                  <div className="text-6xl font-bold text-white mb-2 sm:text-7xl">
                    {formatCurrency(monthlyAdjusted)}
                  </div>
                  <div className="text-xl text-red-200">every month</div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-red-400/30">
                  <div className="text-center">
                    <div className="text-red-200 text-sm mb-1">Per day</div>
                    <div className="text-2xl font-bold text-white">{formatCurrency(dailyLost)}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-red-200 text-sm mb-1">Per year</div>
                    <div className="text-2xl font-bold text-white">{formatCurrency(yearlyAdjusted)}</div>
                  </div>
                </div>

                <div className="mt-8 space-y-3">
                  <Button asChild className="w-full h-12 bg-white text-red-600 hover:bg-red-50 font-bold">
                    <Link href="/#examples">Hear how we fix this</Link>
                  </Button>
                  <Button asChild variant="ghost" className="w-full h-12 text-white hover:bg-red-400/20 font-medium">
                    <Link href="https://calendly.com/jose-cleardesk/30-min-meeting" target="_blank">Book a demo</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-900">
                <HelpCircle className="h-5 w-5 text-zinc-400" />
              </div>
              <h2 className="text-2xl font-bold">Frequently asked questions</h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="rounded-2xl bg-zinc-900 p-6">
                  <div className="font-semibold text-white mb-2">{faq.q}</div>
                  <div className="text-zinc-400">{faq.a}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </main>
    </div>
  );
}
