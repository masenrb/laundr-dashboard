import React, {Component, useEffect, useState} from 'react';
import {Line} from 'react-chartjs-2';

var WeekData = [2, 4, 6, 8, 3, 4, 4]
var MonthData = [1, 3, 4, 4, 3, 5, 8]
var DefaultData = [1, 3, 4, 4, 3, 5, 8] //make sure we have the same data for Month and Default
var weekLabels = ['1/1', '1/2', '1/3', '1/4', '1/5', '1/6', '1/7']
var monthLabels = ['1/1', '2/1', '3/1', '4/1', '5/1', '6/1', '7/1']
var defaultLabels = ['1/1', '2/1', '3/1', '4/1', '5/1', '6/1', '7/1']

const Chart = () =>{
const [chartData, setChartData] = useState({});

    const chart = () =>{
        setChartData({
            labels:defaultLabels, 
            datasets: [{
                    label: 'Sales',
                    data: DefaultData,
                    backgroundColor:['rgba(54, 162, 235, 0.0)'],
                    borderColor:['rgba(1, 201, 225, 1)']
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
                    backgroundColor:['rgba(54, 162, 235, 0.0)'],
                    borderColor:['rgba(1, 201, 225, 1)']
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
                    backgroundColor:['rgba(54, 162, 235, 0.0)'],
                    borderColor:['rgba(1, 201, 225, 1)']
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
