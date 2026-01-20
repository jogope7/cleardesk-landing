"use client";

import * as React from "react";

import { SiteHeader } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { WhatYouGet } from "@/components/landing/what-you-get";
import { PainSection } from "@/components/landing/pain";
import { ExamplesSection, type ExampleCategory } from "@/components/landing/examples";
import { DashboardProof } from "@/components/landing/dashboard-proof";
import { AIIntelligenceSection } from "@/components/landing/ai-intelligence";
import { InstallationSection } from "@/components/landing/installation";
import { InstallOptions } from "@/components/landing/install-options";
import { UseCasesSection } from "@/components/landing/use-cases";
import { IntegrationsSection } from "@/components/landing/integrations";
import { SummariesSection } from "@/components/landing/summaries";
import { WhyDifferentSection } from "@/components/landing/why-different";
import { CalculatorPreview } from "@/components/landing/calculator-preview";
import { PricingSection } from "@/components/landing/pricing";
import { FinalCta } from "@/components/landing/final-cta";

const scrollToId = (id: string) => {
  const element = document.getElementById(id);
  if (!element) return;
  element.scrollIntoView({ behavior: "smooth", block: "start" });
};

export function LandingPage() {
  const [examplesTab, setExamplesTab] = React.useState<ExampleCategory>("All");
  const [highlightedExample, setHighlightedExample] = React.useState<string | null>(null);

  const handleHearExamples = () => {
    setExamplesTab("All");
    setHighlightedExample(null);
    scrollToId("examples");
  };

  const handleBookDemo = () => {
    window.open("https://calendly.com/jose-cleardesk/30-min-meeting", "_blank");
  };

  const handleTabChange = (tab: ExampleCategory) => {
    setExamplesTab(tab);
    setHighlightedExample(null);
  };

  const handleSelectExample = (exampleId: string) => {
    setExamplesTab("All");
    setHighlightedExample(exampleId);
    scrollToId("examples");
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <SiteHeader />
      <main>
        <Hero onHearExamples={handleHearExamples} onBookDemo={handleBookDemo} />
        <PainSection />
        <WhatYouGet />
        <ExamplesSection
          tab={examplesTab}
          onTabChange={handleTabChange}
          highlightedId={highlightedExample}
        />
        <DashboardProof />
        <AIIntelligenceSection />
        <InstallationSection />
        <InstallOptions onSelectExample={handleSelectExample} />
        <UseCasesSection />
        <IntegrationsSection />
        <SummariesSection />
        <WhyDifferentSection />
        <CalculatorPreview />
        <PricingSection />
        <FinalCta />
      </main>
    </div>
  );
}

