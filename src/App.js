import React,{useState} from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Transactions from "./components/PumpOwner/Transactions";
import About from './components/About';
import Customer from "./components/PumpOwner/Customer";
import HomeAtt from "./components/Attendant/HomeAtt";

import Homepo from "./components/PumpOwner/Homepo";
import Hometo from "./components/Hometo";
import Login from './components/Login';

import Customercard from "./components/PumpOwner/Customercard";
import PumpAttendant from "./components/PumpOwner/PumpAttendant"

import CreditState from "./context/credits/CreditState";
import Signin from "./components/Signin";
import AddCust from "./components/PumpOwner/AddCust";
function App() {
  
  return (
    <div className="App">
      <>
        <CreditState>
          <BrowserRouter>
          <Routes>
            <Route path="/home/pumpo/:id" element={<Homepo />} />
            

            <Route path="/home/trucko/:id" element={<Hometo />} />
            {/* <Route path="/home/trucko/:id/truck/:id" element={<Truck/>}/> */}
            <Route path="/home/pumpo/:id/cust/:id" element={<Customer />} />
            <Route path="/home/pumpo/:id/transactions" element={<Transactions />}></Route>
            <Route path="/home/pumpattendant/:id" element={<HomeAtt />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />}/> 
            <Route path="/signin" element={<Signin />} />
            {/* <Route path="/home/pumpo/:id/customersdetail" element={<Customercard />} /> */}
            <Route path="/home/pumpo/:id/pumpat" element={<PumpAttendant />}></Route>
            <Route path="/home/pumpo/:id/addcust" element={<AddCust/>}></Route>
            <Route path="/home/trucko/:id/transactions" element={<Transactions />} />
          </Routes>
        </BrowserRouter>
    
      </CreditState>
        
      </>

    </div>
  );
}

export default App;
