import { AsyncPaginate } from "react-select-async-paginate";
import { useState } from "react";
import { GEO_API_URL, geoApiOptions } from "../../api";

const Search = (props) => {
  const [search, setSearch] = useState(null);

  const loadOptions = (inputValue) => {
    return fetch(
      `${GEO_API_URL}/cities?minPopulation=100000&namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);

        return {
          options: response.data.map((city) => {
            return {
              lat: `${city.latitude}`,
              lon: `${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
        // props.setSearchData(value)
        // return value;
      })
      .catch((err) => console.error(err));
  };

  const handleOnChange = (searchData) => {
    // console.log(searchData));
    setSearch(searchData);
    props.setSearchData(searchData);
    props.onSearchChange(searchData);
  };

  return (
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={1000}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
};

export default Search;
