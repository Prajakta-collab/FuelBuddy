import React,{useState,useContext}from 'react';
import { useNavigate,useParams } from "react-router-dom";
import creditContext from '../../context/credits/creditContext';

const AttSidebar = () => {
    const context = useContext(creditContext);
    const params = useParams();
    let navigate = useNavigate();
   

    const {toggle}=context;

  
    
      const handleLogout=(e)=>{
        e.preventDefault();
        localStorage.removeItem('auth-token');
        navigate('/login');
        //props.showAlert("Logged out successfully","success");
        alert("Logged out successfully");
    }

    const handleAbout=(e)=>{
        e.preventDefault();
        navigate('/about');
    }
    
    
    const handleCust=(e)=>{
        e.preventDefault();
        navigate(`/home/pumpattendant/${params.id}`);
    }

  return (
    <>   
          <div className="d-flex" id="wrapper">
        {toggle && (
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
        )}


        <div id="page-content-wrapper">
    

        </div>
    </div>
    </>

  )
}

export default AttSidebar