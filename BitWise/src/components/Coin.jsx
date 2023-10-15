import React from 'react'
import CoinRow from './CoinRow'
import { Link } from 'react-router-dom'
import CoinData from '../routes/CoinData'

const Coin = (props) => {
    return (
        <>
            <div className="container">
                <div className="heading">
                    <p>Rank</p>
                    <p className='coin-name'>Coin</p>
                    <p>Price</p>
                    <p>24hr</p>
                    <p className='hide-mobile'>Market Cap</p>
                    <p className='hide-mobile'>Volume</p>
                </div>
                {
                    props.data.map((coin)=>{
                        return(
                            <Link to={`/coin/${coin.id}`} element={<CoinData/>} key={coin.id}>
                                <CoinRow data={coin} /> 
                            </Link>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Coin
