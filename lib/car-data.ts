export type FuelType = "petrol" | "diesel"

export interface PetrolVersion {
  name: string
  l100km: number
  fuelType: FuelType
}

export interface PetrolModel {
  model: string
  versions: PetrolVersion[]
}

export interface PetrolMake {
  make: string
  models: PetrolModel[]
}

export interface EVVersion {
  name: string
  kwh100km: number
}

export interface EVModel {
  model: string
  versions: EVVersion[]
}

export interface EVMake {
  make: string
  models: EVModel[]
}

export const CHARGING_RATES: Record<"home" | "public" | "mix", number> = {
  home: 0.30,
  public: 0.55,
  mix: 0.40,
}


// ─── PETROL / DIESEL CARS ───────────────────────────────────────────────────

export const PETROL_MAKES: PetrolMake[] = [
  {
    make: "Toyota",
    models: [
      {
        model: "Corolla",
        versions: [
          { name: "Ascent 2.0L CVT", l100km: 6.5, fuelType: "petrol" },
          { name: "Ascent Sport 2.0L CVT", l100km: 6.5, fuelType: "petrol" },
          { name: "SX 2.0L CVT", l100km: 6.5, fuelType: "petrol" },
          { name: "ZR 2.0L CVT", l100km: 6.5, fuelType: "petrol" },
          { name: "Hybrid Ascent 1.8L eCVT", l100km: 4.2, fuelType: "petrol" },
          { name: "Hybrid Ascent Sport 1.8L eCVT", l100km: 4.2, fuelType: "petrol" },
          { name: "Hybrid SX 1.8L eCVT", l100km: 4.2, fuelType: "petrol" },
          { name: "Hybrid ZR 1.8L eCVT", l100km: 4.2, fuelType: "petrol" },
          { name: "GR 1.6T AWD 6MT", l100km: 8.6, fuelType: "petrol" },
        ],
      },
      {
        model: "Camry",
        versions: [
          { name: "Ascent 2.5L CVT", l100km: 7.3, fuelType: "petrol" },
          { name: "Ascent Sport 2.5L CVT", l100km: 7.3, fuelType: "petrol" },
          { name: "SL 2.5L CVT", l100km: 7.3, fuelType: "petrol" },
          { name: "Hybrid Ascent 2.5L eCVT", l100km: 4.8, fuelType: "petrol" },
          { name: "Hybrid SL 2.5L eCVT", l100km: 4.8, fuelType: "petrol" },
        ],
      },
      {
        model: "RAV4",
        versions: [
          { name: "GX 2.5L CVT FWD", l100km: 7.4, fuelType: "petrol" },
          { name: "GXL 2.5L CVT FWD", l100km: 7.4, fuelType: "petrol" },
          { name: "GXL 2.5L CVT AWD", l100km: 7.7, fuelType: "petrol" },
          { name: "Cruiser 2.5L CVT AWD", l100km: 7.7, fuelType: "petrol" },
          { name: "Edge 2.5L CVT AWD", l100km: 7.7, fuelType: "petrol" },
          { name: "Hybrid GX 2.5L eCVT AWD", l100km: 5.2, fuelType: "petrol" },
          { name: "Hybrid GXL 2.5L eCVT AWD", l100km: 5.2, fuelType: "petrol" },
          { name: "Hybrid Cruiser 2.5L eCVT AWD", l100km: 5.2, fuelType: "petrol" },
          { name: "Hybrid Edge 2.5L eCVT AWD", l100km: 5.2, fuelType: "petrol" },
          { name: "PHEV GX 2.5L e-CVT AWD", l100km: 2.0, fuelType: "petrol" },
          { name: "PHEV GXL 2.5L e-CVT AWD", l100km: 2.0, fuelType: "petrol" },
          { name: "PHEV Cruiser 2.5L e-CVT AWD", l100km: 2.0, fuelType: "petrol" },
          { name: "PHEV Edge 2.5L e-CVT AWD", l100km: 2.0, fuelType: "petrol" },
        ],
      },
      {
        model: "HiLux",
        versions: [
          { name: "WorkMate 4x2 Single Cab 2.7L 6AT", l100km: 9.1, fuelType: "petrol" },
          { name: "SR 4x2 Extra Cab 2.8L 6MT Diesel", l100km: 7.5, fuelType: "diesel" },
          { name: "SR 4x2 Double Cab 2.8L 6AT Diesel", l100km: 7.7, fuelType: "diesel" },
          { name: "SR 4x4 Double Cab 2.8L 6MT Diesel", l100km: 8.3, fuelType: "diesel" },
          { name: "SR 4x4 Double Cab 2.8L 6AT Diesel", l100km: 8.5, fuelType: "diesel" },
          { name: "SR5 4x2 Double Cab 2.8L 6AT Diesel", l100km: 7.9, fuelType: "diesel" },
          { name: "SR5 4x4 Double Cab 2.8L 6AT Diesel", l100km: 8.5, fuelType: "diesel" },
          { name: "Rogue 4x4 2.8L 6AT Diesel", l100km: 8.7, fuelType: "diesel" },
          { name: "GR Sport 4x4 2.8L 6AT Diesel", l100km: 9.0, fuelType: "diesel" },
          { name: "Rugged 4x4 2.8L 6AT Diesel", l100km: 8.6, fuelType: "diesel" },
          { name: "Rugged X 4x4 2.8L 6AT Diesel", l100km: 8.8, fuelType: "diesel" },
        ],
      },
      {
        model: "LandCruiser 300",
        versions: [
          { name: "GX 3.3L Twin-Turbo Diesel 10AT", l100km: 9.5, fuelType: "diesel" },
          { name: "GXL 3.3L Twin-Turbo Diesel 10AT", l100km: 9.5, fuelType: "diesel" },
          { name: "VX 3.3L Twin-Turbo Diesel 10AT", l100km: 9.5, fuelType: "diesel" },
          { name: "Sahara 3.3L Twin-Turbo Diesel 10AT", l100km: 9.5, fuelType: "diesel" },
          { name: "Sahara ZX 3.3L Twin-Turbo Diesel 10AT", l100km: 9.8, fuelType: "diesel" },
          { name: "GR Sport 3.3L Twin-Turbo Diesel 10AT", l100km: 10.0, fuelType: "diesel" },
        ],
      },
      {
        model: "Prado",
        versions: [
          { name: "GX 2.8L Diesel 6MT", l100km: 8.9, fuelType: "diesel" },
          { name: "GX 2.8L Diesel 8AT", l100km: 9.1, fuelType: "diesel" },
          { name: "GXL 2.8L Diesel 8AT", l100km: 9.1, fuelType: "diesel" },
          { name: "VX 2.8L Diesel 8AT", l100km: 9.3, fuelType: "diesel" },
          { name: "Kakadu 2.8L Diesel 8AT", l100km: 9.3, fuelType: "diesel" },
          { name: "GX 2.4L PHEV 8AT", l100km: 2.1, fuelType: "petrol" },
          { name: "GXL 2.4L PHEV 8AT", l100km: 2.1, fuelType: "petrol" },
          { name: "VX 2.4L PHEV 8AT", l100km: 2.1, fuelType: "petrol" },
        ],
      },
      {
        model: "Yaris",
        versions: [
          { name: "Ascent 1.5L CVT", l100km: 5.2, fuelType: "petrol" },
          { name: "Ascent Sport 1.5L CVT", l100km: 5.2, fuelType: "petrol" },
          { name: "SX 1.5L CVT", l100km: 5.2, fuelType: "petrol" },
          { name: "ZR 1.5L CVT", l100km: 5.2, fuelType: "petrol" },
          { name: "Hybrid 1.5L eCVT", l100km: 3.3, fuelType: "petrol" },
          { name: "GR 1.6T AWD 6MT", l100km: 8.4, fuelType: "petrol" },
          { name: "GR Circuit 1.6T AWD 6MT", l100km: 8.4, fuelType: "petrol" },
        ],
      },
      {
        model: "Kluger",
        versions: [
          { name: "GX 2.5L eCVT FWD Hybrid", l100km: 5.8, fuelType: "petrol" },
          { name: "GXL 2.5L eCVT AWD Hybrid", l100km: 6.0, fuelType: "petrol" },
          { name: "Cruiser 2.5L eCVT AWD Hybrid", l100km: 6.0, fuelType: "petrol" },
          { name: "Grande 2.5L eCVT AWD Hybrid", l100km: 6.0, fuelType: "petrol" },
        ],
      },
    ],
  },
  {
    make: "Mazda",
    models: [
      {
        model: "CX-5",
        versions: [
          { name: "Maxx 2.0L SKYACTIV-G 6AT FWD", l100km: 7.1, fuelType: "petrol" },
          { name: "Maxx Sport 2.0L SKYACTIV-G 6AT FWD", l100km: 7.1, fuelType: "petrol" },
          { name: "Touring 2.0L SKYACTIV-G 6AT FWD", l100km: 7.1, fuelType: "petrol" },
          { name: "GT 2.0L SKYACTIV-G 6AT FWD", l100km: 7.1, fuelType: "petrol" },
          { name: "Akera 2.5L SKYACTIV-G 6AT AWD", l100km: 8.4, fuelType: "petrol" },
          { name: "GT SP 2.5T SKYACTIV-G 6AT AWD", l100km: 9.3, fuelType: "petrol" },
          { name: "Maxx 2.2L SKYACTIV-D 6AT AWD Diesel", l100km: 5.8, fuelType: "diesel" },
          { name: "Touring 2.2L SKYACTIV-D 6AT AWD Diesel", l100km: 5.8, fuelType: "diesel" },
          { name: "GT 2.2L SKYACTIV-D 6AT AWD Diesel", l100km: 5.8, fuelType: "diesel" },
        ],
      },
      {
        model: "CX-3",
        versions: [
          { name: "Maxx 2.0L 6AT FWD", l100km: 6.8, fuelType: "petrol" },
          { name: "Maxx Sport 2.0L 6AT FWD", l100km: 6.8, fuelType: "petrol" },
          { name: "Touring 2.0L 6AT FWD", l100km: 6.8, fuelType: "petrol" },
          { name: "GT 2.0L 6AT AWD", l100km: 7.0, fuelType: "petrol" },
        ],
      },
      {
        model: "CX-9",
        versions: [
          { name: "Sport 2.5T 6AT FWD", l100km: 9.0, fuelType: "petrol" },
          { name: "Touring 2.5T 6AT AWD", l100km: 9.8, fuelType: "petrol" },
          { name: "GT 2.5T 6AT AWD", l100km: 9.8, fuelType: "petrol" },
          { name: "Azami 2.5T 6AT AWD", l100km: 9.8, fuelType: "petrol" },
          { name: "Azami LE 2.5T 6AT AWD", l100km: 9.8, fuelType: "petrol" },
        ],
      },
      {
        model: "Mazda3",
        versions: [
          { name: "G20 Pure 2.0L 6MT Hatch", l100km: 6.5, fuelType: "petrol" },
          { name: "G20 Evolve 2.0L 6AT Hatch", l100km: 6.5, fuelType: "petrol" },
          { name: "G20 Touring 2.0L 6AT Sedan", l100km: 6.5, fuelType: "petrol" },
          { name: "G25 GT 2.5L 6AT Hatch", l100km: 7.2, fuelType: "petrol" },
          { name: "G25 GT 2.5L 6AT Sedan", l100km: 7.2, fuelType: "petrol" },
          { name: "X20 Touring 2.0L M-Hybrid 6MT Hatch", l100km: 6.0, fuelType: "petrol" },
        ],
      },
      {
        model: "BT-50",
        versions: [
          { name: "XT 4x2 3.0L Diesel 6MT", l100km: 7.9, fuelType: "diesel" },
          { name: "XT 4x2 3.0L Diesel 6AT", l100km: 8.1, fuelType: "diesel" },
          { name: "XT 4x4 3.0L Diesel 6MT", l100km: 8.5, fuelType: "diesel" },
          { name: "XT 4x4 3.0L Diesel 6AT", l100km: 8.7, fuelType: "diesel" },
          { name: "XS 4x4 3.0L Diesel 6AT", l100km: 8.7, fuelType: "diesel" },
          { name: "XTR 4x4 3.0L Diesel 6AT", l100km: 8.7, fuelType: "diesel" },
          { name: "Thunder 4x4 3.0L Diesel 6AT", l100km: 9.1, fuelType: "diesel" },
        ],
      },
    ],
  },
  {
    make: "Hyundai",
    models: [
      {
        model: "i30",
        versions: [
          { name: "Active 2.0L 6AT Hatch", l100km: 7.2, fuelType: "petrol" },
          { name: "Elite 2.0L 6AT Hatch", l100km: 7.2, fuelType: "petrol" },
          { name: "Elite 2.0L 6AT Sedan", l100km: 7.2, fuelType: "petrol" },
          { name: "Premium 2.0L 6AT Hatch", l100km: 7.2, fuelType: "petrol" },
          { name: "N Line 1.4T 7DCT Hatch", l100km: 7.0, fuelType: "petrol" },
          { name: "N Line Premium 1.4T 7DCT Hatch", l100km: 7.0, fuelType: "petrol" },
          { name: "N 2.0T 8DCT Hatch", l100km: 9.0, fuelType: "petrol" },
          { name: "N Performance 2.0T 8DCT Hatch", l100km: 9.0, fuelType: "petrol" },
        ],
      },
      {
        model: "Tucson",
        versions: [
          { name: "Active 2.0L 6AT FWD", l100km: 8.1, fuelType: "petrol" },
          { name: "Elite 2.0L 6AT FWD", l100km: 8.1, fuelType: "petrol" },
          { name: "Highlander 2.0L 6AT FWD", l100km: 8.1, fuelType: "petrol" },
          { name: "N Line 1.6T 7DCT AWD", l100km: 7.9, fuelType: "petrol" },
          { name: "N Line Premium 1.6T 7DCT AWD", l100km: 7.9, fuelType: "petrol" },
          { name: "Hybrid Elite 1.6T 6AT AWD", l100km: 5.7, fuelType: "petrol" },
          { name: "Hybrid Highlander 1.6T 6AT AWD", l100km: 5.7, fuelType: "petrol" },
          { name: "Hybrid N Line 1.6T 6AT AWD", l100km: 5.7, fuelType: "petrol" },
          { name: "PHEV Elite 1.6T 6AT AWD", l100km: 1.7, fuelType: "petrol" },
          { name: "PHEV Highlander 1.6T 6AT AWD", l100km: 1.7, fuelType: "petrol" },
          { name: "Active 2.0L CRDi 8AT AWD Diesel", l100km: 6.3, fuelType: "diesel" },
          { name: "Elite 2.0L CRDi 8AT AWD Diesel", l100km: 6.3, fuelType: "diesel" },
        ],
      },
      {
        model: "Santa Fe",
        versions: [
          { name: "Active 2.2L CRDi 8AT AWD Diesel", l100km: 7.3, fuelType: "diesel" },
          { name: "Elite 2.2L CRDi 8AT AWD Diesel", l100km: 7.3, fuelType: "diesel" },
          { name: "Highlander 2.2L CRDi 8AT AWD Diesel", l100km: 7.3, fuelType: "diesel" },
          { name: "Calligraphy 2.2L CRDi 8AT AWD Diesel", l100km: 7.3, fuelType: "diesel" },
          { name: "Hybrid Elite 1.6T 6AT AWD", l100km: 6.4, fuelType: "petrol" },
          { name: "Hybrid Highlander 1.6T 6AT AWD", l100km: 6.4, fuelType: "petrol" },
          { name: "PHEV Elite 1.6T 6AT AWD", l100km: 1.7, fuelType: "petrol" },
          { name: "PHEV Highlander 1.6T 6AT AWD", l100km: 1.7, fuelType: "petrol" },
        ],
      },
      {
        model: "Kona",
        versions: [
          { name: "Active 2.0L 6AT FWD", l100km: 7.7, fuelType: "petrol" },
          { name: "Elite 2.0L 6AT FWD", l100km: 7.7, fuelType: "petrol" },
          { name: "Premium 2.0L 6AT FWD", l100km: 7.7, fuelType: "petrol" },
          { name: "N Line 1.6T 7DCT AWD", l100km: 8.0, fuelType: "petrol" },
          { name: "Hybrid Active 1.6L 6DCT FWD", l100km: 4.8, fuelType: "petrol" },
          { name: "Hybrid Elite 1.6L 6DCT FWD", l100km: 4.8, fuelType: "petrol" },
        ],
      },
    ],
  },
  {
    make: "Kia",
    models: [
      {
        model: "Sportage",
        versions: [
          { name: "S 2.0L 6AT FWD", l100km: 8.2, fuelType: "petrol" },
          { name: "Sport 2.0L 6AT FWD", l100km: 8.2, fuelType: "petrol" },
          { name: "Sport+ 2.0L 6AT FWD", l100km: 8.2, fuelType: "petrol" },
          { name: "GT-Line 1.6T 7DCT AWD", l100km: 8.1, fuelType: "petrol" },
          { name: "GT-Line X-Line 1.6T 7DCT AWD", l100km: 8.1, fuelType: "petrol" },
          { name: "Hybrid Sport 1.6T 6AT FWD", l100km: 5.9, fuelType: "petrol" },
          { name: "Hybrid Sport+ 1.6T 6AT AWD", l100km: 6.2, fuelType: "petrol" },
          { name: "Hybrid GT-Line 1.6T 6AT AWD", l100km: 6.2, fuelType: "petrol" },
          { name: "PHEV Sport 1.6T 6AT AWD", l100km: 1.6, fuelType: "petrol" },
          { name: "PHEV GT-Line 1.6T 6AT AWD", l100km: 1.6, fuelType: "petrol" },
        ],
      },
      {
        model: "Sorento",
        versions: [
          { name: "Sport 2.2L CRDi 8AT AWD Diesel", l100km: 7.0, fuelType: "diesel" },
          { name: "Sport+ 2.2L CRDi 8AT AWD Diesel", l100km: 7.0, fuelType: "diesel" },
          { name: "GT-Line 2.2L CRDi 8AT AWD Diesel", l100km: 7.0, fuelType: "diesel" },
          { name: "Hybrid Sport 1.6T 6AT AWD", l100km: 6.4, fuelType: "petrol" },
          { name: "Hybrid Sport+ 1.6T 6AT AWD", l100km: 6.4, fuelType: "petrol" },
          { name: "PHEV Sport 1.6T 6AT AWD", l100km: 1.9, fuelType: "petrol" },
          { name: "PHEV Sport+ 1.6T 6AT AWD", l100km: 1.9, fuelType: "petrol" },
          { name: "PHEV GT-Line 1.6T 6AT AWD", l100km: 1.9, fuelType: "petrol" },
        ],
      },
      {
        model: "Cerato",
        versions: [
          { name: "S 2.0L 6AT Sedan", l100km: 7.3, fuelType: "petrol" },
          { name: "Sport 2.0L 6AT Sedan", l100km: 7.3, fuelType: "petrol" },
          { name: "Sport+ 2.0L 6AT Sedan", l100km: 7.3, fuelType: "petrol" },
          { name: "GT 1.6T 7DCT Hatch", l100km: 7.8, fuelType: "petrol" },
          { name: "S 2.0L 6AT Hatch", l100km: 7.3, fuelType: "petrol" },
          { name: "Sport 2.0L 6AT Hatch", l100km: 7.3, fuelType: "petrol" },
        ],
      },
      {
        model: "Carnival",
        versions: [
          { name: "S 3.5L V6 8AT", l100km: 10.2, fuelType: "petrol" },
          { name: "Sport 3.5L V6 8AT", l100km: 10.2, fuelType: "petrol" },
          { name: "Sport+ 3.5L V6 8AT", l100km: 10.2, fuelType: "petrol" },
          { name: "Platinum 3.5L V6 8AT", l100km: 10.5, fuelType: "petrol" },
          { name: "Hybrid Sport 1.6T 6AT", l100km: 6.6, fuelType: "petrol" },
          { name: "Hybrid Sport+ 1.6T 6AT", l100km: 6.6, fuelType: "petrol" },
        ],
      },
    ],
  },
  {
    make: "Ford",
    models: [
      {
        model: "Ranger",
        versions: [
          { name: "XL 4x2 Single Cab 2.0L Diesel 6MT", l100km: 7.5, fuelType: "diesel" },
          { name: "XL 4x2 Super Cab 2.0L Diesel 6MT", l100km: 7.7, fuelType: "diesel" },
          { name: "XL 4x2 Double Cab 2.0L Diesel 10AT", l100km: 7.9, fuelType: "diesel" },
          { name: "XL 4x4 Double Cab 2.0L Diesel 6MT", l100km: 8.4, fuelType: "diesel" },
          { name: "XL 4x4 Double Cab 2.0L Diesel 10AT", l100km: 8.6, fuelType: "diesel" },
          { name: "XLS 4x4 Double Cab 2.0L Diesel 10AT", l100km: 8.6, fuelType: "diesel" },
          { name: "XLT 4x4 Double Cab 2.0L Diesel 10AT", l100km: 8.6, fuelType: "diesel" },
          { name: "Sport 4x4 Double Cab 2.0L Diesel 10AT", l100km: 8.8, fuelType: "diesel" },
          { name: "Wildtrak 4x4 Double Cab 2.0L Diesel 10AT", l100km: 8.8, fuelType: "diesel" },
          { name: "Platinum 4x4 Double Cab 3.0L V6 Diesel 10AT", l100km: 9.5, fuelType: "diesel" },
          { name: "Raptor 4x4 Double Cab 3.0L V6 Diesel 10AT", l100km: 11.1, fuelType: "diesel" },
          { name: "Raptor V8 5.0L V8 4x4 10AT", l100km: 14.9, fuelType: "petrol" },
        ],
      },
      {
        model: "Everest",
        versions: [
          { name: "Ambiente 4x2 2.0L Diesel 10AT", l100km: 7.8, fuelType: "diesel" },
          { name: "Trend 4x4 2.0L Diesel 10AT", l100km: 8.3, fuelType: "diesel" },
          { name: "Sport 4x4 2.0L Diesel 10AT", l100km: 8.3, fuelType: "diesel" },
          { name: "Titanium 4x4 2.0L Diesel 10AT", l100km: 8.3, fuelType: "diesel" },
          { name: "Platinum 4x4 3.0L V6 Diesel 10AT", l100km: 9.2, fuelType: "diesel" },
        ],
      },
      {
        model: "Puma",
        versions: [
          { name: "Puma 1.0T EcoBoost 7DCT", l100km: 5.8, fuelType: "petrol" },
          { name: "ST-Line 1.0T EcoBoost 7DCT", l100km: 5.8, fuelType: "petrol" },
          { name: "ST-Line V 1.0T EcoBoost mHEV 7DCT", l100km: 5.6, fuelType: "petrol" },
          { name: "ST 1.5T EcoBoost 6MT", l100km: 7.5, fuelType: "petrol" },
        ],
      },
      {
        model: "Escape",
        versions: [
          { name: "Trend 2.5L PHEV eCVT FWD", l100km: 1.3, fuelType: "petrol" },
          { name: "ST-Line 2.5L PHEV eCVT FWD", l100km: 1.3, fuelType: "petrol" },
          { name: "Vignale 2.5L PHEV eCVT FWD", l100km: 1.3, fuelType: "petrol" },
          { name: "ST-Line 1.5T EcoBoost 8AT FWD", l100km: 7.3, fuelType: "petrol" },
        ],
      },
    ],
  },
  {
    make: "Mitsubishi",
    models: [
      {
        model: "Triton",
        versions: [
          { name: "GLX 4x2 Single Cab 2.4L Diesel 6MT", l100km: 7.6, fuelType: "diesel" },
          { name: "GLX 4x2 Double Cab 2.4L Diesel 6MT", l100km: 7.8, fuelType: "diesel" },
          { name: "GLX 4x2 Double Cab 2.4L Diesel 6AT", l100km: 8.0, fuelType: "diesel" },
          { name: "GLX 4x4 Double Cab 2.4L Diesel 6MT", l100km: 8.3, fuelType: "diesel" },
          { name: "GLX 4x4 Double Cab 2.4L Diesel 6AT", l100km: 8.5, fuelType: "diesel" },
          { name: "GLS 4x4 Double Cab 2.4L Diesel 6AT", l100km: 8.5, fuelType: "diesel" },
          { name: "GSR 4x4 Double Cab 2.4L Diesel 6AT", l100km: 8.6, fuelType: "diesel" },
          { name: "Ralliart 4x4 Double Cab 2.4L Diesel 6AT", l100km: 9.0, fuelType: "diesel" },
        ],
      },
      {
        model: "Outlander",
        versions: [
          { name: "ES 2WD 2.5L CVT", l100km: 8.0, fuelType: "petrol" },
          { name: "LS 2WD 2.5L CVT", l100km: 8.0, fuelType: "petrol" },
          { name: "LS 4WD 2.5L CVT", l100km: 8.3, fuelType: "petrol" },
          { name: "Exceed 4WD 2.5L CVT", l100km: 8.3, fuelType: "petrol" },
          { name: "Exceed Tourer 4WD 2.5L CVT", l100km: 8.3, fuelType: "petrol" },
          { name: "PHEV ES 2.4L", l100km: 1.9, fuelType: "petrol" },
          { name: "PHEV LS 2.4L", l100km: 1.9, fuelType: "petrol" },
          { name: "PHEV Exceed 2.4L", l100km: 1.9, fuelType: "petrol" },
          { name: "PHEV Exceed Tourer 2.4L", l100km: 1.9, fuelType: "petrol" },
          { name: "PHEV Ralliart 2.4L", l100km: 2.1, fuelType: "petrol" },
        ],
      },
      {
        model: "ASX",
        versions: [
          { name: "MR 1.3T 6DCT FWD", l100km: 6.0, fuelType: "petrol" },
          { name: "LS 1.3T 6DCT FWD", l100km: 6.0, fuelType: "petrol" },
          { name: "Exceed 1.6 HEV 6AT FWD", l100km: 4.7, fuelType: "petrol" },
          { name: "Exceed 1.6 PHEV 6AT FWD", l100km: 1.1, fuelType: "petrol" },
        ],
      },
      {
        model: "Eclipse Cross",
        versions: [
          { name: "ES 2WD 1.5T CVT", l100km: 7.7, fuelType: "petrol" },
          { name: "LS 2WD 1.5T CVT", l100km: 7.7, fuelType: "petrol" },
          { name: "Exceed 4WD 1.5T CVT", l100km: 8.3, fuelType: "petrol" },
          { name: "PHEV ES 2.4L AWD", l100km: 1.9, fuelType: "petrol" },
          { name: "PHEV Exceed 2.4L AWD", l100km: 1.9, fuelType: "petrol" },
        ],
      },
    ],
  },
  {
    make: "Nissan",
    models: [
      {
        model: "Navara",
        versions: [
          { name: "RX 4x2 King Cab 2.3L Diesel 6MT", l100km: 7.3, fuelType: "diesel" },
          { name: "SL 4x2 Double Cab 2.3L Diesel 7AT", l100km: 7.6, fuelType: "diesel" },
          { name: "RX 4x4 King Cab 2.3L Diesel 6MT", l100km: 8.0, fuelType: "diesel" },
          { name: "SL 4x4 Double Cab 2.3L Diesel 7AT", l100km: 8.3, fuelType: "diesel" },
          { name: "ST 4x4 Double Cab 2.3L Diesel 7AT", l100km: 8.3, fuelType: "diesel" },
          { name: "ST-X 4x4 Double Cab 2.3L Diesel 7AT", l100km: 8.3, fuelType: "diesel" },
          { name: "Pro-4X 4x4 Double Cab 2.3L Diesel 7AT", l100km: 8.8, fuelType: "diesel" },
        ],
      },
      {
        model: "X-Trail",
        versions: [
          { name: "ST 2.5L CVT FWD", l100km: 7.9, fuelType: "petrol" },
          { name: "ST-L 2.5L CVT FWD", l100km: 7.9, fuelType: "petrol" },
          { name: "ST 1.5T 3-motor e-4ORCE", l100km: 6.3, fuelType: "petrol" },
          { name: "ST-L 1.5T 3-motor e-4ORCE", l100km: 6.3, fuelType: "petrol" },
          { name: "Ti 1.5T 3-motor e-4ORCE", l100km: 6.3, fuelType: "petrol" },
        ],
      },
      {
        model: "Patrol",
        versions: [
          { name: "ST 4.0L V6 7AT", l100km: 13.5, fuelType: "petrol" },
          { name: "ST-L 4.0L V6 7AT", l100km: 13.5, fuelType: "petrol" },
          { name: "Ti 4.0L V6 7AT", l100km: 13.5, fuelType: "petrol" },
          { name: "Ti-L 4.0L V6 7AT", l100km: 13.8, fuelType: "petrol" },
        ],
      },
    ],
  },
  {
    make: "Volkswagen",
    models: [
      {
        model: "Golf",
        versions: [
          { name: "Life 1.4T TSI 8AT", l100km: 6.0, fuelType: "petrol" },
          { name: "Style 1.4T TSI 8AT", l100km: 6.0, fuelType: "petrol" },
          { name: "R-Line 1.4T TSI 8AT", l100km: 6.0, fuelType: "petrol" },
          { name: "GTI 2.0T TSI DSG", l100km: 7.1, fuelType: "petrol" },
          { name: "GTI Clubsport 2.0T TSI DSG", l100km: 7.5, fuelType: "petrol" },
          { name: "R 2.0T TSI DSG 4Motion AWD", l100km: 7.5, fuelType: "petrol" },
          { name: "GTE PHEV 1.4T eDSG", l100km: 1.5, fuelType: "petrol" },
        ],
      },
      {
        model: "Tiguan",
        versions: [
          { name: "Life 1.4T TSI 6AT FWD", l100km: 7.5, fuelType: "petrol" },
          { name: "Style 1.4T TSI 6AT FWD", l100km: 7.5, fuelType: "petrol" },
          { name: "R-Line 2.0T TSI 7DSG 4Motion", l100km: 8.2, fuelType: "petrol" },
          { name: "Allspace Life 2.0T TSI 7DSG 4Motion", l100km: 8.2, fuelType: "petrol" },
          { name: "R 2.0T TSI DSG 4Motion", l100km: 9.6, fuelType: "petrol" },
          { name: "eHybrid Life 1.4T eDSG FWD", l100km: 1.7, fuelType: "petrol" },
          { name: "eHybrid R-Line 1.4T eDSG FWD", l100km: 1.7, fuelType: "petrol" },
        ],
      },
      {
        model: "Amarok",
        versions: [
          { name: "TDI420 Life 4x4 3.0L V6 Diesel 10AT", l100km: 9.5, fuelType: "diesel" },
          { name: "TDI500 Style 4x4 3.0L V6 Diesel 10AT", l100km: 9.8, fuelType: "diesel" },
          { name: "TDI600 Adventura 4x4 3.0L V6 Diesel 10AT", l100km: 10.1, fuelType: "diesel" },
          { name: "V6 TDI 4x4 2.0L 8AT", l100km: 8.8, fuelType: "diesel" },
          { name: "PanAmericana 3.0L V6 Diesel 10AT 4x4", l100km: 10.5, fuelType: "diesel" },
        ],
      },
      {
        model: "Polo",
        versions: [
          { name: "Life 1.0L TSI 6AT", l100km: 5.4, fuelType: "petrol" },
          { name: "Style 1.0L TSI 6AT", l100km: 5.4, fuelType: "petrol" },
          { name: "GTI 2.0T TSI DSG", l100km: 6.8, fuelType: "petrol" },
        ],
      },
    ],
  },
  {
    make: "BMW",
    models: [
      {
        model: "3 Series",
        versions: [
          { name: "318i Sedan 1.5T 7DCT", l100km: 6.1, fuelType: "petrol" },
          { name: "320i Sedan 2.0T 8AT", l100km: 6.3, fuelType: "petrol" },
          { name: "330i Sedan 2.0T 8AT", l100km: 6.6, fuelType: "petrol" },
          { name: "M340i Sedan 3.0T 8AT xDrive", l100km: 8.0, fuelType: "petrol" },
          { name: "M3 Sedan 3.0T 6MT", l100km: 10.4, fuelType: "petrol" },
          { name: "M3 Sedan 3.0T 8AT", l100km: 10.4, fuelType: "petrol" },
          { name: "M3 Competition Sedan 3.0T 8AT", l100km: 10.4, fuelType: "petrol" },
          { name: "M3 Competition M xDrive AWD 3.0T 8AT", l100km: 10.5, fuelType: "petrol" },
          { name: "330e PHEV 2.0T 8AT", l100km: 1.9, fuelType: "petrol" },
          { name: "320d Sedan 2.0L Diesel 8AT", l100km: 4.9, fuelType: "diesel" },
        ],
      },
      {
        model: "5 Series",
        versions: [
          { name: "520i Sedan 2.0T 8AT", l100km: 7.0, fuelType: "petrol" },
          { name: "530i Sedan 2.0T 8AT xDrive", l100km: 7.6, fuelType: "petrol" },
          { name: "540i Sedan 3.0T 8AT xDrive", l100km: 8.1, fuelType: "petrol" },
          { name: "M550i Sedan 4.4T V8 8AT xDrive", l100km: 10.4, fuelType: "petrol" },
          { name: "530e PHEV 2.0T 8AT", l100km: 2.1, fuelType: "petrol" },
          { name: "520d Sedan 2.0L Diesel 8AT", l100km: 5.4, fuelType: "diesel" },
        ],
      },
      {
        model: "X3",
        versions: [
          { name: "sDrive20i 2.0T 8AT FWD", l100km: 7.3, fuelType: "petrol" },
          { name: "xDrive20i 2.0T 8AT AWD", l100km: 7.5, fuelType: "petrol" },
          { name: "xDrive30i 2.0T 8AT AWD", l100km: 7.8, fuelType: "petrol" },
          { name: "M40i 3.0T 8AT AWD", l100km: 8.9, fuelType: "petrol" },
          { name: "M Competition 3.0T 8AT AWD", l100km: 10.2, fuelType: "petrol" },
          { name: "xDrive20d 2.0L Diesel 8AT AWD", l100km: 5.5, fuelType: "diesel" },
          { name: "xDrive30d 3.0L Diesel 8AT AWD", l100km: 6.1, fuelType: "diesel" },
          { name: "xDrive30e PHEV 2.0T 8AT AWD", l100km: 2.1, fuelType: "petrol" },
        ],
      },
      {
        model: "X5",
        versions: [
          { name: "xDrive30d 3.0L Diesel 8AT AWD", l100km: 7.1, fuelType: "diesel" },
          { name: "xDrive40i 3.0T 8AT AWD", l100km: 9.5, fuelType: "petrol" },
          { name: "xDrive50e PHEV 3.0T 8AT AWD", l100km: 2.8, fuelType: "petrol" },
          { name: "M60i V8 4.4T 8AT AWD", l100km: 12.1, fuelType: "petrol" },
          { name: "X5 M Competition V8 4.4T 8AT AWD", l100km: 13.2, fuelType: "petrol" },
        ],
      },
    ],
  },
  {
    make: "Mercedes-Benz",
    models: [
      {
        model: "C-Class",
        versions: [
          { name: "C200 Sedan 1.5T 9AT", l100km: 7.1, fuelType: "petrol" },
          { name: "C300 Sedan 2.0T 9AT", l100km: 7.8, fuelType: "petrol" },
          { name: "C300 4MATIC Sedan 2.0T 9AT AWD", l100km: 8.0, fuelType: "petrol" },
          { name: "C300 Estate 2.0T 9AT", l100km: 7.9, fuelType: "petrol" },
          { name: "AMG C43 2.0T 4MATIC 9AT AWD", l100km: 9.3, fuelType: "petrol" },
          { name: "AMG C63 S E Performance PHEV 2.0T AWD", l100km: 6.8, fuelType: "petrol" },
          { name: "C220d Sedan 2.0L Diesel 9AT", l100km: 5.3, fuelType: "diesel" },
          { name: "C300e PHEV 2.0T 9AT", l100km: 1.6, fuelType: "petrol" },
        ],
      },
      {
        model: "E-Class",
        versions: [
          { name: "E200 Sedan 2.0T 9AT", l100km: 7.6, fuelType: "petrol" },
          { name: "E300 Sedan 2.0T 9AT", l100km: 8.3, fuelType: "petrol" },
          { name: "E300 4MATIC Sedan 2.0T 9AT AWD", l100km: 8.5, fuelType: "petrol" },
          { name: "E450 4MATIC Sedan 3.0T 9AT AWD", l100km: 9.1, fuelType: "petrol" },
          { name: "AMG E53 4MATIC+ Sedan 3.0T 9AT AWD", l100km: 9.9, fuelType: "petrol" },
          { name: "E220d Sedan 2.0L Diesel 9AT", l100km: 5.4, fuelType: "diesel" },
          { name: "E300e PHEV 2.0T 9AT", l100km: 2.0, fuelType: "petrol" },
        ],
      },
      {
        model: "GLC",
        versions: [
          { name: "GLC200 2.0T 9AT FWD", l100km: 8.3, fuelType: "petrol" },
          { name: "GLC300 4MATIC 2.0T 9AT AWD", l100km: 8.7, fuelType: "petrol" },
          { name: "GLC300e PHEV 2.0T 9AT AWD", l100km: 2.1, fuelType: "petrol" },
          { name: "AMG GLC43 4MATIC 2.0T 9AT AWD", l100km: 9.8, fuelType: "petrol" },
          { name: "AMG GLC63 S E Performance 4MATIC+ PHEV", l100km: 5.4, fuelType: "petrol" },
        ],
      },
    ],
  },
  {
    make: "Audi",
    models: [
      {
        model: "A4",
        versions: [
          { name: "35 TFSI 1.5T 7DCT FWD", l100km: 6.9, fuelType: "petrol" },
          { name: "40 TFSI 2.0T 7DCT FWD", l100km: 7.5, fuelType: "petrol" },
          { name: "45 TFSI quattro 2.0T 7DCT AWD", l100km: 8.2, fuelType: "petrol" },
          { name: "40 TDI quattro 2.0L Diesel 7DCT AWD", l100km: 5.5, fuelType: "diesel" },
          { name: "RS4 Competition 2.9T V6 8AT AWD", l100km: 10.5, fuelType: "petrol" },
        ],
      },
      {
        model: "Q5",
        versions: [
          { name: "40 TFSI 2.0T 7DCT FWD", l100km: 7.9, fuelType: "petrol" },
          { name: "45 TFSI quattro 2.0T 7DCT AWD", l100km: 8.4, fuelType: "petrol" },
          { name: "55 TFSI e quattro PHEV 2.0T 7DCT AWD", l100km: 2.1, fuelType: "petrol" },
          { name: "40 TDI quattro 2.0L Diesel 7DCT AWD", l100km: 6.1, fuelType: "diesel" },
          { name: "SQ5 TDI 3.0L Diesel 8AT AWD", l100km: 7.5, fuelType: "diesel" },
          { name: "RSQ5 2.9T V6 8AT AWD", l100km: 10.6, fuelType: "petrol" },
        ],
      },
      {
        model: "Q7",
        versions: [
          { name: "45 TFSI quattro 2.0T 8AT AWD", l100km: 9.3, fuelType: "petrol" },
          { name: "55 TFSI quattro 3.0T V6 8AT AWD", l100km: 10.8, fuelType: "petrol" },
          { name: "60 TFSI e quattro PHEV 3.0T 8AT AWD", l100km: 3.4, fuelType: "petrol" },
          { name: "45 TDI quattro 3.0L Diesel 8AT AWD", l100km: 7.6, fuelType: "diesel" },
          { name: "SQ7 TDI 4.0L Diesel 8AT AWD", l100km: 9.2, fuelType: "diesel" },
        ],
      },
      {
        model: "A6",
        versions: [
          { name: "40 TFSI 2.0T 7DCT FWD", l100km: 7.9, fuelType: "petrol" },
          { name: "45 TFSI quattro 2.0T 7DCT AWD", l100km: 8.5, fuelType: "petrol" },
          { name: "55 TFSI quattro 3.0T 7DCT AWD", l100km: 9.6, fuelType: "petrol" },
          { name: "45 TDI quattro 2.0L Diesel 7DCT AWD", l100km: 6.1, fuelType: "diesel" },
          { name: "RS6 Avant 4.0T V8 8AT AWD", l100km: 11.5, fuelType: "petrol" },
        ],
      },
    ],
  },
  {
    make: "Subaru",
    models: [
      {
        model: "Outback",
        versions: [
          { name: "AWD 2.5L CVT", l100km: 7.8, fuelType: "petrol" },
          { name: "AWD Touring 2.5L CVT", l100km: 7.8, fuelType: "petrol" },
          { name: "AWD Sport 2.5L CVT", l100km: 7.8, fuelType: "petrol" },
          { name: "AWD Touring XT 2.4T CVT", l100km: 8.7, fuelType: "petrol" },
        ],
      },
      {
        model: "Forester",
        versions: [
          { name: "2.5i AWD CVT", l100km: 7.5, fuelType: "petrol" },
          { name: "2.5i-L AWD CVT", l100km: 7.5, fuelType: "petrol" },
          { name: "2.5i-S AWD CVT", l100km: 7.5, fuelType: "petrol" },
          { name: "2.5i Sport AWD CVT", l100km: 7.5, fuelType: "petrol" },
          { name: "Hybrid 2.0L e-Boxer AWD CVT", l100km: 6.7, fuelType: "petrol" },
        ],
      },
      {
        model: "WRX",
        versions: [
          { name: "WRX 2.4T AWD CVT", l100km: 9.5, fuelType: "petrol" },
          { name: "WRX 2.4T AWD 6MT", l100km: 9.7, fuelType: "petrol" },
          { name: "WRX Premium 2.4T AWD CVT", l100km: 9.5, fuelType: "petrol" },
          { name: "WRX tS 2.4T AWD 6MT", l100km: 9.7, fuelType: "petrol" },
        ],
      },
    ],
  },
  {
    make: "Honda",
    models: [
      {
        model: "CR-V",
        versions: [
          { name: "Vi 1.5T CVT FWD", l100km: 7.0, fuelType: "petrol" },
          { name: "VTi 1.5T CVT FWD", l100km: 7.0, fuelType: "petrol" },
          { name: "VTi-S 1.5T CVT AWD", l100km: 7.6, fuelType: "petrol" },
          { name: "VTi-LX 1.5T CVT AWD", l100km: 7.6, fuelType: "petrol" },
          { name: "Hybrid 2.0L e:HEV 2WD", l100km: 5.4, fuelType: "petrol" },
          { name: "Hybrid 2.0L e:HEV AWD", l100km: 5.7, fuelType: "petrol" },
          { name: "PHEV 2.0L e:PHEV AWD", l100km: 1.5, fuelType: "petrol" },
        ],
      },
      {
        model: "HR-V",
        versions: [
          { name: "Vi 1.5T CVT FWD", l100km: 6.8, fuelType: "petrol" },
          { name: "VTi 1.5T CVT FWD", l100km: 6.8, fuelType: "petrol" },
          { name: "VTi-S 1.5T CVT FWD", l100km: 6.8, fuelType: "petrol" },
          { name: "VTi-LX 1.5T CVT FWD", l100km: 6.8, fuelType: "petrol" },
          { name: "e:HEV 1.5L FWD", l100km: 5.0, fuelType: "petrol" },
          { name: "e:HEV AWD 1.5L", l100km: 5.3, fuelType: "petrol" },
        ],
      },
      {
        model: "Civic",
        versions: [
          { name: "Vi 1.5T CVT Sedan", l100km: 6.6, fuelType: "petrol" },
          { name: "VTi 1.5T CVT Sedan", l100km: 6.6, fuelType: "petrol" },
          { name: "VTi-S 1.5T CVT Sedan", l100km: 6.6, fuelType: "petrol" },
          { name: "VTi-LX 1.5T CVT Sedan", l100km: 6.6, fuelType: "petrol" },
          { name: "Type R 2.0T 6MT FWD", l100km: 8.7, fuelType: "petrol" },
          { name: "e:HEV 2.0L CVT Sedan", l100km: 4.6, fuelType: "petrol" },
        ],
      },
    ],
  },
  {
    make: "Volvo",
    models: [
      {
        model: "XC60",
        versions: [
          { name: "B5 Momentum 2.0T 8AT FWD", l100km: 7.7, fuelType: "petrol" },
          { name: "B5 Inscription 2.0T 8AT FWD", l100km: 7.7, fuelType: "petrol" },
          { name: "B5 R-Design 2.0T 8AT AWD", l100km: 8.0, fuelType: "petrol" },
          { name: "B6 AWD 2.0T 8AT AWD", l100km: 8.3, fuelType: "petrol" },
          { name: "T8 Recharge PHEV AWD 2.0T", l100km: 1.8, fuelType: "petrol" },
          { name: "Polestar Engineered T8 PHEV AWD 2.0T", l100km: 2.2, fuelType: "petrol" },
          { name: "B5 Diesel AWD 2.0L 8AT AWD", l100km: 5.8, fuelType: "diesel" },
        ],
      },
      {
        model: "XC90",
        versions: [
          { name: "B5 Momentum 2.0T 8AT AWD", l100km: 8.5, fuelType: "petrol" },
          { name: "B6 Inscription 2.0T 8AT AWD", l100km: 9.0, fuelType: "petrol" },
          { name: "T8 Recharge PHEV AWD 2.0T", l100km: 2.1, fuelType: "petrol" },
          { name: "B5 Diesel AWD 2.0L 8AT AWD", l100km: 6.5, fuelType: "diesel" },
        ],
      },
    ],
  },
  {
    make: "Isuzu",
    models: [
      {
        model: "D-Max",
        versions: [
          { name: "SX 4x2 Single Cab 3.0L Diesel 6MT", l100km: 7.9, fuelType: "diesel" },
          { name: "SX 4x2 Crew Cab 3.0L Diesel 6AT", l100km: 8.1, fuelType: "diesel" },
          { name: "SX 4x4 Crew Cab 3.0L Diesel 6MT", l100km: 8.5, fuelType: "diesel" },
          { name: "SX 4x4 Crew Cab 3.0L Diesel 6AT", l100km: 8.7, fuelType: "diesel" },
          { name: "LS-M 4x4 Crew Cab 3.0L Diesel 6AT", l100km: 8.7, fuelType: "diesel" },
          { name: "LS-U 4x4 Crew Cab 3.0L Diesel 6AT", l100km: 8.7, fuelType: "diesel" },
          { name: "X-TERRAIN 4x4 Crew Cab 3.0L Diesel 6AT", l100km: 9.0, fuelType: "diesel" },
        ],
      },
      {
        model: "MU-X",
        versions: [
          { name: "LS-M RWD 3.0L Diesel 6AT", l100km: 8.4, fuelType: "diesel" },
          { name: "LS-U RWD 3.0L Diesel 6AT", l100km: 8.4, fuelType: "diesel" },
          { name: "LS-U 4x4 3.0L Diesel 6AT", l100km: 9.0, fuelType: "diesel" },
          { name: "LS-T 4x4 3.0L Diesel 6AT", l100km: 9.0, fuelType: "diesel" },
        ],
      },
    ],
  },
  {
    make: "LDV",
    models: [
      {
        model: "T60",
        versions: [
          { name: "Luxe 4x2 2.0L Diesel 6MT", l100km: 8.2, fuelType: "diesel" },
          { name: "Luxe 4x4 2.0L Diesel 6MT", l100km: 8.7, fuelType: "diesel" },
          { name: "Luxe 4x4 2.0L Diesel 8AT", l100km: 8.9, fuelType: "diesel" },
        ],
      },
      {
        model: "D90",
        versions: [
          { name: "Luxe 2.0L Diesel 8AT AWD", l100km: 9.5, fuelType: "diesel" },
          { name: "Executive 2.0L Diesel 8AT AWD", l100km: 9.5, fuelType: "diesel" },
        ],
      },
    ],
  },
  {
    make: "Jeep",
    models: [
      {
        model: "Wrangler",
        versions: [
          { name: "Sport 3.6L V6 8AT", l100km: 12.9, fuelType: "petrol" },
          { name: "Overland 3.6L V6 8AT", l100km: 12.9, fuelType: "petrol" },
          { name: "Rubicon 3.6L V6 8AT", l100km: 12.9, fuelType: "petrol" },
          { name: "Unlimited Sport 3.6L V6 8AT", l100km: 13.3, fuelType: "petrol" },
          { name: "Unlimited Rubicon 3.6L V6 8AT", l100km: 13.3, fuelType: "petrol" },
          { name: "4xe PHEV Sport 2.0T 8AT", l100km: 3.4, fuelType: "petrol" },
          { name: "4xe PHEV Rubicon 2.0T 8AT", l100km: 3.4, fuelType: "petrol" },
        ],
      },
      {
        model: "Grand Cherokee",
        versions: [
          { name: "Laredo 3.6L V6 8AT 4WD", l100km: 11.4, fuelType: "petrol" },
          { name: "Limited 3.6L V6 8AT 4WD", l100km: 11.4, fuelType: "petrol" },
          { name: "Overland 3.6L V6 8AT 4WD", l100km: 11.4, fuelType: "petrol" },
          { name: "Summit 3.6L V6 8AT 4WD", l100km: 11.4, fuelType: "petrol" },
          { name: "4xe PHEV Limited 2.0T 8AT", l100km: 3.4, fuelType: "petrol" },
          { name: "4xe PHEV Summit 2.0T 8AT", l100km: 3.4, fuelType: "petrol" },
          { name: "Trackhawk 6.2L V8 8AT", l100km: 18.5, fuelType: "petrol" },
        ],
      },
    ],
  },
]

// ─── ELECTRIC VEHICLES ───────────────────────────────────────────────────────

export const EV_MAKES: EVMake[] = [
  {
    make: "Tesla",
    models: [
      {
        model: "Model 3",
        versions: [
          { name: "RWD Standard Range", kwh100km: 14.9 },
          { name: "Long Range RWD", kwh100km: 14.3 },
          { name: "Long Range AWD", kwh100km: 15.7 },
          { name: "Performance AWD", kwh100km: 17.1 },
          { name: "Highland RWD", kwh100km: 13.9 },
          { name: "Highland Long Range AWD", kwh100km: 15.1 },
          { name: "Highland Performance AWD", kwh100km: 17.0 },
        ],
      },
      {
        model: "Model Y",
        versions: [
          { name: "RWD Standard Range", kwh100km: 14.9 },
          { name: "Long Range RWD", kwh100km: 15.7 },
          { name: "Long Range AWD", kwh100km: 16.9 },
          { name: "Performance AWD", kwh100km: 19.5 },
          { name: "Juniper RWD", kwh100km: 14.7 },
          { name: "Juniper Long Range AWD", kwh100km: 16.3 },
          { name: "Juniper Performance AWD", kwh100km: 19.0 },
        ],
      },
      {
        model: "Model S",
        versions: [
          { name: "Long Range AWD", kwh100km: 17.0 },
          { name: "Plaid AWD", kwh100km: 18.1 },
        ],
      },
      {
        model: "Model X",
        versions: [
          { name: "Long Range AWD", kwh100km: 18.8 },
          { name: "Plaid AWD", kwh100km: 20.5 },
        ],
      },
      {
        model: "Cybertruck",
        versions: [
          { name: "RWD Standard Range", kwh100km: 26.7 },
          { name: "AWD Long Range", kwh100km: 24.2 },
          { name: "Cyberbeast AWD", kwh100km: 27.3 },
        ],
      },
    ],
  },
  {
    make: "BYD",
    models: [
      {
        model: "Atto 3",
        versions: [
          { name: "Standard Range 49.9kWh", kwh100km: 15.9 },
          { name: "Extended Range 60.5kWh", kwh100km: 15.4 },
        ],
      },
      {
        model: "Seal",
        versions: [
          { name: "Dynamic RWD 61.4kWh", kwh100km: 15.7 },
          { name: "Excellence RWD 82.6kWh", kwh100km: 15.7 },
          { name: "Performance AWD 82.6kWh", kwh100km: 17.4 },
        ],
      },
      {
        model: "Dolphin",
        versions: [
          { name: "Dynamic 44.9kWh", kwh100km: 13.6 },
          { name: "Premium 60.4kWh", kwh100km: 13.3 },
        ],
      },
      {
        model: "Shark",
        versions: [
          { name: "PHEV 4WD Premium", kwh100km: 16.8 },
          { name: "PHEV 4WD Luxury", kwh100km: 16.8 },
        ],
      },
      {
        model: "Han",
        versions: [
          { name: "EV Rear-Wheel Drive 85.44kWh", kwh100km: 16.2 },
          { name: "EV All-Wheel Drive 85.44kWh", kwh100km: 17.5 },
        ],
      },
      {
        model: "Tang",
        versions: [
          { name: "EV AWD 108.8kWh 6-seat", kwh100km: 20.4 },
          { name: "EV AWD 108.8kWh 7-seat", kwh100km: 20.4 },
        ],
      },
      {
        model: "Sealion 6",
        versions: [
          { name: "PHEV Active FWD", kwh100km: 12.5 },
          { name: "PHEV Comfort FWD", kwh100km: 12.5 },
          { name: "PHEV Premium AWD", kwh100km: 14.0 },
        ],
      },
      {
        model: "Sealion 7",
        versions: [
          { name: "Dynamic RWD 71.8kWh", kwh100km: 16.2 },
          { name: "Premium AWD 82.6kWh", kwh100km: 18.0 },
          { name: "Performance AWD 82.6kWh", kwh100km: 19.5 },
        ],
      },
    ],
  },
  {
    make: "Polestar",
    models: [
      {
        model: "Polestar 2",
        versions: [
          { name: "Standard Range Single Motor FWD", kwh100km: 16.0 },
          { name: "Long Range Single Motor FWD", kwh100km: 16.3 },
          { name: "Long Range Dual Motor AWD", kwh100km: 18.4 },
          { name: "Performance Pack Long Range AWD", kwh100km: 18.8 },
        ],
      },
      {
        model: "Polestar 3",
        versions: [
          { name: "Long Range AWD", kwh100km: 20.5 },
          { name: "Long Range Dual Motor AWD Plus", kwh100km: 20.5 },
          { name: "Long Range Performance AWD", kwh100km: 22.0 },
        ],
      },
      {
        model: "Polestar 4",
        versions: [
          { name: "Long Range Single Motor RWD", kwh100km: 16.0 },
          { name: "Long Range Dual Motor AWD", kwh100km: 18.0 },
          { name: "Performance Dual Motor AWD", kwh100km: 19.5 },
        ],
      },
    ],
  },
  {
    make: "Kia",
    models: [
      {
        model: "EV6",
        versions: [
          { name: "Air RWD 58kWh", kwh100km: 16.5 },
          { name: "Earth RWD 77.4kWh", kwh100km: 16.3 },
          { name: "GT-Line RWD 77.4kWh", kwh100km: 16.3 },
          { name: "GT-Line AWD 77.4kWh", kwh100km: 18.0 },
          { name: "GT AWD 77.4kWh", kwh100km: 19.6 },
        ],
      },
      {
        model: "EV9",
        versions: [
          { name: "Air RWD 99.8kWh", kwh100km: 20.5 },
          { name: "Earth RWD 99.8kWh", kwh100km: 20.5 },
          { name: "GT-Line AWD 99.8kWh", kwh100km: 21.3 },
          { name: "GT-Line S AWD 99.8kWh", kwh100km: 21.3 },
        ],
      },
      {
        model: "Niro EV",
        versions: [
          { name: "S 64.8kWh", kwh100km: 15.1 },
          { name: "GT-Line 64.8kWh", kwh100km: 15.1 },
        ],
      },
      {
        model: "EV3",
        versions: [
          { name: "Standard 58.3kWh", kwh100km: 13.9 },
          { name: "Long Range 81.4kWh", kwh100km: 13.5 },
        ],
      },
    ],
  },
  {
    make: "Hyundai",
    models: [
      {
        model: "IONIQ 5",
        versions: [
          { name: "Standard Range RWD 58kWh", kwh100km: 16.3 },
          { name: "Long Range RWD 77.4kWh", kwh100km: 16.8 },
          { name: "Long Range AWD 77.4kWh", kwh100km: 18.7 },
          { name: "N 84kWh AWD", kwh100km: 22.6 },
        ],
      },
      {
        model: "IONIQ 6",
        versions: [
          { name: "Standard Range RWD 53kWh", kwh100km: 14.3 },
          { name: "Long Range RWD 77.4kWh", kwh100km: 14.0 },
          { name: "Long Range AWD 77.4kWh", kwh100km: 15.9 },
          { name: "N 84kWh AWD", kwh100km: 20.0 },
        ],
      },
      {
        model: "Kona Electric",
        versions: [
          { name: "Standard 48.6kWh FWD", kwh100km: 14.7 },
          { name: "Extended 65.4kWh FWD", kwh100km: 14.3 },
        ],
      },
      {
        model: "IONIQ 9",
        versions: [
          { name: "AWD Standard 110.3kWh", kwh100km: 21.2 },
          { name: "AWD Performance 110.3kWh", kwh100km: 22.0 },
        ],
      },
    ],
  },
  {
    make: "Mercedes-Benz",
    models: [
      {
        model: "EQA",
        versions: [
          { name: "EQA 250 FWD 66.5kWh", kwh100km: 16.2 },
          { name: "EQA 250+ FWD 70.5kWh", kwh100km: 15.7 },
          { name: "EQA 300 4MATIC AWD 66.5kWh", kwh100km: 17.7 },
          { name: "EQA 350 4MATIC AWD 66.5kWh", kwh100km: 17.7 },
        ],
      },
      {
        model: "EQB",
        versions: [
          { name: "EQB 250 FWD 66.5kWh", kwh100km: 16.5 },
          { name: "EQB 300 4MATIC AWD 66.5kWh", kwh100km: 18.0 },
          { name: "EQB 350 4MATIC AWD 66.5kWh", kwh100km: 18.0 },
        ],
      },
      {
        model: "EQC",
        versions: [
          { name: "EQC 400 4MATIC AWD 80kWh", kwh100km: 20.8 },
        ],
      },
      {
        model: "EQE",
        versions: [
          { name: "EQE 300 RWD 90.6kWh", kwh100km: 17.5 },
          { name: "EQE 350 RWD 90.6kWh", kwh100km: 17.5 },
          { name: "EQE 500 4MATIC AWD 90.6kWh", kwh100km: 19.3 },
          { name: "AMG EQE 53 4MATIC+ AWD 90.6kWh", kwh100km: 22.5 },
        ],
      },
      {
        model: "EQS",
        versions: [
          { name: "EQS 450 RWD 107.8kWh", kwh100km: 17.5 },
          { name: "EQS 450 4MATIC AWD 107.8kWh", kwh100km: 18.7 },
          { name: "EQS 580 4MATIC AWD 107.8kWh", kwh100km: 20.5 },
          { name: "AMG EQS 53 4MATIC+ AWD 107.8kWh", kwh100km: 23.5 },
        ],
      },
    ],
  },
  {
    make: "BMW",
    models: [
      {
        model: "i4",
        versions: [
          { name: "eDrive35 RWD 70.2kWh", kwh100km: 16.5 },
          { name: "eDrive40 RWD 83.9kWh", kwh100km: 17.5 },
          { name: "xDrive40 AWD 83.9kWh", kwh100km: 18.5 },
          { name: "M50 xDrive AWD 83.9kWh", kwh100km: 19.8 },
        ],
      },
      {
        model: "i5",
        versions: [
          { name: "eDrive40 RWD 81.2kWh", kwh100km: 17.5 },
          { name: "xDrive40 AWD 81.2kWh", kwh100km: 18.8 },
          { name: "M60 xDrive AWD 81.2kWh", kwh100km: 20.5 },
        ],
      },
      {
        model: "i7",
        versions: [
          { name: "xDrive60 AWD 101.7kWh", kwh100km: 19.5 },
          { name: "M70 xDrive AWD 101.7kWh", kwh100km: 23.0 },
        ],
      },
      {
        model: "iX",
        versions: [
          { name: "xDrive40 AWD 76.6kWh", kwh100km: 19.5 },
          { name: "xDrive50 AWD 111.5kWh", kwh100km: 21.5 },
          { name: "M60 AWD 111.5kWh", kwh100km: 23.6 },
        ],
      },
      {
        model: "iX1",
        versions: [
          { name: "eDrive20 RWD 64.7kWh", kwh100km: 17.3 },
          { name: "xDrive30 AWD 64.7kWh", kwh100km: 18.5 },
        ],
      },
      {
        model: "iX3",
        versions: [
          { name: "Impressive RWD 80kWh", kwh100km: 17.8 },
        ],
      },
    ],
  },
  {
    make: "Audi",
    models: [
      {
        model: "Q4 e-tron",
        versions: [
          { name: "Q4 35 e-tron RWD 52kWh", kwh100km: 16.8 },
          { name: "Q4 40 e-tron RWD 82kWh", kwh100km: 17.1 },
          { name: "Q4 45 e-tron quattro AWD 82kWh", kwh100km: 18.4 },
          { name: "Q4 50 e-tron quattro AWD 82kWh", kwh100km: 19.6 },
        ],
      },
      {
        model: "Q8 e-tron",
        versions: [
          { name: "Q8 50 e-tron FWD 95kWh", kwh100km: 20.6 },
          { name: "Q8 55 e-tron quattro AWD 114kWh", kwh100km: 24.1 },
          { name: "Q8 S e-tron quattro AWD 114kWh", kwh100km: 25.5 },
          { name: "SQ8 e-tron quattro AWD 114kWh", kwh100km: 26.1 },
        ],
      },
      {
        model: "e-tron GT",
        versions: [
          { name: "e-tron GT quattro AWD 85kWh", kwh100km: 19.6 },
          { name: "RS e-tron GT quattro AWD 85kWh", kwh100km: 20.0 },
          { name: "RS e-tron GT Performance quattro AWD 105kWh", kwh100km: 20.6 },
        ],
      },
    ],
  },
  {
    make: "Volkswagen",
    models: [
      {
        model: "ID.4",
        versions: [
          { name: "Pure RWD 52kWh", kwh100km: 16.5 },
          { name: "Pro RWD 77kWh", kwh100km: 17.0 },
          { name: "Pro Performance RWD 77kWh", kwh100km: 17.0 },
          { name: "GTX AWD 77kWh", kwh100km: 19.0 },
        ],
      },
      {
        model: "ID.5",
        versions: [
          { name: "Pro RWD 77kWh", kwh100km: 16.8 },
          { name: "Pro Performance RWD 77kWh", kwh100km: 16.8 },
          { name: "GTX AWD 77kWh", kwh100km: 18.5 },
          { name: "GTX Performance AWD 77kWh", kwh100km: 20.0 },
        ],
      },
      {
        model: "ID.3",
        versions: [
          { name: "Pure 45kWh RWD", kwh100km: 15.4 },
          { name: "Pro 58kWh RWD", kwh100km: 16.2 },
          { name: "Pro S 77kWh RWD", kwh100km: 16.8 },
          { name: "GTX 77kWh RWD", kwh100km: 17.1 },
        ],
      },
      {
        model: "ID.7",
        versions: [
          { name: "Pro RWD 77kWh Sedan", kwh100km: 15.4 },
          { name: "Pro S RWD 86kWh Sedan", kwh100km: 15.8 },
          { name: "GTX AWD 86kWh Sedan", kwh100km: 17.5 },
          { name: "Tourer Pro RWD 77kWh Estate", kwh100km: 16.3 },
          { name: "Tourer GTX AWD 86kWh Estate", kwh100km: 17.9 },
        ],
      },
    ],
  },
  {
    make: "Volvo",
    models: [
      {
        model: "EX30",
        versions: [
          { name: "Single Motor Extended Range RWD 69kWh", kwh100km: 14.1 },
          { name: "Twin Motor Performance AWD 69kWh", kwh100km: 16.3 },
        ],
      },
      {
        model: "EX40",
        versions: [
          { name: "Single Motor Extended Range RWD 82kWh", kwh100km: 17.5 },
          { name: "Twin Motor Performance AWD 82kWh", kwh100km: 20.0 },
          { name: "Recharge Single Motor P8 AWD 78kWh", kwh100km: 18.4 },
        ],
      },
      {
        model: "EX90",
        versions: [
          { name: "Twin Motor AWD 111kWh", kwh100km: 20.5 },
          { name: "Twin Motor Performance AWD 111kWh", kwh100km: 22.5 },
        ],
      },
      {
        model: "EC40",
        versions: [
          { name: "Single Motor Extended Range RWD 82kWh", kwh100km: 17.2 },
          { name: "Twin Motor Performance AWD 82kWh", kwh100km: 19.5 },
        ],
      },
    ],
  },
  {
    make: "Rivian",
    models: [
      {
        model: "R1T",
        versions: [
          { name: "Dual-Motor AWD Standard Battery", kwh100km: 25.0 },
          { name: "Dual-Motor AWD Large Battery", kwh100km: 24.0 },
          { name: "Quad-Motor AWD Max Battery", kwh100km: 27.5 },
        ],
      },
      {
        model: "R1S",
        versions: [
          { name: "Dual-Motor AWD Standard Battery", kwh100km: 25.8 },
          { name: "Dual-Motor AWD Large Battery", kwh100km: 24.5 },
          { name: "Quad-Motor AWD Max Battery", kwh100km: 28.0 },
        ],
      },
    ],
  },
  {
    make: "Lucid",
    models: [
      {
        model: "Air",
        versions: [
          { name: "Pure RWD 88kWh", kwh100km: 14.0 },
          { name: "Touring RWD 112kWh", kwh100km: 14.8 },
          { name: "Grand Touring AWD 112kWh", kwh100km: 15.2 },
          { name: "Sapphire AWD Tri-Motor 118kWh", kwh100km: 18.0 },
        ],
      },
    ],
  },
  {
    make: "Chevrolet",
    models: [
      {
        model: "Bolt EV",
        versions: [
          { name: "1LT 65kWh FWD", kwh100km: 16.0 },
          { name: "2LT 65kWh FWD", kwh100km: 16.0 },
          { name: "EUV 1LT 65kWh FWD", kwh100km: 16.8 },
          { name: "EUV 2LT 65kWh FWD", kwh100km: 16.8 },
        ],
      },
      {
        model: "Equinox EV",
        versions: [
          { name: "1RS FWD 73kWh", kwh100km: 16.3 },
          { name: "2RS FWD 73kWh", kwh100km: 16.3 },
          { name: "3RS AWD 73kWh", kwh100km: 18.0 },
        ],
      },
      {
        model: "Silverado EV",
        versions: [
          { name: "WT 4WD 200kWh", kwh100km: 30.5 },
          { name: "RST 4WD 200kWh", kwh100km: 30.5 },
        ],
      },
    ],
  },
  {
    make: "Ford",
    models: [
      {
        model: "Mustang Mach-E",
        versions: [
          { name: "Select RWD 70kWh", kwh100km: 16.8 },
          { name: "Select AWD 70kWh", kwh100km: 18.3 },
          { name: "Premium RWD 91kWh", kwh100km: 17.5 },
          { name: "Premium AWD 91kWh", kwh100km: 19.0 },
          { name: "GT AWD 91kWh", kwh100km: 21.3 },
          { name: "GT Performance AWD 91kWh", kwh100km: 22.0 },
        ],
      },
      {
        model: "F-150 Lightning",
        versions: [
          { name: "Pro RWD Standard Range 98kWh", kwh100km: 26.2 },
          { name: "XLT AWD Extended Range 131kWh", kwh100km: 27.5 },
          { name: "Lariat AWD Extended Range 131kWh", kwh100km: 27.5 },
          { name: "Platinum AWD Extended Range 131kWh", kwh100km: 28.0 },
          { name: "Platinum Max AWD Extended Range 131kWh", kwh100km: 28.0 },
        ],
      },
      {
        model: "Explorer EV",
        versions: [
          { name: "Standard Range RWD 77kWh", kwh100km: 17.1 },
          { name: "Extended Range RWD 79kWh", kwh100km: 16.8 },
          { name: "Extended Range AWD 79kWh", kwh100km: 18.5 },
        ],
      },
    ],
  },
  {
    make: "Zeekr",
    models: [
      {
        model: "001",
        versions: [
          { name: "ME RWD 100kWh", kwh100km: 16.5 },
          { name: "YOU RWD 100kWh", kwh100km: 16.2 },
          { name: "AWE AWD 100kWh", kwh100km: 18.0 },
          { name: "WE AWD 100kWh", kwh100km: 18.5 },
        ],
      },
      {
        model: "7X",
        versions: [
          { name: "Standard RWD 75kWh", kwh100km: 15.7 },
          { name: "Long Range RWD 75kWh", kwh100km: 15.2 },
          { name: "Performance AWD 100kWh", kwh100km: 18.2 },
        ],
      },
      {
        model: "X",
        versions: [
          { name: "Privilege RWD 66kWh", kwh100km: 14.8 },
          { name: "Privilege AWD 66kWh", kwh100km: 16.2 },
        ],
      },
      {
        model: "009",
        versions: [
          { name: "ME AWD 140kWh", kwh100km: 22.5 },
          { name: "YOU AWD 140kWh", kwh100km: 23.0 },
        ],
      },
    ],
  },
  {
    make: "XPeng",
    models: [
      {
        model: "G6",
        versions: [
          { name: "Standard Range RWD 66kWh", kwh100km: 14.7 },
          { name: "Long Range RWD 87.5kWh", kwh100km: 15.0 },
          { name: "Performance AWD 87.5kWh", kwh100km: 17.5 },
          { name: "Max Performance AWD 87.5kWh", kwh100km: 18.0 },
        ],
      },
      {
        model: "G9",
        versions: [
          { name: "Standard Range RWD 78.2kWh", kwh100km: 17.5 },
          { name: "Long Range RWD 98kWh", kwh100km: 17.5 },
          { name: "Long Range AWD 98kWh", kwh100km: 20.0 },
          { name: "Performance AWD 98kWh", kwh100km: 21.5 },
        ],
      },
      {
        model: "P7",
        versions: [
          { name: "Standard Range RWD 60.2kWh", kwh100km: 14.6 },
          { name: "Long Range RWD 80.7kWh", kwh100km: 14.2 },
          { name: "Performance AWD 80.7kWh", kwh100km: 16.5 },
        ],
      },
      {
        model: "X9",
        versions: [
          { name: "AWD 101.5kWh", kwh100km: 22.0 },
          { name: "Performance AWD 101.5kWh", kwh100km: 23.0 },
        ],
      },
    ],
  },
  {
    make: "Geely",
    models: [
      {
        model: "Galaxy E5",
        versions: [
          { name: "Standard Range FWD 49.52kWh", kwh100km: 13.8 },
          { name: "Long Range FWD 60.22kWh", kwh100km: 13.2 },
        ],
      },
      {
        model: "EX5",
        versions: [
          { name: "Standard Range FWD 65kWh", kwh100km: 15.3 },
          { name: "Long Range FWD 80kWh", kwh100km: 14.8 },
          { name: "Long Range AWD 80kWh", kwh100km: 17.0 },
        ],
      },
      {
        model: "Galaxy E8",
        versions: [
          { name: "RWD 100kWh", kwh100km: 14.5 },
          { name: "AWD 100kWh", kwh100km: 16.2 },
        ],
      },
    ],
  },
  {
    make: "Xiaomi",
    models: [
      {
        model: "SU7",
        versions: [
          { name: "Standard RWD 73.6kWh", kwh100km: 12.3 },
          { name: "Pro RWD 94.3kWh", kwh100km: 13.2 },
          { name: "Max AWD 101kWh", kwh100km: 14.8 },
          { name: "Ultra AWD Tri-Motor 101kWh", kwh100km: 17.0 },
        ],
      },
      {
        model: "SU7 Ultra",
        versions: [
          { name: "Tri-Motor AWD 101kWh", kwh100km: 17.0 },
        ],
      },
    ],
  },
  {
    make: "GWM",
    models: [
      {
        model: "Ora",
        versions: [
          { name: "Standard 48kWh", kwh100km: 13.5 },
          { name: "Extended Range 63kWh", kwh100km: 13.1 },
        ],
      },
      {
        model: "Tank 300 PHEV",
        versions: [
          { name: "PHEV 4WD Premium", kwh100km: 13.5 },
          { name: "PHEV 4WD Ultra", kwh100km: 13.5 },
        ],
      },
      {
        model: "Haval H6 PHEV",
        versions: [
          { name: "PHEV AWD Lux", kwh100km: 13.0 },
          { name: "PHEV AWD Ultra", kwh100km: 13.0 },
        ],
      },
    ],
  },
  {
    make: "Cupra",
    models: [
      {
        model: "Born",
        versions: [
          { name: "e-Boost 58kWh 150kW RWD", kwh100km: 15.4 },
          { name: "e-Boost 77kWh 170kW RWD", kwh100km: 16.2 },
          { name: "VZ 77kWh 230kW RWD", kwh100km: 16.8 },
        ],
      },
      {
        model: "Tavascan",
        versions: [
          { name: "VZ 77kWh AWD", kwh100km: 18.5 },
          { name: "Endurance 79kWh AWD", kwh100km: 18.8 },
        ],
      },
      {
        model: "Terramar",
        versions: [
          { name: "PHEV AWD 1.5T", kwh100km: 12.5 },
        ],
      },
    ],
  },
  {
    make: "Skoda",
    models: [
      {
        model: "Enyaq",
        versions: [
          { name: "Enyaq 60 RWD 62kWh", kwh100km: 16.8 },
          { name: "Enyaq 85 RWD 82kWh", kwh100km: 17.2 },
          { name: "Enyaq 85x AWD 82kWh", kwh100km: 18.5 },
          { name: "Enyaq RS AWD 82kWh", kwh100km: 19.0 },
        ],
      },
      {
        model: "Elroq",
        versions: [
          { name: "Elroq 50 RWD 55kWh", kwh100km: 15.0 },
          { name: "Elroq 60 RWD 63kWh", kwh100km: 15.5 },
          { name: "Elroq 85 RWD 82kWh", kwh100km: 16.2 },
          { name: "Elroq 85x AWD 82kWh", kwh100km: 17.5 },
          { name: "Elroq RS AWD 82kWh", kwh100km: 18.3 },
        ],
      },
    ],
  },
  {
    make: "Deepal",
    models: [
      {
        model: "S07",
        versions: [
          { name: "Standard RWD 66.8kWh", kwh100km: 14.5 },
          { name: "Long Range RWD 80.1kWh", kwh100km: 14.0 },
          { name: "Max AWD 80.1kWh", kwh100km: 15.8 },
        ],
      },
      {
        model: "L07",
        versions: [
          { name: "Standard RWD 58.1kWh", kwh100km: 13.8 },
          { name: "Long Range RWD 80.1kWh", kwh100km: 13.5 },
        ],
      },
    ],
  },
  {
    make: "JAC",
    models: [
      {
        model: "JS4 EV",
        versions: [
          { name: "Standard 55kWh FWD", kwh100km: 15.0 },
          { name: "Long Range 70kWh FWD", kwh100km: 14.5 },
          { name: "AWD 70kWh", kwh100km: 17.0 },
        ],
      },
      {
        model: "E10X",
        versions: [
          { name: "Standard 26kWh", kwh100km: 12.0 },
          { name: "Extended 41kWh", kwh100km: 11.5 },
        ],
      },
    ],
  },
  {
    make: "Smart",
    models: [
      {
        model: "#1",
        versions: [
          { name: "Pro+ RWD 66kWh", kwh100km: 15.5 },
          { name: "Premium RWD 66kWh", kwh100km: 15.5 },
          { name: "Brabus AWD 66kWh", kwh100km: 17.5 },
        ],
      },
      {
        model: "#3",
        versions: [
          { name: "Pro+ RWD 66kWh", kwh100km: 15.8 },
          { name: "Premium RWD 66kWh", kwh100km: 15.8 },
          { name: "Brabus AWD 66kWh", kwh100km: 18.5 },
        ],
      },
      {
        model: "#5",
        versions: [
          { name: "Pro+ AWD 100kWh", kwh100km: 19.5 },
          { name: "Brabus AWD 100kWh", kwh100km: 21.5 },
        ],
      },
    ],
  },
  {
    make: "MINI",
    models: [
      {
        model: "Cooper Electric",
        versions: [
          { name: "E RWD 40.7kWh", kwh100km: 15.0 },
          { name: "SE RWD 54.2kWh", kwh100km: 15.5 },
        ],
      },
      {
        model: "Aceman",
        versions: [
          { name: "E RWD 42.5kWh", kwh100km: 15.5 },
          { name: "SE RWD 54.2kWh", kwh100km: 16.0 },
        ],
      },
      {
        model: "Countryman",
        versions: [
          { name: "E RWD 64.7kWh", kwh100km: 17.5 },
          { name: "SE ALL4 AWD 64.7kWh", kwh100km: 19.0 },
        ],
      },
    ],
  },
]

export const PETROL_CARS = PETROL_MAKES
export const EV_CARS = EV_MAKES
