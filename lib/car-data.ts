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
      make: "Abarth",
      models: [
        {
                model: "124 Spider",
                versions: [
                  { name: "124 Spider 1.4T 6MT", l100km: 6.7, fuelType: "petrol" },
                  { name: "124 Spider Abarth 1.4T 6MT", l100km: 7.0, fuelType: "petrol" },
                ],
              },
        {
                model: "595",
                versions: [
                  { name: "595 1.4T 5MT", l100km: 6.9, fuelType: "petrol" },
                  { name: "595 Competizione 1.4T 5MT", l100km: 7.1, fuelType: "petrol" },
                  { name: "595 Turismo 1.4T 5AT", l100km: 7.0, fuelType: "petrol" },
                ],
              },
        {
                model: "695",
                versions: [
                  { name: "695 Biposto 1.4T 6MT", l100km: 7.3, fuelType: "petrol" },
                  { name: "695 Rivale 1.4T 5MT", l100km: 7.1, fuelType: "petrol" },
                ],
              }
      ],
    },
  {
      make: "Alfa Romeo",
      models: [
        {
                model: "Giulia",
                versions: [
                  { name: "Giulia 2.0T 8AT RWD", l100km: 7.1, fuelType: "petrol" },
                  { name: "Giulia 2.0T 8AT AWD", l100km: 7.5, fuelType: "petrol" },
                  { name: "Giulia Quadrifoglio 2.9 V6 8AT", l100km: 10.5, fuelType: "petrol" },
                  { name: "Giulia 2.2 Diesel 8AT RWD", l100km: 5.0, fuelType: "diesel" },
                  { name: "Giulia 2.2 Diesel 8AT AWD", l100km: 5.3, fuelType: "diesel" },
                ],
              },
        {
                model: "Giulietta",
                versions: [
                  { name: "Giulietta 1.4T 6MT FWD", l100km: 6.5, fuelType: "petrol" },
                  { name: "Giulietta 1.75T 6MT FWD", l100km: 7.8, fuelType: "petrol" },
                  { name: "Giulietta Quadrifoglio Verde 1.75T 6MT", l100km: 8.4, fuelType: "petrol" },
                  { name: "Giulietta 2.0 JTDm 6AT", l100km: 5.5, fuelType: "diesel" },
                ],
              },
        {
                model: "Stelvio",
                versions: [
                  { name: "Stelvio 2.0T 8AT AWD", l100km: 8.1, fuelType: "petrol" },
                  { name: "Stelvio Quadrifoglio 2.9 V6 8AT", l100km: 11.4, fuelType: "petrol" },
                  { name: "Stelvio 2.2 Diesel 8AT AWD", l100km: 6.0, fuelType: "diesel" },
                ],
              },
        {
                model: "Tonale",
                versions: [
                  { name: "Tonale 1.5T MHEV 7DCT FWD", l100km: 6.5, fuelType: "petrol" },
                  { name: "Tonale 1.5T PHEV AWD", l100km: 2.1, fuelType: "petrol" },
                  { name: "Tonale 1.6 Diesel 6AT FWD", l100km: 5.0, fuelType: "diesel" },
                ],
              }
      ],
    },
  {
      make: "Alpina",
      models: [
        {
                model: "B3",
                versions: [
                  { name: "B3 3.0 BiTurbo 8AT AWD", l100km: 9.3, fuelType: "petrol" },
                  { name: "B3 Touring 3.0 BiTurbo 8AT AWD", l100km: 9.5, fuelType: "petrol" },
                ],
              },
        {
                model: "B4",
                versions: [
                  { name: "B4 Gran Coupe 3.0 BiTurbo 8AT AWD", l100km: 9.4, fuelType: "petrol" },
                ],
              },
        {
                model: "B5",
                versions: [
                  { name: "B5 Sedan 4.4 V8 BiTurbo 8AT AWD", l100km: 11.5, fuelType: "petrol" },
                  { name: "B5 Touring 4.4 V8 BiTurbo 8AT AWD", l100km: 11.6, fuelType: "petrol" },
                ],
              },
        {
                model: "B7",
                versions: [
                  { name: "B7 4.4 V8 BiTurbo 8AT AWD", l100km: 12.4, fuelType: "petrol" },
                ],
              },
        {
                model: "D3",
                versions: [
                  { name: "D3 S Touring 3.0 BiTurbo Diesel 8AT AWD", l100km: 6.2, fuelType: "diesel" },
                ],
              },
        {
                model: "XB7",
                versions: [
                  { name: "XB7 4.4 V8 BiTurbo 8AT AWD", l100km: 13.1, fuelType: "petrol" },
                ],
              }
      ],
    },
  {
      make: "Alpine",
      models: [
        {
                model: "A110",
                versions: [
                  { name: "A110 1.8T 7DCT", l100km: 6.5, fuelType: "petrol" },
                  { name: "A110 S 1.8T 7DCT", l100km: 6.8, fuelType: "petrol" },
                  { name: "A110 GT 1.8T 7DCT", l100km: 6.7, fuelType: "petrol" },
                  { name: "A110 R 1.8T 7DCT", l100km: 7.0, fuelType: "petrol" },
                ],
              }
      ],
    },
  {
      make: "Aston Martin",
      models: [
        {
                model: "DB11",
                versions: [
                  { name: "DB11 V8 4.0 8AT", l100km: 12.5, fuelType: "petrol" },
                  { name: "DB11 V12 5.2 8AT", l100km: 14.3, fuelType: "petrol" },
                  { name: "DB11 Volante V8 4.0 8AT", l100km: 12.9, fuelType: "petrol" },
                ],
              },
        {
                model: "DB12",
                versions: [
                  { name: "DB12 4.0 V8 8AT", l100km: 12.3, fuelType: "petrol" },
                  { name: "DB12 Volante 4.0 V8 8AT", l100km: 12.5, fuelType: "petrol" },
                ],
              },
        {
                model: "DBS",
                versions: [
                  { name: "DBS Superleggera 5.2 V12 8AT", l100km: 14.8, fuelType: "petrol" },
                  { name: "DBS Volante 5.2 V12 8AT", l100km: 15.1, fuelType: "petrol" },
                ],
              },
        {
                model: "DBX",
                versions: [
                  { name: "DBX 4.0 V8 9AT AWD", l100km: 14.4, fuelType: "petrol" },
                  { name: "DBX707 4.0 V8 9AT AWD", l100km: 15.2, fuelType: "petrol" },
                ],
              },
        {
                model: "Vantage",
                versions: [
                  { name: "Vantage 4.0 V8 8AT", l100km: 11.9, fuelType: "petrol" },
                  { name: "Vantage F1 Edition 4.0 V8 8AT", l100km: 12.2, fuelType: "petrol" },
                  { name: "Vantage Roadster 4.0 V8 8AT", l100km: 12.2, fuelType: "petrol" },
                ],
              }
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
                model: "A6",
                versions: [
                  { name: "40 TFSI 2.0T 7DCT FWD", l100km: 7.9, fuelType: "petrol" },
                  { name: "45 TFSI quattro 2.0T 7DCT AWD", l100km: 8.5, fuelType: "petrol" },
                  { name: "55 TFSI quattro 3.0T 7DCT AWD", l100km: 9.6, fuelType: "petrol" },
                  { name: "45 TDI quattro 2.0L Diesel 7DCT AWD", l100km: 6.1, fuelType: "diesel" },
                  { name: "RS6 Avant 4.0T V8 8AT AWD", l100km: 11.5, fuelType: "petrol" },
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
              }
      ],
    },
  {
      make: "Bentley",
      models: [
        {
                model: "Bentayga",
                versions: [
                  { name: "Bentayga V8 4.0 8AT AWD", l100km: 14.7, fuelType: "petrol" },
                  { name: "Bentayga Speed W12 6.0 8AT AWD", l100km: 17.0, fuelType: "petrol" },
                  { name: "Bentayga Hybrid 3.0 V6 PHEV AWD", l100km: 3.2, fuelType: "petrol" },
                  { name: "Bentayga EWB V8 4.0 8AT AWD", l100km: 15.0, fuelType: "petrol" },
                ],
              },
        {
                model: "Continental GT",
                versions: [
                  { name: "Continental GT V8 4.0 8AT AWD", l100km: 12.2, fuelType: "petrol" },
                  { name: "Continental GT W12 6.0 8AT AWD", l100km: 14.7, fuelType: "petrol" },
                  { name: "Continental GT Speed W12 6.0 8AT AWD", l100km: 15.2, fuelType: "petrol" },
                  { name: "Continental GTC V8 4.0 8AT AWD", l100km: 12.5, fuelType: "petrol" },
                  { name: "Continental GTC W12 6.0 8AT AWD", l100km: 15.0, fuelType: "petrol" },
                ],
              },
        {
                model: "Flying Spur",
                versions: [
                  { name: "Flying Spur V8 4.0 8AT AWD", l100km: 11.9, fuelType: "petrol" },
                  { name: "Flying Spur W12 6.0 8AT AWD", l100km: 14.5, fuelType: "petrol" },
                  { name: "Flying Spur Hybrid 2.9 V6 PHEV", l100km: 2.9, fuelType: "petrol" },
                ],
              },
        {
                model: "Mulsanne",
                versions: [
                  { name: "Mulsanne 6.75 V8 8AT", l100km: 19.9, fuelType: "petrol" },
                  { name: "Mulsanne Speed 6.75 V8 8AT", l100km: 20.3, fuelType: "petrol" },
                ],
              }
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
              }
      ],
    },
  {
      make: "Chery",
      models: [
        {
                model: "Omoda 5",
                versions: [
                  { name: "Omoda 5 1.6T 7DCT FWD", l100km: 7.6, fuelType: "petrol" },
                  { name: "Omoda 5 GT 1.6T 7DCT FWD", l100km: 7.8, fuelType: "petrol" },
                ],
              },
        {
                model: "Tiggo 4 Pro",
                versions: [
                  { name: "Tiggo 4 Pro 1.5T 6AT FWD", l100km: 7.9, fuelType: "petrol" },
                ],
              },
        {
                model: "Tiggo 7 Pro",
                versions: [
                  { name: "Tiggo 7 Pro 1.6T 7DCT FWD", l100km: 8.1, fuelType: "petrol" },
                  { name: "Tiggo 7 Pro Max 1.6T 7DCT AWD", l100km: 8.5, fuelType: "petrol" },
                ],
              },
        {
                model: "Tiggo 8 Pro",
                versions: [
                  { name: "Tiggo 8 Pro 1.6T 7DCT FWD", l100km: 8.3, fuelType: "petrol" },
                  { name: "Tiggo 8 Pro Max 2.0T 8AT AWD", l100km: 9.5, fuelType: "petrol" },
                  { name: "Tiggo 8 Pro e+ PHEV AWD", l100km: 1.8, fuelType: "petrol" },
                ],
              }
      ],
    },
  {
      make: "Chrysler",
      models: [
        {
                model: "300",
                versions: [
                  { name: "300 3.6L V6 8AT RWD", l100km: 10.7, fuelType: "petrol" },
                  { name: "300 S 3.6L V6 8AT RWD", l100km: 10.7, fuelType: "petrol" },
                  { name: "300 SRT 6.4L V8 8AT RWD", l100km: 13.8, fuelType: "petrol" },
                ],
              },
        {
                model: "Pacifica",
                versions: [
                  { name: "Pacifica 3.6L V6 9AT FWD", l100km: 12.4, fuelType: "petrol" },
                  { name: "Pacifica Hybrid 3.6L V6 PHEV FWD", l100km: 3.4, fuelType: "petrol" },
                  { name: "Pacifica Limited 3.6L V6 9AT FWD", l100km: 12.6, fuelType: "petrol" },
                ],
              }
      ],
    },
  {
      make: "Citroen",
      models: [
        {
                model: "Berlingo",
                versions: [
                  { name: "Berlingo 1.2 PureTech 110 6AT", l100km: 7.0, fuelType: "petrol" },
                  { name: "Berlingo 1.5 BlueHDi 100 6MT", l100km: 4.9, fuelType: "diesel" },
                  { name: "Berlingo 1.5 BlueHDi 130 8AT", l100km: 5.1, fuelType: "diesel" },
                ],
              },
        {
                model: "C3",
                versions: [
                  { name: "C3 1.2 PureTech 83 5MT", l100km: 5.7, fuelType: "petrol" },
                  { name: "C3 1.2 PureTech 110 6AT", l100km: 5.9, fuelType: "petrol" },
                  { name: "C3 1.5 BlueHDi 100 6MT", l100km: 4.1, fuelType: "diesel" },
                ],
              },
        {
                model: "C4",
                versions: [
                  { name: "C4 1.2 PureTech 130 8AT", l100km: 6.1, fuelType: "petrol" },
                  { name: "C4 X 1.2 PureTech 130 8AT", l100km: 6.2, fuelType: "petrol" },
                  { name: "C4 1.5 BlueHDi 130 8AT", l100km: 4.6, fuelType: "diesel" },
                ],
              },
        {
                model: "C5 Aircross",
                versions: [
                  { name: "C5 Aircross 1.2 PureTech 130 8AT", l100km: 6.6, fuelType: "petrol" },
                  { name: "C5 Aircross PHEV 225 e-EAT8", l100km: 1.6, fuelType: "petrol" },
                  { name: "C5 Aircross 1.5 BlueHDi 130 8AT", l100km: 5.1, fuelType: "diesel" },
                ],
              }
      ],
    },
  {
      make: "Daewoo",
      models: [
        {
                model: "Lanos",
                versions: [
                  { name: "Lanos 1.4 5MT", l100km: 7.8, fuelType: "petrol" },
                  { name: "Lanos 1.6 5MT", l100km: 8.1, fuelType: "petrol" },
                ],
              },
        {
                model: "Leganza",
                versions: [
                  { name: "Leganza 2.0 4AT", l100km: 9.5, fuelType: "petrol" },
                ],
              },
        {
                model: "Nubira",
                versions: [
                  { name: "Nubira 1.6 5MT", l100km: 8.3, fuelType: "petrol" },
                  { name: "Nubira 2.0 5MT", l100km: 9.0, fuelType: "petrol" },
                ],
              }
      ],
    },
  {
      make: "Daihatsu",
      models: [
        {
                model: "Charade",
                versions: [
                  { name: "Charade 1.0 5MT", l100km: 5.8, fuelType: "petrol" },
                ],
              },
        {
                model: "Sirion",
                versions: [
                  { name: "Sirion 1.0 5MT", l100km: 6.1, fuelType: "petrol" },
                  { name: "Sirion 1.3 4AT", l100km: 6.7, fuelType: "petrol" },
                ],
              },
        {
                model: "Terios",
                versions: [
                  { name: "Terios 1.5 4AT 4WD", l100km: 8.5, fuelType: "petrol" },
                  { name: "Terios 1.5 5MT 4WD", l100km: 8.2, fuelType: "petrol" },
                ],
              }
      ],
    },
  {
      make: "Dodge",
      models: [
        {
                model: "Challenger",
                versions: [
                  { name: "Challenger SXT 3.6L V6 8AT RWD", l100km: 11.7, fuelType: "petrol" },
                  { name: "Challenger R/T 5.7L V8 8AT RWD", l100km: 13.6, fuelType: "petrol" },
                  { name: "Challenger Scat Pack 392 6.4L V8 8AT RWD", l100km: 14.8, fuelType: "petrol" },
                  { name: "Challenger SRT Hellcat 6.2L V8 8AT RWD", l100km: 16.5, fuelType: "petrol" },
                  { name: "Challenger SRT Hellcat Redeye 6.2L V8 8AT", l100km: 17.2, fuelType: "petrol" },
                  { name: "Challenger SRT Demon 170 6.2L V8 8AT", l100km: 18.1, fuelType: "petrol" },
                ],
              },
        {
                model: "Charger",
                versions: [
                  { name: "Charger SXT 3.6L V6 8AT RWD", l100km: 11.9, fuelType: "petrol" },
                  { name: "Charger R/T 5.7L V8 8AT RWD", l100km: 13.8, fuelType: "petrol" },
                  { name: "Charger Scat Pack 6.4L V8 8AT RWD", l100km: 15.0, fuelType: "petrol" },
                  { name: "Charger SRT Hellcat 6.2L V8 8AT RWD", l100km: 16.6, fuelType: "petrol" },
                  { name: "Charger SRT Hellcat Widebody 6.2L V8 8AT", l100km: 16.9, fuelType: "petrol" },
                ],
              },
        {
                model: "Durango",
                versions: [
                  { name: "Durango SXT 3.6L V6 8AT AWD", l100km: 13.0, fuelType: "petrol" },
                  { name: "Durango GT 3.6L V6 8AT AWD", l100km: 13.2, fuelType: "petrol" },
                  { name: "Durango R/T 5.7L V8 8AT AWD", l100km: 15.6, fuelType: "petrol" },
                  { name: "Durango SRT 392 6.4L V8 8AT AWD", l100km: 17.2, fuelType: "petrol" },
                  { name: "Durango SRT Hellcat 6.2L V8 8AT AWD", l100km: 19.0, fuelType: "petrol" },
                ],
              },
        {
                model: "RAM 1500 Classic",
                versions: [
                  { name: "RAM 1500 Classic 3.6L V6 8AT 4x4", l100km: 14.0, fuelType: "petrol" },
                  { name: "RAM 1500 Classic 5.7L V8 8AT 4x4", l100km: 15.8, fuelType: "petrol" },
                ],
              }
      ],
    },
  {
      make: "Ferrari",
      models: [
        {
                model: "296 GTB",
                versions: [
                  { name: "296 GTB 3.0 V6 Turbo PHEV 8DCT", l100km: 5.9, fuelType: "petrol" },
                  { name: "296 GTS 3.0 V6 Turbo PHEV 8DCT", l100km: 6.2, fuelType: "petrol" },
                ],
              },
        {
                model: "812",
                versions: [
                  { name: "812 Superfast 6.5 V12 7DCT", l100km: 14.9, fuelType: "petrol" },
                  { name: "812 GTS 6.5 V12 7DCT", l100km: 15.3, fuelType: "petrol" },
                  { name: "812 Competizione 6.5 V12 7DCT", l100km: 15.4, fuelType: "petrol" },
                ],
              },
        {
                model: "Portofino",
                versions: [
                  { name: "Portofino 3.9 V8 Turbo 7DCT", l100km: 11.4, fuelType: "petrol" },
                  { name: "Portofino M 3.9 V8 Turbo 8DCT", l100km: 11.0, fuelType: "petrol" },
                ],
              },
        {
                model: "Purosangue",
                versions: [
                  { name: "Purosangue 6.5 V12 8AT AWD", l100km: 14.8, fuelType: "petrol" },
                ],
              },
        {
                model: "Roma",
                versions: [
                  { name: "Roma 3.9 V8 Turbo 8DCT", l100km: 10.5, fuelType: "petrol" },
                  { name: "Roma Spider 3.9 V8 Turbo 8DCT", l100km: 10.8, fuelType: "petrol" },
                ],
              },
        {
                model: "SF90",
                versions: [
                  { name: "SF90 Stradale 4.0 V8 PHEV 8DCT AWD", l100km: 7.8, fuelType: "petrol" },
                  { name: "SF90 Spider 4.0 V8 PHEV 8DCT AWD", l100km: 8.1, fuelType: "petrol" },
                  { name: "SF90 XX Stradale 4.0 V8 PHEV 8DCT AWD", l100km: 8.3, fuelType: "petrol" },
                ],
              }
      ],
    },
  {
      make: "Fiat",
      models: [
        {
                model: "500",
                versions: [
                  { name: "500 1.0 Mild Hybrid 6MT", l100km: 5.4, fuelType: "petrol" },
                  { name: "500C 1.0 Mild Hybrid 6MT", l100km: 5.5, fuelType: "petrol" },
                  { name: "500 Abarth 1.4T 5MT", l100km: 6.9, fuelType: "petrol" },
                ],
              },
        {
                model: "500X",
                versions: [
                  { name: "500X 1.5 Turbo 7DCT FWD", l100km: 6.5, fuelType: "petrol" },
                  { name: "500X Sport 1.3T 6AT AWD", l100km: 7.8, fuelType: "petrol" },
                ],
              },
        {
                model: "Panda",
                versions: [
                  { name: "Panda 1.0 Mild Hybrid 5MT", l100km: 5.2, fuelType: "petrol" },
                  { name: "Panda Cross 1.0 Mild Hybrid 5MT 4x4", l100km: 5.8, fuelType: "petrol" },
                ],
              },
        {
                model: "Tipo",
                versions: [
                  { name: "Tipo 1.0 FireFly 6MT", l100km: 6.1, fuelType: "petrol" },
                  { name: "Tipo Cross 1.0 FireFly 6MT", l100km: 6.4, fuelType: "petrol" },
                  { name: "Tipo 1.6 JTD 6MT", l100km: 4.7, fuelType: "diesel" },
                ],
              }
      ],
    },
  {
      make: "Ford",
      models: [
        {
                model: "Escape",
                versions: [
                  { name: "Trend 2.5L PHEV eCVT FWD", l100km: 1.3, fuelType: "petrol" },
                  { name: "ST-Line 2.5L PHEV eCVT FWD", l100km: 1.3, fuelType: "petrol" },
                  { name: "Vignale 2.5L PHEV eCVT FWD", l100km: 1.3, fuelType: "petrol" },
                  { name: "ST-Line 1.5T EcoBoost 8AT FWD", l100km: 7.3, fuelType: "petrol" },
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
              }
      ],
    },
  {
      make: "FPV",
      models: [
        {
                model: "F6",
                versions: [
                  { name: "F6 4.0L 6cyl Turbo 6MT", l100km: 12.6, fuelType: "petrol" },
                  { name: "F6 X 4.0L 6cyl Turbo 6MT", l100km: 13.0, fuelType: "petrol" },
                ],
              },
        {
                model: "GS",
                versions: [
                  { name: "GS 5.0L V8 6AT", l100km: 14.0, fuelType: "petrol" },
                ],
              },
        {
                model: "GT",
                versions: [
                  { name: "GT 5.0L V8 6MT", l100km: 13.9, fuelType: "petrol" },
                  { name: "GT-P 5.0L V8 6MT", l100km: 14.2, fuelType: "petrol" },
                ],
              }
      ],
    },
  {
      make: "Genesis",
      models: [
        {
                model: "G70",
                versions: [
                  { name: "G70 2.0T 8AT RWD", l100km: 8.6, fuelType: "petrol" },
                  { name: "G70 2.0T 8AT AWD", l100km: 9.0, fuelType: "petrol" },
                  { name: "G70 3.3T 8AT RWD", l100km: 10.9, fuelType: "petrol" },
                  { name: "G70 3.3T 8AT AWD", l100km: 11.3, fuelType: "petrol" },
                ],
              },
        {
                model: "G80",
                versions: [
                  { name: "G80 2.5T 8AT AWD", l100km: 9.2, fuelType: "petrol" },
                  { name: "G80 3.5T 8AT AWD", l100km: 11.7, fuelType: "petrol" },
                  { name: "G80 2.2D 8AT AWD", l100km: 6.2, fuelType: "diesel" },
                ],
              },
        {
                model: "G90",
                versions: [
                  { name: "G90 3.5T 8AT AWD", l100km: 12.2, fuelType: "petrol" },
                  { name: "G90 5.0L V8 8AT AWD", l100km: 14.5, fuelType: "petrol" },
                ],
              },
        {
                model: "GV70",
                versions: [
                  { name: "GV70 2.5T 8AT RWD", l100km: 9.5, fuelType: "petrol" },
                  { name: "GV70 2.5T 8AT AWD", l100km: 9.9, fuelType: "petrol" },
                  { name: "GV70 3.5T 8AT AWD", l100km: 12.3, fuelType: "petrol" },
                  { name: "GV70 2.2D 8AT AWD", l100km: 7.1, fuelType: "diesel" },
                ],
              },
        {
                model: "GV80",
                versions: [
                  { name: "GV80 2.5T 8AT AWD", l100km: 10.4, fuelType: "petrol" },
                  { name: "GV80 3.5T 8AT AWD", l100km: 13.0, fuelType: "petrol" },
                  { name: "GV80 2.2D 8AT AWD", l100km: 7.5, fuelType: "diesel" },
                  { name: "GV80 3.0D 8AT AWD", l100km: 8.2, fuelType: "diesel" },
                ],
              }
      ],
    },
  {
      make: "Great Wall",
      models: [
        {
                model: "Cannon",
                versions: [
                  { name: "Cannon Standard 2.0T 8AT 4x4", l100km: 10.2, fuelType: "petrol" },
                  { name: "Cannon Premium 2.0T 8AT 4x4", l100km: 10.2, fuelType: "petrol" },
                  { name: "Cannon Ultimate 2.0T 8AT 4x4", l100km: 10.5, fuelType: "petrol" },
                ],
              },
        {
                model: "Steed",
                versions: [
                  { name: "Steed 2.0L 5MT 4x4", l100km: 10.8, fuelType: "petrol" },
                  { name: "Steed 2.0T 6AT 4x4", l100km: 11.1, fuelType: "petrol" },
                ],
              }
      ],
    },
  {
      make: "Haval",
      models: [
        {
                model: "H2",
                versions: [
                  { name: "H2 1.5T 6DCT FWD", l100km: 7.8, fuelType: "petrol" },
                  { name: "H2 1.5T 6AT AWD", l100km: 8.2, fuelType: "petrol" },
                ],
              },
        {
                model: "H6",
                versions: [
                  { name: "H6 1.5T 7DCT FWD", l100km: 7.9, fuelType: "petrol" },
                  { name: "H6 GT 1.5T 7DCT AWD", l100km: 8.3, fuelType: "petrol" },
                  { name: "H6 Ultra 2.0T 7DCT AWD", l100km: 9.1, fuelType: "petrol" },
                ],
              },
        {
                model: "Jolion",
                versions: [
                  { name: "Jolion 1.5T 7DCT FWD", l100km: 7.5, fuelType: "petrol" },
                  { name: "Jolion HEV 1.5L HEV CVT", l100km: 5.8, fuelType: "petrol" },
                  { name: "Jolion PHEV 1.5L PHEV", l100km: 1.9, fuelType: "petrol" },
                ],
              }
      ],
    },
  {
      make: "Holden",
      models: [
        {
                model: "Astra",
                versions: [
                  { name: "Astra CD 1.4T 6AT", l100km: 7.3, fuelType: "petrol" },
                  { name: "Astra RS 1.6T 6AT", l100km: 8.2, fuelType: "petrol" },
                ],
              },
        {
                model: "Captiva",
                versions: [
                  { name: "Captiva LS 2.4L 6AT FWD", l100km: 9.4, fuelType: "petrol" },
                  { name: "Captiva LT 2.0 CDTi 6AT AWD", l100km: 7.2, fuelType: "diesel" },
                  { name: "Captiva LTZ 2.2 CDTi 6AT AWD", l100km: 7.5, fuelType: "diesel" },
                ],
              },
        {
                model: "Colorado",
                versions: [
                  { name: "Colorado LS 2.5T 6MT 4x2", l100km: 9.8, fuelType: "diesel" },
                  { name: "Colorado LT 2.8T 6AT 4x4", l100km: 10.3, fuelType: "diesel" },
                  { name: "Colorado Z71 2.8T 6AT 4x4", l100km: 10.5, fuelType: "diesel" },
                  { name: "Colorado LTZ 2.8T 6AT 4x4", l100km: 10.5, fuelType: "diesel" },
                ],
              },
        {
                model: "Commodore",
                versions: [
                  { name: "Commodore Evoke 3.0L V6 6AT RWD", l100km: 10.8, fuelType: "petrol" },
                  { name: "Commodore SV6 3.0L V6 6AT RWD", l100km: 10.8, fuelType: "petrol" },
                  { name: "Commodore SS 6.0L V8 6AT RWD", l100km: 13.7, fuelType: "petrol" },
                  { name: "Commodore SS-V 6.0L V8 6AT RWD", l100km: 13.7, fuelType: "petrol" },
                  { name: "Commodore HSV Clubsport 6.2L V8 6MT RWD", l100km: 15.2, fuelType: "petrol" },
                ],
              },
        {
                model: "Cruze",
                versions: [
                  { name: "Cruze CD 1.4T 6AT", l100km: 7.1, fuelType: "petrol" },
                  { name: "Cruze SRi-V 1.6T 6AT", l100km: 7.9, fuelType: "petrol" },
                  { name: "Cruze CDX 2.0T Diesel 6MT", l100km: 5.4, fuelType: "diesel" },
                ],
              }
      ],
    },
  {
      make: "Honda",
      models: [
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
              }
      ],
    },
  {
      make: "HSV",
      models: [
        {
                model: "Clubsport",
                versions: [
                  { name: "Clubsport R8 6.2L V8 6MT RWD", l100km: 15.2, fuelType: "petrol" },
                  { name: "Clubsport R8 LSA 6.2L SC V8 6MT RWD", l100km: 15.8, fuelType: "petrol" },
                ],
              },
        {
                model: "GTS",
                versions: [
                  { name: "GTS 6.2L V8 6MT RWD", l100km: 15.5, fuelType: "petrol" },
                  { name: "GTS-R W1 6.2L SC V8 6MT RWD", l100km: 16.5, fuelType: "petrol" },
                ],
              },
        {
                model: "Maloo",
                versions: [
                  { name: "Maloo R8 6.2L V8 6MT RWD ute", l100km: 15.7, fuelType: "petrol" },
                  { name: "Maloo R8 LSA SC 6.2L V8 6MT RWD", l100km: 16.2, fuelType: "petrol" },
                ],
              },
        {
                model: "Senator",
                versions: [
                  { name: "Senator 6.0L V8 6AT RWD", l100km: 14.5, fuelType: "petrol" },
                  { name: "Senator Signature 6.2L V8 6AT RWD", l100km: 14.8, fuelType: "petrol" },
                ],
              }
      ],
    },
  {
      make: "Hummer",
      models: [
        {
                model: "H2",
                versions: [
                  { name: "H2 6.0L V8 4AT 4x4", l100km: 22.0, fuelType: "petrol" },
                  { name: "H2 SUT 6.0L V8 4AT 4x4", l100km: 22.5, fuelType: "petrol" },
                ],
              },
        {
                model: "H3",
                versions: [
                  { name: "H3 3.7L I5 4AT 4x4", l100km: 14.7, fuelType: "petrol" },
                  { name: "H3 Alpha 5.3L V8 4AT 4x4", l100km: 16.0, fuelType: "petrol" },
                  { name: "H3T 3.7L I5 4AT 4x4", l100km: 14.7, fuelType: "petrol" },
                ],
              }
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
              }
      ],
    },
  {
      make: "Infiniti",
      models: [
        {
                model: "Q50",
                versions: [
                  { name: "Q50 2.0T 7AT RWD", l100km: 8.4, fuelType: "petrol" },
                  { name: "Q50 2.0T 7AT AWD", l100km: 8.8, fuelType: "petrol" },
                  { name: "Q50 3.0T 7AT RWD", l100km: 10.1, fuelType: "petrol" },
                  { name: "Q50 3.0T AWD 400 7AT", l100km: 10.5, fuelType: "petrol" },
                  { name: "Q50 Red Sport 400 3.0T 7AT RWD", l100km: 10.8, fuelType: "petrol" },
                ],
              },
        {
                model: "Q60",
                versions: [
                  { name: "Q60 2.0T 7AT RWD", l100km: 9.1, fuelType: "petrol" },
                  { name: "Q60 3.0T 7AT RWD", l100km: 10.5, fuelType: "petrol" },
                  { name: "Q60 Red Sport 400 3.0T 7AT RWD", l100km: 11.0, fuelType: "petrol" },
                ],
              },
        {
                model: "QX50",
                versions: [
                  { name: "QX50 Essential 2.0T CVT AWD", l100km: 9.2, fuelType: "petrol" },
                  { name: "QX50 Sensory 2.0T CVT AWD", l100km: 9.4, fuelType: "petrol" },
                  { name: "QX50 Autograph 2.0T CVT AWD", l100km: 9.4, fuelType: "petrol" },
                ],
              },
        {
                model: "QX60",
                versions: [
                  { name: "QX60 3.5L V6 CVT AWD", l100km: 11.9, fuelType: "petrol" },
                  { name: "QX60 Pure 3.5L V6 CVT AWD", l100km: 11.9, fuelType: "petrol" },
                ],
              },
        {
                model: "QX80",
                versions: [
                  { name: "QX80 5.6L V8 7AT AWD", l100km: 16.0, fuelType: "petrol" },
                  { name: "QX80 Luxe 5.6L V8 7AT AWD", l100km: 16.2, fuelType: "petrol" },
                ],
              }
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
              }
      ],
    },
  {
      make: "Jaguar",
      models: [
        {
                model: "E-Pace",
                versions: [
                  { name: "E-Pace P250 2.0T 9AT AWD", l100km: 8.9, fuelType: "petrol" },
                  { name: "E-Pace P300e PHEV 9AT AWD", l100km: 2.1, fuelType: "petrol" },
                  { name: "E-Pace D165 2.0D 9AT AWD", l100km: 6.4, fuelType: "diesel" },
                ],
              },
        {
                model: "F-Pace",
                versions: [
                  { name: "F-Pace P250 2.0T 8AT AWD", l100km: 9.2, fuelType: "petrol" },
                  { name: "F-Pace P400e PHEV 8AT AWD", l100km: 2.5, fuelType: "petrol" },
                  { name: "F-Pace SVR P550 5.0 SC V8 8AT AWD", l100km: 13.2, fuelType: "petrol" },
                  { name: "F-Pace D200 2.0D 8AT AWD", l100km: 6.7, fuelType: "diesel" },
                ],
              },
        {
                model: "F-Type",
                versions: [
                  { name: "F-Type 2.0T 8AT RWD", l100km: 8.9, fuelType: "petrol" },
                  { name: "F-Type R P450 5.0 SC V8 8AT AWD", l100km: 12.0, fuelType: "petrol" },
                  { name: "F-Type R75 5.0 SC V8 8AT AWD", l100km: 12.2, fuelType: "petrol" },
                  { name: "F-Type Roadster P300 2.0T 8AT RWD", l100km: 9.1, fuelType: "petrol" },
                ],
              },
        {
                model: "XE",
                versions: [
                  { name: "XE P250 2.0T 8AT RWD", l100km: 7.7, fuelType: "petrol" },
                  { name: "XE P300 2.0T 8AT AWD", l100km: 8.1, fuelType: "petrol" },
                  { name: "XE D180 2.0D 8AT RWD", l100km: 5.3, fuelType: "diesel" },
                ],
              },
        {
                model: "XF",
                versions: [
                  { name: "XF P250 2.0T 8AT RWD", l100km: 8.0, fuelType: "petrol" },
                  { name: "XF P300 2.0T 8AT AWD", l100km: 8.5, fuelType: "petrol" },
                  { name: "XF D200 2.0D 8AT RWD", l100km: 5.6, fuelType: "diesel" },
                ],
              }
      ],
    },
  {
      make: "Jeep",
      models: [
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
              }
      ],
    },
  {
      make: "JMC",
      models: [
        {
                model: "Vigus 6",
                versions: [
                  { name: "Vigus 6 2.0T 6AT 4x4 Sport", l100km: 10.8, fuelType: "diesel" },
                ],
              },
        {
                model: "Vigus Pro",
                versions: [
                  { name: "Vigus Pro 2.0T 6AT 4x4", l100km: 10.5, fuelType: "diesel" },
                  { name: "Vigus Pro 2.0T 4x2 6AT", l100km: 9.8, fuelType: "diesel" },
                ],
              }
      ],
    },
  {
      make: "Kia",
      models: [
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
              }
      ],
    },
  {
      make: "Lamborghini",
      models: [
        {
                model: "Huracan",
                versions: [
                  { name: "Huracan EVO 5.2 V10 7DCT AWD", l100km: 13.7, fuelType: "petrol" },
                  { name: "Huracan EVO RWD 5.2 V10 7DCT", l100km: 13.0, fuelType: "petrol" },
                  { name: "Huracan STO 5.2 V10 7DCT RWD", l100km: 13.5, fuelType: "petrol" },
                  { name: "Huracan Tecnica 5.2 V10 7DCT RWD", l100km: 13.3, fuelType: "petrol" },
                  { name: "Huracan Sterrato 5.2 V10 7DCT AWD", l100km: 14.2, fuelType: "petrol" },
                ],
              },
        {
                model: "Revuelto",
                versions: [
                  { name: "Revuelto 6.5 V12 PHEV 8DCT AWD", l100km: 8.7, fuelType: "petrol" },
                ],
              },
        {
                model: "Urus",
                versions: [
                  { name: "Urus 4.0 V8 Biturbo 8AT AWD", l100km: 13.8, fuelType: "petrol" },
                  { name: "Urus S 4.0 V8 Biturbo 8AT AWD", l100km: 14.2, fuelType: "petrol" },
                  { name: "Urus Performante 4.0 V8 Biturbo 8AT AWD", l100km: 14.5, fuelType: "petrol" },
                  { name: "Urus SE PHEV 4.0 V8 8AT AWD", l100km: 4.3, fuelType: "petrol" },
                ],
              }
      ],
    },
  {
      make: "Land Rover",
      models: [
        {
                model: "Defender",
                versions: [
                  { name: "Defender 90 P300 2.0T 8AT AWD", l100km: 9.9, fuelType: "petrol" },
                  { name: "Defender 90 P400e PHEV 8AT AWD", l100km: 3.4, fuelType: "petrol" },
                  { name: "Defender 90 V8 5.0 SC 8AT AWD", l100km: 16.7, fuelType: "petrol" },
                  { name: "Defender 110 P300 2.0T 8AT AWD", l100km: 10.4, fuelType: "petrol" },
                  { name: "Defender 110 P400e PHEV 8AT AWD", l100km: 3.7, fuelType: "petrol" },
                  { name: "Defender 110 V8 5.0 SC 8AT AWD", l100km: 17.2, fuelType: "petrol" },
                  { name: "Defender 130 P300 2.0T 8AT AWD", l100km: 10.7, fuelType: "petrol" },
                  { name: "Defender 90 D250 3.0D 8AT AWD", l100km: 8.4, fuelType: "diesel" },
                  { name: "Defender 110 D250 3.0D 8AT AWD", l100km: 8.7, fuelType: "diesel" },
                ],
              },
        {
                model: "Discovery",
                versions: [
                  { name: "Discovery P300 2.0T 8AT AWD", l100km: 10.8, fuelType: "petrol" },
                  { name: "Discovery P360 3.0 MHEV 8AT AWD", l100km: 11.9, fuelType: "petrol" },
                  { name: "Discovery D250 3.0D 8AT AWD", l100km: 8.1, fuelType: "diesel" },
                  { name: "Discovery D300 3.0D 8AT AWD", l100km: 8.3, fuelType: "diesel" },
                ],
              },
        {
                model: "Discovery Sport",
                versions: [
                  { name: "Discovery Sport P200 2.0T 9AT AWD", l100km: 8.8, fuelType: "petrol" },
                  { name: "Discovery Sport P300e PHEV 9AT AWD", l100km: 2.0, fuelType: "petrol" },
                  { name: "Discovery Sport D165 2.0D 9AT AWD", l100km: 6.3, fuelType: "diesel" },
                  { name: "Discovery Sport D200 2.0D 9AT AWD", l100km: 6.5, fuelType: "diesel" },
                ],
              },
        {
                model: "Range Rover",
                versions: [
                  { name: "Range Rover P400 3.0 MHEV 8AT AWD", l100km: 11.5, fuelType: "petrol" },
                  { name: "Range Rover P460e PHEV 8AT AWD", l100km: 3.6, fuelType: "petrol" },
                  { name: "Range Rover P530 4.4 V8 8AT AWD", l100km: 14.5, fuelType: "petrol" },
                  { name: "Range Rover D350 3.0D 8AT AWD", l100km: 8.4, fuelType: "diesel" },
                  { name: "Range Rover LWB P530 4.4 V8 8AT AWD", l100km: 14.8, fuelType: "petrol" },
                ],
              },
        {
                model: "Range Rover Evoque",
                versions: [
                  { name: "Evoque P200 2.0T 9AT AWD", l100km: 8.4, fuelType: "petrol" },
                  { name: "Evoque P300e PHEV 9AT AWD", l100km: 2.0, fuelType: "petrol" },
                  { name: "Evoque D165 2.0D 9AT AWD", l100km: 5.8, fuelType: "diesel" },
                  { name: "Evoque D200 2.0D 9AT AWD", l100km: 5.9, fuelType: "diesel" },
                ],
              },
        {
                model: "Range Rover Sport",
                versions: [
                  { name: "Range Rover Sport P360 3.0 MHEV 8AT AWD", l100km: 10.5, fuelType: "petrol" },
                  { name: "Range Rover Sport P460e PHEV 8AT AWD", l100km: 3.3, fuelType: "petrol" },
                  { name: "Range Rover Sport P635 4.4 V8 8AT AWD", l100km: 14.1, fuelType: "petrol" },
                  { name: "Range Rover Sport D250 3.0D 8AT AWD", l100km: 7.6, fuelType: "diesel" },
                  { name: "Range Rover Sport D300 3.0D 8AT AWD", l100km: 7.9, fuelType: "diesel" },
                ],
              },
        {
                model: "Range Rover Velar",
                versions: [
                  { name: "Velar P250 2.0T 8AT AWD", l100km: 8.8, fuelType: "petrol" },
                  { name: "Velar P400e PHEV 8AT AWD", l100km: 2.4, fuelType: "petrol" },
                  { name: "Velar D200 2.0D 8AT AWD", l100km: 6.5, fuelType: "diesel" },
                  { name: "Velar D300 3.0D 8AT AWD", l100km: 7.3, fuelType: "diesel" },
                ],
              }
      ],
    },
  {
      make: "LDV",
      models: [
        {
                model: "D90",
                versions: [
                  { name: "Luxe 2.0L Diesel 8AT AWD", l100km: 9.5, fuelType: "diesel" },
                  { name: "Executive 2.0L Diesel 8AT AWD", l100km: 9.5, fuelType: "diesel" },
                ],
              },
        {
                model: "T60",
                versions: [
                  { name: "Luxe 4x2 2.0L Diesel 6MT", l100km: 8.2, fuelType: "diesel" },
                  { name: "Luxe 4x4 2.0L Diesel 6MT", l100km: 8.7, fuelType: "diesel" },
                  { name: "Luxe 4x4 2.0L Diesel 8AT", l100km: 8.9, fuelType: "diesel" },
                ],
              }
      ],
    },
  {
      make: "Lexus",
      models: [
        {
                model: "ES",
                versions: [
                  { name: "ES 250 2.5L 6AT FWD", l100km: 9.3, fuelType: "petrol" },
                  { name: "ES 300h 2.5L HEV CVT", l100km: 5.6, fuelType: "petrol" },
                  { name: "ES 350 3.5L V6 6AT FWD", l100km: 10.5, fuelType: "petrol" },
                ],
              },
        {
                model: "GS",
                versions: [
                  { name: "GS 300 2.0T 6AT RWD", l100km: 9.1, fuelType: "petrol" },
                  { name: "GS 350 3.5L V6 6AT RWD", l100km: 10.8, fuelType: "petrol" },
                  { name: "GS 300h 2.5L HEV CVT", l100km: 6.5, fuelType: "petrol" },
                  { name: "GS F 5.0L V8 8AT RWD", l100km: 13.3, fuelType: "petrol" },
                ],
              },
        {
                model: "GX",
                versions: [
                  { name: "GX 550 3.4 V6 TT 10AT AWD", l100km: 12.8, fuelType: "petrol" },
                  { name: "GX 550 Overtrail 3.4 V6 TT 10AT AWD", l100km: 13.1, fuelType: "petrol" },
                ],
              },
        {
                model: "IS",
                versions: [
                  { name: "IS 300 2.0T 6AT RWD", l100km: 8.8, fuelType: "petrol" },
                  { name: "IS 350 3.5L V6 6AT RWD", l100km: 10.2, fuelType: "petrol" },
                  { name: "IS 350 AWD 3.5L V6 6AT", l100km: 10.5, fuelType: "petrol" },
                  { name: "IS 500 F Sport 5.0L V8 8AT RWD", l100km: 12.8, fuelType: "petrol" },
                ],
              },
        {
                model: "LC",
                versions: [
                  { name: "LC 500 5.0L V8 10AT RWD", l100km: 12.5, fuelType: "petrol" },
                  { name: "LC 500h 3.5L V6 HEV CVT AWD", l100km: 8.9, fuelType: "petrol" },
                  { name: "LC 500 Convertible 5.0L V8 10AT RWD", l100km: 12.7, fuelType: "petrol" },
                ],
              },
        {
                model: "LS",
                versions: [
                  { name: "LS 500 3.5L V6 TT 10AT AWD", l100km: 11.3, fuelType: "petrol" },
                  { name: "LS 500h 3.5L V6 HEV CVT AWD", l100km: 7.7, fuelType: "petrol" },
                ],
              },
        {
                model: "LX",
                versions: [
                  { name: "LX 600 3.4 V6 TT 10AT AWD", l100km: 14.5, fuelType: "petrol" },
                  { name: "LX 600 F Sport 3.4 V6 TT 10AT AWD", l100km: 14.7, fuelType: "petrol" },
                ],
              },
        {
                model: "NX",
                versions: [
                  { name: "NX 250 2.5L CVT AWD", l100km: 7.7, fuelType: "petrol" },
                  { name: "NX 350 2.4T 8AT AWD", l100km: 8.7, fuelType: "petrol" },
                  { name: "NX 350h 2.5L HEV CVT AWD", l100km: 5.8, fuelType: "petrol" },
                  { name: "NX 450h+ PHEV CVT AWD", l100km: 1.5, fuelType: "petrol" },
                ],
              },
        {
                model: "RX",
                versions: [
                  { name: "RX 350 2.4T 8AT AWD", l100km: 9.7, fuelType: "petrol" },
                  { name: "RX 350h 2.5L HEV CVT AWD", l100km: 6.3, fuelType: "petrol" },
                  { name: "RX 450h+ PHEV CVT AWD", l100km: 2.0, fuelType: "petrol" },
                  { name: "RX 500h F Sport 2.4T HEV 6AT AWD", l100km: 7.2, fuelType: "petrol" },
                ],
              }
      ],
    },
  {
      make: "Lotus",
      models: [
        {
                model: "Emira",
                versions: [
                  { name: "Emira 2.0T AMT 4cyl", l100km: 8.8, fuelType: "petrol" },
                  { name: "Emira 3.5L V6 SC 6MT", l100km: 10.4, fuelType: "petrol" },
                  { name: "Emira 3.5L V6 SC AT", l100km: 10.7, fuelType: "petrol" },
                ],
              },
        {
                model: "Evora",
                versions: [
                  { name: "Evora 3.5L V6 6MT", l100km: 10.2, fuelType: "petrol" },
                  { name: "Evora GT 3.5L V6 SC 6MT", l100km: 11.1, fuelType: "petrol" },
                ],
              },
        {
                model: "Exige",
                versions: [
                  { name: "Exige 350 Sport 3.5L V6 SC 6MT", l100km: 10.1, fuelType: "petrol" },
                  { name: "Exige 430 Cup 3.5L V6 SC 6MT", l100km: 11.0, fuelType: "petrol" },
                ],
              }
      ],
    },
  {
      make: "Mahindra",
      models: [
        {
                model: "Scorpio",
                versions: [
                  { name: "Scorpio 2.2 mHawk Diesel 6MT 4x2", l100km: 10.5, fuelType: "diesel" },
                  { name: "Scorpio 4x4 2.2 mHawk Diesel 6MT", l100km: 11.0, fuelType: "diesel" },
                ],
              },
        {
                model: "Thar",
                versions: [
                  { name: "Thar 2.2 mHawk Diesel 6MT 4WD", l100km: 11.5, fuelType: "diesel" },
                  { name: "Thar 2.0T Petrol 6MT 4WD", l100km: 12.2, fuelType: "petrol" },
                  { name: "Thar Roxx 2.2 mHawk Diesel 6AT 4WD", l100km: 12.0, fuelType: "diesel" },
                ],
              },
        {
                model: "XUV700",
                versions: [
                  { name: "XUV700 MX 2.0T 6AT FWD", l100km: 9.5, fuelType: "petrol" },
                  { name: "XUV700 AX7L 2.2 mHawk Diesel 6AT AWD", l100km: 9.0, fuelType: "diesel" },
                ],
              }
      ],
    },
  {
      make: "Maserati",
      models: [
        {
                model: "Ghibli",
                versions: [
                  { name: "Ghibli 2.0T 8AT RWD", l100km: 9.4, fuelType: "petrol" },
                  { name: "Ghibli 3.0L V6 8AT RWD", l100km: 11.5, fuelType: "petrol" },
                  { name: "Ghibli Trofeo 3.8L V8 8AT RWD", l100km: 14.4, fuelType: "petrol" },
                  { name: "Ghibli Hybrid 2.0T MHEV 8AT RWD", l100km: 8.5, fuelType: "petrol" },
                  { name: "Ghibli Diesel 3.0L V6 8AT RWD", l100km: 6.4, fuelType: "diesel" },
                ],
              },
        {
                model: "GranTurismo",
                versions: [
                  { name: "GranTurismo Modena 3.0L V6 TT 8DCT AWD", l100km: 11.0, fuelType: "petrol" },
                  { name: "GranTurismo Trofeo 3.0L V6 TT 8DCT AWD", l100km: 11.8, fuelType: "petrol" },
                ],
              },
        {
                model: "Grecale",
                versions: [
                  { name: "Grecale GT 2.0T MHEV 8AT AWD", l100km: 8.9, fuelType: "petrol" },
                  { name: "Grecale Modena 2.0T MHEV 8AT AWD", l100km: 9.2, fuelType: "petrol" },
                  { name: "Grecale Trofeo 3.0L V6 8AT AWD", l100km: 12.2, fuelType: "petrol" },
                  { name: "Grecale Folgore EV AWD", l100km: 18.4, fuelType: "petrol" },
                ],
              },
        {
                model: "Levante",
                versions: [
                  { name: "Levante 2.0T 8AT AWD", l100km: 10.5, fuelType: "petrol" },
                  { name: "Levante 3.0L V6 8AT AWD", l100km: 12.6, fuelType: "petrol" },
                  { name: "Levante Trofeo 3.8L V8 8AT AWD", l100km: 15.6, fuelType: "petrol" },
                  { name: "Levante Hybrid 2.0T MHEV 8AT AWD", l100km: 9.7, fuelType: "petrol" },
                  { name: "Levante Diesel 3.0L V6 8AT AWD", l100km: 7.8, fuelType: "diesel" },
                ],
              },
        {
                model: "Quattroporte",
                versions: [
                  { name: "Quattroporte 3.0L V6 8AT RWD", l100km: 12.0, fuelType: "petrol" },
                  { name: "Quattroporte 3.8L V8 8AT RWD", l100km: 15.1, fuelType: "petrol" },
                  { name: "Quattroporte Trofeo 3.8L V8 8AT RWD", l100km: 15.8, fuelType: "petrol" },
                ],
              }
      ],
    },
  {
      make: "Maybach",
      models: [
        {
                model: "EQS",
                versions: [
                  { name: "Maybach EQS 680 SUV AWD", l100km: 24.7, fuelType: "petrol" },
                ],
              },
        {
                model: "GLS",
                versions: [
                  { name: "Maybach GLS 600 4.0L V8 9AT AWD", l100km: 15.5, fuelType: "petrol" },
                ],
              },
        {
                model: "S-Class",
                versions: [
                  { name: "Maybach S 480 3.0L I6 9AT AWD", l100km: 11.3, fuelType: "petrol" },
                  { name: "Maybach S 580 4.0L V8 9AT AWD", l100km: 13.2, fuelType: "petrol" },
                  { name: "Maybach S 680 6.0L V12 9AT AWD", l100km: 15.1, fuelType: "petrol" },
                ],
              }
      ],
    },
  {
      make: "Mazda",
      models: [
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
              }
      ],
    },
  {
      make: "McLaren",
      models: [
        {
                model: "720S",
                versions: [
                  { name: "720S 4.0 V8 TT 7DCT RWD", l100km: 11.9, fuelType: "petrol" },
                  { name: "720S Spider 4.0 V8 TT 7DCT RWD", l100km: 12.2, fuelType: "petrol" },
                  { name: "720S Le Mans 4.0 V8 TT 7DCT RWD", l100km: 12.0, fuelType: "petrol" },
                ],
              },
        {
                model: "750S",
                versions: [
                  { name: "750S 4.0 V8 TT 7DCT RWD", l100km: 12.2, fuelType: "petrol" },
                  { name: "750S Spider 4.0 V8 TT 7DCT RWD", l100km: 12.5, fuelType: "petrol" },
                ],
              },
        {
                model: "Artura",
                versions: [
                  { name: "Artura 3.0 V6 PHEV 8DCT RWD", l100km: 7.1, fuelType: "petrol" },
                  { name: "Artura Spider 3.0 V6 PHEV 8DCT RWD", l100km: 7.4, fuelType: "petrol" },
                ],
              },
        {
                model: "GT",
                versions: [
                  { name: "GT 4.0 V8 TT 7DCT RWD", l100km: 10.7, fuelType: "petrol" },
                ],
              }
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
              }
      ],
    },
  {
      make: "MG",
      models: [
        {
                model: "HS",
                versions: [
                  { name: "HS Essence 1.5T DCT FWD", l100km: 7.4, fuelType: "petrol" },
                  { name: "HS Vibe 2.0T DCT AWD", l100km: 9.0, fuelType: "petrol" },
                  { name: "HS PHEV AWD", l100km: 2.0, fuelType: "petrol" },
                ],
              },
        {
                model: "MG3",
                versions: [
                  { name: "MG3 Core 1.5L CVT FWD", l100km: 7.2, fuelType: "petrol" },
                  { name: "MG3 Excite 1.5L CVT FWD", l100km: 7.2, fuelType: "petrol" },
                  { name: "MG3 Hybrid+ 1.5L HEV CVT", l100km: 4.9, fuelType: "petrol" },
                ],
              },
        {
                model: "RX5",
                versions: [
                  { name: "RX5 Standard 1.5T DCT FWD", l100km: 8.0, fuelType: "petrol" },
                  { name: "RX5 Premium 2.0T DCT AWD", l100km: 9.2, fuelType: "petrol" },
                ],
              },
        {
                model: "ZS",
                versions: [
                  { name: "ZS Essence 1.5L CVT FWD", l100km: 7.0, fuelType: "petrol" },
                  { name: "ZS Excite 1.0T DCT FWD", l100km: 6.8, fuelType: "petrol" },
                ],
              }
      ],
    },
  {
      make: "MINI",
      models: [
        {
                model: "Clubman",
                versions: [
                  { name: "Cooper Clubman 1.5T 7DCT FWD", l100km: 6.5, fuelType: "petrol" },
                  { name: "Cooper S Clubman 2.0T 8AT AWD", l100km: 7.6, fuelType: "petrol" },
                  { name: "JCW Clubman 2.0T 8AT AWD", l100km: 8.1, fuelType: "petrol" },
                  { name: "Cooper D Clubman 2.0D 8AT FWD", l100km: 5.1, fuelType: "diesel" },
                ],
              },
        {
                model: "Convertible",
                versions: [
                  { name: "Cooper Convertible 1.5T 7DCT FWD", l100km: 6.4, fuelType: "petrol" },
                  { name: "Cooper S Convertible 2.0T 7DCT FWD", l100km: 7.2, fuelType: "petrol" },
                  { name: "JCW Convertible 2.0T 7DCT FWD", l100km: 7.6, fuelType: "petrol" },
                ],
              },
        {
                model: "Countryman",
                versions: [
                  { name: "Cooper Countryman 1.5T 7DCT FWD", l100km: 7.0, fuelType: "petrol" },
                  { name: "Cooper S Countryman 2.0T 8AT AWD", l100km: 8.1, fuelType: "petrol" },
                  { name: "Cooper S E Countryman PHEV AWD", l100km: 2.5, fuelType: "petrol" },
                  { name: "JCW Countryman 2.0T 8AT AWD", l100km: 8.8, fuelType: "petrol" },
                  { name: "Cooper D Countryman 2.0D 8AT AWD", l100km: 5.8, fuelType: "diesel" },
                ],
              },
        {
                model: "Hatch",
                versions: [
                  { name: "One 1.5T 6MT FWD", l100km: 6.1, fuelType: "petrol" },
                  { name: "Cooper 1.5T 7DCT FWD", l100km: 6.3, fuelType: "petrol" },
                  { name: "Cooper S 2.0T 7DCT FWD", l100km: 7.0, fuelType: "petrol" },
                  { name: "JCW 2.0T 7DCT FWD", l100km: 7.4, fuelType: "petrol" },
                  { name: "One D 1.5D 6MT FWD", l100km: 4.3, fuelType: "diesel" },
                  { name: "Cooper D 1.5D 7DCT FWD", l100km: 4.4, fuelType: "diesel" },
                ],
              },
        {
                model: "Paceman",
                versions: [
                  { name: "Cooper Paceman 1.6T 6MT FWD", l100km: 7.3, fuelType: "petrol" },
                  { name: "Cooper S Paceman 1.6T 6AT AWD", l100km: 8.0, fuelType: "petrol" },
                ],
              }
      ],
    },
  {
      make: "Mitsubishi",
      models: [
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
              }
      ],
    },
  {
      make: "Morgan",
      models: [
        {
                model: "Plus Four",
                versions: [
                  { name: "Plus Four 2.0T 6MT RWD", l100km: 9.0, fuelType: "petrol" },
                  { name: "Plus Four CX-T 2.0T 6MT RWD", l100km: 9.2, fuelType: "petrol" },
                ],
              },
        {
                model: "Plus Six",
                versions: [
                  { name: "Plus Six 3.0L I6 TT 8AT RWD", l100km: 10.9, fuelType: "petrol" },
                ],
              },
        {
                model: "Super 3",
                versions: [
                  { name: "Super 3 1.5L I3 FWD", l100km: 8.2, fuelType: "petrol" },
                ],
              }
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
                model: "Patrol",
                versions: [
                  { name: "ST 4.0L V6 7AT", l100km: 13.5, fuelType: "petrol" },
                  { name: "ST-L 4.0L V6 7AT", l100km: 13.5, fuelType: "petrol" },
                  { name: "Ti 4.0L V6 7AT", l100km: 13.5, fuelType: "petrol" },
                  { name: "Ti-L 4.0L V6 7AT", l100km: 13.8, fuelType: "petrol" },
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
              }
      ],
    },
  {
      make: "Opel",
      models: [
        {
                model: "Astra",
                versions: [
                  { name: "Astra 1.2T 6MT FWD", l100km: 6.1, fuelType: "petrol" },
                  { name: "Astra 1.2T 8AT FWD", l100km: 6.4, fuelType: "petrol" },
                  { name: "Astra GSe 1.6T PHEV 8AT FWD", l100km: 1.5, fuelType: "petrol" },
                  { name: "Astra 1.5D 6AT FWD", l100km: 4.8, fuelType: "diesel" },
                ],
              },
        {
                model: "Insignia",
                versions: [
                  { name: "Insignia 1.5T 6AT FWD", l100km: 7.3, fuelType: "petrol" },
                  { name: "Insignia 2.0T 9AT AWD", l100km: 8.5, fuelType: "petrol" },
                  { name: "Insignia 2.0D 8AT AWD", l100km: 6.0, fuelType: "diesel" },
                ],
              },
        {
                model: "Mokka",
                versions: [
                  { name: "Mokka 1.2T 6AT FWD", l100km: 6.3, fuelType: "petrol" },
                  { name: "Mokka-e (EV) AWD", l100km: 6.9, fuelType: "petrol" },
                ],
              }
      ],
    },
  {
      make: "Peugeot",
      models: [
        {
                model: "2008",
                versions: [
                  { name: "2008 Active 1.2 PureTech 100 6AT", l100km: 6.4, fuelType: "petrol" },
                  { name: "2008 GT 1.2 PureTech 130 8AT", l100km: 6.8, fuelType: "petrol" },
                ],
              },
        {
                model: "208",
                versions: [
                  { name: "208 Active 1.2 PureTech 75 5MT", l100km: 5.8, fuelType: "petrol" },
                  { name: "208 Allure 1.2 PureTech 100 6AT", l100km: 6.0, fuelType: "petrol" },
                  { name: "208 GT 1.2 PureTech 130 8AT", l100km: 6.2, fuelType: "petrol" },
                ],
              },
        {
                model: "3008",
                versions: [
                  { name: "3008 Active 1.2 PureTech 130 8AT", l100km: 7.0, fuelType: "petrol" },
                  { name: "3008 GT 1.6 PureTech 180 8AT", l100km: 7.6, fuelType: "petrol" },
                  { name: "3008 Hybrid 225 PHEV AWD 8AT", l100km: 1.7, fuelType: "petrol" },
                  { name: "3008 BlueHDi 130 8AT", l100km: 5.5, fuelType: "diesel" },
                ],
              },
        {
                model: "308",
                versions: [
                  { name: "308 Active 1.2 PureTech 130 8AT", l100km: 6.3, fuelType: "petrol" },
                  { name: "308 GT 1.6 PureTech 180 8AT", l100km: 7.3, fuelType: "petrol" },
                  { name: "308 Hybrid 225 PHEV 8AT", l100km: 1.4, fuelType: "petrol" },
                  { name: "308 BlueHDi 130 8AT", l100km: 4.9, fuelType: "diesel" },
                ],
              },
        {
                model: "5008",
                versions: [
                  { name: "5008 Active 1.2 PureTech 130 8AT", l100km: 7.5, fuelType: "petrol" },
                  { name: "5008 GT 1.6 PureTech 180 8AT", l100km: 8.2, fuelType: "petrol" },
                  { name: "5008 BlueHDi 130 8AT", l100km: 5.9, fuelType: "diesel" },
                ],
              },
        {
                model: "508",
                versions: [
                  { name: "508 Allure 1.6 PureTech 180 8AT", l100km: 7.1, fuelType: "petrol" },
                  { name: "508 GT 1.6 PureTech 225 8AT", l100km: 7.5, fuelType: "petrol" },
                  { name: "508 Hybrid 225 PHEV 8AT FWD", l100km: 1.5, fuelType: "petrol" },
                  { name: "508 SW Hybrid 360 PHEV 8AT AWD", l100km: 1.6, fuelType: "petrol" },
                ],
              }
      ],
    },
  {
      make: "Porsche",
      models: [
        {
                model: "718",
                versions: [
                  { name: "718 Boxster 2.0T 6MT RWD", l100km: 7.4, fuelType: "petrol" },
                  { name: "718 Boxster S 2.5T 7PDK RWD", l100km: 8.2, fuelType: "petrol" },
                  { name: "718 Boxster GTS 4.0 6MT RWD", l100km: 10.4, fuelType: "petrol" },
                  { name: "718 Cayman 2.0T 6MT RWD", l100km: 7.2, fuelType: "petrol" },
                  { name: "718 Cayman S 2.5T 7PDK RWD", l100km: 7.8, fuelType: "petrol" },
                  { name: "718 Cayman GT4 RS 4.0 7PDK RWD", l100km: 11.1, fuelType: "petrol" },
                ],
              },
        {
                model: "911",
                versions: [
                  { name: "911 Carrera 3.0T 8PDK RWD", l100km: 9.0, fuelType: "petrol" },
                  { name: "911 Carrera S 3.0T 8PDK RWD", l100km: 9.3, fuelType: "petrol" },
                  { name: "911 Carrera 4S 3.0T 8PDK AWD", l100km: 9.6, fuelType: "petrol" },
                  { name: "911 Targa 4S 3.0T 8PDK AWD", l100km: 9.7, fuelType: "petrol" },
                  { name: "911 Turbo 3.7T 8PDK AWD", l100km: 10.6, fuelType: "petrol" },
                  { name: "911 Turbo S 3.7T 8PDK AWD", l100km: 11.0, fuelType: "petrol" },
                  { name: "911 GT3 4.0 7PDK RWD", l100km: 12.4, fuelType: "petrol" },
                  { name: "911 GT3 RS 4.0 7PDK RWD", l100km: 13.0, fuelType: "petrol" },
                  { name: "911 Dakar 3.0T 8PDK AWD", l100km: 11.2, fuelType: "petrol" },
                ],
              },
        {
                model: "Cayenne",
                versions: [
                  { name: "Cayenne 3.0T 8AT AWD", l100km: 11.0, fuelType: "petrol" },
                  { name: "Cayenne S 2.9T V6 8AT AWD", l100km: 11.9, fuelType: "petrol" },
                  { name: "Cayenne GTS 4.0L V8 8AT AWD", l100km: 14.3, fuelType: "petrol" },
                  { name: "Cayenne Turbo GT 4.0L V8 8AT AWD", l100km: 15.5, fuelType: "petrol" },
                  { name: "Cayenne E-Hybrid PHEV 3.0T 8AT AWD", l100km: 3.4, fuelType: "petrol" },
                  { name: "Cayenne Turbo S E-Hybrid 4.0L V8 PHEV 8AT", l100km: 4.4, fuelType: "petrol" },
                ],
              },
        {
                model: "Macan",
                versions: [
                  { name: "Macan 2.0T 7PDK AWD", l100km: 8.8, fuelType: "petrol" },
                  { name: "Macan S 2.9T V6 7PDK AWD", l100km: 10.0, fuelType: "petrol" },
                  { name: "Macan GTS 2.9T V6 7PDK AWD", l100km: 10.8, fuelType: "petrol" },
                  { name: "Macan Turbo 2.9T V6 7PDK AWD", l100km: 11.4, fuelType: "petrol" },
                ],
              },
        {
                model: "Panamera",
                versions: [
                  { name: "Panamera 2.9T V6 8PDK AWD", l100km: 9.6, fuelType: "petrol" },
                  { name: "Panamera S 2.9T V6 8PDK AWD", l100km: 10.2, fuelType: "petrol" },
                  { name: "Panamera GTS 4.0L V8 8PDK AWD", l100km: 13.6, fuelType: "petrol" },
                  { name: "Panamera Turbo S 4.0L V8 8PDK AWD", l100km: 13.9, fuelType: "petrol" },
                  { name: "Panamera 4 E-Hybrid PHEV 8PDK AWD", l100km: 2.7, fuelType: "petrol" },
                  { name: "Panamera Turbo S E-Hybrid 4.0L V8 PHEV", l100km: 3.2, fuelType: "petrol" },
                ],
              }
      ],
    },
  {
      make: "Ram",
      models: [
        {
                model: "1500",
                versions: [
                  { name: "1500 Tradesman 3.6L V6 8AT 4x2", l100km: 12.4, fuelType: "petrol" },
                  { name: "1500 Big Horn 3.6L V6 8AT 4x4", l100km: 13.3, fuelType: "petrol" },
                  { name: "1500 Laramie 5.7L V8 8AT 4x4", l100km: 15.2, fuelType: "petrol" },
                  { name: "1500 Rebel 5.7L V8 8AT 4x4", l100km: 15.6, fuelType: "petrol" },
                  { name: "1500 TRX 6.2L SC V8 8AT 4x4", l100km: 18.9, fuelType: "petrol" },
                  { name: "1500 EcoDiesel 3.0L V6 8AT 4x4", l100km: 10.4, fuelType: "diesel" },
                ],
              },
        {
                model: "2500",
                versions: [
                  { name: "2500 Tradesman 6.4L V8 6AT 4x4", l100km: 16.7, fuelType: "petrol" },
                  { name: "2500 Laramie 6.4L V8 6AT 4x4", l100km: 17.1, fuelType: "petrol" },
                  { name: "2500 Power Wagon 6.4L V8 6AT 4x4", l100km: 17.6, fuelType: "petrol" },
                  { name: "2500 6.7L Cummins Diesel 6AT 4x4", l100km: 13.0, fuelType: "diesel" },
                ],
              }
      ],
    },
  {
      make: "Renault",
      models: [
        {
                model: "Captur",
                versions: [
                  { name: "Captur Intens 1.3T 7DCT FWD", l100km: 6.6, fuelType: "petrol" },
                  { name: "Captur RS Line 1.3T 7DCT FWD", l100km: 6.8, fuelType: "petrol" },
                  { name: "Captur E-Tech PHEV 160 FWD", l100km: 2.0, fuelType: "petrol" },
                ],
              },
        {
                model: "Clio",
                versions: [
                  { name: "Clio Expression 1.0T 6MT FWD", l100km: 5.6, fuelType: "petrol" },
                  { name: "Clio Intens 1.0T CVT FWD", l100km: 6.0, fuelType: "petrol" },
                  { name: "Clio RS Line 1.3T 7DCT FWD", l100km: 6.2, fuelType: "petrol" },
                  { name: "Clio E-Tech Hybrid 1.6 HEV CVT", l100km: 4.9, fuelType: "petrol" },
                ],
              },
        {
                model: "Kangoo",
                versions: [
                  { name: "Kangoo 1.3T 6MT FWD", l100km: 7.0, fuelType: "petrol" },
                  { name: "Kangoo 1.5 Blue dCi 6MT FWD", l100km: 5.3, fuelType: "diesel" },
                ],
              },
        {
                model: "Koleos",
                versions: [
                  { name: "Koleos Life 2.5L CVT FWD", l100km: 8.5, fuelType: "petrol" },
                  { name: "Koleos Zen 2.5L CVT AWD", l100km: 9.0, fuelType: "petrol" },
                  { name: "Koleos Intens 2.5L CVT AWD", l100km: 9.0, fuelType: "petrol" },
                ],
              },
        {
                model: "Megane",
                versions: [
                  { name: "Megane Intens 1.3T 7DCT FWD", l100km: 6.3, fuelType: "petrol" },
                  { name: "Megane RS 1.8T 6MT FWD", l100km: 8.5, fuelType: "petrol" },
                  { name: "Megane RS Trophy-R 1.8T 6MT FWD", l100km: 8.9, fuelType: "petrol" },
                  { name: "Megane dCi 115 6MT FWD", l100km: 4.5, fuelType: "diesel" },
                ],
              }
      ],
    },
  {
      make: "Saab",
      models: [
        {
                model: "9-3",
                versions: [
                  { name: "9-3 Linear 1.8T 5AT FWD", l100km: 8.6, fuelType: "petrol" },
                  { name: "9-3 Arc 2.0T 5AT FWD", l100km: 9.0, fuelType: "petrol" },
                  { name: "9-3 Aero 2.8T 6AT AWD", l100km: 11.0, fuelType: "petrol" },
                  { name: "9-3 Sport Combi 1.9 TiD 6MT", l100km: 6.2, fuelType: "diesel" },
                ],
              },
        {
                model: "9-5",
                versions: [
                  { name: "9-5 Linear 2.3T 5AT FWD", l100km: 10.2, fuelType: "petrol" },
                  { name: "9-5 Aero 2.8T V6 6AT AWD", l100km: 11.8, fuelType: "petrol" },
                  { name: "9-5 2.0 TiD 6AT FWD", l100km: 7.0, fuelType: "diesel" },
                ],
              }
      ],
    },
  {
      make: "SEAT",
      models: [
        {
                model: "Ateca",
                versions: [
                  { name: "Ateca Reference 1.0 TSI 6MT FWD", l100km: 6.3, fuelType: "petrol" },
                  { name: "Ateca FR 2.0 TSI 7DSG AWD", l100km: 8.0, fuelType: "petrol" },
                  { name: "Ateca Cupra 2.0 TSI 7DSG AWD", l100km: 8.5, fuelType: "petrol" },
                  { name: "Ateca 2.0 TDI 7DSG AWD", l100km: 5.9, fuelType: "diesel" },
                ],
              },
        {
                model: "Ibiza",
                versions: [
                  { name: "Ibiza Reference 1.0 MPI 5MT", l100km: 5.9, fuelType: "petrol" },
                  { name: "Ibiza FR 1.0 TSI 6MT", l100km: 5.7, fuelType: "petrol" },
                  { name: "Ibiza FR 1.5 TSI 7DSG", l100km: 5.9, fuelType: "petrol" },
                  { name: "Ibiza Cupra 2.0 TSI 6MT", l100km: 7.2, fuelType: "petrol" },
                ],
              },
        {
                model: "Leon",
                versions: [
                  { name: "Leon Style 1.0 TSI 6MT FWD", l100km: 5.6, fuelType: "petrol" },
                  { name: "Leon FR 1.5 TSI 7DSG FWD", l100km: 5.8, fuelType: "petrol" },
                  { name: "Leon Cupra R 2.0 TSI 6MT FWD", l100km: 8.0, fuelType: "petrol" },
                  { name: "Leon e-Hybrid PHEV 1.4 TSI 6DSG FWD", l100km: 1.7, fuelType: "petrol" },
                  { name: "Leon 2.0 TDI 7DSG FWD", l100km: 4.7, fuelType: "diesel" },
                ],
              }
      ],
    },
  {
      make: "Skoda",
      models: [
        {
                model: "Fabia",
                versions: [
                  { name: "Fabia Active 1.0 MPI 5MT", l100km: 5.9, fuelType: "petrol" },
                  { name: "Fabia Ambition 1.0 TSI 6MT", l100km: 5.5, fuelType: "petrol" },
                  { name: "Fabia Monte Carlo 1.5 TSI 7DSG", l100km: 6.0, fuelType: "petrol" },
                ],
              },
        {
                model: "Karoq",
                versions: [
                  { name: "Karoq Ambition 1.5 TSI 7DSG FWD", l100km: 6.7, fuelType: "petrol" },
                  { name: "Karoq Sportline 2.0 TSI 7DSG AWD", l100km: 8.1, fuelType: "petrol" },
                  { name: "Karoq 2.0 TDI 7DSG AWD", l100km: 5.7, fuelType: "diesel" },
                ],
              },
        {
                model: "Kodiaq",
                versions: [
                  { name: "Kodiaq Ambition 1.5 TSI 7DSG FWD", l100km: 7.7, fuelType: "petrol" },
                  { name: "Kodiaq Sportline 2.0 TSI 7DSG AWD", l100km: 9.5, fuelType: "petrol" },
                  { name: "Kodiaq RS 2.0 TSI 7DSG AWD", l100km: 10.0, fuelType: "petrol" },
                  { name: "Kodiaq 2.0 TDI 7DSG AWD", l100km: 6.4, fuelType: "diesel" },
                ],
              },
        {
                model: "Octavia",
                versions: [
                  { name: "Octavia Ambition 1.5 TSI 7DSG FWD", l100km: 6.0, fuelType: "petrol" },
                  { name: "Octavia RS 2.0 TSI 7DSG FWD", l100km: 7.4, fuelType: "petrol" },
                  { name: "Octavia RS245 2.0 TSI 7DSG AWD", l100km: 7.8, fuelType: "petrol" },
                  { name: "Octavia Combi 1.5 TSI 7DSG FWD", l100km: 6.1, fuelType: "petrol" },
                  { name: "Octavia iV PHEV 1.4 TSI 6DSG FWD", l100km: 1.7, fuelType: "petrol" },
                  { name: "Octavia 2.0 TDI 7DSG FWD", l100km: 4.6, fuelType: "diesel" },
                ],
              },
        {
                model: "Superb",
                versions: [
                  { name: "Superb Ambition 1.5 TSI 7DSG FWD", l100km: 6.5, fuelType: "petrol" },
                  { name: "Superb Sportline 2.0 TSI 7DSG AWD", l100km: 8.4, fuelType: "petrol" },
                  { name: "Superb iV PHEV 1.4 TSI 6DSG FWD", l100km: 1.9, fuelType: "petrol" },
                  { name: "Superb 2.0 TDI 7DSG AWD", l100km: 5.7, fuelType: "diesel" },
                ],
              }
      ],
    },
  {
      make: "Smart",
      models: [
        {
                model: "Forfour",
                versions: [
                  { name: "Forfour 1.0 5MT", l100km: 5.0, fuelType: "petrol" },
                  { name: "Forfour 0.9T 6DCT", l100km: 5.2, fuelType: "petrol" },
                ],
              },
        {
                model: "Fortwo",
                versions: [
                  { name: "Fortwo 1.0 5MT", l100km: 4.7, fuelType: "petrol" },
                  { name: "Fortwo 0.9T 6DCT", l100km: 4.9, fuelType: "petrol" },
                  { name: "Fortwo Cabriolet 0.9T 6DCT", l100km: 5.1, fuelType: "petrol" },
                ],
              }
      ],
    },
  {
      make: "Subaru",
      models: [
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
                model: "Outback",
                versions: [
                  { name: "AWD 2.5L CVT", l100km: 7.8, fuelType: "petrol" },
                  { name: "AWD Touring 2.5L CVT", l100km: 7.8, fuelType: "petrol" },
                  { name: "AWD Sport 2.5L CVT", l100km: 7.8, fuelType: "petrol" },
                  { name: "AWD Touring XT 2.4T CVT", l100km: 8.7, fuelType: "petrol" },
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
              }
      ],
    },
  {
      make: "Suzuki",
      models: [
        {
                model: "Across",
                versions: [
                  { name: "Across 2.5 PHEV CVT AWD", l100km: 1.8, fuelType: "petrol" },
                ],
              },
        {
                model: "Baleno",
                versions: [
                  { name: "Baleno GL 1.5L CVT FWD", l100km: 6.4, fuelType: "petrol" },
                  { name: "Baleno GLX 1.5L CVT FWD", l100km: 6.4, fuelType: "petrol" },
                ],
              },
        {
                model: "Jimny",
                versions: [
                  { name: "Jimny GL 1.5L 4AT 4WD", l100km: 8.5, fuelType: "petrol" },
                  { name: "Jimny GLX 1.5L 4AT 4WD", l100km: 8.7, fuelType: "petrol" },
                  { name: "Jimny Pro 1.5L 5MT 4WD", l100km: 8.4, fuelType: "petrol" },
                ],
              },
        {
                model: "S-Cross",
                versions: [
                  { name: "S-Cross GL 1.4T 6AT AWD", l100km: 7.2, fuelType: "petrol" },
                  { name: "S-Cross GLX Hybrid 1.4T PHEV AWD", l100km: 2.1, fuelType: "petrol" },
                ],
              },
        {
                model: "Swift",
                versions: [
                  { name: "Swift GL 1.2L CVT FWD", l100km: 5.8, fuelType: "petrol" },
                  { name: "Swift GLX 1.2L CVT FWD", l100km: 5.8, fuelType: "petrol" },
                  { name: "Swift Sport 1.4T 6MT FWD", l100km: 6.7, fuelType: "petrol" },
                  { name: "Swift Hybrid 1.2L MHEV CVT FWD", l100km: 5.2, fuelType: "petrol" },
                ],
              },
        {
                model: "Vitara",
                versions: [
                  { name: "Vitara GL 1.4T 6AT AWD", l100km: 7.3, fuelType: "petrol" },
                  { name: "Vitara GLX 1.4T 6AT AWD", l100km: 7.5, fuelType: "petrol" },
                  { name: "Vitara Hybrid 1.5L MHEV 6AT AWD", l100km: 6.3, fuelType: "petrol" },
                ],
              }
      ],
    },
  {
      make: "Toyota",
      models: [
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
                model: "Kluger",
                versions: [
                  { name: "GX 2.5L eCVT FWD Hybrid", l100km: 5.8, fuelType: "petrol" },
                  { name: "GXL 2.5L eCVT AWD Hybrid", l100km: 6.0, fuelType: "petrol" },
                  { name: "Cruiser 2.5L eCVT AWD Hybrid", l100km: 6.0, fuelType: "petrol" },
                  { name: "Grande 2.5L eCVT AWD Hybrid", l100km: 6.0, fuelType: "petrol" },
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
              }
      ],
    },
  {
      make: "Volkswagen",
      models: [
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
                model: "Polo",
                versions: [
                  { name: "Life 1.0L TSI 6AT", l100km: 5.4, fuelType: "petrol" },
                  { name: "Style 1.0L TSI 6AT", l100km: 5.4, fuelType: "petrol" },
                  { name: "GTI 2.0T TSI DSG", l100km: 6.8, fuelType: "petrol" },
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
              }
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
              }
      ],
    },
]

// ─── ELECTRIC VEHICLES ───────────────────────────────────────────────────────

export const EV_MAKES: EVMake[] = [
  {
      make: "Audi",
      models: [
        {
                model: "e-tron GT",
                versions: [
                  { name: "e-tron GT quattro AWD 85kWh", kwh100km: 19.6 },
                  { name: "RS e-tron GT quattro AWD 85kWh", kwh100km: 20.0 },
                  { name: "RS e-tron GT Performance quattro AWD 105kWh", kwh100km: 20.6 },
                ],
              },
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
              }
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
              }
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
                model: "Dolphin",
                versions: [
                  { name: "Dynamic 44.9kWh", kwh100km: 13.6 },
                  { name: "Premium 60.4kWh", kwh100km: 13.3 },
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
                model: "Seal",
                versions: [
                  { name: "Dynamic RWD 61.4kWh", kwh100km: 15.7 },
                  { name: "Excellence RWD 82.6kWh", kwh100km: 15.7 },
                  { name: "Performance AWD 82.6kWh", kwh100km: 17.4 },
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
        {
                model: "Shark",
                versions: [
                  { name: "PHEV 4WD Premium", kwh100km: 16.8 },
                  { name: "PHEV 4WD Luxury", kwh100km: 16.8 },
                ],
              },
        {
                model: "Tang",
                versions: [
                  { name: "EV AWD 108.8kWh 6-seat", kwh100km: 20.4 },
                  { name: "EV AWD 108.8kWh 7-seat", kwh100km: 20.4 },
                ],
              }
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
              }
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
              }
      ],
    },
  {
      make: "Deepal",
      models: [
        {
                model: "L07",
                versions: [
                  { name: "Standard RWD 58.1kWh", kwh100km: 13.8 },
                  { name: "Long Range RWD 80.1kWh", kwh100km: 13.5 },
                ],
              },
        {
                model: "S07",
                versions: [
                  { name: "Standard RWD 66.8kWh", kwh100km: 14.5 },
                  { name: "Long Range RWD 80.1kWh", kwh100km: 14.0 },
                  { name: "Max AWD 80.1kWh", kwh100km: 15.8 },
                ],
              }
      ],
    },
  {
      make: "Ford",
      models: [
        {
                model: "Explorer EV",
                versions: [
                  { name: "Standard Range RWD 77kWh", kwh100km: 17.1 },
                  { name: "Extended Range RWD 79kWh", kwh100km: 16.8 },
                  { name: "Extended Range AWD 79kWh", kwh100km: 18.5 },
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
                model: "Mustang Mach-E",
                versions: [
                  { name: "Select RWD 70kWh", kwh100km: 16.8 },
                  { name: "Select AWD 70kWh", kwh100km: 18.3 },
                  { name: "Premium RWD 91kWh", kwh100km: 17.5 },
                  { name: "Premium AWD 91kWh", kwh100km: 19.0 },
                  { name: "GT AWD 91kWh", kwh100km: 21.3 },
                  { name: "GT Performance AWD 91kWh", kwh100km: 22.0 },
                ],
              }
      ],
    },
  {
      make: "Geely",
      models: [
        {
                model: "EX5",
                versions: [
                  { name: "Standard Range FWD 65kWh", kwh100km: 15.3 },
                  { name: "Long Range FWD 80kWh", kwh100km: 14.8 },
                  { name: "Long Range AWD 80kWh", kwh100km: 17.0 },
                ],
              },
        {
                model: "Galaxy E5",
                versions: [
                  { name: "Standard Range FWD 49.52kWh", kwh100km: 13.8 },
                  { name: "Long Range FWD 60.22kWh", kwh100km: 13.2 },
                ],
              },
        {
                model: "Galaxy E8",
                versions: [
                  { name: "RWD 100kWh", kwh100km: 14.5 },
                  { name: "AWD 100kWh", kwh100km: 16.2 },
                ],
              }
      ],
    },
  {
      make: "GWM",
      models: [
        {
                model: "Haval H6 PHEV",
                versions: [
                  { name: "PHEV AWD Lux", kwh100km: 13.0 },
                  { name: "PHEV AWD Ultra", kwh100km: 13.0 },
                ],
              },
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
              }
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
                model: "IONIQ 9",
                versions: [
                  { name: "AWD Standard 110.3kWh", kwh100km: 21.2 },
                  { name: "AWD Performance 110.3kWh", kwh100km: 22.0 },
                ],
              },
        {
                model: "Kona Electric",
                versions: [
                  { name: "Standard 48.6kWh FWD", kwh100km: 14.7 },
                  { name: "Extended 65.4kWh FWD", kwh100km: 14.3 },
                ],
              }
      ],
    },
  {
      make: "JAC",
      models: [
        {
                model: "E10X",
                versions: [
                  { name: "Standard 26kWh", kwh100km: 12.0 },
                  { name: "Extended 41kWh", kwh100km: 11.5 },
                ],
              },
        {
                model: "JS4 EV",
                versions: [
                  { name: "Standard 55kWh FWD", kwh100km: 15.0 },
                  { name: "Long Range 70kWh FWD", kwh100km: 14.5 },
                  { name: "AWD 70kWh", kwh100km: 17.0 },
                ],
              }
      ],
    },
  {
      make: "Kia",
      models: [
        {
                model: "EV3",
                versions: [
                  { name: "Standard 58.3kWh", kwh100km: 13.9 },
                  { name: "Long Range 81.4kWh", kwh100km: 13.5 },
                ],
              },
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
              }
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
              }
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
              }
      ],
    },
  {
      make: "MINI",
      models: [
        {
                model: "Aceman",
                versions: [
                  { name: "E RWD 42.5kWh", kwh100km: 15.5 },
                  { name: "SE RWD 54.2kWh", kwh100km: 16.0 },
                ],
              },
        {
                model: "Cooper Electric",
                versions: [
                  { name: "E RWD 40.7kWh", kwh100km: 15.0 },
                  { name: "SE RWD 54.2kWh", kwh100km: 15.5 },
                ],
              },
        {
                model: "Countryman",
                versions: [
                  { name: "E RWD 64.7kWh", kwh100km: 17.5 },
                  { name: "SE ALL4 AWD 64.7kWh", kwh100km: 19.0 },
                ],
              }
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
              }
      ],
    },
  {
      make: "Rivian",
      models: [
        {
                model: "R1S",
                versions: [
                  { name: "Dual-Motor AWD Standard Battery", kwh100km: 25.8 },
                  { name: "Dual-Motor AWD Large Battery", kwh100km: 24.5 },
                  { name: "Quad-Motor AWD Max Battery", kwh100km: 28.0 },
                ],
              },
        {
                model: "R1T",
                versions: [
                  { name: "Dual-Motor AWD Standard Battery", kwh100km: 25.0 },
                  { name: "Dual-Motor AWD Large Battery", kwh100km: 24.0 },
                  { name: "Quad-Motor AWD Max Battery", kwh100km: 27.5 },
                ],
              }
      ],
    },
  {
      make: "Skoda",
      models: [
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
        {
                model: "Enyaq",
                versions: [
                  { name: "Enyaq 60 RWD 62kWh", kwh100km: 16.8 },
                  { name: "Enyaq 85 RWD 82kWh", kwh100km: 17.2 },
                  { name: "Enyaq 85x AWD 82kWh", kwh100km: 18.5 },
                  { name: "Enyaq RS AWD 82kWh", kwh100km: 19.0 },
                ],
              }
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
              }
      ],
    },
  {
      make: "Tesla",
      models: [
        {
                model: "Cybertruck",
                versions: [
                  { name: "RWD Standard Range", kwh100km: 26.7 },
                  { name: "AWD Long Range", kwh100km: 24.2 },
                  { name: "Cyberbeast AWD", kwh100km: 27.3 },
                ],
              },
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
              }
      ],
    },
  {
      make: "Volkswagen",
      models: [
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
                model: "ID.7",
                versions: [
                  { name: "Pro RWD 77kWh Sedan", kwh100km: 15.4 },
                  { name: "Pro S RWD 86kWh Sedan", kwh100km: 15.8 },
                  { name: "GTX AWD 86kWh Sedan", kwh100km: 17.5 },
                  { name: "Tourer Pro RWD 77kWh Estate", kwh100km: 16.3 },
                  { name: "Tourer GTX AWD 86kWh Estate", kwh100km: 17.9 },
                ],
              }
      ],
    },
  {
      make: "Volvo",
      models: [
        {
                model: "EC40",
                versions: [
                  { name: "Single Motor Extended Range RWD 82kWh", kwh100km: 17.2 },
                  { name: "Twin Motor Performance AWD 82kWh", kwh100km: 19.5 },
                ],
              },
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
              }
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
              }
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
              }
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
                model: "009",
                versions: [
                  { name: "ME AWD 140kWh", kwh100km: 22.5 },
                  { name: "YOU AWD 140kWh", kwh100km: 23.0 },
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
              }
      ],
    },
]

export const PETROL_CARS = PETROL_MAKES
export const EV_CARS = EV_MAKES
