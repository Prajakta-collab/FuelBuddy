import React from 'react'

const requestCard = () => {
  return (
    <div class="card">
                                    {/* <h5 class="card-header">Customer Name</h5> */}
                                    <div class="card-body">
                                        <h5 class="card-title">Vehicle Number:</h5>
                                        <p class="card-text">Customer ID</p>
                                        <p class="card-text">Customer Name</p>
                                        <p class="card-text">Requested Credit</p>
                                        <button type="submit" class="btn btn-outline-primary">Request Complete</button>
                                    </div>
                                </div>
  )
}

export default requestCard