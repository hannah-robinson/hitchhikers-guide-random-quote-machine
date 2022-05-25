# Hitchhiker's Guide Random Quote Machine

![Screenshot of app](https://github.com/hannah-robinson/hitchhikers-guide-random-quote-machine/blob/main/public/hgttu.jpg)

This fully-responsive React app shows random quotes from (and about) Douglas Adams's "The Hitchhiker's Guide to the Galaxy".

I built this app as an assessed project for freeCodeCamp's Front End Libraries certification. I designed the project to meet the requirements of freeCodeCamp's acceptance criteria. The user stories can be seen here: [Build a Random Quote Machine](https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-random-quote-machine)

I chose Hitchhiker's Guide quotes because Douglas Adams is one of my favourite authors. My inspiration for the design came from Douglas Adams's stories.

---

## See the live app

A live version of the random quote machine can be found at: [hannah-robinson.github.io/hitchhikers-guide-random-quote-machine/](https://hannah-robinson.github.io/hitchhikers-guide-random-quote-machine/)

## Technologies used

- React
- JavaScript (ES6)
- CSS3 (using CSS modules)
- HTML5
- Git & GitHub

## How the app works

If you click the first button (the one with the Twitter icon on it), a tweet containing the quote will be pre-composed for you to send.

If you click the second button, the quote will be copied to your computer's clipboard ready for you to paste wherever you like.

When you click the 'New Quote' button, a new quote will be randomly selected from a list of Hitchhiker's Guide quotes. Here is the code that does this:
![Screenshot of a key piece od code from the app](https://github.com/hannah-robinson/hitchhikers-guide-random-quote-machine/blob/main/src/assests/screenshot-code-hitchhikers-guide.jpg)

## What I would do differently if I built this again

I wrote this app using class-based components. If I were to make a similar app now, I would use functional components. I would also add a tool tip to indicate to the user that they have successfully copied the quote to their clipboard. I would probably use Sass rather than CSS, and I would either create an API for the quotes data or separate them out into a data.json file. I would also improve the apps accessibility. It currently scores only 75% for accessibility on [Lighthouse](https://googlechrome.github.io/lighthouse/viewer/?psiurl=https%3A%2F%2Fhannah-robinson.github.io%2Fhitchhikers-guide-random-quote-machine%2F&strategy=mobile&category=performance&category=accessibility&category=best-practices&category=seo&category=pwa).
