import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';

const layout = () => (
  <main className={classes.Card} id="quote-box">
      <div id="text">Quote</div>
      <div id="author">Author</div>
      <a href="https://twitter.com/intent/tweet" id="tweet-quote"><button>Twitter</button></a>
      <button>Copy</button>
      <button id="new-quote">New Quote</button>
  </main>
)

export default layout;