import './App.css';
import Search from './components/Search';
import Weather from './components/Weather';
import Card from './components/Card';
import rain from './assets/rain.jpg';
import sunny from "./assets/sunny.jpg";
import sunset from "./assets/sunset.jpg";
import { useState, useEffect } from 'react';
import getdata from './components/Weatherservice';



function App() {
  const [weather, setweather] = useState(null);
  const [units, setunits] =useState('imperial');

 
  useEffect(()=> {
    const fetch_weather_data=async()=>{
      const data=await getdata("Paris", units);
      console.log(data); 
      setweather(data);
    };



    fetch_weather_data();

  },[units])

  const handleUnitClick=(event)=> {
    const button=event.currentTarget;
    const currentUnit=button.innerText.slice(1);
    
    const isCelsius = currentUnit === " °C "; 
    button.innerText = isCelsius ? "°F " : "°C";
    setunits(isCelsius ? 'metric': 'imperial');



  }
   


  return (
    <div className="App" style={{ backgroundImage: `url(${sunset})` }}>
      {weather && (
        <>
          <Search handleClick={(event) => handleUnitClick(event)} />

         
          <Weather weather={weather} units={units} />
          <Card weather={weather} units={units} />
        </>
      )}
    </div>
  );
}

export default App;
