import React, { useState, useRef, useContext, useEffect } from 'react'
import { useParams } from "react-router-dom";
import Navbar from '../Navbar'

import creditContext from '../../context/credits/creditContext';
import { Link, useLocation, useHistory } from "react-router-dom";
import PoSidebar from '../Sidebar/PoSidebar';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import CurrencyInput from 'react-currency-input-field';


const Customer = () => {


  const params = useParams();
  console.log("params", params.id)
  const idd = params.id.substring(0, 24);
  console.log("params after", idd);
  const context = useContext(creditContext);

  const { postpay, custdetails, getcusttr, custtr, handleToggle,updatecust,deletecust, toggle } = context;

  useEffect(() => {
    getcusttr(idd);
  }, [])


  // Update Button on click 
  const [showUpdate, setShowUpdate] = useState(false);

  const handleCloseUpdate = () => setShowUpdate(false);
  const handleShowUpdate = () => setShowUpdate(true);
  const[upcust,setUpcust]=useState({name: "", email: "" , phone1:"", phone2:"", credit:""})
  const onUpdate = (e) => {
    setUpcust({ ...upcust, [e.target.name]: e.target.value })
    console.log(upcust)
  }
  const handleUpdate = (e) => {
    e.preventDefault();
    updatecust(idd,upcust.name, upcust.email, upcust.phone1, upcust.phone2, upcust.credit)
    setUpcust({ name: "", email: "" , phone1:"", phone2:"", credit:""})
    alert('Update successful!')
    console.log(updatecust)
  }
  // Delete Button on click  
  const [showdelete, setShowDelete] = useState(false);

  const handleCloseDelete = () => setShowDelete(false);
  const handleShowDelete = () => setShowDelete(true);
  // const[delcust,setDelcust]=useState({})
  const handleDelete=(e)=>{
    e.preventDefault();
    deletecust(idd)
    alert('Delete successful!')
  }
  // Add Button on click 
  const [showadd, setShowAdd] = useState(false);

  const handleCloseAdd = () => setShowAdd(false);
  const handleShowAdd = () => setShowAdd(true);

  // Payment Button on click 
  const [showrenew, setShowRenew] = useState(false);

  const handleCloseRenew = () => setShowRenew(false);
  const handleShowRenew = () => setShowRenew(true);

  const[pay,setPay]=useState({ newCredit:0,particulars: "" ,reference:""})
  const onChange = (e) => {
    console.log("e.target.value",typeof(e.target.value));
    setPay({ ...pay, [e.target.name]: e.target.value })
    console.log("pay.credit",pay.newCredit)
  }

  


  console.log("pay before handleClick",pay);
  const handleClick = (e) => {
    e.preventDefault();
    console.log("pay",pay)
    postpay(idd,parseInt(pay.newCredit,10), pay.particulars, pay.reference)
    setPay({ newCredit:0, particulars: "" ,reference:""})

    alert('Payment successful!')
    setShowRenew(false);
  }

  


  return (
    <>


      <Modal show={showUpdate} onHide={handleCloseUpdate}>
        <Modal.Header closeButton>
          <Modal.Title>Update Customer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form>
            <div class="mb-3 mr-auto d-flex" >
              <div class="mx-3 mt-1"><label class="form-label"><p class="h6">Name</p></label></div>
              <div class="w-75">
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  placeholder="Change name"
                  onChange={onUpdate}
                  value={upcust.name}
                />
              </div>
            </div>
            <div class="mb-3 mr-auto d-flex" >
              <div class="mx-3 mt-1"><label class="form-label"><p class="h6">Email</p></label></div>
              <div class="w-75">
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="Change email"
                  onChange={onUpdate}
                  value={upcust.email}
                />
              </div>
            </div>
            <div class="mb-3 mr-auto d-flex" >
              <div class="mx-3 mt-1"><label class="form-label"><p class="h6">Phone No.1</p></label></div>
              <div class="w-50">
                <input
                  type="text"
                  id="phone1"
                  name="phone1"
                  className="form-control"
                  placeholder="Change phone number 1"
                  onChange={onUpdate}
                  value={upcust.phone1}
                />
              </div>
            </div>
            <div class="mb-3 mr-auto d-flex" >
              <div class="mx-3 mt-1"><label class="form-label"><p class="h6">Phone No.2</p></label></div>
              <div class="w-50">
                <input
                  type="text"
                  id="phone2"
                  name="phone2"
                  className="form-control"
                  placeholder="Change phone number 2"
                  onChange={onUpdate}
                  value={upcust.phone2}
                />
              </div>
            </div>
            <div class="mb-3 mr-auto d-flex" >
              <div class="mx-3 mt-1"><label class="form-label"><p class="h6">Credit</p></label></div>
              <div class="w-50">
                <input
                  type="text"
                  id="credit"
                  name="credit"
                  className="form-control"
                  placeholder="Update Total Credit"
                  onChange={onUpdate}
                  value={upcust.credit}
                />
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseUpdate}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
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
          <Button variant="primary" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>


      {/* Payment  Button Modal */}
      <Modal show={showrenew} onHide={handleCloseRenew}>
        <Modal.Header closeButton>
          <Modal.Title>Payment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div class="mb-3 mr-auto d-flex" >
              <div class="mx-3 mt-1"><label class="form-label"><p class="h6">Credit</p></label></div>
              <div class="w-75">
                <input
                  type="number"
                  id="newCredit"
                  name="newCredit"
                  className="form-control"
                  placeholder="Enter amount in Rs"
                  step="500"
                  onChange={onChange}
                  min="500"
                 
                  
                  value={pay.newCredit}
                />
                
                              </div>
            </div>
            <div class="mb-3 mr-auto d-flex" >
              <div class="mx-3 mt-1"><label class="form-label"><p class="h6">Particulars</p></label></div>
              <div class="w-75">
                <input
                  type="text"
                  id="particulars"
                  name="particulars"
                  className="form-control"
                  placeholder=" "
                  onChange={onChange}
                  value={pay.particulars}
                />
              </div>
            </div>
            <div class="mb-3 mr-auto d-flex" >
              <div class="mx-3 mt-1"><label class="form-label"><p class="h6">Reference</p></label></div>
              <div class="w-75">
                <input
                  type="text"
                  id="reference"
                  name="reference"
                  className="form-control"
                  placeholder="Enter Payment Id"
                  onChange={onChange}
                  value={pay.reference}
                />
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseRenew}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClick}>
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

                    <div className="container-fluid px-4"></div>

                      
                        <div className="row g-2 my-2 mx-3" >
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
                              <button type="button" onClick={handleShowUpdate} class="btn btn-outline-success ms-5 btn-lg">Update<i class="fas fa-sharp fa-solid fa-pen ms-2"></i></button>
                              
                                
                             
                                    </div>
                                </div>
                            </div>



                        </div>

                        <div className="row my-5 mx-3">
                            <h3 className="fs-4 mb-3">Transaction</h3>
                            <div className="col">
                                <table className="table bg-white rounded shadow-sm  table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col">Transaction No.</th>
                                            <th scope="col">Transaction Date</th>
                                            <th scope="col">Vehicle No.</th>
                                            <th scope="col">Debit Amount</th>
                                            <th scope="col">Credit Amount</th>
                                            <th scope="col">Amount Due</th>

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
                                                        <td key={1}>{item?.transaction_no}</td>
                                                        <td key={2}>{item?.tr_date.substring(0,10)}</td>
                                                        <td key={3}>{item?.vehicle_no}</td>
                                                        <td key={4}>{item?.debit}</td>
                                                        <td key={5}>{item?.credit}</td>
                                                        <td key={6}>{item?.amount_due}</td>


                                                        <td key={7}>{item?.status}</td>
                                                        <td key={8}>{item?.delivered_date.substring(0,10)}</td>                                                      
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
      
    </>
  )
}

export default Customer
