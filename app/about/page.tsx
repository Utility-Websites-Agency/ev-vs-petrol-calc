import type { Metadata } from "next";
import Link from "next/link";
import { HomeNav } from "@/components/HomeNav";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "About | EV vs Petrol Cost Calculator",
  description: "EV vs Petrol is a free calculator that compares the running cost of electric and petrol vehicles. Learn about the tool and how it works.",
  alternates: { canonical: "https://www.evrunningcosts.com/about" },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-[#1f2328]">
      <HomeNav />
      <main className="flex-1 px-6 py-16">
        <div className="mx-auto max-w-[720px]">
          <h1 className="text-[32px] font-semibold tracking-tight text-[#1f2328] mb-4">About EV vs Petrol</h1>
          <p className="text-[17px] text-[#5f676f] leading-[28px] mb-10">
            A free, no-signup calculator for anyone who wants to know whether switching to an electric vehicle
            actually saves money given their specific driving habits and local energy prices.
          </p>

          <section className="mb-10">
            <h2_REPLACE text-[#1f2328] mb-3">Why we built this</h2>
            <p className="text-[16px] text-[#5f676f] leading-[28px] mb-4">
              Most EV vs petrol comparisons online give you averages. Average mileage. Average electricity prices.
              Average petrol cars. But your situation isn't average — you drive a specific car, pay a specific tariff,
              and cover a specific distance each year.
            </p>
            <p className="text-[16px] text-[#5f676f] leading-[28px]">
              This tool lets you enter your actual numbers and get a result that reflects your life, not a national
              average. Pick your exact petrol car, the EV you're considering, and your annual mileage. The calculator
              does the rest.
            </p>
          </section>

          <section className="mb-10">
            <h2_REPLACE text-[#1f2328] mb-3">What the calculator covers</h2>
            <ul className="flex flex-col gap-3">
              {[
                ["Fuel vs charging costs", "Annual and monthly running cost comparison between your petrol car and the EV, based on your local prices and driving distance."],
                ["Break-even analysis", "If you enter the price premium of the EV over the petrol alternative, the calculator tells you exactly how many years your fuel savings take to recover the extra cost."],
                ["CO₂ reduction estimate", "The tailpipe emissions avoided each year by switching from petrol or diesel to electric, based on your annual fuel consumption."],
                ["Multiple currencies and units", "Supports USD, EUR, GBP, AUD, and CAD. Switch between km/litres and miles/gallons at any time."],
              ].map(([title, desc]) => (
                <li key={title} className="rounded-xl border border-[#e7e7e7] bg-[#f6f8fa] px-5 py-4">
                  <p className="text-[15px] font-semibold text-[#1f2328] mb-1">{title}</p>
                  <p className="text-[14px] text-[#5f676f] leading-[22px]">{desc}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-10">
            <h2_REPLACE text-[#1f2328] mb-3">Accuracy and limitations</h2>
            <p className="text-[16px] text-[#5f676f] leading-[28px] mb-4">
              The calculator uses real-world efficiency data for a large database of petrol and EV models. Car data is
              sourced from manufacturer specifications and independent testing. Electricity and fuel prices use your
              inputs, not regional averages.
            </p>
            <p className="text-[16px] text-[#5f676f] leading-[28px]">
              Results are estimates. They do not account for depreciation, insurance, tyres, maintenance, or battery
              degradation over time. For a complete financial analysis before a purchase decision, consider all
              ownership costs, not just fuel and charging.
            </p>
          </section>

          <section className="mb-10">
            <h2_REPLACE text-[#1f2328] mb-3">Who is behind this</h2>
            <p className="text-[16px] text-[#5f676f] leading-[28px]">
              EV vs Petrol is an independent website. We are not affiliated with any car manufacturer, EV brand,
              energy company, or financial services provider. The site is funded by advertising. We have no commercial
              interest in whether you buy an EV or keep your petrol car.
            </p>
          </section>

          <section>
            <h2_REPLACE text-[#1f2328] mb-3">Get in touch</h2>
            <p className="text-[16px] text-[#5f676f] leading-[28px]">
              Questions, corrections, or feedback?{" "}
              <Link href="/contact" className="text-[#16a34a] hover:underline">Send us a message</Link>.
            </p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
