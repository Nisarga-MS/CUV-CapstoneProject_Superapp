import React from "react";
import useWeatherData from "../../hooks/useWeatherData";
import TemperatureImg from "../../assets/icons/Temperature.png";
import HumidityImg from "../../assets/icons/humidity.png";
import WindImg from "../../assets/icons/wind.png";
import styles from "./Weather.module.css";

export default function Weather({ dateTime }) {
  const [weatherData, error, loading] = useWeatherData();
  return (
    <div className={styles.weather}>
      <div className={styles.dateTime}>
        <h3>{dateTime.date}</h3>
        <h3>{dateTime.time}</h3>
      </div>
      {loading ? (
        <div className={styles.loading}>Loading</div>
      ) : !error ? (
        <div className={styles.weatherData}>
          {weatherData && (
            <div>
              <div className={styles.weatherCondition}>
                <img src={weatherData.condition.icon} alt="weather-icon" />
                <p
                  style={
                    weatherData.condition.text.length > 15
                      ? { fontSize: "10.5px" }
                      : null
                  }
                >
                  {weatherData.condition.text}
                </p>
              </div>
              <hr />
              <div className={styles.weatherTemp}>
                <h3>{weatherData.temp_c}°C</h3>
                <p>
                  <img src={TemperatureImg} alt="Temperature" />
                  {weatherData.pressure_mb} mbar
                  <br />
                  Pressure
                </p>
              </div>
              <hr />
              <div className={styles.weatherwh}>
                <p>
                  <img src={WindImg} alt="wind" />
                  <span>
                    {weatherData.wind_kph} km/h
                    <br />
                    Wind
                  </span>
                </p>
                <p>
                  <img src={HumidityImg} alt="humidity" />
                  <span>
                    {weatherData.humidity}%<br />
                    Humidity
                  </span>
                </p>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className={`${styles.weatherData} ${styles.apiError}`}>
          {" "}
          Error!
        </div>
      )}
    </div>
  );
}
