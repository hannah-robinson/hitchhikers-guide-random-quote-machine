import React from 'react';
import classes from './Buttons.module.css';



const Buttons = () => {
  return (
    <div>
      <a href="https://twitter.com/intent/tweet" title="Tweet this!" id="tweet-quote"><button><i class="fab fa-twitter"></i></button></a>
      <button title="Copy this!"><i class="fas fa-copy"></i></button>
      <button id="new-quote">New Quote</button>
    </div>
  )
}

export default Buttons;
