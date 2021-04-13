import React, { useState } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props){
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response){
    setForecast(response.data.daily);
    setLoaded(true);
  }
  
  if (loaded) {
    return (
    <div className="WeatherForecast row">
      <div className="row mr-20">
        <div className="col">
          <WeatherForecastDay data={forecast[0]}/>
        </div>
      </div>
    </div>
    );
  } else {
    let apiKey = "38610e778dfb23c2f5bc0f2dc89e84b3";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
} 