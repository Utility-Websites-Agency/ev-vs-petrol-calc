"use client"

import { useState, useMemo } from "react"
import { PETROL_CARS, EV_CARS, CHARGING_RATES } from "@/lib/car-data"

type Currency = { code: string; symbol: string; label: string }
type Unit = "metric" | "imperial"
type ChargingMethod = "home" | "public" | "mix"

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
const L100KM_TO_MPG = (l: number) => 235.21 / l
const KWH100KM_TO_KWHMI = (k: number) => k / 62.137

interface FormState {
  petrolMake: string
  petrolModel: string
  petrolVersion: string
  fuelType: "petrol" | "diesel"
  fuelEfficiency: string
  fuelPrice: string
  evMake: string
  evModel: string
  evVersion: string
  chargingMethod: ChargingMethod
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

const EMPTY: FormState = {
  petrolMake: "", petrolModel: "", petrolVersion: "",
  fuelType: "petrol", fuelEfficiency: "", fuelPrice: "",
  evMake: "", evModel: "", evVersion: "",
  chargingMethod: "home", evConsumption: "", electricityPrice: String(CHARGING_RATES.home),
  purchasePriceDiff: "",
  distancePreset: null, distanceCustom: "",
}

function inputClass(err?: boolean) {
  return [
    "w-full bg-white border rounded-lg px-3 py-2.5 text-sm text-[#1f2328] outline-none transition-all",
    "placeholder:text-[#4a4c4d]",
    "focus:border-[#16a34a] focus:ring-2 focus:ring-[#16a34a]/15",
    err ? "border-red-400" : "border-[#dfdfdf]",
  ].join(" ")
}

function selectClass(err?: boolean) {
  return [
    "w-full bg-white border rounded-lg px-3 py-2.5 text-sm text-[#1f2328] outline-none transition-all appearance-none cursor-pointer",
    "focus:border-[#16a34a] disabled:text-[#4a4c4d] disabled:cursor-not-allowed",
    err ? "border-red-400" : "border-[#dfdfdf]",
  ].join(" ")
}

function labelClass() {
  return "block text-[12px] font-semibold text-[#4b5563] mb-1.5 uppercase tracking-wider"
}

function Err({ msg }: { msg?: string }) {
  if (!msg) return null
  return <p className="mt-1 text-xs text-red-500">{msg}</p>
}

function ChevronDown() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#4b5563]">
      <path d="M3 5L7 9L11 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function SelectWrap({ children }: { children: React.ReactNode }) {
  return <div className="relative">{children}<ChevronDown /></div>
}

function ResultCard({ label, value, sub, accent }: { label: string; value: string; sub?: string; accent?: boolean }) {
  return (
    <div className={["rounded-xl p-4 border", accent ? "bg-[#16a34a]/8 border-[#16a34a]/25" : "bg-[#f6f8fa] border-[#dfdfdf]"].join(" ")}>
      <p className="text-[12px] text-[#4a4c4d] mb-1 uppercase tracking-wider font-semibold">{label}</p>
      <p className={["text-2xl font-bold", accent ? "text-[#16a34a]" : "text-[#1f2328]"].join(" ")} style={{ letterSpacing: "-0.4px" }}>{value}</p>
      {sub && <p className="text-xs text-[#4a4c4d] mt-0.5">{sub}</p>}
    </div>
  )
}

function fmt(n: number, sym: string) {
  return `${sym}${Math.abs(n).toLocaleString("en", { maximumFractionDigits: 0 })}`
}

function calculate(form: FormState, unit: Unit): Results | null {
  const eff = parseFloat(form.fuelEfficiency)
  const fp = parseFloat(form.fuelPrice)
  const ec = parseFloat(form.evConsumption)
  const ep = parseFloat(form.electricityPrice)
  const rawDist = form.distancePreset ?? parseFloat(form.distanceCustom)
  const priceDiff = parseFloat(form.purchasePriceDiff) || 0

  if ([eff, fp, ec, ep, rawDist].some((v) => isNaN(v) || v <= 0)) return null

  let annualDistKm: number
  let litresPer100km: number
  let kwhPer100km: number
  let fuelPerLitre: number

  if (unit === "metric") {
    annualDistKm = rawDist
    litresPer100km = eff
    kwhPer100km = ec
    fuelPerLitre = fp
  } else {
    annualDistKm = rawDist * KM_PER_MILE
    litresPer100km = (LITRES_PER_GALLON / eff) * 100
    kwhPer100km = ec * 100
    fuelPerLitre = fp / LITRES_PER_GALLON
  }

  const annualLitres = (annualDistKm / 100) * litresPer100km
  const annualKwh = (annualDistKm / 100) * kwhPer100km
  const annualFuelCost = annualLitres * fuelPerLitre
  const annualEvCost = annualKwh * ep
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
  const [form, setForm] = useState<FormState>(EMPTY)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [results, setResults] = useState<Results | null>(null)

  const sym = currency.symbol
  const presets = unit === "metric" ? DISTANCE_PRESETS_METRIC : DISTANCE_PRESETS_IMPERIAL

  const petrolModels = useMemo(() => PETROL_CARS.find((m) => m.make === form.petrolMake)?.models ?? [], [form.petrolMake])
  const petrolVersions = useMemo(() => petrolModels.find((m) => m.model === form.petrolModel)?.versions ?? [], [petrolModels, form.petrolModel])
  const evModels = useMemo(() => EV_CARS.find((m) => m.make === form.evMake)?.models ?? [], [form.evMake])
  const evVersions = useMemo(() => evModels.find((m) => m.model === form.evModel)?.versions ?? [], [evModels, form.evModel])

  function set(updates: Partial<FormState>) {
    setForm((prev) => ({ ...prev, ...updates }))
    const keys = Object.keys(updates)
    setErrors((prev) => { const next = { ...prev }; keys.forEach((k) => delete next[k]); return next })
  }

  function onPetrolMake(make: string) {
    set({ petrolMake: make, petrolModel: "", petrolVersion: "", fuelEfficiency: "", fuelType: "petrol" })
  }

  function onPetrolModel(model: string) {
    set({ petrolModel: model, petrolVersion: "", fuelEfficiency: "" })
  }

  function onPetrolVersion(versionName: string) {
    const make = PETROL_CARS.find((m) => m.make === form.petrolMake)
    const model = make?.models.find((m) => m.model === form.petrolModel)
    const version = model?.versions.find((v) => v.name === versionName)
    if (!version) { set({ petrolVersion: versionName }); return }
    const eff = unit === "metric" ? version.l100km.toFixed(1) : L100KM_TO_MPG(version.l100km).toFixed(1)
    set({ petrolVersion: versionName, fuelType: version.fuelType, fuelEfficiency: eff })
  }

  function onEvMake(make: string) {
    set({ evMake: make, evModel: "", evVersion: "", evConsumption: "" })
  }

  function onEvModel(model: string) {
    set({ evModel: model, evVersion: "", evConsumption: "" })
  }

  function onEvVersion(versionName: string) {
    const make = EV_CARS.find((m) => m.make === form.evMake)
    const model = make?.models.find((m) => m.model === form.evModel)
    const version = model?.versions.find((v) => v.name === versionName)
    if (!version) { set({ evVersion: versionName }); return }
    const cons = unit === "metric" ? version.kwh100km.toFixed(1) : KWH100KM_TO_KWHMI(version.kwh100km).toFixed(3)
    set({ evVersion: versionName, evConsumption: cons })
  }

  function onChargingMethod(method: ChargingMethod) {
    const suggested = String(CHARGING_RATES[method])
    const currentIsDefault = Object.values(CHARGING_RATES).map(String).includes(form.electricityPrice)
    set({ chargingMethod: method, ...(currentIsDefault || !form.electricityPrice ? { electricityPrice: suggested } : {}) })
  }

  function validate() {
    const errs: Record<string, string> = {}
    if (!form.fuelEfficiency || isNaN(parseFloat(form.fuelEfficiency)) || parseFloat(form.fuelEfficiency) <= 0)
      errs.fuelEfficiency = unit === "metric" ? "Enter L/100km" : "Enter MPG"
    if (!form.fuelPrice || isNaN(parseFloat(form.fuelPrice)) || parseFloat(form.fuelPrice) <= 0)
      errs.fuelPrice = unit === "metric" ? `Enter price per litre` : `Enter price per gallon`
    if (!form.evConsumption || isNaN(parseFloat(form.evConsumption)) || parseFloat(form.evConsumption) <= 0)
      errs.evConsumption = unit === "metric" ? "Enter kWh/100km" : "Enter kWh/mile"
    if (!form.electricityPrice || isNaN(parseFloat(form.electricityPrice)) || parseFloat(form.electricityPrice) <= 0)
      errs.electricityPrice = "Enter electricity price"
    const dist = form.distancePreset ?? parseFloat(form.distanceCustom)
    if (!form.distancePreset && (isNaN(dist) || dist <= 0))
      errs.distance = unit === "metric" ? "Select or enter km/year" : "Select or enter mi/year"
    return errs
  }

  function handleCalculate() {
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setErrors({})
    setResults(calculate(form, unit))
    setTimeout(() => document.getElementById("ev-results")?.scrollIntoView({ behavior: "smooth", block: "start" }), 50)
  }

  function handleReset() {
    setForm(EMPTY)
    setErrors({})
    setResults(null)
  }

  function handleUnitChange(u: Unit) {
    setUnit(u)
    setForm((prev) => ({
      ...prev,
      fuelEfficiency: prev.fuelEfficiency && prev.petrolVersion
        ? u === "imperial" ? L100KM_TO_MPG(parseFloat(prev.fuelEfficiency)).toFixed(1) : (235.21 / L100KM_TO_MPG(parseFloat(prev.fuelEfficiency))).toFixed(1)
        : "",
      evConsumption: prev.evConsumption && prev.evVersion
        ? u === "imperial" ? KWH100KM_TO_KWHMI(parseFloat(prev.evConsumption)).toFixed(3) : (parseFloat(prev.evConsumption) * 62.137).toFixed(1)
        : "",
      distancePreset: null,
      distanceCustom: "",
    }))
    setResults(null)
  }

  return (
    <section className="w-full px-4 py-16 sm:py-20 bg-[#f6f8fa]">
      <div className="mx-auto max-w-[1200px]">

        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-xs text-[#16a34a] mb-3 uppercase tracking-widest font-semibold">EV vs Petrol Cost Calculator</p>
          <h2 className="text-[2rem] sm:text-[2.5rem] text-[#1f2328] font-semibold tracking-tight leading-tight mb-3">
            How much could you save switching to an EV?
          </h2>
          <p className="text-[#4a4c4d] text-base leading-relaxed max-w-lg mx-auto">
            Pick your current car and your EV, choose how far you drive, then hit Calculate.
          </p>
        </div>

        {/* Controls row */}
        <div className="flex items-center justify-between flex-wrap gap-3 mb-5">
          <div className="flex items-center gap-1 bg-white border border-[#dfdfdf] rounded-lg p-0.5">
            {(["metric", "imperial"] as Unit[]).map((u) => (
              <button key={u} type="button" onClick={() => handleUnitChange(u)}
                className={["px-3 py-1.5 rounded-md text-xs transition-all cursor-pointer font-medium", unit === u ? "bg-[#16a34a] text-white shadow-sm" : "text-[#4a4c4d] hover:text-[#1f2328]"].join(" ")}>
                {u === "metric" ? "km / L" : "mi / gal"}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-[#4a4c4d]">Currency</span>
            <SelectWrap>
              <select className="bg-white border border-[#dfdfdf] rounded-lg pl-3 pr-8 py-1.5 text-sm text-[#1f2328] outline-none cursor-pointer appearance-none focus:border-[#16a34a]"
                value={currency.code}
                onChange={(e) => { const c = CURRENCIES.find((x) => x.code === e.target.value); if (c) setCurrency(c) }}>
                {CURRENCIES.map((c) => <option key={c.code} value={c.code}>{c.label}</option>)}
              </select>
            </SelectWrap>
          </div>
        </div>

        {/* 3-column panels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">

          {/* Step 1: Petrol car */}
          <div className="rounded-xl border border-[#dfdfdf] bg-white p-6 flex flex-col gap-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[12px] text-[#16a34a] uppercase tracking-widest mb-1 font-semibold">Step 1</p>
                <p className="text-[15px] text-[#1f2328] leading-snug font-semibold">Select petrol vehicle</p>
              </div>
              <div className="w-9 h-9 rounded-lg bg-[#16a34a]/10 border border-[#16a34a]/20 flex items-center justify-center flex-shrink-0 ml-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 17H22V13L19 7H5L2 13V17H5" /><circle cx="7.5" cy="17" r="2.5" /><circle cx="16.5" cy="17" r="2.5" /><path d="M7.5 17H16.5" />
                </svg>
              </div>
            </div>

            <div>
              <label className={labelClass()}>Make</label>
              <SelectWrap>
                <select className={selectClass()} value={form.petrolMake} onChange={(e) => onPetrolMake(e.target.value)}>
                  <option value="">Select make</option>
                  {PETROL_CARS.map((m) => <option key={m.make} value={m.make}>{m.make}</option>)}
                </select>
              </SelectWrap>
            </div>

            <div>
              <label className={labelClass()}>Model</label>
              <SelectWrap>
                <select className={selectClass()} value={form.petrolModel}
                  onChange={(e) => onPetrolModel(e.target.value)}
                  disabled={!form.petrolMake}>
                  <option value="">{form.petrolMake ? "Select model" : "Select make first"}</option>
                  {petrolModels.map((m) => <option key={m.model} value={m.model}>{m.model}</option>)}
                </select>
              </SelectWrap>
            </div>

            <div>
              <label className={labelClass()}>Version</label>
              <SelectWrap>
                <select className={selectClass()} value={form.petrolVersion}
                  onChange={(e) => onPetrolVersion(e.target.value)}
                  disabled={!form.petrolModel}>
                  <option value="">{form.petrolModel ? "Select version" : "Select model first"}</option>
                  {petrolVersions.map((v) => <option key={v.name} value={v.name}>{v.name}</option>)}
                </select>
              </SelectWrap>
            </div>

            <div>
              <label className={labelClass()}>Fuel type</label>
              <SelectWrap>
                <select className={selectClass()} value={form.fuelType} onChange={(e) => set({ fuelType: e.target.value as "petrol" | "diesel" })}>
                  <option value="petrol">Petrol</option>
                  <option value="diesel">Diesel</option>
                </select>
              </SelectWrap>
            </div>

            <div>
              <label className={labelClass()}>
                {unit === "metric" ? "Fuel efficiency (L/100km)" : "Fuel efficiency (MPG)"}
                {form.petrolVersion && <span className="ml-1 text-[#4a4c4d] normal-case tracking-normal font-normal">— from your selection</span>}
              </label>
              <input type="number" inputMode="decimal" min="0" step="0.1"
                placeholder={unit === "metric" ? "e.g. 8.5" : "e.g. 35"}
                className={inputClass(!!errors.fuelEfficiency)}
                value={form.fuelEfficiency}
                onChange={(e) => set({ fuelEfficiency: e.target.value })} />
              <Err msg={errors.fuelEfficiency} />
            </div>

            <div>
              <label className={labelClass()}>{unit === "metric" ? `Fuel price (${sym}/litre)` : `Fuel price (${sym}/gallon)`}</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-[#4b5563] pointer-events-none">{sym}</span>
                <input type="number" inputMode="decimal" min="0" step="0.01"
                  placeholder={unit === "metric" ? "e.g. 1.80" : "e.g. 4.50"}
                  className={inputClass(!!errors.fuelPrice) + " pl-7"}
                  value={form.fuelPrice}
                  onChange={(e) => set({ fuelPrice: e.target.value })} />
              </div>
              <Err msg={errors.fuelPrice} />
            </div>

            <div>
              <label className={labelClass()}>{`EV price premium (${sym}) — optional`}</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-[#4b5563] pointer-events-none">{sym}</span>
                <input type="number" inputMode="numeric" min="0" step="500"
                  placeholder="e.g. 8000"
                  className={inputClass() + " pl-7"}
                  value={form.purchasePriceDiff}
                  onChange={(e) => set({ purchasePriceDiff: e.target.value })} />
              </div>
              <p className="mt-1 text-[12px] text-[#4a4c4d]">How much more the EV costs upfront — calculates your break-even</p>
            </div>
          </div>

          {/* Step 2: EV */}
          <div className="rounded-xl border border-[#dfdfdf] bg-white p-6 flex flex-col gap-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[12px] text-[#16a34a] uppercase tracking-widest mb-1 font-semibold">Step 2</p>
                <p className="text-[15px] text-[#1f2328] leading-snug font-semibold">Select electric vehicle</p>
              </div>
              <div className="w-9 h-9 rounded-lg bg-[#16a34a]/10 border border-[#16a34a]/20 flex items-center justify-center flex-shrink-0 ml-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              </div>
            </div>

            <div>
              <label className={labelClass()}>Make</label>
              <SelectWrap>
                <select className={selectClass()} value={form.evMake} onChange={(e) => onEvMake(e.target.value)}>
                  <option value="">Select make</option>
                  {EV_CARS.map((m) => <option key={m.make} value={m.make}>{m.make}</option>)}
                </select>
              </SelectWrap>
            </div>

            <div>
              <label className={labelClass()}>Model</label>
              <SelectWrap>
                <select className={selectClass()} value={form.evModel}
                  onChange={(e) => onEvModel(e.target.value)}
                  disabled={!form.evMake}>
                  <option value="">{form.evMake ? "Select model" : "Select make first"}</option>
                  {evModels.map((m) => <option key={m.model} value={m.model}>{m.model}</option>)}
                </select>
              </SelectWrap>
            </div>

            <div>
              <label className={labelClass()}>Version</label>
              <SelectWrap>
                <select className={selectClass()} value={form.evVersion}
                  onChange={(e) => onEvVersion(e.target.value)}
                  disabled={!form.evModel}>
                  <option value="">{form.evModel ? "Select version" : "Select model first"}</option>
                  {evVersions.map((v) => <option key={v.name} value={v.name}>{v.name}</option>)}
                </select>
              </SelectWrap>
            </div>

            <div>
              <label className={labelClass()}>How would you mainly charge?</label>
              <SelectWrap>
                <select className={selectClass()} value={form.chargingMethod} onChange={(e) => onChargingMethod(e.target.value as ChargingMethod)}>
                  <option value="home">At home</option>
                  <option value="public">Public chargers</option>
                  <option value="mix">Mix of both</option>
                </select>
              </SelectWrap>
            </div>

            <div>
              <label className={labelClass()}>
                {unit === "metric" ? "Energy use (kWh/100km)" : "Energy use (kWh/mile)"}
                {form.evVersion && <span className="ml-1 text-[#4a4c4d] normal-case tracking-normal font-normal">— from your selection</span>}
              </label>
              <input type="number" inputMode="decimal" min="0" step="0.1"
                placeholder={unit === "metric" ? "e.g. 16.3" : "e.g. 0.262"}
                className={inputClass(!!errors.evConsumption)}
                value={form.evConsumption}
                onChange={(e) => set({ evConsumption: e.target.value })} />
              <Err msg={errors.evConsumption} />
              <p className="mt-1 text-[12px] text-[#4a4c4d]">
                {unit === "metric" ? "Typical EVs: 14–22 kWh/100km" : "Typical EVs: 0.22–0.35 kWh/mile"}
              </p>
            </div>

            <div>
              <label className={labelClass()}>{`Electricity rate (${sym}/kWh)`}</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-[#4b5563] pointer-events-none">{sym}</span>
                <input type="number" inputMode="decimal" min="0" step="0.01"
                  placeholder="e.g. 0.30"
                  className={inputClass(!!errors.electricityPrice) + " pl-7"}
                  value={form.electricityPrice}
                  onChange={(e) => set({ electricityPrice: e.target.value })} />
              </div>
              <Err msg={errors.electricityPrice} />
              <p className="mt-1 text-[12px] text-[#4a4c4d]">
                {form.chargingMethod === "home" && "Pre-filled with avg home rate — adjust to your actual tariff"}
                {form.chargingMethod === "public" && "Pre-filled with avg public DC fast-charge rate"}
                {form.chargingMethod === "mix" && "Pre-filled with blended home + public average"}
              </p>
            </div>
          </div>

          {/* Step 3: Distance */}
          <div className="rounded-xl border border-[#dfdfdf] bg-white p-6 flex flex-col gap-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[12px] text-[#16a34a] uppercase tracking-widest mb-1 font-semibold">Step 3</p>
                <p className="text-[15px] text-[#1f2328] leading-snug font-semibold">How far do you drive per year?</p>
              </div>
              <div className="w-9 h-9 rounded-lg bg-[#16a34a]/10 border border-[#16a34a]/20 flex items-center justify-center flex-shrink-0 ml-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
            </div>

            <div>
              <label className={labelClass()}>Annual driving distance</label>
              <div className="grid grid-cols-2 gap-2">
                {presets.map((p) => (
                  <button key={p.value} type="button"
                    onClick={() => {
                      setForm((prev) => ({ ...prev, distancePreset: p.value, distanceCustom: "" }))
                      setErrors((prev) => { const n = { ...prev }; delete n.distance; return n })
                    }}
                    className={["rounded-lg border px-3 py-2.5 text-left transition-all cursor-pointer",
                      form.distancePreset === p.value
                        ? "bg-[#16a34a]/10 border-[#16a34a]/30"
                        : "bg-white border-[#dfdfdf] hover:border-[#4b5563]"
                    ].join(" ")}>
                    <p className={["text-xs leading-none mb-0.5 font-semibold", form.distancePreset === p.value ? "text-[#16a34a]" : "text-[#1f2328]"].join(" ")}>{p.label}</p>
                    <p className={["text-[15px] leading-[22px]", form.distancePreset === p.value ? "text-[#16a34a]/70" : "text-[#4a4c4d]"].join(" ")}>{p.sub}</p>
                  </button>
                ))}
              </div>
              <Err msg={errors.distance} />
            </div>

            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="flex-1 h-px bg-[#dfdfdf]" />
                <span className="text-[10px] text-[#4a4c4d] uppercase tracking-wider">or enter custom</span>
                <div className="flex-1 h-px bg-[#dfdfdf]" />
              </div>
              <input type="number" inputMode="numeric" min="0" step="1000"
                placeholder={unit === "metric" ? "e.g. 17,500 km/year" : "e.g. 11,000 mi/year"}
                className={inputClass()}
                value={form.distanceCustom}
                onChange={(e) => {
                  setForm((prev) => ({ ...prev, distanceCustom: e.target.value, distancePreset: null }))
                  setErrors((prev) => { const n = { ...prev }; delete n.distance; return n })
                }} />
            </div>
          </div>
        </div>

        {/* Calculate */}
        <div className="flex flex-col items-center gap-3">
          <button type="button" onClick={handleCalculate}
            className="w-full max-w-sm py-3.5 rounded-xl text-sm font-semibold text-white bg-[#16a34a] hover:bg-[#15803d] transition-colors cursor-pointer">
            Calculate fuel savings
          </button>
          <button type="button" onClick={handleReset}
            className="text-sm text-[#1f2328] hover:text-[#343638] transition-colors cursor-pointer">
            Clear all
          </button>
        </div>

        {/* Results */}
        {results && (
          <div id="ev-results" className="mt-12 border-t border-[#dfdfdf] pt-10">
            <p className="text-[12px] text-[#16a34a] uppercase tracking-widest mb-2 text-center font-semibold">Your results</p>
            <p className="text-2xl font-semibold text-[#1f2328] text-center mb-1" style={{ letterSpacing: "-0.5px" }}>
              {results.annualSaving > 0
                ? `You save ${fmt(results.annualSaving, sym)} per year switching to an EV`
                : `EV charging costs ${fmt(Math.abs(results.annualSaving), sym)} more per year at current rates`}
            </p>
            <p className="text-sm text-[#4a4c4d] text-center mb-8">Based on your inputs. Figures are estimates only.</p>

            {results.annualSaving <= 0 && (
              <div className="rounded-xl border border-yellow-300 bg-yellow-50 px-4 py-3 mb-6 max-w-xl mx-auto">
                <p className="text-sm text-yellow-700 text-center">
                  At current prices and your driving profile, petrol is cheaper to run. Try selecting a higher mileage or checking a lower electricity tariff.
                </p>
              </div>
            )}

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
              <ResultCard label="Monthly saving" value={fmt(results.monthlySaving, sym)} sub={results.monthlySaving < 0 ? "extra vs petrol" : "vs petrol"} accent={results.monthlySaving > 0} />
              <ResultCard label="Annual saving" value={fmt(results.annualSaving, sym)} sub={results.annualSaving < 0 ? "extra vs petrol" : "vs petrol"} accent={results.annualSaving > 0} />
              <ResultCard label="Petrol cost/year" value={fmt(results.annualFuelCost, sym)} />
              <ResultCard label="EV charging/year" value={fmt(results.annualEvCost, sym)} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {results.breakEvenYears !== null && (
                <ResultCard
                  label="Break-even point"
                  value={results.annualSaving > 0 ? `${results.breakEvenYears.toFixed(1)} years` : "Never at current rates"}
                  sub="Years to recover the EV price premium"
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
