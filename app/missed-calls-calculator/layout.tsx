import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Missed Calls Revenue Calculator — ClearDesk",
  description:
    "Estimate the revenue lost to missed calls and see what ClearDesk can recover.",
};

export default function MissedCallsCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

