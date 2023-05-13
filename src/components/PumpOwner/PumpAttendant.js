import React, { useState, useRef, useContext, useEffect } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import PoSidebar from "../Sidebar/PoSidebar";

import creditContext from "../../context/credits/creditContext";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Swal from "sweetalert2";

const PumpAttendant = () => {
  const context = useContext(creditContext);
  const { handleToggle, allatt, getallatt, deleteAtt, updateAtt, addAtt } =
    context;

  const [deleteid, setDeleteid] = useState("");

  // Delete Button on click
  const [showdelete, setShowDelete] = useState(false);

  const handleCloseDelete = () => setShowDelete(false);
  const handleShowDelete = (id) => {
    setDeleteid(id);
    setShowDelete(true);
  };
  console.log("set delete id", deleteid);
  // Add Button on click
  const [showadd, setShowAdd] = useState(false);

  const handleCloseAdd = () => setShowAdd(false);
  const handleShowAdd = () => setShowAdd(true);

  // Update Button on click
  const [showUpdate, setShowUpdate] = useState(false);
  const [updateid, setupdateid] = useState("");

  const handleCloseUpdate = () => setShowUpdate(false);
  const handleShowUpdate = (id) => {
    setupdateid(id);
    setShowUpdate(true);
  };

  useEffect(() => {
    getallatt();
  }, []);


  //  const deleteAttendant = () => {
  //   <div
  //   className="modal show"
  //   style={{ display: 'block', position: 'initial' }}>
  //   <Modal.Dialog>
  //     <Modal.Header closeButton>
  //       <Modal.Title>Modal title</Modal.Title>
  //     </Modal.Header>

  //     <Modal.Body>
  //       <p>Modal body text goes here.</p>
  //     </Modal.Body>

  //     <Modal.Footer>
  //       <Button variant="secondary">Close</Button>
  //       <Button variant="primary">Save changes</Button>
  //     </Modal.Footer>
  //   </Modal.Dialog>
  // </div>
  //  }

  //new add cust changes

  const onChange = (e) => {
    setAddAttendant({ ...addAttendant, [e.target.name]: e.target.value });
  };

  const onUpdate = (e) => {
    setUpdateAttendant({ ...updateAttendant, [e.target.name]: e.target.value });
  };

  const [addAttendant, setAddAttendant] = useState({
    name: "",
    email: "",
    password: "",
    phone1: "",
    phone2:"",
    shift: "",
  });
  const handleAddAtt = (e) => {
    //refClose.current.click();
    e.preventDefault();
    addAtt(
      addAttendant.name,
      addAttendant.email,
      addAttendant.password,
      addAttendant.phone1,
      addAttendant.phone2,
      addAttendant.shift
    );
    setAddAttendant({
      name: "",
      email: "",
      password: "",
      phone1: "",
      phone2:"",
      shift: "",
    });
    Swal.fire(
      'Done!',
      'New Attendant Created Successfully!',
      'success'
    )   
     setShowAdd(false);
  };

  //end of new add cust changes
  //new add cust changes

  const [updateAttendant, setUpdateAttendant] = useState({
    name: "",
    email: "",
    password: "",
    phone1: "",
    phone2:"",
    shift: "",
  });
  const handleUpdate = () => {
    //refClose.current.click();

    updateAtt(
      updateid,
      updateAttendant.name,
      updateAttendant.email,
      updateAttendant.password,
      updateAttendant.phone1,
      updateAttendant.phone2,
      updateAttendant.shift
    );

    setUpdateAttendant({
      name: "",
      email: "",
      password: "",
      phone1: "",
      phone2:"",
      shift: "",
    });
    Swal.fire(
      'Done!',
      'Attendant Updated Successfully!',
      'success'
    )

    setShowUpdate(false);
  };

  //end of new add cust changes

  const handleDelete = (id) => {
    //refClose.current.click();
    deleteAtt(id);
    Swal.fire(
      'Done!',
      'Attendant Deleted Successfully!',
      'success'
    )  
      setShowDelete(false);
    setDeleteid("");
  };

  return (
    <>
      {/* Delete Button Modal */}

      <Modal show={showdelete} onHide={handleCloseDelete} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Customer</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure ,you want to delete the Attendant</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDelete}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => handleDelete(deleteid)}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Add Button Modal */}

      <Modal show={showadd} onHide={handleCloseAdd}>
        <Modal.Header closeButton>
          <Modal.Title>Add Attendant</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Attendant Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="eg. Ram Mishra"
                id="name"
                name="name"
                onChange={onChange}
                minLength={5}
                required
                value={addAttendant.name}
                autoFocus
              />

              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="eg. xyz@gmail.com"
                id="email"
                name="email"
                onChange={onChange}
                minLength={5}
                required
                value={addAttendant.email}
              />
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="eg. ****"
                id="password"
                name="password"
                onChange={onChange}
                minLength={5}
                required
                value={addAttendant.password}
              />

              <Form.Label>Contact</Form.Label>
              <Form.Control
                type="phone"
                placeholder="eg. 8767987877"
                id="phone1"
                name="phone1"
                onChange={onChange}
                minLength={10}
                required
                value={addAttendant.phone1}
              />

              <Form.Label>Shift</Form.Label>
              <Form.Control
                type="text"
                placeholder="Morning"
                id="shift"
                name="shift"
                onChange={onChange}
                required
                value={addAttendant.shift}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAdd}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddAtt}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Update Button Modal */}

      {/* <Button variant="primary" onClick={handleShowUpdate}>
        Launch demo modal
      </Button> */}

      <Modal show={showUpdate} onHide={handleCloseUpdate}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Attendant Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="eg. Ram Mishra"
                id="name"
                name="name"
                onChange={onUpdate}
                minLength={5}
                required
                value={updateAttendant.name}
                autoFocus
              />

              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="eg. xyz@gmail.com"
                id="email"
                name="email"
                onChange={onUpdate}
                minLength={5}
                required
                value={updateAttendant.email}
              />
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="eg. ****"
                id="password"
                name="password"
                onChange={onUpdate}
                minLength={5}
                required
                value={updateAttendant.password}
              />

              <Form.Label>Contact</Form.Label>
              <Form.Control
                type="phone"
                placeholder="eg. 8767987877"
                id="phone1"
                name="phone1"
                onChange={onUpdate}
                minLength={10}
                required
                value={updateAttendant.phone1}
              />

              <Form.Label>Shift</Form.Label>
              <Form.Control
                type="shift"
                placeholder="Morining"
                id="shift"
                name="shift"
                onChange={onUpdate}
                required
                value={updateAttendant.shift}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseUpdate}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleUpdate(deleteid)}>
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

        <PoSidebar />

        <div id="page-content-wrapper">
          <nav className="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4">
            <div className="d-flex align-items-center">
              <i
                className="fas fa-align-left primary-text fs-4 me-3"
                onClick={handleToggle}
                id="menu-toggle"
              ></i>
              <h2 className="fs-2 m-0">Pump Attendant Details</h2>
            </div>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle second-text fw-bold"
                    href="/"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fas fa-user me-2"></i>John Doe
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="/">
                        Profile
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Settings
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Logout
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </nav>
          <div class="btnat text-center">
            <button
              type="button"
              onClick={handleShowAdd}
              class="btn btn-outline-success me-5 btn-lg"
            >
              Add<i class="fas fa-solid fa-user-plus ms-2"></i>
            </button>
          </div>
          <div className="row my-5">
            <div className="col">
              <table
                className="table bg-white rounded shadow-sm  table-hover"
                width="1000"
              >
                <thead>
                  <tr class="table-primary">
                   
                    <th scope="col">Attendant Name</th>
                    <th scope="col">Contact</th>
                    <th scope="col">Contact 2</th>

                    <th scope="col">Shift</th>
                    <th scope="col">Update</th>
                    <th scope="col">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {allatt.length > 0 &&
                    allatt.map((item) => {
                      return (
                        <tr className={!item.isActive && "table-danger"}>
                          <td>{item.name}</td>
                          <td>{item.phone1}</td>
                          <td>{item.phone2|| "-"}</td>

                          <td>{item.shift||"-"}</td>
                          <td onClick={() => handleShowUpdate(item._id)}>
                            <i class="fas fa-sharp fa-solid fa-pen"></i>
                          </td>
                          <td onClick={() => handleShowDelete(item._id)}>
                            <i class="fas fa-sharp fa-solid fa-trash ms-2"></i>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PumpAttendant;
