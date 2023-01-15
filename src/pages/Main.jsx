import Map from "../components/Map";
import { Box, Typography, List, ListItem, ListItemText, Grid } from '@mui/material';
import { Menu, Layers, DoNotTouch } from '@mui/icons-material';
import { useDate } from "../hook/date";

export default function Main() {
  const { greeting } = useDate()
  return (
    <Box
      sx={{
        bgcolor: '#fff',
        borderRadius: 3
      }}
    >
      <List>
        <ListItem>
          <ListItemText
            primary={<Typography variant='h2' component='p' >{greeting}, дорогой друг!</Typography>}
            secondary={<Typography variant='h6' component='p'>Очень рады, что вы заглянули к нам.</Typography>} />
        </ListItem>
        <ListItem>
          <Grid container
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            <Grid item md={2} sm={3.5} xs={6}>
              <Typography
                align="center"
                sx={{
                  bgcolor: '#fcad03',
                  p: 0.5,
                  mr: 1,
                  mb: 1,
                  borderRadius: 1.2,
                  fontSize: 30,
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.2rem',
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                  color: 'inherit',
                }}>pincow</Typography>
            </Grid>
            <Grid item md={8} sm={8} xs={12}>
              <Typography fontSize={16}>Небольшое приложение, предоставляющие данные о погоде.</Typography>
            </Grid>
          </Grid>
        </ListItem>
        <ListItem>
          <ListItemText
            primary={<Typography variant='h6' component='p'>Ниже карта с вашим местоположением - кординаты нужны для определения текущего прогноза.</Typography>}
            secondary={<Typography color="#ccc">По желанию,  вы можете запретить его использование.</Typography>}
          />
        </ListItem>
        <Map />
        <Typography color="error" sx={{ display: 'flex', alignItems: 'center', pl: '3%', mt: 0.6, fontSize: 14 }}> <DoNotTouch sx={{ mr: 0.4 }} fontSize="small" color='error' />Примечание: Мы не отслеживаем и не храним данные.</Typography>
        <ListItem>
          <Grid container
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            <Typography sx={{ mr: 1 }} variant="h6" component="p">Для дальнейшего взаимодействия:</Typography >
            <Grid sx={{ display: 'flex', alignItems: 'center' }} item lg={2} md={2.5} sm={4.5} xs={12}>
              <Typography>Откройте меню</Typography><Menu fontSize="large" sx={{ ml: 0.5, mr: 0.5 }} />
            </Grid>
            <Grid sx={{ display: 'flex', alignItems: 'center' }} item md={4} sm={6} xs={12}>
              <Typography> и выберите "Прогноз"</Typography><Layers fontSize="large" sx={{ ml: 0.5, mr: 0.5 }} />
            </Grid>
          </Grid>
        </ListItem>
      </List>

    </Box >

  );
}