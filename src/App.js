import "./App.css";
import React, { useState } from "react";
import Search from "./components/search/search";
import WeatherData from "./components/WeatherData";

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
  };

  return (
    <div className="box_outer">
      <div className="box_one">
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
      <div className="box_two">
        <WeatherData
        // weatherSearch={weatherSearch}
        // setWeather={setWeather}
        // weather={weather}
        />
      </div>
    </div>
  );
}

export default App;
