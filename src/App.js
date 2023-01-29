import React, {useState} from 'react';
import Search from './components/Search';
import WeatherDisplay from './components/weatherDisplay';
import SelectUnit from './components/SelectUnit';

function App() {
  const [weatherData, setweatherData] = useState({})
  const [location, setLocation] = useState('Toronto')
  const [celsius, setCelsius] = useState(true)

  return (
    <div className="App">
      <Search setLocation={setLocation} location={location} celsius={celsius} setweatherData={setweatherData} weatherData={weatherData} />
      <WeatherDisplay weatherData={weatherData} celsius={celsius} />
      <SelectUnit celsius={celsius} setCelsius={setCelsius} />
    </div>
  );
}

export default App;
