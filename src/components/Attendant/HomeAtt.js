import React, { useState, useRef, useContext, useEffect } from 'react'
import Navbar from '../Navbar'
import CountUp from 'react-countup';
import { Link, useLocation, useHistory } from "react-router-dom";
import creditContext from '../../context/credits/creditContext';

const HomeAtt = () => {
    const [toggle, setToggle] = useState(true);
    const ref = useRef(null)
    // const [req, setReq] = useState()

   

    const context = useContext(creditContext);
    const { request, credit, getrequest,completerequest } = context;



    useEffect(() => {
        getrequest();
    }, [request])

    console.log("request get", request)

    const [openModal, setOpenModal] = useState(false);
    const handleToggle = () => {
        setToggle(!toggle);
    }

    const handleModal = () => {
        setOpenModal(true);
    }
    return (

        <div>

            <Navbar />
            {/* <AddCust/> */}
            {/* prajakta branch */}
            {/* <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button> */}

            <div className="d-flex" id="wrapper">
                {/* {toggle && <div style={{ backgroundColor: "#3282B8" }} id="sidebar-wrapper">
                    <div className="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom"><i
                        className="fas fa-user-secret me-2"></i>FuelBuddy</div>
                    <div className="list-group list-group-flush my-3">
                        <a href="/" className="list-group-item list-group-item-action bg-transparent second-text active"><i
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
                </div>} */}

                <div id="page-content-wrapper">
                    <nav className="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4">
                        {/* <div className="d-flex align-items-center">
                            <i className="fas fa-align-left primary-text fs-4 me-3" onClick={handleToggle} id="menu-toggle"></i>
                            <h2 className="fs-2 m-0">Dashboard</h2>
                        </div> */}

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
                        <div className="row g-3 my-2">
                            {/* Search Bar */}
                            <div className="input-group">
                                <div className="form-outline">
                                    <input type="search" placeholder="Search Bar" id="form1" className="form-control" />
                                </div>
                                <button type="button" className="btn btn-primary">
                                    <i className="fas fa-search"></i>
                                </button>
                            </div>


                        </div>

                        <div className="row my-5">
                            <h3 className="fs-4 mb-3">Pending Requests</h3>
                            <div className="col">
                                {/* <table className="table bg-white rounded shadow-sm  table-hover">
                    <thead>
                        <tr>
                            <th scope="col" width="50">#</th>
                            <th scope="col">Customer ID</th>
                            <th scope="col">Customer Name</th>
                            <th scope="col">Vehicle Number</th>
                            <th scope="col">Requested Credit</th>
                            <th scope="col">Submit</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">5</th>
                            <td>32uoej1</td>
                            <td>Jonny</td>
                            <td>MH-123</td>
                            <td>12,000</td>
                            <td><button type="submit" class="btn btn-outline-primary">Request Complete</button></td>
                        </tr>
                    </tbody>
                </table> */}
                 {request.length===0 && 'no notes to display'}
            {request.map((req)=>{
                return(
                    <div class="card mt-4">
                    {/* <h5 class="card-header">Customer Name</h5> */}
                
                    <div class="card-body card">
                        <h5 class="card-title">Vehicle Number: {req.vehicle_no}</h5>
                        <p class="card-text">Customer ID</p>
                        <p class="card-text">Customer Name</p>
                        <p class="card-text">Requested Credit: {req.debit}</p>
                        <button  class="btn btn-outline-primary" onClick={()=>{
        completerequest(req._id)}}>Request Complete</button>
                    </div>
                </div>)
                })
            }
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HomeAtt