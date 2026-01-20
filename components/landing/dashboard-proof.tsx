"use client";

import * as React from "react";
import { Container } from "@/components/landing/container";
import { Check, Phone, Clock, DollarSign, Users, RotateCcw, BarChart3 } from "lucide-react";

const bullets = [
  "Total calls",
  "Answered vs missed",
  "Calls handled by AI",
  "Calls escalated to humans",
  "Call outcomes (booked, resolved, routed)",
  "Money recovered + money still being lost",
];

const metrics = [
  { label: "Total Calls", value: "7,026", icon: Phone, color: "text-blue-600 bg-blue-100" },
  { label: "Unique Callers", value: "2,989", icon: Users, color: "text-emerald-600 bg-emerald-100" },
  { label: "Repeat Callers", value: "1,331", icon: RotateCcw, color: "text-amber-600 bg-amber-100" },
  { label: "Duration", value: "12,417m", icon: Clock, color: "text-violet-600 bg-violet-100" },
  { label: "Total Value", value: "$276,491", icon: DollarSign, color: "text-emerald-600 bg-emerald-100" },
];

const callsData = [
  { type: "Appointment", typeColor: "bg-emerald-100 text-emerald-700", value: "$200.00", customer: "(555) 123-****", time: "1:25 PM" },
  { type: "No Response", typeColor: "bg-zinc-100 text-zinc-600", value: "$0.00", customer: "(555) 234-****", time: "1:17 PM" },
  { type: "Appointment", typeColor: "bg-emerald-100 text-emerald-700", value: "$200.00", customer: "(555) 345-****", time: "1:10 PM" },
];

export function DashboardProof() {
  const [activeTab, setActiveTab] = React.useState<"logs" | "priority">("logs");

  // Auto-switch tabs every 5 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev === "logs" ? "priority" : "logs"));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-0 top-1/3 h-[500px] w-[500px] translate-x-1/3 rounded-full bg-gradient-to-br from-blue-50 to-transparent blur-3xl" />
        <div className="absolute left-0 bottom-1/4 h-[400px] w-[400px] -translate-x-1/3 rounded-full bg-gradient-to-tr from-emerald-50 to-transparent blur-3xl" />
      </div>

      <Container className="space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-sm text-blue-600">
            <BarChart3 className="h-4 w-4" />
            Full visibility
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl">
            You finally see what's happening
            <br className="hidden sm:block" />
            <span className="text-zinc-400"> on your phones.</span>
          </h2>
          <p className="text-lg text-zinc-500 max-w-2xl mx-auto sm:text-xl">
            Most businesses guess what happens on calls. ClearDesk shows you everything.
          </p>
        </div>

        <div className="mx-auto w-full max-w-5xl space-y-8">
          <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-xl shadow-zinc-200/50">
            <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-zinc-900">
                    {activeTab === "priority" ? "Priority Calls" : "Call Logs"}
                  </div>
                  <div className="text-sm text-zinc-500">
                    {activeTab === "priority"
                      ? "Calls needing attention"
                      : "Monitor call performance"}
                  </div>
                </div>
                
                {/* Tab Pills */}
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveTab("logs")}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                      activeTab === "logs"
                        ? "bg-zinc-900 text-white"
                        : "bg-zinc-100 text-zinc-600"
                    }`}
                  >
                    Logs
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("priority")}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                      activeTab === "priority"
                        ? "bg-zinc-900 text-white"
                        : "bg-zinc-100 text-zinc-600"
                    }`}
                  >
                    Priority
                  </button>
                </div>
              </div>

              {/* Call Logs View */}
              {activeTab === "logs" && (
                <div className="space-y-4">
                  {/* Metrics - Mobile: 2 cols, Desktop: 5 cols */}
                  <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-5">
                    {metrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="flex items-center gap-2 sm:gap-3 rounded-xl border border-zinc-100 bg-zinc-50/50 p-3 sm:p-4"
                      >
                        <div className={`flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg ${metric.color}`}>
                          <metric.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                        </div>
                        <div>
                          <div className="text-[10px] sm:text-xs text-zinc-500">{metric.label}</div>
                          <div className="text-sm sm:text-lg font-bold text-zinc-900">{metric.value}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Mobile: Card view */}
                  <div className="space-y-2 sm:hidden">
                    <div className="text-sm font-semibold text-zinc-900">Recent Calls</div>
                    {callsData.map((row, index) => (
                      <div key={index} className="rounded-lg border border-zinc-100 bg-zinc-50/50 p-3">
                        <div className="flex items-center justify-between mb-2">
                          <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${row.typeColor}`}>
                            {row.type}
                          </span>
                          <span className="text-xs text-zinc-500">{row.time}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-zinc-600">{row.customer}</span>
                          <span className="text-sm font-medium text-emerald-600">{row.value}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Desktop: Table view */}
                  <div className="hidden sm:block">
                    <div className="text-lg font-semibold text-zinc-900 mb-2">Call History</div>
                    <div className="overflow-hidden rounded-xl border border-zinc-200">
                      <div className="grid grid-cols-4 gap-2 bg-zinc-50 px-4 py-3 text-xs font-medium text-zinc-500">
                        <div>Call Type</div>
                        <div>Value</div>
                        <div>Customer</div>
                        <div>Time</div>
                      </div>
                      {callsData.map((row, index) => (
                        <div key={index} className="grid grid-cols-4 items-center gap-2 border-t border-zinc-100 px-4 py-3 text-sm">
                          <div>
                            <span className={`rounded-full px-2 py-1 text-xs font-medium ${row.typeColor}`}>
                              {row.type}
                            </span>
                          </div>
                          <div className="font-medium text-emerald-600">{row.value}</div>
                          <div className="text-zinc-600">{row.customer}</div>
                          <div className="text-zinc-500">{row.time}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Call Priority View */}
              {activeTab === "priority" && (
                <div className="space-y-2">
                  {[
                    { urgency: "4/10", urgencyColor: "text-amber-600 bg-amber-50", customer: "(555) 111-****", type: "No Response", status: "Needs Follow Up", statusColor: "bg-amber-100 text-amber-700" },
                    { urgency: "3/10", urgencyColor: "text-blue-600 bg-blue-50", customer: "(555) 222-****", type: "Unclear Intent", status: "Called", statusColor: "bg-emerald-100 text-emerald-700" },
                    { urgency: "5/10", urgencyColor: "text-orange-600 bg-orange-50", customer: "(555) 333-****", type: "Needs Info", status: "Pending", statusColor: "bg-zinc-100 text-zinc-700" },
                  ].map((row, index) => (
                    <div key={index} className="rounded-xl border border-zinc-100 bg-zinc-50/50 p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <span className={`rounded-full px-2 py-1 text-xs font-bold ${row.urgencyColor}`}>
                            {row.urgency}
                          </span>
                          <span className="font-medium text-zinc-900">{row.customer}</span>
                        </div>
                        <span className={`rounded-full px-2 py-1 text-xs font-medium ${row.statusColor}`}>
                          {row.status}
                        </span>
                      </div>
                      <div className="text-sm text-zinc-500">{row.type}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Bullets */}
          <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {bullets.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 shrink-0">
                  <Check className="h-3.5 w-3.5 text-white" />
                </div>
                <span className="text-sm sm:text-base text-zinc-700">{item}</span>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-center gap-3 rounded-full bg-zinc-100 px-4 sm:px-6 py-3 w-fit mx-auto">
            <Phone className="h-4 w-4 text-zinc-500" />
            <span className="text-xs sm:text-sm font-medium text-zinc-600">
              Your phone becomes software.
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
