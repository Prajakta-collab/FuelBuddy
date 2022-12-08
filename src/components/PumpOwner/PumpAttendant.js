import React, { useState, useRef,useContext } from 'react'
import { Link, useLocation, useHistory } from "react-router-dom";
import PoSidebar from '../Sidebar/PoSidebar';
import creditContext from '../../context/credits/creditContext';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const PumpAttendant = () => {
    const context = useContext(creditContext);
    const ref = useRef(null)
    // Delete Button on click  
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // Add Button on click 
    const [showadd, setShowAdd] = useState(false);

    const handleCloseAdd = () => setShowAdd(false);
    const handleShowAdd = () => setShowAdd(true);
  
 // Update Button on click 
 const [showUpdate, setShowUpdate] = useState(false);

 const handleCloseUpdate = () => setShowUpdate(false);
 const handleShowUpdate = () => setShowUpdate(true);




    const {handleToggle,toggle}=context;
    const [openModal, setOpenModal] = useState(false);
  
   const deleteAttendant = () => {
    <div
    className="modal show"
    style={{ display: 'block', position: 'initial' }}>
    <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Modal body text goes here.</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary">Close</Button>
        <Button variant="primary">Save changes</Button>
      </Modal.Footer>
    </Modal.Dialog>
  </div>
   }


    const handleModal = () => {
        setOpenModal(true);
    }
    return (
        <>
        
  {/* Delete Button Modal */}

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
  
  
  {/* Add Button Modal */}

 

      <Modal show={show} onHide={handleCloseAdd}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAdd}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseAdd}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>


  {/* Update Button Modal */}

      <Button variant="primary" onClick={handleShowUpdate}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleCloseUpdate}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>


        <div className="d-flex" id="wrapper">
            {/* {toggle && <div style={{ backgroundColor: "#3282B8" }} id="sidebar-wrapper">
                <div className="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom"><i
                    className="fas fa-user-secret me-2"></i>FuelBuddy</div>
                <div className="list-group list-group-flush my-3">
                    <a href="/" className="list-group-item list-group-item-action bg-transparent second-text fw-bold "><i
                        className="fas fa-tachometer-alt me-2"></i>Dashboard</a>
                    <a href="/" className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i
                        className="fas fa-project-diagram me-2"></i>Customers</a>
                    <a href="/" className="list-group-item list-group-item-action bg-transparent second-text active"><i
                        className="fas fa-sharp fa-solid fa-gas-pump me-2"></i>Pump Attendant</a>
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
                        <h2 className="fs-2 m-0">Pump Attendant Details</h2>
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
                <div class="btnat text-center">
                <button type="button"  onClick={handleShowAdd} class="btn btn-outline-success me-5 btn-lg">Add<i class="fas fa-solid fa-user-plus ms-2"></i></button>
                <button type="button" onClick={handleShow} class="btn btn-outline-danger btn-lg">Delete<i class="fas fa-sharp fa-solid fa-trash ms-2"></i></button>
                </div>
                <div className="row my-5">
                    <div className="col">
                        <table className="table bg-white rounded shadow-sm  table-hover" width="900">
                            <thead>
                                <tr class="table-primary">
                                    <th scope="col" width="50">#</th>
                                    <th scope="col">Attendant ID</th>
                                    <th scope="col">Attendant Name</th>
                                    <th scope="col">Contact</th>
                                    <th scope="col">Shift</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>a1</td>
                                    <td>Jonny</td>
                                    <td>89346728</td>
                                    <td>Morning</td>
                                    <td><i class="fas fa-sharp fa-solid fa-pen"></i></td>
                                </tr>

                                <tr>
                                    <th scope="row">2</th>
                                    <td>a2</td>
                                    <td>Jonny</td>
                                    <td>89346728</td>
                                    <td>Evening</td>
                                    <td><i class="fas fa-sharp fa-solid fa-pen"></i></td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>a7</td>
                                    <td>Jonny</td>
                                    <td>89346728</td>
                                    <td>Morning</td>
                                    <td><i class="fas fa-sharp fa-solid fa-pen"></i></td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td>a11</td>
                                    <td>Jonny</td>
                                    <td>89346728</td>
                                    <td>Morning</td>
                                    <td><i class="fas fa-sharp fa-solid fa-pen"></i></td>
                                </tr>
                                <tr>
                                    <th scope="row">5</th>
                                    <td>a8</td>
                                    <td>Jonny</td>
                                    <td>89346728</td>
                                    <td>Evening</td>
                                    <td><i class="fas fa-sharp fa-solid fa-pen"></i></td>
                                </tr>
                                <tr>
                                    <th scope="row">6</th>
                                    <td>a6</td>
                                    <td>Jonny</td>
                                    <td>89346728</td>
                                    <td>Evening</td>
                                    <td><i class="fas fa-sharp fa-solid fa-pen"></i></td>
                                </tr>
                                <tr>
                                    <th scope="row">7</th>
                                    <td>a3</td>
                                    <td>Jonny</td>
                                    <td>89346728</td>
                                    <td>Morning</td>
                                    <td><i class="fas fa-sharp fa-solid fa-pen"></i></td>
                                </tr>
                                <tr>
                                    <th scope="row">8</th>
                                    <td>a10</td>
                                    <td>Jonny</td>
                                    <td>89346728</td>
                                    <td>Evening</td>
                                    <td><i class="fas fa-sharp fa-solid fa-pen"></i></td>
                                </tr>
                                <tr>
                                    <th scope="row">9</th>
                                    <td>a20</td>
                                    <td>Jonny</td>
                                    <td>89346728</td>
                                    <td>Morning</td>
                                    <td><i class="fas fa-sharp fa-solid fa-pen"></i></td>
                                </tr>
                                <tr>
                                    <th scope="row">10</th>
                                    <td>a12</td>
                                    <td>Jonny</td>
                                    <td>89346728</td>
                                    <td>Morning</td>
                                    <td><i class="fas fa-sharp fa-solid fa-pen"></i></td>
                                </tr>
                                <tr>
                                    <th scope="row">11</th>
                                    <td>a16</td>
                                    <td>Jonny</td>
                                    <td>89346728</td>
                                    <td>Evening</td>
                                    <td><i class="fas fa-sharp fa-solid fa-pen"></i></td>
                                </tr>
                                <tr>
                                    <th scope="row">12</th>
                                    <td>a21</td>
                                    <td>Jonny</td>
                                    <td>89346728</td>
                                    <td>Morning</td>
                                    <td><i class="fas fa-sharp fa-solid fa-pen"></i></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default PumpAttendant