"use client";

import * as React from "react";
import { Container } from "@/components/landing/container";
import { TrendingUp, Headphones, Settings, Check, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

type Message = { from: "ai" | "caller"; text: string };

const useCases = [
  {
    id: "sales",
    title: "Sales",
    icon: TrendingUp,
    description: "Convert more inbound calls into customers.",
    items: [
      "Qualify leads instantly",
      "Book meetings automatically",
      "Catch every missed opportunity",
      "Protect your ad spend",
      "Follow up on warm leads",
    ],
    conversation: {
      caller: "New Lead",
      messages: [
        { from: "ai", text: "Hi, thanks for calling! How can I help you today?" },
        { from: "caller", text: "I saw your ad online. I'm interested in your services." },
        { from: "ai", text: "Great! Can I ask what specific service you're looking for?" },
        { from: "caller", text: "I need help with my business phones. We're missing too many calls." },
        { from: "ai", text: "I can definitely help with that. Let me book you a quick demo with our team. What day works best?" },
        { from: "caller", text: "Thursday afternoon would be perfect." },
        { from: "ai", text: "Done! You're booked for Thursday at 2 PM. You'll get a confirmation text shortly." },
      ] as Message[],
    },
  },
  {
    id: "support",
    title: "Customer Service",
    icon: Headphones,
    description: "Instant answers, zero wait times.",
    items: [
      "Handle FAQs automatically",
      "Reduce wait times to zero",
      "Eliminate voicemail completely",
      "Route complex issues to humans",
      "24/7 availability",
    ],
    conversation: {
      caller: "Sarah M.",
      messages: [
        { from: "ai", text: "Hi, thanks for calling! How can I help you today?" },
        { from: "caller", text: "I ordered a blender last week and it arrived damaged. I need to return it." },
        { from: "ai", text: "I'm sorry to hear that. I can help with the return. Do you have your order number?" },
        { from: "caller", text: "Yes, it's 4582-90." },
        { from: "ai", text: "Got it. I've initiated a return for order 4582-90. You'll receive a prepaid shipping label by email." },
        { from: "caller", text: "How long until I get my refund?" },
        { from: "ai", text: "Once we receive the item, your refund will process within 3-5 business days. Anything else?" },
      ] as Message[],
    },
  },
  {
    id: "operations",
    title: "Operations",
    icon: Settings,
    description: "Automate scheduling and coordination.",
    items: [
      "Scheduling & confirmations",
      "Dispatch coordination",
      "Appointment reminders",
      "Route to the right person",
      "Workflow automation",
    ],
    conversation: {
      caller: "Delivery Driver",
      messages: [
        { from: "ai", text: "Dispatch line. What's your driver ID?" },
        { from: "caller", text: "Driver 47. I finished the downtown route early." },
        { from: "ai", text: "Got it. I see 3 pending pickups near your location. Closest is 0.4 miles at 820 Market St." },
        { from: "caller", text: "I can take that. What's the package size?" },
        { from: "ai", text: "Small parcel, 2 lbs. Customer requested delivery by 4 PM. Assigning it to you now." },
        { from: "caller", text: "Done. Anything else in that area?" },
        { from: "ai", text: "One more at 850 Market St. I've added both to your route. Updated ETA sent to customers." },
      ] as Message[],
    },
  },
];

export function UseCasesSection() {
  const [activeTab, setActiveTab] = React.useState("sales");
  const [msgIndex, setMsgIndex] = React.useState(0);
  const [isAnimating, setIsAnimating] = React.useState(false);
  
  const activeCase = useCases.find((c) => c.id === activeTab)!;
  const currentMessage = activeCase.conversation.messages[msgIndex];

  // Reset message index when tab changes
  React.useEffect(() => {
    setMsgIndex(0);
  }, [activeTab]);

  // Cycle through messages
  React.useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      
      setTimeout(() => {
        setMsgIndex((prev) => {
          if (prev >= activeCase.conversation.messages.length - 1) {
            return 0;
          }
          return prev + 1;
        });
        setIsAnimating(false);
      }, 300);
    }, 3000);

    return () => clearInterval(timer);
  }, [activeTab, activeCase.conversation.messages.length]);

  return (
    <section className="py-24">
      <Container className="space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-4 py-1.5 text-sm text-zinc-600">
            <span className="h-1.5 w-1.5 rounded-full bg-zinc-400" />
            Use cases
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            How companies use ClearDesk
          </h2>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center gap-2">
          {useCases.map((caseItem) => (
            <button
              key={caseItem.id}
              onClick={() => setActiveTab(caseItem.id)}
              className={cn(
                "flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all",
                activeTab === caseItem.id
                  ? "bg-zinc-900 text-white"
                  : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
              )}
            >
              <caseItem.icon className="h-4 w-4" />
              {caseItem.title}
            </button>
          ))}
        </div>

        {/* Content: Centered */}
        <div className="max-w-3xl mx-auto space-y-6">
          {/* Conversation Simulator */}
          <div className="rounded-3xl bg-zinc-900 p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-sm font-medium text-zinc-400">Live {activeCase.title} Call</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-500">
                <Phone className="h-4 w-4" />
                <span className="text-sm font-mono">00:47</span>
              </div>
            </div>

            {/* Message Display */}
            <div className="min-h-[240px] flex flex-col">
              {/* Speaker */}
              <div className="flex items-center gap-2 mb-4">
                <div className={`flex h-8 w-8 items-center justify-center rounded-full ${
                  currentMessage.from === "ai" ? "bg-emerald-600" : "bg-zinc-700"
                }`}>
                  {currentMessage.from === "ai" ? (
                    <Phone className="h-4 w-4 text-white" />
                  ) : (
                    <span className="text-xs font-medium text-white">
                      {activeCase.conversation.caller.split(" ").map(n => n[0]).join("")}
                    </span>
                  )}
                </div>
                <span className="text-sm text-zinc-400">
                  {currentMessage.from === "ai" ? "ClearDesk AI" : activeCase.conversation.caller}
                </span>
              </div>

              {/* Message */}
              <div className="flex-1 flex items-center">
                <p
                  className={cn(
                    "text-xl font-medium leading-relaxed text-white transition-all duration-300",
                    isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
                  )}
                >
                  {currentMessage.text}
                </p>
              </div>

              {/* Progress dots */}
              <div className="flex items-center gap-1 mt-6">
                {activeCase.conversation.messages.map((_, i) => (
                  <div
                    key={i}
                    className={cn(
                      "h-1.5 rounded-full transition-all",
                      i === msgIndex ? "w-6 bg-emerald-500" : "w-1.5 bg-zinc-700"
                    )}
                  />
                ))}
              </div>
            </div>

            {/* Capabilities - Inside card at bottom */}
            <div className="mt-6 pt-6 border-t border-zinc-800">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-zinc-400">What it handles</span>
                <span className="text-xs text-zinc-500">{activeCase.items.length} capabilities</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {activeCase.items.map((item) => (
                  <div 
                    key={item} 
                    className="flex items-center gap-3 rounded-lg bg-zinc-800 px-4 py-3"
                  >
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20">
                      <Check className="h-3.5 w-3.5 text-emerald-400" />
                    </div>
                    <span className="text-sm font-medium text-white">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-zinc-500">
          One AI. Multiple departments. Real results.
        </p>
      </Container>
    </section>
  );
}
