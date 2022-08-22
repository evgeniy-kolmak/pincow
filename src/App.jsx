import './App.css';
import Header from './components/Singlepage';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import About from './pages/About';
import Interaction from './pages/Interaction';
import Result from './pages/Result';
import Error from './pages/Error';
import { useState } from 'react';





export default function App() {
  const [value, setValue] = useState(null);
  const handleObject = (object) => {
    setValue(object)
  }
  return (
    <Routes>
      <Route path='/' element={<Header />}>
        <Route index element={<Main />} />
        <Route path='about' element={<About />} />
        <Route path='/interaction' element={<Interaction handleObject={handleObject} />} />
        <Route path='result' element={<Result data={value} />} />
        <Route path='error' element={<Error />} />
      </Route>
    </Routes >

  );
}


