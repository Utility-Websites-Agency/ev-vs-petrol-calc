import type { Metadata } from "next";
import Link from "next/link";
import { HomeNav } from "@/components/HomeNav";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Contact | EV vs Petrol Cost Calculator",
  description: "Get in touch with the EV vs Petrol team. Questions, corrections, or feedback about our calculator.",
  alternates: { canonical: "https://www.evrunningcosts.com/contact" },
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-[#1f2328]">
      <HomeNav />
      <main className="flex-1 px-6 py-16">
        <div className="mx-auto max-w-[720px]">
          <h1 className="text-[32px] font-semibold tracking-tight text-[#1f2328] mb-4">Contact us</h1>
          <p className="text-[17px] text-[#5f676f] leading-[28px] mb-10">
            Have a question about the calculator, found an error in the car data, or want to suggest a new feature?
            We welcome all feedback.
          </p>

          <section className="mb-10">
            <h2_REPLACE text-[#1f2328] mb-3">Email</h2>
            <p className="text-[16px] text-[#5f676f] leading-[28px]">
              The best way to reach us:{" "}
              <a href="mailto:hello@evrunningcosts.com" className="text-[#16a34a] hover:underline">
                hello@evrunningcosts.com
              </a>
            </p>
            <p className="text-[16px] text-[#5f676f] leading-[28px] mt-2">We aim to respond within 2–3 business days.</p>
          </section>

          <section className="mb-10">
            <h2_REPLACE text-[#1f2328] mb-3">Common questions</h2>
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
                <div key={q} className="rounded-xl border border-[#e7e7e7] bg-[#f6f8fa] px-5 py-4">
                  <p className="text-[15px] font-semibold text-[#1f2328] mb-1">{q}</p>
                  <p className="text-[14px] text-[#5f676f] leading-[22px]">{a}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <div className="flex gap-4 flex-wrap">
              <Link href="/about" className="text-[14px] text-[#16a34a] hover:underline">About us</Link>
              <Link href="/privacy-policy" className="text-[14px] text-[#16a34a] hover:underline">Privacy policy</Link>
              <Link href="/blog" className="text-[14px] text-[#16a34a] hover:underline">EV guides</Link>
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
