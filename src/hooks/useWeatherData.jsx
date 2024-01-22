import { useEffect, useState } from "react";
import axios from "axios";

const climateReqURL = `https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=Bengaluru`;

export default function useWeatherData() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(climateReqURL)
      .then((response) => {
        if (response.status === 200 && response.data) {
          setWeatherData(response.data.current);
        } else {
          setError(true);
        }
      })
      .catch((error) => {
        setError(true);
      })
      .finally(() => setLoading(false));
  }, []);
  return [weatherData, error, loading];
}
