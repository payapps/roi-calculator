import React from 'react'

const Results = ({ moneySavedAnnually, timeSaved, returnOnInvestment, isUnitedKingdom, isTierSelected }) => {
  const overlay = !isTierSelected ? <div className='overlay'></div> : null

  const formattedMoneySavedAnnually = moneySavedAnnually.toLocaleString("en-AU", { maximumFractionDigits: 2, minimumFractionDigits: 2 })

  return (
    <section className='roi-calculator__results' data-testid='roi-results'>
      <div className='roi-calculator__results__return-on-investment'>
        <p>You’ll see a return on your investment in</p>
        <div className="roi-calculator__results__result-container">
          {overlay}
          <p>
            <span className='roi-calculator__results__number'>{returnOnInvestment.toFixed(1)}</span>
            <span className='roi-calculator__results__units'> months</span>
          </p>
        </div>
      </div>

      <div className='roi-calculator__results__savings'>
        <p>With Payapps, you could save</p>
        <div className='roi-calculator__results__result-container'>
          {overlay}
          <p>
            <span className='roi-calculator__results__number'>{isUnitedKingdom ? '£' : '$'}{formattedMoneySavedAnnually}</span>
            <span className='roi-calculator__results__units'> pa</span>
          </p>
          <p>or</p>
          <p>
            <span className='roi-calculator__results__number'>{timeSaved.toFixed(0)}</span>
            <span className='roi-calculator__results__units'> hrs/month</span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Results
