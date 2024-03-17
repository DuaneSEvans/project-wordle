import React from "react"

function EndGameBanner({ won, numGuesses, answer }) {
  const classNames = `banner ${won ? "happy" : "sad"}`
  return (
    <div className={classNames}>
      {won ? (
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong> {numGuesses} guesses</strong>.
        </p>
      ) : (
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      )}
    </div>
  )
}

export default EndGameBanner
