"use client";
import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Calculator", href: "/#calculator" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

export function HomeNav() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white border-b border-[#e7e7e7]/60">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="w-7 h-7 rounded bg-[#16a34a] text-white flex items-center justify-center text-[11px] font-black tracking-tight shrink-0">
              EV
            </span>
            <span className="text-[15px] font-semibold text-[#1f2328] tracking-tight">EV vs Petrol</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-[14px] font-medium text-[#343638]">
            {NAV_LINKS.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-[#1f2328] transition-colors">
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/#calculator"
              className="inline-flex rounded-lg border border-[#16a34a] bg-[#16a34a] px-5 py-1.5 text-[14px] font-semibold text-white transition hover:bg-[#15803d]"
            >
              Calculate now
            </Link>
            <button
              onClick={() => setDrawerOpen((v) => !v)}
              className="md:hidden flex flex-col items-center justify-center w-9 h-9 rounded-lg border border-[#e7e7e7] bg-white gap-1.5 focus:outline-none"
              aria-label="Open menu"
            >
              <span
                style={{
                  transform: drawerOpen ? "translateY(6px) rotate(45deg)" : "none",
                  transition: "transform 0.22s ease",
                }}
                className="block h-[1.5px] w-4 bg-[#1f2328] rounded-full origin-center"
              />
              <span
                style={{
                  opacity: drawerOpen ? 0 : 1,
                  transform: drawerOpen ? "scaleX(0)" : "scaleX(1)",
                  transition: "opacity 0.18s ease, transform 0.18s ease",
                }}
                className="block h-[1.5px] w-4 bg-[#1f2328] rounded-full"
              />
              <span
                style={{
                  transform: drawerOpen ? "translateY(-6px) rotate(-45deg)" : "none",
                  transition: "transform 0.22s ease",
                }}
                className="block h-[1.5px] w-4 bg-[#1f2328] rounded-full origin-center"
              />
            </button>
          </div>
        </div>
      </header>

      {/* Backdrop */}
      <div
        onClick={() => setDrawerOpen(false)}
        className="fixed inset-0 z-40 bg-black/30 md:hidden"
        style={{
          opacity: drawerOpen ? 1 : 0,
          pointerEvents: drawerOpen ? "auto" : "none",
          transition: "opacity 0.22s ease",
        }}
      />

      {/* Drawer */}
      <div
        className="fixed top-0 right-0 z-50 h-full w-[300px] bg-white flex flex-col md:hidden"
        style={{
          transform: drawerOpen ? "translateX(0)" : "translateX(100%)",
          boxShadow: drawerOpen ? "-8px 0 40px rgba(0,0,0,0.18)" : "none",
          transition: "transform 0.25s cubic-bezier(0.32, 0, 0.67, 0), box-shadow 0.25s ease",
          willChange: "transform",
        }}
      >
        <div className="flex justify-end p-3">
          <button
            onClick={() => setDrawerOpen(false)}
            className="w-10 h-10 rounded-lg flex items-center justify-center text-[#343638] hover:bg-[#f6f8fa] transition-colors"
            aria-label="Close menu"
          >
            <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
              <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
        <nav className="flex flex-col gap-1 px-4 flex-1">
          {NAV_LINKS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setDrawerOpen(false)}
              className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-[20px] font-medium text-[#1f2328] hover:bg-[#f6f8fa] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="p-4 border-t border-[#e7e7e7]">
          <Link
            href="/#calculator"
            onClick={() => setDrawerOpen(false)}
            className="flex items-center justify-center w-full rounded-lg bg-[#16a34a] px-5 py-3 text-[15px] font-semibold text-white transition hover:bg-[#15803d]"
          >
            Calculate now
          </Link>
        </div>
      </div>
    </>
  );
}
