import './App.css';
import DashboardAdmin from './dashboardadmin';
import NavBar from './NavBar';
import DashboardUser from './dashboarduser';
import DashboardCommunity from './dashboardcommunity';
import Formcommunity from './formcommunity';
import RegisterPage from './registerpage';
import Formuser from './formuser';
import Home from './Home';
import { BrowserRouter as Router,Route,Switch,Link,Redirect, Routes } from "react-router-dom";



function App() {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/formuser' element={<Formuser/>}/>
      <Route path='/formcommunity' element={<Formcommunity/>}/>
      <Route path='/registerpage' element={<RegisterPage/>}/>
      <Route path='/dashboardcommunity' element={<DashboardCommunity/>}/>
      <Route path='/dashboarduser' element={<DashboardUser/>}/>
      <Route path='/dashboardadmin' element={<DashboardAdmin/>}/>

    </Routes>
    </>

  );
  
};

export default App;
