import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import Calculator from './Calculator'

afterEach(cleanup)

test('renders Calculator without crashing', () => {
  const { getByTestId } = render(<Calculator />)
  expect(getByTestId('roi-calculator')).toBeInTheDocument()
})
