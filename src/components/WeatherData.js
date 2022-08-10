import React from 'react';
import {options} from './search/api_weather';

export default function WeatherData(props) {

    const lat = props.searchData.lat;
    const lon = props.searchData.lon;

    fetch(`https://weatherbit-v1-mashape.p.rapidapi.com/current?lon=${lon}&lat=${lat}`, options)
	.then(response => response.json())
	.then(response => props.setWeather(response))
	.catch(err => console.error(err));

    console.log(props.weather)

    //console.log(props.searchData.label);
    return(
        // <h1>{props.weather}</h1>
        <h1>Hi</h1>
    )

}

