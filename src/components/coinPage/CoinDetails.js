import React from 'react';
import CoinChart from "./CoinChart";
import CoinInfo from "./CoinInfo";

function CoinDetails(props) {
    return (
        <main className={'flow'}>
            <section>
                <div className="container">
                    <CoinChart/>

                </div>
            </section>
            <section>
                <div className="container">
                    <CoinInfo/>
                </div>
            </section>
        </main>
    );
}

export default CoinDetails;