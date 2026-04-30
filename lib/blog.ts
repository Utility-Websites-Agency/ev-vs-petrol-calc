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
