import React, { useState ,useRef} from 'react'
import Navbar from '../Navbar'
import CountUp from 'react-countup';
import { Link ,useLocation, useHistory } from "react-router-dom";

const Customer = () => {
  const [toggle, setToggle] = useState(true);
  const ref = useRef(null)

  const [openModal, setOpenModal] = useState(false);
  const handleToggle=()=>{
      setToggle(!toggle);
  }

  const handleModal=()=>{
      setOpenModal(true);
  }
  return (
    <>
    <Navbar/>
    <div className="d-flex" id="wrapper">
{toggle&& <div style={{backgroundColor:"#3282B8"}} >
    <div className="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom"><i
            className="fas fa-user-secret me-2"></i>FuelBuddy</div>
    <div className="list-group list-group-flush my-3">
        <a href="/" className="list-group-item list-group-item-action  second-text active"><i
                className="fas fa-tachometer-alt me-2"></i>Dashboard</a>
        <a href="/" className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i
                className="fas fa-project-diagram me-2"></i>Customers</a>
                 <a href="/" className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i
                className="fas fa-paperclip me-2"></i>Daily Transactions</a>
        <a href="/" className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i
                className="fas fa-chart-line me-2"></i>About</a>
       
       
        <a href="/" className="list-group-item list-group-item-action bg-transparent text-danger fw-bold"><i
                className="fas fa-power-off me-2"></i>Logout</a>
    </div>
</div>}

<div id="page-content-wrapper">
    <nav className="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4">
        <div className="d-flex align-items-center">
            <i className="fas fa-align-left primary-text fs-4 me-3" onClick={handleToggle} id="menu-toggle"></i>
            <h2 className="fs-2 m-0">Dashboard</h2>
        </div>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle second-text fw-bold" href="/" id="navbarDropdown"
                        role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="fas fa-user me-2"></i>John Doe
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="/">Profile</a></li>
                        <li><a className="dropdown-item" href="/">Settings</a></li>
                        <li><a className="dropdown-item" href="/">Logout</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </nav>

    <div className="container-fluid px-4">
        <div className="row g-2 my-2">
            <div >
                <div className="p-3 text-light bg-dark shadow-sm d-flex  align-items-center rounded">
                    <div>
                        <h3 className="fs-2">Name : Sidhant Patil</h3>
                        <p className="fs-5">No.of Vehicles : 10</p>
                        <p className="fs-5">Contact No : 8596741236</p>


                    </div>
                </div>
            </div>

            

        </div>

        <div className="row my-5">
            <h3 className="fs-4 mb-3">Vehicles</h3>
            <div className="col">
                <table className="table bg-white rounded shadow-sm  table-hover">
                    <thead>
                        <tr>
                            <th scope="col" width="50">#</th>
                            <th scope="col">Vehicle Type</th>

                            <th scope="col">Registration No</th>
                            <th scope="col">Driver Name</th>
                            <th scope="col">Fuel Type</th>

                            <th scope="col">Fuel Capacity</th>
                        </tr>
                    </thead>
                    <tbody>
                    
                        <tr>

                            <th scope="row">1</th>
                            <td>Truck</td>

                            <td><Link to="/home/pumpo/cust/32uoeji">MH18BY2281 </Link></td>
                            <td>Guruprit khan</td>
                            <td>Diesel</td>

                            <td>12,000 liters</td>
                            
                        </tr>
                       
                        <tr>
                            <th scope="row">2</th>
                            <td>Truck</td>

                            <td><Link to="/home/pumpo/cust/32uoeji">MH18BY2281 </Link></td>
                            <td>Guruprit khan</td>
                            <td>Diesel</td>

                            <td>12,000 liters</td>                    </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Truck</td>

<td><Link to="/home/pumpo/cust/32uoeji">MH18BY2281 </Link></td>
<td>Guruprit khan</td>
<td>Diesel</td>

<td>12,000 liters</td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>Truck</td>

<td><Link to="/home/pumpo/cust/32uoeji">MH18BY2281 </Link></td>
<td>Guruprit khan</td>
<td>Diesel</td>

<td>12,000 liters</td>
                        </tr>
                        <tr>
                            <th scope="row">5</th>
                            <td>Truck</td>

                            <td><Link to="/home/pumpo/cust/32uoeji">MH18BY2281 </Link></td>
                            <td>Guruprit khan</td>
                            <td>Diesel</td>

                            <td>12,000 liters</td>
                        </tr>
                        <tr>
                            <th scope="row">6</th>
                            <td>Truck</td>

<td><Link to="/home/pumpo/cust/32uoeji">MH18BY2281 </Link></td>
<td>Guruprit khan</td>
<td>Diesel</td>

<td>12,000 liters</td>
                        </tr>
                        <tr>
                            <th scope="row">7</th>
                            <td>Truck</td>

<td><Link to="/home/pumpo/cust/32uoeji">MH18BY2281 </Link></td>
<td>Guruprit khan</td>
<td>Diesel</td>

<td>12,000 liters</td>
                        </tr>
                      
                      
                    </tbody>
                </table>
            </div>
        </div>
       
    </div>
</div>
</div>
    </>
  )
}

export default Customer