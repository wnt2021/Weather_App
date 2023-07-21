import React from "react";
import Weather from "./Weather";
import { useState } from "react";

const CountryWeather = () => {
  const [nameCity, setNameCity] = useState("");
  const [cityWeather, setCityWeather] = useState("");

  //Function to get fetch data from Weather service
  const getWeatherData = async () => {
    const dataWeather = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${nameCity}&appid=c8faa6bdd0890b10b8350c18a28ec9a1&units=metric`
    );
    const json = await dataWeather.json();
    setCityWeather(json);
  };

  //We handle the input of the city provided
  const handleCity = (event) => {
    setNameCity(event.target.value);
  };

  //We use this function preventing the web from refreshing
  const handleSubmit = (event) => {
    event.preventDefault();
    getWeatherData();
  };

  return (
    <>
      <Weather dataWeather={cityWeather} />
      <div className="container d-flex justify-content-center align-items-center">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="weather" className="form-label">
              Put the Contry to show the Weather
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={nameCity}
              onChange={handleCity}
            ></input>
            <button
              type="submit"
              className="btn btn-warning m-5"
              onClick={getWeatherData}
            >
              Change Weather
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CountryWeather;
