import React, { useEffect, useState } from 'react';
import calculateWinner from '../helper';
import Board from './board';
import Header from './header';
import Footer from './footer';

const Game = () => {

    const [gameState, setGameState] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const winner = calculateWinner(gameState);

    const handleClick = (i) => {
      const boardCopy = [...gameState];
      
      console.log(winner)
      // If user click an occupies square or if game is won, return
      if(winner) {
        alert("Game is over " + winner + " won the game, press play again.");
        return;
      }
      if(boardCopy[i]) {
        alert("Invalid move! already marked.");
        return;
      }
      // Put and X or O in the clicked square
      boardCopy[i] = xIsNext ? 'X' : 'O';
      setGameState(boardCopy);
      setXIsNext(!xIsNext);
    }
    // comment
    const ResetButton = (winner) => {
      if(winner) {
        return <button style={{marginLeft: '48%', marginTop: '20px'}}
         onClick = {() => {
           setGameState(Array(9).fill(null))
          winner = null;
        }}> Play Again! </button>
      }
      return null;
    } 
    useEffect(() => {
      console.log(gameState);
      if(winner) return;
      for(let i=0; i<gameState.length; ++i) {
        if(gameState[i] == null) return;
      }
      alert("Game Over!");
      setGameState(Array(9).fill(null));
    },[gameState]);
    
    return (
        <>
          <Header/>
          <Board squares = {gameState} onClick = {handleClick}/>
          <Footer winner = {winner} next = {xIsNext ? 'X': 'O'}/>
          <ResetButton></ResetButton>
        </>
      );
}

export default Game;