import Singlepage from './components/Singlepage';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import Main from './pages/Main';
import About from './pages/About';
import Forecast from './pages/Forecast';
import Done from './pages/Done';
import Error from './pages/Error';
import Current from './pages/forecast/Current';
import Day from './pages/forecast/Day';
import Week from './pages/forecast/Week';
import { useState } from 'react';


export default function App() {
  const [weather, setWeather] = useState(null);
  const handleData = data => {
    setWeather(data);
  }
  const [city, setCity] = useState();
  const handleCity = data => {
    setCity(data);
  }

  const [response, setResponse] = useState();
  const handleResponse = data => {
    setResponse(data);
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Singlepage data={weather} />}>
        <Route index element={<Main />} />
        <Route path='about' element={<About />} />
        <Route path='forecast' element={<Forecast handleData={handleData} handleCity={handleCity} handleResponse={handleResponse} />} />
        <Route path='done' element={<Done response={response} />}>
          <Route path='current' element={<Current data={weather} />} />
          <Route path='day' element={<Day data={weather} />} />
          <Route path='week' element={<Week data={weather} />} />
        </Route>
        <Route path='error' element={<Error city={city} />} />
      </Route>
    )
  );


  return (

    <RouterProvider router={router} />

  );
}






