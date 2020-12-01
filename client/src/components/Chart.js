import React, {Component, useEffect, useState} from 'react';
import {Line} from 'react-chartjs-2';
import MonthDays, {weekDays, YearDays} from './ChartData';
import userData from '../User_Data.json';
import Axios from 'axios';

var WeekData = [2, 4, 6, 8, 3, 4, 4]
var MonthData = [1, 3, 4, 4, 3, 5, 8, 1, 3, 4, 4, 3, 5, 8, 1, 3, 4, 4, 3, 5, 8, 1, 3, 4, 4, 3, 5, 8, 2, 2]
var DefaultData = [2, 4, 6, 8, 3, 4, 4] //make sure we have the same data for week and Default
var weekLabels = weekDays;
var monthLabels = MonthDays;
var defaultLabels = weekDays;


var RandomOrg = require('random-org');

export default function Chart() {
    const [chartData, setChartData] = useState({});
    const [userCreationData, setUserCreationData] = useState([]);
    const [subData, setSubData] = useState([]);
    const [orderDateData, setOrderDateData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result1 = await Axios.get('http://localhost:5000/api/users/getaccount/3-20-2017');
            const result2 = await Axios.get('http://localhost:5000/api/subscriptions/getstartdate/10-13-2020');

            setUserCreationData(result1.data);
            setSubData(result2.data);
        };
        
        fetchData();
    }, []);
    
    console.log(userCreationData.length);
    console.log(subData.length);

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
    
};
