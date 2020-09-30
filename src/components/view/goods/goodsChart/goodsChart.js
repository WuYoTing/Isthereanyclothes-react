import React, {useEffect, useState} from "react";
import {Line} from 'react-chartjs-2';

const GoodsChart = (props) => {
    const [dataChart, setDataChart] = useState({});

    useEffect(() => {
        let dataSetsData = [];
        let labelsData = [];
        for (let priceLogs of props.clothesPriceLogs) {
            dataSetsData.push(priceLogs.price);
            let tempPriceRecordDate = new Date(priceLogs.priceRecordDate);
            labelsData.push(tempPriceRecordDate.getUTCDate());
        }
        setDataChart({
            labels: labelsData,
            datasets: [{
                borderColor: '#4885ed',
                borderWidth: 0,
                fill: false,
                lineTension: 0.1,
                spanGaps: true,
                data: dataSetsData
            }]
        });
    }, [props.clothesPriceLogs]);

    return (
        <div>
            <Line data={dataChart}/>
        </div>
    )
}

export default GoodsChart;