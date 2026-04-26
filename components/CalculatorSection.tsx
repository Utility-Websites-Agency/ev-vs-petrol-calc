"use client"

import { useState } from "react"

type Currency = { code: string; symbol: string; label: string }
type Unit = "metric" | "imperial"

const CURRENCIES: Currency[] = [
  { code: "USD", symbol: "$", label: "USD $" },
  { code: "EUR", symbol: "€", label: "EUR €" },
  { code: "GBP", symbol: "£", label: "GBP £" },
  { code: "AUD", symbol: "A$", label: "AUD $" },
  { code: "CAD", symbol: "C$", label: "CAD $" },
]

const CO2_PER_LITRE_PETROL = 2.31
const CO2_PER_LITRE_DIESEL = 2.68
const KM_PER_MILE = 1.60934
const LITRES_PER_GALLON = 4.54609

interface Step1 {
  fuelType: "petrol" | "diesel"
  fuelEfficiency: string
  fuelPrice: string
  annualDistance: string
}

interface Step2 {
  evConsumption: string
  electricityPrice: string
  purchasePriceDiff: string
}

interface Results {
  annualFuelCost: number
  annualEvCost: number
  annualSaving: number
  monthlySaving: number
  breakEvenYears: number | null
  co2ReductionKg: number
}

interface Errors {
  [key: string]: string
}

function labelClass(): string {
  return "block text-xs font-medium text-[#8a8f98] mb-1.5 tracking-wide"
}

function inputClass(hasError?: boolean): string {
  return [
    "w-full bg-[rgba(255,255,255,0.02)] border rounded-md px-3 py-2.5 text-sm text-[#f7f8f8] outline-none transition-all",
    "placeholder:text-[#62666d]",
    "focus:border-[rgba(255,255,255,0.16)] focus:bg-[rgba(255,255,255,0.04)]",
    hasError
      ? "border-red-500/50"
      : "border-[rgba(255,255,255,0.08)]",
  ].join(" ")
}

function selectClass(): string {
  return "bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.08)] rounded-md px-2.5 py-2.5 text-sm text-[#f7f8f8] outline-none focus:border-[rgba(255,255,255,0.16)] cursor-pointer"
}

function ErrorMsg({ msg }: { msg?: string }) {
  if (!msg) return null
  return <p className="mt-1 text-xs text-red-400">{msg}</p>
}

function ProgressBar({ step }: { step: number }) {
  return (
    <div className="flex items-center gap-2 mb-8">
      {[1, 2, 3].map((s) => (
        <div key={s} className="flex items-center gap-2">
          <div
            className={[
              "w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium transition-all",
              s < step
                ? "bg-[#5e6ad2] text-white"
                : s === step
                ? "bg-[#5e6ad2] text-white ring-2 ring-[#5e6ad2]/30"
                : "bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] text-[#62666d]",
            ].join(" ")}
            style={{ fontVariationSettings: "'wght' 510", fontFeatureSettings: '"cv01", "ss03"' }}
          >
            {s < step ? (
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M1.5 5L3.8 7.5L8.5 2.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : (
              s
            )}
          </div>
          {s < 3 && (
            <div
              className={[
                "h-px w-8 sm:w-14 transition-all",
                s < step ? "bg-[#5e6ad2]" : "bg-[rgba(255,255,255,0.08)]",
              ].join(" ")}
            />
          )}
        </div>
      ))}
      <div className="ml-2 flex gap-4">
        {["Your current car", "Your EV", "Your savings"].map((label, i) => (
          <span
            key={i}
            className={[
              "hidden sm:block text-xs transition-all",
              i + 1 === step ? "text-[#f7f8f8]" : "text-[#62666d]",
            ].join(" ")}
            style={{ fontVariationSettings: "'wght' 510", fontFeatureSettings: '"cv01", "ss03"' }}
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  )
}

function UnitToggle({ unit, onChange }: { unit: Unit; onChange: (u: Unit) => void }) {
  return (
    <div className="flex items-center gap-1 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-md p-0.5">
      {(["metric", "imperial"] as Unit[]).map((u) => (
        <button
          key={u}
          type="button"
          onClick={() => onChange(u)}
          className={[
            "px-3 py-1 rounded text-xs transition-all cursor-pointer",
            unit === u
              ? "bg-[rgba(255,255,255,0.08)] text-[#f7f8f8]"
              : "text-[#8a8f98] hover:text-[#d0d6e0]",
          ].join(" ")}
          style={{ fontVariationSettings: "'wght' 510", fontFeatureSettings: '"cv01", "ss03"' }}
        >
          {u === "metric" ? "km / L" : "mi / gal"}
        </button>
      ))}
    </div>
  )
}

function ResultCard({
  label,
  value,
  sub,
  accent,
}: {
  label: string
  value: string
  sub?: string
  accent?: boolean
}) {
  return (
    <div
      className={[
        "rounded-lg p-4 border",
        accent
          ? "bg-[rgba(94,106,210,0.08)] border-[rgba(94,106,210,0.2)]"
          : "bg-[rgba(255,255,255,0.02)] border-[rgba(255,255,255,0.08)]",
      ].join(" ")}
    >
      <p
        className="text-xs text-[#8a8f98] mb-1"
        style={{ fontVariationSettings: "'wght' 510", fontFeatureSettings: '"cv01", "ss03"' }}
      >
        {label}
      </p>
      <p
        className={["text-xl", accent ? "text-[#828fff]" : "text-[#f7f8f8]"].join(" ")}
        style={{ fontVariationSettings: "'wght' 590", fontFeatureSettings: '"cv01", "ss03"', letterSpacing: "-0.24px" }}
      >
        {value}
      </p>
      {sub && <p className="text-xs text-[#62666d] mt-0.5">{sub}</p>}
    </div>
  )
}

function formatMoney(amount: number, symbol: string): string {
  return `${symbol}${amount.toLocaleString("en", { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`
}

function formatMoneyDecimal(amount: number, symbol: string): string {
  return `${symbol}${amount.toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
}

function validateStep1(data: Step1, unit: Unit): Errors {
  const errors: Errors = {}
  const eff = parseFloat(data.fuelEfficiency)
  const price = parseFloat(data.fuelPrice)
  const dist = parseFloat(data.annualDistance)

  if (!data.fuelEfficiency || isNaN(eff) || eff <= 0) {
    errors.fuelEfficiency = unit === "metric"
      ? "Enter a valid fuel efficiency (L/100km)"
      : "Enter a valid fuel efficiency (MPG)"
  } else if (unit === "metric" && (eff < 1 || eff > 50)) {
    errors.fuelEfficiency = "L/100km should be between 1 and 50"
  } else if (unit === "imperial" && (eff < 5 || eff > 150)) {
    errors.fuelEfficiency = "MPG should be between 5 and 150"
  }

  if (!data.fuelPrice || isNaN(price) || price <= 0) {
    errors.fuelPrice = unit === "metric"
      ? "Enter a valid fuel price per litre"
      : "Enter a valid fuel price per gallon"
  } else if (price > 20) {
    errors.fuelPrice = "Fuel price looks too high. Check your entry."
  }

  if (!data.annualDistance || isNaN(dist) || dist <= 0) {
    errors.annualDistance = "Enter your annual distance"
  } else if (unit === "metric" && dist > 500000) {
    errors.annualDistance = "Annual distance seems too high"
  } else if (unit === "imperial" && dist > 300000) {
    errors.annualDistance = "Annual distance seems too high"
  }

  return errors
}

function validateStep2(data: Step2, unit: Unit): Errors {
  const errors: Errors = {}
  const cons = parseFloat(data.evConsumption)
  const price = parseFloat(data.electricityPrice)
  const diff = parseFloat(data.purchasePriceDiff)

  if (!data.evConsumption || isNaN(cons) || cons <= 0) {
    errors.evConsumption = unit === "metric"
      ? "Enter EV consumption in kWh/100km"
      : "Enter EV consumption in kWh/mile"
  } else if (unit === "metric" && (cons < 5 || cons > 50)) {
    errors.evConsumption = "kWh/100km should be between 5 and 50"
  } else if (unit === "imperial" && (cons < 0.1 || cons > 1)) {
    errors.evConsumption = "kWh/mile should be between 0.1 and 1.0"
  }

  if (!data.electricityPrice || isNaN(price) || price <= 0) {
    errors.electricityPrice = "Enter a valid electricity price per kWh"
  } else if (price > 5) {
    errors.electricityPrice = "Electricity price looks too high. Check your entry."
  }

  if (data.purchasePriceDiff && !isNaN(diff) && diff < 0) {
    errors.purchasePriceDiff = "Enter a positive value (EV premium over petrol car)"
  }

  return errors
}

function calculate(s1: Step1, s2: Step2, unit: Unit): Results {
  const eff = parseFloat(s1.fuelEfficiency)
  const fuelPrice = parseFloat(s1.fuelPrice)
  const dist = parseFloat(s1.annualDistance)
  const evCons = parseFloat(s2.evConsumption)
  const elecPrice = parseFloat(s2.electricityPrice)
  const priceDiff = parseFloat(s2.purchasePriceDiff) || 0

  let annualDistKm: number
  let litresPer100km: number
  let kwhPer100km: number

  if (unit === "metric") {
    annualDistKm = dist
    litresPer100km = eff
    kwhPer100km = evCons
  } else {
    annualDistKm = dist * KM_PER_MILE
    litresPer100km = LITRES_PER_GALLON / eff * 100
    kwhPer100km = evCons * 100
  }

  const fuelPricePerLitre = unit === "metric" ? fuelPrice : fuelPrice / LITRES_PER_GALLON

  const annualLitres = (annualDistKm / 100) * litresPer100km
  const annualKwh = (annualDistKm / 100) * kwhPer100km

  const annualFuelCost = annualLitres * fuelPricePerLitre
  const annualEvCost = annualKwh * elecPrice
  const annualSaving = annualFuelCost - annualEvCost
  const monthlySaving = annualSaving / 12

  const breakEvenYears = priceDiff > 0 && annualSaving > 0
    ? priceDiff / annualSaving
    : null

  const co2PerLitre = s1.fuelType === "diesel" ? CO2_PER_LITRE_DIESEL : CO2_PER_LITRE_PETROL
  const co2ReductionKg = annualLitres * co2PerLitre

  return {
    annualFuelCost,
    annualEvCost,
    annualSaving,
    monthlySaving,
    breakEvenYears,
    co2ReductionKg,
  }
}

export function CalculatorSection() {
  const [step, setStep] = useState<1 | 2 | 3>(1)
  const [unit, setUnit] = useState<Unit>("metric")
  const [currency, setCurrency] = useState<Currency>(CURRENCIES[0])
  const [errors, setErrors] = useState<Errors>({})
  const [results, setResults] = useState<Results | null>(null)

  const [step1, setStep1] = useState<Step1>({
    fuelType: "petrol",
    fuelEfficiency: "",
    fuelPrice: "",
    annualDistance: "",
  })

  const [step2, setStep2] = useState<Step2>({
    evConsumption: "",
    electricityPrice: "",
    purchasePriceDiff: "",
  })

  function handleUnitChange(u: Unit) {
    setUnit(u)
    setStep1({ fuelType: step1.fuelType, fuelEfficiency: "", fuelPrice: "", annualDistance: "" })
    setStep2({ evConsumption: "", electricityPrice: "", purchasePriceDiff: "" })
    setErrors({})
  }

  function handleNext() {
    if (step === 1) {
      const errs = validateStep1(step1, unit)
      if (Object.keys(errs).length > 0) {
        setErrors(errs)
        return
      }
      setErrors({})
      setStep(2)
    } else if (step === 2) {
      const errs = validateStep2(step2, unit)
      if (Object.keys(errs).length > 0) {
        setErrors(errs)
        return
      }
      setErrors({})
      const res = calculate(step1, step2, unit)
      setResults(res)
      setStep(3)
    }
  }

  function handleBack() {
    setErrors({})
    if (step === 2) setStep(1)
    if (step === 3) setStep(2)
  }

  function handleReset() {
    setStep(1)
    setErrors({})
    setResults(null)
    setStep1({ fuelType: "petrol", fuelEfficiency: "", fuelPrice: "", annualDistance: "" })
    setStep2({ evConsumption: "", electricityPrice: "", purchasePriceDiff: "" })
  }

  const sym = currency.symbol

  return (
    <section
      className="w-full min-h-screen flex flex-col items-center px-4 py-16 sm:py-24"
      style={{ background: "#08090a" }}
    >
      <div className="w-full max-w-xl">
        <div className="mb-10 text-center">
          <p
            className="text-xs text-[#5e6ad2] mb-3 uppercase tracking-widest"
            style={{ fontVariationSettings: "'wght' 510", fontFeatureSettings: '"cv01", "ss03"' }}
          >
            EV vs petrol cost calculator
          </p>
          <h1
            className="text-[2rem] sm:text-[2.5rem] text-[#f7f8f8] leading-tight mb-3"
            style={{
              fontVariationSettings: "'wght' 510",
              fontFeatureSettings: '"cv01", "ss03"',
              letterSpacing: "-0.704px",
            }}
          >
            How much could you save switching to an EV?
          </h1>
          <p
            className="text-[#8a8f98] text-base leading-relaxed"
            style={{ fontVariationSettings: "'wght' 400", fontFeatureSettings: '"cv01", "ss03"' }}
          >
            Enter your driving details below and see the real cost difference between electric and petrol vehicles.
          </p>
        </div>

        <div
          className="rounded-xl border border-[rgba(255,255,255,0.08)] p-6 sm:p-8"
          style={{ background: "rgba(255,255,255,0.02)" }}
        >
          <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
            <ProgressBar step={step} />
          </div>

          <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
            <UnitToggle unit={unit} onChange={handleUnitChange} />
            <div className="flex items-center gap-2">
              <label
                className="text-xs text-[#8a8f98]"
                style={{ fontVariationSettings: "'wght' 510", fontFeatureSettings: '"cv01", "ss03"' }}
              >
                Currency
              </label>
              <select
                className={selectClass()}
                value={currency.code}
                onChange={(e) => {
                  const found = CURRENCIES.find((c) => c.code === e.target.value)
                  if (found) setCurrency(found)
                }}
                style={{ fontVariationSettings: "'wght' 510", fontFeatureSettings: '"cv01", "ss03"' }}
              >
                {CURRENCIES.map((c) => (
                  <option key={c.code} value={c.code} style={{ background: "#191a1b" }}>
                    {c.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {step === 1 && (
            <div className="space-y-5">
              <div>
                <p
                  className="text-base text-[#f7f8f8] mb-4"
                  style={{ fontVariationSettings: "'wght' 590", fontFeatureSettings: '"cv01", "ss03"', letterSpacing: "-0.24px" }}
                >
                  Your current car
                </p>
              </div>

              <div>
                <label className={labelClass()}>Fuel type</label>
                <div className="flex gap-2">
                  {(["petrol", "diesel"] as const).map((ft) => (
                    <button
                      key={ft}
                      type="button"
                      onClick={() => setStep1((prev) => ({ ...prev, fuelType: ft }))}
                      className={[
                        "flex-1 py-2.5 rounded-md text-sm border transition-all cursor-pointer",
                        step1.fuelType === ft
                          ? "bg-[rgba(94,106,210,0.12)] border-[rgba(94,106,210,0.3)] text-[#828fff]"
                          : "bg-[rgba(255,255,255,0.02)] border-[rgba(255,255,255,0.08)] text-[#8a8f98] hover:text-[#d0d6e0] hover:border-[rgba(255,255,255,0.12)]",
                      ].join(" ")}
                      style={{ fontVariationSettings: "'wght' 510", fontFeatureSettings: '"cv01", "ss03"' }}
                    >
                      {ft.charAt(0).toUpperCase() + ft.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className={labelClass()}>
                  {unit === "metric" ? "Fuel efficiency (L/100km)" : "Fuel efficiency (MPG)"}
                </label>
                <input
                  type="number"
                  inputMode="decimal"
                  min="0"
                  step="0.1"
                  placeholder={unit === "metric" ? "e.g. 8.5" : "e.g. 35"}
                  className={inputClass(!!errors.fuelEfficiency)}
                  value={step1.fuelEfficiency}
                  onChange={(e) => {
                    setStep1((prev) => ({ ...prev, fuelEfficiency: e.target.value }))
                    if (errors.fuelEfficiency) setErrors((prev) => ({ ...prev, fuelEfficiency: "" }))
                  }}
                  style={{ fontFeatureSettings: '"cv01", "ss03"' }}
                />
                <ErrorMsg msg={errors.fuelEfficiency} />
              </div>

              <div>
                <label className={labelClass()}>
                  {unit === "metric"
                    ? `Fuel price (${sym} per litre)`
                    : `Fuel price (${sym} per gallon)`}
                </label>
                <div className="relative">
                  <span
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-[#62666d] pointer-events-none"
                    style={{ fontFeatureSettings: '"cv01", "ss03"' }}
                  >
                    {sym}
                  </span>
                  <input
                    type="number"
                    inputMode="decimal"
                    min="0"
                    step="0.01"
                    placeholder={unit === "metric" ? "e.g. 1.80" : "e.g. 4.50"}
                    className={inputClass(!!errors.fuelPrice) + " pl-7"}
                    value={step1.fuelPrice}
                    onChange={(e) => {
                      setStep1((prev) => ({ ...prev, fuelPrice: e.target.value }))
                      if (errors.fuelPrice) setErrors((prev) => ({ ...prev, fuelPrice: "" }))
                    }}
                    style={{ fontFeatureSettings: '"cv01", "ss03"' }}
                  />
                </div>
                <ErrorMsg msg={errors.fuelPrice} />
              </div>

              <div>
                <label className={labelClass()}>
                  {unit === "metric" ? "Annual distance (km)" : "Annual distance (miles)"}
                </label>
                <input
                  type="number"
                  inputMode="numeric"
                  min="0"
                  step="100"
                  placeholder={unit === "metric" ? "e.g. 15000" : "e.g. 10000"}
                  className={inputClass(!!errors.annualDistance)}
                  value={step1.annualDistance}
                  onChange={(e) => {
                    setStep1((prev) => ({ ...prev, annualDistance: e.target.value }))
                    if (errors.annualDistance) setErrors((prev) => ({ ...prev, annualDistance: "" }))
                  }}
                  style={{ fontFeatureSettings: '"cv01", "ss03"' }}
                />
                <ErrorMsg msg={errors.annualDistance} />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-5">
              <div>
                <p
                  className="text-base text-[#f7f8f8] mb-4"
                  style={{ fontVariationSettings: "'wght' 590", fontFeatureSettings: '"cv01", "ss03"', letterSpacing: "-0.24px" }}
                >
                  Your EV
                </p>
              </div>

              <div>
                <label className={labelClass()}>
                  {unit === "metric"
                    ? "EV energy consumption (kWh/100km)"
                    : "EV energy consumption (kWh/mile)"}
                </label>
                <input
                  type="number"
                  inputMode="decimal"
                  min="0"
                  step="0.1"
                  placeholder={unit === "metric" ? "e.g. 18" : "e.g. 0.30"}
                  className={inputClass(!!errors.evConsumption)}
                  value={step2.evConsumption}
                  onChange={(e) => {
                    setStep2((prev) => ({ ...prev, evConsumption: e.target.value }))
                    if (errors.evConsumption) setErrors((prev) => ({ ...prev, evConsumption: "" }))
                  }}
                  style={{ fontFeatureSettings: '"cv01", "ss03"' }}
                />
                <ErrorMsg msg={errors.evConsumption} />
                <p className="mt-1 text-xs text-[#62666d]">
                  {unit === "metric"
                    ? "Typical EVs use 14–22 kWh/100km. Check your model's specs."
                    : "Typical EVs use 0.22–0.35 kWh/mile. Check your model's specs."}
                </p>
              </div>

              <div>
                <label className={labelClass()}>
                  {`Electricity price (${sym} per kWh)`}
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-[#62666d] pointer-events-none">
                    {sym}
                  </span>
                  <input
                    type="number"
                    inputMode="decimal"
                    min="0"
                    step="0.01"
                    placeholder="e.g. 0.28"
                    className={inputClass(!!errors.electricityPrice) + " pl-7"}
                    value={step2.electricityPrice}
                    onChange={(e) => {
                      setStep2((prev) => ({ ...prev, electricityPrice: e.target.value }))
                      if (errors.electricityPrice) setErrors((prev) => ({ ...prev, electricityPrice: "" }))
                    }}
                    style={{ fontFeatureSettings: '"cv01", "ss03"' }}
                  />
                </div>
                <ErrorMsg msg={errors.electricityPrice} />
              </div>

              <div>
                <label className={labelClass()}>
                  {`EV premium over petrol car (${sym}) — optional`}
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-[#62666d] pointer-events-none">
                    {sym}
                  </span>
                  <input
                    type="number"
                    inputMode="numeric"
                    min="0"
                    step="100"
                    placeholder="e.g. 8000"
                    className={inputClass(!!errors.purchasePriceDiff) + " pl-7"}
                    value={step2.purchasePriceDiff}
                    onChange={(e) => {
                      setStep2((prev) => ({ ...prev, purchasePriceDiff: e.target.value }))
                      if (errors.purchasePriceDiff) setErrors((prev) => ({ ...prev, purchasePriceDiff: "" }))
                    }}
                    style={{ fontFeatureSettings: '"cv01", "ss03"' }}
                  />
                </div>
                <ErrorMsg msg={errors.purchasePriceDiff} />
                <p className="mt-1 text-xs text-[#62666d]">
                  Enter how much more the EV costs upfront. Used to calculate your break-even point.
                </p>
              </div>
            </div>
          )}

          {step === 3 && results && (
            <div className="space-y-4">
              <div>
                <p
                  className="text-base text-[#f7f8f8] mb-1"
                  style={{ fontVariationSettings: "'wght' 590", fontFeatureSettings: '"cv01", "ss03"', letterSpacing: "-0.24px" }}
                >
                  Your savings
                </p>
                <p className="text-xs text-[#62666d] mb-4">
                  Based on your inputs. All figures are estimates.
                </p>
              </div>

              {results.annualSaving > 0 ? (
                <div
                  className="rounded-lg px-4 py-3 border border-[rgba(94,106,210,0.2)] mb-2"
                  style={{ background: "rgba(94,106,210,0.06)" }}
                >
                  <p
                    className="text-sm text-[#828fff]"
                    style={{ fontVariationSettings: "'wght' 510", fontFeatureSettings: '"cv01", "ss03"' }}
                  >
                    Switching to an EV saves you money. Your annual fuel saving is{" "}
                    <span style={{ fontVariationSettings: "'wght' 590" }}>
                      {formatMoney(results.annualSaving, sym)}
                    </span>
                    .
                  </p>
                </div>
              ) : (
                <div
                  className="rounded-lg px-4 py-3 border border-[rgba(255,200,0,0.15)] mb-2"
                  style={{ background: "rgba(255,200,0,0.04)" }}
                >
                  <p
                    className="text-sm text-yellow-400"
                    style={{ fontVariationSettings: "'wght' 510", fontFeatureSettings: '"cv01", "ss03"' }}
                  >
                    At current prices, electricity costs more than petrol for your usage. Check your electricity rate or consider driving more to improve the payback.
                  </p>
                </div>
              )}

              <div className="grid grid-cols-2 gap-3">
                <ResultCard
                  label="Monthly saving"
                  value={formatMoney(Math.abs(results.monthlySaving), sym)}
                  sub={results.monthlySaving < 0 ? "net cost vs petrol" : "vs petrol"}
                  accent={results.monthlySaving > 0}
                />
                <ResultCard
                  label="Annual saving"
                  value={formatMoney(Math.abs(results.annualSaving), sym)}
                  sub={results.annualSaving < 0 ? "net cost vs petrol" : "vs petrol"}
                  accent={results.annualSaving > 0}
                />
                <ResultCard
                  label="Annual petrol cost"
                  value={formatMoney(results.annualFuelCost, sym)}
                />
                <ResultCard
                  label="Annual EV charging cost"
                  value={formatMoney(results.annualEvCost, sym)}
                />
              </div>

              {results.breakEvenYears !== null && (
                <ResultCard
                  label="Break-even point"
                  value={
                    results.annualSaving > 0
                      ? `${results.breakEvenYears.toFixed(1)} years`
                      : "Never at current rates"
                  }
                  sub="Time to recover EV purchase premium"
                  accent={results.annualSaving > 0 && results.breakEvenYears < 10}
                />
              )}

              <ResultCard
                label="CO₂ reduction"
                value={`${Math.round(results.co2ReductionKg).toLocaleString()} kg/year`}
                sub="vs your current petrol car (tailpipe emissions only)"
              />
            </div>
          )}

          <div className="flex items-center justify-between mt-8 pt-6 border-t border-[rgba(255,255,255,0.06)]">
            {step > 1 ? (
              <button
                type="button"
                onClick={step === 3 ? handleReset : handleBack}
                className="px-4 py-2 rounded-md text-sm text-[#8a8f98] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] hover:text-[#d0d6e0] hover:border-[rgba(255,255,255,0.12)] transition-all cursor-pointer"
                style={{ fontVariationSettings: "'wght' 510", fontFeatureSettings: '"cv01", "ss03"' }}
              >
                {step === 3 ? "Start over" : "Back"}
              </button>
            ) : (
              <div />
            )}

            {step < 3 && (
              <button
                type="button"
                onClick={handleNext}
                className="px-5 py-2 rounded-md text-sm text-white bg-[#5e6ad2] hover:bg-[#828fff] transition-all cursor-pointer"
                style={{ fontVariationSettings: "'wght' 510", fontFeatureSettings: '"cv01", "ss03"' }}
              >
                {step === 1 ? "Next: your EV" : "Calculate savings"}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}