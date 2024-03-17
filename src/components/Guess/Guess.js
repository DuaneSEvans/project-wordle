import React from "react"
import { range } from "../../utils"
import { checkGuess } from "../../game-helpers"

function Guess({ guess, answer }) {
  const result = checkGuess(guess, answer)
  return (
    <p className="guess">
      {range(5).map((num) => {
        return (
          <span
            key={num}
            className={`cell ${result ? result[num].status : ""}`}
          >
            {result ? result[num].letter : ""}
          </span>
        )
      })}
    </p>
  )
}

export default Guess
