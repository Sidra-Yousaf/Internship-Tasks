import React from 'react'
import Header from './Components/Header'
import './App.css';
import Balance from './Components/Balance';
import IncomeExpenses from './Components/IncomeExpenses';
import TransactionList from './Components/TransactionList';


import { GlobalProvider } from './Context/GlobalState';
import AddTransaction from './Components/AddTransaction';

function App() {
  return (
    <>
    <GlobalProvider>
    <Header/>
    <div className='container'>
    <Balance/>
    <IncomeExpenses/>
    <TransactionList/>
    <AddTransaction/>

    </div>
 
    </GlobalProvider>
   
    </>
   
  )
}

export default App
