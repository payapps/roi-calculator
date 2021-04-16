import React from 'react'

const ClaimsNumber = ({ setNumOfClaims, isTierSelected, restrictLetterInput }) => {
  const overlay = !isTierSelected ? <div className='overlay'></div> : null
  
  return (
    <div className='row' data-testid='roi-claims-number'>
      {overlay}
      <div className='text' title='Claims processed per month?'>
        Claims processed per month?
          </div>
      <div className='col1'>
        <input type='text' defaultValue={200} placeholder='0' onChange={(e) => setNumOfClaims(e.target.value)} onKeyDown={(e) => restrictLetterInput(e)} maxLength='9' />
      </div>
      <div className='col2'>
        &nbsp;
          </div>
    </div>
  )
}

export default ClaimsNumber
