import classes from './App.module.css'
import QuoteGenerator from './containers/QuoteGenerator.tsx'
import Aux from './hoc/Aux.tsx'

function App() {
  return (
    <Aux>
      <QuoteGenerator />
      <div className={classes.sig}>
        <a href='https://twitter.com/HannahRobinson'>
          <i className='fab fa-twitter'></i> @HannahRobinson
        </a>
      </div>
    </Aux>
  )
}

export default App
