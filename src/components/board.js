import React, { useState } from 'react';
import Square from './square';

const style = {
  width: '240px',
  height: '240px',
  margin: '0 auto',
  display: 'grid',
  gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)',
  paddingTop: '30px',
  paddingBottom: '30px'
}

const Board = ({squares, onClick}) => {
    const [player, setPlayer] = useState('X')
    const status = 'Next player: ' + player;
    return (
      <div style={style}>
        {squares.map((square, index) => 
          <Square key={index} value={square} onClick = {() => onClick(index)} />
        )}
      </div>
    );
}

export default Board;