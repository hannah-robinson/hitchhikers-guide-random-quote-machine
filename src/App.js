import React from 'react';
import classes from './App.module.css'
import QuoteGenerator from './containers/QuoteGenerator';
import Aux from './hoc/Aux';

function App() {
  return (
  <Aux>
  <QuoteGenerator />
  <div className={classes.sig}><a href="https://twitter.com/HannahRobinson"><i class="fab fa-twitter"></i>  @HannahRobinson</a></div>
  </Aux>
  );
}

export default App;
