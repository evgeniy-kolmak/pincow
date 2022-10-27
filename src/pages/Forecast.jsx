import { TextField, Button } from '@mui/material';
import axios from 'axios';
import { useState, } from 'react';
import { Navigate } from 'react-router-dom';


export default function Forecast(props) {
  const token = 'ed91ab4fb4bd6e64a38a185d33502a50';

  const { handleData, handleCity } = props;

  const [success, setSuccess] = useState(null);

  const getData = async (url) => {
    try {
      const response = await axios(url);
      handleData(response.data);
      setSuccess('success')
    } catch (error) {
      setSuccess('fail');

    }
  }


  function handleSubmit(e) {
    e.preventDefault();
    const city = e.target.city.value.trim();
    handleCity(city);
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ru&units=metric&appid=${token}`;
    getData(url);

  }


  return (

    <form onSubmit={handleSubmit}>
      <TextField label="Enter City" variant="outlined" name='city' type="text" />
      <Button variant="contained" type='submit'>Send</Button>

      {success === "success" && (
        <Navigate to="/done/current" replace={true} />
      )}
      {success === 'fail' && (
        <Navigate to="/error" replace={true} />
      )}
    </form>

  );
}