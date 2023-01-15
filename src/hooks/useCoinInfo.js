import {useQuery} from "react-query";
import axios from "axios";

const fetchInfo = (coinId) =>{
    return axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}?tickers=false&market_data=false`)
}

export const useCoinInfo = (id) =>{
    return useQuery(['coin', id], () =>fetchInfo(id), {})
}