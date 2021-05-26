const carsJson = (() => {
    return {
        cars: [{
            "id": 1,
            "car": "Mitsubishi",
            "car_model": "Montero",
            "car_color": "Yellow",
            "car_model_year": 2002,
            "car_vin": "SAJWJ0FF3F8321657",
            "price": "$2814.46",
            "availability": false
          },
          {
            "id": 2,
            "car": "Volkswagen",
            "car_model": "Passat",
            "car_color": "Maroon",
            "car_model_year": 2008,
            "car_vin": "WBANV9C51AC203320",
            "price": "$1731.98",
            "availability": false
          },
          {
            "id": 3,
            "car": "Saturn",
            "car_model": "L-Series",
            "car_color": "Red",
            "car_model_year": 2003,
            "car_vin": "1HGCR6F34EA246317",
            "price": "$2238.35",
            "availability": true
          },
          {
            "id": 4,
            "car": "Jeep",
            "car_model": "Compass",
            "car_color": "Violet",
            "car_model_year": 2012,
            "car_vin": "4USBT33454L511606",
            "price": "$2732.99",
            "availability": false
          },
          {
            "id": 5,
            "car": "Mitsubishi",
            "car_model": "Lancer Evolution",
            "car_color": "Purple",
            "car_model_year": 2002,
            "car_vin": "WAU2GBFCXDN339713",
            "price": "$3849.47",
            "availability": false
          },
          {
            "id": 6,
            "car": "Chevrolet",
            "car_model": "Suburban",
            "car_color": "Indigo",
            "car_model_year": 2009,
            "car_vin": "WAUSH98E96A592763",
            "price": "$1252.30",
            "availability": false
          },
          {
            "id": 7,
            "car": "Dodge",
            "car_model": "Ram Van B350",
            "car_color": "Yellow",
            "car_model_year": 1994,
            "car_vin": "KNADH4A37A6919967",
            "price": "$1762.42",
            "availability": true
          },
          {
            "id": 8,
            "car": "Isuzu",
            "car_model": "Ascender",
            "car_color": "Teal",
            "car_model_year": 2004,
            "car_vin": "5GTMNGEE8A8713093",
            "price": "$1081.40",
            "availability": true
          },
          {
            "id": 9,
            "car": "BMW",
            "car_model": "6 Series",
            "car_color": "Purple",
            "car_model_year": 2008,
            "car_vin": "5TDBY5G16DS675822",
            "price": "$1258.99",
            "availability": true
          },
          {
            "id": 10,
            "car": "Mitsubishi",
            "car_model": "GTO",
            "car_color": "Purple",
            "car_model_year": 1994,
            "car_vin": "JM1NC2PFXE0140518",
            "price": "$3822.92",
            "availability": false
          },
          {
            "id": 11,
            "car": "Mazda",
            "car_model": "Mazda5",
            "car_color": "Red",
            "car_model_year": 2010,
            "car_vin": "WAUNE78P18A342660",
            "price": "$3963.20",
            "availability": true
          },
          {
            "id": 12,
            "car": "Audi",
            "car_model": "Q7",
            "car_color": "Pink",
            "car_model_year": 2012,
            "car_vin": "WA1WYBFE2AD448505",
            "price": "$1144.27",
            "availability": true
          },
          {
            "id": 13,
            "car": "Mercedes-Benz",
            "car_model": "SL-Class",
            "car_color": "Aquamarine",
            "car_model_year": 1989,
            "car_vin": "4A4AP3AU8FE713946",
            "price": "$1386.49",
            "availability": true
          },
          {
            "id": 14,
            "car": "Volvo",
            "car_model": "C70",
            "car_color": "Red",
            "car_model_year": 2012,
            "car_vin": "WAUHGBFC9DN768366",
            "price": "$1366.96",
            "availability": true
          },
          {
            "id": 15,
            "car": "GMC",
            "car_model": "Envoy XL",
            "car_color": "Green",
            "car_model_year": 2006,
            "car_vin": "WA1AV74L67D649365",
            "price": "$1221.46",
            "availability": false
          },
          {
            "id": 16,
            "car": "GMC",
            "car_model": "Vandura G3500",
            "car_color": "Teal",
            "car_model_year": 1996,
            "car_vin": "1FMJK2A5XAE576485",
            "price": "$1877.63",
            "availability": true
          },
          {
            "id": 17,
            "car": "Cadillac",
            "car_model": "CTS",
            "car_color": "Pink",
            "car_model_year": 2003,
            "car_vin": "WAUVC68E02A369838",
            "price": "$2646.55",
            "availability": true
          },
          {
            "id": 18,
            "car": "BMW",
            "car_model": "X5 M",
            "car_color": "Mauv",
            "car_model_year": 2012,
            "car_vin": "WA1YD54B63N613712",
            "price": "$2076.03",
            "availability": true
          },
          {
            "id": 19,
            "car": "Dodge",
            "car_model": "Viper",
            "car_color": "Turquoise",
            "car_model_year": 1999,
            "car_vin": "WAUMF98P66A420495",
            "price": "$1323.48",
            "availability": true
          },
          {
            "id": 20,
            "car": "Ford",
            "car_model": "Taurus",
            "car_color": "Mauv",
            "car_model_year": 2002,
            "car_vin": "WAUUL58E15A338821",
            "price": "$1801.89",
            "availability": false
          },
          {
            "id": 21,
            "car": "Suzuki",
            "car_model": "Swift",
            "car_color": "Green",
            "car_model_year": 1996,
            "car_vin": "WAUDH98E78A844182",
            "price": "$2716.12",
            "availability": true
          },
          {
            "id": 22,
            "car": "Chrysler",
            "car_model": "Town & Country",
            "car_color": "Mauv",
            "car_model_year": 2010,
            "car_vin": "5XXGM4A71CG888959",
            "price": "$3480.31",
            "availability": false
          },
          {
            "id": 23,
            "car": "Maserati",
            "car_model": "430",
            "car_color": "Blue",
            "car_model_year": 1991,
            "car_vin": "2FMPK3J94FB631826",
            "price": "$1660.01",
            "availability": false
          },
          {
            "id": 24,
            "car": "Toyota",
            "car_model": "Tacoma Xtra",
            "car_color": "Puce",
            "car_model_year": 1996,
            "car_vin": "5TDDCRFH8FS931829",
            "price": "$3532.17",
            "availability": false
          },
          {
            "id": 25,
            "car": "Volkswagen",
            "car_model": "Eurovan",
            "car_color": "Pink",
            "car_model_year": 2000,
            "car_vin": "WAUUL78E45A616915",
            "price": "$1645.81",
            "availability": true
          },
          {
            "id": 26,
            "car": "Ford",
            "car_model": "Econoline E150",
            "car_color": "Puce",
            "car_model_year": 2002,
            "car_vin": "5N1AN0NU9BC466461",
            "price": "$3464.94",
            "availability": true
          },
          {
            "id": 27,
            "car": "GMC",
            "car_model": "Sierra Denali",
            "car_color": "Green",
            "car_model_year": 2006,
            "car_vin": "JHMZF1D63ES995796",
            "price": "$1506.90",
            "availability": false
          },
          {
            "id": 28,
            "car": "Lotus",
            "car_model": "Esprit",
            "car_color": "Purple",
            "car_model_year": 1991,
            "car_vin": "1G6DK8EY0B0373831",
            "price": "$1061.74",
            "availability": false
          },
          {
            "id": 29,
            "car": "Mitsubishi",
            "car_model": "Expo",
            "car_color": "Maroon",
            "car_model_year": 1995,
            "car_vin": "WBAKA4C56CC120857",
            "price": "$1828.44",
            "availability": false
          },
          {
            "id": 30,
            "car": "Land Rover",
            "car_model": "Discovery Series II",
            "car_color": "Orange",
            "car_model_year": 2002,
            "car_vin": "1D7RE3BK4AS603019",
            "price": "$2911.93",
            "availability": false
          },
          {
            "id": 31,
            "car": "Geo",
            "car_model": "Tracker",
            "car_color": "Khaki",
            "car_model_year": 1997,
            "car_vin": "1D7CE3BK0AS555394",
            "price": "$3894.12",
            "availability": true
          },
          {
            "id": 32,
            "car": "Mercury",
            "car_model": "Monterey",
            "car_color": "Violet",
            "car_model_year": 2004,
            "car_vin": "KMHD35LH2FU144301",
            "price": "$2799.57",
            "availability": true
          },
          {
            "id": 33,
            "car": "BMW",
            "car_model": "3 Series",
            "car_color": "Violet",
            "car_model_year": 1992,
            "car_vin": "1G6KF57901U666328",
            "price": "$1629.85",
            "availability": false
          },
          {
            "id": 34,
            "car": "GMC",
            "car_model": "3500 Club Coupe",
            "car_color": "Fuscia",
            "car_model_year": 1998,
            "car_vin": "WBAFR1C52BD688976",
            "price": "$3559.47",
            "availability": true
          },
          {
            "id": 35,
            "car": "Volkswagen",
            "car_model": "Passat",
            "car_color": "Puce",
            "car_model_year": 1998,
            "car_vin": "JTDKN3DU1B0728650",
            "price": "$1468.79",
            "availability": true
          },
          {
            "id": 36,
            "car": "GMC",
            "car_model": "Yukon",
            "car_color": "Indigo",
            "car_model_year": 2007,
            "car_vin": "WAUJT54B44N616083",
            "price": "$2477.77",
            "availability": false
          },
          {
            "id": 37,
            "car": "Volkswagen",
            "car_model": "Golf",
            "car_color": "Khaki",
            "car_model_year": 1991,
            "car_vin": "1N4AL2AP1BN203395",
            "price": "$3968.20",
            "availability": false
          },
          {
            "id": 38,
            "car": "Mercedes-Benz",
            "car_model": "SLR McLaren",
            "car_color": "Orange",
            "car_model_year": 2008,
            "car_vin": "WBAPK53549A473174",
            "price": "$1437.86",
            "availability": false
          },
          {
            "id": 39,
            "car": "Land Rover",
            "car_model": "Range Rover",
            "car_color": "Khaki",
            "car_model_year": 1993,
            "car_vin": "1G6KF57925U041547",
            "price": "$1341.78",
            "availability": true
          },
          {
            "id": 40,
            "car": "Lamborghini",
            "car_model": "Countach",
            "car_color": "Goldenrod",
            "car_model_year": 1985,
            "car_vin": "WA1AY74L08D036800",
            "price": "$2139.19",
            "availability": true
          },
          {
            "id": 41,
            "car": "Dodge",
            "car_model": "Durango",
            "car_color": "Indigo",
            "car_model_year": 2002,
            "car_vin": "4A4AP3AU7FE541022",
            "price": "$2887.16",
            "availability": true
          },
          {
            "id": 42,
            "car": "Saturn",
            "car_model": "VUE",
            "car_color": "Violet",
            "car_model_year": 2006,
            "car_vin": "1D7RB1CP5AS798832",
            "price": "$3042.96",
            "availability": true
          },
          {
            "id": 43,
            "car": "Toyota",
            "car_model": "Matrix",
            "car_color": "Violet",
            "car_model_year": 2005,
            "car_vin": "1LNHL9DR9BG913773",
            "price": "$1238.19",
            "availability": false
          },
          {
            "id": 44,
            "car": "Jaguar",
            "car_model": "XJ",
            "car_color": "Orange",
            "car_model_year": 2006,
            "car_vin": "WBALM5C52AE771888",
            "price": "$3879.67",
            "availability": true
          },
          {
            "id": 45,
            "car": "Mercedes-Benz",
            "car_model": "Sprinter 3500",
            "car_color": "Maroon",
            "car_model_year": 2011,
            "car_vin": "2D4JN1AGXBR156369",
            "price": "$3567.25",
            "availability": true
          },
          {
            "id": 46,
            "car": "Mitsubishi",
            "car_model": "Montero",
            "car_color": "Crimson",
            "car_model_year": 1996,
            "car_vin": "WAUGL68E25A756856",
            "price": "$3217.31",
            "availability": true
          },
          {
            "id": 47,
            "car": "Subaru",
            "car_model": "Impreza",
            "car_color": "Fuscia",
            "car_model_year": 2006,
            "car_vin": "1N6AF0LY5EN597447",
            "price": "$2437.81",
            "availability": false
          },
          {
            "id": 48,
            "car": "Audi",
            "car_model": "A5",
            "car_color": "Orange",
            "car_model_year": 2012,
            "car_vin": "WAUGFAFR1DA381976",
            "price": "$2455.81",
            "availability": false
          },
          {
            "id": 49,
            "car": "Porsche",
            "car_model": "928",
            "car_color": "Blue",
            "car_model_year": 1994,
            "car_vin": "1GD312CG5CF627983",
            "price": "$2112.12",
            "availability": false
          },
          {
            "id": 50,
            "car": "Acura",
            "car_model": "TL",
            "car_color": "Violet",
            "car_model_year": 2000,
            "car_vin": "3C63DPML9CG620139",
            "price": "$3595.67",
            "availability": false
          },
          {
            "id": 51,
            "car": "Mitsubishi",
            "car_model": "Mirage",
            "car_color": "Teal",
            "car_model_year": 1992,
            "car_vin": "4T1BF1FK9EU758825",
            "price": "$3642.50",
            "availability": true
          },
          {
            "id": 52,
            "car": "Kia",
            "car_model": "Rondo",
            "car_color": "Red",
            "car_model_year": 2008,
            "car_vin": "1FTFW1E87AF978553",
            "price": "$1150.48",
            "availability": true
          },
          {
            "id": 53,
            "car": "Nissan",
            "car_model": "Maxima",
            "car_color": "Purple",
            "car_model_year": 2005,
            "car_vin": "WVWED7AJ4DW800765",
            "price": "$2308.71",
            "availability": true
          },
          {
            "id": 54,
            "car": "Suzuki",
            "car_model": "Samurai",
            "car_color": "Fuscia",
            "car_model_year": 1992,
            "car_vin": "WVWEU9AN6AE112654",
            "price": "$3523.87",
            "availability": true
          },
          {
            "id": 55,
            "car": "Chevrolet",
            "car_model": "Cobalt",
            "car_color": "Pink",
            "car_model_year": 2009,
            "car_vin": "3GYT4NEF2DG431298",
            "price": "$1668.89",
            "availability": true
          },
          {
            "id": 56,
            "car": "GMC",
            "car_model": "Acadia",
            "car_color": "Pink",
            "car_model_year": 2011,
            "car_vin": "2HNYD28738H773678",
            "price": "$3564.30",
            "availability": true
          },
          {
            "id": 57,
            "car": "Volkswagen",
            "car_model": "Golf",
            "car_color": "Maroon",
            "car_model_year": 1998,
            "car_vin": "WAULV44E47N641626",
            "price": "$3866.51",
            "availability": true
          },
          {
            "id": 58,
            "car": "Lexus",
            "car_model": "GS",
            "car_color": "Violet",
            "car_model_year": 1996,
            "car_vin": "2G4WB55K111092037",
            "price": "$3045.06",
            "availability": true
          },
          {
            "id": 59,
            "car": "Cadillac",
            "car_model": "Eldorado",
            "car_color": "Orange",
            "car_model_year": 2002,
            "car_vin": "3D7JB1EPXAG321542",
            "price": "$1652.75",
            "availability": true
          },
          {
            "id": 60,
            "car": "Ford",
            "car_model": "F250",
            "car_color": "Teal",
            "car_model_year": 2010,
            "car_vin": "2FMDK3GC4AB714669",
            "price": "$3702.14",
            "availability": true
          },
          {
            "id": 61,
            "car": "GMC",
            "car_model": "Savana 2500",
            "car_color": "Turquoise",
            "car_model_year": 2005,
            "car_vin": "WBAEK73495B976911",
            "price": "$3330.66",
            "availability": false
          },
          {
            "id": 62,
            "car": "BMW",
            "car_model": "645",
            "car_color": "Blue",
            "car_model_year": 2005,
            "car_vin": "JN8AZ1MUXEW948606",
            "price": "$1498.82",
            "availability": true
          },
          {
            "id": 63,
            "car": "Chevrolet",
            "car_model": "1500",
            "car_color": "Orange",
            "car_model_year": 1994,
            "car_vin": "5LMJJ2H51DE856700",
            "price": "$2063.98",
            "availability": false
          },
          {
            "id": 64,
            "car": "Ford",
            "car_model": "Taurus",
            "car_color": "Khaki",
            "car_model_year": 1992,
            "car_vin": "JN8AZ2NC2F9884105",
            "price": "$2802.49",
            "availability": false
          },
          {
            "id": 65,
            "car": "Lexus",
            "car_model": "RX",
            "car_color": "Maroon",
            "car_model_year": 2007,
            "car_vin": "WAUJFAFH1DN066052",
            "price": "$2462.45",
            "availability": false
          },
          {
            "id": 66,
            "car": "GMC",
            "car_model": "Savana",
            "car_color": "Goldenrod",
            "car_model_year": 2010,
            "car_vin": "KMHHT6KD4CU061471",
            "price": "$1315.98",
            "availability": true
          },
          {
            "id": 67,
            "car": "Kia",
            "car_model": "Spectra",
            "car_color": "Khaki",
            "car_model_year": 2007,
            "car_vin": "2G4WF551531515507",
            "price": "$3011.10",
            "availability": false
          },
          {
            "id": 68,
            "car": "Bentley",
            "car_model": "Continental GT",
            "car_color": "Turquoise",
            "car_model_year": 2012,
            "car_vin": "3D4PG6FV3AT242143",
            "price": "$1419.38",
            "availability": false
          },
          {
            "id": 69,
            "car": "Dodge",
            "car_model": "Dakota",
            "car_color": "Goldenrod",
            "car_model_year": 2008,
            "car_vin": "1G6DP577870103936",
            "price": "$1407.10",
            "availability": false
          },
          {
            "id": 70,
            "car": "Honda",
            "car_model": "Civic",
            "car_color": "Turquoise",
            "car_model_year": 2001,
            "car_vin": "5N1AA0NC3DN401888",
            "price": "$2508.52",
            "availability": true
          },
          {
            "id": 71,
            "car": "Lexus",
            "car_model": "LS",
            "car_color": "Violet",
            "car_model_year": 1992,
            "car_vin": "5NPDH4AE3DH626081",
            "price": "$1700.50",
            "availability": false
          },
          {
            "id": 72,
            "car": "BMW",
            "car_model": "1 Series",
            "car_color": "Fuscia",
            "car_model_year": 2012,
            "car_vin": "KNDJN2A21F7706444",
            "price": "$1231.67",
            "availability": false
          },
          {
            "id": 73,
            "car": "Ferrari",
            "car_model": "F430",
            "car_color": "Pink",
            "car_model_year": 2007,
            "car_vin": "WAUTFAFH1CN253945",
            "price": "$1185.92",
            "availability": false
          },
          {
            "id": 74,
            "car": "Pontiac",
            "car_model": "Grand Prix",
            "car_color": "Violet",
            "car_model_year": 1996,
            "car_vin": "WAUMFBFL7DN961584",
            "price": "$2065.93",
            "availability": true
          },
          {
            "id": 75,
            "car": "Suzuki",
            "car_model": "Esteem",
            "car_color": "Puce",
            "car_model_year": 1995,
            "car_vin": "WDDHF2EB6CA516312",
            "price": "$2054.55",
            "availability": true
          },
          {
            "id": 76,
            "car": "Nissan",
            "car_model": "Versa",
            "car_color": "Crimson",
            "car_model_year": 2012,
            "car_vin": "WBABN73423P498440",
            "price": "$1500.26",
            "availability": false
          },
          {
            "id": 77,
            "car": "Suzuki",
            "car_model": "Swift",
            "car_color": "Teal",
            "car_model_year": 1995,
            "car_vin": "1FMEU7DE4AU871463",
            "price": "$3864.08",
            "availability": true
          },
          {
            "id": 78,
            "car": "Mitsubishi",
            "car_model": "Diamante",
            "car_color": "Turquoise",
            "car_model_year": 2000,
            "car_vin": "WAUDT48H26K307934",
            "price": "$2886.85",
            "availability": false
          },
          {
            "id": 79,
            "car": "Cadillac",
            "car_model": "XLR-V",
            "car_color": "Goldenrod",
            "car_model_year": 2007,
            "car_vin": "WAUUL98E46A029305",
            "price": "$1089.89",
            "availability": false
          },
          {
            "id": 80,
            "car": "Honda",
            "car_model": "Pilot",
            "car_color": "Green",
            "car_model_year": 2009,
            "car_vin": "KMHTC6AD9EU079642",
            "price": "$1897.01",
            "availability": false
          },
          {
            "id": 81,
            "car": "Nissan",
            "car_model": "Frontier",
            "car_color": "Pink",
            "car_model_year": 2011,
            "car_vin": "5NPDH4AE3FH402697",
            "price": "$1401.49",
            "availability": false
          },
          {
            "id": 82,
            "car": "Dodge",
            "car_model": "Caravan",
            "car_color": "Green",
            "car_model_year": 2004,
            "car_vin": "KNDPB3A20B7837660",
            "price": "$1367.44",
            "availability": true
          },
          {
            "id": 83,
            "car": "Aston Martin",
            "car_model": "DB9",
            "car_color": "Mauv",
            "car_model_year": 2006,
            "car_vin": "1GKKRNED0DJ826326",
            "price": "$3051.68",
            "availability": false
          },
          {
            "id": 84,
            "car": "Mercedes-Benz",
            "car_model": "300E",
            "car_color": "Blue",
            "car_model_year": 1992,
            "car_vin": "WBAEW53424P914812",
            "price": "$1186.54",
            "availability": true
          },
          {
            "id": 85,
            "car": "Subaru",
            "car_model": "SVX",
            "car_color": "Blue",
            "car_model_year": 1994,
            "car_vin": "JHMZF1C44CS019846",
            "price": "$1209.90",
            "availability": true
          },
          {
            "id": 86,
            "car": "Dodge",
            "car_model": "Ram Van 2500",
            "car_color": "Puce",
            "car_model_year": 1997,
            "car_vin": "JTDKDTB34F1336579",
            "price": "$2986.94",
            "availability": false
          },
          {
            "id": 87,
            "car": "Chevrolet",
            "car_model": "Corvette",
            "car_color": "Turquoise",
            "car_model_year": 1961,
            "car_vin": "SCFAD22353K691631",
            "price": "$3783.62",
            "availability": true
          },
          {
            "id": 88,
            "car": "Mitsubishi",
            "car_model": "Diamante",
            "car_color": "Indigo",
            "car_model_year": 2000,
            "car_vin": "1G6DL8E36D0269297",
            "price": "$1312.27",
            "availability": true
          },
          {
            "id": 89,
            "car": "Mitsubishi",
            "car_model": "Expo",
            "car_color": "Maroon",
            "car_model_year": 1994,
            "car_vin": "WP0AA2A92FS592332",
            "price": "$1946.73",
            "availability": true
          },
          {
            "id": 90,
            "car": "GMC",
            "car_model": "Safari",
            "car_color": "Goldenrod",
            "car_model_year": 1998,
            "car_vin": "WBAVB73517F584929",
            "price": "$3748.78",
            "availability": true
          },
          {
            "id": 91,
            "car": "BMW",
            "car_model": "M5",
            "car_color": "Crimson",
            "car_model_year": 2009,
            "car_vin": "WVGAV7AX5FW407579",
            "price": "$3914.79",
            "availability": false
          },
          {
            "id": 92,
            "car": "Dodge",
            "car_model": "Ram 3500",
            "car_color": "Pink",
            "car_model_year": 1999,
            "car_vin": "YV1612FH2E2873271",
            "price": "$3001.79",
            "availability": true
          },
          {
            "id": 93,
            "car": "Chevrolet",
            "car_model": "G-Series 1500",
            "car_color": "Fuscia",
            "car_model_year": 1998,
            "car_vin": "1D7RB1GT1BS878251",
            "price": "$3471.12",
            "availability": false
          },
          {
            "id": 94,
            "car": "Toyota",
            "car_model": "Camry Hybrid",
            "car_color": "Turquoise",
            "car_model_year": 2007,
            "car_vin": "YV4902BZ3B1046673",
            "price": "$2195.59",
            "availability": false
          },
          {
            "id": 95,
            "car": "Ford",
            "car_model": "Contour",
            "car_color": "Orange",
            "car_model_year": 1997,
            "car_vin": "WAUHF98P88A144132",
            "price": "$1981.14",
            "availability": true
          },
          {
            "id": 96,
            "car": "Mercedes-Benz",
            "car_model": "SL-Class",
            "car_color": "Khaki",
            "car_model_year": 2006,
            "car_vin": "YV1902AH3D1119632",
            "price": "$1937.08",
            "availability": false
          },
          {
            "id": 97,
            "car": "Subaru",
            "car_model": "Outback",
            "car_color": "Puce",
            "car_model_year": 2002,
            "car_vin": "KMHFG4JG3FA418690",
            "price": "$1934.78",
            "availability": false
          },
          {
            "id": 98,
            "car": "Ford",
            "car_model": "E-Series",
            "car_color": "Violet",
            "car_model_year": 2003,
            "car_vin": "1N6AD0CU7DN643894",
            "price": "$3202.99",
            "availability": true
          },
          {
            "id": 99,
            "car": "Ford",
            "car_model": "F150",
            "car_color": "Pink",
            "car_model_year": 1994,
            "car_vin": "1FTEX1C81AK728857",
            "price": "$1245.14",
            "availability": true
          },
          {
            "id": 100,
            "car": "Hyundai",
            "car_model": "Veloster",
            "car_color": "Indigo",
            "car_model_year": 2012,
            "car_vin": "KMHTC6AD4DU412781",
            "price": "$2987.01",
            "availability": true
          },
          {
            "id": 101,
            "car": "Lincoln",
            "car_model": "Mark VIII",
            "car_color": "Teal",
            "car_model_year": 1994,
            "car_vin": "JTDBT4K34B1478630",
            "price": "$1463.19",
            "availability": false
          },
          {
            "id": 102,
            "car": "Land Rover",
            "car_model": "Range Rover",
            "car_color": "Mauv",
            "car_model_year": 1986,
            "car_vin": "SALCT2BG1FH782368",
            "price": "$1446.60",
            "availability": true
          },
          {
            "id": 103,
            "car": "Cadillac",
            "car_model": "DeVille",
            "car_color": "Turquoise",
            "car_model_year": 1996,
            "car_vin": "1G4GC5GG1AF424755",
            "price": "$2922.12",
            "availability": true
          },
          {
            "id": 104,
            "car": "Mitsubishi",
            "car_model": "Eclipse",
            "car_color": "Orange",
            "car_model_year": 2007,
            "car_vin": "SCBZB25E22C226384",
            "price": "$3525.90",
            "availability": false
          },
          {
            "id": 105,
            "car": "Honda",
            "car_model": "Prelude",
            "car_color": "Crimson",
            "car_model_year": 2000,
            "car_vin": "19XFA1F34AE999844",
            "price": "$2770.75",
            "availability": true
          },
          {
            "id": 106,
            "car": "Lincoln",
            "car_model": "Continental",
            "car_color": "Puce",
            "car_model_year": 1998,
            "car_vin": "JTDKN3DU5A0015197",
            "price": "$2849.20",
            "availability": true
          },
          {
            "id": 107,
            "car": "Chevrolet",
            "car_model": "G-Series 1500",
            "car_color": "Yellow",
            "car_model_year": 1998,
            "car_vin": "1G4GB5ER1CF288010",
            "price": "$1148.41",
            "availability": false
          },
          {
            "id": 108,
            "car": "Buick",
            "car_model": "Roadmaster",
            "car_color": "Pink",
            "car_model_year": 1994,
            "car_vin": "2G4GT5GX0F9136662",
            "price": "$2145.70",
            "availability": false
          },
          {
            "id": 109,
            "car": "Nissan",
            "car_model": "NV1500",
            "car_color": "Fuscia",
            "car_model_year": 2012,
            "car_vin": "JHMZF1D44ES383055",
            "price": "$1303.46",
            "availability": false
          },
          {
            "id": 110,
            "car": "Jaguar",
            "car_model": "XK Series",
            "car_color": "Violet",
            "car_model_year": 2000,
            "car_vin": "JTHBL5EF7F5113545",
            "price": "$3560.16",
            "availability": true
          },
          {
            "id": 111,
            "car": "Toyota",
            "car_model": "Land Cruiser",
            "car_color": "Turquoise",
            "car_model_year": 2005,
            "car_vin": "WBAAX13453P006969",
            "price": "$3212.46",
            "availability": true
          },
          {
            "id": 112,
            "car": "Nissan",
            "car_model": "Frontier",
            "car_color": "Crimson",
            "car_model_year": 2007,
            "car_vin": "JM3ER2A59C0692806",
            "price": "$2531.06",
            "availability": true
          },
          {
            "id": 113,
            "car": "Suzuki",
            "car_model": "X-90",
            "car_color": "Green",
            "car_model_year": 1997,
            "car_vin": "SCFFDAAE0AG033573",
            "price": "$3637.72",
            "availability": true
          },
          {
            "id": 114,
            "car": "MINI",
            "car_model": "MINI",
            "car_color": "Maroon",
            "car_model_year": 2002,
            "car_vin": "WBASP2C50BC056803",
            "price": "$1084.80",
            "availability": true
          },
          {
            "id": 115,
            "car": "GMC",
            "car_model": "Sierra",
            "car_color": "Crimson",
            "car_model_year": 2009,
            "car_vin": "3D7TT2CTXBG246063",
            "price": "$3405.99",
            "availability": true
          },
          {
            "id": 116,
            "car": "Hyundai",
            "car_model": "Veracruz",
            "car_color": "Puce",
            "car_model_year": 2007,
            "car_vin": "5FRYD3H26GB756960",
            "price": "$2361.57",
            "availability": true
          },
          {
            "id": 117,
            "car": "Saturn",
            "car_model": "S-Series",
            "car_color": "Teal",
            "car_model_year": 1993,
            "car_vin": "4USBU33528L100448",
            "price": "$2277.25",
            "availability": false
          },
          {
            "id": 118,
            "car": "Volvo",
            "car_model": "C70",
            "car_color": "Crimson",
            "car_model_year": 2011,
            "car_vin": "WP1AE2A21EL640995",
            "price": "$3910.90",
            "availability": true
          },
          {
            "id": 119,
            "car": "GMC",
            "car_model": "Sierra 3500",
            "car_color": "Puce",
            "car_model_year": 2010,
            "car_vin": "5J8TB1H2XCA888873",
            "price": "$2793.04",
            "availability": false
          },
          {
            "id": 120,
            "car": "GMC",
            "car_model": "Yukon XL 1500",
            "car_color": "Khaki",
            "car_model_year": 2005,
            "car_vin": "WBAKB4C53CC732950",
            "price": "$1166.24",
            "availability": false
          },
          {
            "id": 121,
            "car": "BMW",
            "car_model": "7 Series",
            "car_color": "Turquoise",
            "car_model_year": 2009,
            "car_vin": "WBANB33525B263379",
            "price": "$2136.36",
            "availability": false
          },
          {
            "id": 122,
            "car": "Chevrolet",
            "car_model": "Suburban 2500",
            "car_color": "Khaki",
            "car_model_year": 2002,
            "car_vin": "5TFCY5F17DX076265",
            "price": "$1750.74",
            "availability": false
          },
          {
            "id": 123,
            "car": "Jeep",
            "car_model": "Liberty",
            "car_color": "Indigo",
            "car_model_year": 2007,
            "car_vin": "WAUAH94F37N462773",
            "price": "$1686.33",
            "availability": false
          },
          {
            "id": 124,
            "car": "Mercedes-Benz",
            "car_model": "G-Class",
            "car_color": "Violet",
            "car_model_year": 2010,
            "car_vin": "19UUA9F59EA395577",
            "price": "$2616.48",
            "availability": true
          },
          {
            "id": 125,
            "car": "Cadillac",
            "car_model": "Escalade ESV",
            "car_color": "Red",
            "car_model_year": 2011,
            "car_vin": "1G6KD57958U035977",
            "price": "$3716.72",
            "availability": true
          },
          {
            "id": 126,
            "car": "Chevrolet",
            "car_model": "Impala",
            "car_color": "Goldenrod",
            "car_model_year": 1995,
            "car_vin": "3FA6P0LU8DR793712",
            "price": "$1344.50",
            "availability": true
          },
          {
            "id": 127,
            "car": "Pontiac",
            "car_model": "6000",
            "car_color": "Aquamarine",
            "car_model_year": 1986,
            "car_vin": "JN1EY1AP6DM106941",
            "price": "$3741.61",
            "availability": false
          },
          {
            "id": 128,
            "car": "Ford",
            "car_model": "Festiva",
            "car_color": "Purple",
            "car_model_year": 1989,
            "car_vin": "1GTN2TEH8FZ917451",
            "price": "$3214.22",
            "availability": false
          },
          {
            "id": 129,
            "car": "Chevrolet",
            "car_model": "Impala",
            "car_color": "Violet",
            "car_model_year": 1996,
            "car_vin": "WP0CA2A89CS944625",
            "price": "$1432.28",
            "availability": false
          },
          {
            "id": 130,
            "car": "Mazda",
            "car_model": "RX-8",
            "car_color": "Blue",
            "car_model_year": 2009,
            "car_vin": "WA1LGAFE0DD930636",
            "price": "$1552.12",
            "availability": true
          },
          {
            "id": 131,
            "car": "Toyota",
            "car_model": "Avalon",
            "car_color": "Purple",
            "car_model_year": 2004,
            "car_vin": "WA1LGAFEXBD599495",
            "price": "$1794.74",
            "availability": false
          },
          {
            "id": 132,
            "car": "Mazda",
            "car_model": "MX-6",
            "car_color": "Green",
            "car_model_year": 1992,
            "car_vin": "JN8AE2KP2B9680546",
            "price": "$1895.74",
            "availability": true
          },
          {
            "id": 133,
            "car": "Kia",
            "car_model": "Sephia",
            "car_color": "Red",
            "car_model_year": 1997,
            "car_vin": "1G6DV57V480341708",
            "price": "$3282.08",
            "availability": false
          },
          {
            "id": 134,
            "car": "Pontiac",
            "car_model": "Gemini",
            "car_color": "Goldenrod",
            "car_model_year": 1989,
            "car_vin": "5TFBW5F15BX898397",
            "price": "$1249.75",
            "availability": true
          },
          {
            "id": 135,
            "car": "Dodge",
            "car_model": "Ram Van B250",
            "car_color": "Violet",
            "car_model_year": 1994,
            "car_vin": "1D7RW7GP3AS040117",
            "price": "$3915.36",
            "availability": false
          },
          {
            "id": 136,
            "car": "Plymouth",
            "car_model": "Grand Voyager",
            "car_color": "Yellow",
            "car_model_year": 1995,
            "car_vin": "WBABV13426J951833",
            "price": "$1332.26",
            "availability": true
          },
          {
            "id": 137,
            "car": "Ford",
            "car_model": "Econoline E350",
            "car_color": "Fuscia",
            "car_model_year": 1994,
            "car_vin": "WP0AB2A93FS495329",
            "price": "$3742.20",
            "availability": false
          },
          {
            "id": 138,
            "car": "GMC",
            "car_model": "Vandura 2500",
            "car_color": "Red",
            "car_model_year": 1992,
            "car_vin": "WBAVB33566K192933",
            "price": "$1030.39",
            "availability": true
          },
          {
            "id": 139,
            "car": "Ford",
            "car_model": "Explorer",
            "car_color": "Blue",
            "car_model_year": 2010,
            "car_vin": "KNADH4A39B6604962",
            "price": "$3135.57",
            "availability": true
          },
          {
            "id": 140,
            "car": "Dodge",
            "car_model": "Dakota",
            "car_color": "Aquamarine",
            "car_model_year": 2001,
            "car_vin": "WP0CA2A82AS171509",
            "price": "$3802.52",
            "availability": false
          },
          {
            "id": 141,
            "car": "Toyota",
            "car_model": "Tacoma Xtra",
            "car_color": "Crimson",
            "car_model_year": 1995,
            "car_vin": "YV4940BZ0D1607990",
            "price": "$2842.63",
            "availability": false
          },
          {
            "id": 142,
            "car": "Dodge",
            "car_model": "D150",
            "car_color": "Violet",
            "car_model_year": 1992,
            "car_vin": "1GKKRNED9CJ890492",
            "price": "$2302.23",
            "availability": false
          },
          {
            "id": 143,
            "car": "Mazda",
            "car_model": "Mazda6",
            "car_color": "Blue",
            "car_model_year": 2008,
            "car_vin": "2C3CDXCT5DH145203",
            "price": "$2299.79",
            "availability": false
          },
          {
            "id": 144,
            "car": "Pontiac",
            "car_model": "Grand Prix",
            "car_color": "Aquamarine",
            "car_model_year": 2004,
            "car_vin": "WA1WKBFP7CA068180",
            "price": "$1162.25",
            "availability": true
          },
          {
            "id": 145,
            "car": "Chrysler",
            "car_model": "Crossfire",
            "car_color": "Khaki",
            "car_model_year": 2004,
            "car_vin": "5UXWX7C50DL593142",
            "price": "$1593.55",
            "availability": true
          },
          {
            "id": 146,
            "car": "Honda",
            "car_model": "CR-Z",
            "car_color": "Blue",
            "car_model_year": 2011,
            "car_vin": "2HNYD186X3H577070",
            "price": "$1725.72",
            "availability": true
          },
          {
            "id": 147,
            "car": "Volkswagen",
            "car_model": "Cabriolet",
            "car_color": "Green",
            "car_model_year": 1989,
            "car_vin": "1N6AA0CA0FN020019",
            "price": "$1495.38",
            "availability": false
          },
          {
            "id": 148,
            "car": "Volkswagen",
            "car_model": "Jetta",
            "car_color": "Maroon",
            "car_model_year": 2004,
            "car_vin": "SCBBR9ZA5AC141826",
            "price": "$3633.12",
            "availability": true
          },
          {
            "id": 149,
            "car": "Lexus",
            "car_model": "RX",
            "car_color": "Maroon",
            "car_model_year": 2008,
            "car_vin": "JH4CU2F69AC989200",
            "price": "$1751.58",
            "availability": false
          },
          {
            "id": 150,
            "car": "Mitsubishi",
            "car_model": "Mirage",
            "car_color": "Fuscia",
            "car_model_year": 1996,
            "car_vin": "5FNYF3H29FB557072",
            "price": "$3359.50",
            "availability": false
          },
          {
            "id": 151,
            "car": "Jaguar",
            "car_model": "XK Series",
            "car_color": "Purple",
            "car_model_year": 1999,
            "car_vin": "JTEBU5JRXE5012914",
            "price": "$2011.84",
            "availability": true
          },
          {
            "id": 152,
            "car": "Ford",
            "car_model": "Fusion",
            "car_color": "Blue",
            "car_model_year": 2011,
            "car_vin": "WAUHFAFL9AN433164",
            "price": "$3781.78",
            "availability": true
          },
          {
            "id": 153,
            "car": "Saab",
            "car_model": "9000",
            "car_color": "Crimson",
            "car_model_year": 1997,
            "car_vin": "JTJHY7AX0D4205734",
            "price": "$3427.05",
            "availability": true
          },
          {
            "id": 154,
            "car": "Chevrolet",
            "car_model": "TrailBlazer",
            "car_color": "Violet",
            "car_model_year": 2006,
            "car_vin": "JA32U2FUXFU470149",
            "price": "$2167.72",
            "availability": true
          },
          {
            "id": 155,
            "car": "Honda",
            "car_model": "Civic",
            "car_color": "Aquamarine",
            "car_model_year": 2010,
            "car_vin": "3D73Y3HL2BG834703",
            "price": "$1116.87",
            "availability": false
          },
          {
            "id": 156,
            "car": "BMW",
            "car_model": "3 Series",
            "car_color": "Green",
            "car_model_year": 2006,
            "car_vin": "4T1BF1FK7CU557535",
            "price": "$1124.01",
            "availability": true
          },
          {
            "id": 157,
            "car": "GMC",
            "car_model": "Terrain",
            "car_color": "Violet",
            "car_model_year": 2011,
            "car_vin": "1G6DP577X60160718",
            "price": "$1649.82",
            "availability": false
          },
          {
            "id": 158,
            "car": "Ford",
            "car_model": "Aerostar",
            "car_color": "Pink",
            "car_model_year": 1996,
            "car_vin": "JTHBL5EF2D5656895",
            "price": "$2549.51",
            "availability": false
          },
          {
            "id": 159,
            "car": "Subaru",
            "car_model": "Legacy",
            "car_color": "Aquamarine",
            "car_model_year": 1995,
            "car_vin": "3D7TT2CT5BG306542",
            "price": "$3597.01",
            "availability": false
          },
          {
            "id": 160,
            "car": "Dodge",
            "car_model": "Ram 50",
            "car_color": "Puce",
            "car_model_year": 1993,
            "car_vin": "2T1BURHE6EC850827",
            "price": "$2101.71",
            "availability": true
          },
          {
            "id": 161,
            "car": "Geo",
            "car_model": "Metro",
            "car_color": "Maroon",
            "car_model_year": 1994,
            "car_vin": "VNKKTUD3XFA102086",
            "price": "$1462.76",
            "availability": true
          },
          {
            "id": 162,
            "car": "Mercury",
            "car_model": "Tracer",
            "car_color": "Puce",
            "car_model_year": 1991,
            "car_vin": "WBXPA93466W510084",
            "price": "$3109.46",
            "availability": true
          },
          {
            "id": 163,
            "car": "Mazda",
            "car_model": "Mazdaspeed 3",
            "car_color": "Mauv",
            "car_model_year": 2012,
            "car_vin": "JA4AD2A30EZ420447",
            "price": "$3368.98",
            "availability": false
          },
          {
            "id": 164,
            "car": "Mitsubishi",
            "car_model": "Outlander Sport",
            "car_color": "Red",
            "car_model_year": 2012,
            "car_vin": "5N1BA0NE2FN501313",
            "price": "$3488.55",
            "availability": true
          },
          {
            "id": 165,
            "car": "Ford",
            "car_model": "Fusion",
            "car_color": "Pink",
            "car_model_year": 2010,
            "car_vin": "JH4NA21675S735229",
            "price": "$1542.98",
            "availability": true
          },
          {
            "id": 166,
            "car": "Volvo",
            "car_model": "V70",
            "car_color": "Aquamarine",
            "car_model_year": 2008,
            "car_vin": "WBASN4C54CC723553",
            "price": "$1678.31",
            "availability": false
          },
          {
            "id": 167,
            "car": "Jeep",
            "car_model": "Wrangler",
            "car_color": "Violet",
            "car_model_year": 1992,
            "car_vin": "JTEBU5JR0C5720506",
            "price": "$1946.80",
            "availability": false
          },
          {
            "id": 168,
            "car": "Pontiac",
            "car_model": "GTO",
            "car_color": "Puce",
            "car_model_year": 1966,
            "car_vin": "JH4DC54882C528777",
            "price": "$2925.66",
            "availability": true
          },
          {
            "id": 169,
            "car": "Maybach",
            "car_model": "57",
            "car_color": "Turquoise",
            "car_model_year": 2010,
            "car_vin": "KNDKG3A25A7704659",
            "price": "$2375.61",
            "availability": false
          },
          {
            "id": 170,
            "car": "Porsche",
            "car_model": "944",
            "car_color": "Teal",
            "car_model_year": 1984,
            "car_vin": "1G6D05EG8A0247050",
            "price": "$2398.08",
            "availability": true
          },
          {
            "id": 171,
            "car": "Jeep",
            "car_model": "Cherokee",
            "car_color": "Maroon",
            "car_model_year": 1992,
            "car_vin": "JA32X2HU2DU889582",
            "price": "$1319.48",
            "availability": true
          },
          {
            "id": 172,
            "car": "Volkswagen",
            "car_model": "Golf",
            "car_color": "Khaki",
            "car_model_year": 2005,
            "car_vin": "1N6AD0CW8FN390377",
            "price": "$3912.57",
            "availability": false
          },
          {
            "id": 173,
            "car": "Honda",
            "car_model": "Odyssey",
            "car_color": "Violet",
            "car_model_year": 2008,
            "car_vin": "1YVHZ8BA4A5783965",
            "price": "$3078.29",
            "availability": false
          },
          {
            "id": 174,
            "car": "Chrysler",
            "car_model": "LeBaron",
            "car_color": "Purple",
            "car_model_year": 1994,
            "car_vin": "1LNHL9DK1FG227901",
            "price": "$3293.49",
            "availability": false
          },
          {
            "id": 175,
            "car": "Eagle",
            "car_model": "Summit",
            "car_color": "Violet",
            "car_model_year": 1993,
            "car_vin": "1C4SDHCT1EC981866",
            "price": "$1238.66",
            "availability": true
          },
          {
            "id": 176,
            "car": "GMC",
            "car_model": "Safari",
            "car_color": "Red",
            "car_model_year": 1993,
            "car_vin": "WVWAB7AJ1CW552784",
            "price": "$3723.56",
            "availability": false
          },
          {
            "id": 177,
            "car": "Volkswagen",
            "car_model": "Golf",
            "car_color": "Indigo",
            "car_model_year": 2012,
            "car_vin": "2HNYD28208H419184",
            "price": "$2925.89",
            "availability": true
          },
          {
            "id": 178,
            "car": "Mazda",
            "car_model": "RX-7",
            "car_color": "Mauv",
            "car_model_year": 1995,
            "car_vin": "WAUVT68EX4A400726",
            "price": "$2095.57",
            "availability": true
          },
          {
            "id": 179,
            "car": "Lamborghini",
            "car_model": "Diablo",
            "car_color": "Purple",
            "car_model_year": 2001,
            "car_vin": "1G6AL1R30F0656886",
            "price": "$1194.42",
            "availability": true
          },
          {
            "id": 180,
            "car": "Chevrolet",
            "car_model": "Corvette",
            "car_color": "Pink",
            "car_model_year": 1965,
            "car_vin": "WBAFU9C50CC964401",
            "price": "$2009.53",
            "availability": true
          },
          {
            "id": 181,
            "car": "Oldsmobile",
            "car_model": "Achieva",
            "car_color": "Goldenrod",
            "car_model_year": 1994,
            "car_vin": "WP0AA2A92BS573032",
            "price": "$2418.32",
            "availability": true
          },
          {
            "id": 182,
            "car": "Honda",
            "car_model": "Accord",
            "car_color": "Mauv",
            "car_model_year": 1993,
            "car_vin": "WAUFFAFM2AA675284",
            "price": "$2952.04",
            "availability": true
          },
          {
            "id": 183,
            "car": "Chevrolet",
            "car_model": "Caprice",
            "car_color": "Indigo",
            "car_model_year": 1994,
            "car_vin": "JH4CU25669C310657",
            "price": "$2260.80",
            "availability": true
          },
          {
            "id": 184,
            "car": "Hyundai",
            "car_model": "Santa Fe",
            "car_color": "Teal",
            "car_model_year": 2005,
            "car_vin": "KNALN4D76F5545674",
            "price": "$3970.53",
            "availability": false
          },
          {
            "id": 185,
            "car": "GMC",
            "car_model": "Sonoma",
            "car_color": "Puce",
            "car_model_year": 1997,
            "car_vin": "2C3CDXEJ8FH073542",
            "price": "$3961.08",
            "availability": true
          },
          {
            "id": 186,
            "car": "Mercury",
            "car_model": "Mountaineer",
            "car_color": "Violet",
            "car_model_year": 2005,
            "car_vin": "1C3CDFAA9FD180970",
            "price": "$3420.82",
            "availability": false
          },
          {
            "id": 187,
            "car": "Saab",
            "car_model": "9-5",
            "car_color": "Violet",
            "car_model_year": 2007,
            "car_vin": "TRUDD38J981818679",
            "price": "$1277.80",
            "availability": true
          },
          {
            "id": 188,
            "car": "Chevrolet",
            "car_model": "2500",
            "car_color": "Khaki",
            "car_model_year": 2000,
            "car_vin": "1N4AA5AP6BC559442",
            "price": "$2623.18",
            "availability": true
          },
          {
            "id": 189,
            "car": "Pontiac",
            "car_model": "Grand Prix",
            "car_color": "Indigo",
            "car_model_year": 1975,
            "car_vin": "1G6KD57Y29U669420",
            "price": "$2147.60",
            "availability": false
          },
          {
            "id": 190,
            "car": "Eagle",
            "car_model": "Talon",
            "car_color": "Goldenrod",
            "car_model_year": 1995,
            "car_vin": "19XFA1E35AE128694",
            "price": "$2966.72",
            "availability": true
          },
          {
            "id": 191,
            "car": "Chevrolet",
            "car_model": "Corvette",
            "car_color": "Turquoise",
            "car_model_year": 2003,
            "car_vin": "SALVE2BG2FH095130",
            "price": "$1370.71",
            "availability": false
          },
          {
            "id": 192,
            "car": "Mercedes-Benz",
            "car_model": "S-Class",
            "car_color": "Blue",
            "car_model_year": 1992,
            "car_vin": "1C3CDFAA8FD910741",
            "price": "$1284.90",
            "availability": false
          },
          {
            "id": 193,
            "car": "Dodge",
            "car_model": "Daytona",
            "car_color": "Pink",
            "car_model_year": 1993,
            "car_vin": "5XYKT3A18BG380453",
            "price": "$1622.24",
            "availability": false
          },
          {
            "id": 194,
            "car": "Jaguar",
            "car_model": "XJ",
            "car_color": "Indigo",
            "car_model_year": 2012,
            "car_vin": "WBAVA33567F004229",
            "price": "$2278.07",
            "availability": false
          },
          {
            "id": 195,
            "car": "Toyota",
            "car_model": "Echo",
            "car_color": "Yellow",
            "car_model_year": 2005,
            "car_vin": "5N1AA0NC5FN957722",
            "price": "$3609.78",
            "availability": false
          },
          {
            "id": 196,
            "car": "Saab",
            "car_model": "9-3",
            "car_color": "Purple",
            "car_model_year": 1999,
            "car_vin": "1GKUCEEFXAR746489",
            "price": "$1557.03",
            "availability": true
          },
          {
            "id": 197,
            "car": "Mazda",
            "car_model": "B-Series",
            "car_color": "Purple",
            "car_model_year": 1988,
            "car_vin": "WAUBH74F66N262669",
            "price": "$2185.20",
            "availability": true
          },
          {
            "id": 198,
            "car": "Hyundai",
            "car_model": "Tiburon",
            "car_color": "Yellow",
            "car_model_year": 2005,
            "car_vin": "WUADUAFG6BN965020",
            "price": "$3338.77",
            "availability": false
          },
          {
            "id": 199,
            "car": "Volvo",
            "car_model": "XC90",
            "car_color": "Aquamarine",
            "car_model_year": 2006,
            "car_vin": "1FTMF1CWXAK431986",
            "price": "$2319.11",
            "availability": true
          },
          {
            "id": 200,
            "car": "Mitsubishi",
            "car_model": "Eclipse",
            "car_color": "Goldenrod",
            "car_model_year": 2006,
            "car_vin": "WAUJT58E82A848968",
            "price": "$2047.61",
            "availability": true
          },
          {
            "id": 201,
            "car": "Bentley",
            "car_model": "Azure",
            "car_color": "Red",
            "car_model_year": 2008,
            "car_vin": "JN1CV6FE2AM723379",
            "price": "$3240.79",
            "availability": false
          },
          {
            "id": 202,
            "car": "Lexus",
            "car_model": "GX",
            "car_color": "Fuscia",
            "car_model_year": 2011,
            "car_vin": "5UXZW0C53BL599604",
            "price": "$2828.06",
            "availability": false
          },
          {
            "id": 203,
            "car": "Mazda",
            "car_model": "B2000",
            "car_color": "Maroon",
            "car_model_year": 1985,
            "car_vin": "1FMJK1G59EE460735",
            "price": "$1663.91",
            "availability": false
          },
          {
            "id": 204,
            "car": "Lexus",
            "car_model": "LS",
            "car_color": "Crimson",
            "car_model_year": 1989,
            "car_vin": "1FTWX3B5XAE893148",
            "price": "$2363.28",
            "availability": true
          },
          {
            "id": 205,
            "car": "MINI",
            "car_model": "Cooper Countryman",
            "car_color": "Pink",
            "car_model_year": 2012,
            "car_vin": "JH4KB2F60CC390724",
            "price": "$3064.07",
            "availability": false
          },
          {
            "id": 206,
            "car": "GMC",
            "car_model": "3500",
            "car_color": "Red",
            "car_model_year": 1996,
            "car_vin": "1N6AA0EC2FN474951",
            "price": "$2107.49",
            "availability": true
          },
          {
            "id": 207,
            "car": "Chevrolet",
            "car_model": "Express 2500",
            "car_color": "Red",
            "car_model_year": 1998,
            "car_vin": "KMHHT6KD4DU969307",
            "price": "$2779.89",
            "availability": false
          },
          {
            "id": 208,
            "car": "MINI",
            "car_model": "Cooper",
            "car_color": "Purple",
            "car_model_year": 2011,
            "car_vin": "1GKS1AE08BR497984",
            "price": "$3426.46",
            "availability": false
          },
          {
            "id": 209,
            "car": "Hyundai",
            "car_model": "Santa Fe",
            "car_color": "Orange",
            "car_model_year": 2003,
            "car_vin": "1FTWX3A52AE970435",
            "price": "$3118.32",
            "availability": false
          },
          {
            "id": 210,
            "car": "Ford",
            "car_model": "E-Series",
            "car_color": "Puce",
            "car_model_year": 1963,
            "car_vin": "5FNYF3H20CB161947",
            "price": "$1287.11",
            "availability": true
          },
          {
            "id": 211,
            "car": "Infiniti",
            "car_model": "J",
            "car_color": "Blue",
            "car_model_year": 1993,
            "car_vin": "SAJWA0FB9CL940298",
            "price": "$2636.97",
            "availability": false
          },
          {
            "id": 212,
            "car": "GMC",
            "car_model": "Suburban 1500",
            "car_color": "Khaki",
            "car_model_year": 1997,
            "car_vin": "WAUEH78E77A849678",
            "price": "$3291.60",
            "availability": true
          },
          {
            "id": 213,
            "car": "GMC",
            "car_model": "Sonoma",
            "car_color": "Purple",
            "car_model_year": 2002,
            "car_vin": "3D7TP2CT6BG535543",
            "price": "$2460.93",
            "availability": true
          },
          {
            "id": 214,
            "car": "Hyundai",
            "car_model": "Sonata",
            "car_color": "Maroon",
            "car_model_year": 2007,
            "car_vin": "2B3CJ5DT3AH337188",
            "price": "$2408.08",
            "availability": false
          },
          {
            "id": 215,
            "car": "Chevrolet",
            "car_model": "Express 1500",
            "car_color": "Yellow",
            "car_model_year": 1998,
            "car_vin": "1YVHZ8BA4A5780323",
            "price": "$1589.09",
            "availability": false
          },
          {
            "id": 216,
            "car": "Nissan",
            "car_model": "Rogue",
            "car_color": "Puce",
            "car_model_year": 2012,
            "car_vin": "1FADP5AU2EL186843",
            "price": "$1198.69",
            "availability": true
          },
          {
            "id": 217,
            "car": "Maserati",
            "car_model": "Spyder",
            "car_color": "Red",
            "car_model_year": 2004,
            "car_vin": "1GYS3GEF5DR689681",
            "price": "$1962.92",
            "availability": true
          },
          {
            "id": 218,
            "car": "Nissan",
            "car_model": "280ZX",
            "car_color": "Goldenrod",
            "car_model_year": 1979,
            "car_vin": "SAJWA4FB3CL799817",
            "price": "$3338.05",
            "availability": true
          },
          {
            "id": 219,
            "car": "GMC",
            "car_model": "Suburban 1500",
            "car_color": "Green",
            "car_model_year": 1997,
            "car_vin": "1D7RW2GK0AS160870",
            "price": "$2267.86",
            "availability": false
          },
          {
            "id": 220,
            "car": "Ford",
            "car_model": "E150",
            "car_color": "Aquamarine",
            "car_model_year": 2003,
            "car_vin": "1GD21ZCG2DZ215766",
            "price": "$1229.39",
            "availability": false
          },
          {
            "id": 221,
            "car": "Chevrolet",
            "car_model": "Corvette",
            "car_color": "Orange",
            "car_model_year": 1959,
            "car_vin": "WA1AV74L37D721381",
            "price": "$3349.67",
            "availability": true
          },
          {
            "id": 222,
            "car": "Dodge",
            "car_model": "Neon",
            "car_color": "Purple",
            "car_model_year": 2003,
            "car_vin": "WBA1F9C58FV598202",
            "price": "$1389.55",
            "availability": false
          },
          {
            "id": 223,
            "car": "Honda",
            "car_model": "Accord",
            "car_color": "Fuscia",
            "car_model_year": 1989,
            "car_vin": "5NPDH4AE5CH625545",
            "price": "$1850.43",
            "availability": true
          },
          {
            "id": 224,
            "car": "Volkswagen",
            "car_model": "rio",
            "car_color": "Puce",
            "car_model_year": 1998,
            "car_vin": "19UUA96289A984390",
            "price": "$3823.76",
            "availability": true
          },
          {
            "id": 225,
            "car": "Kia",
            "car_model": "Rio",
            "car_color": "Indigo",
            "car_model_year": 2006,
            "car_vin": "2G4WN58CX91225630",
            "price": "$2605.56",
            "availability": true
          },
          {
            "id": 226,
            "car": "Ford",
            "car_model": "Thunderbird",
            "car_color": "Purple",
            "car_model_year": 2002,
            "car_vin": "WAUAVAFA3AN970938",
            "price": "$3912.39",
            "availability": false
          },
          {
            "id": 227,
            "car": "Mercury",
            "car_model": "Capri",
            "car_color": "Goldenrod",
            "car_model_year": 1992,
            "car_vin": "3D73Y3HL5BG550854",
            "price": "$1500.17",
            "availability": true
          },
          {
            "id": 228,
            "car": "Dodge",
            "car_model": "Ram 3500",
            "car_color": "Indigo",
            "car_model_year": 1999,
            "car_vin": "5N1AA0NC3CN298762",
            "price": "$3810.69",
            "availability": false
          },
          {
            "id": 229,
            "car": "Nissan",
            "car_model": "Sentra",
            "car_color": "Puce",
            "car_model_year": 2001,
            "car_vin": "1G6YX36D995723276",
            "price": "$2272.23",
            "availability": true
          },
          {
            "id": 230,
            "car": "Toyota",
            "car_model": "Sienna",
            "car_color": "Aquamarine",
            "car_model_year": 2008,
            "car_vin": "1GYFC23269R070681",
            "price": "$3476.96",
            "availability": false
          },
          {
            "id": 231,
            "car": "Mercedes-Benz",
            "car_model": "E-Class",
            "car_color": "Maroon",
            "car_model_year": 1994,
            "car_vin": "1B3CB9HA3BD491461",
            "price": "$1470.18",
            "availability": false
          },
          {
            "id": 232,
            "car": "Audi",
            "car_model": "riolet",
            "car_color": "Crimson",
            "car_model_year": 1994,
            "car_vin": "1D7RB1GP2BS944504",
            "price": "$2531.25",
            "availability": false
          },
          {
            "id": 233,
            "car": "Ford",
            "car_model": "Freestyle",
            "car_color": "Puce",
            "car_model_year": 2006,
            "car_vin": "1C6RD7LP4CS845737",
            "price": "$1234.29",
            "availability": false
          },
          {
            "id": 234,
            "car": "Jaguar",
            "car_model": "XF",
            "car_color": "Yellow",
            "car_model_year": 2011,
            "car_vin": "SCBBR9ZA3BC185583",
            "price": "$3593.33",
            "availability": true
          },
          {
            "id": 235,
            "car": "Mercury",
            "car_model": "Capri",
            "car_color": "Mauv",
            "car_model_year": 1993,
            "car_vin": "WA1TFAFL2EA099712",
            "price": "$1809.69",
            "availability": true
          },
          {
            "id": 236,
            "car": "Eagle",
            "car_model": "Talon",
            "car_color": "Green",
            "car_model_year": 1997,
            "car_vin": "WDDGF4HB6CA346682",
            "price": "$1379.21",
            "availability": true
          },
          {
            "id": 237,
            "car": "Mercedes-Benz",
            "car_model": "E-Class",
            "car_color": "Yellow",
            "car_model_year": 1999,
            "car_vin": "SCFHDDAT4EG717640",
            "price": "$2821.03",
            "availability": true
          },
          {
            "id": 238,
            "car": "Hyundai",
            "car_model": "Santa Fe",
            "car_color": "Goldenrod",
            "car_model_year": 2001,
            "car_vin": "WAUJC68E25A513781",
            "price": "$3508.77",
            "availability": false
          },
          {
            "id": 239,
            "car": "Hyundai",
            "car_model": "Genesis",
            "car_color": "Aquamarine",
            "car_model_year": 2011,
            "car_vin": "WA1EV74L77D311071",
            "price": "$2412.51",
            "availability": false
          },
          {
            "id": 240,
            "car": "Acura",
            "car_model": "Integra",
            "car_color": "Pink",
            "car_model_year": 1996,
            "car_vin": "WAUJT68E73A447354",
            "price": "$3854.08",
            "availability": false
          },
          {
            "id": 241,
            "car": "Infiniti",
            "car_model": "M",
            "car_color": "Blue",
            "car_model_year": 2008,
            "car_vin": "1GD21XEG5FZ705073",
            "price": "$2338.52",
            "availability": false
          },
          {
            "id": 242,
            "car": "Ferrari",
            "car_model": "F430",
            "car_color": "Maroon",
            "car_model_year": 2009,
            "car_vin": "WBASN4C54CC827721",
            "price": "$2967.63",
            "availability": false
          },
          {
            "id": 243,
            "car": "Volkswagen",
            "car_model": "Fox",
            "car_color": "Turquoise",
            "car_model_year": 1991,
            "car_vin": "1G6DE5EY8B0732820",
            "price": "$1208.13",
            "availability": false
          },
          {
            "id": 244,
            "car": "Suzuki",
            "car_model": "Grand Vitara",
            "car_color": "Red",
            "car_model_year": 2001,
            "car_vin": "WUADUAFG8F7528808",
            "price": "$3471.29",
            "availability": true
          },
          {
            "id": 245,
            "car": "Ford",
            "car_model": "Focus",
            "car_color": "Goldenrod",
            "car_model_year": 2003,
            "car_vin": "1G6DA67VX90962230",
            "price": "$2815.94",
            "availability": false
          },
          {
            "id": 246,
            "car": "Chevrolet",
            "car_model": "Sportvan G20",
            "car_color": "Violet",
            "car_model_year": 1992,
            "car_vin": "1D7CW3BK3AS456923",
            "price": "$3050.69",
            "availability": true
          },
          {
            "id": 247,
            "car": "Volkswagen",
            "car_model": "Jetta III",
            "car_color": "Maroon",
            "car_model_year": 1994,
            "car_vin": "1G6AG5RXXE0881037",
            "price": "$2643.03",
            "availability": true
          },
          {
            "id": 248,
            "car": "Chevrolet",
            "car_model": "Cobalt",
            "car_color": "Fuscia",
            "car_model_year": 2010,
            "car_vin": "3G5DA03L76S356054",
            "price": "$3677.11",
            "availability": false
          },
          {
            "id": 249,
            "car": "Ford",
            "car_model": "Econoline E150",
            "car_color": "Indigo",
            "car_model_year": 2002,
            "car_vin": "1B3CB5HA2AD785473",
            "price": "$1848.09",
            "availability": false
          },
          {
            "id": 250,
            "car": "Chevrolet",
            "car_model": "Corvette",
            "car_color": "Orange",
            "car_model_year": 1962,
            "car_vin": "1G6DK5E34C0585605",
            "price": "$3493.26",
            "availability": false
          },
          {
            "id": 251,
            "car": "Toyota",
            "car_model": "Previa",
            "car_color": "Indigo",
            "car_model_year": 1995,
            "car_vin": "JN1CY0AP8AM325946",
            "price": "$1501.95",
            "availability": true
          },
          {
            "id": 252,
            "car": "Mercury",
            "car_model": "Grand Marquis",
            "car_color": "Crimson",
            "car_model_year": 2008,
            "car_vin": "2G61S5S30F9804643",
            "price": "$2115.91",
            "availability": true
          },
          {
            "id": 253,
            "car": "Oldsmobile",
            "car_model": "Achieva",
            "car_color": "Orange",
            "car_model_year": 1992,
            "car_vin": "JN8AZ1FY0BW369748",
            "price": "$2372.44",
            "availability": false
          },
          {
            "id": 254,
            "car": "Honda",
            "car_model": "del Sol",
            "car_color": "Orange",
            "car_model_year": 1994,
            "car_vin": "JN1AZ4EH8AM121663",
            "price": "$3485.49",
            "availability": false
          },
          {
            "id": 255,
            "car": "Ford",
            "car_model": "Mustang",
            "car_color": "Green",
            "car_model_year": 1971,
            "car_vin": "KMHGH4JF2BU053095",
            "price": "$1321.76",
            "availability": false
          },
          {
            "id": 256,
            "car": "Mitsubishi",
            "car_model": "Mirage",
            "car_color": "Puce",
            "car_model_year": 2002,
            "car_vin": "1N6AA0EK0FN069632",
            "price": "$1532.99",
            "availability": false
          },
          {
            "id": 257,
            "car": "Hyundai",
            "car_model": "Santa Fe",
            "car_color": "Violet",
            "car_model_year": 2008,
            "car_vin": "YV1672MS8B2319757",
            "price": "$1142.26",
            "availability": false
          },
          {
            "id": 258,
            "car": "Lexus",
            "car_model": "IS",
            "car_color": "Indigo",
            "car_model_year": 2003,
            "car_vin": "1FADP5BU0DL626166",
            "price": "$2059.89",
            "availability": true
          },
          {
            "id": 259,
            "car": "Chevrolet",
            "car_model": "S10 Blazer",
            "car_color": "Aquamarine",
            "car_model_year": 1992,
            "car_vin": "WBAEH73485B148301",
            "price": "$2718.41",
            "availability": false
          },
          {
            "id": 260,
            "car": "Toyota",
            "car_model": "Camry",
            "car_color": "Khaki",
            "car_model_year": 2007,
            "car_vin": "1GYFK43549R109048",
            "price": "$1090.08",
            "availability": true
          },
          {
            "id": 261,
            "car": "Ford",
            "car_model": "E-Series",
            "car_color": "Purple",
            "car_model_year": 1989,
            "car_vin": "1D7RV1CP3BS221306",
            "price": "$2331.35",
            "availability": true
          },
          {
            "id": 262,
            "car": "Subaru",
            "car_model": "Leone",
            "car_color": "Puce",
            "car_model_year": 1988,
            "car_vin": "JH4CU26699C818894",
            "price": "$2765.91",
            "availability": false
          },
          {
            "id": 263,
            "car": "Pontiac",
            "car_model": "Aztek",
            "car_color": "Indigo",
            "car_model_year": 2005,
            "car_vin": "SALSF2D41AA720363",
            "price": "$1618.11",
            "availability": true
          },
          {
            "id": 264,
            "car": "Jaguar",
            "car_model": "XJ Series",
            "car_color": "Violet",
            "car_model_year": 2000,
            "car_vin": "1FBNE3BL5AD788043",
            "price": "$1919.09",
            "availability": false
          },
          {
            "id": 265,
            "car": "Mitsubishi",
            "car_model": "Pajero",
            "car_color": "Yellow",
            "car_model_year": 1993,
            "car_vin": "JTJHY7AX0D4303355",
            "price": "$1675.32",
            "availability": true
          },
          {
            "id": 266,
            "car": "Volkswagen",
            "car_model": "New Beetle",
            "car_color": "Indigo",
            "car_model_year": 2003,
            "car_vin": "JN1BJ0HR9FM648305",
            "price": "$1506.06",
            "availability": true
          },
          {
            "id": 267,
            "car": "Cadillac",
            "car_model": "CTS-V",
            "car_color": "Turquoise",
            "car_model_year": 2009,
            "car_vin": "1G6DJ577690723608",
            "price": "$3795.04",
            "availability": true
          },
          {
            "id": 268,
            "car": "Mitsubishi",
            "car_model": "Montero",
            "car_color": "Pink",
            "car_model_year": 1995,
            "car_vin": "3D7TT2CTXAG738722",
            "price": "$2974.31",
            "availability": false
          },
          {
            "id": 269,
            "car": "Nissan",
            "car_model": "Quest",
            "car_color": "Turquoise",
            "car_model_year": 1996,
            "car_vin": "WAUNF78P76A172704",
            "price": "$3252.47",
            "availability": false
          },
          {
            "id": 270,
            "car": "Chrysler",
            "car_model": "Imperial",
            "car_color": "Aquamarine",
            "car_model_year": 1926,
            "car_vin": "WUAGL78E16A303356",
            "price": "$2108.16",
            "availability": false
          },
          {
            "id": 271,
            "car": "BMW",
            "car_model": "M6",
            "car_color": "Teal",
            "car_model_year": 2006,
            "car_vin": "5N1BA0NCXFN462131",
            "price": "$3688.12",
            "availability": true
          },
          {
            "id": 272,
            "car": "MINI",
            "car_model": "Clubman",
            "car_color": "Violet",
            "car_model_year": 2009,
            "car_vin": "WAUHF98P77A762816",
            "price": "$1702.06",
            "availability": false
          },
          {
            "id": 273,
            "car": "Suzuki",
            "car_model": "Daewoo Lacetti",
            "car_color": "Maroon",
            "car_model_year": 2005,
            "car_vin": "WBALL5C55CJ685519",
            "price": "$1721.14",
            "availability": true
          },
          {
            "id": 274,
            "car": "Nissan",
            "car_model": "350Z",
            "car_color": "Blue",
            "car_model_year": 2004,
            "car_vin": "1C4AJWAG3FL693573",
            "price": "$1604.08",
            "availability": false
          },
          {
            "id": 275,
            "car": "Ford",
            "car_model": "Bronco",
            "car_color": "Indigo",
            "car_model_year": 1991,
            "car_vin": "WAUKF98E66A806758",
            "price": "$3136.03",
            "availability": true
          },
          {
            "id": 276,
            "car": "Mitsubishi",
            "car_model": "Galant",
            "car_color": "Fuscia",
            "car_model_year": 1985,
            "car_vin": "5N1AR2MM9EC793304",
            "price": "$2190.49",
            "availability": false
          },
          {
            "id": 277,
            "car": "Mazda",
            "car_model": "B-Series Plus",
            "car_color": "Indigo",
            "car_model_year": 1997,
            "car_vin": "WBA3C1C59CF781536",
            "price": "$1593.08",
            "availability": false
          },
          {
            "id": 278,
            "car": "Mazda",
            "car_model": "Miata MX-5",
            "car_color": "Indigo",
            "car_model_year": 2000,
            "car_vin": "SALWR2TF8FA313966",
            "price": "$3341.48",
            "availability": true
          },
          {
            "id": 279,
            "car": "Saab",
            "car_model": "9000",
            "car_color": "Yellow",
            "car_model_year": 1992,
            "car_vin": "1G6D25EDXB0956659",
            "price": "$1255.10",
            "availability": true
          },
          {
            "id": 280,
            "car": "Mitsubishi",
            "car_model": "Mirage",
            "car_color": "Goldenrod",
            "car_model_year": 1989,
            "car_vin": "WA1VMAFP1FA611009",
            "price": "$3806.68",
            "availability": false
          },
          {
            "id": 281,
            "car": "Oldsmobile",
            "car_model": "88",
            "car_color": "Violet",
            "car_model_year": 1998,
            "car_vin": "WAUEL94F35N542734",
            "price": "$3772.03",
            "availability": true
          },
          {
            "id": 282,
            "car": "Volkswagen",
            "car_model": "R32",
            "car_color": "Teal",
            "car_model_year": 2008,
            "car_vin": "JTEBU5JR3F5091926",
            "price": "$3495.75",
            "availability": false
          },
          {
            "id": 283,
            "car": "Mitsubishi",
            "car_model": "Lancer Evolution",
            "car_color": "Red",
            "car_model_year": 2011,
            "car_vin": "WBSPM9C54BE453096",
            "price": "$3732.64",
            "availability": false
          },
          {
            "id": 284,
            "car": "Hyundai",
            "car_model": "Santa Fe",
            "car_color": "Red",
            "car_model_year": 2004,
            "car_vin": "1GYUKDEF6AR282684",
            "price": "$2622.27",
            "availability": true
          },
          {
            "id": 285,
            "car": "Mercury",
            "car_model": "Grand Marquis",
            "car_color": "Puce",
            "car_model_year": 1997,
            "car_vin": "WAUMFAFL1DA130177",
            "price": "$1545.18",
            "availability": false
          },
          {
            "id": 286,
            "car": "Buick",
            "car_model": "Skylark",
            "car_color": "Green",
            "car_model_year": 1997,
            "car_vin": "1YVHZ8BH8A5124042",
            "price": "$1479.82",
            "availability": true
          },
          {
            "id": 287,
            "car": "Mercury",
            "car_model": "Grand Marquis",
            "car_color": "Green",
            "car_model_year": 1992,
            "car_vin": "WP1AA2AP5AL064197",
            "price": "$2776.44",
            "availability": true
          },
          {
            "id": 288,
            "car": "Honda",
            "car_model": "Civic",
            "car_color": "Khaki",
            "car_model_year": 1995,
            "car_vin": "3GYFNAE33FS980775",
            "price": "$3937.78",
            "availability": true
          },
          {
            "id": 289,
            "car": "Mercury",
            "car_model": "Monterey",
            "car_color": "Green",
            "car_model_year": 2006,
            "car_vin": "WAUSH98E67A877955",
            "price": "$2052.40",
            "availability": true
          },
          {
            "id": 290,
            "car": "Porsche",
            "car_model": "Boxster",
            "car_color": "Maroon",
            "car_model_year": 2005,
            "car_vin": "19UYA424X3A241877",
            "price": "$2776.98",
            "availability": false
          },
          {
            "id": 291,
            "car": "Mercedes-Benz",
            "car_model": "E-Class",
            "car_color": "Orange",
            "car_model_year": 1992,
            "car_vin": "WA1DGAFP9FA346343",
            "price": "$3748.04",
            "availability": false
          },
          {
            "id": 292,
            "car": "Chevrolet",
            "car_model": "Suburban",
            "car_color": "Turquoise",
            "car_model_year": 2009,
            "car_vin": "WAUAF98E86A680799",
            "price": "$2827.48",
            "availability": false
          },
          {
            "id": 293,
            "car": "Buick",
            "car_model": "Somerset",
            "car_color": "Turquoise",
            "car_model_year": 1987,
            "car_vin": "1B3CB9HAXAD306210",
            "price": "$2691.30",
            "availability": false
          },
          {
            "id": 294,
            "car": "Mazda",
            "car_model": "Mazdaspeed6",
            "car_color": "Aquamarine",
            "car_model_year": 2007,
            "car_vin": "SALFR2BN9BH225387",
            "price": "$3213.47",
            "availability": true
          },
          {
            "id": 295,
            "car": "Dodge",
            "car_model": "Ram 2500",
            "car_color": "Red",
            "car_model_year": 2007,
            "car_vin": "5FRYD3H94GB900566",
            "price": "$1311.67",
            "availability": true
          },
          {
            "id": 296,
            "car": "Infiniti",
            "car_model": "QX",
            "car_color": "Mauv",
            "car_model_year": 2007,
            "car_vin": "1N6AA0EC7DN678707",
            "price": "$3080.42",
            "availability": false
          },
          {
            "id": 297,
            "car": "Mercedes-Benz",
            "car_model": "CLK-Class",
            "car_color": "Maroon",
            "car_model_year": 2005,
            "car_vin": "SCBLE47K99C600351",
            "price": "$1085.72",
            "availability": true
          },
          {
            "id": 298,
            "car": "Oldsmobile",
            "car_model": "Bravada",
            "car_color": "Puce",
            "car_model_year": 1992,
            "car_vin": "1G6DN57S040610089",
            "price": "$3290.13",
            "availability": false
          },
          {
            "id": 299,
            "car": "Porsche",
            "car_model": "968",
            "car_color": "Red",
            "car_model_year": 1994,
            "car_vin": "1G6AU5S83E0401707",
            "price": "$1595.18",
            "availability": true
          },
          {
            "id": 300,
            "car": "Audi",
            "car_model": "A6",
            "car_color": "Puce",
            "car_model_year": 1999,
            "car_vin": "3GYVKNEF0AG024543",
            "price": "$2561.31",
            "availability": false
          },
          {
            "id": 301,
            "car": "Mercedes-Benz",
            "car_model": "W201",
            "car_color": "Orange",
            "car_model_year": 1991,
            "car_vin": "KMHEC4A49DA809241",
            "price": "$2322.73",
            "availability": true
          },
          {
            "id": 302,
            "car": "Dodge",
            "car_model": "Ram 2500",
            "car_color": "Turquoise",
            "car_model_year": 2000,
            "car_vin": "1G4GE5G32FF413732",
            "price": "$3779.33",
            "availability": true
          },
          {
            "id": 303,
            "car": "Dodge",
            "car_model": "Ram 1500",
            "car_color": "Puce",
            "car_model_year": 2006,
            "car_vin": "1G6DV5EP3B0292531",
            "price": "$1273.96",
            "availability": false
          },
          {
            "id": 304,
            "car": "Pontiac",
            "car_model": "Grand Prix",
            "car_color": "Violet",
            "car_model_year": 2003,
            "car_vin": "WUATNAFG1CN657330",
            "price": "$3874.65",
            "availability": true
          },
          {
            "id": 305,
            "car": "Ford",
            "car_model": "Expedition EL",
            "car_color": "Puce",
            "car_model_year": 2011,
            "car_vin": "WBSCL93411L038854",
            "price": "$1879.59",
            "availability": true
          },
          {
            "id": 306,
            "car": "Ford",
            "car_model": "Taurus",
            "car_color": "Aquamarine",
            "car_model_year": 2012,
            "car_vin": "3VW1K7AJ1CM036499",
            "price": "$2132.02",
            "availability": true
          },
          {
            "id": 307,
            "car": "Mercedes-Benz",
            "car_model": "CL-Class",
            "car_color": "Violet",
            "car_model_year": 2002,
            "car_vin": "5TDBK3EH0CS327762",
            "price": "$3242.07",
            "availability": false
          },
          {
            "id": 308,
            "car": "GMC",
            "car_model": "Envoy",
            "car_color": "Puce",
            "car_model_year": 2006,
            "car_vin": "2HNYD18644H824746",
            "price": "$1184.98",
            "availability": false
          },
          {
            "id": 309,
            "car": "Honda",
            "car_model": "Crosstour",
            "car_color": "Red",
            "car_model_year": 2012,
            "car_vin": "KNAFK4A65F5958901",
            "price": "$2224.35",
            "availability": true
          },
          {
            "id": 310,
            "car": "Porsche",
            "car_model": "928",
            "car_color": "Crimson",
            "car_model_year": 1988,
            "car_vin": "1FTMF1CW4AK006702",
            "price": "$2614.80",
            "availability": false
          },
          {
            "id": 311,
            "car": "Cadillac",
            "car_model": "Escalade EXT",
            "car_color": "Puce",
            "car_model_year": 2007,
            "car_vin": "5FPYK1F29BB593560",
            "price": "$2462.10",
            "availability": true
          },
          {
            "id": 312,
            "car": "Pontiac",
            "car_model": "Grand Prix",
            "car_color": "Goldenrod",
            "car_model_year": 1995,
            "car_vin": "5N1AN0NU1AC278435",
            "price": "$1966.80",
            "availability": true
          },
          {
            "id": 313,
            "car": "Mazda",
            "car_model": "Millenia",
            "car_color": "Yellow",
            "car_model_year": 2000,
            "car_vin": "SCBBB7ZH0DC996802",
            "price": "$3187.99",
            "availability": false
          },
          {
            "id": 314,
            "car": "Infiniti",
            "car_model": "G",
            "car_color": "Yellow",
            "car_model_year": 1994,
            "car_vin": "WBA3K5C59EF153019",
            "price": "$1403.23",
            "availability": false
          },
          {
            "id": 315,
            "car": "Mitsubishi",
            "car_model": "RVR",
            "car_color": "Red",
            "car_model_year": 1992,
            "car_vin": "1G6AE1RX1F0176885",
            "price": "$2003.75",
            "availability": false
          },
          {
            "id": 316,
            "car": "Suzuki",
            "car_model": "Aerio",
            "car_color": "Yellow",
            "car_model_year": 2006,
            "car_vin": "WBSDE93402B888075",
            "price": "$3856.61",
            "availability": false
          },
          {
            "id": 317,
            "car": "Audi",
            "car_model": "Q5",
            "car_color": "Maroon",
            "car_model_year": 2012,
            "car_vin": "JTEBU5JR0B5826887",
            "price": "$3952.84",
            "availability": false
          },
          {
            "id": 318,
            "car": "Mercury",
            "car_model": "Lynx",
            "car_color": "Khaki",
            "car_model_year": 1987,
            "car_vin": "NM0AE8F74E1592137",
            "price": "$3207.01",
            "availability": true
          },
          {
            "id": 319,
            "car": "Audi",
            "car_model": "R8",
            "car_color": "Purple",
            "car_model_year": 2012,
            "car_vin": "1N6AA0CC8CN145041",
            "price": "$1013.27",
            "availability": true
          },
          {
            "id": 320,
            "car": "Volkswagen",
            "car_model": "Jetta",
            "car_color": "Maroon",
            "car_model_year": 2011,
            "car_vin": "WBAEV53453K254201",
            "price": "$1808.46",
            "availability": true
          },
          {
            "id": 321,
            "car": "Toyota",
            "car_model": "4Runner",
            "car_color": "Violet",
            "car_model_year": 1999,
            "car_vin": "1N6AD0CU5BC587933",
            "price": "$1033.40",
            "availability": true
          },
          {
            "id": 322,
            "car": "Oldsmobile",
            "car_model": "Regency",
            "car_color": "Fuscia",
            "car_model_year": 1998,
            "car_vin": "1G4HP57M99U675450",
            "price": "$2206.53",
            "availability": true
          },
          {
            "id": 323,
            "car": "Mercedes-Benz",
            "car_model": "E-Class",
            "car_color": "Violet",
            "car_model_year": 2001,
            "car_vin": "1GYS4DEF7DR903503",
            "price": "$2104.02",
            "availability": false
          },
          {
            "id": 324,
            "car": "Volvo",
            "car_model": "C70",
            "car_color": "Maroon",
            "car_model_year": 2003,
            "car_vin": "3VW517AT5EM111228",
            "price": "$1544.20",
            "availability": true
          },
          {
            "id": 325,
            "car": "Chevrolet",
            "car_model": "Camaro",
            "car_color": "Orange",
            "car_model_year": 1999,
            "car_vin": "WDDHF0EB5FB819553",
            "price": "$2347.95",
            "availability": false
          },
          {
            "id": 326,
            "car": "Mercury",
            "car_model": "Mystique",
            "car_color": "Violet",
            "car_model_year": 1995,
            "car_vin": "WAUBVAFAXAN442513",
            "price": "$1564.08",
            "availability": false
          },
          {
            "id": 327,
            "car": "Kia",
            "car_model": "Optima",
            "car_color": "Violet",
            "car_model_year": 2010,
            "car_vin": "1G6DM1E34D0599251",
            "price": "$2000.06",
            "availability": true
          },
          {
            "id": 328,
            "car": "Mercedes-Benz",
            "car_model": "C-Class",
            "car_color": "Turquoise",
            "car_model_year": 1996,
            "car_vin": "SCBFR7ZA4CC313448",
            "price": "$1458.05",
            "availability": true
          },
          {
            "id": 329,
            "car": "Volkswagen",
            "car_model": "Passat",
            "car_color": "Puce",
            "car_model_year": 1987,
            "car_vin": "1GYS4RKJ3FR592211",
            "price": "$1448.39",
            "availability": true
          },
          {
            "id": 330,
            "car": "Ford",
            "car_model": "Crown Victoria",
            "car_color": "Puce",
            "car_model_year": 1996,
            "car_vin": "2B3CJ7DW1AH195011",
            "price": "$3503.57",
            "availability": false
          },
          {
            "id": 331,
            "car": "Mercedes-Benz",
            "car_model": "SL-Class",
            "car_color": "Orange",
            "car_model_year": 2004,
            "car_vin": "WDDPK4HA3DF417621",
            "price": "$1050.51",
            "availability": true
          },
          {
            "id": 332,
            "car": "Volvo",
            "car_model": "V70",
            "car_color": "Crimson",
            "car_model_year": 2000,
            "car_vin": "KMHDB8AE1BU199605",
            "price": "$2867.28",
            "availability": true
          },
          {
            "id": 333,
            "car": "Mercedes-Benz",
            "car_model": "CL-Class",
            "car_color": "Green",
            "car_model_year": 2010,
            "car_vin": "WBSDX9C51DE172502",
            "price": "$2769.87",
            "availability": false
          },
          {
            "id": 334,
            "car": "Chevrolet",
            "car_model": "S10",
            "car_color": "Orange",
            "car_model_year": 1999,
            "car_vin": "3D73Y3CLXBG376464",
            "price": "$1559.48",
            "availability": true
          },
          {
            "id": 335,
            "car": "Dodge",
            "car_model": "Ram",
            "car_color": "Crimson",
            "car_model_year": 2007,
            "car_vin": "1D7RE3BK6AS803920",
            "price": "$3103.26",
            "availability": false
          },
          {
            "id": 336,
            "car": "Kia",
            "car_model": "Sedona",
            "car_color": "Purple",
            "car_model_year": 2006,
            "car_vin": "WAUKH78E77A077282",
            "price": "$2145.87",
            "availability": true
          },
          {
            "id": 337,
            "car": "Acura",
            "car_model": "TSX",
            "car_color": "Red",
            "car_model_year": 2008,
            "car_vin": "WAUDV94F37N731117",
            "price": "$1843.50",
            "availability": true
          },
          {
            "id": 338,
            "car": "Mazda",
            "car_model": "929",
            "car_color": "Yellow",
            "car_model_year": 1993,
            "car_vin": "WAUGL78E26A590085",
            "price": "$1913.97",
            "availability": true
          },
          {
            "id": 339,
            "car": "Scion",
            "car_model": "xA",
            "car_color": "Aquamarine",
            "car_model_year": 2004,
            "car_vin": "SCFEBBDL4EG301855",
            "price": "$1682.57",
            "availability": false
          },
          {
            "id": 340,
            "car": "Nissan",
            "car_model": "Versa",
            "car_color": "Pink",
            "car_model_year": 2011,
            "car_vin": "4T1BF1FK6FU229821",
            "price": "$3555.75",
            "availability": false
          },
          {
            "id": 341,
            "car": "Suzuki",
            "car_model": "Reno",
            "car_color": "Khaki",
            "car_model_year": 2007,
            "car_vin": "1GYS4TKJ8FR970648",
            "price": "$2209.07",
            "availability": true
          },
          {
            "id": 342,
            "car": "Cadillac",
            "car_model": "Catera",
            "car_color": "Aquamarine",
            "car_model_year": 1998,
            "car_vin": "1G6AJ5SX1E0392120",
            "price": "$2689.13",
            "availability": true
          },
          {
            "id": 343,
            "car": "Lexus",
            "car_model": "LX",
            "car_color": "Green",
            "car_model_year": 1997,
            "car_vin": "1GD020CG3DZ560725",
            "price": "$3753.67",
            "availability": true
          },
          {
            "id": 344,
            "car": "Chevrolet",
            "car_model": "S10 Blazer",
            "car_color": "Aquamarine",
            "car_model_year": 1993,
            "car_vin": "JM1GJ1T50F1926989",
            "price": "$2273.23",
            "availability": false
          },
          {
            "id": 345,
            "car": "Nissan",
            "car_model": "Armada",
            "car_color": "Maroon",
            "car_model_year": 2008,
            "car_vin": "19UUA65504A893200",
            "price": "$1096.53",
            "availability": false
          },
          {
            "id": 346,
            "car": "Lexus",
            "car_model": "ES",
            "car_color": "Aquamarine",
            "car_model_year": 2008,
            "car_vin": "WAUJT68E82A197363",
            "price": "$3948.23",
            "availability": false
          },
          {
            "id": 347,
            "car": "Ford",
            "car_model": "Taurus",
            "car_color": "Red",
            "car_model_year": 2010,
            "car_vin": "WAUEKBFBXAN413792",
            "price": "$3726.62",
            "availability": false
          },
          {
            "id": 348,
            "car": "Toyota",
            "car_model": "Corolla",
            "car_color": "Purple",
            "car_model_year": 1993,
            "car_vin": "KNAFX6A82F5618006",
            "price": "$1742.24",
            "availability": true
          },
          {
            "id": 349,
            "car": "Kia",
            "car_model": "Rio",
            "car_color": "Aquamarine",
            "car_model_year": 2013,
            "car_vin": "SCFAD02A86G559263",
            "price": "$1171.66",
            "availability": false
          },
          {
            "id": 350,
            "car": "Mercedes-Benz",
            "car_model": "M-Class",
            "car_color": "Crimson",
            "car_model_year": 2006,
            "car_vin": "1FMJK1H52EE380143",
            "price": "$3051.61",
            "availability": false
          },
          {
            "id": 351,
            "car": "Audi",
            "car_model": "100",
            "car_color": "Crimson",
            "car_model_year": 1994,
            "car_vin": "1G4HH5E9XAU064133",
            "price": "$2458.88",
            "availability": false
          },
          {
            "id": 352,
            "car": "Mitsubishi",
            "car_model": "Galant",
            "car_color": "Mauv",
            "car_model_year": 2001,
            "car_vin": "JN8AS5MTXBW891886",
            "price": "$3388.18",
            "availability": true
          },
          {
            "id": 353,
            "car": "Audi",
            "car_model": "S5",
            "car_color": "Blue",
            "car_model_year": 2010,
            "car_vin": "1GYS3KEF3BR721723",
            "price": "$3360.96",
            "availability": true
          },
          {
            "id": 354,
            "car": "GMC",
            "car_model": "Savana 1500",
            "car_color": "Mauv",
            "car_model_year": 2012,
            "car_vin": "5TDBW5G18BS498614",
            "price": "$1963.54",
            "availability": false
          },
          {
            "id": 355,
            "car": "Saab",
            "car_model": "9-7X",
            "car_color": "Goldenrod",
            "car_model_year": 2006,
            "car_vin": "2T1BURHE8FC155573",
            "price": "$3438.00",
            "availability": true
          },
          {
            "id": 356,
            "car": "Chevrolet",
            "car_model": "Tahoe",
            "car_color": "Pink",
            "car_model_year": 2013,
            "car_vin": "ML32A3HJ3EH199108",
            "price": "$2120.23",
            "availability": true
          },
          {
            "id": 357,
            "car": "Chevrolet",
            "car_model": "Lumina",
            "car_color": "Green",
            "car_model_year": 1998,
            "car_vin": "19UUA9F20CA555445",
            "price": "$3575.78",
            "availability": false
          },
          {
            "id": 358,
            "car": "Land Rover",
            "car_model": "Discovery",
            "car_color": "Turquoise",
            "car_model_year": 2005,
            "car_vin": "1C3CDFAA8DD239164",
            "price": "$2047.56",
            "availability": true
          },
          {
            "id": 359,
            "car": "Ford",
            "car_model": "Laser",
            "car_color": "Yellow",
            "car_model_year": 1987,
            "car_vin": "1G4CW54KX44443643",
            "price": "$3403.88",
            "availability": true
          },
          {
            "id": 360,
            "car": "Land Rover",
            "car_model": "Discovery",
            "car_color": "Orange",
            "car_model_year": 2011,
            "car_vin": "WBANU535X8C362519",
            "price": "$1170.32",
            "availability": true
          },
          {
            "id": 361,
            "car": "Ford",
            "car_model": "Escape",
            "car_color": "Indigo",
            "car_model_year": 2001,
            "car_vin": "3C3CFFFH4ET646572",
            "price": "$1279.96",
            "availability": false
          },
          {
            "id": 362,
            "car": "Dodge",
            "car_model": "Neon",
            "car_color": "Pink",
            "car_model_year": 2001,
            "car_vin": "1D7RW3BK5AS739902",
            "price": "$3640.32",
            "availability": false
          },
          {
            "id": 363,
            "car": "Mercedes-Benz",
            "car_model": "S-Class",
            "car_color": "Puce",
            "car_model_year": 2006,
            "car_vin": "1G6DM8E33D0158719",
            "price": "$3473.31",
            "availability": true
          },
          {
            "id": 364,
            "car": "Ford",
            "car_model": "Flex",
            "car_color": "Turquoise",
            "car_model_year": 2013,
            "car_vin": "2C3CDXCT4FH891256",
            "price": "$3403.62",
            "availability": true
          },
          {
            "id": 365,
            "car": "Toyota",
            "car_model": "RAV4",
            "car_color": "Crimson",
            "car_model_year": 2012,
            "car_vin": "WAUVC68E43A854520",
            "price": "$3542.16",
            "availability": false
          },
          {
            "id": 366,
            "car": "Audi",
            "car_model": "A6",
            "car_color": "Orange",
            "car_model_year": 2005,
            "car_vin": "JH4KC1F71EC498918",
            "price": "$2277.69",
            "availability": false
          },
          {
            "id": 367,
            "car": "Lexus",
            "car_model": "LS Hybrid",
            "car_color": "Violet",
            "car_model_year": 2012,
            "car_vin": "1FTWW3DYXAE590784",
            "price": "$3298.59",
            "availability": false
          },
          {
            "id": 368,
            "car": "Chrysler",
            "car_model": "Town & Country",
            "car_color": "Crimson",
            "car_model_year": 2002,
            "car_vin": "2G4GT5GXXE9598662",
            "price": "$1774.54",
            "availability": false
          },
          {
            "id": 369,
            "car": "Ford",
            "car_model": "Mustang",
            "car_color": "Turquoise",
            "car_model_year": 2003,
            "car_vin": "WAUCFAFH2FN157357",
            "price": "$3731.56",
            "availability": true
          },
          {
            "id": 370,
            "car": "Chevrolet",
            "car_model": "Corvette",
            "car_color": "Purple",
            "car_model_year": 1957,
            "car_vin": "5YMGZ0C50CL331358",
            "price": "$2098.97",
            "availability": true
          },
          {
            "id": 371,
            "car": "Dodge",
            "car_model": "Avenger",
            "car_color": "Indigo",
            "car_model_year": 1998,
            "car_vin": "WDDHF8JB3DA910263",
            "price": "$1685.25",
            "availability": true
          },
          {
            "id": 372,
            "car": "Ford",
            "car_model": "E-Series",
            "car_color": "Goldenrod",
            "car_model_year": 1994,
            "car_vin": "3VW217AU6FM383333",
            "price": "$2123.27",
            "availability": false
          },
          {
            "id": 373,
            "car": "Lincoln",
            "car_model": "Mark LT",
            "car_color": "Aquamarine",
            "car_model_year": 2008,
            "car_vin": "137ZA83311E050406",
            "price": "$1181.68",
            "availability": false
          },
          {
            "id": 374,
            "car": "Maserati",
            "car_model": "Gran Sport",
            "car_color": "Crimson",
            "car_model_year": 2005,
            "car_vin": "5TFCW5F10CX473207",
            "price": "$2517.76",
            "availability": false
          },
          {
            "id": 375,
            "car": "Lincoln",
            "car_model": "Navigator",
            "car_color": "Pink",
            "car_model_year": 2012,
            "car_vin": "WAUDH98E86A356033",
            "price": "$2166.95",
            "availability": false
          },
          {
            "id": 376,
            "car": "Chevrolet",
            "car_model": "Express 3500",
            "car_color": "Mauv",
            "car_model_year": 1996,
            "car_vin": "1J4AA2D19AL443516",
            "price": "$2485.13",
            "availability": false
          },
          {
            "id": 377,
            "car": "Buick",
            "car_model": "Rendezvous",
            "car_color": "Violet",
            "car_model_year": 2004,
            "car_vin": "5N1AN0NU3FN032109",
            "price": "$2449.81",
            "availability": true
          },
          {
            "id": 378,
            "car": "Smart",
            "car_model": "Fortwo",
            "car_color": "Pink",
            "car_model_year": 2011,
            "car_vin": "WAUDK78T19A246188",
            "price": "$2787.04",
            "availability": true
          },
          {
            "id": 379,
            "car": "Nissan",
            "car_model": "Titan",
            "car_color": "Crimson",
            "car_model_year": 2011,
            "car_vin": "JM1NC2MFXE0309098",
            "price": "$1928.74",
            "availability": false
          },
          {
            "id": 380,
            "car": "Hyundai",
            "car_model": "Sonata",
            "car_color": "Green",
            "car_model_year": 1995,
            "car_vin": "1G4HF57929U186709",
            "price": "$3821.62",
            "availability": false
          },
          {
            "id": 381,
            "car": "Lotus",
            "car_model": "Evora",
            "car_color": "Green",
            "car_model_year": 2011,
            "car_vin": "1G4HP54K83U648699",
            "price": "$3271.64",
            "availability": false
          },
          {
            "id": 382,
            "car": "BMW",
            "car_model": "5 Series",
            "car_color": "Goldenrod",
            "car_model_year": 2001,
            "car_vin": "1FTEX1EW8AK449868",
            "price": "$2677.37",
            "availability": true
          },
          {
            "id": 383,
            "car": "Ford",
            "car_model": "Escort",
            "car_color": "Pink",
            "car_model_year": 1984,
            "car_vin": "WAUUL68E65A187710",
            "price": "$3489.41",
            "availability": true
          },
          {
            "id": 384,
            "car": "Daewoo",
            "car_model": "Leganza",
            "car_color": "Blue",
            "car_model_year": 2000,
            "car_vin": "1HGCP2E35AA374754",
            "price": "$1555.96",
            "availability": true
          },
          {
            "id": 385,
            "car": "Volkswagen",
            "car_model": "Jetta",
            "car_color": "Red",
            "car_model_year": 1986,
            "car_vin": "4T1BF1FK9EU041146",
            "price": "$2838.09",
            "availability": false
          },
          {
            "id": 386,
            "car": "Subaru",
            "car_model": "Impreza",
            "car_color": "Khaki",
            "car_model_year": 1993,
            "car_vin": "3D73Y4CL5AG521656",
            "price": "$3410.04",
            "availability": false
          },
          {
            "id": 387,
            "car": "Porsche",
            "car_model": "Carrera GT",
            "car_color": "Orange",
            "car_model_year": 2004,
            "car_vin": "3D73M3HL8BG003847",
            "price": "$1701.57",
            "availability": true
          },
          {
            "id": 388,
            "car": "Lotus",
            "car_model": "Esprit",
            "car_color": "Crimson",
            "car_model_year": 1990,
            "car_vin": "1G6DS5E33D0457230",
            "price": "$1921.94",
            "availability": true
          },
          {
            "id": 389,
            "car": "Volkswagen",
            "car_model": "Jetta",
            "car_color": "Khaki",
            "car_model_year": 2012,
            "car_vin": "3D73Y4ELXAG586340",
            "price": "$3982.24",
            "availability": false
          },
          {
            "id": 390,
            "car": "Chevrolet",
            "car_model": "Caprice Classic",
            "car_color": "Khaki",
            "car_model_year": 1993,
            "car_vin": "5GADT13S842981914",
            "price": "$2436.68",
            "availability": true
          },
          {
            "id": 391,
            "car": "MINI",
            "car_model": "Cooper Clubman",
            "car_color": "Maroon",
            "car_model_year": 2011,
            "car_vin": "3VW517AT4FM487615",
            "price": "$2496.90",
            "availability": true
          },
          {
            "id": 392,
            "car": "Chevrolet",
            "car_model": "Suburban 1500",
            "car_color": "Turquoise",
            "car_model_year": 2006,
            "car_vin": "5FRYD4H40GB879094",
            "price": "$3205.89",
            "availability": false
          },
          {
            "id": 393,
            "car": "Suzuki",
            "car_model": "SJ",
            "car_color": "Fuscia",
            "car_model_year": 1993,
            "car_vin": "WBA6B2C53ED552046",
            "price": "$1246.99",
            "availability": false
          },
          {
            "id": 394,
            "car": "Oldsmobile",
            "car_model": "Bravada",
            "car_color": "Aquamarine",
            "car_model_year": 1999,
            "car_vin": "JN8AS1MU7CM080738",
            "price": "$1243.46",
            "availability": false
          },
          {
            "id": 395,
            "car": "Audi",
            "car_model": "A4",
            "car_color": "Turquoise",
            "car_model_year": 2005,
            "car_vin": "WBASN4C54CC609116",
            "price": "$3645.86",
            "availability": true
          },
          {
            "id": 396,
            "car": "Hyundai",
            "car_model": "Accent",
            "car_color": "Pink",
            "car_model_year": 2009,
            "car_vin": "WAUKF98E18A221895",
            "price": "$3159.62",
            "availability": true
          },
          {
            "id": 397,
            "car": "Mercedes-Benz",
            "car_model": "R-Class",
            "car_color": "Violet",
            "car_model_year": 2008,
            "car_vin": "2B3CJ7DJ6BH863391",
            "price": "$1321.25",
            "availability": true
          },
          {
            "id": 398,
            "car": "Land Rover",
            "car_model": "Discovery",
            "car_color": "Khaki",
            "car_model_year": 1997,
            "car_vin": "WBSBL93464J940637",
            "price": "$2536.84",
            "availability": false
          },
          {
            "id": 399,
            "car": "Lincoln",
            "car_model": "Navigator",
            "car_color": "Orange",
            "car_model_year": 2012,
            "car_vin": "YV440MBK3F1504128",
            "price": "$1155.33",
            "availability": false
          },
          {
            "id": 400,
            "car": "Alfa Romeo",
            "car_model": "164",
            "car_color": "Aquamarine",
            "car_model_year": 1993,
            "car_vin": "WBAUP93529V074347",
            "price": "$1610.94",
            "availability": false
          }]
    }
});
export default carsJson;