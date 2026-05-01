import { DeferredSections } from "@/components/DeferredSections";
import { HomeNav } from "@/components/HomeNav";
import { SiteFooter } from "@/components/SiteFooter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "https://www.evrunningcosts.com" },
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
    body: "Get your annual and monthly savings, petrol vs EV running costs side by side, and estimated CO₂ reduction — instantly.",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans text-[#1f2328]">
      <HomeNav />

      {/* Hero */}
      <section className="px-4 md:px-6 pt-16 pb-12">
        <div className="mx-auto max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: copy */}
          <div className="flex flex-col items-start">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#e7e7e7] bg-[#f6f8fa] px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span className="text-[13px] text-[#4a4c4d]">Free · No sign-up · Supports km and miles</span>
            </div>
            <h1 className="text-[36px] md:text-[52px] font-semibold tracking-tight leading-[1.08] mb-5 text-[#1f2328]">
              Stop guessing what an{" "}
              <span className="text-[#16a34a]">EV actually costs you</span>
            </h1>
            <p className="text-[18px] text-[#4a4c4d] leading-relaxed mb-8">
              Enter your car and the EV you&apos;re considering. Get your annual savings, break-even point, and CO₂ reduction — in under 2 minutes.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              <a
                href="#calculator"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-[15px] font-semibold text-white bg-[#16a34a] hover:bg-[#15803d] transition-colors"
              >
                Calculate my savings →
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-[15px] font-semibold text-[#343638] border border-[#e7e7e7] bg-white hover:bg-[#f6f8fa] transition-colors"
              >
                See how it works
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] text-[#4a4c4d]">
              <span className="flex items-center gap-1.5"><span className="text-[#16a34a]">✓</span> No account needed</span>
              <span className="flex items-center gap-1.5"><span className="text-[#16a34a]">✓</span> Real car database</span>
              <span className="flex items-center gap-1.5"><span className="text-[#16a34a]">✓</span> AU, UK &amp; US rates</span>
            </div>
          </div>

          {/* Right: results preview card */}
          <div className="w-full lg:flex lg:justify-end">
            <div className="w-full max-w-[480px] mx-auto lg:mx-0 rounded-2xl bg-white p-6 shadow-[0_20px_60px_-12px_rgba(0,0,0,0.18)]">
              {/* Card header */}
              <div className="flex items-center justify-between mb-5">
                <div>
                  <p className="text-[12px] font-semibold uppercase tracking-widest text-[#4a4c4d] mb-1">Sample result</p>
                  <p className="text-[13px] text-[#4a4c4d]">Tesla Model 3 vs Toyota Camry</p>
                </div>
                <span className="rounded-full bg-[#16a34a]/10 px-3 py-1 text-[12px] font-semibold text-[#16a34a]">EV wins</span>
              </div>

              {/* Big saving number */}
              <div className="rounded-xl bg-[#f6faf7] border border-[#16a34a]/20 px-5 py-4 mb-4 text-center">
                <p className="text-[13px] text-[#16a34a] font-semibold mb-1">Annual fuel saving</p>
                <p className="text-[44px] font-semibold text-[#1f2328] leading-none tracking-tight">$2,640</p>
                <p className="text-[13px] text-[#4a4c4d] mt-1">$220 / month</p>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="rounded-xl bg-[#f6f8fa] border border-[#e7e7e7] px-4 py-3">
                  <p className="text-[12px] text-[#4a4c4d] mb-1">Petrol cost / yr</p>
                  <p className="text-[20px] font-semibold text-[#1f2328]">$3,840</p>
                </div>
                <div className="rounded-xl bg-[#f6f8fa] border border-[#e7e7e7] px-4 py-3">
                  <p className="text-[12px] text-[#4a4c4d] mb-1">EV cost / yr</p>
                  <p className="text-[20px] font-semibold text-[#1f2328]">$1,200</p>
                </div>
                <div className="rounded-xl bg-[#f6f8fa] border border-[#e7e7e7] px-4 py-3">
                  <p className="text-[12px] text-[#4a4c4d] mb-1">CO₂ saved / yr</p>
                  <p className="text-[20px] font-semibold text-[#1f2328]">2.1 t</p>
                </div>
              </div>

              <a
                href="#calculator"
                className="flex items-center justify-center w-full rounded-lg bg-[#16a34a] hover:bg-[#15803d] px-5 py-3 text-[14px] font-semibold text-white transition-colors"
              >
                Calculate your numbers →
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Calculator + FAQ */}
      <div id="calculator">
        <DeferredSections />
      </div>

      {/* How it works */}
      <section id="how-it-works" className="px-4 md:px-6 py-20 bg-white border-t border-[#e7e7e7]">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-[28px] font-semibold tracking-tight text-[#1f2328] mb-2 text-center">How it works</h2>
          <p className="text-[15px] text-[#4a4c4d] mb-12 text-center">No account needed. Results in under two minutes.</p>
          <div className="grid gap-4 md:grid-cols-2">
            {HOW_STEPS.map((step, i) => (
              <div key={i} className="flex gap-4 rounded-xl border border-[#e7e7e7] bg-[#f6f8fa] p-5">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#16a34a]/10 border border-[#16a34a]/20 flex items-center justify-center text-[13px] font-bold text-[#16a34a]">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-[14px] font-bold text-[#1f2328] mb-1">{step.title}</h3>
                  <p className="text-[13px] text-[#4a4c4d] leading-relaxed">{step.body}</p>
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
            url: "https://www.evrunningcosts.com",
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
