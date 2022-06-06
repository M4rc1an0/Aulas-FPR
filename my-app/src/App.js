import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home';
import Cadastro from './cadastro';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/cadastro' element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;