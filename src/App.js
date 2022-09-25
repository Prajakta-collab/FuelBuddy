import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import About from './components/About';
import Home from './components/Home';
import Login from './components/Login';


function App() {
  return (
    <div className="App">
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
