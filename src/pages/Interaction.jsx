import axios from 'axios';
import { useState, } from 'react';

export default function Interaction() {
  const token = 'ed91ab4fb4bd6e64a38a185d33502a50';
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState(null);



  const getData = async (url) => {
    try {
      const response = await axios(url);
      setWeather(response);
    } catch {
      console.log('ошибка');
    }
  }


  function handleSubmit(e) {
    e.preventDefault();
    const city = e.target.city.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${token}`;
    setCity(city);
    getData(url);
  }
  return (
    <>
      <h1>{city} {weather ? Math.round(weather?.data?.main?.temp - 273) : null} </h1>
      <img src={weather ? `https://openweathermap.org/img/wn/${weather?.data?.weather[0].icon}@2x.png` : null} />
      <form onSubmit={handleSubmit}>
        <input name='city' type="text" />
        <button type='submit'>Get weather</button>
      </form>
    </>
  );
}