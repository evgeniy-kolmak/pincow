import axios from 'axios';
import { useState, } from 'react';
import { Navigate } from 'react-router-dom';
import { useWeather } from '../hook/weather';

export default function Interaction({ handleObject }) {
  const token = 'ed91ab4fb4bd6e64a38a185d33502a50';

  const [success, setSuccess] = useState(null);


  const getData = async (url) => {
    try {
      const response = await axios(url);
      handleObject(response);
      setSuccess('success')
    } catch {
      setSuccess('fail')
    }
  }

  useWeather('Minsk')

  function handleSubmit(e) {
    e.preventDefault();
    const city = e.target.city.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${token}`;
    getData(url);

  }


  return (
    <>

      <form onSubmit={handleSubmit}>
        <input name='city' type="text" />
        <button type='submit'>Result</button>

        {success === "success" && (
          <Navigate to="/result" replace={true} />
        )}
        {success === 'fail' && (
          <Navigate to="/error" replace={true} />
        )}

      </form>
    </>
  );
}