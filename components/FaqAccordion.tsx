"use client";
import { useState } from "react";

const FAQS =   [
    {
      "q": "How accurate is this electric car vs petrol cost calculator?",
      "a": "The calculator provides a solid estimate based on the inputs you supply, but real-world costs can vary. Factors like driving style, seasonal efficiency changes, and fluctuating fuel or electricity prices will affect your actual savings. Use it as a planning guide rather than a precise financial forecast."
    },
    {
      "q": "What MPG figure should I use for my petrol car?",
      "a": "Use the real-world fuel economy figure rather than the manufacturer's official rating, which is often tested under ideal conditions. You can find a realistic figure by dividing the miles you drove on your last full tank by the gallons of fuel it took to refill. Many drivers find their real-world MPG is 10 to 20 percent lower than the official rating."
    },
    {
      "q": "Why does the charging method affect the cost calculation?",
      "a": "Home charging is almost always cheaper than using public charging networks, which typically charge a premium per kWh or per minute to cover infrastructure and profit margins. If you rely mainly on public chargers, your effective cost per mile for the EV will be noticeably higher. Selecting the right charging method gives you a more realistic comparison."
    },
    {
      "q": "Does this calculator include the purchase price of the vehicles?",
      "a": "No, this tool focuses exclusively on running costs related to fuel and charging. Electric vehicles often have a higher upfront purchase price than equivalent petrol cars, which is a significant factor in the total cost of ownership. For a complete picture, you should add depreciation, insurance, and maintenance costs to the figures shown here."
    },
    {
      "q": "How do I find my EV's miles per kWh figure?",
      "a": "Your EV's onboard computer will usually display a real-time or average efficiency reading in miles per kWh or kWh per 100 miles. You can also find published estimates from sources like the EPA or manufacturer spec sheets. A typical modern EV achieves between 3 and 4.5 miles per kWh under normal driving conditions."
    },
    {
      "q": "Are maintenance costs factored into this comparison?",
      "a": "This calculator covers fuel and charging costs only and does not include maintenance. In general, EVs have lower maintenance costs because they have fewer moving parts, no oil changes, and regenerative braking that extends brake life. However, tyre wear can be similar or slightly higher on heavier EVs, and battery replacement is a potential long-term cost."
    },
    {
      "q": "How does electricity price variation affect my EV savings?",
      "a": "Electricity prices vary significantly by region, time of day, and tariff type. If you charge on an off-peak or overnight rate, your effective cost per kWh could be substantially lower than the average grid rate, boosting your savings. Conversely, if electricity prices in your area are unusually high, the cost advantage of an EV over petrol shrinks considerably."
    },
    {
      "q": "Is this calculator suitable for diesel car comparisons too?",
      "a": "The calculator is designed around petrol pricing, but you can use it for a rough diesel comparison by entering your diesel car's MPG equivalent and adjusting the fuel price to match your local diesel cost per gallon. Diesel typically delivers better fuel economy than petrol, so make sure your MPG figure reflects your actual diesel consumption for an accurate result."
    }
  ];

export function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="px-4 md:px-6 py-16 bg-[#f6f8fa]">
      <div className="mx-auto max-w-[860px]">
        <h2 className="text-[28px] font-bold mb-8">Frequently asked questions</h2>
        <div className="flex flex-col gap-3">
          {FAQS.map((faq, i) => (
            <div key={i} className="rounded-xl border border-[#e7e7e7] bg-white overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left font-semibold text-[15px] hover:bg-[#f6f8fa] transition-colors"
              >
                {faq.q}
                <span className="ml-4 flex-shrink-0 text-[#1a6fe8] text-[20px] font-light leading-none">
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
