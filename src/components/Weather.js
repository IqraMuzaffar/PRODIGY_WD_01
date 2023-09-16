import React from "react";


function Weather({weather}){
    return (
      <>
        <div className="weather-container">
          <div className="weather">
            <h3>
              {weather.name}, {weather.country}
            </h3>
            <img src={weather.Icon_url}></img>
            <h3>{weather.description}</h3>
          </div>
          <div className="temperature">
            <h1>{`${weather.temp} ° C`}</h1>
          </div>
        </div>
      </>
    );
}

export default Weather;
