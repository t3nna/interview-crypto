import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {UserContext} from "../context/UserContext";

function TrendingItem({coin}) {
    const {wallet, addCoin} = useContext(UserContext)

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
                    <button className="btn" onClick={handleClick}>Add</button>
                </div>
            </div>

        </li>
    );
}

export default TrendingItem;