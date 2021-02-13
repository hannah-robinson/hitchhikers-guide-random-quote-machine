import React from 'react';
import classes from './Quote.module.css';
import QuoteGenerator from '../../containers/QuoteGenerator';

const quote = (props) => {
  return (
    <div>
      <div id="text"><i class="fas fa-quote-left"></i> {props.quote} <i class="fas fa-quote-right"></i></div>
      <div id="author"><em>{props.author}</em></div>
    </div>
  )
}

export default quote;