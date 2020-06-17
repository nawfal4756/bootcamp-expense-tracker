import React from 'react';
import './App.css';

//Import Components
import { Header } from './components/Header'
import { Balance } from './components/Balance'
import { AccountSummary } from './components/AccountSummary'
import { AccountHistory } from './components/AccountHistory'

function App() {
  return (
    <div>
      <Header/>
      <div className="container">
        <Balance/>
        <AccountSummary/>
        <AccountHistory/>
      </div>
    </div>
  );
}

export default App;
