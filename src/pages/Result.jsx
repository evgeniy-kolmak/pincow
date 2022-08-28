import { useDate } from "../hook/date";
import { useWeather } from "../hook/weather";
import { useDepend } from "../hook/depend";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";


export default function Result({ data }) {
  const { temp, cityName, iconId, descritpion } = useWeather(data);
  const depend = useDepend(useWeather(data), useDate());

  return (
    <>
      <h2>{cityName} {temp}&deg;</h2>
      <img src={`https://openweathermap.org/img/wn/${iconId}@2x.png`} />
      <h3>{descritpion}</h3>

      <LineChart
        width={700}
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
    </>
  );
}