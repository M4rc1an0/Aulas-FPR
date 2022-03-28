import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Quarto from './quarto';
import Banheiro from './banheiro';
import Escritorio from './escritorio';
import Sala from './sala';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/quarto' element={<Quarto />} />
        <Route path='/banheiro' element={<Banheiro />} />
        <Route path='/escritorio' element={<Escritorio />} />
        <Route path='/sala' element={<Sala />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;