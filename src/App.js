import React from 'react';
import './App.css';

//Import Components
import { Header } from './components/Header'
import { Balance } from './components/Balance'
import { AccountSummary } from './components/AccountSummary'
import { AccountHistory } from './components/AccountHistory'
import { AddTransaction } from './components/AddTransaction'

function App() {
  return (
    <div>
      <Header/>
      <div className="container">
        <Balance/>
        <AccountSummary/>
        <AccountHistory/>
        <AddTransaction/>
      </div>
    </div>
  );
}

export default App;
