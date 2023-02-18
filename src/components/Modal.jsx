import { Typography, Icon, Box, Modal, List, ListItem, ListItemText, Divider, IconButton } from '@mui/material';
import { North, Air, Compress, WbTwilight, WbSunny, FilterDrama, Opacity, Grain, Visibility, FiberManualRecord, AccessTime, Close, Today } from '@mui/icons-material';
import { usePosition } from '../hook/positionWeather';
import useMediaQuery from '@mui/material/useMediaQuery';
import PropTypes from 'prop-types';

export default function CurrentForecastModal(props) {
  const matches = useMediaQuery('@media (max-width:500px)');
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    width: matches ? 300 : {
      lg: 500,
      md: 470,
      sm: 445,
      xs: 420
    },
    boxShadow: 24,
    p: matches ? ' 0.5rem 0.6rem 1rem 0.6rem' : ' 0.5rem 1.5rem 1rem 1.5rem',
    outline: 'none',
    borderRadius: 3
  };
  const { openModal, handleCloseModal } = props;
  const {
    city,
    country,
    time,
    timezoneGMT,
    iconId,
    description,
    temp,
    tempFeels,
    direction,
    deg,
    speed,
    visibility,
    pressure,
    clouds,
    count,
    humidity,
    sunrise,
    sunset
  } = usePosition();

  return (
    <Modal
      open={openModal}
      onClose={handleCloseModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <List>
          <ListItem>
            <Today sx={{ color: '#737372', mr: 1 }} />
            <Typography variant='h4' component='span' sx={{ flexGrow: 1 }}>Сейчас</Typography>
            <IconButton onClick={handleCloseModal}>
              <Close />
            </IconButton>
          </ListItem>
          <Divider
            sx={{ mb: 1 }}
          />
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
              {city} | {country}
            </Typography>
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
              {time} {timezoneGMT}
            </Typography>
          </ListItem>
          <Box
            sx={{
              border: '0.14rem solid #ccc',
              borderRadius: '18px',
              maxWidth: 'max-content',
              p: 0.1,
              mb: 0.7
            }}>
            <ListItem
              sx={{
                p: 1
              }}>
              <Icon sx={{
                fontSize: {
                  md: 90,
                  sm: 75,
                  xs: 55,
                },
                mr: 1
              }}>
                <img src={`../images/icons/${iconId}.svg`} alt='' />
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
                    }}>
                    {description}
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
                    {temp}&deg;
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
                      (Ощущается как: {tempFeels}&deg;)
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
              }}>
              <Typography
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: {
                    md: 16,
                    sm: 15,
                    xs: 14.5
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
                {matches ? <Typography component='span'
                  sx={{
                    fontWeight: 450
                  }}
                >Ветер:</Typography> : null}&nbsp;{direction}
                <North
                  sx={{
                    transform: `rotate(${deg}deg)`,
                    fontSize: {
                      md: 30,
                      sm: 27,
                      xs: 16
                    }
                  }} />
                {speed}м/c
              </Typography>
              {matches
                ?
                null
                :
                <FiberManualRecord
                  sx={{
                    ml: 0.9,
                    mr: 0.9,
                    fontSize: 12,
                    color: '#ccc'
                  }} />}
              <Typography
                sx={{
                  display: 'flex',
                  alignItems: matches ? 'flex-end' : 'center',
                  fontSize: {
                    md: 16,
                    sm: 15,
                    xs: 14.5
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
                {matches ? <Typography component='span'
                  sx={{
                    fontWeight: 450
                  }}
                >Давление:</Typography> : null}&nbsp;{pressure} мм рт. ст.
              </Typography>
              {matches
                ?
                null
                :
                <FiberManualRecord
                  sx={{
                    ml: 0.9,
                    mr: 0.9,
                    fontSize: 12,
                    color: '#ccc'
                  }} />}
              <Typography
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: {
                    md: 16,
                    sm: 15,
                    xs: 14.5
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
                {matches ? <Typography component='span'
                  sx={{
                    fontWeight: 450
                  }}
                >Видимость:</Typography> : null}&nbsp; {visibility}км
              </Typography>
            </ListItem>
          </Box>
          <ListItem
            sx={{
              p: 0.5
            }}>
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
              Восход: {sunrise} /
              <WbTwilight
                sx={{
                  mr: 0.5,
                  fontSize: {
                    md: 26,
                    sm: 24,
                    xs: 22
                  }
                }} />
              Закат: {sunset}
            </Typography>
          </ListItem>
          <ListItem
            sx={{
              mt: 0.8,
              p: 0.3,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start'
            }}>
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
              <FilterDrama
                sx={{
                  mr: 0.7,
                  fontSize: {
                    md: 27,
                    sm: 25,
                    xs: 23
                  }
                }} />
              <Typography component='span' sx={{ fontWeight: 350 }}>Облачность:</Typography>
              &nbsp;{clouds}%
            </Typography>
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
              <Opacity
                sx={{
                  mr: 0.7,
                  fontSize: {
                    md: 27,
                    sm: 25,
                    xs: 23
                  }
                }} />
              <Typography component='span' sx={{ fontWeight: 350 }}>Влажность:</Typography>
              &nbsp;{humidity}%
            </Typography>
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
              <Grain
                sx={{
                  mr: 0.7,
                  fontSize: {
                    md: 27,
                    sm: 25,
                    xs: 23
                  }
                }} />
              <Typography component='span' sx={{ fontWeight: 350 }}>Кол-во осадков в час:</Typography>
              &nbsp;{count} мм
            </Typography>
          </ListItem>
        </List>
      </Box>
    </Modal >
  );
}

Modal.propTypes = {
  handleCloseModal: PropTypes.func,
  openModal: PropTypes.bool
}