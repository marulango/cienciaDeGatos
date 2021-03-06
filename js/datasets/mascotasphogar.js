/* ***************************************************************************************************
    Fuente: ENGASTO 2012, INEGI http://www3.inegi.org.mx/sistemas/microdatos/default_bn.aspx
    Limpieza de datos: Miguel Escalante @skalas5
    CSV a JSON: MaruMaru Lango @marulango
*************************************************************************************************** */

var hogares = {
  "ags": {
    "oxxo": 0,
    "diconsa": 0,
    "liconsa": 0,
    "particular": 1,
    "nope": 0,
    "mercado": 15,
    "tianguis": 5,
    "ambulante": 0,
    "abarrotes": 58,
    "especializada": 25,
    "supermercado": 25,
    "departamentales": 1,
    "extranjero": 0,
    "membresia": 5,
    "ENT": 1,
    "edo": 'Aguascalientes',
    "pob": 337
  },
  "bc": {
    "oxxo": 4,
    "diconsa": 1,
    "liconsa": 0,
    "particular": 1,
    "nope": 0,
    "mercado": 6,
    "tianguis": 18,
    "ambulante": 0,
    "abarrotes": 35,
    "especializada": 52,
    "supermercado": 93,
    "departamentales": 0,
    "extranjero": 45,
    "membresia": 10,
    "ENT": 2,
    "edo": 'Baja California',
    "pob": 418
  },
  "bcs": {
    "oxxo": 1,
    "diconsa": 1,
    "liconsa": 0,
    "particular": 0,
    "nope": 0,
    "mercado": 2,
    "tianguis": 0,
    "ambulante": 0,
    "abarrotes": 7,
    "especializada": 32,
    "supermercado": 35,
    "departamentales": 0,
    "extranjero": 0,
    "membresia": 6,
    "ENT": 3,
    "edo": 'Baja California Sur',
    "pob": 190
  },
  "camp": {
    "oxxo": 0,
    "diconsa": 1,
    "liconsa": 0,
    "particular": 0,
    "nope": 0,
    "mercado": 21,
    "tianguis": 0,
    "ambulante": 0,
    "abarrotes": 40,
    "especializada": 18,
    "supermercado": 32,
    "departamentales": 0,
    "extranjero": 0,
    "membresia": 12,
    "ENT": 4,
    "edo": 'Campeche',
    "pob": 310
  },
  "coah": {
    "oxxo": 0,
    "diconsa": 0,
    "liconsa": 0,
    "particular": 0,
    "nope": 0,
    "mercado": 16,
    "tianguis": 1,
    "ambulante": 0,
    "abarrotes": 46,
    "especializada": 48,
    "supermercado": 65,
    "departamentales": 0,
    "extranjero": 0,
    "membresia": 16,
    "ENT": 5,
    "edo": 'Coahuila',
    "pob": 372
  },
  "col": {
    "oxxo": 1,
    "diconsa": 1,
    "liconsa": 0,
    "particular": 0,
    "nope": 1,
    "mercado": 5,
    "tianguis": 7,
    "ambulante": 0,
    "abarrotes": 75,
    "especializada": 28,
    "supermercado": 32,
    "departamentales": 0,
    "extranjero": 0,
    "membresia": 5,
    "ENT": 6,
    "edo": 'Colima',
    "pob": 317
  },
  "chis": {
    "oxxo": 0,
    "diconsa": 0,
    "liconsa": 0,
    "particular": 0,
    "nope": 0,
    "mercado": 8,
    "tianguis": 0,
    "ambulante": 0,
    "abarrotes": 17,
    "especializada": 29,
    "supermercado": 26,
    "departamentales": 0,
    "extranjero": 0,
    "membresia": 1,
    "ENT": 7,
    "edo": 'Chiapas',
    "pob": 469
  },
  "chih": {
    "oxxo": 3,
    "diconsa": 4,
    "liconsa": 0,
    "particular": 0,
    "nope": 0,
    "mercado": 9,
    "tianguis": 3,
    "ambulante": 0,
    "abarrotes": 44,
    "especializada": 23,
    "supermercado": 70,
    "departamentales": 0,
    "extranjero": 5,
    "membresia": 9,
    "ENT": 8,
    "edo": 'Chihuahua',
    "pob": 309
  },
  "cdmx": {
    "oxxo": 0,
    "diconsa": 2,
    "liconsa": 0,
    "particular": 0,
    "nope": 0,
    "mercado": 23,
    "tianguis": 2,
    "ambulante": 1,
    "abarrotes": 28,
    "especializada": 18,
    "supermercado": 32,
    "departamentales": 0,
    "extranjero": 0,
    "membresia": 5,
    "ENT": 9,
    "edo": 'Ciudad de México',
    "pob": 246
  },
  "dgo": {
    "oxxo": 1,
    "diconsa": 12,
    "liconsa": 0,
    "particular": 1,
    "nope": 0,
    "mercado": 6,
    "tianguis": 2,
    "ambulante": 0,
    "abarrotes": 37,
    "especializada": 19,
    "supermercado": 25,
    "departamentales": 0,
    "extranjero": 0,
    "membresia": 5,
    "ENT": 10,
    "edo": 'Durango',
    "pob": 316
  },
  "gto": {
    "oxxo": 2,
    "diconsa": 0,
    "liconsa": 0,
    "particular": 1,
    "nope": 0,
    "mercado": 21,
    "tianguis": 1,
    "ambulante": 1,
    "abarrotes": 100,
    "especializada": 21,
    "supermercado": 30,
    "departamentales": 0,
    "extranjero": 0,
    "membresia": 4,
    "ENT": 11,
    "edo": 'Guanajuato',
    "pob": 458
  },
  "gro": {
    "oxxo": 0,
    "diconsa": 3,
    "liconsa": 0,
    "particular": 0,
    "nope": 0,
    "mercado": 25,
    "tianguis": 0,
    "ambulante": 0,
    "abarrotes": 17,
    "especializada": 6,
    "supermercado": 15,
    "departamentales": 0,
    "extranjero": 0,
    "membresia": 3,
    "ENT": 12,
    "edo": 'Guerrero',
    "pob": 243
  },
  "hgo": {
    "oxxo": 0,
    "diconsa": 4,
    "liconsa": 1,
    "particular": 0,
    "nope": 0,
    "mercado": 43,
    "tianguis": 1,
    "ambulante": 0,
    "abarrotes": 29,
    "especializada": 38,
    "supermercado": 25,
    "departamentales": 0,
    "extranjero": 0,
    "membresia": 4,
    "ENT": 13,
    "edo": 'Hidalgo',
    "pob": 379
  },
  "jal": {
    "oxxo": 1,
    "diconsa": 0,
    "liconsa": 0,
    "particular": 0,
    "nope": 0,
    "mercado": 7,
    "tianguis": 5,
    "ambulante": 0,
    "abarrotes": 88,
    "especializada": 32,
    "supermercado": 16,
    "departamentales": 1,
    "extranjero": 0,
    "membresia": 3,
    "ENT": 14,
    "edo": 'Jalisco',
    "pob": 326
  },
  "edomex": {
    "oxxo": 0,
    "diconsa": 0,
    "liconsa": 0,
    "particular": 0,
    "nope": 0,
    "mercado": 11,
    "tianguis": 2,
    "ambulante": 0,
    "abarrotes": 63,
    "especializada": 50,
    "supermercado": 61,
    "departamentales": 0,
    "extranjero": 0,
    "membresia": 5,
    "ENT": 15,
    "edo": 'México',
    "pob": 510
  },
  "mich": {
    "oxxo": 0,
    "diconsa": 0,
    "liconsa": 0,
    "particular": 1,
    "nope": 0,
    "mercado": 16,
    "tianguis": 4,
    "ambulante": 1,
    "abarrotes": 73,
    "especializada": 51,
    "supermercado": 31,
    "departamentales": 1,
    "extranjero": 0,
    "membresia": 5,
    "ENT": 16,
    "edo": 'Michoacán',
    "pob": 446
  },
  "mor": {
    "oxxo": 2,
    "diconsa": 0,
    "liconsa": 0,
    "particular": 1,
    "nope": 0,
    "mercado": 18,
    "tianguis": 5,
    "ambulante": 0,
    "abarrotes": 52,
    "especializada": 20,
    "supermercado": 21,
    "departamentales": 1,
    "extranjero": 0,
    "membresia": 6,
    "ENT": 17,
    "edo": 'Morelia',
    "pob": 254
  },
  "nay": {
    "oxxo": 1,
    "diconsa": 2,
    "liconsa": 0,
    "particular": 1,
    "nope": 0,
    "mercado": 19,
    "tianguis": 2,
    "ambulante": 0,
    "abarrotes": 50,
    "especializada": 30,
    "supermercado": 28,
    "departamentales": 0,
    "extranjero": 0,
    "membresia": 7,
    "ENT": 18,
    "edo": 'Nayarit',
    "pob": 317
  },
  "nl": {
    "oxxo": 1,
    "diconsa": 0,
    "liconsa": 0,
    "particular": 0,
    "nope": 0,
    "mercado": 0,
    "tianguis": 9,
    "ambulante": 0,
    "abarrotes": 46,
    "especializada": 18,
    "supermercado": 43,
    "departamentales": 0,
    "extranjero": 0,
    "membresia": 7,
    "ENT": 19,
    "edo": 'Nuevo León',
    "pob": 267
  },
  "oax": {
    "oxxo": 0,
    "diconsa": 5,
    "liconsa": 0,
    "particular": 0,
    "nope": 0,
    "mercado": 15,
    "tianguis": 0,
    "ambulante": 0,
    "abarrotes": 43,
    "especializada": 15,
    "supermercado": 44,
    "departamentales": 0,
    "extranjero": 0,
    "membresia": 7,
    "ENT": 20,
    "edo": 'Oaxaca',
    "pob": 505
  },
  "pue": {
    "oxxo": 0,
    "diconsa": 0,
    "liconsa": 0,
    "particular": 1,
    "nope": 0,
    "mercado": 24,
    "tianguis": 1,
    "ambulante": 1,
    "abarrotes": 73,
    "especializada": 37,
    "supermercado": 39,
    "departamentales": 0,
    "extranjero": 0,
    "membresia": 5,
    "ENT": 21,
    "edo": 'Puebla',
    "pob": 449
  },
  "qro": {
    "oxxo": 0,
    "diconsa": 0,
    "liconsa": 0,
    "particular": 0,
    "nope": 0,
    "mercado": 14,
    "tianguis": 3,
    "ambulante": 0,
    "abarrotes": 52,
    "especializada": 14,
    "supermercado": 27,
    "departamentales": 0,
    "extranjero": 0,
    "membresia": 2,
    "ENT": 22,
    "edo": 'Querétaro',
    "pob": 280
  },
  "qr": {
    "oxxo": 0,
    "diconsa": 4,
    "liconsa": 0,
    "particular": 1,
    "nope": 0,
    "mercado": 3,
    "tianguis": 3,
    "ambulante": 0,
    "abarrotes": 51,
    "especializada": 14,
    "supermercado": 24,
    "departamentales": 2,
    "extranjero": 0,
    "membresia": 8,
    "ENT": 23,
    "edo": 'Quintana Roo',
    "pob": 272
  },
  "slp": {
    "oxxo": 0,
    "diconsa": 2,
    "liconsa": 0,
    "particular": 3,
    "nope": 1,
    "mercado": 6,
    "tianguis": 5,
    "ambulante": 0,
    "abarrotes": 44,
    "especializada": 19,
    "supermercado": 28,
    "departamentales": 0,
    "extranjero": 0,
    "membresia": 7,
    "ENT": 24,
    "edo": 'San Luis Potosí',
    "pob": 272
  },
  "sin": {
    "oxxo": 0,
    "diconsa": 0,
    "liconsa": 0,
    "particular": 1,
    "nope": 0,
    "mercado": 10,
    "tianguis": 0,
    "ambulante": 0,
    "abarrotes": 14,
    "especializada": 22,
    "supermercado": 57,
    "departamentales": 0,
    "extranjero": 0,
    "membresia": 3,
    "ENT": 25,
    "edo": 'Sinaloa',
    "pob": 267
  },
  "son": {
    "oxxo": 2,
    "diconsa": 0,
    "liconsa": 0,
    "particular": 0,
    "nope": 0,
    "mercado": 4,
    "tianguis": 0,
    "ambulante": 1,
    "abarrotes": 41,
    "especializada": 20,
    "supermercado": 80,
    "departamentales": 0,
    "extranjero": 1,
    "membresia": 11,
    "ENT": 26,
    "edo": 'Sonora',
    "pob": 395
  },
  "tab": {
    "oxxo": 0,
    "diconsa": 10,
    "liconsa": 0,
    "particular": 0,
    "nope": 0,
    "mercado": 11,
    "tianguis": 0,
    "ambulante": 0,
    "abarrotes": 35,
    "especializada": 25,
    "supermercado": 50,
    "departamentales": 0,
    "extranjero": 0,
    "membresia": 5,
    "ENT": 27,
    "edo": 'Tampico',
    "pob": 301
  },
  "tamps": {
    "oxxo": 0,
    "diconsa": 1,
    "liconsa": 0,
    "particular": 2,
    "nope": 0,
    "mercado": 4,
    "tianguis": 0,
    "ambulante": 0,
    "abarrotes": 49,
    "especializada": 20,
    "supermercado": 50,
    "departamentales": 0,
    "extranjero": 13,
    "membresia": 7,
    "ENT": 28,
    "edo": 'Tamaulipas',
    "pob": 353
  },
  "tlax": {
    "oxxo": 0,
    "diconsa": 0,
    "liconsa": 0,
    "particular": 0,
    "nope": 0,
    "mercado": 2,
    "tianguis": 0,
    "ambulante": 0,
    "abarrotes": 59,
    "especializada": 18,
    "supermercado": 15,
    "departamentales": 0,
    "extranjero": 0,
    "membresia": 0,
    "ENT": 29,
    "edo": 'Tlaxcala',
    "pob": 272
  },
  "ver": {
    "oxxo": 0,
    "diconsa": 1,
    "liconsa": 0,
    "particular": 0,
    "nope": 0,
    "mercado": 19,
    "tianguis": 1,
    "ambulante": 0,
    "abarrotes": 39,
    "especializada": 19,
    "supermercado": 46,
    "departamentales": 0,
    "extranjero": 0,
    "membresia": 7,
    "ENT": 30,
    "edo": 'Veracruz',
    "pob": 308
  },
  "yuc": {
    "oxxo": 0,
    "diconsa": 0,
    "liconsa": 0,
    "particular": 0,
    "nope": 0,
    "mercado": 4,
    "tianguis": 0,
    "ambulante": 2,
    "abarrotes": 45,
    "especializada": 18,
    "supermercado": 19,
    "departamentales": 0,
    "extranjero": 0,
    "membresia": 5,
    "ENT": 31,
    "edo": 'Yucatan',
    "pob": 258
  },
  "zac": {
    "oxxo": 0,
    "diconsa": 2,
    "liconsa": 0,
    "particular": 2,
    "nope": 0,
    "mercado": 30,
    "tianguis": 6,
    "ambulante": 0,
    "abarrotes": 54,
    "especializada": 28,
    "supermercado": 38,
    "departamentales": 0,
    "extranjero": 0,
    "membresia": 7,
    "ENT": 32,
    "edo": 'Zacatecas',
    "pob": 282
  }
}