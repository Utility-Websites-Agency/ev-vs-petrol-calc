import Link from "next/link";

const FOOTER_GROUPS =   [
    {
      "label": "CALCULATOR",
      "links": [
        {
          "label": "EV vs petrol calculator",
          "href": "/"
        },
        {
          "label": "How it works",
          "href": "/how-it-works"
        },
        {
          "label": "FAQ",
          "href": "/faq"
        }
      ]
    },
    {
      "label": "GUIDES",
      "links": [
        {
          "label": "Understanding fuel costs",
          "href": "/guides/understanding-fuel-costs"
        },
        {
          "label": "EV charging explained",
          "href": "/guides/ev-charging-explained"
        },
        {
          "label": "Total cost of ownership",
          "href": "/guides/total-cost-of-ownership"
        },
        {
          "label": "Choosing your first EV",
          "href": "/guides/choosing-your-first-ev"
        }
      ]
    },
    {
      "label": "TOPICS",
      "links": [
        {
          "label": "Electric vehicles",
          "href": "/topics/electric-vehicles"
        },
        {
          "label": "Petrol and diesel cars",
          "href": "/topics/petrol-diesel-cars"
        },
        {
          "label": "Charging infrastructure",
          "href": "/topics/charging-infrastructure"
        },
        {
          "label": "Government incentives",
          "href": "/topics/government-incentives"
        }
      ]
    }
  ];

export function SiteFooter() {
  return (
    <footer className="bg-[#1b1f24] text-white px-4 md:px-6 py-12 mt-auto">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-7 h-7 rounded bg-[#1a6fe8] text-white flex items-center justify-center text-[12px] font-black">
                EV
              </span>
              <span className="font-bold text-[15px]">ev-vs-petrol-calc</span>
            </div>
            <p className="text-[13px] text-[#8b949e] leading-relaxed">Compare the real cost of electric vs petrol driving</p>
          </div>
          {FOOTER_GROUPS.map((group) => (
            <div key={group.label}>
              <p className="text-[11px] font-semibold text-[#8b949e] tracking-widest mb-3 uppercase">{group.label}</p>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-[13px] text-[#c9d1d9] hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-[#30363d] pt-6 text-[12px] text-[#8b949e]">
          <p>&copy; {new Date().getFullYear()} ev-vs-petrol-calc. Free to use, no sign-up required.</p>
          <p className="mt-1">This tool provides estimates only. Always consult a qualified professional for financial or legal advice.</p>
        </div>
      </div>
    </footer>
  );
}
