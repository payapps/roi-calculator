import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import Turnover from './Turnover'

afterEach(cleanup)

test('renders Turnover without crashing', () => {
  const { getByTestId } = render(<Turnover />)
  expect(getByTestId('roi-calculator__turnover')).toBeInTheDocument()
})
