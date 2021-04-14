import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import HourlyRate from './HourlyRate'

afterEach(cleanup)

test('renders HourlyRate without crashing', () => {
  const { getByTestId } = render(<HourlyRate />)
  expect(getByTestId('roi-hourly-rate')).toBeInTheDocument()
})
