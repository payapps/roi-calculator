import React from 'react'
import Header from './Header/Header'
import Calculator from './Calculator/Calculator'

const App = () => {
  return (
    <div className="roi-container">
      <Header />

      <div className="roi-heading">
        <h1>R.O.I. CALCULATOR</h1>
        <p>
          See how much time and money you could be saving with Payapps.
        </p>
      </div>

      <Calculator />      
    </div>
  )
}

export default App
