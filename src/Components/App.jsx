import React, { useState, useEffect } from 'react'
import Header from './Header/Header'
import Calculator from './Calculator/Calculator'

const App = () => {
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
  const [isUnitedKingdom, setUnitedKingdom] = useState(false)

  const getTimeZone = () => {
    timezone.toLocaleLowerCase() === 'europe/london' && setUnitedKingdom(true)
  }

  useEffect(() => {
    getTimeZone()
  })

  return (
    <div className="roi-container" data-testid='roi-container'>
      <Header />
      <Calculator isUnitedKingdom={isUnitedKingdom} />
    </div>
  )
}

export default App
