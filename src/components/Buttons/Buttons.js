import React from 'react';
import classes from './Buttons.module.css';
import ShareButtons from './ShareButtons/ShareButtons';

const Buttons = () => {
  return (
    <div className={classes.Buttons}>
      <ShareButtons />
      <button id="new-quote">New Quote</button>
    </div>
  )
}

export default Buttons;
