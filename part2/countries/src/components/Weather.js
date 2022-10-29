import axios from "axios"
import { useEffect, useState } from "react"

const DisplayWeather = ({weather}) => {
    const iconName = weather[0]['weather'][0]['icon']
    const imageSrc = `https://openweathermap.org/img/wn/${iconName}@2x.png`
    
    return(
        <div>
            <p>temperature is {weather[0].main.temp} Celcius</p>
            <img src={imageSrc} width="100" height="100" alt="Weather Icon"/>
            <p>wind {weather[0].wind.speed} m/s</p>
        </div>
    )
}

const Weather = ({country}) => {
    const [weather, setWeather] = useState([])

    useEffect(() => {
        const lat = country.latlng[0]
        const lon = country.latlng[1]
        const weather_api = process.env.REACT_APP_WEATHER_API_KEY

        axios
        .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weather_api}&units=metric`)
        .then((response) => {
            setWeather([response.data])
        })
    })
    
    return(
        <div>
            <h3>Weather in {country.capital}</h3>
            {weather.length > 0 ? <DisplayWeather weather={weather} /> : null}
        </div>
    )
}

export default Weather