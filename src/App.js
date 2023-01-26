import React, {useState, useEffect} from 'react';
import Search from './components/Search';
import WeatherDisplay from './components/weatherDisplay';
import SelectUnit from './components/SelectUnit';

function App() {
  const [weatherData, setweatherData] = useState({})
  const [location, setLocation] = useState('Toronto')
  const [celsius, setCelsius] = useState(true)


  useEffect(() => {
    console.log(weatherData)
  }, [weatherData])

  return (
    <div className="App">
      <Search setLocation={setLocation} location={location} celsius={celsius} setweatherData={setweatherData} />
      <WeatherDisplay weatherData={weatherData} celsius={celsius} />
      <SelectUnit celsius={celsius} setCelsius={setCelsius} />
    </div>
  );
}

export default App;
