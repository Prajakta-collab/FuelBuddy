import React from 'react'
import Navbar from './Navbar'

const Hometo = () => {

  const requestSubmit=()=>{
    //submit request
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
            <div class="mx-3 mt-1"><label class="form-label"><p class="h6">Fuel Quantity</p></label></div>
            <div class="w-75">
              <input 
              type="text" 
              className="form-control" 
              placeholder="Enter amount in Litres"
              minLength={1} required
              />
            </div>
          </div>
          <div class="mb-3 mr-auto d-flex" >
            <div class="mx-3 mt-1"><label class="form-label"><p class="h6">Vehicle Number</p></label></div>
            <div class="w-75">
              <input 
              type="text"
              className="form-control" 
              placeholder="Enter Vehicle registration number"
              minLength={6} required
              />
            </div>
          </div>
          <div class="text-center"><button type="submit" class="btn btn-primary" onClick={requestSubmit}>Submit</button></div>
        </form>
      </div>
    </div>
  )
}

export default Hometo
