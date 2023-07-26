import './App.css'
import Dashboard from './Dashboard';
import Login from './Login';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {


  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Dashboard />}></Route>
    <Route path='/login' element={<Login />}></Route>
    </Routes>
     </BrowserRouter>
  )
}

export default App
