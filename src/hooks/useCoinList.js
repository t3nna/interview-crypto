import axios from "axios";
import {useQuery} from "react-query";


const fetchCoinList = () =>{
    return axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
}

export const useCoinList = (onSuccess, onError) =>{
    return useQuery('coins', fetchCoinList, {
        onSuccess: onSuccess,
        // refetchInterval: 2000
    })
 }