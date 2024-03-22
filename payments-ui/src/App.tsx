import React from 'react';
import logo from './logo.svg';
import './App.css';
import { PageHeader } from './components/PageHeader/PageHeader';
import { Search } from './components/search/Search';
import { Transaction, Transactions } from './components/Transactions/Transactions';
import { AddTransaction } from './components/addTransaction/AddTransaction';

function App() {

  const transactions: Transaction[] = [{id:1, date: new Date, country: 'USA', currency: 'USD', amount: 200.00}];

  return (
    <div>
      <PageHeader></PageHeader>

      <Search></Search>

      <AddTransaction></AddTransaction>
      <Transactions transactions={transactions} ></Transactions>
    </div>
  );
}

export default App;
