import React, { useState, useRef, useContext, useEffect } from 'react'
import { useParams } from "react-router-dom";
import Navbar from '../Navbar'

import creditContext from '../../context/credits/creditContext';
import { Link, useLocation, useHistory } from "react-router-dom";
import PoSidebar from '../Sidebar/PoSidebar';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


const Customer = () => {
   
    const ref = useRef(null)

    const params = useParams();
    console.log("params",params.id)
    const idd=params.id.substring(0,24);
    console.log("params after",idd);
    const context = useContext(creditContext);

    const { custdetails, getcusttr, custtr ,handleToggle,toggle} = context;

    useEffect(() => {
        getcusttr(idd);
    }, [])

    console.log("custdetails", custdetails)
    console.log("custtr",custtr)




    const [openModal, setOpenModal] = useState(false);

     // Update Button on click 
    const [showUpdate, setShowUpdate] = useState(false);

    const handleCloseUpdate = () => setShowUpdate(false);
    const handleShowUpdate = () => setShowUpdate(true);

// Delete Button on click  
const [showdelete, setShowDelete] = useState(false);

const handleCloseDelete = () => setShowDelete(false);
const handleShowDelete = () => setShowDelete(true);
// Payment Button on click 
const [showadd, setShowAdd] = useState(false);

const handleCloseAdd = () => setShowAdd(false);
const handleShowAdd= () => setShowAdd(true);

// Add Button on click 
const [showrenew, setShowRenew] = useState(false);

const handleCloseRenew = () => setShowRenew(false);
const handleShowRenew= () => setShowRenew(true);

    const handleModal = () => {
        setOpenModal(true);
    }
    

    return (
        <>


          {/* Update Button Modal */}

      <Modal show={showUpdate} onHide={handleCloseUpdate}>
        <Modal.Header closeButton>
          <Modal.Title>Update Customer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="eg. Ram Mishra"
                autoFocus
              />

<Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="eg.xyz@gmail.com"
                
              />

<Form.Label>Phone Number 1</Form.Label>
              <Form.Control
                type="number"
                placeholder="eg.8978675677"
                
              />

<Form.Label>Phone Number 2</Form.Label>
              <Form.Control
                type="number"
                placeholder="eg.9855675578"
                
              />

<Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder=""
                
              />

<Form.Label>Credit</Form.Label>
              <Form.Control
                type="number"
                placeholder="eg.1200"
                
              />
            </Form.Group>
     
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseUpdate}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseUpdate}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

       {/* Delete Button Modal */}

       <Modal show={showdelete} onHide={handleCloseDelete} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Customer </Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure ,you want to delete the customer</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDelete}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleCloseDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
  
  
  {/* Payment  Button Modal */}

 

      <Modal show={showrenew} onHide={handleCloseRenew}>
        <Modal.Header closeButton>
          <Modal.Title>Renew CreditS</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Credit </Form.Label>
              <Form.Control
                type="number"
                placeholder="Rs.200"
                autoFocus
              />

            <Form.Label>Particulars </Form.Label>
              <Form.Control
                type="number"
                placeholder="Rs.200"
               
              />

              
            <Form.Label>Reference </Form.Label>
              <Form.Control
                type="text"
                placeholder="MH19TU7678"
               
              />
            </Form.Group>
            
       
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseRenew}>
            Cancel
          </Button>
          <Button  variant="primary" onClick={handleShowAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
  

    {/* Add Button Modal */}

 

    <Modal show={showadd} onHide={handleCloseAdd}>
        <Modal.Header closeButton>
          <Modal.Title>Add Customer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="eg. Ram Mishra"
                autoFocus
              />

<Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="eg.xyz@gmail.com"
                
              />

<Form.Label>Phone Number 1</Form.Label>
              <Form.Control
                type="number"
                placeholder="eg.8978675677"
                
              />

<Form.Label>Phone Number 2</Form.Label>
              <Form.Control
                type="number"
                placeholder="eg.9855675578"
                
              />

<Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder=""
                
              />

<Form.Label>Credit</Form.Label>
              <Form.Control
                type="number"
                placeholder="eg.1200"
                
              />
            </Form.Group>
     
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAdd}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleCloseAdd}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>




            <Navbar />
            <div className="d-flex" id="wrapper">
                {/* {toggle && <div style={{ backgroundColor: "#3282B8" }} >
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
                </div>} */}
             <PoSidebar/>
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
                                    

                                       
        
                             
                              <button type="button"  onClick={handleShowRenew} class="btn btn-outline-success me-5 btn-lg">Payment<i class="fas fa-solid fa-user-plus ms-2"></i></button>
                              <button type="button" onClick={handleShowDelete} class="btn btn-outline-danger btn-lg">Delete<i class="fas fa-sharp fa-solid fa-trash ms-2"></i></button>
                              <button type="button" onClick={handleShowUpdate} class="btn btn-outline-success me-5 btn-lg">Update<i class="fas fa-sharp fa-solid fa-pen"></i></button>
                              
                                
                             
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
