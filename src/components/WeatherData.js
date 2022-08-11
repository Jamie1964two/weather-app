import React from "react";
import { options } from "./search/api_weather";
import "./weather.css";

export default function WeatherData(props) {

  console.log(props.weather)

  return (

    <div className="box">

      <div className="box_one">
        <h1>18°C</h1>
        <h6>Wind speed: 5mph</h6>
        <h6>Pressure: 8pa</h6>
        <h6>Feels like: 18°C</h6>
      </div>

      <div className="box_two">
        <img alt="weather symbol" src="icons/01d.png" />
        <h4>sunny</h4>
        {/* <h1>{JSON.stringify(props.weather)}</h1> */}
        {/* {props.weather.main && <h1>{props.weather.main.temp}</h1> } */}
      </div>

    </div>
  );
}
