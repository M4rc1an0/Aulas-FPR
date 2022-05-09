import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './home';
import Split from './split';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/filtro' element={<Split />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;