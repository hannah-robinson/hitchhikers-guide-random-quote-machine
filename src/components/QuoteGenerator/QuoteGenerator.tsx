import { useState } from 'react'
import Quote from '../Quote/Quote.tsx'
import Buttons from '../Buttons/Buttons.tsx'
import { QUOTES } from '../../data.ts'
import classes from './QuoteGenerator.module.css'

const QuoteGenerator = () => {
  const [randomIndex, setRandomIndex] = useState(
    Math.floor(Math.random() * QUOTES.length)
  )

  const quoteUpdateHandler = (): void => {
    setRandomIndex(Math.floor(Math.random() * QUOTES.length))
  }

  const copyToClipboardHandler = (): void => {
    navigator.clipboard.writeText(
      `${QUOTES[randomIndex].quote} – ${QUOTES[randomIndex].author}`
    )
  }

  // this.quoteUpdateHandler = this.quoteUpdateHandler.bind(this)
  // this.copyToClipboardHandler = this.copyToClipboardHandler.bind(this)

  return (
    <main className={classes.Card} id='quote-box'>
      <Quote
        quote={QUOTES[randomIndex].quote}
        author={QUOTES[randomIndex].author}
      />
      <Buttons
        update={quoteUpdateHandler}
        copy={copyToClipboardHandler}
        quote={QUOTES[randomIndex].quote}
        author={QUOTES[randomIndex].author}
      />
    </main>
  )
}

export default QuoteGenerator
