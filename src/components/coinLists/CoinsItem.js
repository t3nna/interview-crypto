import React, {useContext} from 'react';
import {currencyFormat} from "../../utils/currencyFormat";
import {Link} from "react-router-dom";
import {UserContext} from "../context/UserContext";

function CoinsItem({coin}) {
    const {wallet, addCoin} = useContext(UserContext)
    let isDisabled
    if(wallet) {
        isDisabled = wallet.some(item => item.id === coin.id)
    }
    // const inWallet = wallet.find(c => c.id === coin.id)


    function handleClick() {
        addCoin(coin)
    }

    return (
        <li>


            <div className="coin-info">
                <div className="coin-info__name">
                    <Link to={`/coins/${coin.id}`}>
                        <img src={coin.image} alt={coin.name}/>
                        <h3 className={'fs-500'}>{coin.name}</h3>

                    </Link>
                </div>
                <span>{currencyFormat(coin.current_price)}</span>
                <span className={coin.price_change_percentage_24h > 0 ? 'price-up' : 'price-down'}>
                    {coin.price_change_percentage_24h}
                </span>
                <div className="coin-info__save">
                    <button className="btn" onClick={handleClick} disabled={isDisabled}>
                        {isDisabled ? 'Added' : 'Add'}
                    </button>
                </div>

            </div>

        </li>
    )
        ;
}

export default CoinsItem;