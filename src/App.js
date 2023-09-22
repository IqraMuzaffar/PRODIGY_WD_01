import "./App.css";
import Search from "./components/Search";
import Weather from "./components/Weather";
import Card from "./components/Card";
import rain from "./assets/rain.jpg";
import sunny from "./assets/sunny.jpg";
import sunset from "./assets/sunset.jpg";
import { useState, useEffect } from "react";
import getdata from "./components/Weatherservice";

function App() {
  const [city, setcity] = useState("Paris");
  const [weather, setweather] = useState(null);
  const [units, setunits] = useState("metric");
  const [background, setbackground] = useState("rain");

  useEffect(() => {
    const fetch_weather_data = async () => {
      const data = await getdata(city, units);
      console.log(data);
      setweather(data);

      const threshold = units === "metric" ? 20 : 60;
      if (data.temp >= threshold) {
        setbackground(sunny);
      } else {
        setbackground(rain);
      }
    };

    fetch_weather_data();
    //dynamic bg
  }, [units, city]);

  const handleUnitClick = (e) => {
    const button = e.currentTarget;
    console.log(button);
    const currentUnit = button.innerText.slice(1);
    console.log(currentUnit);

    const isCelsius = currentUnit === "C";
    button.innerText = isCelsius ? "°F " : "°C";
    setunits(isCelsius ? "metric" : "imperial");
  };

  const handleKeyStroke = (e) => {
    if (e.keyCode === 13) {
      setcity(e.currentTarget.value);
      e.currentTarget.blur();
    }
  };

  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      {weather && (
        <>
          <Search
            handleClick={(e) => handleUnitClick(e)}
            handleKey={(e) => handleKeyStroke(e)}
          />

          <Weather weather={weather} units={units} />
          <Card weather={weather} units={units} />
        </>
      )}
    </div>
  );
}

export default App;
