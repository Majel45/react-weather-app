import React, { useState } from "react";
import WeatherForecastPreview from "./WeatherForecastPreview";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props){
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastResponse(response){
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded && props.city === forecast.city.name){
    return (
    <div className="WeatherForecast row">
      <div className="row mr-20">
        <div className="col">
          {/* <WeatherForecastPreview data={forecast.list[0]}/>
          <WeatherForecastPreview data={forecast.list[1]}/>
          <WeatherForecastPreview data={forecast.list[2]}/>
          <WeatherForecastPreview data={forecast.list[3]}/>
          <WeatherForecastPreview data={forecast.list[4]}/>
          <WeatherForecastPreview data={forecast.list[5]}/> */}
          <div className="WeatherForecast-day">Thu</div>
          <WeatherIcon code="01d" size={36}/>
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">19°</span>
            <span className="WeatherForecast-temperature-min">10°</span>
          </div>
        </div>
      </div>
    </div>
    );
  } else {
    let apiKey = "38610e778dfb23c2f5bc0f2dc89e84b3";
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleForecastResponse);
    return null;
  }
}