import { useWeather } from "../../hook/weather";
import { Typography, Grid, Box } from '@mui/material';
export default function Week({ data }) {
  const forecastWeek = useWeather(data, 'week');
  const city = data.city.name;

  return (
    <Box>
      <Grid container spacing={1}>
        <Grid item>
          <Typography variant='h3' component='p'><span style={{ fontWeight: 400 }}>{city}:</span></Typography>
        </Grid>
        <Grid item>
          <Typography variant='h3' component='p'>
            Прогноз на 5 дней
          </Typography>
        </Grid>
      </Grid>
      {forecastWeek}
    </Box>
  );

}