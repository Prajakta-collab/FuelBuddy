import React,{useContext, useState} from 'react'


const AddCust = () => {

 const [cust, setCust] = useState({})
 const handleClick=()=>{
    //refClose.current.click();

 }

const onChange=(e)=>{
setCust({...cust,[e.target.name]:e.target.value})
}

    return (
        <div>
            <div className="container my-3">
        <h2>Add Customer :</h2>
        <form>
          <div className="form-group my-3">
            <label htmlFor="title">Name</label>
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
          <div className="form-group my2">
            <label htmlFor="description">No of Vehicles</label>
            <input
              type="text"
              className="form-control "
              id="vehicles"
              name="vehicles"
              placeholder="No. of Vehicles"
              onChange={onChange}
              style={{height:'15vh'}} minLength={5} required
              value={cust.vehicle_no}
            />

          </div>
          <div className="form-group my-2">
            <label htmlFor="tag">Credit</label>
            <input
              type="text"
              className="form-control"
              id="credit"
              name="credit"
              placeholder="Credit"
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
    )
}

export default AddCust