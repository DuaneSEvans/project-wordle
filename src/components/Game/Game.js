import React from "react"

import { sample } from "../../utils"
import { WORDS } from "../../data"
import Input from "../Input"
import PreviousGuesses from "../PreviousGuesses/PreviousGuesses"

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game() {
  const [prevGuesses, setPrevGuesses] = React.useState([])
  return (
    <>
      <PreviousGuesses prevGuesses={prevGuesses} />
      <Input setPrevGuesses={setPrevGuesses} />
    </>
  )
}

export default Game
