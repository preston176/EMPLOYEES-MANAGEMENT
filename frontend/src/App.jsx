import './App.css'
import Dashboard from './Dashboard';
import Login from './Login';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Employee from './Employee';
import Profile from './Profile';
import Home from './Home';
import AddEmployee from './AddEmployee';
import EditEmployee from './EditEmployee';
import Start from './Start';
import EmployeeLoginPage from './EmployeeLoginPage';
import EmployeeDetail from './EmployeeDetail';

function App() {


  return (
    <BrowserRouter>
    {/* Dashboard component will be rendered persistently */}

    <Routes>
      <Route path='/' element={<Dashboard />}>
      <Route path='' element={<Home />}></Route>
      <Route path='/employee' element={<Employee />}></Route>
      <Route path='/profile' element={<Profile />}></Route>
      <Route path='/create' element={<AddEmployee />}></Route>
      <Route path='/employeeEdit/:id' element={<EditEmployee />}></Route>
      </Route>
      
      <Route path='/login' element={<Login />}></Route>
      <Route path='/start' element={<Start />}></Route>
      <Route path='/employeeLogin' element={<EmployeeLoginPage />}></Route>
      <Route path='/employeedetail/:id' element={<EmployeeDetail />}></Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
