import React from 'react'
import Select from 'react-select'
import { customStyles } from '../../../Styles/dropdownStyles'

const PhysicalPayments = ({ setPhysicalPayments, setNumOfPages, setArchivalCost }) => {
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

  return (
    <div className="roi-calculator__physical-payments">
      <div className='row'>
        <div className='text'>
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
        <div className='text'>
          Average number of pages printed per claim
        </div>
        <div className='col1'>
          <input placeholder='0' onChange={(e) => setNumOfPages(e.target.value)} />
        </div>
        <div className='col2'>
          &nbsp;
          </div>
      </div>

      <div className='row'>
        <div className='text'>
          Courier and archival costs
        </div>
        <div className='col1 roi-calculator__archival-input-wrapper'>
          {/* <span className='roi-calculator__archival-currency'>$</span> */}
          <input className='roi-calculator__archival-cost' placeholder='0' onChange={(e) => setArchivalCost(e.target.value)} />
        </div>
        <div className='col2'>
          per annum
        </div>
      </div>
    </div>
  )
}

export default PhysicalPayments
