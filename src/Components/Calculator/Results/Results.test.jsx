import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import Results from './Results'

//mock value passed in props
const moneySavedAnnually = 123456789.011
const returnOnInvestment = 4.981
const timeSaved = 345.51

const ResultsComponent = <Results moneySavedAnnually={moneySavedAnnually} returnOnInvestment={returnOnInvestment} timeSaved={timeSaved} />

afterEach(cleanup)

test('renders Results without crashing', () => {
  const { getByTestId } = render(ResultsComponent)
  expect(getByTestId('roi-results')).toBeInTheDocument()
})

test('render correctly formatted string value of the potential financial savings to decimal places', () => {
  render(ResultsComponent)
  const moneySaved = screen.getByText(/123,456,789.01/i)
  expect(moneySaved).toBeInTheDocument()
})

test('render correctly formatted string value of the rounded to the next hour', () => {
  render(ResultsComponent)
  const moneySaved = screen.getByText(/346/i)
  expect(moneySaved).toBeInTheDocument()
})
