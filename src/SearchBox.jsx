import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "cb9e19a614919c24c6700a2f6b40636f";

    let getWeatherInfo = async () => {
        try {
            let res = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
            let jsonRes = await res.json();

            // Check if the city is not found in the API response
            if (jsonRes.cod === '404') {
                throw new Error("City not found");
            }

            let result = {
                city: city,
                temp: jsonRes.main.temp,
                tempMin: jsonRes.main.temp_min,
                tempMax: jsonRes.main.temp_max,
                humidity: jsonRes.main.humidity,
                feelsLike: jsonRes.main.feels_like,
                weather: jsonRes.weather[0].description
            };
            console.log(result);
            return result;
        } catch (err) {
            throw err;
        }
    };

    let handleChange = (evt) => {
        setCity(evt.target.value);
    }

    let handleSubmit = async (evt) => {
        try {
            evt.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
            setError(false); // Reset error state on successful fetch
        } catch (err) {
            console.error("Error fetching weather data:", err);
            setError(true); // Set error state to true on fetch error
        }
    }

    return (
        <div className='Searchbox'>
            <h3>Search for weather</h3>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="filled" required value={city} onChange={handleChange}/>
                <br/><br/>
                <Button variant="contained" type="submit"> Search </Button>
                {error && <p style={{color:"red"}}>No such place in our API</p>}
            </form>
        </div>
    );
}
