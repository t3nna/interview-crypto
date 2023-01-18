import React from 'react';
import {useParams} from "react-router-dom";
import {useHistoryData} from "../../hooks/useHistoryData";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import moment from "moment";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

function CoinChart(props) {
    const {id} = useParams()

    const {isLoading, data, isError, error} =
        useHistoryData(id)

    if (isLoading ) {
        return <h2>Loading...</h2>
    }

    if (isError){
        return <h2>{error.message}</h2>
    }
    const dataForChart = data.data.prices.map(item => ({x: item[0], y: item[1].toFixed(2)}))

    const options = {
        responsive: true
    }
    const chart = {
        labels: dataForChart.map(item => moment(item.x).format('MMM DD HH')),
        datasets:[
            {
                fill: true,
                data: dataForChart.map(item => item.y),
                label: '24h',
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',

            }
        ]
    }
    return (
        <div>
            <Line options={options} data={chart }/>
        </div>
    );
}

export default CoinChart;