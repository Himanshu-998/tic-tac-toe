import React from 'react';

const style = {
    textAlign: 'center',
    margin: '0 auto',
    paddingTop: "25px",
    paddingBottom: '25px',
    color: 'white',
    background: 'orange',
    fontWeight: '500',
    fontSize: '30px',
    maxWidth: '500px'
}
const Footer = ({winner, next}) => {
    if(winner) {
        return <div style = {style}> 
        {winner} won the Game!
    </div>
    }
    return <div style = {style}> 
        Next is {next}
    </div>
}

export default Footer;