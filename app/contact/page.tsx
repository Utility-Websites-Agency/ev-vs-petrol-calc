import type { Metadata } from "next";
import Link from "next/link";
import { HomeNav } from "@/components/HomeNav";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Contact | EV vs Petrol Cost Calculator",
  description: "Get in touch with the EV vs Petrol team. Questions, corrections, or feedback about our calculator.",
  alternates: { canonical: "https://ev-vs-petrol-calc.com/contact" },
};

const FS = { fontVariationSettings: "'wght' 510", fontFeatureSettings: '"cv01", "ss03"' } as const;
const FSB = { fontVariationSettings: "'wght' 590", fontFeatureSettings: '"cv01", "ss03"' } as const;

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen" style={{ background: "#08090a" }}>
      <HomeNav />
      <main className="flex-1 px-6 py-16">
        <div className="mx-auto max-w-[720px]">
          <h1 className="text-[32px] text-[#f7f8f8] mb-4" style={{ ...FSB, letterSpacing: "-0.7px" }}>Contact us</h1>
          <p className="text-[17px] text-[#8a8f98] leading-[28px] mb-10" style={FS}>
            Have a question about the calculator, found an error in the car data, or want to suggest a new feature?
            We welcome all feedback.
          </p>

          <section className="mb-10">
            <h2 className="text-[20px] text-[#f7f8f8] mb-3" style={{ ...FSB, letterSpacing: "-0.4px" }}>Email</h2>
            <p className="text-[15px] text-[#8a8f98] leading-[26px]" style={FS}>
              The best way to reach us:{" "}
              <a href="mailto:hello@ev-vs-petrol-calc.com" className="text-[#7170ff] hover:text-[#828fff] transition-colors">
                hello@ev-vs-petrol-calc.com
              </a>
            </p>
            <p className="text-[15px] text-[#8a8f98] leading-[26px] mt-2" style={FS}>
              We aim to respond within 2–3 business days.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-[20px] text-[#f7f8f8] mb-3" style={{ ...FSB, letterSpacing: "-0.4px" }}>Common questions</h2>
            <div className="flex flex-col gap-3">
              {[
                {
                  q: "Is the car data up to date?",
                  a: "We update vehicle efficiency data periodically using manufacturer specifications and independent test results. If you notice an inaccuracy for a specific make and model, email us with the source and we will review it.",
                },
                {
                  q: "Can I suggest a car that's missing from the database?",
                  a: "Yes — email us the make, model, variant, and efficiency figure (L/100km or MPG, plus kWh/100km for EVs) and we will add it.",
                },
                {
                  q: "Do you offer personalised financial advice?",
                  a: "No. EV vs Petrol is a free estimation tool only. We are not financial advisors. For a purchase decision involving significant money, consult a qualified professional.",
                },
              ].map(({ q, a }) => (
                <div key={q} className="rounded-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] px-5 py-4">
                  <p className="text-[14px] text-[#f7f8f8] mb-1" style={FSB}>{q}</p>
                  <p className="text-[13px] text-[#8a8f98] leading-[22px]" style={FS}>{a}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <div className="flex gap-4 flex-wrap">
              <Link href="/about" className="text-[13px] text-[#7170ff] hover:text-[#828fff] transition-colors" style={FS}>About us</Link>
              <Link href="/privacy-policy" className="text-[13px] text-[#7170ff] hover:text-[#828fff] transition-colors" style={FS}>Privacy policy</Link>
              <Link href="/blog" className="text-[13px] text-[#7170ff] hover:text-[#828fff] transition-colors" style={FS}>EV guides</Link>
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
