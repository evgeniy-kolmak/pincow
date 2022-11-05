import { useState, useEffect } from "react";
import axios from "axios";

export function usePosition() {
  const token = 'ed91ab4fb4bd6e64a38a185d33502a50';

  const [currentPosition, setCurrentPosition] = useState(
    {
      'temp': 18,
      'cityName': 'Минск',
      'iconId': '01d'
    }
  );


  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=ru&units=metric&appid=${token}`;
      axios(url)
        .then(res => {
          setCurrentPosition({
            'temp': Math.floor(res?.data.main.temp),
            'cityName': res?.data.name,
            'iconId': res?.data.weather[0].icon
          });
        })

    });
  }, []);


  return currentPosition;

}

