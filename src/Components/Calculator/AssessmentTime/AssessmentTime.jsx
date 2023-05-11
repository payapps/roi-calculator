import React, { useState, useEffect } from 'react'

const AssessmentTime = ({ setAssessmentTime, restrictLetterInput, text }) => {
  const [hoursValue, setHoursValue] = useState('02')
  const [minutesValue, setMinutesValue] = useState('00')
  const minutesInteger = Number(minutesValue)
  const hoursInteger = Number(hoursValue)

  const calcAssessmentTime = () => {
    setAssessmentTime(hoursInteger + (minutesInteger / 60))
  }

  useEffect(() => {
    calcAssessmentTime()
  })

  return (
    <div className='row' data-testid='roi-assessment-time'>
      <div className='text' title={text}>
        {text}
      </div>
      <div className='col1 roi-calculator__time-wrapper'>
        <input className='roi-calculator__hours' type='text' defaultValue={hoursValue} placeholder='00' onChange={(e) => setHoursValue(e.target.value)} onKeyDown={(e) => restrictLetterInput(e)} maxLength='2' />
        <span className='colon'>:</span>
        <input className='roi-calculator__minutes' type='text' defaultValue={minutesValue} placeholder='00' onChange={(e) => setMinutesValue(e.target.value)} onKeyDown={(e) => restrictLetterInput(e)} maxLength='2' />
        {/* <span className='si-unit'>hr</span> */}
      </div>
      <div className='col2'>
        hrs : mins
      </div>
    </div>
  )
}

export default AssessmentTime
