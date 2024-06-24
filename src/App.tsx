import QuoteGenerator from './components/QuoteGenerator/QuoteGenerator.tsx'

import classes from './App.module.css'

function App() {
  return (
    <>
      <QuoteGenerator />
      <div className={classes.sig}>
        <a href='https://twitter.com/HannahRobinson'>
          <i className='fab fa-twitter'></i> @HannahRobinson
        </a>
      </div>
    </>
  )
}

export default App
