import classes from './Quote.module.css'

const Quote: React.FC<{ quote: string; author: string }> = (props) => {
  return (
    <div className={classes.Quote}>
      <div id='text' className={classes.Text}>
        <span className={classes.Punctuation}>
          <i className='fas fa-quote-left'></i>
        </span>{' '}
        {props.quote}
      </div>
      <div id='author' className={classes.Author}>
        {props.author}
      </div>
    </div>
  )
}

export default Quote
