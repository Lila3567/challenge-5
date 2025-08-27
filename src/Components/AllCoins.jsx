import { useState, useEffect } from 'react';
import Coin from './Coin';
import './allcoins.css';
import Coininfo from './Coininfo';
import './coininfo.css';
import Pagination from './Pagination';

function AllCoins() {
    const [coins, setCoins] = useState([]);
    const [url, setUrl] = useState("https://api.coinranking.com/v2/coins?limit=5");
    const [loading, setLoading] = useState(true);
    const [coinInfo, setCoinInfo] = useState(null);
    const [currentOffset, setCurrentOffset] = useState(0);
    const [itemsPerPage] = useState(5); 

    const fetchdata = async () => {
        try {
            console.log("Fetching data with URL:", url);
            const response = await fetch(url, {
                method: "GET",
              
            });
            const data = await response.json();
            console.log("API Response:", data);
            if (data.data && data.data.coins) {
                setCoins(data.data.coins);
            } else {
                console.error("No coins data found:", data);
            }
        } catch (error) {
            console.error("Fetch error:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchdata();
    }, [url]);

    const handleCoinClick = (coin) => {
        
        setCoinInfo(coin);
    };

    const closeInfo = () => {
        setCoinInfo(null);
    };

    
    const changePage = (offsetChange) => {
        const newOffset = currentOffset + offsetChange;
        if (newOffset >= 0) { 
            
            setCurrentOffset(newOffset);
            setUrl(`https://api.coinranking.com/v2/coins?limit=5&offset=${newOffset}`);
        }
    };

    return (
        <>
            <div className='grid-layout'>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    coins.length > 0 ? (
                        coins.map((coin, index) => (
                            <Coin key={index} coin={coin} onClick={() => handleCoinClick(coin)} />
                        ))
                    ) : (
                        <p>No coins available</p>
                    )
                )}
            </div>
            <div className="info">
                {coinInfo && <Coininfo coin={coinInfo} closeInfo={closeInfo} />}
            </div>
            <div className="pagination">
                <Pagination text="Previous" changeUrl={() => changePage(-itemsPerPage)} />
                <Pagination text="Next" changeUrl={() => changePage(itemsPerPage)} />
            </div>
        </>
    );
}

export default AllCoins;