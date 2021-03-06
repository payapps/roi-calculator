import React from 'react'
import Select from 'react-select'
import { customStyles } from '../../../Styles/dropdownStyles'

const PhysicalPayments = ({ setNumOfPages, setArchivalCost, restrictLetterInput, hasPhysicalPayments, setPhysicalPayments }) => {
  const options = [
    {
      label: 'no',
      value: false
    },
    {
      label: 'yes',
      value: true
    }
  ]

  const overlay = hasPhysicalPayments.value ? null : <div className='overlay'></div>

  return (
    <div className="roi-calculator__physical-payments" data-testid='roi-physical-payments'>
      <div className='row'>
        <div className='text' title='Do you mail physical payment schedules?'>
          Do you mail physical payment schedules?
        </div>

        <div className='col1'>
          <Select
            options={options}
            onChange={(value) => setPhysicalPayments(value)}
            defaultValue={options[0]}
            aria-label='turnover tier'
            isSearchable={false}
            menuPlacement='auto'
            styles={customStyles}
          />
        </div>

        <div className='col2'>
          &nbsp;
        </div>
      </div>

      <div className='row'>
        {overlay}

        <div className='text' title='Average number of pages printed per claim'>
          Average number of pages printed per claim
        </div>
        <div className='col1'>
          <input type='text' placeholder='0' onChange={(e) => setNumOfPages(e.target.value)} onKeyDown={(e) => restrictLetterInput(e)} />
        </div>
        <div className='col2'>
          &nbsp;
          </div>
      </div>

      <div className='row'>
        {overlay}
        <div className='text' title='Courier and archival costs'>
          Courier and archival costs
        </div>
        <div className='col1 roi-calculator__archival-input-wrapper'>
          {/* <span className='roi-calculator__archival-currency'>$</span> */}
          <input type='text' className='roi-calculator__archival-cost' placeholder='0' onChange={(e) => setArchivalCost(e.target.value)} onKeyDown={(e) => restrictLetterInput(e)} />
        </div>
        <div className='col2'>
          per annum
        </div>
      </div>
    </div>
  )
}

export default PhysicalPayments
