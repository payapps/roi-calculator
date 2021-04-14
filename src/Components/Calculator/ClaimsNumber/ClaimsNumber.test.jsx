import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import ClaimsNumber from './ClaimsNumber'

afterEach(cleanup)

test('renders ClaimsNumber without crashing', () => {
  const { getByTestId } = render(<ClaimsNumber />)
  expect(getByTestId('roi-claims-number')).toBeInTheDocument()
})
