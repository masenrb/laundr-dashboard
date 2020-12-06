import React, {Component, useEffect, useState} from 'react';
import {Line} from 'react-chartjs-2';
import  { calculationHoursDay,  SubsMonthDays, SubsweekDays, YearPoundData, YearDays, PoundDataDefault,  PoundDataMonth, PoundDataWeek, PoundDataDay} from './ChartData';

var hoursData = PoundDataDay;
var hoursLabels = calculationHoursDay;
var MonthData = PoundDataMonth;
var DefaultData = PoundDataDefault; 
var WeekData = PoundDataWeek;
var weekLabels = SubsweekDays;
var monthLabels = SubsMonthDays;
var defaultLabels = SubsweekDays;
var YearData = YearPoundData;
var YearLabels = YearDays;


var RandomOrg = require('random-org');

const UsersChart = () =>{
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

    const UsersChart = () =>{
        setChartData({
            labels:defaultLabels, 
            datasets: [{
                label: 'Pounds',
                    data: DefaultData,
                    backgroundColor:['rgba(54, 162, 235, 0.0)'],
                    borderColor: default_color,
                }
            ]
        })
    }
    useEffect(()=>{
        UsersChart()
    }, [])
    function updateChartMonth(chart) {
        setChartData({
            labels:monthLabels, 
            datasets: [{
                label: 'Pounds Last 30 Days',
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
                label: 'Pounds This Week',
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
                label: 'Pounds Each Hour',
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
                label: 'Pounds Each Year',
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
        <Line data = {chartData} options ={{title:{text: 'LBS of Laundry', fontFamily: 'Calmer', fontSize: 25, display: true}}}></Line>
        <button onClick = {updateChartHours}>Hours</button>
        <button onClick = {updateChart}>Week</button>
        <button onClick = {updateChartMonth}>Month</button>
        <button onClick = {updateChartYears}>All Time</button>
        </div>
    </div>
)
    
}


export default UsersChart;