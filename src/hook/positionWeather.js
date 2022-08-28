import { useState, useEffect } from "react";
import axios from "axios";


export function usePosition() {
  const token = 'ed91ab4fb4bd6e64a38a185d33502a50';
  const [currentPosition, setCurrentPosition] = useState(null);


  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=ru&units=metric&appid=${token}`;

      axios(url)
        .then(response => setCurrentPosition(response))

    });
  }, []);


  const currentWeather = {
    "temp": Math.round(currentPosition?.data?.main?.temp ?? 18),
    "cityName": currentPosition?.data?.name ?? 'Minsk',
    "iconId": currentPosition?.data?.weather[0]?.icon ?? '01d'
  }

  return currentWeather;



}