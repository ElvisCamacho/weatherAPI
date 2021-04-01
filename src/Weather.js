import React, { useState, useEffect } from "react";
import getWeatherData from "./api/axios";

function Weather() {
  const [weather, setWeather] = useState("");
  const [city, setcity] = useState("Copenhagen");

  const getData = async () => {
    try {
      const data = await getWeatherData(city);
      console.log(data);
      const { main } = data;
      console.log(main);

      setWeather(main);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <input
        onChange={(e) => setcity(e.target.value)}
        type="text"
        placeholder="Enter city name"
      />
      <button onClick={(e) => getData()}> Click to search</button>
      <br />
      <br />

      <div>
        <h3>
          The temperature in {<u>{city}</u>} is{" "}
          {parseFloat(weather.temp - 273.15).toFixed(1)}°C
        </h3>
        <h5>
          Min: {parseFloat(weather.temp_min - 273.15).toFixed(1)}°C || Max:{" "}
          {parseFloat(weather.temp_max - 273.15).toFixed(1)}°C || Humidity:{" "}
          {parseFloat(weather.humidity - 273.15).toFixed(1)}%
        </h5>
      </div>
    </div>
  );
}
export default Weather;
