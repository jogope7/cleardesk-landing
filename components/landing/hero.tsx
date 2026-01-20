"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/landing/container";
import { Headphones, Phone } from "lucide-react";

type HeroProps = {
  onHearExamples: () => void;
  onBookDemo: () => void;
};

type Conversation = {
  caller: string;
  language: "en" | "es";
  messages: { from: "ai" | "caller"; text: string }[];
};

// Simulated conversation lines
const conversations: Conversation[] = [
  {
    caller: "Maria Garcia",
    language: "en",
    messages: [
      { from: "ai", text: "Good morning! How can I help you today?" },
      { from: "caller", text: "Hi, I'd like to schedule a grooming appointment for my dog." },
      { from: "ai", text: "Of course! What's your dog's name and your preferred date?" },
      { from: "caller", text: "His name is Buddy. Thursday afternoon if possible." },
      { from: "ai", text: "Perfect! I have Thursday at 2 PM available. Should I book that?" },
      { from: "caller", text: "Yes, that works great!" },
      { from: "ai", text: "Done! You're booked for Thursday at 2 PM. We'll send a confirmation." },
    ],
  },
  {
    caller: "James Wilson",
    language: "en",
    messages: [
      { from: "ai", text: "Hello, this is the AI assistant. How may I help?" },
      { from: "caller", text: "I need to reschedule my cleaning appointment." },
      { from: "ai", text: "No problem! What's your name so I can pull up your appointment?" },
      { from: "caller", text: "James Wilson. I was scheduled for Monday." },
      { from: "ai", text: "Found it! Would Tuesday or Wednesday work better for you?" },
      { from: "caller", text: "Tuesday morning would be perfect." },
      { from: "ai", text: "You're all set for Tuesday at 9 AM. See you then!" },
    ],
  },
  {
    caller: "Sofia Martinez",
    language: "es",
    messages: [
      { from: "ai", text: "¡Hola! ¿En qué puedo ayudarle?" },
      { from: "caller", text: "Necesito una cita para cambio de aceite." },
      { from: "ai", text: "¡Claro! ¿Qué día le funciona mejor?" },
      { from: "caller", text: "¿Tienen disponibilidad mañana?" },
      { from: "ai", text: "Sí, tenemos espacio mañana a las 10 AM. ¿Le reservo?" },
      { from: "caller", text: "Perfecto, gracias." },
      { from: "ai", text: "¡Listo! Quedó agendado para mañana a las 10 AM. ¡Hasta pronto!" },
    ],
  },
  {
    caller: "Carlos Mendez",
    language: "es",
    messages: [
      { from: "ai", text: "Buenas tardes, ¿cómo puedo asistirle hoy?" },
      { from: "caller", text: "Quiero hacer una reservación para el viernes." },
      { from: "ai", text: "Por supuesto. ¿A qué hora le gustaría?" },
      { from: "caller", text: "A las 7 de la noche, para 4 personas." },
      { from: "ai", text: "Tenemos disponibilidad. ¿A nombre de quién la pongo?" },
      { from: "caller", text: "Carlos Mendez." },
      { from: "ai", text: "Perfecto, Carlos. Reservación confirmada para viernes a las 7 PM." },
    ],
  },
];

export function Hero({ onHearExamples, onBookDemo }: HeroProps) {
  const [language, setLanguage] = React.useState<"en" | "es">("en");
  const [convIndex, setConvIndex] = React.useState(0);
  const [msgIndex, setMsgIndex] = React.useState(0);
  const [callTime, setCallTime] = React.useState(0);
  const [isAnimating, setIsAnimating] = React.useState(false);

  // Filter conversations by language
  const filteredConversations = conversations.filter((c) => c.language === language);
  const currentConv = filteredConversations[convIndex % filteredConversations.length];
  const currentMessage = currentConv.messages[msgIndex];

  // Reset when language changes
  React.useEffect(() => {
    setConvIndex(0);
    setMsgIndex(0);
    setCallTime(0);
  }, [language]);

  // Cycle through messages one at a time
  React.useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      
      setTimeout(() => {
        setMsgIndex((prev) => {
          if (prev >= currentConv.messages.length - 1) {
            // Move to next conversation
            setConvIndex((c) => (c + 1) % filteredConversations.length);
            setCallTime(0);
            return 0;
          }
          return prev + 1;
        });
        setIsAnimating(false);
      }, 300);
    }, 3000);

    return () => clearInterval(timer);
  }, [convIndex, currentConv.messages.length, filteredConversations.length]);

  // Call timer
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCallTime((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [convIndex, language]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <section className="relative overflow-hidden pt-32 pb-16">
      {/* Subtle background accent */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-0 top-0 h-[500px] w-[500px] -translate-y-1/4 translate-x-1/4 rounded-full bg-gradient-to-br from-emerald-100/40 to-transparent blur-3xl" />
        <div className="absolute left-0 bottom-0 h-[400px] w-[400px] translate-y-1/4 -translate-x-1/4 rounded-full bg-gradient-to-tr from-amber-100/40 to-transparent blur-3xl" />
      </div>

      <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
        {/* Left: Copy */}
        <div className="space-y-10">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-4 py-1.5 text-sm text-zinc-600">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              For businesses with high call volume
            </div>

            <h1 className="text-[2.75rem] font-bold leading-[1.1] tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
              Your Calls Deserve Better Than Voicemail.
              <br />
              <span className="text-zinc-400">Our AI Answers them.</span>
            </h1>

            <p className="max-w-md text-xl text-zinc-500">
              AI that answers, routes, and manages your calls—in English and Spanish. 24/7. Installed and working from day one.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Button
              onClick={onHearExamples}
              size="lg"
              className="h-12 gap-2 rounded-full bg-zinc-900 px-6 text-base shadow-lg shadow-zinc-300 hover:bg-zinc-800"
            >
              <Headphones className="h-5 w-5" />
              Hear real call examples
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={onBookDemo}
              className="h-12 rounded-full border-zinc-300 px-6 text-base"
            >
              Book a demo
            </Button>
          </div>

          <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100">
                <Phone className="h-4 w-4 text-emerald-600" />
              </div>
              <span className="text-zinc-600">
                <strong className="text-zinc-900">1,500+</strong> calls handled monthly
              </span>
            </div>
          </div>
        </div>

        {/* Right: Live Conversation Simulator */}
        <div className="relative lg:pl-8">
          <div className="overflow-hidden rounded-3xl bg-zinc-900 shadow-2xl">
            {/* Call Header */}
            <div className="flex items-center justify-center gap-2 border-b border-zinc-800 px-6 py-4">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                <span className="text-sm font-medium text-white">Current Call</span>
              </div>
              <span className="text-sm text-zinc-500">{formatTime(callTime)}</span>
            </div>

            {/* Single Message Display */}
            <div className="min-h-[280px] p-6 flex flex-col">
              {/* Speaker Label */}
              <div className="flex items-center gap-2 mb-4">
                <div className={`flex h-8 w-8 items-center justify-center rounded-full ${
                  currentMessage.from === "ai" ? "bg-emerald-600" : "bg-zinc-700"
                }`}>
                  {currentMessage.from === "ai" ? (
                    <Phone className="h-4 w-4 text-white" />
                  ) : (
                    <span className="text-xs font-medium text-white">
                      {currentConv.caller.split(" ").map(n => n[0]).join("")}
                    </span>
                  )}
                </div>
                <span className="text-sm text-zinc-400">
                  {currentMessage.from === "ai" ? "ClearDesk AI" : currentConv.caller}
                </span>
              </div>

              {/* Message Text - Slides up */}
              <div className="flex-1 flex items-center">
                <p
                  className={`text-2xl font-medium leading-relaxed text-white transition-all duration-300 ${
                    isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
                  }`}
                >
                  {currentMessage.text}
                </p>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-zinc-800 px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-1">
                    {filteredConversations.map((_, i) => (
                      <div
                        key={i}
                        className={`h-2 w-2 rounded-full border border-zinc-900 ${
                          i === convIndex % filteredConversations.length ? "bg-emerald-500" : "bg-zinc-700"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-zinc-500">
                    {(convIndex % filteredConversations.length) + 1} of {filteredConversations.length}
                  </span>
                </div>
                <button className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500/20 text-red-400 hover:bg-red-500/30 transition">
                  <Phone className="h-4 w-4 rotate-[135deg]" />
                </button>
              </div>
            </div>
          </div>

          {/* Language badges - Clickable */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            <button
              onClick={() => setLanguage("en")}
              className={`rounded-full px-4 py-2 text-xs font-medium shadow-lg border transition-all ${
                language === "en"
                  ? "bg-emerald-500 text-white border-emerald-500"
                  : "bg-white text-zinc-700 border-zinc-200 hover:border-zinc-300"
              }`}
            >
              English
            </button>
            <button
              onClick={() => setLanguage("es")}
              className={`rounded-full px-4 py-2 text-xs font-medium shadow-lg border transition-all ${
                language === "es"
                  ? "bg-emerald-500 text-white border-emerald-500"
                  : "bg-white text-zinc-700 border-zinc-200 hover:border-zinc-300"
              }`}
            >
              Spanish
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
