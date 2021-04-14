import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import AssessmentTime from './AssessmentTime'

const setAssessmentTime = jest.fn(() => 1)

afterEach(cleanup)

test('renders AssessmentTime without crashing', () => {
  const { getByTestId } = render(<AssessmentTime setAssessmentTime={setAssessmentTime} />)
  expect(getByTestId('roi-assessment-time')).toBeInTheDocument()
})
