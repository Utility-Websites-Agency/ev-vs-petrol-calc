"use client";
import { useState } from "react";

const FAQS = [
  {
    q: "How accurate is this electric car vs petrol cost calculator?",
    a: "The calculator provides a solid estimate based on the inputs you supply, but real-world costs can vary. Factors like driving style, seasonal efficiency changes, and fluctuating fuel or electricity prices will affect your actual savings. Use it as a planning guide rather than a precise financial forecast.",
  },
  {
    q: "What fuel economy figure should I use for my petrol car?",
    a: "Use the real-world figure rather than the manufacturer's official rating, which is often tested under ideal conditions. You can find a realistic figure by dividing the distance you drove on your last full tank by the fuel it took to refill. Most drivers find real-world efficiency is 10 to 20 percent lower than the official rating.",
  },
  {
    q: "Why does the charging method affect the cost calculation?",
    a: "Home charging is almost always cheaper than public charging networks, which typically charge a premium per kWh to cover infrastructure costs. If you rely mainly on public chargers, your effective cost per kilometer for the EV will be noticeably higher. Selecting the right charging method gives you a more realistic comparison.",
  },
  {
    q: "Does the EV price premium field affect the fuel cost results?",
    a: "No — the fuel and charging cost results are always shown regardless. The price premium field is optional and only used to calculate a break-even point: the number of years your annual fuel saving takes to recover the extra upfront cost of the EV.",
  },
  {
    q: "How do I find my EV's energy consumption figure?",
    a: "Your EV's onboard computer will usually display a real-time or average efficiency reading in kWh per 100 km. You can also find published estimates from manufacturer spec sheets or independent testing bodies. Typical modern EVs use between 14 and 22 kWh per 100 km under normal driving conditions.",
  },
  {
    q: "Are maintenance costs included in this comparison?",
    a: "This calculator covers fuel and charging costs only. In general, EVs have lower maintenance costs because they have fewer moving parts, no oil changes, and regenerative braking that extends brake life. Battery replacement is a potential long-term cost to consider for high-mileage owners.",
  },
  {
    q: "Is this calculator suitable for diesel car comparisons?",
    a: "Yes — select 'Diesel' as the fuel type in Step 1 and the calculator uses the correct CO₂ emissions figure. Enter your diesel car's real-world L/100km and your local diesel price per litre for an accurate result.",
  },
  {
    q: "How does CO₂ reduction get calculated?",
    a: "The calculator multiplies your estimated annual fuel consumption (in litres) by the standard CO₂ emissions factor for petrol (2.31 kg/litre) or diesel (2.68 kg/litre). This represents the tailpipe emissions avoided. It does not account for the upstream carbon cost of electricity generation, which varies by country and energy mix.",
  },
];

export function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="px-4 md:px-6 py-16 bg-[#f6f8fa]">
      <div className="mx-auto max-w-[860px]">
        <h2 className="text-[28px] font-bold text-[#1f2328] mb-8">Frequently asked questions</h2>
        <div className="flex flex-col gap-3">
          {FAQS.map((faq, i) => (
            <div key={i} className="rounded-xl border border-[#e7e7e7] bg-white overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left transition-colors hover:bg-[#f6f8fa] cursor-pointer"
              >
                <span className="text-[15px] font-semibold text-[#1f2328] pr-4">{faq.q}</span>
                <span className="flex-shrink-0 text-[#388053] text-[18px] font-light leading-none">
                  {open === i ? "−" : "+"}
                </span>
              </button>
              {open === i && (
                <div className="px-5 pb-4 text-[14px] text-[#5f676f] leading-relaxed border-t border-[#e7e7e7] pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
