import React from 'react'


const CoinRow = (props) => {
    return (
        <>
            <div className="coin-row">
                <p>{props.data.market_cap_rank}</p>
                <div className='coin-symbol'>
                    <img src={props.data.image} alt={props.data.name} />
                    <p>{props.data.symbol.toUpperCase()}</p>
                </div>
                <p>${props.data.current_price.toLocaleString()}</p>
                <p>{props.data.price_change_24h.toFixed(2)}%</p>
                <p className='hide-mobile'>${props.data.market_cap.toLocaleString()}</p>
                <p className='hide-mobile'>${props.data.total_volume.toLocaleString()}</p>
            </div>
        </>
    )
}

export default CoinRow
