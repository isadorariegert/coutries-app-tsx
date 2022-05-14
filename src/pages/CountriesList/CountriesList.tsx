import { useEffect, useState } from "react";
import { CountryCard } from "../../components/CountryCard/CountryCard";
import "./CountriesList.scss";
import api from "../../api";
import axios from "axios";
import { CountriesTS } from "../../models/Countries"

export const CountriesList = () => {

    const [countries, setCountries] = useState<CountriesTS[]>([]);

    useEffect(() => {
        api.get("all")
        .then((response) => {
            setCountries(response.data);
        })
        //console.log(countries)
    }, []);
    
    // console.log(countries)
    return (
        <div className="CountriesListContainer">
            {countries.map((country, index) => (
                <CountryCard 
                cca2={country.cca2}
                key={index}
                name={country.name}
                capital={country.capital} 
                population={country.population} 
                flags={country.flags}
                /> 
            )

            )}  
        </div>
    )
}

export default CountriesList;