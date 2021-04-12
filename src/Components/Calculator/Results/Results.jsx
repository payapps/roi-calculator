import React from 'react'

const Results = ({ moneySavedAnnually, timeSaved, returnOnInvestment, isForUK }) => {
  return (
    <section className='roi-calculator__results'>
      <div className='roi-calculator__results__return-on-investment'>
        <p>You’ll see a return on your investment in</p>
        <p>
          <span className='roi-calculator__results__number'>{returnOnInvestment.toFixed(2)}</span>
          <span className='roi-calculator__results__units'> months</span>
        </p>
      </div>

      <div className='roi-calculator__results__savings'>
        <p>With Payapps, you could save</p>
        <p>
          <span className='roi-calculator__results__number'>{isForUK ? '£' : '$'}{moneySavedAnnually.toFixed(2)}</span>
          <span className='roi-calculator__results__units'> pa</span>
        </p>
        <p>or</p>
        <p>
          <span className='roi-calculator__results__number'>{timeSaved.toFixed(0)}</span>
          <span className='roi-calculator__results__units'> hrs/month</span>
        </p>
      </div>
    </section>
  )
}

export default Results
