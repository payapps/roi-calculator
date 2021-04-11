import React, { useState } from 'react'
import Turnover from './Turnover/Turnover'
import ClaimsNumber from './ClaimsNumber/ClaimsNumber'
import AssessmentTime from './AssessmentTime/AssessmentTime'
import HourlyWage from './HourlyWage/HourlyWage'
import PhysicalPayments from './PhysicalPayments/PhysicalPayments'
import Results from './Results/Results'

const Calculator = () => {
  const [turnover, setTurnover] = useState(0)
  console.log('turnover', turnover)
  const [numOfClaims, setNumOfClaims] = useState(200)
  console.log('num of claims', numOfClaims)
  const [assessmentTime, setAssessmentTime] = useState(2)
  console.log(assessmentTime)
  const [hourlyWage, setHourlyWage] = useState(75)
  console.log('hourly wage', hourlyWage)
  const [hasPhysicalPayments, setPhysicalPayments] = useState(false)
  console.log('hasPhysicalPayments', hasPhysicalPayments)
  const [numOfPages, setNumOfPages] = useState(0)
  console.log('num of pages', numOfPages)
  const [archivalCost, setArchivalCost] = useState(0)
  console.log('archival cost', archivalCost)


  return (
    <section className='roi-calculator'>
      <Turnover setTurnover={setTurnover} />

      <ClaimsNumber setNumOfClaims={setNumOfClaims} />

      <AssessmentTime setAssessmentTime={setAssessmentTime} />

      <HourlyWage setHourlyWage={setHourlyWage} />

      <PhysicalPayments setPhysicalPayments={setPhysicalPayments} setNumOfPages={setNumOfPages} setArchivalCost={setArchivalCost} />

      <Results />

    </section>
  )
}

export default Calculator
