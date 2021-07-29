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
const buttonStyle = {
    background : 'orange',
    border: 'none',
    color: 'white',
    fontSize: '20px',
    float: 'right'
}
const Header = () => {

    return <div style = {style}>
            Hello there!
        </div>
}

export default Header;