import { useState, useEffect } from "react";
import axios from "axios";
import { useTemp } from "./temp";

export function usePosition() {
  const token = 'ed91ab4fb4bd6e64a38a185d33502a50';
  const [currentPosition, setCurrentPosition] = useState(null);


  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=ru&appid=${token}`;

      axios(url)
        .then(response => setCurrentPosition(response))

    });
  }, []);


  const currentWeather = {
    "temp": useTemp(currentPosition?.data?.main?.temp),
    "cityName": currentPosition?.data?.name,
    "iconId": currentPosition?.data?.weather[0]?.icon
  }

  return currentWeather;



}