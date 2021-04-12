import React, { useState } from 'react'
import Turnover from './Turnover/Turnover'
import ClaimsNumber from './ClaimsNumber/ClaimsNumber'
import AssessmentTime from './AssessmentTime/AssessmentTime'
import HourlyRate from './HourlyRate/HourlyRate'
import PhysicalPayments from './PhysicalPayments/PhysicalPayments'
import Results from './Results/Results'

const Calculator = ({ isForUK }) => {
  const [turnover, setTurnover] = useState({ label: 'none', value: 0 })
  console.log('turnover', turnover)
  const [numOfClaims, setNumOfClaims] = useState(200)
  const [assessmentTime, setAssessmentTime] = useState(2)
  const [hourRate, setHourlyRate] = useState(isForUK ? 28 : 75)
  const [numOfPages, setNumOfPages] = useState(0)
  const [archivalCost, setArchivalCost] = useState(0)
  const isTierSelected = turnover.value !== 0

  //Payapps Defaults
  const payappsProcessingTime = 45 / 60 //45 minutes
  const payappsDefaultRate = isForUK ? 28 : 75 //dollars per hour
  const payappsTotalPerClaimCost = payappsDefaultRate * payappsProcessingTime
  const payappsTotalAnnualCostToProcessClaims = payappsTotalPerClaimCost * numOfClaims * 12

  //Calculate Money Savings
  const totalPerClaimCost = hourRate * assessmentTime
  const totalAnnualCostToProcessClaims = (totalPerClaimCost * numOfClaims * 12) + ((numOfPages * 0.05 * 13) + (archivalCost * 12))
  const moneySavedAnnually = totalAnnualCostToProcessClaims - payappsTotalAnnualCostToProcessClaims

  //Calculate Time Savings
  const timeSaved = (numOfClaims * assessmentTime) - (numOfClaims * payappsProcessingTime)

  //Calculate Return On Investment
  const returnOnInvestment = turnover.value / (moneySavedAnnually / 12)

  //restrict letters and characters
  const restrictLetterInput = (e) => {
    if ([46, 8, 9, 27, 13, 110].indexOf(e.keyCode) !== -1 ||
      // Allow: Ctrl+A
      (e.keyCode === 65 && e.ctrlKey === true) ||
      // Allow: home, end, left, right
      (e.keyCode >= 35 && e.keyCode <= 39)) {
      // let it happen, don't do anything
      return;
    }
    // Ensure that it is a number and stop the keypress
    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
      e.preventDefault();
    }
  }

  return (
    <section className='roi-calculator'>
      <Turnover setTurnover={setTurnover} isForUK={isForUK} />

      <ClaimsNumber setNumOfClaims={setNumOfClaims} isTierSelected={isTierSelected} restrictLetterInput={restrictLetterInput} />

      <AssessmentTime setAssessmentTime={setAssessmentTime} isTierSelected={isTierSelected} restrictLetterInput={restrictLetterInput} />

      <HourlyRate setHourlyRate={setHourlyRate} isTierSelected={isTierSelected} isForUK={isForUK} restrictLetterInput={restrictLetterInput} />

      {isForUK ? null : <PhysicalPayments setNumOfPages={setNumOfPages} setArchivalCost={setArchivalCost} isTierSelected={isTierSelected} restrictLetterInput={restrictLetterInput} />}

      <Results moneySavedAnnually={moneySavedAnnually} timeSaved={timeSaved} returnOnInvestment={returnOnInvestment} isForUK={isForUK} />

    </section>
  )
}

export default Calculator