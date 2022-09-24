
import './App.css';
import NavBar from './NavBar';


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
    </Routes>
    </>

  );
  
};

export default App;
