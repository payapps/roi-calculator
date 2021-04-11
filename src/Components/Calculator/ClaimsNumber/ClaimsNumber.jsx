import React from 'react'

const ClaimsNumber = ({ setNumOfClaims }) => {
  return (
    <div className='row'>
      <div className='text'>
        Claims processed per month?
          </div>
      <div className='col1'>
        <input defaultValue={200} placeholder='0' onChange={(e) => setNumOfClaims(e.target.value)} />
      </div>
      <div className='col2'>
        &nbsp;
          </div>
    </div>
  )
}

export default ClaimsNumber
