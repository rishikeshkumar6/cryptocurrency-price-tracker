import React,{useEffect,useState} from 'react'
import styles from './cryptocurrency.module.css'
import Coin from '../../../components/Atoms/Coin/coin'
import axios from 'axios'
const Crypto = () => {
    const [CryptoData,setCryptoData]=useState([])
    const [search,setSearch]=useState("")
    useEffect(()=>{
       async function getCrypto(){
          const response=await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en")
          console.log(response)
          setCryptoData(response.data)
       }
       getCrypto()
    },[])

    function handleChange(e){
        setSearch(e.target.value)
    }

   const filterCoin=CryptoData.filter((coin)=>coin.name.toLowerCase().includes(search.toLowerCase()))
  return (
    <div className={styles.coinapp}>
        <div className={styles.coinsearch}>
            <h1>Search a Currency</h1>
            <form>
                <input type="text" className={styles.coininput} 
                placeholder="search currency" onChange={handleChange}/>
            </form>
        </div>
       {filterCoin.map((item)=>{
        return (
            <Coin key={item.id} name={item.name} 
            image={item.image} symbol={item.symbol}
            volume={item.market_cap} price={item.current_price}
            pricechange={item.price_change_percentage_24h}
            marketcap={item.market_cap}/>
        )
       })}
    </div>
  )
}

export default Crypto
