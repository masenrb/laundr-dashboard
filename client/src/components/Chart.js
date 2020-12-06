import React, {Component, useEffect, useState} from 'react';
import {Line} from 'react-chartjs-2';

var WeekData = [2, 4, 6, 8, 3, 4, 4]
var MonthData = [1, 3, 4, 4, 3, 5, 8]
var DefaultData = [1, 3, 4, 4, 3, 5, 8] //make sure we have the same data for Month and Default
var weekLabels = ['1/1', '1/2', '1/3', '1/4', '1/5', '1/6', '1/7']
var monthLabels = ['1/1', '2/1', '3/1', '4/1', '5/1', '6/1', '7/1']
var defaultLabels = ['1/1', '2/1', '3/1', '4/1', '5/1', '6/1', '7/1']

var Random = require('yy-random');
var array = [5, 180 + Random.get(40), 205 + Random.get(50)];

var btn = document.createElement("button");
btn.className = "defaultButton";
btn.backgroundColor = "#AA0212"

const Chart = () =>{
const [chartData, setChartData] = useState({});
    let default_color  = 'rgba(' + array[0] + ', ' + array[1] + ', ' + array[2] + ', 1)';
    console.log(default_color);

    const chart = () =>{
        setChartData({
            labels:defaultLabels, 
            datasets: [{
                    data: DefaultData,
                    backgroundColor:[default_color],
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
                    label: 'Sales',
                    data: MonthData,
                    backgroundColor:[default_color],
                }
            ]
        })
        
    }
    function updateChart(chart) {
        setChartData({
            labels:weekLabels, 
            datasets: [{
                    label: 'Sales',
                    data: WeekData,
                    backgroundColor:[default_color],
                }
            ]
        })
    }
    
return(
    <div>
    <div>
        <Line data = {chartData} options ={{title:{text:'Sales', fontFamily: 'Calmer', fontSize: 25, display: true}}}></Line>
        <button class = "defaultButton" onClick = {updateChart}>Week</button>
        <button class = "defaultButton" onClick = {updateChartMonth}>Month</button>
        </div>
    </div>
)
    
}


export default Chart;
