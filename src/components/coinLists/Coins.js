import React from 'react';
import {useCoinList} from "../../hooks/useCoinList";
import CoinsItem from "./CoinsItem";

function Coins(props) {
    const onSuccess = (data) =>{
        console.log(data.data)
    }
    const {isLoading, data, isError, error} =
        useCoinList(onSuccess)

    if (isLoading ) {
        return <h2>Loading...</h2>
    }

    if (isError){
        return <h2>{error.message}</h2>
    }
    return (
        <>
            <h2 className={'fs-secondary-heading'}>Market</h2>
        <ul>
            {
                data?.data.map(coin => <CoinsItem key={coin.id} coin={coin}/>)
            }
        </ul>
        </>
    );
}

export default Coins;