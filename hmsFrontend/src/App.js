import './App.css';
import Login from './pages/Login' 
import SignUp from './pages/SignUp'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Forgotpwd from './pages/Forgotpwd';
import Resetpwd from './pages/Resetpwd';
import Home1 from './pages/Home1';
import ResidentDetails from './pages/ResidentDetails';
import RoomAllocation from './pages/RoomAllocation';
import Profile from './pages/Profile';
import UpdateDetails from './pages/UpdateDetails';

function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<Home1/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/SignUp' element={<SignUp/>}></Route>
        <Route path='/Forgotpwd' element={<Forgotpwd/>}></Route>
        <Route path="/Resetpwd/:token" element={<Resetpwd />}></Route> 
        <Route path='/Dashboard' element={<Dashboard/>}></Route>
        <Route path='/ResidentDetails' element={<ResidentDetails/>}></Route>
        <Route path='/UpdateDetails' element={<UpdateDetails/>}></Route>
        <Route path='/RoomAllocation/:serial' element={<RoomAllocation/>}></Route>
        <Route path='/Profile' element={<Profile/>}></Route>
        
        
      </Routes>    
    </BrowserRouter>
  );
}

export default App;
