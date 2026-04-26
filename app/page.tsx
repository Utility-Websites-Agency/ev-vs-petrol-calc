import { DeferredSections } from "@/components/DeferredSections";
import { HomeNav } from "@/components/HomeNav";
import { SiteFooter } from "@/components/SiteFooter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "https://ev-vs-petrol-calc.com" },
};

const HOW_STEPS =   [
    {
      "title": "Enter your current driving habits",
      "body": "Tell us how many miles or kilometers you drive each week and the current petrol price in your area. This gives us an accurate baseline for your fuel spend."
    },
    {
      "title": "Set your electric vehicle details",
      "body": "Input the EV's battery size, its real-world efficiency rating, and the electricity rate you pay at home or at public chargers. We use these figures to calculate your true charging cost."
    },
    {
      "title": "Add purchase and ownership costs",
      "body": "Provide the purchase price, any government incentives, insurance estimates, and expected maintenance costs for both vehicles. This ensures the comparison goes beyond fuel alone."
    },
    {
      "title": "Review your full cost breakdown",
      "body": "See a clear side-by-side breakdown of annual running costs, the total cost of ownership over your chosen period, and the exact point at which the EV pays for itself."
    }
  ];

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f6f8fa] font-sans text-[#1f2328]">
      <HomeNav />

      {/* Hero — server-rendered for LCP */}
      <section className="px-4 md:px-6 pt-16 pb-10">
        <div className="mx-auto max-w-[860px] text-center">
          <span className="inline-block mb-4 rounded-full bg-[#1a6fe8]/10 px-4 py-1.5 text-[13px] font-semibold text-[#1a6fe8]">
            Free · No sign up required
          </span>
          <h1 className="text-[36px] md:text-[52px] font-extrabold tracking-tight leading-[1.1] mb-4">
            Electric car vs petrol{" "}
            <span className="text-[#1a6fe8]">cost calculator</span>
          </h1>
          <p className="text-[18px] text-[#5f676f] leading-relaxed max-w-xl mx-auto mb-8">
            Enter your driving habits and local fuel prices to see a full cost comparison between electric and petrol vehicles over any time period.
          </p>
        </div>
      </section>

      {/* Calculator + FAQ — deferred client bundle */}
      <DeferredSections />

      {/* How it works */}
      <section className="px-4 md:px-6 py-16 bg-white">
        <div className="mx-auto max-w-[860px]">
          <h2 className="text-[28px] font-bold mb-2">How it works</h2>
          <p className="text-[16px] text-[#5f676f] mb-10">Get your personalized cost comparison in under two minutes by following these simple steps.</p>
          <div className="grid gap-6 md:grid-cols-3">
            {HOW_STEPS.map((step, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1a6fe8] text-white flex items-center justify-center text-[14px] font-bold">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-[16px] mb-1">{step.title}</h3>
                  <p className="text-[14px] text-[#5f676f] leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "EV vs Petrol Cost Calculator",
            description: "A free online calculator that compares the total cost of ownership between electric vehicles and petrol cars, including fuel, charging, insurance, and depreciation.",
            url: "https://ev-vs-petrol-calc.com",
            applicationCategory: "FinanceApplication",
            operatingSystem: "All",
            offers: { "@type": "Offer", price: "0", priceCurrency: "AUD" },
          }),
        }}
      />

      <SiteFooter />
    </div>
  );
}
