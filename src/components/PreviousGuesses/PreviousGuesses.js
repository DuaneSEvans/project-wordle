import React from "react"
import { NUM_OF_GUESSES_ALLOWED } from "../../constants"
import { range } from "../../utils"
import Guess from "../Guess/Guess"

function PreviousGuesses({ prevGuesses, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <Guess
          guess={prevGuesses[num] ? prevGuesses[num] : undefined}
          answer={answer}
          key={num}
        />
      ))}
    </div>
  )
}

export default PreviousGuesses
