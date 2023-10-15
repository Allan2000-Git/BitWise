import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import DOMPurify from 'dompurify'


const CoinData = () => {

    const [coinData, setCoinData] = useState({});

    const {coinId} = useParams();

    const COIN_URL = `https://api.coingecko.com/api/v3/coins/${coinId}`;
    const fetchData = async () => {
        const response = await fetch(COIN_URL)
        const data = await response.json();

        setCoinData(data);
    }

    useEffect(()=>{
        fetchData();
    },[])

    // console.log(coinData);

    return (
        <>
            <div className="container">
                <div className="coin-content">
                    <h1 className="coin-id">{coinData.id}</h1>
                    <div className="coin-data">
                        <span>Rank #{coinData.market_cap_rank}</span>
                        <div className="coin-section">
                            <div className="coin-inner">
                                {coinData.image ? <img src={coinData.image.small} alt={`${coinData.name} image`} /> : null}
                                <h2>{coinData.name}</h2>
                                {coinData.symbol ? <p>({coinData.symbol.toUpperCase()}/USD)</p> : null}
                            </div>
                            {coinData.market_data?.current_price ? <h3>${coinData.market_data.current_price.usd.toLocaleString()}</h3> : null}
                        </div>
                    </div>
                    <div className="coin-data">
                        <div className="table-content">
                            <table>
                                <tr>
                                    <th>1h</th>
                                    <th>24h</th>
                                    <th>7d</th>
                                    <th>14d</th>
                                    <th>30d</th>
                                    <th>1y</th>
                                </tr>
                                <tbody>
                                    <tr>
                                    <td>{coinData.market_data?.price_change_percentage_1h_in_currency ? <p>{coinData.market_data.price_change_percentage_1h_in_currency.usd.toFixed(2)}%</p> : null}</td>
                                    <td>{coinData.market_data?.price_change_percentage_24h_in_currency ? <p>{coinData.market_data.price_change_percentage_24h_in_currency.usd.toFixed(2)}%</p> : null}</td>
                                    <td>{coinData.market_data?.price_change_percentage_7d_in_currency ? <p>{coinData.market_data.price_change_percentage_7d_in_currency.usd.toFixed(2)}%</p> : null}</td>
                                    <td>{coinData.market_data?.price_change_percentage_14d_in_currency ? <p>{coinData.market_data.price_change_percentage_14d_in_currency.usd.toFixed(2)}%</p> : null}</td>
                                    <td>{coinData.market_data?.price_change_percentage_30d_in_currency ? <p>{coinData.market_data.price_change_percentage_30d_in_currency.usd.toFixed(2)}%</p> : null}</td>
                                    <td>{coinData.market_data?.price_change_percentage_1y_in_currency ? <p>{coinData.market_data.price_change_percentage_1y_in_currency.usd.toFixed(2)}%</p> : null}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="coin-data">
                        <div className="stats">
                            <div className="left">
                                <div className="row">
                                    <h4>24 Hour Low</h4>
                                    {coinData.market_data?.low_24h ? <p>${coinData.market_data.low_24h.usd.toLocaleString()}</p> : null}
                                </div>
                                <div className="row">
                                    <h4>24 Hour High</h4>
                                    {coinData.market_data?.high_24h ? <p>${coinData.market_data.high_24h.usd.toLocaleString()}</p> : null}                            
                                    </div>
                            </div>
                            <div className="right">
                                <div className="row">
                                    <h4>Market Cap</h4>
                                    {coinData.market_data?.market_cap ? <p>${coinData.market_data.market_cap.usd.toLocaleString()}</p> : null}
                                </div>
                                <div className="row">
                                    <h4>Circulating Supply</h4>
                                    {coinData.market_data ? <p>{coinData.market_data.circulating_supply}</p> : null}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="coin-data">
                        <div className="about-coin">
                            <h3>About {coinData.name}:</h3>
                            <p dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(coinData.description ? coinData.description.en : ''),
                            }}>
                            </p>
                        </div>    
                    </div>
                </div>
            </div>
        </>
    )
}

export default CoinData
