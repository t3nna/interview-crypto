import React from 'react';
import {useCoinList} from "../../hooks/useCoinList";
import {useTrendingList} from "../../hooks/useTrendingList";
import TrendingItem from "./TrendingItem";

function Trending(props) {
    const onSuccess = (data) =>{
        console.log(data.data)
    }
    const {isLoading, data, isError, error, isFetching, refetch} =
        useTrendingList(onSuccess)

    if (isLoading ) {
        return <h2>Loading...</h2>
    }

    if (isError){
        return <h2>{error.message}</h2>
    }
    return (
        <>
        <h2 className={'fs-secondary-heading '}>
            Trending Coins
        </h2>
        <ul className={'trending-cons-list'}>
            {
                data?.data.coins.map(coin =>{
                    return <TrendingItem key={coin.item.id} coin={coin.item}/>
                })
            }
        </ul>
        </>
    );
}

export default Trending;