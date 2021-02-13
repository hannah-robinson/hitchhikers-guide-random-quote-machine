import React from 'react';
import classes from './App.module.css';
import QuoteGenerator from './containers/QuoteGenerator';

function App() {
  return (
    <main className={classes.Card} id="quote-box">
      <QuoteGenerator />
   </main>
  );
}

export default App;
