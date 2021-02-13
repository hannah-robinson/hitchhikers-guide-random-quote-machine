import React from 'react';
import classes from './Buttons.module.css';
import ShareButtons from './ShareButtons/ShareButtons';

const buttons = (props) => {
  return (
    <div className={classes.Buttons}>
      <ShareButtons />
      <button id="new-quote" onClick={props.clicked}>New Quote</button>
    </div>
  )
}

export default buttons;
