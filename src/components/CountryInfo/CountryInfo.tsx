import { CountryTS } from '../../models/Country'
import BackButton from './BackButton/BackButton';
import './CountryInfo.scss'

export default function CountryInfo({ cca2, flags, name, capital, population, borders, languages, currencies}: CountryTS) {
  const moedas = Object.getOwnPropertyNames(currencies).at(0);
  var moeda: string = moedas !== undefined ? currencies?.[moedas]?.name : 'Nao existe';
  
  const linguas = Object.getOwnPropertyNames(languages).at(0);
  var lingua: string =  linguas !== undefined ? languages?.[linguas] : 'Nao existe';

  return (
    <div className="CardContentContainer">
      <div className="CardContentContainer_button">
        <BackButton to="/" text="Back" />
      </div>
      <h2>{name.common}</h2>
      <img src={flags.png} alt="" />
      <div className="CardContentContainer_text">
        <p>Capital: {capital}</p>
        <p>Populaçao: {population}</p>
        <p>Currency: {moeda}</p>
        <p>languages: {lingua}</p>
       {
         borders &&
          <div className="CardContentContainer_text__borders">
            <p>Bordering Countries:</p>
            <div className="CardContentContainer_links">
              {
                borders?.map((borders:any, index:number) => (
                  <p  key={index}>{borders}</p>
                ))
              }
            </div>
          </div>
        }
      </div>

    </div>
  )
}
