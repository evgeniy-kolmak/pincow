import { Box, Typography, List, ListItem, ListItemText, ListItemAvatar, Avatar, Button } from '@mui/material';
import { Person, Language, Insights, Map, East, KeyboardBackspace, ZoomInMap, Filter1, Filter5, People, Compress, Visibility, Opacity } from '@mui/icons-material';
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
          <ListItemAvatar>
            <Avatar>
              <Person />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Вы" secondary="Пользователь" />
          <East fontSize='large' sx={{ mr: 3 }} />
          <ListItemAvatar>
            <Avatar>
              <Language />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Заходите на сайт" secondary="PINCOW" />
          <East fontSize='large' sx={{ mr: 3 }} />
          <ListItemAvatar>
            <Avatar>
              <Map />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Используете карту" secondary="Или ручной ввод" />
          <East fontSize='large' sx={{ mr: 3 }} />
          <ListItemAvatar>
            <Avatar>
              <Insights />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Результат" secondary="Получаете текущий прогноз" />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={<Typography variant='h4' component='p'>Давайте более детально.</Typography>}
            secondary={<Typography sx={{ fontSize: 18 }}>На каждой странице есть подсказки. (Так же всплывающие "При наведении")</Typography>} />

        </ListItem>
        <ListItem>
          <ListItemText
            primary={<Typography variant='h6' component='p'>При успешной отправке, вам отобразится текущий прогноз.</Typography>}
            secondary={<Typography sx={{ display: 'flex', alignItems: 'center' }}>
              <People sx={{ mr: 0.5 }} /> Население
              <Visibility sx={{ ml: 1, mr: 0.5 }} /> Видимость
              <Compress sx={{ ml: 1, mr: 0.5 }} /> Давление
              <Opacity sx={{ ml: 1, mr: 0.5 }} /> Влажность и т.д. </Typography>} />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={<Typography variant='h6' component='p'>Меню управления прогнозом</Typography>}
            secondary={
              <Typography sx={{ display: 'flex' }}><KeyboardBackspace
                sx={{
                  bgcolor: '#1F1F28',
                  color: '#fff',
                  borderRadius: '50%',
                  width: 45,
                  height: 45,
                  p: 0.5,
                  mt: 1,
                }
                } />
              </Typography>}
          />
        </ListItem>
        <ListItem>
          <Typography variant='h6' component='p'>Пункты меню:</Typography>
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <ZoomInMap />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Текущий" secondary="В данный момент" />
          <ListItemAvatar>
            <Avatar>
              <Filter1 />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="На сутки" secondary="24 часа" />
          <ListItemAvatar>
            <Avatar>
              <Filter5 />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="На 5 дней" secondary="Среднее значение в день" />
        </ListItem>
      </List>
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