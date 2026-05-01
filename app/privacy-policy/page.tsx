import type { Metadata } from "next";
import Link from "next/link";
import { HomeNav } from "@/components/HomeNav";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Privacy Policy | EV vs Petrol Cost Calculator",
  description: "EV vs Petrol privacy policy. How we collect, use, and protect your information.",
  alternates: { canonical: "https://www.evrunningcosts.com/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-[#1f2328]">
      <HomeNav />
      <main className="flex-1 px-6 py-16">
        <div className="mx-auto max-w-[720px]">
          <h1 className="text-[32px] font-semibold tracking-tight text-[#1f2328] mb-2">Privacy policy</h1>
          <p className="text-[13px] text-[#8b949e] mb-10">Last updated: 30 April 2026</p>

          <p className="text-[16px] text-[#5f676f] leading-[28px] mb-10">
            This privacy policy explains how <strong className="text-[#1f2328]">evrunningcosts.com</strong> collects,
            uses, and protects information when you use our website and calculator.
          </p>

          <section className="mb-8">
            <h2 className="text-[22px] font-semibold text-[#1f2328] mb-3">Information we collect</h2>
            <p className="text-[16px] text-[#5f676f] leading-[28px] mb-3">
              <strong className="text-[#1f2328]">Calculator inputs:</strong> All calculations run entirely in your browser.
              We do not transmit or store any inputs you enter into the calculator on our servers.
            </p>
            <p className="text-[16px] text-[#5f676f] leading-[28px] mb-3">
              <strong className="text-[#1f2328]">Usage data:</strong> We use Google Analytics to collect anonymised data
              about how visitors use the site — pages viewed, time on site, device type, and approximate geographic location
              (country/city level). This data does not identify you personally.
            </p>
            <p className="text-[16px] text-[#5f676f] leading-[28px]">
              <strong className="text-[#1f2328]">Contact emails:</strong> If you email us, we retain your email address and
              message content to respond to your enquiry. We do not add you to any mailing list without explicit consent.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-[22px] font-semibold text-[#1f2328] mb-3">Cookies</h2>
            <div className="flex flex-col gap-3">
              {[
                ["Google Analytics", "Anonymised usage tracking. Set by Google and governed by Google's privacy policy."],
                ["Google AdSense", "Used to serve relevant advertisements. Google may use cookies to show ads based on your prior visits to this or other websites. You can opt out via Google's Ad Settings."],
              ].map(([name, desc]) => (
                <div key={name} className="rounded-xl border border-[#e7e7e7] bg-[#f6f8fa] px-5 py-4">
                  <p className="text-[15px] font-semibold text-[#1f2328] mb-1">{name}</p>
                  <p className="text-[14px] text-[#5f676f] leading-[22px]">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-[22px] font-semibold text-[#1f2328] mb-3">Advertising</h2>
            <p className="text-[16px] text-[#5f676f] leading-[28px] mb-3">
              This site uses Google AdSense to display advertisements. Google, as a third-party vendor, uses cookies to
              serve ads based on your visits to this and other websites.
            </p>
            <p className="text-[16px] text-[#5f676f] leading-[28px]">
              You can opt out of personalised advertising by visiting{" "}
              <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-[#16a34a] hover:underline">
                Google's Ad Settings
              </a>{" "}
              or{" "}
              <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-[#16a34a] hover:underline">
                aboutads.info
              </a>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-[22px] font-semibold text-[#1f2328] mb-3">How we use your information</h2>
            <ul className="flex flex-col gap-2 text-[16px] text-[#5f676f] leading-[28px] list-disc list-inside">
              <li>To operate and improve the website and calculator</li>
              <li>To respond to enquiries you send us</li>
              <li>To understand how the site is used (aggregated analytics only)</li>
              <li>To serve relevant advertising via Google AdSense</li>
            </ul>
            <p className="text-[16px] text-[#5f676f] leading-[28px] mt-3">
              We do not sell, trade, or otherwise transfer your personal information to third parties.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-[22px] font-semibold text-[#1f2328] mb-3">Data retention</h2>
            <p className="text-[16px] text-[#5f676f] leading-[28px]">
              Google Analytics data is retained for 14 months. Email enquiries are retained for up to 12 months.
              Calculator inputs are never stored.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-[22px] font-semibold text-[#1f2328] mb-3">Changes to this policy</h2>
            <p className="text-[16px] text-[#5f676f] leading-[28px]">
              We may update this policy from time to time. The date at the top of this page reflects the most recent
              revision. Continued use of the site after any changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-[22px] font-semibold text-[#1f2328] mb-3">Contact</h2>
            <p className="text-[16px] text-[#5f676f] leading-[28px]">
              Privacy questions:{" "}
              <a href="mailto:hello@evrunningcosts.com" className="text-[#16a34a] hover:underline">
                hello@evrunningcosts.com
              </a>
              {" "}·{" "}
              <Link href="/contact" className="text-[#16a34a] hover:underline">Contact page</Link>
            </p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
