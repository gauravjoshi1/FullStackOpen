import Weather from "./Weather"

const RenderCountry = ({country}) => {
    console.log(country)
    return (
      <div>
        <h2>{country.name}</h2>
        <p>capital {country.capital}</p>
        <p>area {country.area}</p>
        <h3>languages:</h3>
        <ul>
          {country.languages.map(languages => 
            <li key={languages.name}>{languages.name}</li>
          )}
        </ul>
  
        <img src={country.flag} width="100" height="100" alt="Flag of the country"/>
        <Weather country={country} />
      </div>
    )
}

export default RenderCountry