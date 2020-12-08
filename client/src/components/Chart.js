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
//var array = [5, 180 + Random.get(40), 205 + Random.get(50)];
var array = [Random.get(255), Random.get(255), Random.get(255)];

var btn = document.createElement("button");
btn.className = "defaultButton";
btn.backgroundColor = "#AA0212"

const Chart = () =>{
const [chartData, setChartData] = useState({});
    let default_color  = 'rgba(' + array[1] + ', ' + array[0] + ', ' + array[2] + ', 1)';
    console.log(default_color);

    const chart = () =>{
        setChartData({
            labels:defaultLabels, 
            datasets: [{
                label: 'Orders',
                    data: DefaultData,
                    backgroundColor:['rgba(54, 162, 235, 0.0)'],
                    borderColor: 'rgba(' + Random.get(255) + ', ' + Random.get(255) + ', ' + Random.get(255) + ', 1)',
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
                    backgroundColor:['rgba(54, 162, 235, 0.0)'],
                    borderColor: 'rgba(' + Random.get(255) + ', ' + Random.get(255) + ', ' + Random.get(255) + ', 1)',
                    lineTension: 0.1,
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
                    backgroundColor:['rgba(54, 162, 235, 0.0)'],
                    borderColor: 'rgba(' + Random.get(255) + ', ' + Random.get(255) + ', ' + Random.get(255) + ', 1)',
                    lineTension: 0.1,
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
                    borderColor: 'rgba(' + Random.get(255) + ', ' + Random.get(255) + ', ' + Random.get(255) + ', 1)',
                    lineTension: 0.1,
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
                    borderColor: 'rgba(' + Random.get(255) + ', ' + Random.get(255) + ', ' + Random.get(255) + ', 1)',
                    lineTension: 0.1,
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
