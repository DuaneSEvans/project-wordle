import React from "react"
import { NUM_OF_GUESSES_ALLOWED } from "../../constants"
import { range } from "../../utils"
import Guess from "../Guess/Guess"

function PreviousGuesses({ prevGuesses }) {
  const emptySlots = range(5).map((_) => "")
  const workingArray = range(NUM_OF_GUESSES_ALLOWED).map((i) =>
    prevGuesses[i]?.guess ? prevGuesses[i].guess.split("") : emptySlots
  )

  return (
    <div className="guess-results">
      {workingArray.map((guess, i) => (
        <Guess guess={guess} key={i} />
      ))}
    </div>
  )
}

export default PreviousGuesses
