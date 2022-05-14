import { CountryName } from "./CountryName"
import { FlagsTS } from "./Flags"

export interface CountriesTS {
    cca2: string,
    key: number,
    name: CountryName,
    capital: string,
    population: number,
    flags: FlagsTS
}
