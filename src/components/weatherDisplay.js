import React, {useEffect, useState} from 'react';

function WeatherDisplay({weatherData, celsius}) {
    const [date, setDate] = useState(new Date(new Date().getTime() + weatherData.timezone * 1000))

    useEffect(() => {
        const offset = weatherData.timezone
        const newDate = new Date(new Date().getTime() + offset * 1000)
        setDate(newDate);
    }, [weatherData])

    return (
        <div>
            <div>{weatherData.weather ? weatherData.weather[0].main : null}</div>
            <div>{weatherData.weather ? weatherData.weather[0].description : null}</div>
            <div>Temperature: {weatherData.main ? `${weatherData.main.temp}${celsius ? "°C" : "°F"}` : null}</div>
            <div>Feels Like: {weatherData.main ? `${weatherData.main.feels_like}${celsius ? "°C" : "°F"}` : null}</div>
            <div>Humidity: {weatherData.main ? weatherData.main.humidity : null}%</div>
            <div>Wind: {weatherData.wind ? `${weatherData.wind.speed}${celsius ? "km/h" : "mph"}` : null}</div>
            <div>{date.getUTCHours() > 12 ? date.getUTCHours() - 12 : date.getUTCHours()}
            :
            {date.getUTCMinutes() < 10 ? "0" + date.getUTCMinutes() : date.getUTCMinutes()}
            {(date.getUTCHours() >= 12 ? " PM" : " AM")}
            </div>
            <div>

            </div>
        </div>
    )
}

export default WeatherDisplay