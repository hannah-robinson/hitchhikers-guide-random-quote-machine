import React from 'react'
import classes from './Buttons.module.css'

const buttons = (props) => {
  const tweet =
    'https://twitter.com/intent/tweet?text=' +
    `❝ ` +
    props.quote +
    ` ❞` +
    ' – ' +
    props.author
  return (
    <div className={classes.Buttons}>
      <div className={classes.ShareButtons}>
        <a href={tweet} title='Tweet this!' id='tweet-quote'>
          <button className={classes.Icon}>
            <i className='fab fa-twitter'></i>
          </button>
        </a>
        <button title='Copy this!' id='copy' onClick={props.copy}>
          <i className='fas fa-copy'></i>
        </button>
      </div>
      <button id='new-quote' onClick={props.update}>
        New Quote
      </button>
    </div>
  )
}

export default buttons
