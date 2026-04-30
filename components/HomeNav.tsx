"use client";
import Link from "next/link";
import { useState } from "react";

const FS = { fontVariationSettings: "'wght' 510", fontFeatureSettings: '"cv01", "ss03"' } as const;

const NAV_LINKS = [
  { label: "Calculator", href: "/#calculator" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

export function HomeNav() {
  const [open, setOpen] = useState(false);
  return (
    <nav style={{ background: "#0f1011", borderBottom: "1px solid rgba(255,255,255,0.05)" }} className="sticky top-0 z-50">
      <div className="mx-auto max-w-[1280px] px-4 md:px-6 flex items-center justify-between h-14">
        <Link href="/" className="flex items-center gap-2" style={FS}>
          <span className="w-7 h-7 rounded bg-[#5e6ad2] text-white flex items-center justify-center text-[11px] font-black tracking-tight">
            EV
          </span>
          <span className="text-[15px] text-[#f7f8f8]">EV vs Petrol</span>
        </Link>
        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href}
              className="text-[13px] text-[#8a8f98] hover:text-[#f7f8f8] transition-colors"
              style={FS}>
              {l.label}
            </Link>
          ))}
          <Link href="/#calculator"
            className="px-3.5 py-1.5 rounded-md text-[13px] text-white bg-[#5e6ad2] hover:bg-[#7170ff] transition-colors"
            style={FS}>
            Calculate now
          </Link>
        </div>
        <button
          className="md:hidden p-2 rounded hover:bg-[rgba(255,255,255,0.05)]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <div className="w-5 h-0.5 bg-[#8a8f98] mb-1" />
          <div className="w-5 h-0.5 bg-[#8a8f98] mb-1" />
          <div className="w-5 h-0.5 bg-[#8a8f98]" />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-[rgba(255,255,255,0.05)] px-4 py-3 flex flex-col gap-3" style={{ background: "#0f1011" }}>
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href}
              className="text-[15px] text-[#d0d6e0] hover:text-[#f7f8f8]"
              style={FS}
              onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
