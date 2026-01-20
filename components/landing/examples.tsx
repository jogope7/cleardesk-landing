"use client";

import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/landing/container";
import { cn } from "@/lib/utils";
import { Headphones, Play, Phone, Pause } from "lucide-react";
import * as React from "react";

export type ExampleCategory = "All" | "Sales" | "Customer Service" | "Operations" | "Spanish";

export type AudioExample = {
  id: string;
  title: string;
  description: string;
  language: "English" | "Spanish";
  category: "Sales" | "Customer Service" | "Operations";
  src: string;
};

const tabs: ExampleCategory[] = [
  "All",
  "Sales",
  "Customer Service",
  "Operations",
  "Spanish",
];

export const audioExamples: AudioExample[] = [
  {
    id: "sales-en",
    title: "Sales Call — English",
    description: "Lead qualification and booking.",
    language: "English",
    category: "Sales",
    src: "/audio/sales-en.mp3",
  },
  {
    id: "sales-es",
    title: "Sales Call — Spanish",
    description: "Same flow, in Spanish.",
    language: "Spanish",
    category: "Sales",
    src: "/audio/sales-es.mp3",
  },
  {
    id: "support",
    title: "Customer Service Call",
    description: "FAQs handled with a clean resolution.",
    language: "English",
    category: "Customer Service",
    src: "/audio/support.mp3",
  },
  {
    id: "scheduling",
    title: "Scheduling / Operations Call",
    description: "Booking and confirmation handled end to end.",
    language: "English",
    category: "Operations",
    src: "/audio/scheduling.mp3",
  },
  {
    id: "overflow",
    title: "Safety Net Takeover",
    description: "Overflow calls answered instantly.",
    language: "English",
    category: "Operations",
    src: "/audio/overflow.mp3",
  },
  {
    id: "escalation",
    title: "Escalation to Human",
    description: "Handoff when a human is needed.",
    language: "English",
    category: "Customer Service",
    src: "/audio/escalation.mp3",
  },
];

const filterExamples = (tab: ExampleCategory) => {
  if (tab === "All") return audioExamples;
  if (tab === "Spanish") return audioExamples.filter((item) => item.language === "Spanish");
  return audioExamples.filter((item) => item.category === tab);
};

const categoryColors: Record<string, string> = {
  Sales: "bg-emerald-500",
  "Customer Service": "bg-blue-500",
  Operations: "bg-violet-500",
};

type ExamplesProps = {
  tab: ExampleCategory;
  onTabChange: (tab: ExampleCategory) => void;
  highlightedId?: string | null;
};

export function ExamplesSection({ tab, onTabChange, highlightedId }: ExamplesProps) {
  const [playingId, setPlayingId] = React.useState<string | null>(null);
  const audioRefs = React.useRef<Record<string, HTMLAudioElement | null>>({});

  const handlePlayPause = (id: string) => {
    const audio = audioRefs.current[id];
    if (!audio) return;

    if (playingId === id) {
      audio.pause();
      setPlayingId(null);
    } else {
      // Pause any currently playing audio
      if (playingId && audioRefs.current[playingId]) {
        audioRefs.current[playingId]?.pause();
      }
      audio.play();
      setPlayingId(id);
    }
  };

  return (
    <section id="examples" className="relative scroll-mt-24 py-16 overflow-hidden bg-zinc-950">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-0 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-gradient-to-br from-emerald-500/10 to-transparent blur-3xl" />
        <div className="absolute right-1/4 bottom-0 h-[500px] w-[500px] translate-y-1/2 rounded-full bg-gradient-to-tr from-blue-500/10 to-transparent blur-3xl" />
      </div>

      <Container className="relative z-10 space-y-12">
        {/* Header */}
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 px-4 py-1.5 text-sm font-medium text-emerald-400">
            <Headphones className="h-4 w-4" />
            Real Examples
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Hear real call examples
          </h2>
          <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto">
            No scripts. No demos. These are real conversations from production systems.
          </p>
        </div>

        {/* Tab Pills */}
        <div className="flex flex-wrap justify-center gap-2">
          {tabs.map((item) => (
            <button
              key={item}
              onClick={() => onTabChange(item)}
              className={cn(
                "rounded-full px-5 py-2.5 text-sm font-medium transition-all",
                tab === item
                  ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/25"
                  : "bg-zinc-800 border border-zinc-700 text-zinc-300 hover:bg-zinc-700 hover:text-white"
              )}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Audio Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filterExamples(tab).map((example) => {
            const isHighlighted = highlightedId === example.id;
            const isPlaying = playingId === example.id;
            
            return (
              <div
                key={example.id}
                className={cn(
                  "group rounded-2xl border bg-zinc-900 p-5 transition-all",
                  isHighlighted
                    ? "border-emerald-500 ring-2 ring-emerald-500/20"
                    : "border-zinc-800 hover:border-zinc-700"
                )}
              >
                {/* Top row: Play button + Info */}
                <div className="flex items-start gap-4">
                  {/* Play Button */}
                  <button
                    onClick={() => handlePlayPause(example.id)}
                    className={cn(
                      "flex h-14 w-14 shrink-0 items-center justify-center rounded-xl transition-all",
                      isPlaying
                        ? "bg-emerald-500 text-white"
                        : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white"
                    )}
                  >
                    {isPlaying ? (
                      <Pause className="h-6 w-6" fill="currentColor" />
                    ) : (
                      <Play className="h-6 w-6 ml-1" fill="currentColor" />
                    )}
                  </button>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-white truncate">{example.title}</h3>
                    <p className="text-sm text-zinc-500 mt-0.5">{example.description}</p>
                    
                    {/* Badges */}
                    <div className="flex flex-wrap gap-2 mt-3">
                      <span className={cn(
                        "inline-flex h-1.5 w-1.5 rounded-full",
                        categoryColors[example.category]
                      )} />
                      <span className="text-xs text-zinc-500">{example.category}</span>
                      <span className="text-zinc-700">·</span>
                      <span className="text-xs text-zinc-500">{example.language}</span>
                    </div>
                  </div>
                </div>

                {/* Hidden audio element */}
                <audio
                  ref={(el) => { audioRefs.current[example.id] = el; }}
                  src={example.src}
                  preload="none"
                  onEnded={() => setPlayingId(null)}
                />

                {/* Playing indicator */}
                {isPlaying && (
                  <div className="mt-4 flex items-center gap-2 text-emerald-400">
                    <div className="flex gap-0.5">
                      <span className="h-3 w-0.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="h-4 w-0.5 rounded-full bg-emerald-400 animate-pulse" style={{ animationDelay: "0.1s" }} />
                      <span className="h-2 w-0.5 rounded-full bg-emerald-400 animate-pulse" style={{ animationDelay: "0.2s" }} />
                      <span className="h-5 w-0.5 rounded-full bg-emerald-400 animate-pulse" style={{ animationDelay: "0.3s" }} />
                      <span className="h-3 w-0.5 rounded-full bg-emerald-400 animate-pulse" style={{ animationDelay: "0.4s" }} />
                    </div>
                    <span className="text-xs font-medium">Now playing</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom note */}
        <div className="flex items-center justify-center gap-2 text-zinc-500">
          <Phone className="h-4 w-4" />
          <span className="text-sm">This is what your callers will hear.</span>
        </div>
      </Container>
    </section>
  );
}
