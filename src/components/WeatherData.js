import React from "react";
import { options } from "./search/api_weather";
import "./weather.css";

export default function WeatherData(props) {

  console.log(props)

  const wind_spd = Math.floor(props.weather.data[0].wind_spd*10)/10;
  const precip = Math.floor(props.weather.data[0].precip*10)/10

  return (

    <div className="box">

      <div className="box_one">
        <h1>{`${props.weather.data[0].temp}°C`}</h1>
        <h6>{`Clouds: ${props.weather.data[0].clouds}%`}</h6>
        <h6>{`Wind speed: ${wind_spd}m/s`}</h6>
        <h6>{`Precip: ${precip}mm/hr`}</h6>
      </div>

      <div className="box_two">
        <img className="image" alt="weather symbol" src={`https://www.weatherbit.io/static/img/icons/${props.weather.data[0].weather.icon}.png`} />
        <h4>{`${props.weather.data[0].weather.description}`}</h4>
      </div>

    </div>
  );
}
