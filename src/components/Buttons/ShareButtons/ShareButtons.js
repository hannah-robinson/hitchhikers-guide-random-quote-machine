import React from 'react';
import classes from './ShareButtons.module.css';

const ShareButtons = () => {
  return (
    <div className={classes.ShareButtons}>
      <a href="https://twitter.com/intent/tweet" title="Tweet this!" id="tweet-quote"><button><i class="fab fa-twitter"></i></button></a>
      <button title="Copy this!"><i class="fas fa-copy"></i></button>
    </div>
  )
}

export default ShareButtons;
