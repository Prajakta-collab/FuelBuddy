import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import About from './components/About';
import Customer from "./components/PumpOwner/Customer";
import HomeAtt from "./components/HomeAtt";

import Homepo from "./components/PumpOwner/Homepo";
import Hometo from "./components/Hometo";
import Login from './components/Login';
import Truck from "./components/Truck";

import Customercard from "./components/PumpOwner/Customercard";
import PumpAttendant from "./components/PumpOwner/PumpAttendant"

function App() {
  return (
    <div className="App">
    
    <BrowserRouter>
      <Routes>
        <Route path="/home/pumpo" element={<Homepo/>}/>
        
        <Route path="/home/trucko/:id" element={<Hometo/>}/>
        <Route path="/home/trucko/:id/truck/:id" element={<Truck/>}/>
        <Route path="/home/pumpo/cust/:id" element={<Customer/>}/>

        <Route path="/home/pumpattendant/:id" element={<HomeAtt/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/home/pumpo/customersdetail" element={<Customercard/>}/>
        <Route path="/home/pumpo/pumpat" element={<PumpAttendant/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
