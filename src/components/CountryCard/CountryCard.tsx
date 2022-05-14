import './CountryCard.scss'
import LinkButton from './LinkButton/LinkButton';

import { Link } from 'react-router-dom';
import { CountriesTS } from '../../models/Countries';


export const CountryCard = ({ cca2, flags, name, capital, population }: CountriesTS) => {

    return (
        <div className="CardContainer">
            <img src={flags.png} alt="" />
            <h2>{name.common}</h2>
            <p>Capital: {capital}</p>
            <p>Populaçao: {population}</p>
            <LinkButton to={`/countrydetail/${cca2}`} text="View More" />
        </div>
    )
}

