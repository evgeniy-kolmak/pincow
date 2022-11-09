import Map from "../components/Map";
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import { Menu, Layers, DoNotTouch } from '@mui/icons-material';
import { useDate } from "../hook/date";

export default function Main() {
  const { greeting } = useDate()
  return (
    <Box
      sx={{
        bgcolor: '#fff',
      }}
    >
      <List>
        <ListItem>
          <ListItemText
            primary={<Typography variant='h2' component='p'>{greeting}, дорогой друг!</Typography>}
            secondary={<Typography variant='h6' component='p'>Очень рады, что вы заглянули к нам.</Typography>} />
        </ListItem>
        <ListItem>
          <Typography
            sx={{
              bgcolor: '#fcad03',
              p: 0.5,
              m: 0.5,
              borderRadius: 1.2,
              fontSize: 30,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.2rem',
              textDecoration: 'none',
              textTransform: 'uppercase',
              color: 'inherit',
            }}>pincow</Typography>
          <Typography fontSize={18}> = небольшое приложение, предоставляющие данные о погоде.</Typography>
        </ListItem>
        <ListItem>
          <ListItemText
            primary={<Typography variant='h6' component='p'>Ниже карта с вашим местоположением - кординаты нужны для определения текущего прогноза.</Typography>}
            secondary={<Typography color="#ccc">По желанию,  вы можете запретить его использование.</Typography>}
          />
        </ListItem>
      </List>
      <Map size={['100%', '380px']} />

      <Typography color="error" sx={{ display: 'flex', alignItems: 'center', pl: '3%', mt: 0.6, fontSize: 14 }}> <DoNotTouch sx={{ mr: 0.4 }} fontSize="small" color='error' />Примечание: Мы не отслеживаем и не храним данные.</Typography>
      <List>
        <ListItem>
          <Typography sx={{ display: 'flex', alignItems: 'center', fontSize: 18 }} >Для дальнейшего взаимодествия: Открой меню <Menu fontSize="large" sx={{ ml: 0.3, mr: 0.3 }} /> и выбери <Layers fontSize="large" sx={{ ml: 0.3, mr: 0.3 }} /> "Прогноз".</Typography>
        </ListItem>
      </List>
    </Box>

  );
}