"use client";

import { Container } from "@/components/landing/container";
import { Mail, Check, User, FileText, Clock } from "lucide-react";

export function SummariesSection() {
  return (
    <section className="py-24">
      <Container className="space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-4 py-1.5 text-sm text-zinc-600">
            <Mail className="h-4 w-4" />
            After every call
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            Call summaries delivered
            <br />
            <span className="text-zinc-400">automatically.</span>
          </h2>
        </div>

        {/* Email Preview - Centered & Prominent */}
        <div className="max-w-2xl mx-auto">
          <div className="rounded-2xl border border-zinc-200 bg-white overflow-hidden shadow-lg">
            {/* Email header bar */}
            <div className="flex items-center justify-between bg-zinc-900 px-5 py-3">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-zinc-700" />
                  <span className="h-3 w-3 rounded-full bg-zinc-700" />
                  <span className="h-3 w-3 rounded-full bg-zinc-700" />
                </div>
                <span className="text-sm text-zinc-400">Inbox</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-zinc-500">
                <Clock className="h-3.5 w-3.5" />
                Just now
              </div>
            </div>

            {/* Email content */}
            <div className="p-6 space-y-5">
              {/* Subject row */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500 shrink-0">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-zinc-900">New Call Summary</span>
                    <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-700">
                      Booked
                    </span>
                  </div>
                  <div className="text-sm text-zinc-500">From ClearDesk AI · Downtown Vet Clinic</div>
                </div>
              </div>

              {/* Details grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-zinc-50 p-4">
                  <div className="text-xs text-zinc-500 mb-1">Customer</div>
                  <div className="font-semibold text-zinc-900">Luis Mejía</div>
                </div>
                <div className="rounded-xl bg-zinc-50 p-4">
                  <div className="text-xs text-zinc-500 mb-1">Phone</div>
                  <div className="font-semibold text-zinc-900">(555) 390-0765</div>
                </div>
                <div className="rounded-xl bg-zinc-50 p-4">
                  <div className="text-xs text-zinc-500 mb-1">Reason</div>
                  <div className="font-semibold text-zinc-900">Appointment</div>
                </div>
                <div className="rounded-xl bg-zinc-50 p-4">
                  <div className="text-xs text-zinc-500 mb-1">Pet</div>
                  <div className="font-semibold text-zinc-900">Dobby</div>
                </div>
              </div>

              {/* Summary */}
              <div className="rounded-xl bg-zinc-900 p-4">
                <div className="text-xs text-zinc-500 mb-2">AI Summary</div>
                <p className="text-sm text-white leading-relaxed">
                  Customer called to schedule an appointment for pet Dobby. 
                  Collected contact info and confirmed booking. Tone was polite and cooperative.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* What's included - Pills below */}
        <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
          {[
            "Email summaries",
            "Call outcomes",
            "Customer details",
            "Next steps",
            "Recordings link",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 rounded-full bg-zinc-100 px-4 py-2 text-sm text-zinc-600"
            >
              <Check className="h-4 w-4 text-emerald-500" />
              {item}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
