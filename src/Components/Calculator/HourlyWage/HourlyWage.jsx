import React from 'react'

const HourlyWage = ({ setHourlyWage }) => {
  return (
    <div className='row'>
      <div className='text'>
        Average Contract Administrator hourly wage <span className='small-text'>(if you’re unsure, use $75 per hour)</span>
      </div>
      <div className='col1 roi-calculator__wage-input-wrapper'>
        <span className='roi-calculator__wage-currency'>$</span>
        <input className='roi-calculator__wage' defaultValue={75} placeholder='0' onChange={(e) => setHourlyWage(e.target.value)} />
      </div>
      <div className='col2'>
        per hour
      </div>
    </div>
  )
}

export default HourlyWage
