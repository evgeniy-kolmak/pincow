import { useWeather } from "../../hook/weather";
import { Typography } from '@mui/material';
export default function Week({ data }) {
  const forecastWeek = useWeather(data, 'week');
  const city = data.city.name;

  return (
    <>
      <Typography variant='h2' >{city}: Прогноз на 5 дней  </Typography>
      {forecastWeek}
    </>
  );

}