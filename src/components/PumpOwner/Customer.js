import React, { useState, useRef, useContext, useEffect } from 'react'
import { useParams } from "react-router-dom";
import Navbar from '../Navbar'

import creditContext from '../../context/credits/creditContext';
import { Link, useLocation, useHistory } from "react-router-dom";


const Customer = () => {
    const [toggle, setToggle] = useState(true);
    const ref = useRef(null)

    const params = useParams();
    console.log("params",params.id)
    const idd=params.id.substring(0,24);
    console.log("params after",idd);
    const context = useContext(creditContext);

    const { custdetails, getcusttr, custtr } = context;

    useEffect(() => {
        getcusttr(idd);
    }, [])
    console.log("custdetails", custdetails)
    console.log("custtr",custtr)


    const [openModal, setOpenModal] = useState(false);
    const handleToggle = () => {
        setToggle(!toggle);
    }



    const handleModal = () => {
        setOpenModal(true);
    }
    //new add cust changes





    //end of new add cust changes

    return (
        <>
            <Navbar />
            <div className="d-flex" id="wrapper">
                {toggle && <div style={{ backgroundColor: "#3282B8" }} >
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
                        <div className="row g-2 my-2" >
                            <div >
                                <div className="p-3 text-light bg-dark shadow-sm d-flex  align-items-center rounded">
                                    <div>
                                        <h3 className="fs-2">Name : {custdetails?.user?.name}</h3>
                                        <p className="fs-5">Contact No : {custdetails?.user?.phone1}</p>
                                        <p className="fs-5">Email : {custdetails?.user?.email}</p>
                                        <p className="fs-5">Remaining Credit : {custdetails?.liveCredit?.available_credit}</p>
                                        <p className="fs-5">Total Allowed Credit : {custdetails?.liveCredit?.allowed_credit}</p>
                                    </div>
                                </div>
                            </div>



                        </div>

                        <div className="row my-5">
                            <h3 className="fs-4 mb-3">Transaction</h3>
                            <div className="col">
                                <table className="table bg-white rounded shadow-sm  table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col">Transaction No.</th>
                                            <th scope="col">Transaction Date</th>
                                            <th scope="col">Vehicle No.</th>
                                            <th scope="col">Debit</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Delivered Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            custtr.length > 0 &&
                                            custtr.map((item) => {
                                                return (
                                                    <tr>
                                                        <td key={item._id}>{item?.transaction_no}</td>
                                                        <td key={item._id}>{item?.tr_date.substring(0,10)}</td>
                                                        <td key={item._id}>{item?.vehicle_no}</td>
                                                        <td key={item._id}>{item?.debit}</td>
                                                        <td key={item._id}>{item?.status}</td>
                                                        <td key={item._id}>{item?.delivered_date.substring(0,10)}</td>                                                      
                                                    </tr>
                                                )
                                            })
                                        }                                    
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
