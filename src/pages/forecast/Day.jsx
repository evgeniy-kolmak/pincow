import { useWeather } from "../../hook/weather";
import { Typography } from '@mui/material';
export default function Day({ data }) {
  // const { temp, cityName, iconId, description, wind, pressure } = useWeather(data);
  return (
    <Typography variant='h2' >Прогноз на день</Typography>
  );

}