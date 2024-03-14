import React from "react"

function Guess({ guess }) {
  return (
    <p className="guess">
      {guess.map((letter, i) => (
        <span key={i} className="cell">
          {letter}
        </span>
      ))}
    </p>
  )
}

export default Guess
