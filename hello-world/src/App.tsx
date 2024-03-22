import React from 'react';
import logo from './logo.svg';
import './App.css';

import Greeting from './components/Greeting'
import SongList from './components/SongList';

function App() {
  return (
    <>
      {/* <h1>Hello World</h1>    
      <p>Add something</p>
      <Greeting name= 'Shoaib' age={30} />
      <Greeting name= 'Avichal' age={21} />
      <Greeting name= 'Bhavya' age={60} /> */}
      <SongList></SongList>
    </>
  );
}

export default App;
