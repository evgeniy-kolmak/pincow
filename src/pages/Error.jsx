import { Link } from 'react-router-dom';
import { Card, Box, Button, Typography } from '@mui/material';
import { FormatQuote, Clear } from '@mui/icons-material';

export default function Error({ data }) {
  const city = data;

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
    }}>
      <Card
        sx={{
          maxWidth: "100%",
          padding: "30px",
        }}
      >
        <Typography sx={{ display: 'flex', alignItems: 'center' }} variant='h1'>Упс!<Clear color="error" sx={{ fontSize: 100 }} /></Typography>
        <Typography variant='h5'>Что-то пошло не так. Возможно где-то опечатка.</Typography>
        <Typography variant='h5' sx={{ display: 'flex', alignItems: 'center', fontSize: 28, mt: 0.4, mb: 1 }}>Вы искали:
          <FormatQuote sx={{ alignSelf: 'end', ml: 1, mr: 0.4 }} />
          <Typography sx={{ color: '#2b5c8a', textDecoration: 'underline', fontSize: 33, cursor: 'pointer' }}><a href={`http://google.com/search?q=${city}`} target="_blank">{city}</a></Typography>
          <FormatQuote sx={{ alignSelf: 'start', ml: 0.2 }} /></Typography>
        <Typography variant='h6'>Проверьте правильность введеных данных и попробуйте еще раз.</Typography>
      </Card>

      <Button
        variant="contained"
        sx={{
          width: 'max-content',
          mt: 4,
        }}
        type='submit'>
        <Link
          style={{
            color: 'inherit',
            textDecoration: 'none',
          }}
          to='/forecast'>Попробовать снова</Link>
      </Button>
    </Box >
  )
}