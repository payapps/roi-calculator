import React from 'react'

const HourlyRate = ({ setHourlyRate, isUnitedKingdom, restrictLetterInput, text }) => {

  return (
    <div className='row' data-testid='roi-hourly-rate'>
      <div className='text' title={text}>
        {text}
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
