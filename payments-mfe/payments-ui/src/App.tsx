import React from 'react';
import logo from './logo.svg';
import './App.css';
import { PaymentsList } from './remote-components/PaymentList';

function App() {
  return (
    <div >
      <h1>This is the Container App</h1>
      <PaymentsList />
      </div>
  );
}

export default App;
