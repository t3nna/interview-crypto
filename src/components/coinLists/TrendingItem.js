import React from 'react';
import {Link} from "react-router-dom";

function TrendingItem({coin}) {

    return (
        <li>
            <Link to={`/coins/${coin.id}`}>


                <div className="coin-info">
                    <div className="coin-info__name">
                        <img src={coin.small} alt={coin.name}/>
                        <h3>{coin.name}</h3>

                    </div>
                    <p>{coin.price_btc}</p>
                </div>

            </Link>
        </li>
    );
}

export default TrendingItem;