import React from 'react';
import classes from './App.module.css'
import QuoteGenerator from './containers/QuoteGenerator';

function App() {
  return (
  <div>
  <QuoteGenerator />
  <div className={classes.sig}><a href="https://twitter.com/HannahRobinson"><i class="fab fa-twitter"></i>  @HannahRobinson</a></div>
  </div>
  );
}

export default App;
