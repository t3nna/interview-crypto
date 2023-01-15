import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import userContext, {UserContext} from "../context/UserContext";
import CoinsItem from "../coinLists/CoinsItem";
import WalletItem from "./WalletItem";

function Wallet(props) {
    const {wallet} = useContext(UserContext)
    console.log(wallet)


    return (
        <main className={'flow'}>

            <section>
                <div className="container">
                    <ul className="wallet-list">
                        {
                            wallet ? wallet.map(coin =>{
                                return (
                                    <WalletItem coin={coin} key={coin.id}/>
                                )
                            }) : (
                                <li>
                                    <h1>There is Nothing in your wallet</h1>
                                </li>
                            )
                        }
                    </ul>

                </div>
            </section>
        </main>

    );
}

export default Wallet;