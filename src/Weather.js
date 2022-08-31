import React, { useState } from "react";
import './App.css';
import Search from './Search';
import Forecast from './Forecast';
import axios from "axios";


const DAYS = ["Sunday", "Monday", "Tuesday", "Wensday", "Thurthday", "Friday", "Saturday", "Sunday"];
const APIKEY = 'ef83a86d6c6e19e2b4352f1ab9249fd9';

export default function Weather() {
    let [temperature, setTemperature] = useState(null);
    let [humidity, setHumidity] = useState(null);
    let [time, setTime] = useState(null);
    let [image, setPicture] = useState("http://openweathermap.org/img/wn/01d@2x.png");
    let [coords, setCoords] = useState(null);
    let url = `https://api.openweathermap.org/data/2.5/weather?q=Kyiv&appid=${APIKEY}&units=metric`;

    function formatTime(timestamp) {
        let date = new Date(timestamp);
        console.log(date);
        let day = DAYS[date.getDay()];
        let timeHours = date.getHours();
        if (timeHours < 10) {
            timeHours = `0${timeHours}`;
        }
        let timeMins = date.getMinutes();
        if (timeMins < 10) {
            timeMins = `0${timeMins}`;
        }
        return ` ${day} ${timeHours}:${timeMins}`;
    }


    function showTemperature(response) {
        setTemperature(response.data.main.temp);
        setHumidity(response.data.main.humidity);
        setTime(formatTime(response.data.dt * 1000));
        setPicture(`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
        setCoords(response.data.coord);

    }



    axios.get(url).then(showTemperature);

    return (<div className="Weather">
        <div class="container position-relative">
            <div class="card border-primary" style={{ width: "50rem" }}>
                <div class="card-body">

                    <Search />
                    <Forecast temperature={temperature} humidity={humidity} time={time} picture={image} coords={coords} />

                </div>
            </div>
            <span class="key" id="humidity"><a href="https://github.com/gannasy/shecodes-react-weather">My code on GitHub</a></span>
        </div>

    </div>
    );
}