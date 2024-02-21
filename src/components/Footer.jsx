import React from 'react'

const Footer = ({handleNewGame, handleSuggestMove}) => {
  return (
    <div className="game-info">
    <div className="button-container">
      <button onClick={handleNewGame}>New Game</button>
      <button onClick={handleSuggestMove}>Suggest Move</button>
    </div>
  </div>
  )
}

export default Footer