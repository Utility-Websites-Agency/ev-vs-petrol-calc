"use client";
import dynamic from "next/dynamic";

const CalculatorSection = dynamic(() => import("./CalculatorSection").then((m) => m.CalculatorSection), {
  ssr: false,
  loading: () => <div style={{ minHeight: 480 }} />,
});

const FaqAccordion = dynamic(() => import("./FaqAccordion").then((m) => m.FaqAccordion), {
  ssr: false,
  loading: () => <div style={{ minHeight: 200 }} />,
});

export function DeferredSections() {
  return (
    <>
      <CalculatorSection />
      <FaqAccordion />
    </>
  );
}
