import type { Metadata } from "next";
import Link from "next/link";
import { HomeNav } from "@/components/HomeNav";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Privacy Policy | EV vs Petrol Cost Calculator",
  description: "EV vs Petrol privacy policy. How we collect, use, and protect your information.",
  alternates: { canonical: "https://ev-vs-petrol-calc.com/privacy-policy" },
};

const FS = { fontVariationSettings: "'wght' 510", fontFeatureSettings: '"cv01", "ss03"' } as const;
const FSB = { fontVariationSettings: "'wght' 590", fontFeatureSettings: '"cv01", "ss03"' } as const;

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen" style={{ background: "#08090a" }}>
      <HomeNav />
      <main className="flex-1 px-6 py-16">
        <div className="mx-auto max-w-[720px]">
          <h1 className="text-[32px] text-[#f7f8f8] mb-2" style={{ ...FSB, letterSpacing: "-0.7px" }}>Privacy policy</h1>
          <p className="text-[13px] text-[#62666d] mb-10" style={FS}>Last updated: 30 April 2026</p>

          <p className="text-[15px] text-[#8a8f98] leading-[26px] mb-10" style={FS}>
            This privacy policy explains how <strong className="text-[#d0d6e0]">ev-vs-petrol-calc.com</strong> collects,
            uses, and protects information when you use our website and calculator.
          </p>

          <section className="mb-8">
            <h2 className="text-[18px] text-[#f7f8f8] mb-3" style={{ ...FSB, letterSpacing: "-0.3px" }}>Information we collect</h2>
            <p className="text-[15px] text-[#8a8f98] leading-[26px] mb-3" style={FS}>
              <strong className="text-[#d0d6e0]">Calculator inputs:</strong> All calculations run entirely in your browser.
              We do not transmit or store any inputs you enter into the calculator on our servers.
            </p>
            <p className="text-[15px] text-[#8a8f98] leading-[26px] mb-3" style={FS}>
              <strong className="text-[#d0d6e0]">Usage data:</strong> We use Google Analytics to collect anonymised data
              about how visitors use the site — pages viewed, time on site, device type, and approximate geographic location
              (country/city level). This data does not identify you personally.
            </p>
            <p className="text-[15px] text-[#8a8f98] leading-[26px]" style={FS}>
              <strong className="text-[#d0d6e0]">Contact emails:</strong> If you email us, we retain your email address and
              message content to respond to your enquiry. We do not add you to any mailing list without explicit consent.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-[18px] text-[#f7f8f8] mb-3" style={{ ...FSB, letterSpacing: "-0.3px" }}>Cookies</h2>
            <div className="flex flex-col gap-3">
              {[
                ["Google Analytics", "Anonymised usage tracking. Set by Google and governed by Google's privacy policy."],
                ["Google AdSense", "Used to serve relevant advertisements. Google may use cookies to show ads based on your prior visits to this or other websites. You can opt out via Google's Ad Settings."],
              ].map(([name, desc]) => (
                <div key={name} className="rounded-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] px-5 py-4">
                  <p className="text-[14px] text-[#f7f8f8] mb-1" style={FSB}>{name}</p>
                  <p className="text-[13px] text-[#8a8f98] leading-[22px]" style={FS}>{desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-[18px] text-[#f7f8f8] mb-3" style={{ ...FSB, letterSpacing: "-0.3px" }}>Advertising</h2>
            <p className="text-[15px] text-[#8a8f98] leading-[26px] mb-3" style={FS}>
              This site uses Google AdSense to display advertisements. Google, as a third-party vendor, uses cookies to
              serve ads based on your visits to this and other websites.
            </p>
            <p className="text-[15px] text-[#8a8f98] leading-[26px]" style={FS}>
              You can opt out of personalised advertising by visiting{" "}
              <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-[#7170ff] hover:text-[#828fff] transition-colors">
                Google's Ad Settings
              </a>{" "}
              or{" "}
              <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-[#7170ff] hover:text-[#828fff] transition-colors">
                aboutads.info
              </a>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-[18px] text-[#f7f8f8] mb-3" style={{ ...FSB, letterSpacing: "-0.3px" }}>How we use your information</h2>
            <ul className="flex flex-col gap-2 text-[15px] text-[#8a8f98] leading-[26px] list-disc list-inside" style={FS}>
              <li>To operate and improve the website and calculator</li>
              <li>To respond to enquiries you send us</li>
              <li>To understand how the site is used (aggregated analytics only)</li>
              <li>To serve relevant advertising via Google AdSense</li>
            </ul>
            <p className="text-[15px] text-[#8a8f98] leading-[26px] mt-3" style={FS}>
              We do not sell, trade, or otherwise transfer your personal information to third parties.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-[18px] text-[#f7f8f8] mb-3" style={{ ...FSB, letterSpacing: "-0.3px" }}>Data retention</h2>
            <p className="text-[15px] text-[#8a8f98] leading-[26px]" style={FS}>
              Google Analytics data is retained for 14 months. Email enquiries are retained for up to 12 months.
              Calculator inputs are never stored.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-[18px] text-[#f7f8f8] mb-3" style={{ ...FSB, letterSpacing: "-0.3px" }}>Changes to this policy</h2>
            <p className="text-[15px] text-[#8a8f98] leading-[26px]" style={FS}>
              We may update this policy from time to time. The date at the top of this page reflects the most recent
              revision. Continued use of the site after any changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] text-[#f7f8f8] mb-3" style={{ ...FSB, letterSpacing: "-0.3px" }}>Contact</h2>
            <p className="text-[15px] text-[#8a8f98] leading-[26px]" style={FS}>
              Privacy questions:{" "}
              <a href="mailto:hello@ev-vs-petrol-calc.com" className="text-[#7170ff] hover:text-[#828fff] transition-colors">
                hello@ev-vs-petrol-calc.com
              </a>
              {" "}·{" "}
              <Link href="/contact" className="text-[#7170ff] hover:text-[#828fff] transition-colors">Contact page</Link>
            </p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
