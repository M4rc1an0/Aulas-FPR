import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Shop from './pages/shop';
import Home from './home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/Shop' element={<Shop />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;