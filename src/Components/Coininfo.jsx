import React from 'react';

function Coininfo({ coin, closeInfo }) {
    return (
        <div className="coin-info-container">
            <div className="coin-info-content">
              
                {coin ? (
                    <>
                        <img src={coin.iconUrl} alt={coin.name} className="coin-icon" />
                        <h2 className="coin-name">{coin.name} ({coin.symbol})</h2>
                        <p className="coin-price">Price: ${parseFloat(coin.price).toFixed(2) }</p>
                        <p className="coin-color">Color: {coin.color}</p>
                    </>
                ) : (
                    <p>Loading coin details...</p>
                )}
            </div>
  <button
                    className="close-button"
                    onClick={closeInfo}
                >
                    Close
                </button>
        </div>
    );
}

export default Coininfo;