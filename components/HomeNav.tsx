"use client";
import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [{"label":"Calculator","href":"/"},{"label":"How it works","href":"/how-it-works"},{"label":"Guides","href":"/guides"},{"label":"FAQ","href":"/faq"}];

export function HomeNav() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-[#e7e7e7]">
      <div className="mx-auto max-w-[1280px] px-4 md:px-6 flex items-center justify-between h-14">
        <Link href="/" className="flex items-center gap-2 font-bold text-[#1f2328]">
          <span className="w-7 h-7 rounded bg-[#1a6fe8] text-white flex items-center justify-center text-[12px] font-black">
            EV
          </span>
          ev-vs-petrol-calc
        </Link>
        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="text-[14px] text-[#343638] hover:text-[#1a6fe8] transition-colors">
              {l.label}
            </Link>
          ))}
        </div>
        <button
          className="md:hidden p-2 rounded hover:bg-[#f6f8fa]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <div className="w-5 h-0.5 bg-[#343638] mb-1" />
          <div className="w-5 h-0.5 bg-[#343638] mb-1" />
          <div className="w-5 h-0.5 bg-[#343638]" />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-[#e7e7e7] bg-white px-4 py-3 flex flex-col gap-3">
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="text-[15px] text-[#1f2328] hover:text-[#1a6fe8]" onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
