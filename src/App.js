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

 
  useEffect(()=> {
    const fetch_weather_data=async()=>{
      const data=await getdata("Paris");
      console.log(data); 
      setweather(data);
    };



    fetch_weather_data();

  },[])

   


  return (
    <div className="App" style={{backgroundImage: `url(${sunset})`}}>
      {weather && <>
      < Search />
     < Weather weather={weather}  />
     <Card />
     </>}
     
    </div>
      );
}

export default App;
