import React from 'react';
import classes from './Layout.module.css';
import Buttons from '../Buttons/Buttons';
import QuoteGenerator from '../../containers/QuoteGenerator';

const layout = () => (
  <main className={classes.Card} id="quote-box">
      <QuoteGenerator />
      {/* <Buttons /> */}
  </main>
)

export default layout;