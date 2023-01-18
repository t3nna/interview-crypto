import React from 'react';
import Trending from "./coinLists/Trending";
import Coins from "./coinLists/Coins";

function Main(props) {
    return (
        <main className={'flow'}>
            {/*Fix: Add additional request by id */}
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