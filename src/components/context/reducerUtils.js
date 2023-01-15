function removeCoin(state, item){
    let res
    res = state.filter(coin => coin.id!==item)
    return res
}

/*let res = addCoin([ {
    "id": "bitcoin",
    "symbol": "btc",
    "name": "Bitcoin",
    "image": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
    "current_price": 20700,
    "market_cap": 398467555812,
    "market_cap_rank": 1,
    "fully_diluted_valuation": 434400210355,
    "total_volume": 27655946323,
    "high_24h": 21038,
    "low_24h": 20586,
    "price_change_24h": -184.31158524511557,
    "price_change_percentage_24h": -0.88255,
    "market_cap_change_24h": -4357958742.296326,
    "market_cap_change_percentage_24h": -1.08185,
    "circulating_supply": 19262925,
    "total_supply": 21000000,
    "max_supply": 21000000,
    "ath": 69045,
    "ath_change_percentage": -70.04013,
    "ath_date": "2021-11-10T14:24:11.849Z",
    "atl": 67.81,
    "atl_change_percentage": 30405.8684,
    "atl_date": "2013-07-06T00:00:00.000Z",
    "roi": null,
    "last_updated": "2023-01-15T13:06:51.280Z"
},], {
    "id": "bitcoin",
    "symbol": "btc",
    "name": "Bitcoin",
    "image": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
    "current_price": 20700,
    "market_cap": 398467555812,
    "market_cap_rank": 1,
    "fully_diluted_valuation": 434400210355,
    "total_volume": 27655946323,
    "high_24h": 21038,
    "low_24h": 20586,
    "price_change_24h": -184.31158524511557,
    "price_change_percentage_24h": -0.88255,
    "market_cap_change_24h": -4357958742.296326,
    "market_cap_change_percentage_24h": -1.08185,
    "circulating_supply": 19262925,
    "total_supply": 21000000,
    "max_supply": 21000000,
    "ath": 69045,
    "ath_change_percentage": -70.04013,
    "ath_date": "2021-11-10T14:24:11.849Z",
    "atl": 67.81,
    "atl_change_percentage": 30405.8684,
    "atl_date": "2013-07-06T00:00:00.000Z",
    "roi": null,
    "last_updated": "2023-01-15T13:06:51.280Z"
})

console.log(res)*/

function addCoin (state,item){
    let inArray = state.find(coin => coin.id ===item.id)
    if(!inArray && state.length<5){
        console.log(state.length)
        return [...state, item]
    }
    return state
}

export {addCoin, removeCoin}

