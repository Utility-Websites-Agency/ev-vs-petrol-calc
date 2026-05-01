"use client";
import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Calculator", href: "/#calculator" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

export function HomeNav() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-[#e7e7e7]">
      <div className="mx-auto max-w-[1280px] px-4 md:px-6 flex items-center justify-between h-14">
        <Link href="/" className="flex items-center gap-2">
          <span className="w-7 h-7 rounded bg-[#388053] text-white flex items-center justify-center text-[11px] font-black tracking-tight">
            EV
          </span>
          <span className="text-[15px] font-semibold text-[#1f2328]">EV vs Petrol</span>
        </Link>
        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="text-[14px] text-[#5f676f] hover:text-[#1f2328] transition-colors">
              {l.label}
            </Link>
          ))}
          <Link href="/#calculator" className="px-4 py-1.5 rounded-lg text-[13px] font-semibold text-white bg-[#388053] hover:bg-[#2d6943] transition-colors">
            Calculate now
          </Link>
        </div>
        <button className="md:hidden p-2 rounded hover:bg-[#f6f8fa]" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <div className="w-5 h-0.5 bg-[#343638] mb-1" />
          <div className="w-5 h-0.5 bg-[#343638] mb-1" />
          <div className="w-5 h-0.5 bg-[#343638]" />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-[#e7e7e7] bg-white px-4 py-3 flex flex-col gap-3">
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="text-[15px] text-[#1f2328] hover:text-[#388053]" onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
