import { useEffect, useState } from "react";
import axios from "axios";

const RenderOneCountry = ({country}) => {
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
    </div>
  )
}

const RenderCountries = ({countries}) => {
  console.log(countries)

  return (
    <>
    {countries.length === 1 ? <RenderOneCountry country={countries[0]}/> : countries.map(country => <p key={country.name}>{country.name}</p>)}
    </>
  )
}

const App = () => {
  const [countryInfo, setCountryInfo] = useState([])
  const [filterCountry, setFilterCountry] = useState('')
  const [error, setError] = useState(true)
  const [outputCountryList, setOutputCountryList] = useState([])

  const updateHandler = (event) => {
    setFilterCountry(event.target.value)

    const countryList = countryInfo.filter(country => country.name.toLowerCase().includes(event.target.value.toLowerCase()))
    
    if (countryList.length > 10) {
      setOutputCountryList([])
      setError(true)
    } else { 
      setOutputCountryList(countryList)
      setError(false)
    }
  }

  useEffect(() => {
    axios
      .get('https://restcountries.com/v2/all')
      .then((response) => {
        setCountryInfo(response.data)
      })
      
  }, [])
  
  return (
    <div>
      <div>
        find countries 
        <input 
          type="text"
          value={filterCountry}
          onChange={updateHandler}
        />
      </div>

      <div>
        {error ? <p>Filter more too many countries to list</p> : <RenderCountries countries={outputCountryList}/>}
      </div>
      

    </div>
  )
}

export default App;
