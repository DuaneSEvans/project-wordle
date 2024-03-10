import React from "react"

/**
A new component should be created, to render previous guesses.
When the user submits their guess, that value should be rendered within this new component.
There should be no key warnings in the console!
 */
function PreviousGuesses({ prevGuesses }) {
  return (
    <div className="guess-results">
      {prevGuesses.map(({ guess, id }) => (
        <p className="guess" key={id}>
          {guess}
        </p>
      ))}
    </div>
  )
}

export default PreviousGuesses
