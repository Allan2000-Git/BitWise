import { useEffect, useState } from 'react'
import './App.css'
import Coin from './components/Coin';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import CoinData from './routes/CoinData';

function App() {
  const [coinData, setCoinData] = useState([]);

  const API_URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en';
  const fetchData = async () => {
    const response = await fetch(API_URL)
    const data = await response.json();

    setCoinData(data);
  }

  useEffect(()=>{
    fetchData();
  },[])

  // console.log(coinData);

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Coin data={coinData} />} />
        <Route path='/coin/:coinId' element={<CoinData />} />
      </Routes>
    </>
  )
}

export default App
