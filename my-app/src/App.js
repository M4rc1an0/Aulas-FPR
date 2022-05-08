import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './home';
import Split from './split';
import QueryString from './queryString'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/split' element={<Split />} />
        <Route path='/querystring' element={<QueryString />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;