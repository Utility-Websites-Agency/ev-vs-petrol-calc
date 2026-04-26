export interface BlogSection {
  heading?: string;
  subheading?: string;
  body?: string;
  list?: string[];
  table?: { headers: string[]; rows: string[][] };
  callout?: { type: "info" | "tip" | "warning"; text: string };
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  content: BlogSection[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    "slug": "electric-car-vs-petrol-true-cost-comparison",
    "title": "Electric car vs petrol: what does ownership really cost?",
    "excerpt": "Beyond the sticker price, EVs and petrol cars differ dramatically in fuel, maintenance, and insurance costs. Here is what the numbers say.",
    "date": "April 14, 2025",
    "readTime": "6 min read",
    "category": "Comparison",
    "tags": [
      "electric car",
      "petrol",
      "cost comparison"
    ],
    "content": [
      {
        "heading": "The sticker price is just the beginning"
      },
      {
        "body": "When shoppers compare an electric vehicle to a petrol alternative, the upfront price is usually the first thing they notice. EVs often cost more to buy outright, but that gap narrows significantly once you account for what you spend over the years you actually own the car. Total cost of ownership is the only metric that tells the full story."
      },
      {
        "heading": "Fuel costs: where EVs pull ahead fast"
      },
      {
        "body": "Electricity is considerably cheaper per kilometer than petrol in most countries. A typical petrol car consuming 8 liters per 100 km at $1.80 per liter spends around $1,440 per year on fuel for 10,000 km of driving. An equivalent EV using 18 kWh per 100 km at $0.25 per kWh spends roughly $450 for the same distance. That is a saving of nearly $990 every year, just on energy."
      },
      {
        "list": [
          "Home charging overnight is the cheapest option for most EV drivers",
          "Time-of-use electricity tariffs can cut charging costs by up to 40 percent",
          "Public fast chargers are more expensive but still usually cheaper than petrol",
          "Solar panels combined with home charging can reduce energy costs to near zero"
        ]
      },
      {
        "heading": "Maintenance: fewer moving parts, fewer bills"
      },
      {
        "body": "A petrol engine has hundreds of moving parts, many of which wear out and need replacement. EVs have far fewer components in the drivetrain, which means lower servicing costs over time. Studies suggest EV owners spend around 30 to 40 percent less on maintenance annually compared to petrol car owners."
      },
      {
        "callout": {
          "type": "info",
          "text": "EV owners typically skip oil changes, timing belt replacements, and exhaust repairs entirely. Brake wear is also reduced thanks to regenerative braking systems."
        }
      },
      {
        "heading": "Depreciation and resale value"
      },
      {
        "body": "Historically, EVs depreciated faster than petrol cars, partly due to concerns about battery longevity. That trend is shifting as battery technology matures and consumer confidence grows. Some popular EV models now hold their value comparably to petrol equivalents, especially in markets with strong used EV demand."
      },
      {
        "heading": "Insurance differences"
      },
      {
        "body": "EV insurance premiums tend to be slightly higher than petrol equivalents because the vehicles cost more to repair after accidents, and specialist parts can take longer to source. However, the gap varies considerably by insurer and region. Shopping around is especially important for EV owners."
      },
      {
        "heading": "The bottom line over five years"
      },
      {
        "body": "For many drivers who cover average distances, an EV becomes cheaper than a comparable petrol car within three to five years when total costs are added up. The break-even point depends on your local electricity price, petrol price, annual mileage, and the size of any government incentives available to you. Use a calculator to model your specific situation rather than relying on averages."
      },
      {
        "callout": {
          "type": "info",
          "text": "Our free calculator above lets you enter your own fuel prices, electricity rates, and annual mileage to find your personal break-even point in minutes."
        }
      }
    ]
  },
  {
    "slug": "how-to-calculate-ev-break-even-point",
    "title": "How to calculate your EV break-even point step by step",
    "excerpt": "Finding out when an electric car pays for itself compared to petrol is simpler than it sounds. This guide walks you through every variable you need.",
    "date": "April 14, 2025",
    "readTime": "5 min read",
    "category": "How-to",
    "tags": [
      "break-even",
      "calculator guide",
      "EV savings"
    ],
    "content": [
      {
        "heading": "What is a break-even point and why does it matter?"
      },
      {
        "body": "The break-even point is the moment when the total money you have spent on your EV equals what you would have spent owning a comparable petrol car over the same period. Before that point, the petrol car was technically cheaper. After it, the EV is saving you money every day. Knowing this number helps you decide whether switching makes financial sense for your situation."
      },
      {
        "heading": "Step one: gather your numbers"
      },
      {
        "body": "Before you can calculate anything, you need a set of inputs. Do not guess these if you can avoid it. Accurate numbers give you a meaningful result. Vague estimates give you a vague answer."
      },
      {
        "list": [
          "Purchase price of the EV you are considering",
          "Purchase price of the petrol alternative you are comparing it to",
          "Your average annual driving distance in kilometers or miles",
          "Your local petrol price per liter or gallon",
          "Your electricity rate per kWh, including any off-peak tariffs you plan to use",
          "The fuel consumption of the petrol car in liters per 100 km",
          "The energy consumption of the EV in kWh per 100 km",
          "Estimated annual maintenance costs for each vehicle",
          "Any government grants or tax incentives that reduce the EV purchase price"
        ]
      },
      {
        "heading": "Step two: calculate annual running costs for each vehicle"
      },
      {
        "body": "Multiply your annual distance by the per-kilometer fuel cost of each vehicle. For the petrol car, divide your liters per 100 km by 100, then multiply by kilometers driven and by the price per liter. For the EV, do the same using kWh per 100 km and your electricity rate. Add estimated maintenance costs for each. The difference between those two annual totals is your yearly saving."
      },
      {
        "callout": {
          "type": "info",
          "text": "A driver covering 15,000 km per year with a saving of $1,200 annually will recover a $6,000 price premium in exactly five years, assuming costs stay constant."
        }
      },
      {
        "heading": "Step three: account for the price premium"
      },
      {
        "body": "Subtract any incentives, grants, or rebates from the EV purchase price before comparing it to the petrol car. In some markets, these incentives are substantial enough to eliminate the price premium entirely, which means the EV starts saving money from day one."
      },
      {
        "heading": "Step four: divide the premium by the annual saving"
      },
      {
        "body": "Take the remaining price difference between the two vehicles and divide it by your calculated annual saving. The result is your break-even period in years. If that number is less than how long you intend to keep the car, the EV makes financial sense. If it is longer, you may not recoup the extra cost before you sell or trade in."
      },
      {
        "heading": "Using a calculator instead of doing it manually"
      },
      {
        "body": "Manual calculations work, but they require careful attention to get right. A dedicated calculator handles the arithmetic for you and lets you adjust variables instantly to see how sensitive your break-even point is to changes in petrol prices or electricity rates. Our tool at the top of this page is built specifically for this comparison and takes only a couple of minutes to fill in."
      },
      {
        "callout": {
          "type": "info",
          "text": "Try adjusting the electricity rate in the calculator to see how much difference a cheaper overnight tariff makes to your break-even timeline. The impact is often larger than people expect."
        }
      }
    ]
  },
  {
    "slug": "tips-to-maximize-electric-car-savings",
    "title": "Tips to maximize your savings when switching to an electric car",
    "excerpt": "Switching to an EV is only the start. These practical tips help you cut running costs further and reach your break-even point sooner.",
    "date": "April 14, 2025",
    "readTime": "5 min read",
    "category": "Tips",
    "tags": [
      "EV savings",
      "charging tips",
      "reduce costs"
    ],
    "content": [
      {
        "heading": "Savings do not happen automatically"
      },
      {
        "body": "Buying an electric car does not guarantee you will spend less money than a petrol driver. Your savings depend on how and where you charge, how you drive, and how well you manage the ownership costs over time. The good news is that small adjustments can make a significant difference to your overall numbers."
      },
      {
        "heading": "Charge at home whenever possible"
      },
      {
        "body": "Home charging is almost always the cheapest way to keep your battery topped up. Public fast chargers are convenient but typically charge a premium for the speed and convenience. If you have off-street parking, installing a home wallbox charger is one of the best investments you can make alongside the EV itself."
      },
      {
        "callout": {
          "type": "info",
          "text": "A home wallbox typically costs between $500 and $1,500 to install, but the per-kWh savings over public charging can recover that cost within 12 to 18 months for average drivers."
        }
      },
      {
        "heading": "Switch to a time-of-use electricity tariff"
      },
      {
        "body": "Many electricity providers offer tariffs where power is cheaper overnight, typically between 11pm and 7am. If you can schedule your EV to charge during these hours, your effective per-kWh rate can drop by 30 to 50 percent compared to peak daytime rates. Check with your provider and set your car or wallbox to charge on a schedule."
      },
      {
        "heading": "Drive smoothly to extend your range"
      },
      {
        "body": "Aggressive acceleration and heavy braking waste energy in any vehicle, but the effect on an EV is directly visible as faster battery drain. Smooth, anticipatory driving can improve your real-world range by 15 to 25 percent compared to aggressive driving styles. Regenerative braking also recovers energy when you lift off the accelerator, so leaving more space ahead of you pays double."
      },
      {
        "list": [
          "Accelerate gently from stops rather than flooring it immediately",
          "Use regenerative braking by lifting off early rather than braking hard",
          "Keep your speed steady on motorways, since aerodynamic drag increases sharply above 100 km/h",
          "Pre-condition the cabin while still plugged in to avoid draining the battery on heating or cooling",
          "Check tyre pressure monthly since underinflated tyres increase energy consumption noticeably"
        ]
      },
      {
        "heading": "Take advantage of incentives and grants"
      },
      {
        "body": "Governments in many countries offer purchase incentives, tax credits, reduced registration fees, and subsidized home charger installation for EV buyers. These incentives can substantially reduce the effective purchase price and shorten your break-even timeline. Research what is available in your country or state before you buy, as schemes change frequently and some have purchase price caps."
      },
      {
        "heading": "Plan long trips around charging networks"
      },
      {
        "body": "Unplanned stops at premium rapid chargers on long journeys are the fastest way to erode your fuel cost savings. Apps like PlugShare, ABRP, and manufacturer navigation systems can route you through faster or cheaper charging stops. A little planning before a road trip can save you both time and money."
      },
      {
        "callout": {
          "type": "info",
          "text": "Some EV charging networks offer subscription plans with reduced per-kWh rates. If you use public charging frequently, a monthly membership can pay for itself quickly."
        }
      },
      {
        "heading": "Review your insurance annually"
      },
      {
        "body": "EV insurance is evolving rapidly as insurers gather more claims data and competition increases. Do not simply renew your policy each year without comparing quotes. Switching insurers can save hundreds of dollars annually, and some providers now offer specific EV policies that include battery coverage and charging equipment protection as standard."
      }
    ]
  }
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getAdjacentPosts(slug: string): { prev: BlogPost | null; next: BlogPost | null } {
  const i = BLOG_POSTS.findIndex((p) => p.slug === slug);
  return {
    prev: i > 0 ? BLOG_POSTS[i - 1] : null,
    next: i < BLOG_POSTS.length - 1 ? BLOG_POSTS[i + 1] : null,
  };
}
