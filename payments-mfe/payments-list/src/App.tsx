import React from 'react';
import logo from './logo.svg';
import './App.css';
import { PaymentsList } from './components/PaymentsList';

function App() {
  return (
    <div>
      <h1> This is from payment list micro app</h1>
      <PaymentsList />
    </div>
  );
}

export default App;
