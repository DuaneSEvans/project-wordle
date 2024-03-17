import React from "react"
import { range } from "../../utils"
import { checkGuess } from "../../game-helpers"

function Guess({ guess, answer }) {
  const result =
    checkGuess(guess, answer) ??
    range(5).map(() => ({ letter: "", status: "" }))

  return (
    <p className="guess">
      {result.map(({ letter, status }, i) => {
        return (
          <span key={i} className={`cell ${status}`}>
            {letter}
          </span>
        )
      })}
    </p>
  )
}

export default Guess
