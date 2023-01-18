import React, {useContext} from 'react';
import  {UserContext} from "../context/UserContext";
import WalletItem from "./WalletItem";

function Wallet(props) {
    const {wallet} = useContext(UserContext)
    console.log(wallet)
    let condition1, condition2
    condition1 = Boolean(wallet)
    if (condition1) {
    condition2 = wallet.length > 0

    }


    return (
        <main className={'flow'}>

            <section>
                <div className="container">
                    <ul className="wallet-list">
                        {
                            (condition1 && condition2) ? wallet.map(coin =>{
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