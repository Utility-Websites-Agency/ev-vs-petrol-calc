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
  },
  {
    slug: "ev-home-charging-guide",
    title: "Home EV charging explained: wallbox, costs, and installation",
    excerpt: "Home charging is the biggest factor in EV running costs. This guide covers everything from wallbox options to installation costs and off-peak tariffs.",
    date: "April 18, 2026",
    readTime: "6 min read",
    category: "Charging",
    tags: ["home charging", "wallbox", "EV costs", "electricity tariff"],
    content: [
      { heading: "Why home charging changes everything" },
      { body: "The single biggest variable in your EV running cost is where you charge. Home charging overnight typically costs between one third and one half of what public fast chargers charge per kWh. For most drivers, the ability to charge at home is what makes an EV genuinely cheaper to run than petrol." },
      { heading: "Three-pin vs dedicated wallbox" },
      { body: "You can charge an EV from a standard three-pin household socket, but it is slow — typically adding 8 to 15 km of range per hour depending on the car. A dedicated 7 kW wallbox charger adds around 35 to 50 km per hour, meaning most cars can top up overnight from nearly empty. For regular home charging, a wallbox is the right choice." },
      { list: [
        "Standard three-pin: ~2.3 kW, 8–15 km/hr of range — suitable for top-ups only",
        "7 kW single-phase wallbox: 35–50 km/hr — fits most home electrical supplies",
        "22 kW three-phase wallbox: 80–120 km/hr — requires a three-phase supply (uncommon in residential properties)",
      ]},
      { heading: "Wallbox installation cost" },
      { body: "A 7 kW wallbox unit typically costs $300 to $700. Professional installation adds $400 to $1,200 depending on the distance from your consumer unit, whether the cable run is simple or complex, and your electrician's rates. Total installed cost is usually $700 to $1,800. Some governments subsidise home charger installation — check what is available in your country before getting quotes." },
      { heading: "Off-peak electricity tariffs" },
      { body: "Many energy providers offer time-of-use tariffs where power is cheaper overnight, often between 11 pm and 7 am. Overnight rates can be 30 to 50 percent cheaper than daytime peak rates. Setting your car or wallbox to charge on a schedule during these hours is one of the most effective ways to reduce your EV running costs." },
      { callout: { type: "tip", text: "A wallbox installation typically pays for itself within 18 to 24 months through savings on public charging costs, even before accounting for off-peak tariff benefits." } },
      { heading: "Solar and home charging" },
      { body: "If your home has solar panels, charging your EV during daylight hours when your panels are generating excess power can reduce your effective charging cost to near zero. Smart chargers can be configured to prioritise solar export for EV charging, maximising self-consumption and minimising grid draw." },
    ],
  },
  {
    slug: "government-ev-incentives-2026",
    title: "Government EV incentives and rebates: what's available in 2026",
    excerpt: "Grants, tax credits, and rebates can significantly reduce the cost of buying an EV. Here is what is available in major markets as of 2026.",
    date: "April 20, 2026",
    readTime: "5 min read",
    category: "Buying",
    tags: ["EV incentives", "rebates", "government grants", "tax credit"],
    content: [
      { heading: "Why incentives matter for your break-even calculation" },
      { body: "Government incentives directly reduce the effective purchase price of an EV, which shortens your break-even timeline. A $5,000 rebate on an EV that costs $8,000 more than a petrol equivalent turns a potential 6-year payback into a 2.5-year one, assuming $1,200 in annual fuel savings. Always check current incentives before comparing sticker prices." },
      { heading: "United States" },
      { body: "The US federal Clean Vehicle Credit provides up to $7,500 for new EV purchases and $4,000 for used EVs, subject to income limits and vehicle price caps. As of 2026, the new EV credit applies to vehicles with a purchase price under $80,000 (SUVs, vans, trucks) or $55,000 (sedans). The credit is applied at point of sale at participating dealers. Additional state-level incentives exist in California, Colorado, New York, and others." },
      { heading: "United Kingdom" },
      { body: "The UK government removed the Plug-in Car Grant in 2022, but the EV Homecharge Scheme (OZEV grant) provides up to £350 toward home charger installation for eligible drivers. The benefit-in-kind tax rate for EVs remains significantly lower than petrol vehicles for company car drivers. Scotland offers interest-free loans of up to £30,000 for EV purchases through the Energy Saving Trust." },
      { heading: "Australia" },
      { body: "The Australian federal FBT exemption applies to EVs used as novated leases or company cars priced under the luxury car tax threshold ($91,387 in 2025-26). Several states offer stamp duty exemptions — Victoria, NSW, and the ACT have all introduced or maintained registration and stamp duty concessions for EVs. The Clean Car Discount was discontinued in 2023 but state-level measures remain." },
      { heading: "European Union" },
      { body: "EU member states vary widely. France offers a 'bonus écologique' of up to €7,000 for low-income buyers. Germany had a federal premium (Umweltbonus) that ended in late 2023, though some state programs continue. The Netherlands, Norway, and Sweden all have favourable EV tax treatment. Check the relevant national authority for current figures as schemes update frequently." },
      { callout: { type: "warning", text: "Incentive schemes change frequently. Always verify current eligibility criteria, income limits, and vehicle price caps directly with the relevant government authority before making a purchase decision." } },
    ],
  },
  {
    slug: "ev-battery-degradation-explained",
    title: "EV battery degradation: how much capacity do you lose over time?",
    excerpt: "Battery degradation is one of the most common concerns about EV ownership. Here is what the data actually shows and what it means for your running costs.",
    date: "April 21, 2026",
    readTime: "5 min read",
    category: "Technology",
    tags: ["battery degradation", "EV range", "battery health", "long-term costs"],
    content: [
      { heading: "What is battery degradation?" },
      { body: "Every lithium-ion battery loses a small amount of its maximum capacity with each charge cycle. This is normal and expected. The practical effect is that after several years of use, your EV may have a slightly shorter range than when new. The question is how much capacity is lost, and how quickly." },
      { heading: "What the data shows" },
      { body: "Real-world data from tens of thousands of EVs suggests that most modern batteries degrade to around 90 to 92 percent of their original capacity after the first 100,000 km. The degradation rate slows significantly after the first year. A car that loses 8 percent capacity in year one might lose only 1 to 2 percent per year thereafter." },
      { table: {
        headers: ["Odometer", "Typical remaining capacity", "Range impact (200 km car)"],
        rows: [
          ["New", "100%", "200 km"],
          ["50,000 km", "96–98%", "192–196 km"],
          ["100,000 km", "90–93%", "180–186 km"],
          ["200,000 km", "82–88%", "164–176 km"],
        ],
      }},
      { heading: "Factors that accelerate degradation" },
      { list: [
        "Frequent DC fast charging (occasional use is fine; daily reliance accelerates wear)",
        "Regularly charging to 100% or discharging to near 0%",
        "Leaving the battery at high charge state in hot climates for extended periods",
        "Extreme temperature exposure (very hot or very cold)",
      ]},
      { heading: "Manufacturer warranties" },
      { body: "Most major EV manufacturers warrant the battery to retain at least 70 to 80 percent capacity for 8 years or 160,000 km, whichever comes first. Tesla, Hyundai, Kia, and BMW all offer 8-year/160,000 km battery warranties. If degradation drops below the warranty threshold, the manufacturer is obligated to repair or replace the battery." },
      { heading: "Impact on running costs" },
      { body: "Moderate degradation rarely affects running costs meaningfully. Losing 10 percent capacity does not mean using 10 percent more electricity — it means you have less range before needing to charge. Your per-kilometre energy consumption (kWh/100km) remains largely unchanged. The practical impact is slightly more frequent charging stops on long trips." },
      { callout: { type: "info", text: "To minimise degradation, set your car to charge to 80% for daily driving and only charge to 100% before a long trip. Most EVs allow you to set a charge limit in the car's settings or companion app." } },
    ],
  },
  {
    slug: "petrol-vs-ev-for-high-mileage-drivers",
    title: "Petrol vs EV for high-mileage drivers: who saves the most?",
    excerpt: "The more you drive, the faster an EV pays for itself. Here is what high-mileage drivers need to know about fuel savings, charging strategy, and break-even timelines.",
    date: "April 22, 2026",
    readTime: "5 min read",
    category: "Comparison",
    tags: ["high mileage", "EV savings", "fleet drivers", "break-even"],
    content: [
      { heading: "Mileage is the biggest lever in EV savings" },
      { body: "The break-even calculation for an EV is straightforward: divide the extra upfront cost by the annual fuel saving. The more you drive, the larger the annual saving, and the faster you recoup the price premium. A driver covering 30,000 km per year will break even twice as fast as one covering 15,000 km on the same vehicles." },
      { heading: "The numbers for a typical high-mileage driver" },
      { body: "Consider a driver covering 30,000 km per year switching from a petrol car using 9 L/100km at $1.80/litre to an EV using 18 kWh/100km at $0.25/kWh. Annual petrol cost: $4,860. Annual EV charging cost: $1,350. Annual saving: $3,510. With a $10,000 EV price premium, the break-even point is under 3 years." },
      { callout: { type: "info", text: "Use the calculator above to model your own distance. Change the annual distance preset to 'Very high' to see how savings scale at 25,000–30,000 km per year." } },
      { heading: "Charging strategy for high-mileage drivers" },
      { body: "High-mileage drivers need to charge more frequently and should plan their charging strategy carefully. Home charging overnight is critical — relying on public DC fast chargers for the majority of charging will erode savings significantly. If home charging is not available, a workplace charging scheme or reliable en-route DC network is the next best option." },
      { heading: "Fleet and business use" },
      { body: "For businesses running high-mileage vehicles, the fuel saving case for EVs is often compelling. Additionally, many countries offer favourable tax treatment for electric fleet vehicles — lower benefit-in-kind rates, enhanced capital allowances, and reduced stamp duty. The combination of fuel savings and tax benefits can produce a very short payback period for fleet operators." },
      { heading: "Considerations specific to high-mileage EV use" },
      { list: [
        "Battery degradation is proportional to cycles, so high-mileage drivers will see more degradation — but manufacturer warranties typically cover 160,000 km",
        "Tyre replacement is slightly more frequent on heavier EVs",
        "Plan long routes using apps like ABRP or the car's built-in navigation to route through fast charging stops",
        "Consider time-of-use electricity tariffs to maximise home charging savings",
      ]},
    ],
  },
  {
    slug: "ev-range-anxiety-how-real-is-it",
    title: "EV range anxiety: how real is it, and how do you get past it?",
    excerpt: "Range anxiety is the number one reason people hesitate to buy an EV. Here is what the data says about real-world range and how to plan around it.",
    date: "April 23, 2026",
    readTime: "5 min read",
    category: "Buying",
    tags: ["range anxiety", "EV range", "charging network", "EV buying guide"],
    content: [
      { heading: "What range anxiety actually is" },
      { body: "Range anxiety is the fear of running out of charge before reaching your destination or a charger. It is the single most cited reason why potential EV buyers hesitate. But the data suggests that for most people and most journeys, range anxiety is more psychological than practical." },
      { heading: "How far do people actually drive?" },
      { body: "Studies consistently show that the average car trip is under 40 km. Most drivers in developed countries drive fewer than 50 km on any given day. A modern EV with 300 to 500 km of real-world range can handle several days of typical driving before needing to charge. For most people, an EV parked at home overnight will start every day with a full battery." },
      { heading: "Where range anxiety is a legitimate concern" },
      { list: [
        "Drivers who regularly make long-distance trips (more than 250 km in a single journey)",
        "People without home charging who depend entirely on public infrastructure",
        "Rural areas with sparse fast-charging coverage",
        "Very cold climates where battery range drops by 20 to 40 percent in extreme temperatures",
      ]},
      { heading: "How charging infrastructure has changed" },
      { body: "The public charging network has expanded dramatically since 2020. In most of Europe, the UK, North America, and Australia, major motorway routes now have DC fast chargers every 60 to 100 km. Tesla's Supercharger network, and networks like Ionity, Electrify America, and Chargefox, can add 150 to 250 km of range in 15 to 30 minutes." },
      { heading: "Practical tips to reduce range anxiety" },
      { list: [
        "Install a home wallbox so you start every morning with a full battery",
        "Set your default charge limit to 80% for daily driving, and 100% before long trips",
        "Use the car's built-in navigation or ABRP to plan long routes with charging stops pre-calculated",
        "Drive the car for a month before judging your range — most new EV owners overcorrect and charge far more frequently than necessary",
      ]},
      { callout: { type: "tip", text: "Most EV owners report that range anxiety disappears within the first few weeks of ownership, once they understand their car's real-world range and develop a charging routine." } },
    ],
  },
  {
    slug: "true-cost-of-public-ev-charging",
    title: "The true cost of public EV charging vs home charging",
    excerpt: "Public charging is convenient but expensive. Understanding the real cost difference between home and public charging is essential for accurate EV running cost estimates.",
    date: "April 24, 2026",
    readTime: "4 min read",
    category: "Charging",
    tags: ["public charging", "home charging", "EV costs", "charging cost"],
    content: [
      { heading: "Why public charging costs matter" },
      { body: "The EV vs petrol cost comparison looks very different depending on where you charge. An EV owner who charges almost entirely at home on a cheap overnight tariff may spend $400 to $600 per year on energy for 15,000 km of driving. One who relies mainly on public DC fast chargers for the same distance may spend $1,400 to $2,000. The gap is significant." },
      { heading: "Home charging: the benchmark" },
      { body: "Home charging on a standard flat tariff in most countries costs between $0.20 and $0.35 per kWh. On a time-of-use overnight tariff, rates can fall to $0.10 to $0.18 per kWh in some markets. For a car using 18 kWh/100km and covering 15,000 km per year, the annual charging cost at $0.25/kWh is $675." },
      { table: {
        headers: ["Charging type", "Typical rate", "Annual cost (15,000 km at 18 kWh/100km)"],
        rows: [
          ["Home — off-peak tariff", "$0.12–$0.18/kWh", "$324–$486"],
          ["Home — standard tariff", "$0.22–$0.30/kWh", "$594–$810"],
          ["Public AC (slow)", "$0.35–$0.55/kWh", "$945–$1,485"],
          ["Public DC fast charge", "$0.55–$0.80/kWh", "$1,485–$2,160"],
        ],
      }},
      { heading: "Pricing structures on public networks" },
      { body: "Public charging networks use different pricing models that can make costs difficult to compare. Some charge per kWh (clearest to compare), some charge per minute (disadvantages slower-charging cars), and some charge a session fee plus a per-kWh rate. Always check the pricing structure of the network you plan to use regularly." },
      { heading: "The mixed-charging reality" },
      { body: "Most EV drivers do most of their charging at home and occasionally use public chargers for longer trips. Selecting 'Mix of both' in our calculator pre-fills a blended rate that reflects this real-world pattern. If you plan to rely heavily on public charging, adjust the electricity rate upward to reflect the network you will use most." },
      { callout: { type: "warning", text: "Roaming fees on some charging networks can add $0.10 to $0.20 per kWh on top of the base rate if you are not a member. Check whether a network subscription plan makes financial sense if you use one network frequently." } },
    ],
  },
  {
    slug: "which-ev-should-i-buy-2026",
    title: "Which EV should I buy in 2026? A practical buyers guide",
    excerpt: "With hundreds of EV models now available, choosing the right one can be overwhelming. Here is a framework for narrowing down the options based on how you actually drive.",
    date: "April 25, 2026",
    readTime: "6 min read",
    category: "Buying",
    tags: ["EV buying guide", "best EV 2026", "EV comparison", "electric car"],
    content: [
      { heading: "Start with your actual driving, not the spec sheet" },
      { body: "Range is the spec most buyers fixate on, but it is rarely the right starting point. A better question is: how far do you typically drive between charging opportunities? If you charge at home every night, a 300 km range car is more than enough for 99 percent of daily use. If you regularly make 400 km motorway runs without stopping, you need more range and should prioritise fast charging speed." },
      { heading: "The key questions to answer before you shortlist" },
      { list: [
        "Do you have access to home charging? If not, where will you mainly charge?",
        "What is your typical daily driving distance? And how often do you do long trips?",
        "Do you need to carry passengers regularly? How much boot space do you need?",
        "Is this a company car (different tax rules apply in most markets)?",
        "What is your budget, and does a government incentive change the effective purchase price?",
      ]},
      { heading: "Budget categories" },
      { body: "The EV market in 2026 spans a wide range. Entry-level city EVs (BYD Dolphin, MG4, Dacia Spring) start around $25,000 to $30,000 with 250 to 350 km of real-world range — more than enough for urban use. Mid-range family EVs (Tesla Model 3, Hyundai Ioniq 6, VW ID.4) sit between $45,000 and $65,000 with 450 to 600 km of real-world range. Premium options (BMW iX, Mercedes EQS, Polestar 3) start from $80,000 upward." },
      { heading: "What to look for beyond range" },
      { list: [
        "Peak DC charging speed — how fast can it add range at a motorway charger? Under 20 minutes for 100 km is the benchmark",
        "Real-world efficiency (kWh/100km) — lower is better and directly reduces your running costs",
        "Software and app ecosystem — how good is the navigation, remote scheduling, and over-the-air update system?",
        "Boot space and seat configuration for your actual use case",
        "Warranty terms, especially the battery warranty period and capacity retention threshold",
      ]},
      { callout: { type: "tip", text: "Test drive at least two or three models before deciding. EV driving dynamics vary more than petrol cars — the difference between a front-wheel-drive and all-wheel-drive EV, or between a high-riding SUV and a low-slung sedan, is significant." } },
      { heading: "Use the calculator to compare running costs" },
      { body: "Once you have a shortlist, use our calculator to compare the annual running costs for each model. Enter the kWh/100km figure for each EV, your local electricity rate, and your annual distance to see the cost difference. A more efficient EV will compound savings over years of ownership." },
    ],
  },
  {
    slug: "ev-vs-petrol-for-business-use",
    title: "EV vs petrol for business use: tax, FBT, and fleet savings",
    excerpt: "For business owners and employees with company cars, tax treatment can make EVs dramatically more attractive than their sticker price suggests.",
    date: "April 26, 2026",
    readTime: "5 min read",
    category: "Tax & Finance",
    tags: ["EV for business", "FBT", "novated lease", "company car", "fleet EV"],
    content: [
      { heading: "Why business use changes the EV calculation" },
      { body: "When an EV is used for business purposes, several tax advantages can apply that do not exist for private buyers. These can substantially reduce the effective cost of the vehicle and shift the break-even point significantly closer to the date of purchase." },
      { heading: "Australia: FBT exemption for EVs" },
      { body: "In Australia, eligible EVs provided as a fringe benefit (including through a novated lease) are exempt from fringe benefits tax provided the car's purchase price is below the luxury car tax threshold ($91,387 in 2025-26). For employees in the 37 to 47 percent tax bracket, a novated lease on an EV can reduce the effective cost by 30 to 40 percent compared to a private purchase and running costs paid from after-tax income." },
      { callout: { type: "info", text: "The Australian FBT exemption covers not just the car but also associated costs: registration, insurance, servicing, and charging at home. Home charging infrastructure may also be included if it is part of the novated lease arrangement." } },
      { heading: "United Kingdom: company car benefit-in-kind" },
      { body: "In the UK, company car benefit-in-kind tax is charged as a percentage of the car's list price, multiplied by the employee's income tax rate. For EVs, the BIK rate is 2 percent in 2025-26, compared to 20 to 37 percent for petrol cars depending on CO₂ emissions. On a £50,000 car for a 40 percent taxpayer, this means annual BIK tax of £400 for an EV versus £4,000 to £7,400 for a petrol equivalent." },
      { heading: "United States: Section 179 and MACRS depreciation" },
      { body: "US businesses can deduct the full purchase price of qualifying EVs in the year of purchase under Section 179, subject to annual limits. Additionally, the $7,500 federal tax credit applies to business purchases where the vehicle meets eligibility criteria. Combined with the fuel and maintenance savings, the total financial case for business EV adoption is often stronger than personal use." },
      { heading: "Fleet considerations" },
      { body: "For fleets running multiple vehicles, the per-vehicle savings compound quickly. A 10-vehicle fleet switching from petrol to EV at 30,000 km per year per vehicle, saving $3,000 per vehicle annually, generates $30,000 in fuel savings per year before any tax treatment. Most fleet managers now run total cost of ownership models rather than purchase price comparisons." },
    ],
  },
  {
    slug: "how-cold-weather-affects-ev-range",
    title: "How cold weather affects EV range — and what you can do about it",
    excerpt: "EV range drops in cold weather. Here is why it happens, how much range you actually lose, and the practical steps that reduce the impact.",
    date: "April 27, 2026",
    readTime: "4 min read",
    category: "Technology",
    tags: ["EV range", "cold weather", "battery performance", "winter driving"],
    content: [
      { heading: "Why cold weather reduces EV range" },
      { body: "Lithium-ion batteries operate less efficiently at low temperatures. The chemical reactions inside the cells slow down, reducing the battery's ability to deliver power quickly and reducing the total usable energy. Additionally, cabin heating in an EV draws directly from the main battery (unlike a petrol car, which uses waste engine heat). Together, these factors can reduce real-world range by 20 to 40 percent at temperatures around -10°C." },
      { heading: "How much range loss to expect" },
      { table: {
        headers: ["Temperature", "Approximate range reduction"],
        rows: [
          ["20°C (comfortable)", "Baseline — official range figures apply"],
          ["5°C", "5–15% reduction"],
          ["-5°C", "20–30% reduction"],
          ["-15°C or below", "30–45% reduction"],
        ],
      }},
      { heading: "The pre-conditioning technique" },
      { body: "Pre-conditioning is the most effective cold-weather strategy. It means warming the cabin and battery to operating temperature while the car is still plugged in, using grid electricity rather than battery energy. Most EVs allow you to schedule pre-conditioning via the companion app or the car's climate settings. Arriving at a warm battery means better performance from the moment you unplug." },
      { list: [
        "Schedule pre-conditioning to complete 15 to 30 minutes before departure",
        "The car uses grid electricity for heating — it does not drain your range before you leave",
        "A pre-conditioned battery also accepts charge faster at public chargers",
        "Some cars allow seat and steering wheel heating to be activated remotely to reduce cabin heating load",
      ]},
      { heading: "Adapting your driving in cold weather" },
      { body: "Use seat heating and heated steering wheel instead of full cabin heating where possible — they use a fraction of the energy. Plan charging stops more conservatively, reducing the distance between stops. Use regenerative braking settings to recover more energy. Avoid rapid acceleration in very cold temperatures when the battery has not yet warmed up." },
      { callout: { type: "info", text: "Heat pump-equipped EVs perform significantly better in cold weather than those with resistive heating only. Heat pumps transfer heat rather than generating it, using 2 to 3 times less energy for the same cabin temperature." } },
    ],
  },
  {
    slug: "ev-maintenance-costs-compared-to-petrol",
    title: "EV maintenance costs vs petrol: what you actually pay over 5 years",
    excerpt: "EVs have fewer moving parts than petrol cars, which translates to lower servicing bills. Here is what the real-world data shows about the maintenance cost difference.",
    date: "April 28, 2026",
    readTime: "5 min read",
    category: "Comparison",
    tags: ["EV maintenance", "servicing costs", "total cost of ownership", "EV vs petrol"],
    content: [
      { heading: "Fewer parts means fewer things to break" },
      { body: "A petrol engine has hundreds of moving parts — pistons, valves, camshafts, belts, alternators, starters, exhaust systems. Each is a potential point of failure and a source of maintenance cost. An EV drivetrain has dramatically fewer components. The electric motor itself has one moving part. This fundamental difference is the reason EV servicing costs are consistently lower." },
      { heading: "What EV owners skip entirely" },
      { list: [
        "Engine oil and filter changes",
        "Spark plug replacement",
        "Timing belt or chain service",
        "Coolant flush (simplified — less critical than petrol)",
        "Exhaust system maintenance or replacement",
        "Clutch replacement (on single-speed EVs)",
        "Air filter replacement (simplified)",
      ]},
      { heading: "What EV owners still pay for" },
      { list: [
        "Tyre replacement — similar to petrol, slightly higher frequency on heavier EVs",
        "Brake fluid — less frequent due to regenerative braking extending brake life",
        "Cabin air filter",
        "Wiper blades",
        "Annual safety inspection where required by law",
        "Software updates — usually over the air and free",
      ]},
      { heading: "5-year maintenance cost comparison" },
      { table: {
        headers: ["Item", "Petrol car (5 years)", "EV (5 years)"],
        rows: [
          ["Oil and filter changes (x10)", "$600–$1,000", "—"],
          ["Spark plugs", "$150–$400", "—"],
          ["Brake service", "$400–$800", "$150–$300"],
          ["Tyres", "$800–$1,200", "$900–$1,400"],
          ["General servicing", "$1,200–$2,000", "$600–$1,000"],
          ["Total estimate", "$3,150–$5,400", "$1,650–$2,700"],
        ],
      }},
      { body: "Figures are indicative averages across mainstream models. Luxury vehicles and high-performance variants in both categories will be higher. The EV figures include the annual service check most manufacturers recommend." },
      { heading: "The battery wildcard" },
      { body: "Battery replacement is the major long-term EV maintenance risk. A replacement battery pack can cost $10,000 to $20,000 for a full replacement, though this is rarely needed within the warranty period. Most real-world data suggests that for drivers covering average distances, battery degradation remains within acceptable limits well beyond 200,000 km. The risk is higher for high-mileage users in hot climates who rely heavily on DC fast charging." },
      { callout: { type: "info", text: "When calculating your EV's total cost of ownership, factor in the annual maintenance saving versus your current car. For many drivers, this saving alone offsets a significant portion of any EV price premium over the ownership period." } },
    ],
  },
  {
  slug: "why-the-upfront-price-of-an-ev-does-not-tell-the-whole-story",
  title: "Why the upfront price of an EV does not tell the whole story",
  excerpt: "Sticker shock is real, but the purchase price of an electric vehicle is only one piece of the puzzle. Here is what Australian buyers should factor in before making a decision.",
  date: "May 1, 2026",
  readTime: "6 min read",
  category: "Tips",
  tags: ["electric vehicles", "total cost of ownership", "EV savings", "Australia", "fuel costs", "EV vs petrol"],
  content: [
    {
      heading: "The sticker price trap",
      body: "Walk into a dealership or browse an EV listing online and the first number that jumps out is the drive-away price. For many Australians, that figure can feel confronting when compared side by side with a comparable petrol car. A mass-market EV might list for $10,000 to $20,000 more than its petrol equivalent, and that gap is enough to send plenty of buyers back to the forecourt for a traditional combustion vehicle. But here is the thing: the purchase price is just the beginning of the story. When you own a car, you pay for it every single day through fuel, servicing, registration, insurance and eventually resale. Focusing only on what you pay at the dealership is a bit like judging a house by its deposit rather than the full mortgage. To make a genuinely informed choice, you need to think about the total cost of ownership over the years you actually plan to drive the car."
    },
    {
      heading: "What is total cost of ownership?",
      body: "Total cost of ownership (TCO) is the full amount a vehicle costs you across its entire life in your hands. It brings together every expense, not just the purchase price, so you can compare two vehicles on an apples-to-apples basis. For most Australians driving 15,000 kilometres per year, the ongoing costs of a petrol car add up quickly, and that is where EVs tend to claw back their higher upfront price. The TCO calculation typically covers the following areas.",
      list: [
        "Purchase price (including any government rebates or stamp duty concessions)",
        "Fuel or electricity costs over your ownership period",
        "Scheduled servicing and maintenance",
        "Registration and compulsory third party insurance",
        "Comprehensive insurance premiums",
        "Loan interest if you are financing",
        "Estimated resale value or depreciation"
      ]
    },
    {
      heading: "Fuel savings: where EVs really shine",
      body: "Petrol prices in Australia have been volatile for years, regularly sitting above $2.00 per litre in capital cities and even higher in regional areas. Charging an EV at home overnight on a standard tariff generally costs the equivalent of around 30 to 50 cents per litre of petrol in energy terms, depending on your electricity plan and the efficiency of the vehicle. For a driver covering 15,000 km per year in a mid-size petrol SUV averaging 9 litres per 100 km, fuel alone can cost $2,700 or more annually at $2.00 per litre. A comparable EV using roughly 18 kWh per 100 km and charged at 25 cents per kWh would cost around $675 per year in electricity. That is a saving of over $2,000 every single year, and over a five-year ownership period that adds up to more than $10,000 back in your pocket before you factor in anything else."
    },
    {
      heading: "Servicing and maintenance costs",
      body: "Electric vehicles have far fewer moving parts than petrol cars. There is no oil to change, no timing belt to replace, no spark plugs, no exhaust system and no multi-speed transmission to service. Battery cooling systems and brake fluid still need attention, and tyres wear as normal, but the overall servicing bill for an EV is meaningfully lower than for a petrol equivalent. Independent studies in Australia and overseas consistently find that EV owners spend around 30 to 40 per cent less on servicing over a typical ownership period. For a petrol car that might cost $800 to $1,200 per year in scheduled servicing, switching to an EV could save you $300 to $500 a year on top of your fuel savings. Over five years that is another $1,500 to $2,500 in the plus column for the electric option."
    },
    {
      callout: {
        type: "tip",
        text: "Use the evrunningcosts.com calculator to plug in your own annual kilometres, local electricity rate and petrol price. The tool will show you a side-by-side five-year cost comparison so you can see your personalised break-even point rather than relying on national averages."
      }
    },
    {
      heading: "Government incentives and concessions in Australia",
      body: "The upfront price gap between EVs and petrol cars can also be narrowed by government incentives, which vary considerably depending on where you live. At the federal level, eligible EVs priced below the luxury car tax threshold are exempt from fringe benefits tax when provided through a novated lease, which can be a significant saving for employees. Several states and territories offer additional benefits such as stamp duty exemptions, registration discounts and cash rebates, though eligibility thresholds and program availability change regularly so it pays to check your state government website before you buy. When you subtract applicable rebates and concessions from the drive-away price, the real out-of-pocket cost of buying an EV often looks considerably more competitive than the advertised sticker price suggests."
    },
    {
      heading: "Depreciation and resale value",
      body: "Depreciation is the single largest cost of car ownership for most Australians, yet it is the one that gets the least attention at purchase time. EVs have had a mixed reputation on this front. Early models from some brands depreciated steeply as newer, longer-range alternatives entered the market. However, more established EV brands have shown competitive residual values, and as the used EV market matures in Australia there is growing buyer confidence in second-hand electric vehicles. When comparing depreciation, it is worth looking at three-year residual value estimates from independent valuation services rather than assuming EVs will always lose more value. In some segments, strong demand for used EVs is actually producing resale values that rival or beat comparable petrol models.",
      callout: {
        type: "info",
        text: "Battery warranty coverage matters for resale. Most mainstream EV manufacturers offer battery warranties of eight years or 160,000 km, whichever comes first. A valid warranty transferable to future owners adds meaningful confidence to the second-hand market."
      }
    },
    {
      heading: "Putting it all together",
      body: "When you add fuel savings, lower servicing costs and applicable government incentives together, many EVs on sale in Australia today reach cost parity with their petrol equivalents somewhere between three and six years of average driving. For buyers planning to keep their vehicle for seven to ten years, the total cost of ownership calculation often favours the EV by a significant margin even when the purchase price is notably higher. The key is to do the sums for your own situation: your annual kilometres, your local electricity and petrol prices, your access to home charging, and any incentives available in your state. A national average will never be as useful as a number tailored to your actual life. That is exactly what the calculator on this site is designed to help you work out, quickly and without any jargon. Before you let a sticker price make the decision for you, give yourself the full picture first."
    }
  ]
},
  {
  slug: "how-to-factor-in-government-incentives-when-comparing-ev-and",
  title: "How to factor in government incentives when comparing EV and petrol costs",
  excerpt: "Australian governments offer a range of rebates, tax breaks and stamp duty exemptions for EVs. Here is how to find what applies to you and include it in your cost comparison.",
  date: "May 3, 2026",
  readTime: "6 min read",
  category: "How-to",
  tags: ["EV incentives", "government rebates", "stamp duty", "FBT exemption", "EV vs petrol", "Australia"],
  content: [
    {
      heading: "Why incentives matter more than most people realise",
      body: "When people sit down to compare the cost of buying an EV versus a petrol car, they usually look at the sticker price, fuel savings and servicing costs. That is a solid start, but it misses a significant piece of the puzzle. Federal and state government incentives can shift the total cost of ownership by thousands of dollars, sometimes enough to tip the comparison firmly in favour of an EV. The tricky part is that incentives vary by state, change over time and apply in different ways depending on whether you are buying as an individual, through a business or via a novated lease. This guide walks you through the main types of incentives available in Australia as of mid-2026, and shows you how to plug them into a proper cost comparison."
    },
    {
      heading: "The main types of incentives on offer",
      body: "Australian EV incentives fall into a handful of broad categories. Understanding which bucket each one sits in helps you work out whether it reduces your upfront cost, your ongoing costs or your tax bill.",
      list: [
        "Purchase rebates and subsidies: A direct reduction in the purchase price, paid by a state or territory government. These have been the most visible incentives in recent years, though availability and amounts vary considerably by state.",
        "Stamp duty exemptions or concessions: Several states waive or reduce stamp duty on new EV purchases, which can save anywhere from a few hundred to a few thousand dollars depending on the vehicle price.",
        "Registration fee discounts: Some states offer reduced annual registration fees for EVs, which adds up over the life of the vehicle.",
        "Federal fringe benefits tax (FBT) exemption: If you are an employee using a novated lease, eligible low-emission vehicles can be fully exempt from FBT, which is one of the most valuable incentives available for salary-packaged vehicles.",
        "Luxury car tax threshold: The LCT threshold for fuel-efficient vehicles is higher than for other cars, meaning some EVs avoid luxury car tax that a comparable petrol vehicle would attract.",
        "Business depreciation incentives: Small businesses may be able to apply instant asset write-off or accelerated depreciation to an EV purchase, reducing taxable income in the year of purchase."
      ]
    },
    {
      heading: "State-by-state snapshot",
      body: "Incentives differ significantly depending on where you live. The table below gives a general overview as of May 2026, but you should always check with your state revenue office or the relevant government website for the most current figures, since these programs are updated regularly.",
      table: {
        headers: ["State/Territory", "Purchase rebate", "Stamp duty exemption", "Registration discount"],
        rows: [
          ["NSW", "No active rebate", "Yes, for eligible EVs under threshold", "No"],
          ["VIC", "No active rebate", "Yes, zero duty on new EVs", "No"],
          ["QLD", "No active rebate", "Yes, full exemption on new EVs", "No"],
          ["SA", "No active rebate", "Yes, full exemption on new EVs", "No"],
          ["WA", "Up to $3,500 rebate (income tested)", "Yes, full exemption", "No"],
          ["TAS", "No active rebate", "Concession available", "Yes, reduced fee"],
          ["ACT", "No active rebate", "Yes, full exemption", "Yes, zero registration"],
          ["NT", "No active rebate", "Partial concession", "No"]
        ]
      }
    },
    {
      heading: "How the FBT exemption works and why it is so powerful",
      body: "The federal FBT exemption is worth understanding in detail because it is often the single biggest incentive available, yet many employees do not know it applies to them. Under the current rules, eligible battery electric vehicles, plug-in hybrid electric vehicles and hydrogen fuel cell vehicles that fall under the luxury car tax threshold for fuel-efficient vehicles can be packaged through a novated lease without attracting fringe benefits tax. In practical terms, this means your employer can deduct your car payments, fuel or charging costs, registration, insurance and servicing from your pre-tax salary. Because you are paying with pre-tax dollars and there is no FBT liability on top, the effective cost of the vehicle can be significantly lower than buying it personally. The saving depends on your marginal tax rate. Someone on a 37 per cent marginal rate saving $15,000 a year in novated lease payments is effectively getting almost $5,600 back each year compared to paying from after-tax income. Over a five-year lease, that is a meaningful difference."
    },
    {
      callout: {
        type: "tip",
        text: "If your employer offers salary packaging, ask your HR or payroll team whether they have a novated lease provider set up. Even if EVs are not currently on your radar, understanding the FBT exemption before you buy could save you thousands. Some novated lease providers have online calculators that can show you your personalised after-tax saving in minutes."
      }
    },
    {
      heading: "How to include incentives in your cost comparison",
      body: "Once you know which incentives apply to your situation, you need to account for them correctly in your comparison. Here is a simple approach that works whether you are doing the maths yourself or using a calculator like ours.",
      list: [
        "Start with the drive-away price: Get a real quote including on-road costs. If a state stamp duty exemption applies, make sure the dealer or finance provider has already excluded stamp duty from the total.",
        "Subtract any direct purchase rebate: If your state offers a cash rebate at the time of purchase, subtract this from the drive-away price to get your effective purchase cost.",
        "Adjust for LCT if relevant: If the EV you are considering falls under the fuel-efficient LCT threshold but a comparable petrol vehicle does not, note that the petrol car carries an additional tax that should be reflected in its purchase price.",
        "Account for the FBT exemption as an annual saving: If you are using a novated lease, calculate your annual pre-tax salary packaging amount and apply your marginal tax rate to find the annual tax saving. Add this up over the lease term.",
        "Include ongoing cost differences: Lower registration fees and any ongoing government incentives for charging infrastructure should be counted as annual savings.",
        "Use a net present value approach for multi-year comparisons: Money saved in year four is worth slightly less than money saved today. For a rigorous comparison, discount future savings at a modest rate, around 4 to 6 per cent, to bring everything back to today's dollars."
      ]
    },
    {
      heading: "Common mistakes to avoid",
      body: "Even well-informed buyers make errors when factoring in incentives. A few things to watch out for.",
      list: [
        "Counting an incentive you are not eligible for: Some rebates are income-tested, capped at certain vehicle prices or only available on new vehicles. Always check the eligibility criteria.",
        "Forgetting that incentives are taxable in some cases: Business buyers should check with their accountant, since some incentives may need to be declared as income or reduce the asset's cost base for depreciation purposes.",
        "Assuming incentives will last: State rebates in particular have come and gone quickly in recent years. If you are planning to buy in six months, do not assume a current program will still be running.",
        "Double-counting the FBT benefit: If you are comparing a novated lease EV against a personally financed petrol car, make sure you are comparing like for like. The FBT saving only applies under a novated lease structure.",
        "Ignoring future incentive changes: Some states have announced plans to introduce road-user charges for EVs as EV uptake grows. These are real costs that should be factored into longer-term comparisons."
      ]
    },
    {
      heading: "Using our calculator to pull it all together",
      body: "Our EV vs petrol calculator lets you enter your state, purchase method and vehicle price so it can automatically apply the relevant stamp duty exemption and flag any available rebates. For FBT and novated lease scenarios, you can enter your gross income and the calculator will estimate your marginal tax rate and show the after-tax cost alongside a standard purchase comparison. If you are unsure which incentives apply to you, start with the calculator's guided mode and it will ask you a few simple questions to work out your situation. The goal is to give you a single, comparable total cost of ownership figure for an EV and a petrol alternative so you can make a genuinely informed decision rather than one based on the sticker price alone.",
      callout: {
        type: "info",
        text: "Incentive amounts and eligibility rules change regularly. We update our calculator whenever state or federal programs change, but for large purchases it is always worth confirming current figures directly with your state revenue office or a financial adviser."
      }
    }
  ]
},
  {
  slug: "electric-cars-vs-petrol-cars-which-has-lower-lifetime-emissi",
  title: "Electric cars vs petrol cars: which has lower lifetime emissions and costs?",
  excerpt: "We break down the real numbers behind electric and petrol cars in Australia, covering lifetime emissions, running costs, and what it all means for your hip pocket.",
  date: "May 10, 2026",
  readTime: "7 min read",
  category: "Tips",
  tags: ["electric vehicles", "petrol cars", "emissions", "running costs", "Australia", "EV", "lifetime cost"],
  content: [
    {
      heading: "The big question Australians are asking",
      body: "With fuel prices stubbornly high and electricity rates shifting constantly, more Australians than ever are wondering whether switching to an electric vehicle actually makes sense. Is it better for the environment? Is it cheaper over the long run? And how do you even compare the two when so many variables are involved? This post walks through the key numbers so you can make a genuinely informed decision, whether you are shopping for your next car today or just curious about how it all stacks up."
    },
    {
      heading: "Lifetime emissions: the full picture",
      body: "A common argument against EVs is that manufacturing the battery produces a large carbon footprint, sometimes called the 'carbon debt'. That is true to a degree. Producing an EV, particularly the battery pack, does generate more emissions upfront than building a comparable petrol car. Studies generally estimate that manufacturing an EV produces roughly 70 to 100 percent more emissions than manufacturing a petrol car of similar size. However, this debt is paid back over time through lower operational emissions. In Australia, the national electricity grid has been getting cleaner every year as coal plants close and renewable energy capacity grows. As of 2026, the average grid emissions intensity sits around 0.45 to 0.50 kg of CO2-equivalent per kilowatt hour, depending on your state. That figure continues to fall. Over a 10 to 15 year ownership period, a typical EV driven in Australia will produce significantly fewer total lifecycle emissions than an equivalent petrol vehicle, even when you factor in battery production. If you are in South Australia, Tasmania, or the ACT, where renewable penetration is especially high, the emissions advantage of an EV is even more pronounced."
    },
    {
      heading: "How do running costs compare?",
      body: "This is where EVs tend to shine most clearly for Australian drivers. Electricity is generally cheaper per kilometre than petrol, and EVs have far fewer moving parts, which means lower servicing costs over time. Here is a rough comparison based on average Australian conditions in 2026.",
      table: {
        headers: ["Cost category", "Petrol car (per year)", "Electric car (per year)"],
        rows: [
          ["Fuel / charging", "$2,800 (at $2.00/L, 15,000 km)", "$600 (home charging at $0.30/kWh)"],
          ["Servicing", "$800 to $1,200", "$300 to $500"],
          ["Registration", "$700 to $900", "$700 to $900"],
          ["Insurance", "$1,200 to $1,800", "$1,300 to $1,900"],
          ["Total (approx.)", "$5,500 to $6,700", "$2,900 to $3,900"]
        ]
      }
    },
    {
      heading: "The upfront cost gap is narrowing",
      body: "One of the biggest sticking points for EV adoption in Australia has been the higher purchase price. That gap is closing. Entry-level EVs are now available from around $40,000 to $45,000 drive-away, and the used EV market has matured considerably. When you spread the purchase price premium over a typical ownership period and account for lower running costs, many EVs now reach total cost of ownership parity with petrol equivalents within four to seven years, sometimes sooner if you drive high annual kilometres. The Australian Government's Fringe Benefits Tax exemption for eligible EVs under the luxury car tax threshold also makes salary packaging an EV an attractive option for employees, effectively reducing the net cost significantly."
    },
    {
      heading: "Factors that tip the balance",
      body: "Not every situation is the same. Several factors will influence whether an EV or a petrol car comes out ahead for you personally.",
      list: [
        "Annual kilometres driven: the more you drive, the faster you recoup the EV purchase premium through fuel savings.",
        "Your electricity tariff: if you can charge on an off-peak or controlled load rate (often as low as $0.10 to $0.15 per kWh overnight), your savings increase substantially.",
        "Access to home charging: renters or apartment dwellers without dedicated charging may rely more on public charging, which costs more per kWh.",
        "Your state's grid mix: Queensland and Victoria still have higher grid emissions intensity than SA or Tasmania, so the emissions benefit varies by location.",
        "Vehicle type and size: larger EVs with bigger batteries have a higher manufacturing footprint to overcome.",
        "Resale value: EV resale values have stabilised but can still vary significantly by brand and battery condition.",
        "Government incentives: some states still offer stamp duty exemptions or rebates that reduce the upfront gap."
      ]
    },
    {
      callout: {
        type: "tip",
        text: "Use our EV vs petrol calculator to plug in your own numbers, including your postcode, annual kilometres, electricity tariff, and vehicle models. It will estimate your personalised lifetime cost and emissions comparison in under two minutes."
      }
    },
    {
      heading: "What about the charging network?",
      body: "Range anxiety was a legitimate concern a few years ago but it has diminished significantly. Australia's fast-charging network along major highways and in metropolitan areas has grown rapidly, with networks like Chargefox, Evie, Tesla Supercharger, and BP Pulse covering most populated routes. For daily driving, the vast majority of Australians travelling under 200 kilometres per day will rarely if ever need a public fast charger, as overnight home charging is sufficient. Long road trips do require a bit more planning than filling up at a servo, but with apps and in-car navigation improving, this is increasingly a minor inconvenience rather than a dealbreaker."
    },
    {
      heading: "So which should you choose?",
      body: "For most Australians who drive regularly, own or have access to home charging, and plan to keep their vehicle for more than five years, an electric car will likely deliver lower lifetime costs and lower lifetime emissions than a comparable petrol vehicle. The case is strongest if you drive high annual kilometres, have access to cheap overnight electricity, and live in a state with a cleaner grid. That said, petrol cars still make practical sense in some situations, particularly for people in very remote areas with limited charging infrastructure, those who cannot install a home charger, or those who need the flexibility of a vehicle type not yet well represented in the EV market, such as certain utes and larger four-wheel drives (though that segment is changing quickly too). The honest answer is that the right choice depends on your personal circumstances, and a good calculator can do the heavy lifting for you.",
      callout: {
        type: "info",
        text: "Australia's average grid emissions intensity is projected to drop further as more renewable capacity comes online over the next decade. An EV you buy today will produce even lower operational emissions in five years than it does now, making the lifetime emissions case for EVs stronger the longer you own one."
      }
    }
  ]
},
  {
  slug: "how-to-compare-the-total-cost-of-ownership-for-any-ev-and-pe",
  title: "How to compare the total cost of ownership for any EV and petrol model",
  excerpt: "Sticker price is only part of the story. Here is how to calculate the true long-term cost of an electric vehicle versus a petrol car so you can make a confident decision.",
  date: "May 17, 2026",
  readTime: "7 min read",
  category: "How-to",
  tags: ["total cost of ownership", "EV vs petrol", "calculator", "running costs", "Australia"],
  content: [
    {
      heading: "Why sticker price alone will mislead you",
      body: "Walk into any dealership and the price on the windscreen feels like the whole story. But for most Australians, a car is a five-to-ten-year commitment, and the purchase price is often a smaller piece of the total spend than you might expect. Fuel, servicing, insurance, registration, depreciation and financing costs all stack up over time. An EV that looks $15,000 more expensive at the point of sale can easily end up cheaper over a typical ownership period once you account for lower running costs. The only way to know for certain is to compare total cost of ownership, or TCO, rather than just the drive-away price."
    },
    {
      heading: "What total cost of ownership actually includes",
      body: "TCO is the sum of every dollar you spend on a vehicle from the day you buy it to the day you sell or scrap it. For a fair apples-to-apples comparison between an EV and a petrol car, you need to include the same categories for both. Here are the main cost buckets to consider:",
      list: [
        "Purchase price (or deposit plus loan repayments if financing)",
        "Fuel or electricity costs based on how many kilometres you drive each year",
        "Scheduled servicing and maintenance",
        "Tyres and consumables",
        "Registration and compulsory third-party insurance",
        "Comprehensive insurance premiums",
        "Depreciation over the ownership period",
        "Any government rebates or stamp duty concessions you are eligible for",
        "Home charger installation cost if buying an EV"
      ]
    },
    {
      heading: "Step-by-step: how to run the comparison",
      body: "Once you know which cost categories to include, the process is straightforward. Work through each step below and you will end up with a reliable annual and lifetime cost figure for each vehicle.",
    },
    {
      subheading: "Step 1: Set your ownership period and annual kilometres",
      body: "Decide how long you plan to keep the car and roughly how far you drive each year. The Australian average is around 13,000 km per year, but your actual figure matters a lot. The more you drive, the more fuel or energy savings compound in favour of an EV."
    },
    {
      heading: "Step 2: calculate fuel and energy costs",
      body: "For the petrol car, multiply your annual kilometres by the vehicle's fuel consumption (litres per 100 km) and then by the current petrol price in your area. Petrol prices vary significantly across states and between city and regional areas, so use a figure that reflects your real-world fill-ups. For the EV, multiply your annual kilometres by the vehicle's energy consumption (kWh per 100 km) and then by your home electricity rate. Most home chargers in Australia deliver electricity at somewhere between 20 and 35 cents per kWh depending on your plan and state. If you charge partly at public fast chargers, factor in those higher rates too. A realistic split for most EV owners is roughly 80 per cent home charging and 20 per cent public charging.",
      callout: {
        type: "tip",
        text: "If you have rooftop solar, your effective charging cost could be close to zero for daytime top-ups. Use your solar feed-in tariff as a proxy for the true cost of the electricity you are diverting to your car rather than exporting."
      }
    },
    {
      heading: "Step 3: estimate servicing and maintenance",
      body: "This is where EVs tend to have a clear structural advantage. EVs have no oil changes, no timing belts, fewer brake wear issues thanks to regenerative braking, and generally simpler drivetrains. Industry data consistently puts EV servicing costs at 30 to 50 per cent lower than equivalent petrol vehicles over a five-year period. For a ballpark figure, budget around $300 to $500 per year for EV servicing (tyre rotations, cabin air filters, software checks) versus $800 to $1,500 per year for a petrol car depending on the model and service intervals."
    },
    {
      heading: "Step 4: account for depreciation and resale value",
      body: "Depreciation is the single largest cost for most car owners and it is easy to overlook. The difference between what you pay and what you eventually sell the car for is a real cost, even if it does not show up as a monthly bill. EV resale values in Australia have stabilised considerably since the early 2020s as the used EV market has matured. Popular models from reputable manufacturers now hold their value reasonably well. Check recent private sale and auction data on sites like RedBook or CarsGuide for the specific models you are comparing rather than relying on rules of thumb.",
      callout: {
        type: "info",
        text: "Some states still offer stamp duty exemptions or reduced rates for new EVs. Check your state revenue office website for the current rules before finalising your numbers, as these concessions can shift the purchase price comparison meaningfully."
      }
    },
    {
      heading: "Use our calculator to pull it all together",
      body: "Doing all of this manually in a spreadsheet is absolutely possible, but it takes time and it is easy to miss a variable or use an outdated figure. Our TCO calculator on ev-vs-petrol-calc.com is designed specifically for Australian conditions. It pulls in current average fuel prices by state, lets you enter your actual electricity tariff, and applies up-to-date servicing benchmarks for hundreds of EV and petrol models available in Australia. You can adjust every assumption to match your situation and see instantly how the lifetime costs shift. The output shows you a year-by-year cost breakdown and a clear crossover point where the EV becomes cheaper in cumulative terms. For most drivers doing average kilometres, that crossover happens somewhere between year two and year four.",
      callout: {
        type: "warning",
        text: "Be cautious of comparisons you find on manufacturer websites or in press releases. They often use best-case fuel consumption figures, low petrol prices or high electricity rates to favour their own product. Always use your real-world numbers."
      }
    },
    {
      heading: "Making a decision that suits your situation",
      body: "A TCO comparison gives you the financial picture, but it is worth remembering that numbers alone do not capture everything. Your access to home charging, how often you drive long distances, whether you live in a regional area with limited public charging, and even how much you enjoy driving a particular car all factor into the right choice for you. That said, the maths for many Australian drivers now favours EVs over a typical ownership period, particularly for people who drive above average kilometres and can charge at home overnight. Running the comparison with your own figures is the best way to find out where the line sits for your circumstances."
    }
  ]
},
  {
  slug: "how-fuel-price-volatility-makes-the-case-for-switching-to-an",
  title: "How fuel price volatility makes the case for switching to an electric car",
  excerpt: "Petrol prices in Australia have always been unpredictable, but recent swings are making drivers rethink their next car. Here's how fuel price volatility strengthens the financial argument for going electric.",
  date: "May 24, 2026",
  readTime: "6 min read",
  category: "Tips",
  tags: ["fuel prices", "electric vehicles", "running costs", "EV savings", "petrol vs electric", "Australia"],
  content: [
    {
      heading: "The petrol price rollercoaster is getting worse",
      body: "If you've filled up your tank lately, you already know the pain. Australian petrol prices have always moved in cycles, but the swings have become sharper and harder to predict. One week you're paying $1.75 per litre, the next it's crept past $2.20. Global oil markets, the Australian dollar, refinery issues, and geopolitical tensions all feed into what you pay at the bowser. And none of those factors are going away anytime soon. For households trying to budget, this unpredictability is genuinely stressful. It makes it very difficult to know what your car will actually cost you from one month to the next."
    },
    {
      heading: "Why electricity costs are more stable",
      body: "Electricity prices in Australia are not immune to change either. We've seen increases over recent years tied to energy market reforms and infrastructure investment. But there's a crucial difference: electricity price changes tend to be gradual, announced in advance, and far less dramatic than the week-to-week swings you see at the petrol pump. If you're on a fixed-rate electricity plan, your charging cost per kilometre is essentially locked in. Better still, if you have solar panels at home, a significant portion of your charging can come at near-zero cost. That kind of cost certainty is something petrol drivers simply cannot access."
    },
    {
      heading: "What the numbers actually look like",
      body: "Let's put some rough figures around this. At $2.00 per litre, a petrol car averaging 10 litres per 100 km costs around $20 per 100 km in fuel alone. At $1.75 per litre, that drops to $17.50. At $2.25, it jumps to $22.50. Your monthly fuel spend can vary by $30 to $60 or more just because of market forces you can't control. An average EV in Australia uses roughly 15 to 18 kWh per 100 km. At a typical off-peak home charging rate of around $0.15 per kWh, that works out to roughly $2.25 to $2.70 per 100 km. Even at peak grid rates of $0.35 per kWh, you're looking at around $5.25 to $6.30 per 100 km. The difference is substantial, and the EV side of that equation barely moves.",
      table: {
        headers: ["Scenario", "Cost per 100 km", "Monthly cost (1,500 km)"],
        rows: [
          ["Petrol at $1.75/L (10L/100km)", "$17.50", "$262.50"],
          ["Petrol at $2.00/L (10L/100km)", "$20.00", "$300.00"],
          ["Petrol at $2.25/L (10L/100km)", "$22.50", "$337.50"],
          ["EV at $0.15/kWh (16kWh/100km)", "$2.40", "$36.00"],
          ["EV at $0.35/kWh (16kWh/100km)", "$5.60", "$84.00"]
        ]
      }
    },
    {
      heading: "The hidden cost of uncertainty",
      body: "Beyond the dollars and cents, there's a real cognitive and emotional cost to fuel price volatility. Budgeting for a household becomes harder when one of your regular expenses can shift by 20 to 30 per cent without warning. Families making decisions about longer road trips, daily commutes, or whether to take on extra driving for work often factor in this uncertainty in ways that quietly affect quality of life. Switching to an EV doesn't just save money in most scenarios. It also removes a major source of financial unpredictability from your monthly budget. That peace of mind has real value, even if it doesn't show up neatly on a spreadsheet."
    },
    {
      heading: "Factors that make the switch even more compelling right now",
      list: [
        "The range of affordable EVs available in Australia has expanded significantly, with more models under $50,000 than ever before.",
        "Many state governments still offer stamp duty exemptions or rebates for new EV purchases, reducing the upfront cost gap.",
        "Home solar installation rates in Australia are among the highest in the world, meaning many households can charge for very little.",
        "Public charging infrastructure has improved considerably, making range anxiety less of a practical concern for most drivers.",
        "EV servicing costs are generally lower than petrol vehicles due to fewer moving parts and no need for oil changes.",
        "Time-of-use electricity tariffs allow savvy EV owners to charge overnight at the cheapest possible rates."
      ]
    },
    {
      callout: {
        type: "tip",
        text: "Use the EV vs Petrol Calculator on this site to plug in your own driving habits, local electricity rate, and the current petrol price in your area. It shows you a personalised breakeven point and long-term savings estimate, so you can see exactly where you stand rather than relying on generic figures."
      }
    },
    {
      heading: "What about the upfront cost?",
      body: "The most common objection to switching to an EV is the higher purchase price compared to an equivalent petrol car. It's a fair point. Entry-level EVs typically cost more upfront than a comparable petrol hatchback or SUV. But the calculation changes significantly when you factor in lower running costs over time. For drivers covering 15,000 km or more per year, many EVs reach cost parity with their petrol equivalents within three to five years, sometimes sooner if petrol prices spike. The key is to look at the total cost of ownership over the life of the vehicle, not just the sticker price on the lot. A car you own for seven to ten years will accumulate a lot of fuel costs, and every time petrol prices surge, that total grows."
    },
    {
      heading: "Is now a good time to make the switch?",
      body: "For many Australian drivers, the answer is yes, particularly if you do a reasonable amount of driving, have access to home charging, and are due for a new car anyway. The financial case has never been stronger, and the practical barriers around range and charging have come down considerably. That said, switching isn't right for everyone. If you live in a regional area with limited charging infrastructure, drive very low annual kilometres, or rely heavily on long interstate hauls without convenient charging stops, you may want to wait a little longer. The best approach is to run your own numbers. Use a calculator that accounts for your actual driving patterns, your electricity rate, and realistic petrol price scenarios. The results might surprise you.",
      callout: {
        type: "info",
        text: "Fuel price forecasts are notoriously unreliable, but historical data shows Australian petrol prices have trended upward over the long term with frequent short-term spikes. Building that volatility into your cost comparison gives you a much more realistic picture than assuming prices stay flat."
      }
    }
  ]
},
  {
  slug: "how-many-miles-do-you-need-to-drive-before-an-ev-pays-off",
  title: "How many miles do you need to drive before an EV pays off?",
  excerpt: "Buying an electric vehicle costs more upfront than a comparable petrol car, but lower running costs mean you eventually come out ahead. Here is how to work out your personal break-even point as an Australian driver.",
  date: "June 1, 2026",
  readTime: "7 min read",
  category: "Calculator guide",
  tags: ["electric vehicles", "break-even", "running costs", "EV savings", "Australia"],
  content: [
    {
      heading: "The big question every EV buyer asks",
      body: "When you are staring down a sticker price that can be $10,000 to $30,000 higher than a comparable petrol car, it is only natural to wonder whether you will ever actually save money. The good news is that for most Australian drivers the answer is yes. The catch is that the payoff depends heavily on how much you drive, what you pay for electricity, and what petrol costs in your area. There is no single magic number that applies to everyone, but this guide will walk you through the logic so you can find your own break-even point."
    },
    {
      heading: "Why kilometres matter more than years",
      body: "Most break-even guides talk about years, but kilometres driven is the more honest measure. A tradie who racks up 35,000 km a year will hit break-even far sooner than a retiree doing 8,000 km a year, even if they both buy the same car on the same day. Every kilometre you drive in an EV instead of a petrol car generates a saving on fuel. The more you drive, the faster those savings stack up to cancel out the premium you paid at the dealership. That is why the question in the title is really the right one to ask."
    },
    {
      heading: "The numbers behind a typical Australian comparison",
      body: "Let us use a realistic mid-range example to make this concrete. Assume you are comparing a popular electric SUV priced at $65,000 against a similar petrol SUV at $48,000. That is a $17,000 price gap to recover. Here is what the running cost difference looks like on a per-kilometre basis using mid-2026 Australian averages.",
      table: {
        headers: ["Cost item", "Petrol SUV", "Electric SUV"],
        rows: [
          ["Fuel or electricity cost per 100 km", "$14.50 (at $2.10/L, 6.9L/100km)", "$3.60 (at 30 kWh/100km, 12c/kWh home charging)"],
          ["Annual servicing estimate", "$900", "$350"],
          ["Registration and insurance (similar)", "$1,800", "$1,800"],
          ["Total annual cost at 15,000 km", "$4,875", "$2,210"],
          ["Annual saving with EV", "", "$2,665"]
        ]
      }
    },
    {
      heading: "Calculating your break-even kilometre figure",
      body: "With a $17,000 price premium and a saving of roughly $2,665 per year at 15,000 km, you would break even in about 6.4 years. But what if you drive more? At 25,000 km a year the annual saving scales up to around $4,440, and you hit break-even in about 3.8 years. At 8,000 km a year it blows out to roughly 12 years, which may be longer than you plan to keep the car. In total kilometres driven, break-even for this example sits at around 95,000 to 100,000 km regardless of how quickly you accumulate them. That is a useful anchor number to keep in mind."
    },
    {
      callout: {
        type: "tip",
        text: "Use the ev-vs-petrol-calc.com calculator to plug in your own numbers. Enter your actual postcode electricity rate, your local petrol price, and your real annual kilometres, and the tool will show you a personalised break-even chart in seconds."
      }
    },
    {
      heading: "Factors that move the break-even point closer or further away",
      body: "The example above uses averages, but your situation may be quite different. Here are the main levers that will shift your personal break-even distance.",
      list: [
        "Home charging rate: If you are on a controlled-load or off-peak tariff as low as 8 to 10 cents per kWh, your electricity cost per kilometre drops significantly and break-even arrives sooner.",
        "Solar panels: Charging from rooftop solar can push the effective cost per kilometre close to zero during daylight hours, which dramatically improves the EV case.",
        "Petrol prices: Every time the bowser price rises, your petrol car costs more to run and your EV break-even point moves closer.",
        "Government incentives: Some states still offer stamp duty exemptions or rebates on new EVs in 2026. These reduce your effective price premium and shorten the payback period.",
        "EV model efficiency: A more efficient EV (using fewer kWh per 100 km) will save more per kilometre. Check the energy consumption figure, not just the range.",
        "Resale value: EVs from reputable brands have been holding their value reasonably well. A stronger resale value effectively reduces the total cost of ownership.",
        "Servicing savings: EVs have no oil changes, fewer brake replacements thanks to regenerative braking, and simpler drivetrains. These savings compound over time.",
        "Public charging habits: If you rely heavily on fast chargers at highway stops or shopping centres, your per-kilometre electricity cost rises and the savings narrow."
      ]
    },
    {
      heading: "A quick rule of thumb for Australian drivers",
      body: "If you drive more than 20,000 km per year and you have access to home charging, an EV will almost certainly pay off within five years for most models currently on sale in Australia. If you drive under 10,000 km per year, the financial case alone is unlikely to be compelling unless the price gap is small or you charge almost entirely on cheap solar. For drivers in the middle, the calculator on this site is the fastest way to get a clear answer without working through the maths yourself."
    },
    {
      heading: "The bottom line",
      callout: {
        type: "info",
        text: "Break-even is not just about kilometres. It is the combination of your price premium, your electricity tariff, your petrol spending, and how long you plan to own the car. Run your own numbers before you decide."
      },
      body: "There is no universal answer to how many kilometres you need to drive before an EV pays off, but for a typical Australian household driving around 15,000 km per year and charging at home, the break-even point tends to fall somewhere between 80,000 and 120,000 km. Many drivers reach that mark within five to eight years. If you drive more, you get there faster. The best thing you can do is stop relying on averages and spend two minutes entering your own figures into the calculator. You might be pleasantly surprised by how soon your EV starts paying you back."
    }
  ]
},
  {
  slug: "how-driving-habits-change-the-cost-equation-for-electric-vs",
  title: "How driving habits change the cost equation for electric vs petrol cars",
  excerpt: "Your annual kilometres, charging routine and daily commute all shift the maths on whether an EV or petrol car saves you money. Here is what Australian drivers need to know.",
  date: "June 8, 2026",
  readTime: "7 min read",
  category: "Tips",
  tags: ["electric vehicles", "petrol cars", "running costs", "driving habits", "Australia", "EV savings", "cost comparison"],
  content: [
    {
      heading: "Why one-size-fits-all comparisons miss the point",
      body: "You have probably seen headlines claiming EVs save drivers thousands of dollars a year. You might have also seen the counterargument that the upfront cost makes them a bad deal. Both claims can be true at the same time, depending entirely on how you drive. The distance you cover each week, where you charge, how you use your car and even the time of day you plug in all affect which option works out cheaper over the life of the vehicle. This post breaks down the key driving habits that shift the numbers so you can make a decision based on your actual lifestyle rather than someone else's average."
    },
    {
      heading: "Annual kilometres: the single biggest lever",
      body: "The more you drive, the faster an EV pays back its higher purchase price. Petrol costs in Australia have hovered well above $2 per litre in most capital cities, and a typical petrol car uses around 8 to 11 litres per 100 km. An EV covering the same distance draws roughly 15 to 20 kWh per 100 km, which at average grid electricity prices costs a fraction of the equivalent fuel bill. If you are driving 25,000 km or more each year, the fuel savings stack up quickly and the breakeven point against a comparable petrol car arrives sooner. If you are only clocking 8,000 km a year, the savings are real but slower to accumulate, meaning the maths tilts more towards the purchase price difference.",
      table: {
        headers: ["Annual km", "Est. petrol fuel cost", "Est. EV charging cost", "Annual saving"],
        rows: [
          ["8,000 km", "$1,760", "$480", "$1,280"],
          ["15,000 km", "$3,300", "$900", "$2,400"],
          ["25,000 km", "$5,500", "$1,500", "$4,000"],
          ["40,000 km", "$8,800", "$2,400", "$6,400"]
        ]
      }
    },
    {
      heading: "Home charging vs public charging: a big cost difference",
      body: "One of the most important factors in the EV cost equation is where you charge. Home charging overnight, particularly on an off-peak tariff, is far cheaper than using a public fast charger. Many Australian energy retailers offer overnight rates below 15 cents per kWh, while public DC fast chargers can cost 55 to 75 cents per kWh or more. If you live in a house with a dedicated charger and you plug in each night, your per-kilometre energy cost is very low. If you rely primarily on public charging, say because you live in an apartment without charging access, the economics shift considerably. Some apartment dwellers and renters find that public charging costs eat into the savings they expected from switching."
    },
    {
      callout: {
        type: "tip",
        text: "If you have solar panels at home, charging your EV during the middle of the day using your own generated electricity can bring the effective cost per kilometre close to zero. Factor this into your calculation if you have or plan to install rooftop solar."
      }
    },
    {
      heading: "Trip type matters: city driving vs highway driving",
      body: "EVs shine in stop-and-go city traffic. Regenerative braking recovers energy each time you slow down, which means urban driving is far more efficient for an EV than for a petrol vehicle. Petrol engines tend to run more efficiently at steady highway speeds, so the gap between EV and petrol running costs narrows a little on long country trips. For drivers who do mostly urban commuting, the efficiency advantage of an EV is at its strongest. For those spending hours on regional highways every week, the savings are still real but slightly smaller on a per-kilometre basis. Range anxiety is also more relevant for frequent long-distance drivers, though Australia's fast-charging network has expanded significantly in recent years.",
      list: [
        "City and suburban commuters get the best efficiency from regenerative braking",
        "Highway driving narrows the efficiency gap slightly but EVs are still cheaper to run",
        "Long-distance regional drivers should check fast-charger locations along their regular routes",
        "Petrol cars do not require any charging infrastructure planning",
        "Mixed driving typical of most Australians still favours EVs on running costs"
      ]
    },
    {
      heading: "How often you service your car affects the total cost",
      body: "EVs have fewer moving parts than internal combustion engine vehicles. There is no oil to change, no timing belt to replace, no transmission fluid and fewer brake pad replacements thanks to regenerative braking. The average Australian petrol car owner spends somewhere between $500 and $1,200 per year on scheduled maintenance depending on the vehicle and service history. EV servicing costs are generally lower, often in the range of $200 to $500 annually for tyre rotations, cabin air filters and software checks. Over a five-year ownership period, this difference can add up to several thousand dollars and should be included in any honest comparison."
    },
    {
      heading: "The breakeven point: what it means for your situation",
      body: "The breakeven point is how long it takes for the combined running cost savings of an EV to offset its higher purchase price compared to a similar petrol car. High annual kilometres, home charging, urban driving and lower servicing costs all push the breakeven point earlier. Low annual kilometres, reliance on public fast charging and a very competitive petrol car price all push it later. For a typical Australian driver covering around 15,000 km per year with home charging, the breakeven on a mid-range EV compared to a comparable petrol model currently sits somewhere between three and six years depending on the specific vehicles. Our calculator on this site lets you plug in your own numbers to get a personalised estimate.",
      callout: {
        type: "info",
        text: "Use the EV vs Petrol Calculator on this site to enter your actual annual kilometres, charging method, electricity tariff and fuel price. The result will be specific to your driving profile rather than a national average."
      }
    },
    {
      heading: "A few habits worth reviewing before you decide",
      body: "Before committing to either an EV or sticking with petrol, it is worth honestly assessing a few things about how you actually use your car day to day. Small details can shift the numbers more than you might expect.",
      list: [
        "Check your odometer history: how many kilometres did you drive in the last 12 months?",
        "Assess your charging access: do you have off-street parking with power access at home?",
        "Consider your typical trip profile: mostly short urban trips, long highway runs or a mix?",
        "Look at your current servicing costs and factor in how long you plan to keep the vehicle",
        "If you have solar panels, calculate how much free or low-cost charging you could realistically do",
        "Think about whether your driving patterns might change in the next few years"
      ]
    }
  ]
},
  {
  slug: "how-electricity-prices-affect-the-savings-from-switching-to",
  title: "How electricity prices affect the savings from switching to an EV",
  excerpt: "Your electricity rate is one of the biggest variables in the EV savings equation. Here is what Australian drivers need to know before making the switch.",
  date: "June 15, 2026",
  readTime: "6 min read",
  category: "Tips",
  tags: ["electricity prices", "EV savings", "running costs", "Australia", "charging"],
  content: [
    {
      heading: "The fuel cost equation has changed",
      body: "When Australians talk about switching to an electric vehicle, the conversation almost always lands on fuel savings. Petrol prices are visible and painful, updated on a big sign at every servo you drive past. Electricity costs, on the other hand, are buried in a quarterly bill and vary enormously depending on where you live, who your retailer is, and when you charge. That variability matters a lot. Two EV owners driving identical cars the same number of kilometres each year can end up with very different savings simply because of their electricity rate. Understanding how your rate affects the numbers is one of the most useful things you can do before you commit to going electric."
    },
    {
      heading: "Why electricity rates vary so much in Australia",
      body: "Australia does not have a single national electricity market in the way it has a single petrol price benchmark. Retail electricity prices differ by state, by distributor network, by tariff type, and by retailer plan. In 2026, flat-rate residential tariffs across the country range from roughly 25 cents per kilowatt-hour in parts of Queensland to over 40 cents per kilowatt-hour in South Australia. Add solar feed-in tariffs, time-of-use plans, and EV-specific tariffs into the mix and the spread widens further. The rate you are actually paying right now might be quite different from the default rate your neighbour is on, even if you live on the same street.",
      list: [
        "Flat-rate tariffs: a single price per kWh regardless of when you use power",
        "Time-of-use tariffs: cheaper off-peak rates (often overnight) and more expensive peak rates",
        "EV-specific tariffs: some retailers offer dedicated low overnight rates for EV charging",
        "Solar self-consumption: if you have rooftop solar, charging during the day can reduce your effective cost to near zero",
        "Controlled load tariffs: a separate cheaper circuit, sometimes available for EV charging in certain networks"
      ]
    },
    {
      heading: "How the rate changes your annual savings",
      body: "Let us look at a concrete example. Assume you drive 15,000 kilometres per year in a mid-size EV with an efficiency of 18 kWh per 100 km. That means you consume around 2,700 kWh of electricity annually for driving. Now compare that against a petrol equivalent consuming 8 litres per 100 km, with petrol at $2.00 per litre.",
      table: {
        headers: ["Electricity rate (per kWh)", "Annual electricity cost", "Annual petrol cost", "Annual saving"],
        rows: [
          ["$0.25", "$675", "$2,400", "$1,725"],
          ["$0.30", "$810", "$2,400", "$1,590"],
          ["$0.35", "$945", "$2,400", "$1,455"],
          ["$0.40", "$1,080", "$2,400", "$1,320"],
          ["$0.10 (solar or EV tariff)", "$270", "$2,400", "$2,130"]
        ]
      }
    },
    {
      heading: "The solar charging advantage",
      body: "If your home has rooftop solar, the calculus shifts dramatically in your favour. Instead of exporting excess solar generation at a feed-in tariff that has dropped to as low as 4 to 6 cents per kWh in many states, you can use that energy to charge your EV at an effective cost of almost nothing. Drivers who can schedule their charging between 10am and 3pm and work from home, or who have a smart charger that tops up automatically during solar generation hours, are routinely achieving effective charging costs well below 10 cents per kWh. Over a year, that can push savings past $2,000 compared to petrol, even before you factor in lower servicing costs.",
      callout: {
        type: "tip",
        text: "If you have solar panels, set your EV charger to run during peak generation hours rather than overnight. On a good sunny day you can fill up for virtually nothing, instead of exporting cheap solar back to the grid."
      }
    },
    {
      heading: "Time-of-use tariffs and overnight charging",
      body: "For households without solar, a time-of-use or EV-specific tariff is the next best option. Several Australian retailers now offer overnight rates as low as 15 to 20 cents per kWh between 11pm and 6am. If you plug in before bed every night, you could halve your effective charging cost compared to a flat-rate tariff. The catch is that your daytime rate on these plans is often higher, so households with heavy daytime usage need to do the sums carefully. For most EV-owning households where the car charges overnight and other consumption patterns stay roughly the same, the switch to a time-of-use plan is almost always worth it.",
      callout: {
        type: "warning",
        text: "Switching to a time-of-use tariff to save on EV charging can backfire if your household uses a lot of power during peak evening hours (typically 3pm to 9pm). Check your usage pattern on your retailer app before switching plans."
      }
    },
    {
      heading: "Public charging costs are a different story",
      body: "Home charging is where the real savings live for most Australians. Public DC fast chargers, while convenient on long trips, typically cost between 45 and 75 cents per kWh in 2026, and some operators charge session fees on top of that. If you relied entirely on public charging, the cost advantage over petrol would shrink significantly or disappear altogether. The good news is that most Australian EV owners do the vast majority of their charging at home. Public charging is best thought of as a top-up for longer journeys, not a regular fuelling strategy."
    },
    {
      heading: "Use the calculator to find your personal number",
      body: "The examples above use round numbers to illustrate the principle, but your actual savings depend on your specific electricity rate, your driving habits, your vehicle's efficiency, and where you charge. Our EV vs petrol calculator lets you plug in your own electricity tariff, your postcode, your annual kilometres, and the specific models you are comparing. The difference between entering 28 cents per kWh and 38 cents per kWh can change your projected five-year saving by thousands of dollars, so it is worth taking the five minutes to get the inputs right rather than relying on generic national averages.",
      callout: {
        type: "info",
        text: "Not sure what rate you are on? Check your latest electricity bill for the supply and usage charges section, or log in to your retailer's app. Look for the usage rate in cents per kWh, not the daily supply charge."
      }
    }
  ]
},
  {
  slug: "electric-car-vs-petrol-which-is-cheaper-to-run-in-2025",
  title: "Electric car vs petrol: which is cheaper to run in 2025?",
  excerpt: "Fuel prices, electricity rates, servicing costs and more. We break down the real numbers so you can see which powertrain actually saves you money on Australian roads.",
  date: "June 22, 2026",
  readTime: "7 min read",
  category: "Tips",
  tags: ["electric vehicles", "petrol cars", "running costs", "Australia", "EV savings", "fuel costs"],
  content: [
    {
      heading: "The big question Australian drivers are asking",
      body: "With petrol prices stubbornly sitting above $2.00 per litre in most capital cities and electricity tariffs creeping upward, the question of whether an electric vehicle (EV) is genuinely cheaper to run than a petrol car has never been more relevant. The answer depends on how you drive, where you live and how you charge. Let us walk through the numbers honestly so you can make an informed decision rather than rely on marketing claims from either side.",
    },
    {
      heading: "Fuel and energy costs: the day-to-day numbers",
      body: "The most obvious ongoing cost is energy. Petrol cars guzzle liquid fuel priced at the bowser, while EVs sip electricity priced per kilowatt-hour. Here is a straightforward comparison based on 2025 Australian averages.",
      table: {
        headers: ["", "Petrol car", "Electric car"],
        rows: [
          ["Average fuel/energy cost", "$2.05 per litre", "$0.30 per kWh (home)"],
          ["Typical consumption", "9L per 100 km", "18 kWh per 100 km"],
          ["Cost per 100 km", "$18.45", "$5.40"],
          ["Annual cost (15,000 km)", "$2,768", "$810"],
          ["Annual saving with EV", "", "$1,958"],
        ],
      },
    },
    {
      heading: "Servicing and maintenance costs",
      body: "EVs have far fewer moving parts than petrol vehicles. There is no oil to change, no timing belt to replace and no exhaust system to worry about. Regenerative braking also reduces brake wear significantly. For a typical mid-size petrol car, annual servicing in Australia runs between $400 and $800 depending on the model and dealer. An equivalent EV generally costs between $150 and $350 per year for routine checks, tyre rotations and software updates. Over five years that difference adds up to roughly $2,000 to $4,000 in savings on the EV side.",
      callout: {
        type: "info",
        text: "Some EV manufacturers include servicing in the purchase price for the first few years. Check your contract carefully before comparing ongoing costs with a petrol car.",
      },
    },
    {
      heading: "Registration, insurance and other fixed costs",
      body: "Registration fees vary by state, but most Australian states now charge EVs at a similar rate to comparable petrol vehicles after the federal government wound back EV registration discounts in several jurisdictions during 2024 and 2025. Insurance is where things get interesting. EVs often attract higher premiums because replacement parts and specialist repairs can cost more. A mainstream petrol hatchback might cost $1,200 per year to insure, while a comparable EV could run $1,500 to $1,900. This gap is narrowing as more repairers become EV-qualified, but it is still worth factoring in when you run the numbers.",
    },
    {
      heading: "The hidden advantage: home charging habits",
      body: "One of the most overlooked factors in the EV vs petrol debate is how and when you charge. Drivers who can charge overnight on an off-peak tariff unlock the biggest savings. Some energy retailers in New South Wales, Victoria and Queensland offer EV-specific plans with rates as low as $0.10 to $0.15 per kWh during overnight windows. At those rates, the cost per 100 km can drop below $3.00, making the annual running cost advantage even more dramatic. If you rely heavily on public DC fast chargers, costs rise considerably and can approach or even exceed petrol running costs for high-mileage drivers.",
      callout: {
        type: "tip",
        text: "Use our free EV vs petrol calculator to enter your own electricity tariff, driving distance and petrol price. You will get a personalised annual cost comparison in under a minute.",
      },
    },
    {
      heading: "What genuinely favours petrol cars right now",
      body: "It is only fair to acknowledge where petrol vehicles still have the edge in 2025.",
      list: [
        "Lower purchase price: the cheapest new EVs in Australia start around $38,000, while comparable petrol cars start closer to $22,000.",
        "Long trips are easier: petrol refills take 3 minutes; even fast charging takes 20 to 45 minutes for an 80 per cent top-up.",
        "Rural and regional drivers face a thinner public charging network, making longer journeys more stressful.",
        "Resale values for EVs remain less predictable, with battery degradation a common concern among buyers.",
        "Higher upfront insurance costs can erode year-one savings for some drivers.",
      ],
    },
    {
      heading: "So which is actually cheaper over five years?",
      body: "Running the numbers over a typical five-year ownership period for a mainstream model in each category, and assuming 15,000 km per year, home charging and average urban driving, an EV comes out ahead by roughly $8,000 to $12,000 in total running costs. However, if you factor in the higher purchase price of the EV, the breakeven point lands somewhere between three and six years depending on the specific models compared and your individual driving pattern. The more you drive, the faster the EV pays for itself. A driver covering 25,000 km per year will reach breakeven much sooner than someone doing 8,000 km.",
      callout: {
        type: "warning",
        text: "These figures are estimates based on 2025 Australian averages. Electricity tariffs, petrol prices and insurance premiums vary significantly by state and individual circumstance. Always plug your own numbers into a calculator before making a financial decision.",
      },
    },
    {
      heading: "How to calculate your own breakeven point",
      body: "The simplest way to work out whether an EV makes sense for your situation is to use a dedicated calculator built for Australian conditions. Our ev-vs-petrol-calc.com tool lets you enter your postcode, annual kilometres, current petrol spend, home electricity rate and preferred EV model. It then produces a side-by-side cost comparison across one, three, five and ten years. You can also toggle between home charging only and a mix of home and public charging to see how your habits affect the outcome. The calculator is free, takes about two minutes and is updated regularly with current Australian fuel and electricity price data.",
    },
  ],
},
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
