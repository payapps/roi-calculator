import React from 'react'

const HourlyRate = ({ setHourlyRate, isTierSelected, isUnitedKingdom, restrictLetterInput }) => {
  const overlay = !isTierSelected ? <div className='overlay'></div> : null

  return (
    <div className='row'>
      {overlay}
      <div className='text' title='Average Contract Administrator hourly wage (f you’re unsure, use 75)'>
        Average Contract Administrator hourly wage <span className='small-text'>(if you’re unsure, use {isUnitedKingdom ? '£28' : '$75'} per hour)</span>
      </div>
      <div className='col1 roi-calculator__wage-input-wrapper'>
        <span className='roi-calculator__wage-currency'>{isUnitedKingdom ? '£' : '$'}</span>
        <input type='text' className='roi-calculator__wage' defaultValue={isUnitedKingdom ? 28 : 75} placeholder='0' onChange={(e) => setHourlyRate(e.target.value)} onKeyDown={(e) => restrictLetterInput(e)} />
      </div>
      <div className='col2'>
        per hour
      </div>
    </div>
  )
}

export default HourlyRate
