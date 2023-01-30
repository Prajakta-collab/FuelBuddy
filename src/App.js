import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Transactions from "./components/PumpOwner/Transactions";
import About from "./components/About";
import Customer from "./components/PumpOwner/Customer";
import HomeAtt from "./components/Attendant/HomeAtt";

import Homepo from "./components/PumpOwner/Homepo";
import Hometo from "./components/VehicleOwner/Hometo";
import Login from "./components/Login";

import PumpAttendant from "./components/PumpOwner/PumpAttendant";

import CreditState from "./context/credits/CreditState";
import AddCust from "./components/PumpOwner/AddCust";
import Transactionsto from "./components/VehicleOwner/Transactionsto";
function App() {
  return (
    <div className="App">
      <>
        <CreditState>
          <BrowserRouter>
            <Routes>
              {/* <Redirect to="/login/" /> */}
              


              <Route path="/home/pumpo/:id" element={<Homepo />} />

              <Route path="/home/trucko/:id" element={<Hometo />} />
              <Route
                path="/home/trucko/:id/transactions"
                element={<Transactionsto />}
              />

              {/* <Route path="/home/trucko/:id/truck/:id" element={<Truck/>}/> */}
              <Route path="/home/pumpo/:id/cust/:id" element={<Customer />} />
              <Route
                path="/home/pumpo/:id/transactions"
                element={<Transactions />}
              ></Route>
              <Route path="/home/pumpattendant/:id" element={<HomeAtt />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              {/* <Route path="/home/pumpo/:id/customersdetail" element={<Customercard />} /> */}
              <Route
                path="/home/pumpo/:id/pumpat"
                element={<PumpAttendant />}
              ></Route>
              <Route
                path="/home/pumpo/:id/addcust"
                element={<AddCust />}
              ></Route>
              <Route
                path="/home/trucko/:id/transactions"
                element={<Transactions />}
              />
            </Routes>
          </BrowserRouter>
        </CreditState>
      </>
    </div>
  );
}

export default App;
