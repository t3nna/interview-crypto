import axios from "axios";
import {useQuery} from "react-query";


const fetchCoinList = () =>{
    return axios.get('https://api.coingecko.com/api/v3/search/trending')
}

export const useTrendingList = (onSuccess, onError) =>{
    return useQuery('trending', fetchCoinList, {
        onSuccess: onSuccess
    })
}