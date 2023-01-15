import React from 'react';
import {useTrendingList} from "../../hooks/useTrendingList";
import {useCoinInfo} from "../../hooks/useCoinInfo";
import {useParams} from "react-router-dom";

function CoinInfo(props) {
    const {id} = useParams()

    const {isLoading, data, isError, error, isFetching, refetch} =
        useCoinInfo(id)

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
            </div>

            <p dangerouslySetInnerHTML={{__html: info.description.en}}></p>
        </div>
    );
}

export default CoinInfo;