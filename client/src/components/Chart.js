import React, {Component, useEffect, useState} from 'react';
import {Line} from 'react-chartjs-2';
import{calculationHoursDay, SubsMonthDays, SubsweekDays, YearOrderData, YearDays, OrderDataDay, OrderDataMonth, OrderDataWeek, OrderDataDefault} from './ChartData';

var hoursData = OrderDataDay;
var hoursLabels = calculationHoursDay;
var MonthData = OrderDataMonth;
var DefaultData = OrderDataDefault; 
var WeekData = OrderDataWeek;
var weekLabels = SubsweekDays;
var monthLabels = SubsMonthDays;
var defaultLabels = SubsweekDays;
var YearData = YearOrderData;
var YearLabels = YearDays;

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
                label: 'Orders',
                    data: DefaultData,
                    backgroundColor:[default_color],
                    borderColor: default_color,
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
                label: 'Orders Last 30 Days',
                    data: MonthData,
                    backgroundColor:[default_color],
                    borderColor: default_color,
                }
            ]
        })
        
    }
    function updateChart(chart) {
        setChartData({
            labels:weekLabels, 
            datasets: [{
                label: 'Orders Last Week',
                    data: WeekData,
                    backgroundColor:[default_color],
                    borderColor: default_color,
                }
            ]
        })
    }
    function updateChartHours(chart) {
        setChartData({
            labels:hoursLabels, 
            datasets: [{
                label: 'Orders Each Hour',
                    data: hoursData,
                    backgroundColor:['rgba(54, 162, 235, 0.0)'],
                    borderColor: default_color,
                }
            ]
        })
    }
    function updateChartYears(chart) {
        setChartData({
            labels:YearLabels, 
            datasets: [{
                label: 'Orders Each Year',
                    data: YearData,
                    backgroundColor:['rgba(54, 162, 235, 0.0)'],
                    borderColor: default_color,
                }
            ]
        })
    }
    
return(
    <div>
    <div>
        <Line data = {chartData} options ={{title:{text: 'New Orders', fontFamily: 'Calmer', fontSize: 25, display: true}}}></Line>
        <button onClick = {updateChartHours}>Hours</button>
        <button onClick = {updateChart}>Week</button>
        <button onClick = {updateChartMonth}>Month</button>
        <button onClick = {updateChartYears}>All Time</button>
        </div>
    </div>
)
    
}


export default Chart;
