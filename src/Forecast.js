import React from "react";
import './App.css';
import ForecastDays from './ForecastDays';


export default function Forecast(props) {
    return (
        <div class="row">
            <div class="col">
                <div class="card city-card" style={{ width: "18rem" }}>
                    <div class="card-body">
                        <p class="card-text city">Kyiv</p>
                        <p>Last updated:<span class="key" id="date-time">{props.time}</span></p>
                        <p>
                            Temperature: <span class="key" id="temperature">{Math.round(props.temperature)} </span
                            ><a href="#" class="temp active" id="celsius"> ℃|</a>
                            <a href="#" class="temp" id="faringeit">℉</a>
                        </p>
                        <p>Humidity: <span class="key" id="humidity">{props.humidity}</span>%</p>

                        <img
                            src={props.picture}
                            alt="weather"
                            id="icon"
                        />

                    </div>
                    
                </div>
            </div>
            <div class="col position-relative">
                <ForecastDays coords={props.coords} />
            </div>
        </div>
    )
}