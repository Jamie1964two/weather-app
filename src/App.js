import "./App.css";
import React, { useState } from "react";
import Search from "./components/search/search";
import WeatherData from "./components/WeatherData";
import {options} from "./components/search/api_weather";

function App() {
  const [searchData, setSearchData] = useState({
    lat: 40.7,
    lon: 73.5,
    label: "New York",
  });
  const [weather, setWeather] = useState(null);
  const [weatherSearch, setWeatherSearch] = useState(null);

  const handleOnSearchChange = (searchData) => {
    console.log(searchData);

    const lat = Math.round(searchData.lat * 10)/10;
    const lon = Math.round(searchData.lon * 10)/10;

    fetch(`https://weatherbit-v1-mashape.p.rapidapi.com/current?lon=${lon}&lat=${lat}`, options)

    // fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=dd29010c85975f872fbe102c69500ff1`)
    .then(response => response.json())
    .then(response => setWeather(response))
    .catch(err => console.error(err));


    console.log(weather)

  //console.log(props.searchData.label);
  };

  return (
    <div className="boxOuter">
      <div className="boxOne">
        <Search
          onSearchChange={handleOnSearchChange}
          searchData={searchData}
          setSearchData={setSearchData}
        />
        <button className="button" onClick={() => setWeatherSearch(searchData)}>
          Get weather
        </button>
      </div>
      {/*       {weatherSearch && (
        <WeatherData
          weatherSearch={weatherSearch}
          setWeather={setWeather}
          weather={weather}
        />
      )} */}
      {weather && <div className="boxTwo">
        <WeatherData
        // weatherSearch={weatherSearch}
        // setWeather={setWeather}
          weather={weather}
        />
      </div> }
    </div>
  );
}

export default App;
