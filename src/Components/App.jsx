import React, { useState, useEffect } from 'react'
import Header from './Header/Header'
import Calculator from './Calculator/Calculator'
import { logo } from '../svgIcons'

const App = () => {
  // const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const [timeZoneCountry, setTimeZoneCountry] = useState('')
  const [isForUK, setIsForUK] = useState(false)

  const getTimeZone = () => {
    fetch('https://extreme-ip-lookup.com/json/')
      .then(res => res.json())
      .then(response => {
        const country = response.country
        country.toLowerCase() === 'united kingdom' && setIsForUK(true)
        setTimeZoneCountry(response.country)
      })
      .catch((status) => {
        console.log('Request failed', status)
      })
  }

  useEffect(() => {
    getTimeZone()
  }, [timeZoneCountry])

  return (
    <div className="roi-container">
      {timeZoneCountry === '' ?
        logo : (
          <>
            <Header />
            <Calculator isForUK={isForUK} />
          </>
        )
      }
    </div>
  )
}

export default App
