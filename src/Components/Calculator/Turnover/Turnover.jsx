import React, { useState } from 'react'
import Select from 'react-select'
import { customStyles } from '../../../Styles/dropdownStyles'

const Turnover = ({ setTurnover }) => {
  const options = [
    {
      label: 'Tier 5 (< $10m)',
      value: 21000
    },
    {
      label: 'Tier 4 ($10-$50m)',
      value: 24000
    },
    {
      label: 'Tier 3 ($50-$250m)',
      value: 36000
    },
    {
      label: 'Tier 2 ($250m - $1.5b)',
      value: 75000
    },
    {
      label: 'Tier 1 ($1.5b +)',
      value: 126000
    },
  ]

  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  console.log('timezone', timezone)

  // const [value, setValue] = useState('')

  return (
    <div className='roi-calculator__turnover'>
      <div className='row'>
        <div className='text'>
          Select annual turnover
        </div>

        <div className='col1'>
          <Select
            options={options}
            onChange={(value) => setTurnover(value)}
            placeholder='Tier'
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
    </div>
  )
}

export default Turnover
