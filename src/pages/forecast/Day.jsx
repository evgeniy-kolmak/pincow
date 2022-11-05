import { useWeather } from "../../hook/weather";
import { Typography, Box } from '@mui/material';
export default function Day({ data }) {
  const forecastDay = useWeather(data, 'day');
  const city = data.city.name;
  return (
    <>
      <Typography variant='h2'>{city}: Прогноз на сутки</Typography>
      <Box sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        mt: 1.5
      }}>{forecastDay}
      </Box>
    </>

  );

}