import { Weather } from "../../hoc/Weather";
import { Navigate, Link as LinkRouter } from 'react-router-dom';
import { Typography, Box, Grid, Breadcrumbs } from '@mui/material';
import { Home, Cloud, DateRange } from '@mui/icons-material';
import useMediaQuery from '@mui/material/useMediaQuery';
import PropTypes from 'prop-types';

export default function Day({ data }) {
  const forecastDay = Weather(data, 'day');
  const city = data?.city.name;
  const matches = useMediaQuery('@media (max-width:470px)');

  return (
    <>
      {!city
        ?
        <Navigate to="/forecast" replace={true} />
        :
        <Box>
          <Breadcrumbs
            maxItems={matches ? 2 : 3}
            aria-label="breadcrumb"
            sx={{
              mb: 2
            }}
          >
            <LinkRouter
              underline="hover"
              color="inherit"
              to="/">
              <Typography
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: {
                    md: 16,
                    sm: 15,
                    xs: 14
                  }
                }}>
                <Home sx={{ mr: 0.5 }} fontSize="inherit" />
                Главная
              </Typography>
            </LinkRouter>
            <LinkRouter
              underline="hover"
              color="inherit"
              to="/forecast">
              <Typography
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: {
                    md: 16,
                    sm: 15,
                    xs: 14
                  }
                }}>
                <Cloud sx={{ mr: 0.5 }} fontSize="inherit" />
                Прогноз погоды
              </Typography>
            </LinkRouter>
            <Typography
              sx={{
                display: 'flex',
                alignItems: 'center',
                fontSize: {
                  md: 16,
                  sm: 15,
                  xs: 14
                }
              }}
              color="text.primary"
            >
              <DateRange sx={{ mr: 0.5 }} fontSize="inherit" />
              На сутки
            </Typography>
          </Breadcrumbs>
          <Grid container spacing={1}>
            <Grid item>
              <Typography variant='h3' component='p'><span style={{ fontWeight: 400 }}>{city}:</span></Typography>
            </Grid>
            <Grid item>
              <Typography variant='h3' component="h1">
                Прогноз на сутки
              </Typography>
            </Grid>
          </Grid>
          <Box>
            {forecastDay}
          </Box>
        </Box>}
    </>
  );

}

Day.propTypes = {
  data: PropTypes.object
}