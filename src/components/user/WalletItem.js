import React, {useContext} from 'react';
import {UserContext} from "../context/UserContext";
import {Link} from "react-router-dom";
import {currencyFormat} from "../../utils/currencyFormat";
import {useCoinInfo} from "../../hooks/useCoinInfo";

function WalletItem({coin}) {

    const { removeCoin} = useContext(UserContext)

    const {data, isError, isLoading} = useCoinInfo(coin.id, 6000)

    if (isLoading) {
        return <h2>Loading...</h2>
    }

    if (isError) {
        return <h2>Something went wrong</h2>
    }

    const coinInfo = data.data



    function handleRemove(){
        removeCoin(coin.id)
    }

    return (
        <li>


            <div className="coin-info">
                <div className="coin-info__name">
                    <Link to={`/coins/${coin.id}`}>
                        <img src={coinInfo.image.small} alt={coinInfo.name}/>
                        <h3>{coinInfo.name}</h3>

                    </Link>
                </div>
                {/*<span>{currencyFormat(coin.current_price)}</span>*/}
                <span>{currencyFormat(coinInfo.market_data.current_price.usd)}</span>
                <span className={coinInfo.market_data.price_change_percentage_24h > 0 ? 'price-up' : 'price-down'}>
                    {coinInfo.market_data.price_change_percentage_24h}
                </span>
                <div className="coin-info__save">
                    <button className="btn" onClick={handleRemove}>Remove</button>
                </div>

            </div>

        </li>

    );
}

export default WalletItem;