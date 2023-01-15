import {addCoin, removeCoin} from "./reducerUtils";

const userReducer = (state, action) =>{
    switch (action.type){
        case 'addCoin':
            return addCoin(state, action.payload)
        case 'removeCoin':
            return removeCoin(state, action.payload)
        case 'getData':
            return action.payload
        default:
            return state
    }
}

export default userReducer