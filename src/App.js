import React from 'react';
import './App.css';
import { Home } from './views/Home';
import  Cars  from './views/Cars';
import Car  from './views/Car';
import  Error  from './views/Error';
import {  Routes,Route,  } from "react-router-dom";
import Navbar from './components/Navbar';





function App() {
  return (
    <>
       <Navbar/>
        <Routes>
                    <Route exact path="/" element={<Home/>} />        
                    <Route exact path="/cars" element={<Cars/>} />        
                    <Route exact path="/cars/:slug" element={<Car/>} />        
                    <Route  path="*" element={<Error/>} />
        </Routes>   
      
   
    </>
  );
}

export default App;


