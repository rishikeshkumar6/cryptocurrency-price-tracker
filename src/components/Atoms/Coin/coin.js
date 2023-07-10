import React from 'react'
import styles from './coin.module.css'
const Coin = ({name,image,symbol,price,volume,pricechange,marketcap}) => {
  return (
    <div className={styles.coincontainer}>
      <div className={styles.coinrow}>
        <div className={styles.coin}>
            <img src={image} alt="error"/>
            <h1>{name}</h1>
            <p>{symbol}</p>
        </div>
        <div className={styles.coindata}>
            <p>{price}</p>
            <p>{volume.toLocaleString()}</p>
            {pricechange<0 ? <p className={styles.red}>{pricechange.toFixed(2)}%</p>:
            <p className={styles.green}>{pricechange.toFixed(2)}%</p>
               
            }
            <p className={styles.coinmarketcap}>Mrt Cap:${marketcap.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}

export default Coin
