import React, { useState } from 'react';

const style = {
  background: 'white',
  border: '2px solid black',
  fontSize: '24px',
  fontWeight: '100',
  cursor: 'pointer',
  outline: 'none',
}
const Square = ({value, onClick}) => {
    return (
        <button style = {style} onClick = {onClick}>
          {value}
        </button>
      );
}

export default Square;
