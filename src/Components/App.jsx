import React, { useState, useEffect } from 'react'
import Header from './Header/Header'
import Calculator from './Calculator/Calculator'
import { logo } from '../svgIcons'

const App = () => {
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
  const [isUnitedKingdom, setUnitedKingdom] = useState(false)

  console.log('timezone', timezone)

  const getTimeZone = () => {
    timezone.toLocaleLowerCase() === 'europe/london' && setUnitedKingdom(true)
  }

  useEffect(() => {
    getTimeZone()
  })

  return (
    <div className="roi-container">
      <Header />
      <Calculator isUnitedKingdom={isUnitedKingdom} />
    </div>
  )
}

export default App
