import { useWeather } from "../../hook/weather";
import { Navigate } from 'react-router-dom';
import { Typography, Icon, List, ListItem, Tooltip, ListItemText, Box } from '@mui/material';
import { North, Air, Compress, WbTwilight, WbSunny, People, FilterDrama, Opacity, Grain, FormatColorReset, Visibility, FiberManualRecord, AccessTime } from '@mui/icons-material';
import useMediaQuery from '@mui/material/useMediaQuery';


export default function Current({ data }) {
  const { city, base, wind, main } = useWeather(data, 'current');
  const matches = useMediaQuery('@media (max-width:470px)');

  return (
    <Box>
      {!data
        ?
        <Navigate to="/forecast" replace={true} />
        :
        <Box>
          <Typography variant='h2' >Текущий прогноз</Typography>
          <List
            sx={{
              p: 0
            }}
          >
            <ListItem
              sx={{
                display: 'block'
              }}>
              <Typography
                sx={{
                  mb: 0.5,
                  fontWeight: {
                    xs: 400
                  }
                }}
                variant='h3'
                component='h6'>
                {city.name} | {city.country}
              </Typography>
              <Tooltip title="Текущее время в городе" placement="bottom-start">
                <Typography
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mb: 0.6,
                    fontSize: {
                      md: 24,
                      sm: 21,
                      xs: 17,
                    },
                    fontWeight: {
                      md: 600,
                      sm: 500,
                      xs: 400,
                    }
                  }}>
                  <AccessTime
                    sx={{
                      mr: 0.5,
                      fontSize: {
                        md: 32,
                        sm: 27,
                        xs: 23,
                      }
                    }} />
                  {city.time} {city.timezone}
                </Typography>
              </Tooltip>
              <Tooltip title="Население" placement="bottom-start">
                <Typography
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: {
                      md: 17,
                      sm: 15.5,
                      xs: 14,
                    }
                  }}>
                  <People
                    sx={{
                      mr: 0.5,
                      fontSize: {
                        md: 26,
                        sm: 23.5,
                        xs: 21,
                      }
                    }} />
                  {city.population} человек
                </Typography>
              </Tooltip>
            </ListItem>
            <Box
              sx={{
                border: '0.14rem solid #ccc',
                borderRadius: '18px',
                maxWidth: 'max-content',
                p: 0.1
              }}>
              <ListItem
                sx={{
                  p: 1
                }}
              >
                <Icon sx={{
                  fontSize: {
                    md: 90,
                    sm: 75,
                    xs: 55,
                  },
                  mr: 1
                }}>
                  <img src={`../images/icons/${base.iconId}.svg`} alt='' />
                </Icon>
                <ListItemText
                  primary={
                    <Typography
                      sx={{
                        width: matches ? 200 : 'auto',
                        lineHeight: '2rem',
                        fontWeight: 400,
                        fontSize: {
                          md: 34,
                          sm: 30,
                          xs: 26
                        }
                      }}
                    >
                      {base.description}
                    </Typography>}
                  secondary={
                    <Typography
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        fontWeight: 400,
                        width: 'max-content',
                        fontSize: {
                          md: 34,
                          sm: 30,
                          xs: 26
                        }

                      }}>
                      {base.temp}&deg;
                      <Typography
                        component="span"
                        sx={{
                          color: '#939693',
                          fontSize: {
                            md: 16,
                            sm: 15,
                            xs: 13.4
                          }
                        }}>
                        (Ощущается как: {main.tempFeels}&deg;)
                      </Typography>
                    </Typography>
                  } />
              </ListItem>
              <ListItem
                sx={{
                  display: 'flex',
                  alignItems: matches ? 'flex-start' : 'center',
                  flexDirection: matches ? 'column' : 'row',
                  p: 1

                }}
              >
                <Tooltip title="Ветер" placement="bottom-start">
                  <Typography
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      fontSize: {
                        md: 17,
                        sm: 16,
                        xs: 15
                      }
                    }}>
                    <Air
                      sx={{
                        mr: 0.5,
                        fontSize: {
                          md: 30,
                          sm: 27,
                          xs: 23
                        }
                      }} />
                    {wind.direction}
                    <North
                      sx={{
                        transform: `rotate(${wind.deg}deg)`,
                        fontSize: {
                          md: 30,
                          sm: 27,
                          xs: 23
                        }
                      }} />
                    {wind.speed}м/c
                  </Typography>
                </Tooltip>

                {matches
                  ?
                  null
                  :
                  <FiberManualRecord
                    sx={{
                      ml: 1.5,
                      mr: 1.5,
                      fontSize: 12,
                      color: '#ccc'
                    }} />}

                <Tooltip title="Давление" placement="bottom-start">
                  <Typography
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      fontSize: {
                        md: 17,
                        sm: 16,
                        xs: 15
                      },
                      mt: matches ? 0.5 : 0
                    }}>
                    <Compress
                      sx={{
                        mr: 0.5,
                        fontSize: {
                          md: 30,
                          sm: 27,
                          xs: 23
                        }
                      }} />
                    {main.pressure} мм рт. ст.
                  </Typography>
                </Tooltip>
                {matches
                  ?
                  null
                  :
                  <FiberManualRecord
                    sx={{
                      ml: 1.5,
                      mr: 1.5,
                      fontSize: 12,
                      color: '#ccc'
                    }} />}
                <Tooltip title="Видимость" placement="bottom-start">
                  <Typography
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      fontSize: {
                        md: 17,
                        sm: 16,
                        xs: 15
                      },
                      mt: matches ? 0.5 : 0
                    }}>
                    <Visibility
                      sx={{
                        mr: 0.5,
                        fontSize: {
                          md: 30,
                          sm: 27,
                          xs: 23
                        }
                      }} />
                    {main.visibility}км
                  </Typography>
                </Tooltip>
              </ListItem>
            </Box>

            <ListItem
              sx={{
                p: 0.5
              }}
            >
              <Typography
                sx={{
                  display: 'flex',
                  fontSize: {
                    md: 17,
                    sm: 16,
                    xs: 15
                  }
                }}>
                <WbSunny
                  sx={{
                    mr: 0.5,
                    fontSize: {
                      md: 26,
                      sm: 24,
                      xs: 22
                    }
                  }} />
                Восход: {city.sunrise} /
                <WbTwilight
                  sx={{
                    mr: 0.5,
                    fontSize: {
                      md: 26,
                      sm: 24,
                      xs: 22
                    }
                  }} />
                Закат: {city.sunset}
              </Typography>
            </ListItem>
            <ListItem
              sx={{
                p: 0.5
              }}
            >
              <Tooltip title="Облачность" placement="bottom-start">
                <Typography
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: {
                      md: 17,
                      sm: 16,
                      xs: 15.5
                    }
                  }}>
                  <FilterDrama
                    sx={{
                      ml: 0.7,
                      mr: 0.5,
                      fontSize: {
                        md: 27,
                        sm: 25,
                        xs: 23
                      }
                    }} />
                  {main.clouds}%
                </Typography>
              </Tooltip>
              <Tooltip title="Влажность" placement="bottom-start">
                <Typography
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: {
                      md: 17,
                      sm: 16,
                      xs: 15.5
                    }
                  }}>
                  <Opacity
                    sx={{
                      ml: 0.7,
                      mr: 0.5,
                      fontSize: {
                        md: 27,
                        sm: 25,
                        xs: 23
                      }
                    }} />
                  {main.humidity}%
                </Typography>
              </Tooltip>
              <Tooltip title="Вероятность осадков" placement="bottom-start">
                <Typography
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: {
                      md: 17,
                      sm: 16,
                      xs: 15.5
                    }
                  }}>
                  <FormatColorReset
                    sx={{
                      ml: 0.7,
                      mr: 0.5,
                      fontSize: {
                        md: 27,
                        sm: 25,
                        xs: 23
                      }
                    }} />
                  {main.pop}%
                </Typography>
              </Tooltip>
              <Tooltip title="Количество осадков за 3 часа" placement="bottom-start">
                <Typography
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: {
                      md: 17,
                      sm: 16,
                      xs: 15.5
                    }
                  }}>
                  <Grain
                    sx={{
                      ml: 0.7,
                      mr: 0.5,
                      fontSize: {
                        md: 27,
                        sm: 25,
                        xs: 23
                      }
                    }} />
                  {main.count} мм
                </Typography>
              </Tooltip>
            </ListItem>
          </List>
        </Box >}
    </Box>
  );

}