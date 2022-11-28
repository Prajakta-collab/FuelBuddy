import React,{useContext, useState} from 'react'


const AddCust = () => {

 const [cust, setCust] = useState({})
 const handleClick=()=>{
    //refClose.current.click();

 }
 const [toggle, setToggle] = useState(true);
//  const ref = useRef(null)

 const [openModal, setOpenModal] = useState(false);
 const handleToggle = () => {
     setToggle(!toggle);
 }

 const handleModal = () => {
     setOpenModal(true);
 }
const onChange=(e)=>{
setCust({...cust,[e.target.name]:e.target.value})
}

    return (
      <div className="d-flex" id="wrapper">
            {toggle && <div style={{ backgroundColor: "#3282B8" }} id="sidebar-wrapper">
                <div className="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom"><i
                    className="fas fa-user-secret me-2"></i>FuelBuddy</div>
                <div className="list-group list-group-flush my-3">
                    <a href="/" className="list-group-item list-group-item-action bg-transparent second-text fw-bold "><i
                        className="fas fa-tachometer-alt me-2"></i>Dashboard</a>
                    <a href="/" className="list-group-item list-group-item-action bg-transparent second-text active"><i
                        className="fas fa-project-diagram me-2"></i>Customers</a>
                    <a href="/" className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i
                        className="fas fa-sharp fa-solid fa-gas-pump me-2"></i>Pump Attendant</a>
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
                        <h2 className="fs-2 m-0">Customer Details</h2>
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
                <div class="btnat ">
               
      
        <div>
            <div className="container my-3">
        <h3>Add Customer</h3>
        <form>
          <div className="form-group my-3">
            <label htmlFor="title" >Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              aria-describedby="emailHelp"
              placeholder="Enter Name"
              onChange={onChange} 
             minLength={5} required
             value={cust.name}
            />
          </div>
          <div className="form-group my-2">
            <label htmlFor="tag">Credit</label>
            <input
              type="text"
              className="form-control"
              id="credit"
              name="credit"
              placeholder="Enter Credit Amount in Rs"
              onChange={onChange}
              minLength={5} required
              value={cust.credit}
            />

          </div>
         
          <button className="btn btn-primary my-3" onClick={handleClick}>
            Add Customer
          </button>
        </form>
      </div>
        </div>

  </div>
   
            </div>
        </div>














    )
}

export default AddCust