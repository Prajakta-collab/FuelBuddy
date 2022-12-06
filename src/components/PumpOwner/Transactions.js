import React, { useState, useRef } from 'react'
import Navbar from '../Navbar'
import CountUp from 'react-countup';
import { Link, useLocation, useHistory } from "react-router-dom";




// //Transactions details
// const Transaction = () => {
// const context = useContext(creditContext);
// const { Transaction } = context;



// const[customer,getTransaction]=useState({Transaction Id:"", :"", password:"" ,phone1:"", credit:""})
// const handleClick=(e)=>{
//   //refClose.current.click();
//   e.preventDefault();
//   addCustomer(customer.name,customer.email,customer.password,customer.phone1,customer.credit)
//   setCustomer({name:"", email:"", password:"" ,phone1:"", credit:""}) 
//   alert('Request sent successfully!')

// }

// //end of Transactions details

// }










const Transaction = () => {
    const [toggle, setToggle] = useState(true);
    const ref = useRef(null)

    const [openModal, setOpenModal] = useState(false);
    const handleToggle = () => {
        setToggle(!toggle);
    }

    const handleModal = () => {
        setOpenModal(true);
    }
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
                            
                        </div>
                    </nav>

                    <div className="container-fluid px-4">
                        

                        <div className="row my-5">
                            <h3 className="fs-4 mb-3">Transactions</h3>
                            <div className="col">
                            <div>

                            <select>
                       
                              <option value="Daliy">Daliy</option>
                       
                              <option value="Last 7 days">Last 7 days</option>
                       
                              <option value="Last  1 Month">Last 1 Month</option>
                              <option value="YTD">YTD</option>
                       
                            </select>
                    
                            <div className="row g-3 my-2">
                            {/* Search Bar */}
                            <div className="input-group">
                            
                                <div className="form-outline" >
                                    <input type="search" placeholder="Search Bar" id="form1" className="form-control" />
                                </div>
                                <button type="button" className="btn btn-primary">
                                    <i className="fas fa-search"></i>
                                </button>
                            
                            </div>


                        </div>


                          </div>
                                <table className="table bg-white rounded shadow-sm  table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col">Transaction ID</th>
                                            <th scope="col">Customer Name</th>
                                            <th scope="col">Vehicle Number</th>
                                            <th scope="col">Credit Amount</th>
                                            <th scope="col">Debit Amount</th>
                                            <th scope="col">Amount Due</th>
                                            <th scope="col">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Samruddhi</td>
                                            <td>MH14BX32</td>
                                            <td>2000</td>
                                            <td>500</td>
                                            <td>1500</td>
                                            <td>Delivered</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Prerna</td>
                                            <td>MH19BA08</td>
                                            <td>2500</td>
                                            <td>1000</td>
                                            <td>1500</td>
                                            <td>Pending</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>John</td>
                                            <td>MH20AB20</td>
                                            <td>3000</td>
                                            <td>3000</td>
                                            <td>0</td>
                                            <td>Pending</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>Sam</td>
                                            <td>MH50KA23</td>
                                            <td>1000</td>
                                            <td>300</td>
                                            <td>700</td>
                                            <td>Delivered</td>
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

export default Transaction
