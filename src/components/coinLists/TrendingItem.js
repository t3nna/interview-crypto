import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {UserContext} from "../context/UserContext";

function TrendingItem({coin}) {
    const {wallet, addCoin} = useContext(UserContext)
    let isDisabled
    if(wallet) {
        isDisabled = wallet.some(item => item.id === coin.id)
    }

    function handleClick() {
        addCoin(coin)
    }

    return (
        <li>


            <div className="coin-info">
                <div className="coin-info__name">
                    <Link to={`/coins/${coin.id}`}>
                        <img src={coin.small} alt={coin.name}/>
                        <h3>{coin.name}</h3>

                    </Link>
                </div>
                <div className="coin-info__save">
                    <button className="btn" onClick={handleClick} disabled={isDisabled}>
                        {isDisabled ? 'Added' : 'Add'}
                    </button>
                </div>
            </div>

        </li>
    );
}

export default TrendingItem;