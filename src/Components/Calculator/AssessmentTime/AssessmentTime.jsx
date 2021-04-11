import React from 'react'

const AssessmentTime = ({ setAssessmentTime }) => {
  return (
    <div className='row'>
      <div className='text'>
        Total time to assess a claim?
      </div>
      <div className='col1 roi-calculator__time-wrapper'>
        <input className='roi-calculator__hours' defaultValue={'02'} placeholder='0' onChange={(e) => setAssessmentTime(e.target.value)} />
        <span className='colon'>:</span>
        <input className='roi-calculator__minutes' defaultValue={'00'} placeholder='00' onChange={(e) => console.log(e.target.value)} />
        {/* <span defaultValue='00' className='si-unit'>hr</span> */}
      </div>
      <div className='col2'>
        hrs : mins
      </div>
    </div>
  )
}

export default AssessmentTime
