import { DeferredSections } from "@/components/DeferredSections";
import { HomeNav } from "@/components/HomeNav";
import { SiteFooter } from "@/components/SiteFooter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "https://ev-vs-petrol-calc.com" },
};

const HOW_STEPS = [
  {
    title: "Pick your current petrol car",
    body: "Select your make, model, and variant. The calculator auto-fills your car's real-world fuel efficiency so you don't have to guess.",
  },
  {
    title: "Choose the EV you're considering",
    body: "Select any EV from our database and tell us how you'll mainly charge — at home, on public networks, or a mix. Electricity rates adjust automatically.",
  },
  {
    title: "Set your annual driving distance",
    body: "Pick a driving profile or enter a custom distance. The further you drive, the faster your fuel savings compound.",
  },
  {
    title: "See your full cost breakdown",
    body: "Get your annual and monthly savings, petrol vs EV running costs side by side, break-even timeline, and estimated CO₂ reduction — instantly.",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans text-[#1f2328]">
      <HomeNav />

      {/* Hero */}
      <section className="px-4 md:px-6 pt-20 pb-12 text-center">
        <div className="mx-auto max-w-[760px]">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#e7e7e7] bg-[#f6f8fa] px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span className="text-[13px] text-[#5f676f]">Free · No sign-up · Supports km and miles</span>
          </div>
          <h1 className="text-[38px] md:text-[56px] font-extrabold tracking-tight leading-[1.05] mb-5 text-[#1f2328]">
            Electric car vs petrol{" "}
            <span className="text-[#5e6ad2]">cost calculator</span>
          </h1>
          <p className="text-[17px] text-[#5f676f] leading-relaxed max-w-xl mx-auto mb-8">
            Enter your driving habits and local fuel prices to see a full cost comparison
            between electric and petrol vehicles — in under two minutes.
          </p>
          <a
            href="#calculator"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-[15px] font-semibold text-white bg-[#5e6ad2] hover:bg-[#7170ff] transition-colors"
          >
            Calculate my savings →
          </a>
        </div>
      </section>

      {/* Calculator + FAQ */}
      <div id="calculator">
        <DeferredSections />
      </div>

      {/* How it works */}
      <section className="px-4 md:px-6 py-20 bg-white border-t border-[#e7e7e7]">
        <div className="mx-auto max-w-[900px]">
          <h2 className="text-[28px] font-extrabold tracking-tight text-[#1f2328] mb-2 text-center">How it works</h2>
          <p className="text-[15px] text-[#5f676f] mb-12 text-center">No account needed. Results in under two minutes.</p>
          <div className="grid gap-4 md:grid-cols-2">
            {HOW_STEPS.map((step, i) => (
              <div key={i} className="flex gap-4 rounded-xl border border-[#e7e7e7] bg-[#f6f8fa] p-5">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#5e6ad2]/10 border border-[#5e6ad2]/20 flex items-center justify-center text-[13px] font-bold text-[#5e6ad2]">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-[14px] font-bold text-[#1f2328] mb-1">{step.title}</h3>
                  <p className="text-[13px] text-[#5f676f] leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "EV vs Petrol Cost Calculator",
            description: "Compare the total running cost of electric vehicles vs petrol cars. Enter your mileage, energy prices, and car details to see annual savings and break-even timeline.",
            url: "https://ev-vs-petrol-calc.com",
            applicationCategory: "FinanceApplication",
            operatingSystem: "Web",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          }),
        }}
      />

      <SiteFooter />
    </div>
  );
}
