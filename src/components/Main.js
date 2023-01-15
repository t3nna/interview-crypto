import React from 'react';
import Wallet from "./user/Wallet";
import Trending from "./coinLists/Trending";
import Coins from "./coinLists/Coins";

function Main(props) {
    return (
        <main className={'flow'}>
            <section className={'trending-section'}>
                <div className="container">
                    <Trending/>
                </div>
            </section>
            <section className={'market-section'}>
                <div className="container">
                    <Coins/>
                </div>
            </section>
        </main>
    );
}

export default Main;