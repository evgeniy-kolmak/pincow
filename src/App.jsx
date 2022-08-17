import './App.css';
import Header from './components/Singlepage';
import { Routes, Route } from 'react-router-dom'
import Main from './pages/Main'
import Interaction from './pages/Interaction'
import Result from './pages/Result'
import Error from './pages/Error'



export default function App() {

  return (
    <Routes>
      <Route path='/' element={<Header />}>
        <Route index element={<Main />} />
        <Route path='interaction' element={<Interaction />} />
        <Route path='result' element={<Result />} />
        <Route path='error' element={<Error />} />
      </Route>
    </Routes>

  );
}


