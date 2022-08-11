import React from "react";
import { options } from "./search/api_weather";
import "./weather.css";

export default function WeatherData(props) {
  /*     const lat = Math.round(props.weatherSearch.lat * 10)/10;
    const lon = Math.round(props.weatherSearch.lon * 10) / 10;

    try {

   // fetch(`https://weatherbit-v1-mashape.p.rapidapi.com/current?lon=${lon}&lat=${lat}`, options)
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=dd29010c85975f872fbe102c69500ff1`)
	.then(response => response.json())
	.then(response => props.setWeather(response))
	.catch(err => console.error(err));
    } catch (e) {
        console.log(e)
    }

    console.log(props.weather) */

  //console.log(props.searchData.label);

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
