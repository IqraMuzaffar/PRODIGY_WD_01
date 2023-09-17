import React from "react";

function Card({weather , units}){
  const tempUnit = units === "metric" ? "°C" : "°F";
  const windUnit = units === "metric" ? "m/s" : "m/h";


const cards = [
  {
    id: 1,
    icon: <i class="fa-solid fa-down-long"></i>,
    title: "min",
    data: weather.temp_min.toFixed(),
    units: tempUnit,
  },
  {
    id: 2,
    icon: <i class="fa-solid fa-up-long"></i>,
    title: "max",
    data: weather.temp_max.toFixed(),
    units: tempUnit,
  },
  {
    id: 3,
    icon: <i class="fa-solid fa-droplet"></i>,
    title: "feels like",
    data: weather.feels_like.toFixed(),
    units: tempUnit,
  },
  {
    id: 4,
    icon: <i class="fa-solid fa-wind"></i>,
    title: "humidity",
    data: weather.humidity,
    units: "hPa",
  },
  {
    id: 5,
    icon: <i class="fa-brands fa-wpressr"></i>,
    title: "pressure",
    data: weather.pressure,
    units: "%",
  },
  {
    id: 6,
    icon: <i class="fa-solid fa-gauge"></i>,
    title: "wind speed",
    data: weather.speed.toFixed(),
    units: windUnit,
  },
];


  return (
    <>
      <div className="card-setting">
        {cards.map(({id, icon , title , data, units}) => (
          <div key= {id}className="card">
            <div className="icons">
              {icon}
              <small>{title} </small>
              <h3>{`${data} ${units}`}</h3>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Card;

