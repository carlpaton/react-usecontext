import React from 'react';
import './App.css';
import GlobalSpinner from './components/GlobalSpinner/GlobalSpinner'
import RandomComments from './components/RandomComments'
import GlobalSpinnerContextProvider  from './context/GlobalSpinnerContext';

function App() {
  return (
    <GlobalSpinnerContextProvider>
      <div className="App">
        <GlobalSpinner />
        <RandomComments />
      </div>
    </GlobalSpinnerContextProvider>
  );
}

export default App;