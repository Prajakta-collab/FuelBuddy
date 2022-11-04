import React from 'react'
import Navbar from './Navbar'

const Hometo = () => {
  return (
    <div>
      <Navbar />
      <div class="mt-3 mx-4">
        <p class="h4">Credit</p>
      </div>
      <div class="table-responsive-sm pt-2 mx-5">
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
        <form class="border border-dark p-3">
          <div class="mb-3 mr-auto d-flex" >
            <div class="mx-3"><label class="form-label"><p class="h6">Fuel Quantity</p></label></div>
            <div class="w-75"><input type="text" class="form-control" placeholder=""></input></div>
          </div>
          <div class="mb-3 mr-auto d-flex" >
            <div class="mx-3"><label class="form-label"><p class="h6">Vehicle Number</p></label></div>
            <div class="w-75"><input type="text" class="form-control"></input></div>
          </div>
          <div class="text-center"><button type="submit" class="btn btn-primary">Submit</button></div>
        </form>
      </div>
    </div>
  )
}

export default Hometo
