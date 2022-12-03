import React, { useState ,useContext, useEffect} from 'react'
import Navbar from './Navbar'
import creditContext from '../context/credits/creditContext'

const Hometo = () => {
  const context = useContext(creditContext);
  const { addRequest,credit,getcredit } = context;

  const[req,setReq]=useState({debit:"", vehicle_no:""})
  useEffect(() => {
    getcredit();
}, [credit])

console.log("credit read", credit)
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
              <td>35000</td>
              <td>15000</td>
              <td>50000</td>
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
  )
}

export default Hometo
