import React from 'react';
import './App.css';
import Header from './Header';
import SwipeButtons from './SwipeButtons';
import Tindercards from './Tindercards';

function App() {
  return (
    <div className='App'>
      <Header />
      <Tindercards />
      <SwipeButtons />
    </div>
  );
}

export default App;
