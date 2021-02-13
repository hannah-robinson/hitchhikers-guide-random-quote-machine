import React from 'react';
import classes from './Layout.module.css';
import Buttons from '../Buttons/Buttons';

const layout = () => (
  <main className={classes.Card} id="quote-box">
      <div id="text">Quote</div>
      <div id="author">Author</div>
      <Buttons />
  </main>
)

export default layout;