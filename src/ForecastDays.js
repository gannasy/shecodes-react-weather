import React from "react";
import './App.css';
import axios from "axios";

const APIKEY = 'ef83a86d6c6e19e2b4352f1ab9249fd9';

export default function ForecastDays(props) {

    function getForecast(coords) {

        let url = `https://api.openweathermap.org/data/3.0/onecall?lat=${coords.lat}&lon=${coords.lon}&appid=${APIKEY}&units=metric`;
        axios.get(url)
            .then(displayforecast);

    }

    function displayforecast(response) {

        let forecastAPI = response.data.daily;
        console.log(forecastAPI);


    }
    return (
        <div
            class="card weather"
            id="weather-forecast"
            style={{ width: "28rem" }}>
            <div class="row">
                <div class="col-2">
                    <div class="weather-forecast-date"></div>

                    <img
                        src=""
                        alt=""
                        width="42"
                    />
                    <div class="weather-forecast-temperature">
                        <span class="temp-max"></span>

                    </div >
                </div >

            </div>
        </div>
    )
}