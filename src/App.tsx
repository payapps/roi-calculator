import React from 'react';
import {  Header } from './Header';

function App() {
  return (
    <div className="container">
      <div className="header">
        <Header />
      </div>
      <div className="calculator">
        <h1>R.O.I calculator</h1>
        <p style={{ marginBottom: 60, fontSize: 16 }}>
          Work out how much you could be saving in time and investment.
        </p>
        <div className="row">
          <div className="text">
            How many claims do you process per month?
          </div>
          <div className="col1">
            <input value="0" />
          </div>
          <div className="col2">
            &nbsp;
          </div>
        </div>
        <div className="row">
          <div className="text">
            Average time spent assessing a single claim?
          </div>
          <div className="col1">
            <input value="0" />
          </div>
          <div className="col2">
            &nbsp;
          </div>
        </div>
        <div className="row">
          <div className="text">
            With an average Contract Admin salary of?
          </div>
          <div className="col1">
            <input value="$0" />
          </div>
          <div className="col2">
            &nbsp;
          </div>
        </div>


      </div>
    </div>
  );
}

export default App;
