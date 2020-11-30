import React, {Component, useEffect, useState} from 'react';
import {Line} from 'react-chartjs-2';
import MonthDays, {weekDays, YearDays} from './ChartData';

var WeekData = [2, 4, 6, 8, 3, 4, 4]
var MonthData = [1, 3, 4, 4, 3, 5, 8, 1, 3, 4, 4, 3, 5, 8, 1, 3, 4, 4, 3, 5, 8, 1, 3, 4, 4, 3, 5, 8, 2, 2]
var DefaultData = [2, 4, 6, 8, 3, 4, 4] //make sure we have the same data for week and Default
var weekLabels = weekDays;
var monthLabels = MonthDays;
var defaultLabels = weekDays;


var RandomOrg = require('random-org');

const Chart = () =>{
const [chartData, setChartData] = useState({});
    let default_color  = 'rgba(1, 201, 225, 1)';

    var random = new RandomOrg({ apiKey: '15aa22b5-8b99-444f-9287-4e704cfe66b0' });
    let maybe = random.generateIntegers({ min: 0, max: 255, n: 3 })
        .then(function(result) {
            console.log(result.random.data); // [55, 3]
        });

    let random_color = random.generateIntegers({ min: 0, max: 255, n: 3 });
    console.log(random);
    console.log(maybe);
    console.log(random_color);

    const chart = () =>{
        setChartData({
            labels:defaultLabels, 
            datasets: [{
                    data: DefaultData,
                    backgroundColor:['rgba(54, 162, 235, 0.0)'],
                }
            ]
        })
    }
    useEffect(()=>{
        chart()
    }, [])
    function updateChartMonth(chart) {
        setChartData({
            labels:monthLabels, 
            datasets: [{
                    data: MonthData,
                    backgroundColor:['rgba(54, 162, 235, 0.0)'],
                }
            ]
        })
        
    }
    function updateChart(chart) {
        setChartData({
            labels:weekLabels, 
            datasets: [{
                    data: WeekData,
                    backgroundColor:['rgba(54, 162, 235, 0.0)'],
                }
            ]
        })
    }
    
return(
    <div>
    <div>
        <Line data = {chartData} options ={{title:{text:'Sales', fontFamily: 'Calmer', fontSize: 25, display: true}}}></Line>
        <button onClick = {updateChart}>Week</button>
        <button onClick = {updateChartMonth}>Month</button>
        </div>
    </div>
)
    
}


export default Chart;
