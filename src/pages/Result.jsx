import { useDate } from "../hook/date";
import { useWeather } from "../hook/weather";
import { useDepend } from "../hook/depend";
import { Link } from 'react-router-dom';
import { Typography, Box, Card, CardContent, Button } from '@mui/material';
import { North, Air } from '@mui/icons-material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

export default function Result({ data }) {
  const { temp, cityName, iconId, description, wind, } = useWeather(data);
  const depend = useDepend(useWeather(data), useDate());

  return (
    <>
      <Card
        sx={{
          maxWidth: "100%",
          padding: "30px",
        }}
      >
        <Typography variant='h3' component='span'>{cityName} {temp}&deg;</Typography>
        <img src={`images/icons/${iconId}.svg`} style={{ width: '50px' }} />
        <Typography variant='h5' component='h6'>{description}</Typography>
        <h2 style={{ display: 'flex', alignItems: 'center' }}><Air />Ветер: {wind.direction} <North style={{ transform: `rotate(${wind.deg}deg)` }} /> {wind.speed}м/c</h2>


        <LineChart
          width={800}
          height={400}
          data={depend}
          margin={{
            top: 25,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Успех" stroke="purple" activeDot={{ r: 8 }} />
        </LineChart>
        <Button
          variant="contained"
          type='submit'>
          <Link
            style={{
              color: 'inherit',
              textDecoration: 'none'
            }}
            to='/interaction'>Try Again</Link>
        </Button>
      </Card>
    </>
  );
}