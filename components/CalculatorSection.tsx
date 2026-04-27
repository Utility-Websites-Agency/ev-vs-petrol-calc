"use client"

import { useState } from "react"

type Currency = { code: string; symbol: string; label: string }
type Unit = "metric" | "imperial"

const CURRENCIES: Currency[] = [
  { code: "USD", symbol: "$", label: "USD $" },
  { code: "EUR", symbol: "€", label: "EUR €" },
  { code: "GBP", symbol: "£", label: "GBP £" },
  { code: "AUD", symbol: "A$", label: "AUD A$" },
  { code: "CAD", symbol: "C$", label: "CAD C$" },
]

const DISTANCE_PRESETS_METRIC = [
  { label: "Low", sub: "5,000 km", value: 5000 },
  { label: "Moderate", sub: "10,000 km", value: 10000 },
  { label: "Average", sub: "15,000 km", value: 15000 },
  { label: "Above average", sub: "20,000 km", value: 20000 },
  { label: "High", sub: "25,000 km", value: 25000 },
  { label: "Very high", sub: "30,000 km", value: 30000 },
]

const DISTANCE_PRESETS_IMPERIAL = [
  { label: "Low", sub: "3,000 mi", value: 3000 },
  { label: "Moderate", sub: "6,000 mi", value: 6000 },
  { label: "Average", sub: "9,000 mi", value: 9000 },
  { label: "Above average", sub: "12,000 mi", value: 12000 },
  { label: "High", sub: "15,000 mi", value: 15000 },
  { label: "Very high", sub: "20,000 mi", value: 20000 },
]

const CO2_PER_LITRE_PETROL = 2.31
const CO2_PER_LITRE_DIESEL = 2.68
const KM_PER_MILE = 1.60934
const LITRES_PER_GALLON = 4.54609

const FS = { fontVariationSettings: "'wght' 510", fontFeatureSettings: '"cv01", "ss03"' } as const
const FS_BOLD = { fontVariationSettings: "'wght' 590", fontFeatureSettings: '"cv01", "ss03"' } as const

interface FormState {
  fuelType: "petrol" | "diesel"
  fuelEfficiency: string
  fuelPrice: string
  evConsumption: string
  electricityPrice: string
  purchasePriceDiff: string
  distancePreset: number | null
  distanceCustom: string
}

interface Results {
  annualFuelCost: number
  annualEvCost: number
  annualSaving: number
  monthlySaving: number
  breakEvenYears: number | null
  co2ReductionKg: number
}

function inputClass(hasError?: boolean) {
  return [
    "w-full bg-[rgba(255,255,255,0.03)] border rounded-lg px-3 py-2.5 text-sm text-[#f7f8f8] outline-none transition-all",
    "placeholder:text-[#4a4f58]",
    "focus:border-[rgba(255,255,255,0.18)] focus:bg-[rgba(255,255,255,0.05)]",
    hasError ? "border-red-500/40" : "border-[rgba(255,255,255,0.09)]",
  ].join(" ")
}

function selectClass() {
  return "w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.09)] rounded-lg px-3 py-2.5 text-sm text-[#f7f8f8] outline-none focus:border-[rgba(255,255,255,0.18)] cursor-pointer"
}

function labelClass() {
  return "block text-[11px] font-medium text-[#6b7280] mb-1.5 uppercase tracking-wider"
}

function ErrorMsg({ msg }: { msg?: string }) {
  if (!msg) return null
  return <p className="mt-1 text-xs text-red-400">{msg}</p>
}

function ResultCard({ label, value, sub, accent }: { label: string; value: string; sub?: string; accent?: boolean }) {
  return (
    <div className={[
      "rounded-xl p-4 border",
      accent
        ? "bg-[rgba(94,106,210,0.1)] border-[rgba(94,106,210,0.25)]"
        : "bg-[rgba(255,255,255,0.03)] border-[rgba(255,255,255,0.08)]",
    ].join(" ")}>
      <p className="text-[11px] text-[#6b7280] mb-1 uppercase tracking-wider" style={FS}>{label}</p>
      <p className={["text-2xl", accent ? "text-[#828fff]" : "text-[#f7f8f8]"].join(" ")} style={{ ...FS_BOLD, letterSpacing: "-0.4px" }}>{value}</p>
      {sub && <p className="text-xs text-[#4a4f58] mt-0.5" style={FS}>{sub}</p>}
    </div>
  )
}

function formatMoney(n: number, sym: string) {
  return `${sym}${Math.abs(n).toLocaleString("en", { maximumFractionDigits: 0 })}`
}

function calculate(form: FormState, unit: Unit): Results | null {
  const eff = parseFloat(form.fuelEfficiency)
  const fuelPrice = parseFloat(form.fuelPrice)
  const evCons = parseFloat(form.evConsumption)
  const elecPrice = parseFloat(form.electricityPrice)
  const rawDist = form.distancePreset ?? parseFloat(form.distanceCustom)
  const priceDiff = parseFloat(form.purchasePriceDiff) || 0

  if ([eff, fuelPrice, evCons, elecPrice, rawDist].some((v) => isNaN(v) || v <= 0)) return null

  let annualDistKm: number
  let litresPer100km: number
  let kwhPer100km: number
  let fuelPerLitre: number

  if (unit === "metric") {
    annualDistKm = rawDist
    litresPer100km = eff
    kwhPer100km = evCons
    fuelPerLitre = fuelPrice
  } else {
    annualDistKm = rawDist * KM_PER_MILE
    litresPer100km = (LITRES_PER_GALLON / eff) * 100
    kwhPer100km = evCons * 100
    fuelPerLitre = fuelPrice / LITRES_PER_GALLON
  }

  const annualLitres = (annualDistKm / 100) * litresPer100km
  const annualKwh = (annualDistKm / 100) * kwhPer100km
  const annualFuelCost = annualLitres * fuelPerLitre
  const annualEvCost = annualKwh * elecPrice
  const annualSaving = annualFuelCost - annualEvCost
  const monthlySaving = annualSaving / 12
  const breakEvenYears = priceDiff > 0 && annualSaving > 0 ? priceDiff / annualSaving : null
  const co2PerLitre = form.fuelType === "diesel" ? CO2_PER_LITRE_DIESEL : CO2_PER_LITRE_PETROL
  const co2ReductionKg = annualLitres * co2PerLitre

  return { annualFuelCost, annualEvCost, annualSaving, monthlySaving, breakEvenYears, co2ReductionKg }
}

export function CalculatorSection() {
  const [unit, setUnit] = useState<Unit>("metric")
  const [currency, setCurrency] = useState<Currency>(CURRENCIES[0])
  const [results, setResults] = useState<Results | null>(null)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [form, setForm] = useState<FormState>({
    fuelType: "petrol",
    fuelEfficiency: "",
    fuelPrice: "",
    evConsumption: "",
    electricityPrice: "",
    purchasePriceDiff: "",
    distancePreset: null,
    distanceCustom: "",
  })

  const presets = unit === "metric" ? DISTANCE_PRESETS_METRIC : DISTANCE_PRESETS_IMPERIAL
  const sym = currency.symbol

  function set(key: keyof FormState, value: string | number | null) {
    setForm((prev) => ({ ...prev, [key]: value }))
    setErrors((prev) => { const next = { ...prev }; delete next[key as string]; return next })
  }

  function validate(): Record<string, string> {
    const errs: Record<string, string> = {}
    const eff = parseFloat(form.fuelEfficiency)
    const fp = parseFloat(form.fuelPrice)
    const ec = parseFloat(form.evConsumption)
    const ep = parseFloat(form.electricityPrice)
    const dist = form.distancePreset ?? parseFloat(form.distanceCustom)

    if (!form.fuelEfficiency || isNaN(eff) || eff <= 0)
      errs.fuelEfficiency = unit === "metric" ? "Enter L/100km" : "Enter MPG"
    if (!form.fuelPrice || isNaN(fp) || fp <= 0)
      errs.fuelPrice = "Enter fuel price"
    if (!form.evConsumption || isNaN(ec) || ec <= 0)
      errs.evConsumption = unit === "metric" ? "Enter kWh/100km" : "Enter kWh/mile"
    if (!form.electricityPrice || isNaN(ep) || ep <= 0)
      errs.electricityPrice = "Enter electricity price"
    if (!form.distancePreset && (!form.distanceCustom || isNaN(dist) || dist <= 0))
      errs.distance = unit === "metric" ? "Select or enter km/year" : "Select or enter mi/year"

    return errs
  }

  function handleCalculate() {
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setErrors({})
    setResults(calculate(form, unit) ?? null)
    setTimeout(() => {
      document.getElementById("ev-results")?.scrollIntoView({ behavior: "smooth", block: "start" })
    }, 50)
  }

  function handleReset() {
    setForm({
      fuelType: "petrol",
      fuelEfficiency: "",
      fuelPrice: "",
      evConsumption: "",
      electricityPrice: "",
      purchasePriceDiff: "",
      distancePreset: null,
      distanceCustom: "",
    })
    setErrors({})
    setResults(null)
  }

  function handleUnitChange(u: Unit) {
    setUnit(u)
    setForm((prev) => ({ ...prev, fuelEfficiency: "", fuelPrice: "", evConsumption: "", electricityPrice: "", distancePreset: null, distanceCustom: "" }))
    setErrors({})
    setResults(null)
  }

  return (
    <section className="w-full px-4 py-16 sm:py-20" style={{ background: "#08090a" }}>
      <div className="mx-auto max-w-[1080px]">

        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-xs text-[#5e6ad2] mb-3 uppercase tracking-widest" style={FS}>EV vs Petrol Cost Calculator</p>
          <h2 className="text-[2rem] sm:text-[2.5rem] text-[#f7f8f8] leading-tight mb-3" style={{ ...FS_BOLD, letterSpacing: "-0.7px" }}>
            How much could you save switching to an EV?
          </h2>
          <p className="text-[#6b7280] text-base leading-relaxed max-w-lg mx-auto" style={FS}>
            Fill in the three panels below, then hit Calculate to see your personalised savings.
          </p>
        </div>

        {/* Controls row */}
        <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
          {/* Unit toggle */}
          <div className="flex items-center gap-1 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-lg p-0.5">
            {(["metric", "imperial"] as Unit[]).map((u) => (
              <button key={u} type="button" onClick={() => handleUnitChange(u)}
                className={["px-3 py-1.5 rounded-md text-xs transition-all cursor-pointer", unit === u ? "bg-[rgba(255,255,255,0.09)] text-[#f7f8f8]" : "text-[#6b7280] hover:text-[#d0d6e0]"].join(" ")}
                style={FS}>
                {u === "metric" ? "km / L" : "mi / gal"}
              </button>
            ))}
          </div>
          {/* Currency */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-[#6b7280]" style={FS}>Currency</span>
            <select className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.09)] rounded-lg px-2.5 py-1.5 text-sm text-[#f7f8f8] outline-none cursor-pointer"
              value={currency.code}
              onChange={(e) => { const c = CURRENCIES.find((x) => x.code === e.target.value); if (c) setCurrency(c) }}
              style={FS}>
              {CURRENCIES.map((c) => <option key={c.code} value={c.code} style={{ background: "#0f1011" }}>{c.label}</option>)}
            </select>
          </div>
        </div>

        {/* 3-column step panels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">

          {/* Step 1 — Petrol car */}
          <div className="rounded-xl border border-[rgba(255,255,255,0.09)] bg-[rgba(255,255,255,0.02)] p-6 flex flex-col gap-5">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[11px] text-[#5e6ad2] uppercase tracking-widest mb-1" style={FS}>Step 1</p>
                <p className="text-sm text-[#f7f8f8] leading-snug" style={FS_BOLD}>Your current petrol car</p>
              </div>
              <div className="w-9 h-9 rounded-lg bg-[rgba(94,106,210,0.12)] border border-[rgba(94,106,210,0.2)] flex items-center justify-center flex-shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#828fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v5" />
                  <circle cx="16" cy="17" r="2" /><circle cx="7" cy="17" r="2" />
                  <path d="M9 17h5" />
                </svg>
              </div>
            </div>

            {/* Fuel type */}
            <div>
              <label className={labelClass()}>Fuel type</label>
              <div className="flex gap-2">
                {(["petrol", "diesel"] as const).map((ft) => (
                  <button key={ft} type="button" onClick={() => set("fuelType", ft)}
                    className={["flex-1 py-2 rounded-lg text-sm border transition-all cursor-pointer", form.fuelType === ft ? "bg-[rgba(94,106,210,0.14)] border-[rgba(94,106,210,0.35)] text-[#828fff]" : "bg-transparent border-[rgba(255,255,255,0.09)] text-[#6b7280] hover:text-[#d0d6e0] hover:border-[rgba(255,255,255,0.14)]"].join(" ")}
                    style={FS}>
                    {ft.charAt(0).toUpperCase() + ft.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Fuel efficiency */}
            <div>
              <label className={labelClass()}>{unit === "metric" ? "Fuel efficiency (L/100km)" : "Fuel efficiency (MPG)"}</label>
              <input type="number" inputMode="decimal" min="0" step="0.1"
                placeholder={unit === "metric" ? "e.g. 8.5" : "e.g. 35"}
                className={inputClass(!!errors.fuelEfficiency)}
                value={form.fuelEfficiency}
                onChange={(e) => set("fuelEfficiency", e.target.value)}
                style={FS} />
              <ErrorMsg msg={errors.fuelEfficiency} />
            </div>

            {/* Fuel price */}
            <div>
              <label className={labelClass()}>{unit === "metric" ? `Fuel price (${sym}/litre)` : `Fuel price (${sym}/gallon)`}</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-[#4a4f58] pointer-events-none">{sym}</span>
                <input type="number" inputMode="decimal" min="0" step="0.01"
                  placeholder={unit === "metric" ? "e.g. 1.80" : "e.g. 4.50"}
                  className={inputClass(!!errors.fuelPrice) + " pl-7"}
                  value={form.fuelPrice}
                  onChange={(e) => set("fuelPrice", e.target.value)}
                  style={FS} />
              </div>
              <ErrorMsg msg={errors.fuelPrice} />
            </div>

            {/* Purchase price diff */}
            <div>
              <label className={labelClass()}>{`EV price premium (${sym}) — optional`}</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-[#4a4f58] pointer-events-none">{sym}</span>
                <input type="number" inputMode="numeric" min="0" step="500"
                  placeholder="e.g. 8000"
                  className={inputClass() + " pl-7"}
                  value={form.purchasePriceDiff}
                  onChange={(e) => set("purchasePriceDiff", e.target.value)}
                  style={FS} />
              </div>
              <p className="mt-1 text-[11px] text-[#4a4f58]" style={FS}>How much more the EV costs upfront — for break-even calculation</p>
            </div>
          </div>

          {/* Step 2 — EV */}
          <div className="rounded-xl border border-[rgba(255,255,255,0.09)] bg-[rgba(255,255,255,0.02)] p-6 flex flex-col gap-5">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[11px] text-[#5e6ad2] uppercase tracking-widest mb-1" style={FS}>Step 2</p>
                <p className="text-sm text-[#f7f8f8] leading-snug" style={FS_BOLD}>Your electric vehicle</p>
              </div>
              <div className="w-9 h-9 rounded-lg bg-[rgba(94,106,210,0.12)] border border-[rgba(94,106,210,0.2)] flex items-center justify-center flex-shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#828fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              </div>
            </div>

            {/* EV consumption */}
            <div>
              <label className={labelClass()}>{unit === "metric" ? "Energy use (kWh/100km)" : "Energy use (kWh/mile)"}</label>
              <input type="number" inputMode="decimal" min="0" step="0.1"
                placeholder={unit === "metric" ? "e.g. 18" : "e.g. 0.30"}
                className={inputClass(!!errors.evConsumption)}
                value={form.evConsumption}
                onChange={(e) => set("evConsumption", e.target.value)}
                style={FS} />
              <ErrorMsg msg={errors.evConsumption} />
              <p className="mt-1 text-[11px] text-[#4a4f58]" style={FS}>
                {unit === "metric" ? "Typical EVs: 14–22 kWh/100km" : "Typical EVs: 0.22–0.35 kWh/mile"}
              </p>
            </div>

            {/* Electricity price */}
            <div>
              <label className={labelClass()}>{`Electricity price (${sym}/kWh)`}</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-[#4a4f58] pointer-events-none">{sym}</span>
                <input type="number" inputMode="decimal" min="0" step="0.01"
                  placeholder="e.g. 0.28"
                  className={inputClass(!!errors.electricityPrice) + " pl-7"}
                  value={form.electricityPrice}
                  onChange={(e) => set("electricityPrice", e.target.value)}
                  style={FS} />
              </div>
              <ErrorMsg msg={errors.electricityPrice} />
            </div>

            {/* Spacer to align bottom with step 1 */}
            <div className="flex-1" />
            <div className="rounded-lg border border-[rgba(94,106,210,0.15)] bg-[rgba(94,106,210,0.05)] px-4 py-3">
              <p className="text-xs text-[#828fff] leading-relaxed" style={FS}>
                Don't know your EV's exact figures? Check the manufacturer's spec sheet or use a real-world consumption site like EVDB.
              </p>
            </div>
          </div>

          {/* Step 3 — Distance */}
          <div className="rounded-xl border border-[rgba(255,255,255,0.09)] bg-[rgba(255,255,255,0.02)] p-6 flex flex-col gap-5">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[11px] text-[#5e6ad2] uppercase tracking-widest mb-1" style={FS}>Step 3</p>
                <p className="text-sm text-[#f7f8f8] leading-snug" style={FS_BOLD}>
                  How far do you drive per year?
                </p>
              </div>
              <div className="w-9 h-9 rounded-lg bg-[rgba(94,106,210,0.12)] border border-[rgba(94,106,210,0.2)] flex items-center justify-center flex-shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#828fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
            </div>

            {/* Preset chips */}
            <div>
              <label className={labelClass()}>Select a driving profile</label>
              <div className="grid grid-cols-2 gap-2">
                {presets.map((p) => (
                  <button key={p.value} type="button"
                    onClick={() => {
                      setForm((prev) => ({ ...prev, distancePreset: p.value, distanceCustom: "" }))
                      setErrors((prev) => { const next = { ...prev }; delete next.distance; return next })
                    }}
                    className={[
                      "rounded-lg border px-3 py-2.5 text-left transition-all cursor-pointer",
                      form.distancePreset === p.value
                        ? "bg-[rgba(94,106,210,0.14)] border-[rgba(94,106,210,0.35)]"
                        : "bg-transparent border-[rgba(255,255,255,0.09)] hover:border-[rgba(255,255,255,0.16)]",
                    ].join(" ")}>
                    <p className={["text-xs leading-none mb-0.5", form.distancePreset === p.value ? "text-[#828fff]" : "text-[#d0d6e0]"].join(" ")} style={FS_BOLD}>{p.label}</p>
                    <p className={["text-[11px]", form.distancePreset === p.value ? "text-[#6370c4]" : "text-[#4a4f58]"].join(" ")} style={FS}>{p.sub}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* OR divider + custom input */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="flex-1 h-px bg-[rgba(255,255,255,0.07)]" />
                <span className="text-[11px] text-[#4a4f58] uppercase tracking-wider" style={FS}>or enter custom</span>
                <div className="flex-1 h-px bg-[rgba(255,255,255,0.07)]" />
              </div>
              <div className="relative">
                <input type="number" inputMode="numeric" min="0" step="1000"
                  placeholder={unit === "metric" ? "e.g. 17500 km/year" : "e.g. 11000 mi/year"}
                  className={inputClass(!!errors.distance)}
                  value={form.distanceCustom}
                  onChange={(e) => {
                    setForm((prev) => ({ ...prev, distanceCustom: e.target.value, distancePreset: null }))
                    setErrors((prev) => { const next = { ...prev }; delete next.distance; return next })
                  }}
                  style={FS} />
              </div>
              <ErrorMsg msg={errors.distance} />
            </div>
          </div>
        </div>

        {/* Calculate + Clear row */}
        <div className="flex flex-col items-center gap-3">
          <button type="button" onClick={handleCalculate}
            className="w-full max-w-sm py-3.5 rounded-xl text-sm text-white bg-[#5e6ad2] hover:bg-[#828fff] transition-colors cursor-pointer"
            style={{ ...FS_BOLD, letterSpacing: "-0.1px" }}>
            Calculate fuel savings
          </button>
          {(results || Object.values(form).some((v) => v !== "" && v !== null)) && (
            <button type="button" onClick={handleReset}
              className="text-sm text-[#5e6ad2] hover:text-[#828fff] transition-colors cursor-pointer"
              style={FS}>
              Clear all
            </button>
          )}
        </div>

        {/* Results */}
        {results && (
          <div id="ev-results" className="mt-12 border-t border-[rgba(255,255,255,0.07)] pt-10">
            <p className="text-[11px] text-[#5e6ad2] uppercase tracking-widest mb-2 text-center" style={FS}>Your results</p>
            <p className="text-2xl text-[#f7f8f8] text-center mb-1" style={{ ...FS_BOLD, letterSpacing: "-0.5px" }}>
              {results.annualSaving > 0
                ? `You could save ${formatMoney(results.annualSaving, sym)} per year`
                : `EV charging costs ${formatMoney(Math.abs(results.annualSaving), sym)} more per year`}
            </p>
            <p className="text-sm text-[#6b7280] text-center mb-8" style={FS}>Based on your inputs. All figures are estimates.</p>

            {results.annualSaving <= 0 && (
              <div className="rounded-xl border border-yellow-500/20 bg-yellow-500/5 px-4 py-3 mb-6 max-w-xl mx-auto">
                <p className="text-sm text-yellow-400 text-center" style={FS}>
                  At current prices, electricity costs more than petrol for your driving profile. Check your electricity rate or consider a higher-mileage profile.
                </p>
              </div>
            )}

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
              <ResultCard label="Monthly saving" value={formatMoney(results.monthlySaving, sym)} sub={results.monthlySaving < 0 ? "net extra cost" : "vs petrol"} accent={results.monthlySaving > 0} />
              <ResultCard label="Annual saving" value={formatMoney(results.annualSaving, sym)} sub={results.annualSaving < 0 ? "net extra cost" : "vs petrol"} accent={results.annualSaving > 0} />
              <ResultCard label="Annual petrol cost" value={formatMoney(results.annualFuelCost, sym)} />
              <ResultCard label="Annual EV cost" value={formatMoney(results.annualEvCost, sym)} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {results.breakEvenYears !== null && (
                <ResultCard
                  label="Break-even point"
                  value={results.annualSaving > 0 ? `${results.breakEvenYears.toFixed(1)} years` : "Never at current rates"}
                  sub="Time to recover EV purchase premium"
                  accent={results.annualSaving > 0 && results.breakEvenYears < 10}
                />
              )}
              <ResultCard label="CO₂ reduction" value={`${Math.round(results.co2ReductionKg).toLocaleString()} kg/yr`} sub="vs your current car (tailpipe emissions only)" />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
