import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="bg-[#1b1f24] px-4 md:px-6 py-12 mt-auto">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-10">
          <div className="flex flex-col gap-3 max-w-xs">
            <Link href="/" className="flex items-center gap-2">
              <span className="w-7 h-7 rounded bg-[#16a34a] text-white flex items-center justify-center text-[12px] font-black tracking-tight">EV</span>
              <span className="text-[15px] font-semibold text-white">EV vs Petrol</span>
            </Link>
            <p className="text-[13px] text-[#4a4c4d] leading-relaxed">
              Free tool to compare the running cost of electric and petrol vehicles. Supports km/miles and multiple currencies.
            </p>
          </div>
          <div className="flex flex-wrap gap-10">
            <div className="flex flex-col gap-3">
              <p className="text-[12px] font-semibold uppercase tracking-wider text-white">CALCULATOR</p>
              <div className="flex flex-col gap-2">
                <Link href="/#calculator" className="text-[13px] text-[#c9d1d9] hover:text-white transition-colors">EV vs petrol calculator</Link>
                <Link href="/blog" className="text-[13px] text-[#c9d1d9] hover:text-white transition-colors">All articles</Link>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-[12px] font-semibold uppercase tracking-wider text-white">GUIDES</p>
              <div className="flex flex-col gap-2">
                <Link href="/blog/electric-car-vs-petrol-true-cost-comparison" className="text-[13px] text-[#c9d1d9] hover:text-white transition-colors">True cost comparison</Link>
                <Link href="/blog/how-to-calculate-ev-break-even-point" className="text-[13px] text-[#c9d1d9] hover:text-white transition-colors">EV break-even guide</Link>
                <Link href="/blog/tips-to-maximize-electric-car-savings" className="text-[13px] text-[#c9d1d9] hover:text-white transition-colors">Maximize your savings</Link>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-[12px] font-semibold uppercase tracking-wider text-white">LEGAL</p>
              <div className="flex flex-col gap-2">
                <Link href="/about" className="text-[13px] text-[#c9d1d9] hover:text-white transition-colors">About</Link>
                <Link href="/contact" className="text-[13px] text-[#c9d1d9] hover:text-white transition-colors">Contact</Link>
                <Link href="/privacy-policy" className="text-[13px] text-[#c9d1d9] hover:text-white transition-colors">Privacy policy</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-[#30363d] pt-6 flex flex-col gap-1">
          <p className="text-[12px] text-[#4a4c4d]">© {new Date().getFullYear()} evrunningcosts.com · Free to use, no sign-up required.</p>
          <p className="text-[12px] text-[#4a4c4d]">Estimates only. Always consult a qualified professional for financial decisions.</p>
        </div>
      </div>
    </footer>
  );
}
