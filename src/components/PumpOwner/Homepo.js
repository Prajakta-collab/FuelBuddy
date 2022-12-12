import React, { useState, useRef, useContext, useEffect } from "react";
import Navbar from "../Navbar";
import CountUp from "react-countup";
import { useNavigate,useParams } from "react-router-dom";
import creditContext from "../../context/credits/creditContext";
import "./Homepo.css";


import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import PoSidebar from "../Sidebar/PoSidebar";

const Homepo = () => {
  const context = useContext(creditContext);
  let navigate = useNavigate();


  const { cust, getcustdetails, getcustomer, card, getcardsdetail,handleToggle } = context;

  useEffect(() => {
    getcustomer();

    getcardsdetail();
  }, []);
  const params = useParams();


  console.log("customers", cust);
 
  const ref = useRef(null);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);


  const [openModal, setOpenModal] = useState(false);


  const handleShow=(e)=>{
    e.preventDefault();
   
    navigate(`/home/pumpo/${params.id}/addcust`);

 }




  const handlePumpatt=(e)=>{
    e.preventDefault();
    navigate(`/home/pumpo/${params.id}/pumpat`);
  }

  const handleLogout=(e)=>{
    e.preventDefault();
    localStorage.removeItem('auth-token');
    navigate('/login');
    //props.showAlert("Logged out successfully","success");
    alert("Logged out successfully");
}

const handleTr=(e)=>{
e.preventDefault();
navigate(`/home/pumpo/${params.id}/transactions`);
}

const handleAbout=(e)=>{
    e.preventDefault();
    navigate('/about');
}


const handleCust=(e)=>{
    e.preventDefault();
    navigate(`/home/pumpo/${params.id}`);
}
  const handleModal = () => {
    setOpenModal(true);
  };
  
  return (
    //pump owner's home page
    //     <div>

    //         <Navbar/>

    //          <div className="mt-4">   <div className="row" style={{marginLeft:'120px'}}>
    //     <div className="col-sm-2" >

    //         <div className="card text-black  mb-2" style={{maxWidth:'18rem', backgroundColor:'#FFA768', marginLeft:'20px',textcolor:'black'}}>
    //         <div className="card-body">
    //     <h2 className="card-title " >
    //       <img src='https://cdn-icons-png.flaticon.com/512/195/195496.png' style={{width:'180px', height:'100px'}} alt='noOfUniversities'/>
    //       <CountUp end={36}/></h2>
    //       <span></span>
    //     <p className="card-text">No. of Universities</p>
    // </div>
    //         </div>
    //         </div>
    //         <div className="col-sm-2">
    //         <div className="card text-black  mb-2" style={{maxWidth:'18rem' ,maxheight:'10rem', backgroundColor:'#FFA768',paddingLeft:'0px',textcolor:'black'}}>
    //         <div className="card-body">
    //     <h2 className="card-title " >
    //       <img src='https://cdn-icons-png.flaticon.com/512/562/562157.png' style={{width:'180px', height:'100px'}} alt='noofColleges'/>
    //       <CountUp end={750}/></h2>
    //       <span> </span>
    //     <p className="card-text">No. of Colleges</p>

    //         </div>
    //         </div>
    //         </div>
    //         <div className="col-sm-2">
    //         <div className="card text-black  mb-2" style={{maxWidth:'18rem', backgroundColor:'#FFA768',marginLeft:'0px',textcolor:'black'}}>
    //         <div className="card-body">
    //     <h2 className="card-title " >
    //       <img src='https://cdn2.iconfinder.com/data/icons/bubble-education-icons-1/360/School-512.png' style={{width:'180px', height:'100px'}} alt="standalone institution "/>
    //       <CountUp end={78}/></h2>
    //     <p className="card-text">No. of Standalone Institutions</p>

    //         </div>
    //         </div>
    //         </div>

    //   </div></div>

    //         <table className="table mt-3 ">
    //   <thead>
    //     <tr>
    //       <th scope="col">#</th>
    //       <th scope="col">CustomerId</th>
    //       <th scope="col">Customer Name</th>
    //       <th scope="col">Credit</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     <tr>
    //       <th scope="row">1</th>
    //       <td>34det334</td>
    //       <td>Arun Rathod</td>

    //       <td>2,00,000</td>
    //     </tr>
    //     <tr>
    //       <th scope="row">2</th>
    //       <td>34det334</td>
    //       <td>Kanchan Sigh</td>
    //       <td>1,50,000</td>
    //     </tr>
    //     <tr>
    //       <th scope="row">3</th>
    //       <td>34det334</td>
    //       <td>Jagdish Patil</td>
    //       <td>0</td>
    //     </tr>
    //   </tbody>
    // </table>
    //     </div>
    <>
      <Navbar />
      {/* <AddCust/> */}

      {/* <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button> */}
     
      <div className="d-flex" id="wrapper">
        {/* {toggle && (
          <div style={{ backgroundColor: "#3282B8" }} id="sidebar-wrapper">
            <div className="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom">
              <i className="fas fa-user-secret me-2"></i>FuelBuddy
            </div>
            <div className="list-group list-group-flush my-3">
              <a onClick={handleCust}
                
                className="list-group-item list-group-item-action bg-transparent second-text active"
              >
                <i className="fas fa-tachometer-alt me-2"></i>Dashboard
              </a>
              <a onClick={handleCust}
                
                className="list-group-item list-group-item-action bg-transparent second-text fw-bold"
              >
                <i className="fas fa-project-diagram me-2"></i>Customers
              </a>
              <a onClick={handlePumpatt}
                
                className="list-group-item list-group-item-action bg-transparent second-text fw-bold"
              >
                <i className="fas fa-sharp fa-solid fa-gas-pump me-2"></i>Pump
                Attendant
              </a>
              <a onClick={handleTr}
                href=""
                className="list-group-item list-group-item-action bg-transparent second-text fw-bold"
              >
                <i className="fas fa-paperclip me-2"></i>Daily Transactions
              </a>
              <a onClick={handleAbout}
                href=""
                className="list-group-item list-group-item-action bg-transparent second-text fw-bold"
              >
                <i className="fas fa-chart-line me-2"></i>About
              </a>

              <a onClick={handleLogout}
                href=""
                className="list-group-item list-group-item-action bg-transparent text-danger fw-bold"
              >
                <i className="fas fa-power-off me-2"></i>Logout
              </a>
            </div>
          </div>
        )} */}
<PoSidebar/>

        <div id="page-content-wrapper">
          <nav className="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4">
            <div className="d-flex align-items-center">
              <i
                className="fas fa-align-left primary-text fs-4 me-3"
                onClick={handleToggle}
                id="menu-toggle"
              ></i>
              <h2 className="fs-2 m-0">Dashboard</h2>
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

          <div className="container-fluid px-4">
            <div className="row g-3 my-2">
              <div className="col-md-3">
                <div className="p-3 text-light bg-dark shadow-sm d-flex justify-content-around align-items-center rounded">
                  <div>
                    <h3 className="fs-2">{card.customers}</h3>
                    <p className="fs-5">Customers</p>
                  </div>
                  <i className="fas fa-gift fs-1 third-text border rounded-full secondary-bg p-3"></i>
                </div>
              </div>

              <div className="col-md-3">
                <div className="p-3  text-light bg-dark shadow-sm d-flex justify-content-around align-items-center rounded">
                  <div>
                    <h3 className="fs-2">{card.sales}</h3>
                    <p className="fs-5">Sales</p>
                  </div>
                  <i className="fas fa-hand-holding-usd fs-1 third-text border rounded-full secondary-bg p-3"></i>
                </div>
              </div>

              <div className="col-md-3">
                <div className="p-3  text-light bg-dark shadow-sm d-flex justify-content-around align-items-center rounded">
                  <div>
                    <h3 className="fs-2">{card.vehicles}</h3>
                    <p className="fs-5">Vehicles Filled</p>
                  </div>
                  <i className="fas fa-truck fs-1 third-text border rounded-full secondary-bg p-3"></i>
                </div>
              </div>

              <div className="col-md-3">
                <div className="p-3  text-light bg-dark shadow-sm d-flex justify-content-around align-items-center rounded">
                  <div>
                    <h3 className="fs-2">{card.credit}</h3>
                    <p className="fs-5">Credits</p>
                  </div>
                  <i className="fas fa-chart-line fs-1 third-text border rounded-full secondary-bg p-3"></i>
                </div>
              </div>
            </div>

            <div className="row my-5">
              <h3 className="fs-4 mb-3">Customers</h3>
              <div className="col">
                <table className="table bg-white rounded shadow-sm  table-hover">
                  <thead>
                    <tr>
                      {/* <th scope="col" width="50">#</th> */}
                      <th scope="col">Customer ID</th>
                      <th scope="col">Customer Name</th>
                      <th scope="col">Total Credit</th>
                      <th scope="col">Available Credit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cust.length > 0 &&
                      cust.map((item) => {
                        return (
                          <tr className={
                            !item?.vehicle_owner?.isActive && "table-danger"
                          }
                            onClick={() => {
                              getcustdetails(item.vehicle_owner._id);
                              navigate(
                                `/home/pumpo/${params.id}/cust/${item.vehicle_owner._id}}`
                              );
                            }}
                          >
                            <td key={item._id}>{item?.vehicle_owner?._id}</td>
                            <td key={item._id}>{item?.vehicle_owner?.name}</td>
                            <td key={item._id}>{item?.allowed_credit}</td>
                            <td key={item._id}>{item?.available_credit}</td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="d-flex justify-content-end ">
              <button type="button" class="mb-3 btn btn-primary btn-lg" onClick={handleShow}>
                Add
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepo;
