
import './App.css';
import React, {useState} from 'react';
import Search from './components/search/search'
import WeatherData from './components/WeatherData';


function App() {

  const [searchData, setSearchData] = useState({lat: 40.7, lon: 73.5, label: "New York"})
  const [weather, setWeather] = useState(null)

  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  }

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} searchData={searchData} setSearchData={setSearchData}/>
      <WeatherData searchData={searchData} setWeather={setWeather} weather={weather}/>
    </div>
  );
}

export default App;
