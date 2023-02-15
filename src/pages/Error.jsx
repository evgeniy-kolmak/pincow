import { Link as LinkRouter, Navigate } from 'react-router-dom';
import { Card, Box, Button, Typography, Breadcrumbs } from '@mui/material';
import { FormatQuote, Clear, Home, Error as ErrorMui } from '@mui/icons-material';

export default function Error({ city }) {

  return (
    <>
      {!city
        ?
        <Navigate to="/forecast" replace={true} />
        :
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Card
            sx={{
              maxWidth: "100%",
              padding: 2,
            }}
          >
            <Breadcrumbs aria-label="breadcrumb"
              sx={{
                mb: 2
              }}
            >
              <LinkRouter
                underline="hover"
                color="inherit"
                to="/"
                sx={{
                  fontSize: {
                    md: 16,
                    sm: 15,
                    xs: 14
                  }
                }}
              >
                <Home sx={{ mr: 0.5 }} fontSize="inherit" />
                Главная
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
                <ErrorMui sx={{ mr: 0.5 }} fontSize="inherit" />
                Ошибка
              </Typography>
            </Breadcrumbs>
            <Typography
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
              variant='h2'
              component='h1'
            >
              Упс!
              <Clear color="error"
                sx={{
                  fontSize: {
                    md: 60,
                    sm: 50,
                    xs: 32
                  }
                }} />
            </Typography>
            <Typography variant='h6'>Что-то пошло не так. Возможно где-то опечатка.</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
              <Typography
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: {
                    md: 28,
                    sm: 24,
                    xs: 20
                  },
                  mt: 0.4,
                  mb: 1
                }}>
                Вы искали:
              </Typography>
              <Box sx={{ display: 'flex' }}>
                <FormatQuote
                  sx={{
                    alignSelf: 'end',
                    ml: 1,
                    mr: 0.4,
                    fontSize: {
                      md: 24,
                      sm: 22,
                      xs: 20
                    }
                  }} />
                <Typography
                  sx={{
                    color: '#2b5c8a',
                    textDecoration: 'underline',
                    fontSize: {
                      md: 30,
                      sm: 25,
                      xs: 20
                    },
                    cursor: 'pointer'
                  }}>
                  <a href={`http://google.com/search?q=${city}`} target="_blank" rel='noreferrer'>{city}</a>
                </Typography>
                <FormatQuote
                  sx={{
                    alignSelf: 'start',
                    ml: 0.2,
                    fontSize: {
                      md: 24,
                      sm: 22,
                      xs: 20
                    },
                  }} />
              </Box>
            </Box>
            <Typography variant='h6'>Проверьте правильность введеных данных и попробуйте еще раз.</Typography>
          </Card>
          <Button
            variant="contained"
            sx={{
              width: 'max-content',
              mt: 4,
            }}
            type='submit'>
            <LinkRouter
              style={{
                color: 'inherit',
                textDecoration: 'none',
              }}
              to='/forecast'>Попробовать снова</LinkRouter>
          </Button>
        </Box >}
    </>
  )
}