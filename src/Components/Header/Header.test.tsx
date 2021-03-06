import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import Header from './Header'

afterEach(cleanup)

test('renders Header without crashing', () => {
  const { getByTestId } = render(<Header />)
  expect(getByTestId('roi-heading')).toBeInTheDocument()
})

test('render Savings Calculator heading', () => {
  render(<Header />)
  const headingText = screen.getByText(/SAVINGS CALCULATOR/i)
  expect(headingText).toBeInTheDocument()
})

test('render Savings Calculator description', () => {
  render(<Header />)
  const descriptionText = screen.getByText(/See how much time and money you could be saving with Payapps./i)
  expect(descriptionText).toBeInTheDocument()
})
