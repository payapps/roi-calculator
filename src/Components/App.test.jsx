import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import App from './App'

afterEach(cleanup)

test('renders App without crashing', () => {
  const { getByTestId } = render(<App />)
  expect(getByTestId('roi-container')).toBeInTheDocument()
})
