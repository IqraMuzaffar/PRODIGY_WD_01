const APIkey='94565ecbcb31f3a1c08db9a11715be1a';

const Icon_url = (icon_id) => `https://openweathermap.org/img/wn/${icon_id}@2x.png`;

const getdata=async(city, units= 'metric')=> {
    const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=${units}`;

    const data=await fetch (url)
    .then((res)=> res.json())
    .then((data)=> data);

const{
     weather,
     main:{temp, feels_like, temp_min , temp_max,
    pressure, humidity}, 
    wind:{speed},
    sys:{country}, 
    name }=data;

const {description, icon}=weather[0];

return {
    description,
    Icon_url: Icon_url(icon),
    temp,
    temp_max,
    temp_min,
    feels_like,
    pressure,
    humidity,
    speed,
    country,
    name,
};
}
export default getdata;