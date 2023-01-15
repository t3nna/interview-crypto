import React, {useContext} from 'react';
import {UserContext} from "../context/UserContext";
import {Link} from "react-router-dom";
import {currencyFormat} from "../../utils/currencyFormat";

function WalletItem({coin}) {

    const {wallet, addCoin, removeCoin} = useContext(UserContext)

    function handleAdd() {
        addCoin(coin)
    }
    function handleRemove(){
        removeCoin(coin.id)
    }

    return (
        <li>


            <div className="coin-info">
                <div className="coin-info__name">
                    <Link to={`/coins/${coin.id}`}>
                        <img src={coin.image} alt={coin.name}/>
                        <h3>{coin.name}</h3>

                    </Link>
                </div>
                {/*<span>{currencyFormat(coin.current_price)}</span>*/}
                <span>{coin.current_price}</span>
                <span className={coin.price_change_percentage_24h > 0 ? 'price-up' : 'price-down'}>
                    {coin.price_change_percentage_24h}
                </span>
                <div className="coin-info__save">
                    <button className="btn" onClick={handleRemove}>Remove</button>
                </div>

            </div>

        </li>

    );
}

export default WalletItem;