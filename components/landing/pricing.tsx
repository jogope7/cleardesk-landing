"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/landing/container";
import { Check, Zap, Building2 } from "lucide-react";

const monthlyFeatures = [
  "Full AI phone system",
  "Unlimited calls",
  "Dashboard access",
  "Email summaries",
  "English + Spanish",
  "Standard integrations",
];

const payAsYouGoFeatures = [
  "Everything in Monthly",
  "50+ concurrent calls",
  "Volume discounts",
  "Custom integrations",
  "Priority support",
  "Dedicated account manager",
  "SLA guarantees",
];

export function PricingSection() {
  return (
    <section className="py-24">
      <Container className="space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-4 py-1.5 text-sm text-zinc-600">
            <span className="h-1.5 w-1.5 rounded-full bg-zinc-400" />
            Pricing
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-zinc-500">
            One-time setup fee + your choice of plan.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-6 lg:grid-cols-2 max-w-4xl mx-auto">
          {/* Monthly Subscription */}
          <div className="rounded-2xl border border-zinc-200 bg-white p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-100">
                <Zap className="h-6 w-6 text-zinc-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-zinc-900">Monthly</h3>
                <p className="text-sm text-zinc-500">For most businesses</p>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-baseline gap-1">
                <span className="text-sm text-zinc-500">Starts at</span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold text-zinc-900">$400</span>
                <span className="text-zinc-500">/month</span>
              </div>
              <p className="text-sm text-zinc-500 mt-1">2,000 mins included · Setup fee separate</p>
            </div>

            <div className="space-y-3 mb-8">
              {monthlyFeatures.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-emerald-500 shrink-0" />
                  <span className="text-zinc-600">{item}</span>
                </div>
              ))}
            </div>

            <Button asChild className="w-full h-12 bg-zinc-900 hover:bg-zinc-800 font-medium">
              <a href="https://calendly.com/jose-cleardesk/30-min-meeting" target="_blank">Get started</a>
            </Button>
          </div>

          {/* Pay As You Go */}
          <div className="rounded-2xl bg-zinc-900 p-8 relative overflow-hidden">
            {/* Badge */}
            <div className="absolute top-6 right-6">
              <span className="rounded-full bg-emerald-500 px-3 py-1 text-xs font-medium text-white">
                High volume
              </span>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800">
                <Building2 className="h-6 w-6 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Pay As You Go</h3>
                <p className="text-sm text-zinc-400">For bigger volumes</p>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-white">$0.08</span>
                <span className="text-zinc-400">–</span>
                <span className="text-4xl font-bold text-white">$0.12</span>
                <span className="text-zinc-400">/min</span>
              </div>
              <p className="text-sm text-zinc-500 mt-1">Min 8,000 mins/mo · Setup fee separate</p>
            </div>

            <div className="space-y-3 mb-8">
              {payAsYouGoFeatures.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-emerald-400 shrink-0" />
                  <span className="text-zinc-300">{item}</span>
                </div>
              ))}
            </div>

            <Button asChild className="w-full h-12 bg-white text-zinc-900 hover:bg-zinc-100 font-medium">
              <a href="https://calendly.com/jose-cleardesk/30-min-meeting" target="_blank">Contact sales</a>
            </Button>
          </div>
        </div>

        {/* Bottom note */}
        <div className="text-center space-y-2">
          <p className="text-zinc-500">
            Not sure which plan? Book a demo and we'll help you decide.
          </p>
          <Button asChild variant="ghost" className="text-zinc-900 font-medium">
            <a href="https://calendly.com/jose-cleardesk/30-min-meeting" target="_blank">Book a demo →</a>
          </Button>
        </div>
      </Container>
    </section>
  );
}
