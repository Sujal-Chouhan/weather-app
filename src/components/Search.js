import React, {useEffect} from 'react';
import axios from 'axios';




function Search({setLocation, setweatherData, location, celsius}) {

    const getWeather = function(e) {
        e.preventDefault()
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${celsius ? 'metric' : 'imperial'}&APPID=ab49a07d1c20afb12d14ebeeda79c2be`)
        .then(res => setweatherData(res.data))
        .catch(e => console.log(e))
    }

    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${celsius ? 'metric' : 'imperial'}&APPID=ab49a07d1c20afb12d14ebeeda79c2be`)
        .then(res => setweatherData(res.data))
      }, [celsius])


    return (
        <form onSubmit={getWeather}>
            <input type='text' onChange={e => setLocation(e.target.value)} defaultValue="Toronto" />
            <input type='submit'/>
        </form>
    )
}

export default Search