import Link from "next/link";

const FS = { fontVariationSettings: "'wght' 510", fontFeatureSettings: '"cv01", "ss03"' } as const;

export function SiteFooter() {
  return (
    <footer className="px-4 md:px-6 py-12 mt-auto" style={{ background: "#0f1011", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-10">
          <div className="flex flex-col gap-3 max-w-xs">
            <Link href="/" className="flex items-center gap-2" style={FS}>
              <span className="w-7 h-7 rounded bg-[#5e6ad2] text-white flex items-center justify-center text-[11px] font-black tracking-tight">
                EV
              </span>
              <span className="text-[15px] text-[#f7f8f8]">EV vs Petrol</span>
            </Link>
            <p className="text-[13px] text-[#8a8f98] leading-relaxed" style={FS}>
              Free tool to compare the running cost of electric and petrol vehicles. Supports km/miles and multiple currencies.
            </p>
          </div>

          <div className="flex flex-wrap gap-10">
            <div className="flex flex-col gap-3">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-[#f7f8f8]" style={FS}>CALCULATOR</p>
              <div className="flex flex-col gap-2">
                <Link href="/#calculator" className="text-[13px] text-[#8a8f98] hover:text-[#f7f8f8] transition-colors" style={FS}>EV vs petrol calculator</Link>
                <Link href="/blog" className="text-[13px] text-[#8a8f98] hover:text-[#f7f8f8] transition-colors" style={FS}>All articles</Link>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-[#f7f8f8]" style={FS}>GUIDES</p>
              <div className="flex flex-col gap-2">
                <Link href="/blog/electric-car-vs-petrol-true-cost-comparison" className="text-[13px] text-[#8a8f98] hover:text-[#f7f8f8] transition-colors" style={FS}>True cost comparison</Link>
                <Link href="/blog/how-to-calculate-ev-break-even-point" className="text-[13px] text-[#8a8f98] hover:text-[#f7f8f8] transition-colors" style={FS}>EV break-even guide</Link>
                <Link href="/blog/tips-to-maximize-electric-car-savings" className="text-[13px] text-[#8a8f98] hover:text-[#f7f8f8] transition-colors" style={FS}>Maximize your savings</Link>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-[#f7f8f8]" style={FS}>LEGAL</p>
              <div className="flex flex-col gap-2">
                <Link href="/about" className="text-[13px] text-[#8a8f98] hover:text-[#f7f8f8] transition-colors" style={FS}>About</Link>
                <Link href="/contact" className="text-[13px] text-[#8a8f98] hover:text-[#f7f8f8] transition-colors" style={FS}>Contact</Link>
                <Link href="/privacy-policy" className="text-[13px] text-[#8a8f98] hover:text-[#f7f8f8] transition-colors" style={FS}>Privacy policy</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[rgba(255,255,255,0.06)] pt-6 flex flex-col gap-1">
          <p className="text-[12px] text-[#62666d]" style={FS}>© {new Date().getFullYear()} ev-vs-petrol-calc.com · Free to use, no sign-up required.</p>
          <p className="text-[12px] text-[#62666d]" style={FS}>Estimates only. Always consult a qualified professional for financial decisions.</p>
        </div>
      </div>
    </footer>
  );
}
