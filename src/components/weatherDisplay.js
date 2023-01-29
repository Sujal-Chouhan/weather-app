import React, {useEffect, useState} from 'react';

function WeatherDisplay({weatherData, celsius}) {
    const [date, setDate] = useState(new Date(new Date().getTime() + weatherData.timezone * 1000))

    useEffect(() => {
        const offset = weatherData.timezone
        const newDate = new Date(new Date().getTime() + offset * 1000)
        setDate(newDate);
        let body = document.querySelector('body');
        body.classList.remove('clear-sky', 'cloudy', 'rainy', 'snow', 'clouds', 'clear', 'rain');
        if (weatherData.weather) {
            if ( ['clear', 'cloudy', 'rainy', 'snow', 'clouds', 'clear-sky', 'rain'].includes(weatherData.weather[0].main.toLowerCase())) {
                body.classList.add(weatherData.weather[0].main.toLowerCase())
        }}

    }, [weatherData])

    return (
        <div className='weather-display'>
            <div className='weather-info'>
                <div className='main-weather'>{weatherData.weather ? weatherData.weather[0].main : null}</div>
                <div className='sub-weather'>{weatherData.weather ? weatherData.weather[0].description : null}</div>
            </div>
            <div className='temperature-container'>
                <div className='temperature-data'>{weatherData.main ? `${weatherData.main.temp}${celsius ? "°C" : "°F"}` : null}</div>
            </div>
            <div className='sub-weather-info'>
                <div className='feels-like-container'>
                    <img className='feels-like icon' src={require('../assets/thermometer.png')}/>
                    <div className='feels-like'>Feels Like: {weatherData.main ? `${weatherData.main.feels_like}${celsius ? "°C" : "°F"}` : null}</div>
                </div>
                <div className='humidity-container'>
                    <img className='humidity-icon icon' src = {require('../assets/humidityIcon.png')}/>
                    <div className='humidity'>Humidity: {weatherData.main ? weatherData.main.humidity : null}%</div>
                </div>
                <div className='wind-container'>
                    <img className='wind-icon icon' src = {require('../assets/windIcon.png')}/>
                    <div className='wind'>Wind: {weatherData.wind ? `${weatherData.wind.speed}${celsius ? " km/h" : " mph"}` : null}</div>
                </div>
                <div className='time-container'>
                    <img className='clock-icon icon' src = {require('../assets/clock.png')}/>
                    <div className='time'>{date.getUTCHours() > 12 ? date.getUTCHours() - 12 : date.getUTCHours() === 0 ? 12 : date.getUTCHours()}
                    :
                    {date.getUTCMinutes() < 10 ? "0" + date.getUTCMinutes() : date.getUTCMinutes()}
                    {(date.getUTCHours() >= 12 ? " PM" : " AM")}</div>
                </div>
           
            </div>
        </div>
    )
}

export default WeatherDisplay