import React from 'react';
import './coin.css';

function Coin({ coin, onClick }) {
    console.log("Rendering Coin:", coin);
    return (
        <div className='coin' onClick={() => onClick(coin)}>
            <img className='img' src={coin["iconUrl"]} alt={coin["name"]} />
            <h3> Name : {coin["name"]}</h3>
            <p>Symbol : {coin["symbol"]}</p>
            <p>Color : {coin["color"]}</p>
            <h4>Price : {coin["price"]}</h4>
        </div>
    );
}

export default Coin;