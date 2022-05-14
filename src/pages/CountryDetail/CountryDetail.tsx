import { useParams } from "react-router-dom";
import CountryInfo from "../../components/CountryInfo/CountryInfo";
// import "./CountryDetail.module.scss";
import { useState, useEffect } from "react";
import api from "../../api";
import { CountryTS } from "../../models/Country"
import "./CountryDetail.scss";



function CountryDetail() {
    const [country, setCountry] = useState<CountryTS[]>([]);

    const {name} = useParams();

    useEffect(() => {
        api.get("alpha/"+ name)
        .then((response) => {
            setCountry(response.data);
            console.log(response.data);
        })
    }, [name]);

    return (
        <div className="CountryDetailContainer">


        {country?.map((country, index) => ( 
            <CountryInfo 
                cca2={country.cca2}
                key={index}
                name={country.name}
                capital={country.capital} 
                population={country.population} 
                flags={country.flags}
                currencies={country?.currencies}
                borders={country?.borders}
                languages={country.languages}
                /> 
                )
            )}  
        </div>
    )
}

export default CountryDetail;