import React, { useState ,useContext, useEffect} from 'react'
import Navbar from './Navbar'
import creditContext from '../context/credits/creditContext'
import VoSidebar from './Sidebar/VoSidebar'

const Hometo = () => {
  const context = useContext(creditContext);
  const { addRequest,credit,getcredit,handleToggle } = context;


  const[req,setReq]=useState({debit:"", vehicle_no:""})
  
  useEffect(() => {
    getcredit();
}, [credit])

 const onChange=(e)=>{
  setReq({...req,[e.target.name]:e.target.value})
  console.log(req)
  }
  const handleClick=(e)=>{
    e.preventDefault();
    addRequest(req.debit,req.vehicle_no,"req_received")
    setReq({debit:"", vehicle_no:""}) 
    alert('Request sent successfully!')
    }





  return (
     
    <div>
      <Navbar />

      <div className="d-flex" id="wrapper">
                {/* {toggle && <div style={{ backgroundColor: "#3282B8" }} >
                    <div className="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom"><i
                        className="fas fa-user-secret me-2"></i>FuelBuddy</div>
                    <div className="list-group list-group-flush my-3">
                        <a href="/" className="list-group-item list-group-item-action  second-text active"><i
                            className="fas fa-tachometer-alt me-2"></i>Dashboard</a>
                      
                        <a href="/" className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i
                            className="fas fa-paperclip me-2"></i>Daily Transactions</a>
                        <a href="/" className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i
                            className="fas fa-chart-line me-2"></i>About</a>


                        <a href="/" className="list-group-item list-group-item-action bg-transparent text-danger fw-bold"><i
                            className="fas fa-power-off me-2"></i>Logout</a>
                    </div>
                </div>} */}
                <VoSidebar/>

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
        
      <div class="mt-3 mx-4">
        <p class="h4">Credit</p>
      </div>
      <div class="table-responsive-sm pt-2 mx-5 pe-5 me-5">
        <table class="table table-hover ">
          <thead>
            <tr class="table-primary">
              <th scope="col" class="w-25">Available Credit</th>
              <th scope="col" class="w-25">Utilised Credit</th>
              <th scope="col" class="w-25">Allowed Credit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{credit.available_credit}</td>
              <td>{credit.utilized_credit}</td>
              <td>{credit.allowed_credit}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="mt-5 mx-4 mb-2">
        <p class="h4">Fuel Request</p>
        <form class="border border-dark p-3" for>
          <div class="mb-3 mr-auto d-flex" >
            <div class="mx-3 mt-1"><label class="form-label"><p class="h6">Fuel Amount</p></label></div>
            <div class="w-75">
              <input 
              type="text" 
              id="debit"
              name="debit"
              className="form-control" 
              placeholder="Enter amount in Rs"
              onChange={onChange} 
              minLength={1} required
              value={req.debit}
              />
            </div>
          </div>
          <div class="mb-3 mr-auto d-flex" >
            <div class="mx-3 mt-1"><label class="form-label"><p class="h6">Vehicle Number</p></label></div>
            <div class="w-75">
              <input 
              type="text"
              id="vehicle_no"
              name="vehicle_no"
              className="form-control" 
              placeholder="Enter Vehicle registration number"
              onChange={onChange} 
              minLength={6} required
              value={req.vehicle_no}
              />
            </div>
          </div>
          <div class="text-center"><button type="submit" class="btn btn-primary"  onClick={handleClick}>Submit</button></div>
        </form>
      </div>
      <div class="mt-5 mx-4 mb-2">

      </div>



               
                </div>
            </div>
















      
    </div>
  )
}

export default Hometo
