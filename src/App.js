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

  const handleOnSearchChange = (searchData) => {

    const lat = Math.round(searchData.lat * 10)/10;
    const lon = Math.round(searchData.lon * 10)/10;

    console.log("options")
    console.log(process.env.REACT_APP_APIKEY)

    fetch(`https://weatherbit-v1-mashape.p.rapidapi.com/current?lon=${lon}&lat=${lat}`, options)

    // fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=dd29010c85975f872fbe102c69500ff1`)
    .then(response => response.json())
    .then(response => setWeather(response))
    .catch(err => console.error(err));

  };

  return (
    <div className="boxOuter">
      <div className="boxOne">
        <Search
          onSearchChange={handleOnSearchChange}
          searchData={searchData}
          setSearchData={setSearchData}
        />
      </div>

      {weather && <div className="boxTwo">
        <WeatherData
          weather={weather}
        />
      </div> }
    </div>
  );
}

export default App;
