import RenderCountry from "./RenderCountry"

const RenderCountryList = ({countries, setCountry}) => {
    return (
        <>
        {countries.length === 1 ? 
            <RenderCountry country={countries[0]}/> : 
            countries.map(country =>             
                <p key={country.name}>
                    {country.name}
                    <button onClick={() => setCountry([country])}>show</button>
                </p>
            )}
        </>
    )
}

export default RenderCountryList
