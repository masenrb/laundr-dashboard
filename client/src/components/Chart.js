import React, {Component, useEffect, useState} from 'react';
import {Line} from 'react-chartjs-2';
import MonthDays, {weekDays, YearDays} from './ChartData';
import userData from '../User_Data.json';
import Axios from 'axios';


var monthStrings = []; 
for(var i = 0; i < 30; i++){
    const today = new Date();
    var dd = today.getDate() - 29 + i;
    var yyyy = today.getFullYear();
    if(dd <= 0 ){
        var mm = today.getMonth();
        if(mm == 0 ){
            mm = 12;
            dd = dd + 31
        }
        else if(mm == 1 || mm == 3 || mm == 5 || mm == 7 || mm == 8 || mm == 10){
            dd = 31 + dd;
        }
        else if (mm == 2){dd = dd + 28;}
        else {dd = dd + 30;}
    }
    else{
    var mm = (today.getMonth() + 1);}
    var D = mm + '-' + dd + '-' + yyyy;
    //console.log(D);
    monthStrings.push(D);
}
var weekStrings = [];
for (var i = 0; i < 7; i++){
    weekStrings[i] = monthStrings[23 + i];
}
var newYearDays = [];
for(var j = 0; j < 12; j++){
    const today = new Date();
    var mm = (today.getMonth() + 1 -11 + j);
    if (mm <= 0){
        mm = mm + 12;
    }
    var D = mm + '/1'; 
    newYearDays.push(D);
}

//var WeekData = [];
//var MonthData = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
//var DefaultData = [2, 4, 6, 8, 3, 4, 4] //make sure we have the same data for week and Default
var weekLabels = weekDays;
var monthLabels = MonthDays;
var yearLabels = [];
var defaultLabels = weekDays;
var today = new Date();
var dd = String(today.getDate());
var mm = String(today.getMonth() + 1); //January is 0!
var yyyy = today.getFullYear();
today = mm + '-' + dd + '-' + yyyy;
//console.log(today);
//console.log(weekStrings);

var daysArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
var monthsArray = [1,2,3,4,5,6,7,8,9,10,11,12];
var yearsArray = [2020];
var allTimeStrings = [];

for (var i = 0; i < yearsArray.length; i++) {
    for (var j = 0; j < monthsArray.length; j++) {
        yearLabels.push(monthsArray[j] + "/" + yearsArray[i]);
    }
}

for (var i = 0; i < yearsArray.length; i++) {
    for (var j = 0; j < monthsArray.length; j++) {
        for (var k = 0; k < daysArray.length; k++) {
            allTimeStrings.push(monthsArray[j] + "-" + daysArray[k] + "-" + yearsArray[i]);
        }
    }
}
//console.log(allTimeStrings);
export default function Chart() {
    const [chartData, setChartData] = useState({});
    const [userCreationData, setUserCreationData] = useState([]);
    const [subData, setSubData] = useState([]);
    const [orderWeekData, setOrderWeekData] = useState([]);
    const [orderMonthData, setOrderMonthData] = useState([]);
    const [allTimeOrders, setAllTimeOrders] = useState([]);
    const [monthlyOrders, setMonthlyOrders] = useState([0,0,0,0,0,0,0,0,0,0,0,0]);
    const [testPoundsData, setTestPoundsData] = useState([]);
    /*
    for (var i = 0; i < 30; i++) {
        monthStrings[i] = [mm + '-' + i + '-' + yyyy];
    }
    */
    useEffect(() => {
        const fetchData = async () => {
            //for(var i = 0; i < weekStrings.length; i++) {
                //const result1 = await Axios.get('http://localhost:5000/api/orders/getdate/' + weekStrings[i]);
                //setOrderDateData(result1.data);
                //DefaultData[i] = result1.data.length;
                //WeekData[i] = result1.data.length;
            //}

           
            let newArr = [...monthlyOrders];
            for(var i = 0; i < allTimeStrings.length; i++) {
                const result1 = await Axios.get('http://localhost:5000/api/orders/getdate/' + allTimeStrings[i]);
                setAllTimeOrders(allTimeOrders => [...allTimeOrders, result1.data.length]);
                if (result1.data.length != 0) {
                    let newIndex = parseInt(allTimeStrings[i].substr(0,allTimeStrings[i].indexOf('-')));
                    //let newArr = [...monthlyOrders];
                    newArr[newIndex-1] = newArr[newIndex-1] + 1;
                    //console.log(newArr);
                    setMonthlyOrders(newArr);
                }
            }
            
            
            for(var i = 0; i < monthStrings.length; i++) {
                const result2 = await Axios.get('http://localhost:5000/api/orders/getdate/' + monthStrings[i]);
                //setOrderMonthData(result2.data);
                setOrderMonthData(orderMonthData => [...orderMonthData, result2.data.length]);
                if(i > 22)
                    setOrderWeekData(orderWeekData => [...orderWeekData, result2.data.length]);
                
                //MonthData[i] = result2.data.length;
            }
            //const result2 = await Axios.get('http://localhost:5000/api/subscriptions/getstartdate/10-13-2020');
            //const result3 = await Axios.get('http://localhost:5000/api/orders/getdate/8-20-2010')
            const testResult = await Axios.get('http://localhost:5000/api/orders/getdate/11-13-2020');
            //setTestPoundsData(testPoundsData => [...testPoundsData, testResult.data]);
            setTestPoundsData(testResult.data)


            for (var i = 0; i < 7; i++){
                orderWeekData[i] = orderMonthData[23 + i];
            } 

            //setSubData(result2.data);
            
        };
        
        fetchData();
    }, []);
    //console.log(orderMonthData);
    /*
    console.log(monthStrings[3][0]);
    for (var i = 0; i < monthStrings.length; i++) {
        for (var j = 0; j < orderMonthData.length; j++) {
            if (monthStrings[i][0].stringify == orderMonthData[j].orderDate)
                console.log("match found for " + monthStrings[i])
        }
    }
    console.log(MonthData);
    
    for (var i = 0; i < orderMonthData.length; i++) {
        if (orderMonthData[i].orderDate == "11-18-2020")
            console.log("success");
    } */
    //console.log(userCreationData.length);
    //console.log(subData.length);
    //console.log(orderDateData.length);
    if (testPoundsData[0] != null)
        console.log(testPoundsData[0].orderWeight);

    const chart = () =>{
        setChartData({
            labels:weekLabels, 
            datasets: [{
                    data: orderWeekData,
                    label: 'Orders',
                    color:['rgba(54, 162, 235, 1.0)'],
                    backgroundColor:['rgba(54, 162, 235, 1.0)'],
                    fill: false,
                    lineTension: 0,
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
                    data: orderMonthData,
                    label: 'Orders Last Month',
                    color:['rgba(54, 162, 235, 1.0)'],
                    backgroundColor:['rgba(54, 162, 235, 1.0)'],
                    fill: false,
                    lineTension: 0,
                }
            ]
        })
        
    }
    function updateChartAllTime(chart) {
        setChartData({
            labels:yearLabels, 
            datasets: [{
                    data: monthlyOrders,
                    label: 'Orders Last Year',
                    color:['rgba(54, 162, 235, 1.0)'],
                    backgroundColor:['rgba(54, 162, 235, 1.0)'],
                    fill: false,
                    lineTension: 0,
                }
            ]
        })
        
    }
    function updateChart(chart) {
        setChartData({
            labels:weekLabels, 
            datasets: [{
                    data: orderWeekData,
                    label: 'Orders Last Week',
                    color:['rgba(54, 162, 235, 1.0)'],
                    backgroundColor:['rgba(54, 162, 235, 1.0)'],
                    fill: false,
                    lineTension: 0,
                }
            ]
        })
    }
    
return(
    <div>
        <div>
        <Line data = {chartData} options ={{title:{text:'Orders Processed', fontFamily: 'Calmer', fontSize: 25, display: true}}}></Line>
        <button onClick = {updateChart}>Week</button>
        <button onClick = {updateChartMonth}>Month</button>
        <button onClick = {updateChartAllTime}>All Time</button>
        </div>
    </div>
)
    
};
