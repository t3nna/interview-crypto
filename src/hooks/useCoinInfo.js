import {useQuery} from "react-query";
import axios from "axios";

const fetchInfo = (coinId) =>{
    return axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}?tickers=false&market_data=true`)
}

export const useCoinInfo = (id, interval) =>{
    return useQuery(['coin', id], () =>fetchInfo(id),
        // {refetchInterval: interval}
    )
}