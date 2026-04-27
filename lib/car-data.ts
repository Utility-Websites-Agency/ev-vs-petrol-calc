// Fuel consumption figures sourced from manufacturer specs and government fuel guides.
// L/100km and kWh/100km are combined (city+highway) official figures.

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

export const PETROL_CARS: PetrolMake[] = [
  {
    make: "Toyota",
    models: [
      {
        model: "Corolla",
        versions: [
          { name: "Ascent 1.8L CVT", l100km: 6.7, fuelType: "petrol" },
          { name: "SX 2.0L CVT", l100km: 7.1, fuelType: "petrol" },
          { name: "ZR 2.0L CVT", l100km: 7.1, fuelType: "petrol" },
          { name: "GR Sport Hybrid", l100km: 5.1, fuelType: "petrol" },
        ],
      },
      {
        model: "Camry",
        versions: [
          { name: "Ascent 2.5L Hybrid", l100km: 4.9, fuelType: "petrol" },
          { name: "SX 2.5L Hybrid", l100km: 5.2, fuelType: "petrol" },
          { name: "SL 2.5L Hybrid", l100km: 5.4, fuelType: "petrol" },
        ],
      },
      {
        model: "RAV4",
        versions: [
          { name: "GX 2.0L Petrol", l100km: 8.1, fuelType: "petrol" },
          { name: "Edge 2.5L Hybrid", l100km: 5.5, fuelType: "petrol" },
          { name: "Cruiser 2.5L Hybrid", l100km: 5.6, fuelType: "petrol" },
          { name: "Edge GR-S Hybrid", l100km: 5.8, fuelType: "petrol" },
        ],
      },
      {
        model: "HiLux",
        versions: [
          { name: "WorkMate 2.4L Diesel", l100km: 8.3, fuelType: "diesel" },
          { name: "SR 2.8L Diesel", l100km: 8.3, fuelType: "diesel" },
          { name: "SR5 2.8L Diesel", l100km: 8.3, fuelType: "diesel" },
          { name: "Rogue 2.8L Diesel", l100km: 8.9, fuelType: "diesel" },
        ],
      },
      {
        model: "Kluger",
        versions: [
          { name: "GXL 2.5L Hybrid", l100km: 6.0, fuelType: "petrol" },
          { name: "Grande 2.5L Hybrid", l100km: 6.1, fuelType: "petrol" },
          { name: "GR Sport 2.5L Hybrid", l100km: 6.3, fuelType: "petrol" },
        ],
      },
      {
        model: "LandCruiser 300",
        versions: [
          { name: "GX 3.3L Diesel", l100km: 10.4, fuelType: "diesel" },
          { name: "GXL 3.3L Diesel", l100km: 10.4, fuelType: "diesel" },
          { name: "VX 3.3L Diesel", l100km: 10.5, fuelType: "diesel" },
          { name: "Sahara 3.3L Diesel", l100km: 10.5, fuelType: "diesel" },
        ],
      },
      {
        model: "Yaris",
        versions: [
          { name: "GX 1.5L Hybrid", l100km: 3.8, fuelType: "petrol" },
          { name: "ZR 1.5L Hybrid", l100km: 4.0, fuelType: "petrol" },
        ],
      },
      {
        model: "C-HR",
        versions: [
          { name: "GX 2.0L Hybrid", l100km: 5.3, fuelType: "petrol" },
          { name: "GXL 2.0L Hybrid", l100km: 5.3, fuelType: "petrol" },
        ],
      },
    ],
  },
  {
    make: "Mazda",
    models: [
      {
        model: "Mazda3",
        versions: [
          { name: "G20 Pure 2.0L", l100km: 6.0, fuelType: "petrol" },
          { name: "G20 Evolve 2.0L", l100km: 6.0, fuelType: "petrol" },
          { name: "G25 GT 2.5L", l100km: 7.0, fuelType: "petrol" },
        ],
      },
      {
        model: "CX-5",
        versions: [
          { name: "G20 Maxx 2.0L", l100km: 7.4, fuelType: "petrol" },
          { name: "G25 Touring 2.5L", l100km: 7.5, fuelType: "petrol" },
          { name: "G25 GT 2.5L Turbo", l100km: 8.5, fuelType: "petrol" },
          { name: "D20 Maxx 2.0L Diesel", l100km: 5.7, fuelType: "diesel" },
        ],
      },
      {
        model: "CX-30",
        versions: [
          { name: "G20 Pure 2.0L", l100km: 6.0, fuelType: "petrol" },
          { name: "G25 GT 2.5L", l100km: 7.1, fuelType: "petrol" },
        ],
      },
      {
        model: "Mazda6",
        versions: [
          { name: "Sport 2.5L", l100km: 6.9, fuelType: "petrol" },
          { name: "Touring 2.5L", l100km: 6.9, fuelType: "petrol" },
          { name: "GT 2.5L Turbo", l100km: 9.3, fuelType: "petrol" },
        ],
      },
      {
        model: "CX-9",
        versions: [
          { name: "Sport 2.5T", l100km: 9.7, fuelType: "petrol" },
          { name: "GT 2.5T", l100km: 9.7, fuelType: "petrol" },
          { name: "Azami 2.5T", l100km: 9.7, fuelType: "petrol" },
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
          { name: "Active 2.0L", l100km: 7.4, fuelType: "petrol" },
          { name: "Elite 2.0L", l100km: 7.4, fuelType: "petrol" },
          { name: "N Line 1.4T", l100km: 7.5, fuelType: "petrol" },
        ],
      },
      {
        model: "Tucson",
        versions: [
          { name: "Active 2.0L", l100km: 9.0, fuelType: "petrol" },
          { name: "Elite 1.6T", l100km: 8.4, fuelType: "petrol" },
          { name: "Highlander 1.6T Hybrid", l100km: 6.3, fuelType: "petrol" },
          { name: "N Line 1.6T", l100km: 8.4, fuelType: "petrol" },
        ],
      },
      {
        model: "Santa Fe",
        versions: [
          { name: "Active 2.5L", l100km: 10.2, fuelType: "petrol" },
          { name: "Elite 2.5L Hybrid", l100km: 6.8, fuelType: "petrol" },
          { name: "Calligraphy 2.5L Hybrid", l100km: 6.8, fuelType: "petrol" },
        ],
      },
      {
        model: "Kona",
        versions: [
          { name: "Active 2.0L", l100km: 7.6, fuelType: "petrol" },
          { name: "Elite 1.6T", l100km: 7.0, fuelType: "petrol" },
          { name: "Premium 1.6T Hybrid", l100km: 5.4, fuelType: "petrol" },
        ],
      },
      {
        model: "Staria",
        versions: [
          { name: "Load 2.2L Diesel", l100km: 8.9, fuelType: "diesel" },
          { name: "Elite 2.2L Diesel", l100km: 8.9, fuelType: "diesel" },
          { name: "Highlander 2.2L Diesel", l100km: 9.0, fuelType: "diesel" },
        ],
      },
    ],
  },
  {
    make: "Kia",
    models: [
      {
        model: "Cerato",
        versions: [
          { name: "S 2.0L", l100km: 8.0, fuelType: "petrol" },
          { name: "Sport 2.0L", l100km: 8.0, fuelType: "petrol" },
          { name: "GT 1.6T", l100km: 8.5, fuelType: "petrol" },
        ],
      },
      {
        model: "Sportage",
        versions: [
          { name: "S 2.0L", l100km: 8.4, fuelType: "petrol" },
          { name: "Sport+ 1.6T", l100km: 8.4, fuelType: "petrol" },
          { name: "GT-Line 1.6T", l100km: 7.5, fuelType: "petrol" },
          { name: "GT-Line 1.6T Hybrid", l100km: 6.2, fuelType: "petrol" },
        ],
      },
      {
        model: "Sorento",
        versions: [
          { name: "S 2.2L Diesel", l100km: 7.1, fuelType: "diesel" },
          { name: "Sport 2.2L Diesel", l100km: 7.1, fuelType: "diesel" },
          { name: "GT-Line 2.2L Diesel", l100km: 7.3, fuelType: "diesel" },
          { name: "GT-Line 1.6T Hybrid", l100km: 7.0, fuelType: "petrol" },
        ],
      },
      {
        model: "Seltos",
        versions: [
          { name: "S 2.0L", l100km: 8.2, fuelType: "petrol" },
          { name: "Sport 1.6T", l100km: 8.0, fuelType: "petrol" },
          { name: "GT-Line 1.6T", l100km: 8.0, fuelType: "petrol" },
        ],
      },
      {
        model: "Stinger",
        versions: [
          { name: "GT 2.0T", l100km: 9.8, fuelType: "petrol" },
          { name: "GT 3.3T AWD", l100km: 12.5, fuelType: "petrol" },
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
          { name: "XL 2.0L Diesel", l100km: 7.4, fuelType: "diesel" },
          { name: "XLS 2.0L Diesel", l100km: 7.4, fuelType: "diesel" },
          { name: "XLT 2.0L Diesel", l100km: 7.4, fuelType: "diesel" },
          { name: "Wildtrak 2.0L Diesel", l100km: 8.1, fuelType: "diesel" },
          { name: "Raptor 3.0L Diesel", l100km: 12.2, fuelType: "diesel" },
        ],
      },
      {
        model: "Everest",
        versions: [
          { name: "Ambiente 2.0L Diesel", l100km: 7.8, fuelType: "diesel" },
          { name: "Trend 2.0L Diesel", l100km: 7.8, fuelType: "diesel" },
          { name: "Sport 3.0L Diesel", l100km: 8.2, fuelType: "diesel" },
          { name: "Platinum 3.0L Diesel", l100km: 8.2, fuelType: "diesel" },
        ],
      },
      {
        model: "Puma",
        versions: [
          { name: "Puma 1.0T EcoBoost", l100km: 5.4, fuelType: "petrol" },
          { name: "ST-Line 1.0T EcoBoost", l100km: 5.4, fuelType: "petrol" },
        ],
      },
      {
        model: "Mustang",
        versions: [
          { name: "EcoBoost 2.3T", l100km: 10.2, fuelType: "petrol" },
          { name: "GT 5.0L V8", l100km: 14.0, fuelType: "petrol" },
          { name: "Dark Horse 5.0L V8", l100km: 14.5, fuelType: "petrol" },
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
          { name: "Life 1.4 TSI", l100km: 5.4, fuelType: "petrol" },
          { name: "Style 1.4 TSI", l100km: 5.4, fuelType: "petrol" },
          { name: "GTI 2.0 TSI", l100km: 7.4, fuelType: "petrol" },
          { name: "R 2.0 TSI 4Motion", l100km: 8.6, fuelType: "petrol" },
        ],
      },
      {
        model: "Tiguan",
        versions: [
          { name: "Life 1.4 TSI", l100km: 7.4, fuelType: "petrol" },
          { name: "Elegance 2.0 TSI", l100km: 7.4, fuelType: "petrol" },
          { name: "R-Line 2.0 TSI", l100km: 8.0, fuelType: "petrol" },
          { name: "R 2.0 TSI 4Motion", l100km: 10.0, fuelType: "petrol" },
        ],
      },
      {
        model: "Polo",
        versions: [
          { name: "Life 1.0 TSI", l100km: 5.3, fuelType: "petrol" },
          { name: "Style 1.0 TSI", l100km: 5.3, fuelType: "petrol" },
          { name: "GTI 2.0 TSI", l100km: 7.0, fuelType: "petrol" },
        ],
      },
      {
        model: "T-Roc",
        versions: [
          { name: "Life 1.4 TSI", l100km: 7.5, fuelType: "petrol" },
          { name: "Style 1.4 TSI", l100km: 7.5, fuelType: "petrol" },
          { name: "R 2.0 TSI 4Motion", l100km: 9.5, fuelType: "petrol" },
        ],
      },
    ],
  },
  {
    make: "Honda",
    models: [
      {
        model: "HR-V",
        versions: [
          { name: "VTi 1.5L", l100km: 6.1, fuelType: "petrol" },
          { name: "VTi-S 1.5L", l100km: 6.1, fuelType: "petrol" },
          { name: "VTi-LX 1.5L", l100km: 6.1, fuelType: "petrol" },
          { name: "e:HEV Hybrid", l100km: 4.7, fuelType: "petrol" },
        ],
      },
      {
        model: "CR-V",
        versions: [
          { name: "VTi-S 1.5T", l100km: 7.4, fuelType: "petrol" },
          { name: "VTi-L 1.5T AWD", l100km: 7.6, fuelType: "petrol" },
          { name: "VTi-LX e:HEV Hybrid", l100km: 5.5, fuelType: "petrol" },
        ],
      },
      {
        model: "Civic",
        versions: [
          { name: "VTi 1.5T", l100km: 6.4, fuelType: "petrol" },
          { name: "VTi-L 1.5T", l100km: 6.4, fuelType: "petrol" },
          { name: "RS 1.5T", l100km: 6.8, fuelType: "petrol" },
          { name: "Type R 2.0T", l100km: 9.5, fuelType: "petrol" },
        ],
      },
      {
        model: "Jazz",
        versions: [
          { name: "VTi-S e:HEV Hybrid", l100km: 4.4, fuelType: "petrol" },
          { name: "VTi-LX e:HEV Hybrid", l100km: 4.4, fuelType: "petrol" },
        ],
      },
    ],
  },
  {
    make: "Mitsubishi",
    models: [
      {
        model: "ASX",
        versions: [
          { name: "ES 2.0L", l100km: 7.4, fuelType: "petrol" },
          { name: "LS 2.0L", l100km: 7.4, fuelType: "petrol" },
          { name: "XLS 2.0L", l100km: 7.4, fuelType: "petrol" },
        ],
      },
      {
        model: "Outlander",
        versions: [
          { name: "ES 2.5L", l100km: 8.7, fuelType: "petrol" },
          { name: "LS 2.5L", l100km: 8.7, fuelType: "petrol" },
          { name: "Exceed 2.5L", l100km: 8.9, fuelType: "petrol" },
          { name: "Exceed PHEV", l100km: 1.9, fuelType: "petrol" },
        ],
      },
      {
        model: "Triton",
        versions: [
          { name: "GLX 2.4L Diesel", l100km: 7.2, fuelType: "diesel" },
          { name: "GLS 2.4L Diesel", l100km: 7.2, fuelType: "diesel" },
          { name: "GSR 2.4L Diesel", l100km: 7.5, fuelType: "diesel" },
          { name: "Triton Ralliart 2.4L", l100km: 8.3, fuelType: "diesel" },
        ],
      },
      {
        model: "Eclipse Cross",
        versions: [
          { name: "ES 1.5T", l100km: 7.8, fuelType: "petrol" },
          { name: "LS 1.5T", l100km: 7.8, fuelType: "petrol" },
          { name: "Exceed PHEV", l100km: 1.9, fuelType: "petrol" },
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
          { name: "2.5i AWD", l100km: 8.1, fuelType: "petrol" },
          { name: "2.5i Premium AWD", l100km: 8.1, fuelType: "petrol" },
          { name: "Touring XT Turbo AWD", l100km: 9.2, fuelType: "petrol" },
        ],
      },
      {
        model: "Forester",
        versions: [
          { name: "2.5i-L AWD", l100km: 8.1, fuelType: "petrol" },
          { name: "2.5i-S AWD", l100km: 8.1, fuelType: "petrol" },
          { name: "2.5i Sport e-Boxer", l100km: 6.7, fuelType: "petrol" },
        ],
      },
      {
        model: "Impreza",
        versions: [
          { name: "2.0i-L AWD", l100km: 6.7, fuelType: "petrol" },
          { name: "2.0i-S AWD", l100km: 6.7, fuelType: "petrol" },
        ],
      },
      {
        model: "WRX",
        versions: [
          { name: "Sport 2.4T AWD", l100km: 10.5, fuelType: "petrol" },
          { name: "GT 2.4T AWD", l100km: 10.5, fuelType: "petrol" },
        ],
      },
    ],
  },
  {
    make: "Nissan",
    models: [
      {
        model: "Qashqai",
        versions: [
          { name: "ST 1.3T", l100km: 6.2, fuelType: "petrol" },
          { name: "ST-L 1.3T", l100km: 6.2, fuelType: "petrol" },
          { name: "Ti 1.3T e-Power", l100km: 5.6, fuelType: "petrol" },
        ],
      },
      {
        model: "X-Trail",
        versions: [
          { name: "ST 1.5T e-Power", l100km: 6.0, fuelType: "petrol" },
          { name: "ST-L 1.5T e-Power", l100km: 6.0, fuelType: "petrol" },
          { name: "Ti 1.5T e-Power", l100km: 6.1, fuelType: "petrol" },
        ],
      },
      {
        model: "Navara",
        versions: [
          { name: "RX 2.3L Diesel", l100km: 7.7, fuelType: "diesel" },
          { name: "SX 2.3L Diesel", l100km: 7.7, fuelType: "diesel" },
          { name: "ST 2.3L Diesel", l100km: 7.7, fuelType: "diesel" },
          { name: "PRO-4X 2.3L Diesel", l100km: 8.0, fuelType: "diesel" },
        ],
      },
      {
        model: "Patrol",
        versions: [
          { name: "Ti 5.6L V8 Petrol", l100km: 15.2, fuelType: "petrol" },
          { name: "Ti-L 5.6L V8 Petrol", l100km: 15.2, fuelType: "petrol" },
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
          { name: "318i 1.5T", l100km: 6.0, fuelType: "petrol" },
          { name: "320i 2.0T", l100km: 6.5, fuelType: "petrol" },
          { name: "330i 2.0T", l100km: 7.0, fuelType: "petrol" },
          { name: "M340i 3.0T", l100km: 8.5, fuelType: "petrol" },
        ],
      },
      {
        model: "5 Series",
        versions: [
          { name: "520i 2.0T", l100km: 6.5, fuelType: "petrol" },
          { name: "530i 2.0T", l100km: 7.0, fuelType: "petrol" },
          { name: "540i 3.0T", l100km: 9.0, fuelType: "petrol" },
          { name: "M5 4.4L V8", l100km: 11.9, fuelType: "petrol" },
        ],
      },
      {
        model: "X3",
        versions: [
          { name: "sDrive20i 2.0T", l100km: 7.1, fuelType: "petrol" },
          { name: "xDrive20i 2.0T", l100km: 7.3, fuelType: "petrol" },
          { name: "M40i 3.0T", l100km: 9.0, fuelType: "petrol" },
        ],
      },
      {
        model: "X5",
        versions: [
          { name: "xDrive30i 2.0T", l100km: 10.2, fuelType: "petrol" },
          { name: "xDrive40i 3.0T", l100km: 11.0, fuelType: "petrol" },
          { name: "M50i 4.4L V8", l100km: 13.1, fuelType: "petrol" },
        ],
      },
    ],
  },
  {
    make: "Mercedes-Benz",
    models: [
      {
        model: "A-Class",
        versions: [
          { name: "A180 1.3T", l100km: 5.8, fuelType: "petrol" },
          { name: "A200 1.3T", l100km: 6.5, fuelType: "petrol" },
          { name: "A250 2.0T", l100km: 7.4, fuelType: "petrol" },
          { name: "A35 AMG 2.0T", l100km: 8.7, fuelType: "petrol" },
          { name: "A45 S AMG 2.0T", l100km: 9.2, fuelType: "petrol" },
        ],
      },
      {
        model: "C-Class",
        versions: [
          { name: "C200 1.5T", l100km: 6.2, fuelType: "petrol" },
          { name: "C300 2.0T", l100km: 7.4, fuelType: "petrol" },
          { name: "C43 AMG 2.0T", l100km: 10.5, fuelType: "petrol" },
        ],
      },
      {
        model: "GLC",
        versions: [
          { name: "GLC200 1.5T", l100km: 8.0, fuelType: "petrol" },
          { name: "GLC300 2.0T", l100km: 8.3, fuelType: "petrol" },
          { name: "GLC43 AMG 2.0T", l100km: 10.5, fuelType: "petrol" },
        ],
      },
      {
        model: "E-Class",
        versions: [
          { name: "E200 1.5T", l100km: 6.9, fuelType: "petrol" },
          { name: "E300 2.0T", l100km: 8.0, fuelType: "petrol" },
          { name: "E53 AMG 3.0T", l100km: 10.4, fuelType: "petrol" },
        ],
      },
    ],
  },
  {
    make: "Audi",
    models: [
      {
        model: "A3",
        versions: [
          { name: "35 TFSI 1.5T", l100km: 5.9, fuelType: "petrol" },
          { name: "40 TFSI 2.0T", l100km: 7.0, fuelType: "petrol" },
          { name: "S3 2.0T quattro", l100km: 8.3, fuelType: "petrol" },
          { name: "RS 3 2.5T", l100km: 9.6, fuelType: "petrol" },
        ],
      },
      {
        model: "Q5",
        versions: [
          { name: "40 TDI 2.0L Diesel", l100km: 6.5, fuelType: "diesel" },
          { name: "45 TFSI 2.0T", l100km: 8.3, fuelType: "petrol" },
          { name: "SQ5 3.0T", l100km: 9.7, fuelType: "petrol" },
        ],
      },
      {
        model: "A4",
        versions: [
          { name: "35 TFSI 1.5T", l100km: 6.4, fuelType: "petrol" },
          { name: "40 TFSI 2.0T", l100km: 7.3, fuelType: "petrol" },
          { name: "S4 3.0T", l100km: 9.0, fuelType: "petrol" },
        ],
      },
      {
        model: "Q3",
        versions: [
          { name: "35 TFSI 1.5T", l100km: 6.6, fuelType: "petrol" },
          { name: "45 TFSI 2.0T quattro", l100km: 7.7, fuelType: "petrol" },
          { name: "RS Q3 2.5T", l100km: 9.9, fuelType: "petrol" },
        ],
      },
    ],
  },
  {
    make: "MG",
    models: [
      {
        model: "MG3",
        versions: [
          { name: "Core 1.5L", l100km: 6.8, fuelType: "petrol" },
          { name: "Excite 1.5L", l100km: 6.8, fuelType: "petrol" },
          { name: "Essence 1.5L", l100km: 6.8, fuelType: "petrol" },
        ],
      },
      {
        model: "HS",
        versions: [
          { name: "Excite 1.5T", l100km: 8.3, fuelType: "petrol" },
          { name: "Essence 1.5T", l100km: 8.3, fuelType: "petrol" },
          { name: "X Plus PHEV", l100km: 2.1, fuelType: "petrol" },
        ],
      },
      {
        model: "ZS",
        versions: [
          { name: "Excite+ 1.5L", l100km: 6.9, fuelType: "petrol" },
          { name: "Essence 1.5T", l100km: 6.9, fuelType: "petrol" },
        ],
      },
    ],
  },
  {
    make: "Land Rover",
    models: [
      {
        model: "Defender",
        versions: [
          { name: "90 P300 2.0T", l100km: 11.1, fuelType: "petrol" },
          { name: "110 D250 3.0L Diesel", l100km: 9.0, fuelType: "diesel" },
          { name: "110 D300 3.0L Diesel", l100km: 9.2, fuelType: "diesel" },
          { name: "110 P400 3.0T", l100km: 11.9, fuelType: "petrol" },
        ],
      },
      {
        model: "Discovery",
        versions: [
          { name: "D250 3.0L Diesel", l100km: 9.5, fuelType: "diesel" },
          { name: "D300 3.0L Diesel", l100km: 9.7, fuelType: "diesel" },
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
          { name: "Sport 2.0T", l100km: 10.2, fuelType: "petrol" },
          { name: "Sahara 2.0T", l100km: 10.2, fuelType: "petrol" },
          { name: "Rubicon 3.6L V6", l100km: 12.8, fuelType: "petrol" },
        ],
      },
      {
        model: "Grand Cherokee",
        versions: [
          { name: "Laredo 3.6L V6", l100km: 12.6, fuelType: "petrol" },
          { name: "Limited 3.6L V6", l100km: 12.6, fuelType: "petrol" },
          { name: "Summit 4xe PHEV", l100km: 3.2, fuelType: "petrol" },
        ],
      },
    ],
  },
]

export const EV_CARS: EVMake[] = [
  {
    make: "Tesla",
    models: [
      {
        model: "Model 3",
        versions: [
          { name: "Standard Range RWD", kwh100km: 14.9 },
          { name: "Long Range AWD", kwh100km: 15.0 },
          { name: "Performance AWD", kwh100km: 16.5 },
        ],
      },
      {
        model: "Model Y",
        versions: [
          { name: "Standard Range RWD", kwh100km: 16.1 },
          { name: "Long Range AWD", kwh100km: 16.3 },
          { name: "Performance AWD", kwh100km: 17.0 },
        ],
      },
      {
        model: "Model S",
        versions: [
          { name: "Long Range AWD", kwh100km: 17.9 },
          { name: "Plaid AWD", kwh100km: 20.0 },
        ],
      },
      {
        model: "Model X",
        versions: [
          { name: "Long Range AWD", kwh100km: 20.0 },
          { name: "Plaid AWD", kwh100km: 21.0 },
        ],
      },
      {
        model: "Cybertruck",
        versions: [
          { name: "AWD Dual Motor", kwh100km: 25.6 },
          { name: "Cyberbeast AWD", kwh100km: 28.0 },
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
          { name: "Standard Range 2WD", kwh100km: 16.3 },
          { name: "Long Range 2WD", kwh100km: 15.6 },
          { name: "Long Range AWD", kwh100km: 17.4 },
          { name: "N Performance AWD", kwh100km: 21.3 },
        ],
      },
      {
        model: "IONIQ 6",
        versions: [
          { name: "Standard Range 2WD", kwh100km: 14.0 },
          { name: "Long Range 2WD", kwh100km: 13.9 },
          { name: "Long Range AWD", kwh100km: 15.5 },
        ],
      },
      {
        model: "Kona Electric",
        versions: [
          { name: "Standard Range 2WD", kwh100km: 14.3 },
          { name: "Long Range 2WD", kwh100km: 14.7 },
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
          { name: "Standard Range 2WD", kwh100km: 16.3 },
          { name: "Long Range 2WD", kwh100km: 15.6 },
          { name: "Long Range AWD", kwh100km: 17.4 },
          { name: "GT AWD", kwh100km: 24.0 },
        ],
      },
      {
        model: "EV9",
        versions: [
          { name: "Long Range 2WD", kwh100km: 19.6 },
          { name: "Long Range AWD", kwh100km: 21.2 },
          { name: "GT-Line AWD", kwh100km: 21.5 },
        ],
      },
      {
        model: "Niro EV",
        versions: [
          { name: "Wind 64.8kWh", kwh100km: 15.9 },
          { name: "Wave 64.8kWh", kwh100km: 15.9 },
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
          { name: "Standard Range 49.9kWh", kwh100km: 15.5 },
          { name: "Extended Range 60.5kWh", kwh100km: 15.9 },
        ],
      },
      {
        model: "Seal",
        versions: [
          { name: "Standard 61.4kWh RWD", kwh100km: 15.6 },
          { name: "Premium 82.6kWh RWD", kwh100km: 16.5 },
          { name: "Performance 82.6kWh AWD", kwh100km: 17.1 },
        ],
      },
      {
        model: "Dolphin",
        versions: [
          { name: "Standard 44.9kWh", kwh100km: 14.5 },
          { name: "Extended 60.4kWh", kwh100km: 15.3 },
        ],
      },
      {
        model: "Sealion 6",
        versions: [
          { name: "Premium 87.2kWh RWD", kwh100km: 15.8 },
          { name: "Performance 87.2kWh AWD", kwh100km: 17.6 },
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
          { name: "Pro RWD 77kWh", kwh100km: 18.5 },
          { name: "Pro 4Motion AWD 77kWh", kwh100km: 19.5 },
          { name: "GTX AWD 77kWh", kwh100km: 20.0 },
        ],
      },
      {
        model: "ID.3",
        versions: [
          { name: "Pure 58kWh", kwh100km: 15.4 },
          { name: "Pro S 77kWh", kwh100km: 16.7 },
        ],
      },
      {
        model: "ID. Buzz",
        versions: [
          { name: "Pro RWD 77kWh", kwh100km: 22.5 },
          { name: "Pro 4Motion AWD 77kWh", kwh100km: 23.8 },
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
          { name: "eDrive40 RWD 83.9kWh", kwh100km: 17.4 },
          { name: "xDrive40 AWD 83.9kWh", kwh100km: 18.5 },
          { name: "M50 AWD 83.9kWh", kwh100km: 22.5 },
        ],
      },
      {
        model: "iX3",
        versions: [
          { name: "Impressive RWD 74kWh", kwh100km: 17.0 },
        ],
      },
      {
        model: "iX",
        versions: [
          { name: "xDrive40 AWD 76.6kWh", kwh100km: 19.2 },
          { name: "xDrive50 AWD 111.5kWh", kwh100km: 20.5 },
          { name: "M60 AWD 111.5kWh", kwh100km: 23.7 },
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
          { name: "250 RWD 66.5kWh", kwh100km: 16.0 },
          { name: "250+ RWD 70.5kWh", kwh100km: 15.7 },
          { name: "350 4MATIC AWD 66.5kWh", kwh100km: 19.0 },
        ],
      },
      {
        model: "EQB",
        versions: [
          { name: "250 RWD 66.5kWh", kwh100km: 16.3 },
          { name: "350 4MATIC AWD 66.5kWh", kwh100km: 18.0 },
        ],
      },
      {
        model: "EQS",
        versions: [
          { name: "450+ RWD 107.8kWh", kwh100km: 18.3 },
          { name: "580 4MATIC AWD 107.8kWh", kwh100km: 20.0 },
          { name: "AMG EQS 53 4MATIC+", kwh100km: 21.5 },
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
          { name: "40 RWD 82kWh", kwh100km: 17.0 },
          { name: "50 quattro AWD 82kWh", kwh100km: 18.7 },
          { name: "45 S line RWD 82kWh", kwh100km: 17.2 },
        ],
      },
      {
        model: "e-tron GT",
        versions: [
          { name: "e-tron GT quattro 93kWh", kwh100km: 19.7 },
          { name: "RS e-tron GT quattro 93kWh", kwh100km: 20.4 },
        ],
      },
      {
        model: "Q8 e-tron",
        versions: [
          { name: "55 quattro AWD 114kWh", kwh100km: 24.0 },
          { name: "SQ8 quattro AWD 114kWh", kwh100km: 24.5 },
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
          { name: "Standard Range Single Motor", kwh100km: 15.6 },
          { name: "Long Range Single Motor", kwh100km: 17.5 },
          { name: "Long Range Dual Motor", kwh100km: 18.8 },
        ],
      },
      {
        model: "Polestar 3",
        versions: [
          { name: "Long Range AWD 111kWh", kwh100km: 21.0 },
          { name: "Long Range AWD Performance", kwh100km: 21.0 },
        ],
      },
    ],
  },
  {
    make: "MG",
    models: [
      {
        model: "MG4",
        versions: [
          { name: "Standard 51kWh RWD", kwh100km: 14.9 },
          { name: "Long Range 64kWh RWD", kwh100km: 14.9 },
          { name: "XPOWER 64kWh AWD", kwh100km: 17.7 },
        ],
      },
      {
        model: "ZS EV",
        versions: [
          { name: "Standard Range 50.3kWh", kwh100km: 16.5 },
          { name: "Long Range 72.6kWh", kwh100km: 17.0 },
        ],
      },
    ],
  },
  {
    make: "Nissan",
    models: [
      {
        model: "Leaf",
        versions: [
          { name: "Leaf 40kWh", kwh100km: 16.5 },
          { name: "Leaf e+ 62kWh", kwh100km: 17.8 },
        ],
      },
      {
        model: "Ariya",
        versions: [
          { name: "FWD 63kWh", kwh100km: 17.2 },
          { name: "FWD 87kWh", kwh100km: 17.4 },
          { name: "e-4ORCE AWD 87kWh", kwh100km: 19.5 },
        ],
      },
    ],
  },
  {
    make: "Volvo",
    models: [
      {
        model: "XC40 Recharge",
        versions: [
          { name: "Core RWD 69kWh", kwh100km: 17.5 },
          { name: "Plus RWD 69kWh", kwh100km: 17.5 },
          { name: "Twin AWD 78kWh", kwh100km: 19.8 },
        ],
      },
      {
        model: "C40 Recharge",
        versions: [
          { name: "Core RWD 69kWh", kwh100km: 17.5 },
          { name: "Plus Twin AWD 78kWh", kwh100km: 19.8 },
        ],
      },
      {
        model: "EX90",
        versions: [
          { name: "Twin AWD 111kWh", kwh100km: 20.0 },
          { name: "Twin AWD Performance", kwh100km: 20.0 },
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
          { name: "Standard AWD 135kWh", kwh100km: 22.0 },
          { name: "Max AWD 149kWh", kwh100km: 20.0 },
        ],
      },
      {
        model: "R1S",
        versions: [
          { name: "Standard AWD 135kWh", kwh100km: 22.0 },
          { name: "Max AWD 149kWh", kwh100km: 20.5 },
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
          { name: "Select RWD 70kWh", kwh100km: 19.0 },
          { name: "Premium RWD 91kWh", kwh100km: 18.4 },
          { name: "GT AWD 91kWh", kwh100km: 20.0 },
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
          { name: "Bolt EV 65kWh", kwh100km: 15.5 },
        ],
      },
      {
        model: "Bolt EUV",
        versions: [
          { name: "Bolt EUV 65kWh", kwh100km: 17.3 },
        ],
      },
    ],
  },
]

// Charging method → suggested electricity price ($/kWh, global avg)
export const CHARGING_RATES: Record<"home" | "public" | "mix", number> = {
  home: 0.30,
  public: 0.55,
  mix: 0.40,
}
