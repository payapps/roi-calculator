import React, { useState } from 'react'
import Turnover from './Turnover/Turnover'
import ClaimsNumber from './ClaimsNumber/ClaimsNumber'
import AssessmentTime from './AssessmentTime/AssessmentTime'
import HourlyRate from './HourlyRate/HourlyRate'
import PhysicalPayments from './PhysicalPayments/PhysicalPayments'
import Results from './Results/Results'

const Calculator = ({ isUnitedKingdom }) => {
  const [numOfClaims, setNumOfClaims] = useState(200)
  const [assessmentTime, setAssessmentTime] = useState(2)
  const [hourRate, setHourlyRate] = useState(isUnitedKingdom ? 28 : 75)
  const [numOfPages, setNumOfPages] = useState(0)
  const [hasPhysicalPayments, setPhysicalPayments] = useState(false)
  const [archivalCost, setArchivalCost] = useState(0)

  const checkZeroInputValues = numOfClaims < 1 || assessmentTime < 0.01 || hourRate < 0.01 || numOfClaims === '' || assessmentTime === '' || hourRate === ''

  //Payapps Defaults
  const defaultPayappsProcessTime = 45 / 60 //45 mins
  const payappsProcessingTime = assessmentTime < 1.5 ? assessmentTime / 2 : defaultPayappsProcessTime //if input value is less than 1.5 hrs then use half the assessment time entered by user
  const payappsDefaultRate = isUnitedKingdom ? 28 : 75 //pounds or dollars per hour
  const payappsTotalPerClaimCost = payappsDefaultRate * payappsProcessingTime
  const payappsTotalAnnualCostToProcessClaims = payappsTotalPerClaimCost * numOfClaims * 12

  //Calculate Money Savings
  const totalPerClaimCost = hourRate * assessmentTime
  const physicalCosts = hasPhysicalPayments.value ? ((numOfPages * 0.05 * 12) + (archivalCost * 12)) : 0
  const totalAnnualCostToProcessClaims = (totalPerClaimCost * numOfClaims * 12) + physicalCosts
  const moneySavedAnnually = checkZeroInputValues ? 0 : totalAnnualCostToProcessClaims - payappsTotalAnnualCostToProcessClaims

  //Calculate Time Savings
  const timeSaved = checkZeroInputValues ? 0 : (numOfClaims * assessmentTime) - (numOfClaims * payappsProcessingTime)

  //restrict letters and characters
  const restrictLetterInput = (e) => {
    if ([46, 8, 9, 27, 13, 110].indexOf(e.keyCode) !== -1 ||
      // Allow: Ctrl+A
      (e.keyCode === 65 && e.ctrlKey === true) ||
      // Allow: home, end, left, right
      (e.keyCode >= 35 && e.keyCode <= 39)) {
      // let it happen, don't do anything
      return
    }
    // Ensure that it is a number and stop the keypress
    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
      e.preventDefault()
    }
  }

  return (
    <section className='roi-calculator' data-testid='roi-calculator'>
      {/* <Turnover setTurnover={setTurnover} isUnitedKingdom={isUnitedKingdom} /> */}

      <ClaimsNumber setNumOfClaims={setNumOfClaims} restrictLetterInput={restrictLetterInput} />

      <AssessmentTime setAssessmentTime={setAssessmentTime} restrictLetterInput={restrictLetterInput} />

      <HourlyRate setHourlyRate={setHourlyRate} isUnitedKingdom={isUnitedKingdom} restrictLetterInput={restrictLetterInput} />

      {isUnitedKingdom ? null : <PhysicalPayments setNumOfPages={setNumOfPages} setArchivalCost={setArchivalCost} restrictLetterInput={restrictLetterInput} hasPhysicalPayments={hasPhysicalPayments} setPhysicalPayments={setPhysicalPayments} />}

      <Results moneySavedAnnually={moneySavedAnnually} timeSaved={timeSaved} isUnitedKingdom={isUnitedKingdom} />

    </section>
  )
}

export default Calculator
