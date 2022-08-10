import { AsyncPaginate } from 'react-select-async-paginate';
import {useState} from "react";
import { GEO_API_URL, geoApiOptions } from '../../api';

const Search = (props) => {

    //const [search, setSearch] = useState(null);

    const loadOptions = (inputValue) => {
        return (
            fetch(`${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`, geoApiOptions)
	.then(response => response.json())
	.then(response =>  {
        console.log(response);
        
        return {
            options : response.data.map((city)=> {
                return {
                    lat: `${city.latitude}`,
                    lon: `${city.longitude}`,
                    label: `${city.name}, ${city.countryCode}`,
                }
            })
        }
       // props.setSearchData(value)
       // return value;

        
    })
	.catch(err => console.error(err))
    )}

    const handleOnChange = (entry) => {
       console.log(entry)
       props.setSearchData(entry)
    }

    return (
        
        <AsyncPaginate 
            placeholder="Search for city"
            debounceTimeout={1000}
            value={props.searchData.label}
            onChange={handleOnChange}
            loadOptions={loadOptions}
        />

    )
};

export default Search;