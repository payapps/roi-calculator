import React from 'react'
import { render, cleanup } from '@testing-library/react'
import PhysicalPayments from './PhysicalPayments'

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

afterEach(cleanup)

test('renders PhysicalPayments without crashing', () => {
  const { getByTestId } = render(<PhysicalPayments hasPhysicalPayments={options[0]} />)
  expect(getByTestId('roi-physical-payments')).toBeInTheDocument()
})
