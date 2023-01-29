import React, {useEffect} from 'react';
import axios from 'axios';




function Search({setLocation, setweatherData, weatherData, location, celsius}) {

    const getWeather = function(e) {
        e.preventDefault()
        if (location) {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${celsius ? 'metric' : 'imperial'}&APPID=YOURAPIKEYHERE`)
        .then(res => setweatherData(res.data))
        .catch(e => console.log(e))}
        
    }
    
    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${celsius ? 'metric' : 'imperial'}&APPID=YOURAPIKEYHERE`)
        .then(res => setweatherData(res.data))
      }, [celsius])


    return (
        <form onSubmit={getWeather} className="search">
            <div className='search-bar'>
                <label htmlFor="searchWeather" className='label'>Search Location</label>
                <input type='text' onChange={e => setLocation(e.target.value)} defaultValue="Toronto" id="searchWeather" className='input'/>
            </div>
        </form>
    )
}

export default Search