import { useState, useEffect } from "react";
import axios from "axios";
import { getRandomCapitalCoords, getTimezone, symbolToUpperCase, getDerectionWind } from '../storage'
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
            const city = res?.data;
            const timezone = getTimezone(city.timezone);

            setCurrentPosition({
              "city": city.name,
              "country": city?.sys.country,
              "timezoneGMT": timezone.toString().split('')[0] !== '-' && timezone.toString().split('')[0] !== 0 ? `(GMT+${timezone})` : `(GMT${timezone})`,
              "time": new Date().toTimeString().slice(0, 5),
              "iconId": city.weather[0].icon,
              "description": symbolToUpperCase(city.weather[0].description),
              "temp": Math.floor(city.main.temp),
              "tempFeels": Math.round(city.main.feels_like),
              "sunrise": new Date(city.sys.sunrise * 1000).toTimeString().slice(0, 5),
              "sunset": new Date(city.sys.sunset * 1000).toTimeString().slice(0, 5),
              "direction": getDerectionWind(city),
              "speed": Math.round(city.wind.speed),
              "deg": city.wind?.deg,
              "pressure": Math.round(city.main.pressure * 0.750062),
              "visibility": Math.round(city.visibility / 1000),
              "clouds": city.clouds.all,
              "humidity": city.main.humidity,
              "count": (city.rain?.['1h'] || city.snow?.['1h']) ?? 0,
              "currentTimezone": getTimezone(city.timezone),
              "coords": [lat, lon],
              "assent": true
            });
          })
      },
      () => {
        setCurrentPosition({
          "assent": false,
          "coords": randomCoords,
        })
      }
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return currentPosition;

}

