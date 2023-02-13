import { Box, Typography, List, ListItem, ListItemText, ListItemAvatar, Avatar, Button, Grid } from '@mui/material';
import {
  Person,
  Language,
  Insights,
  Map,
  People,
  Compress,
  Visibility,
  Opacity,
  DateRange,
  Today,
  CalendarMonth
} from '@mui/icons-material';
import { Link } from 'react-router-dom';


export default function About() {

  return (
    <Box sx={{
      bgcolor: '#fff',
      borderRadius: 3
    }}>
      <List >
        <ListItem>
          <Typography variant='h2' component='p'>Как это работает?</Typography>
        </ListItem>
        <ListItem>
          <Grid container spacing={4}>
            <Grid
              item
              sx={{
                display: 'flex',
                alignItems: 'center'
              }}>
              <ListItemAvatar>
                < Avatar >
                  <Person />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Вы" secondary="Пользователь" />
            </Grid>
            <Grid
              item
              sx={{
                display: 'flex',
                alignItems: 'center'
              }}>
              <ListItemAvatar>
                <Avatar>
                  <Language />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Заходите на сайт" secondary="PINCOW" />
            </Grid>
            <Grid
              item
              sx={{
                display: 'flex',
                alignItems: 'center'
              }}>
              <ListItemAvatar>
                <Avatar>
                  <Map />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Используете карту" secondary="Или ручной ввод" />
            </Grid>
            <Grid
              item
              sx={{
                display: 'flex',
                alignItems: 'center'
              }}>
              <ListItemAvatar>
                <Avatar>
                  <Insights />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Результат" secondary="Получаете текущий прогноз" />
            </Grid>
          </Grid>
        </ListItem >
        <ListItem>
          <ListItemText
            primary={<Typography sx={{
              fontSize: {
                md: 34,
                sm: 30,
                xs: 26
              },
              fontWeight: 400,
              mb: {
                md: 1,
                sm: 0.7,
                xs: 0.5
              }
            }}>Давайте более детально.</Typography>}
            secondary={<Typography
              sx={{
                fontSize: {
                  md: 18,
                  sm: 16.5,
                  xs: 15
                }
              }}>На каждой странице есть подсказки. (Так же всплывающие "При наведении")</Typography>} />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={<Typography variant='h6' component='p'
              sx={{
                mb: {
                  md: 1.8,
                  sm: 2.3,
                  xs: 2.6
                }
              }}>При успешной отправке, вам отобразится текущий прогноз.</Typography>}
            secondary={
              <Grid
                container
                spacing={3.5}
                sx={{
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <Grid item>
                  <Typography> <People sx={{ mr: 0.5, color: '#000', verticalAlign: 'middle' }} /> Население</Typography>
                </Grid>
                <Grid item>
                  <Typography><Visibility sx={{ mr: 0.5, color: '#000', verticalAlign: 'middle' }} /> Видимость</Typography>
                </Grid>
                <Grid item>
                  <Typography><Compress sx={{ mr: 0.5, color: '#000', verticalAlign: 'middle' }} /> Давление</Typography>
                </Grid>
                <Grid item>
                  <Typography><Opacity sx={{ mr: 0.5, color: '#000', verticalAlign: 'middle' }} /> Влажность и т.д.</Typography>
                </Grid>
              </Grid>
            } />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={<Typography variant='h6' component='p'>Меню управления страницами прогноза:</Typography>}
          />
        </ListItem>
        <ListItem>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              sx={{
                display: 'flex',
                alignItems: 'center'
              }}>
              <ListItemAvatar>
                <Avatar>
                  <Today />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Текущий" secondary="В данный момент" />
            </Grid>    <Grid
              item
              sx={{
                display: 'flex',
                alignItems: 'center'
              }}>
              <ListItemAvatar>
                <Avatar>
                  <DateRange />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="На сутки" secondary="24 часа" />
            </Grid>
            <Grid
              item
              sx={{
                display: 'flex',
                alignItems: 'center'
              }}>
              <ListItemAvatar>
                <Avatar>
                  <CalendarMonth />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="На 5 дней" secondary="Среднее значение в день" />
            </Grid>
          </Grid>
        </ListItem>
      </List >
      <Button sx={{ ml: 5, mb: 5, mt: 3 }} variant="contained"><Link
        style={{
          color: 'inherit',
          textDecoration: 'none',
        }}
        to='/forecast'>Попробовать</Link>
      </Button>
    </Box >

  );
}