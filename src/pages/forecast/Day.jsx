import { useWeather } from "../../hook/weather";
import { Navigate } from 'react-router-dom';
import { Typography, Box, Grid } from '@mui/material';

export default function Day({ data }) {
  const forecastDay = useWeather(data, 'day');
  const city = data?.city.name;

  return (
    <>
      {!city
        ?
        <Navigate to="/forecast" replace={true} />
        :
        <Box>
          <Grid container spacing={1}>
            <Grid item>
              <Typography variant='h3' component='p'><span style={{ fontWeight: 400 }}>{city}:</span></Typography>
            </Grid>
            <Grid item>
              <Typography variant='h3' component='p'>
                Прогноз на сутки
              </Typography>
            </Grid>
          </Grid>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-evenly',
              mt: 2,
              flexWrap: 'wrap'
            }}
          >
            {forecastDay}
          </Box>
        </Box>}
    </>
  );

}