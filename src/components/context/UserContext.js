import React, {useEffect, useReducer, useState} from 'react';
import userReducer from "./userReducer";


const UserContext = React.createContext()

const initialData = JSON.parse(localStorage.getItem('wallet'))
console.log(initialData)

function UserProvider({children}) {
    const [wallet, dispatch] = useReducer(userReducer, initialData);
    // const [wallet, setWallet] = useState([123343]);

    function addCoin (id){
        dispatch({type: 'addCoin', payload: id})
    }
    function removeCoin(id){
        dispatch({type: 'removeCoin', payload: id})
    }


    useEffect(() => {
        localStorage.setItem("wallet", JSON.stringify(wallet))
    }, [wallet]);


    return (
        <UserContext.Provider value={
            {
                wallet: wallet,
                addCoin,
                removeCoin
            }
        }>
            {children}
        </UserContext.Provider>
    );
}

export {UserContext}
export default UserProvider;