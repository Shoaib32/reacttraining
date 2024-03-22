import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './HomePage/HomePage';
import PageNotFound from './PageNotFound/PageNotFound';

function App() {
  return (
    <div>
      <h1>Static pages app</h1>
      <HomePage user={{id: 0, name: '', role: ''}} login={(user) => {}} logout={() => {}} />
      <PageNotFound />
    </div>
  );
}

export default App;
