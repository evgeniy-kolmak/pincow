import Header from './components/Singlepage';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import About from './pages/About';
import Interaction from './pages/Interaction';
import Result from './pages/Result';
import Error from './pages/Error';
import { useState } from 'react';



export default function App() {
  const [weather, setWeather] = useState(null);
  const handleData = data => {
    setWeather(data);
  }

  return (
    <Routes>
      <Route path='/' element={<Header />}>
        <Route index element={<Main />} />
        <Route path='about' element={<About />} />
        <Route path='/interaction' element={<Interaction handleData={handleData} />} />
        <Route path='result' element={<Result data={weather} />} />
        <Route path='error' element={<Error />} />
      </Route>
    </Routes >

  );
}






