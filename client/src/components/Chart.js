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

var RandomOrg = require('random-org');

const Chart = () =>{
const [chartData, setChartData] = useState({});
    let default_color  = 'rgba(1, 201, 225, 1)';

    /*var random = new RandomOrg({ apiKey: '15aa22b5-8b99-444f-9287-4e704cfe66b0' });
    let maybe = random.generateIntegers({ min: 0, max: 255, n: 3 })
        .then(function(result) {
            console.log(result.random.data); // [55, 3]
        });

    let random_color = random.generateIntegers({ min: 0, max: 255, n: 3 });
    console.log(random);
    console.log(maybe);
    console.log(random_color);*/

    const chart = () =>{
        setChartData({
            labels:defaultLabels, 
            datasets: [{
                label: 'Orders',
                    data: DefaultData,
                    backgroundColor:['rgba(54, 162, 235, 0.0)'],
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
                    backgroundColor:['rgba(54, 162, 235, 0.0)'],
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
                    backgroundColor:['rgba(54, 162, 235, 0.0)'],
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
