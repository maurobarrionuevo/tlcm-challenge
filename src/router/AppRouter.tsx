import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CurrentWeather from '../pages/CurrentWeather';

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' Component={CurrentWeather}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter