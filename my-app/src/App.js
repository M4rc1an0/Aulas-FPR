import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Car from './pages/car';
import Food from './pages/food';
import Game from './pages/game';
import Plant from './pages/plant';
import Home from './home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/Car' element={<Car />} />
        <Route path='/Food' element={<Food />} />
        <Route path='/Game' element={<Game />} />
        <Route path='/Plant' element={<Plant />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;