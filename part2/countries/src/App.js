import { useEffect, useState } from "react";
import axios from "axios";
import RenderCountryList from "./components/RenderCountryList";

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
        {error ? <p>Too many matches, specify another filter</p> : <RenderCountryList countries={outputCountryList} setCountry={setOutputCountryList}/>}
      </div>
    </div>
  )
}

export default App;
