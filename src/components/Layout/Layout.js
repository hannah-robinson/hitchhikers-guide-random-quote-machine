import React from 'react';
import classes from './Layout.module.css';
import Buttons from '../Buttons/Buttons';

const layout = () => (
  <main className={classes.Card} id="quote-box">
      <div id="text"><i class="fas fa-quote-left"></i> Isn't it enough to see that a garden is beautiful without having to believe that there are fairies at the bottom of it too? <i class="fas fa-quote-right"></i></div>
      <div id="author"><em>Douglas Adams</em></div>
      <Buttons />
  </main>
)

export default layout;