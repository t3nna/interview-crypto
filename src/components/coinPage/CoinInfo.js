import React from 'react';
import {useCoinInfo} from "../../hooks/useCoinInfo";
import {useParams} from "react-router-dom";
import {currencyFormat} from "../../utils/currencyFormat";

function CoinInfo(props) {
    const {id} = useParams()

    const {isLoading, data, isError, error} =
        useCoinInfo(id, 6000)

    if (isLoading) {
        return <h2>Loading...</h2>
    }

    if (isError) {
        return <h2>{error.message}</h2>
    }
    const info = data.data
    console.log(info)
    return (
        <div className={'flow'}>
            <div className={'coin-page__header'}>

            <h1 className={'fs-secondary-heading'}>{info.name}</h1>
            <img src={info.image.small} alt={info.id}/>
                <div className={info.market_data.price_change_percentage_24h > 0 ? 'price-up' : 'price-down'}>{currencyFormat(info.market_data.current_price.usd)}</div>
            </div>

            <p dangerouslySetInnerHTML={{__html: info.description.en}}></p>
        </div>
    );
}

export default CoinInfo;