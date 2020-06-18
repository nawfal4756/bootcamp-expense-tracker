import React from 'react';
import './App.css';

//Import Components
import { Header } from './components/Header'
import { Balance } from './components/Balance'
import { AccountSummary } from './components/AccountSummary'
import { AccountHistory } from './components/AccountHistory'
import { AddTransaction } from './components/AddTransaction'

import { GlobalProvider } from './context/GlobalState'

function App() {
  return (
    <GlobalProvider>
      <Header/>
      <div className="container">
        <Balance/>
        <AccountSummary/>
        <AccountHistory/>
        <AddTransaction/>
      </div>
    </GlobalProvider>
  );
}

export default App;
