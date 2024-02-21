import React from 'react'

const Board = ({renderSquare}) => {
  return (
    <div className='board'>
    <div className="board-row">
      {renderSquare(0)}
      {renderSquare(1)}
      {renderSquare(2)}
      {renderSquare(3)}
    </div>
    <div className="board-row">
      {renderSquare(4)}
      {renderSquare(5)}
      {renderSquare(6)}
      {renderSquare(7)}
    </div>
    <div className="board-row">
      {renderSquare(8)}
      {renderSquare(9)}
      {renderSquare(10)}
      {renderSquare(11)}
    </div>
    <div className="board-row">
      {renderSquare(12)}
      {renderSquare(13)}
      {renderSquare(14)}
      {renderSquare(15)}
    </div>
  </div>
  )
}

export default Board