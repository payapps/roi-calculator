import React from 'react'

const ClaimsNumber = ({ setNumOfClaims, restrictLetterInput, text }) => {

  return (
    <div className='row' data-testid='roi-claims-number'>
      <div className='text' title={text}>
        {text}
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
