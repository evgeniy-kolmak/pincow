import { useState, useEffect } from "react";
import axios from "axios";
import { getRandomCapitalCoords } from '../storage'

export function usePosition() {
  const token = process.env.REACT_APP_TOKEN;
  const randomCoords = getRandomCapitalCoords();
  const [currentPosition, setCurrentPosition] = useState(false);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=ru&units=metric&appid=${token}`;
        axios(url)
          .then(res => {
            setCurrentPosition({
              'temp': Math.floor(res?.data.main.temp),
              'cityName': res?.data.name,
              'iconId': res?.data.weather[0].icon,
              'coords': [lat, lon],
              'assent': true
            });
          })
      },
      () => {
        setCurrentPosition({
          'assent': false,
          'coords': randomCoords,
        })
      }
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return currentPosition;

}

