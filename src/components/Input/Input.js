import React from "react"

function Input({ setPrevGuesses, gameOver }) {
  const [guess, setGuess] = React.useState("")

  const handleInput = (e) => {
    setGuess(e.target.value.toUpperCase())
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.info({ guess })
    setPrevGuesses((prev) => [...prev, guess])
    setGuess("")
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        pattern="\w{5,5}"
        onChange={handleInput}
        required
        title="Please enter a 5-letter word."
        disabled={gameOver}
      />
    </form>
  )
}

export default Input
