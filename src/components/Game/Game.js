import React from "react"

import { sample } from "../../utils"
import { WORDS } from "../../data"
import Input from "../Input"
import PreviousGuesses from "../PreviousGuesses/PreviousGuesses"
import EndGameBanner from "../EndGameBanner/EndGameBanner"

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game() {
  const [prevGuesses, setPrevGuesses] = React.useState([])
  const correctGuess = prevGuesses.includes(answer)
  const gameOver = prevGuesses.length >= 6 || correctGuess

  return (
    <>
      <PreviousGuesses prevGuesses={prevGuesses} answer={answer} />
      <Input setPrevGuesses={setPrevGuesses} gameOver={gameOver} />
      {gameOver && (
        <EndGameBanner
          won={correctGuess}
          numGuesses={prevGuesses.length}
          answer={answer}
        />
      )}
    </>
  )
}

export default Game
