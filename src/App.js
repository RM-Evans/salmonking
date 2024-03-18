import './App.css'
import Notes from './notes'
import thirtySeven from './img/pic1.png'
import ConfettiGenerator from 'confetti-js'
import { useEffect, useState } from 'react'
import JSConfetti from 'js-confetti'

function App() {
  const jsConfetti = new JSConfetti()

  // useEffect(() => {
  //   const confettiSettings = { target: 'my-canvas' }
  //   const confetti = new ConfettiGenerator(confettiSettings)
  //   confetti.render()
  //   setTimeout(() => confetti.clear(), 10000)

  //   // return () => confetti.clear()
  // }, [])

  return (
    <>
      {/* <script src="https://cdn.jsdelivr.net/npm/js-confetti@latest/dist/js-confetti.browser.js"></script> */}

      <div className="App">
        {/* <canvas id="my-canvas"></canvas> */}

        <div className="mainContainer">
          <div className="content">
            <img
              src={thirtySeven}
              alt=""
              id="thirtySevPortrait"
              onClick={() =>
                jsConfetti.addConfetti({
                  confettiColors: ['#f04722', '#457016', '#ffffff', '#ffef0f'],
                  confettiRadius: 4.5,
                  confettiNumber: 100,
                })
              }
            />
            <h2>🎉 ALL HAIL THE BIRTHDAY SALMON 🎉</h2>
            <h3>
              WE’RE GRATEFUL THAT WE GET TO WATCH YOU WHILE YOU SLAVE AWAY AT
              THE CANVAS.
            </h3>
            <h4> Here's a small token of our gratitude to show you we care:</h4>
            <Notes />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
