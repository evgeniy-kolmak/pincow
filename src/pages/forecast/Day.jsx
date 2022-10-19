import { useWeather } from "../../hook/weather";
import { Typography } from '@mui/material';
export default function Day({ data }) {
  const forecastDay = useWeather(data, 'day');
  const city = data.city.name;
  return (
    <>
      <Typography variant='h2'>{city}: Прогноз на сутки</Typography>
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly"
      }}>{forecastDay}</div>
    </>

  );

}