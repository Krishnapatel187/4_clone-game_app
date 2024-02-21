import React, { useState } from 'react'
import Footer from './Footer';
import Board from './Board';
import { calculateWinner } from './helper';

const GameBoard = () => {

    const [board, setBoard] = useState(Array(16).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const [suggestedMove, setSuggestedMove] = useState(null);


    

    const handleClick = (i) => {
        const squares = [...board];
        if (calculateWinner(squares) || squares[i]) return;
        squares[i] = xIsNext ? 'X' : 'O';
        setBoard(squares);
        setXIsNext(!xIsNext);
        // Reset suggested move when a square is clicked
        setSuggestedMove(null);
    };

    const renderSquare = (i) => {
        const value = board[i];
        return (
            <button className={`square ${suggestedMove === i ? 'suggested' : ''}`}
                onClick={() => handleClick(i)}
            >
                {value}
            </button>
        );
    };

    const winner = calculateWinner(board);
    let status;
    if (winner) {
        status = 'Winner: ' + winner;
    } else {
        status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }

    const handleNewGame = () => {
        setBoard(Array(16).fill(null));
        setXIsNext(true);
        setSuggestedMove(null);
    };

    const handleSuggestMove = () => {
        const squares = [...board];

        // If the game is already won, do not suggest any move
        if (calculateWinner(squares)) {
            return;
        }

        // Iterate through each empty square
        for (let i = 0; i < squares.length; i++) {
            if (!squares[i]) {
                // Temporarily place the current player's mark in the empty square
                squares[i] = xIsNext ? 'X' : 'O';

                // Check if this move results in a win for the current player
                if (calculateWinner(squares)) {
                    // If a winning move is found, update suggested move and exit loop
                    setSuggestedMove(i);
                    return;
                }

                // Reset the square to empty for further analysis
                squares[i] = null;
            }
        }

        // If no winning move is found, suggest a random move
        const emptySquares = squares.reduce((acc, val, index) => {
            if (!val) acc.push(index);
            return acc;
        }, []);
        const randomIndex = Math.floor(Math.random() * emptySquares.length);
        const randomMove = emptySquares[randomIndex];
        setSuggestedMove(randomMove);
    };
    return (
        <div className="game">
            <div className="game-board">
                <div className="status">{status}</div>
                <Board renderSquare={renderSquare} />
            </div>
            <Footer handleNewGame={handleNewGame} handleSuggestMove={handleSuggestMove} />
        </div>
    )
}

export default GameBoard