import React from 'react'
import Header from './components/Header'
import './App.css'
import Balance from './components/Balance'
import IncomeExpense from './components/IncomeExpense'
import AddTransaction from './components/AddTransaction'
import TransactionList from './components/TransactionList'
import { GlobalProvider } from './context/GlobaState'


const App = () => {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
};

export default App
