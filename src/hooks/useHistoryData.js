import {useQuery} from "react-query";
import axios from "axios";

const fetchInfo = (coinId) =>{
    return axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=1`)
}

export const useHistoryData = (id) =>{
    return useQuery(['coin','chart', id], () =>fetchInfo(id), {})
}