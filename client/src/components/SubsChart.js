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
        var mm = today.getMonth() - 1;  //DELETE - 1 TO REVERT TO NORMAL
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
    var mm = (today.getMonth());} // SHOULD BE + 1 TO REVERT TO NORMAL
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

var weekLabels = weekDays;
var monthLabels = MonthDays;
var yearLabels = [];
var defaultLabels = weekDays;
var today = new Date();
var dd = String(today.getDate());
var mm = String(today.getMonth() + 1); //January is 0!
var yyyy = today.getFullYear();
today = mm + '-' + dd + '-' + yyyy;

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
    const [orderWeekData, setOrderWeekData] = useState([]);
    const [orderMonthData, setOrderMonthData] = useState([]);
    const [monthlyOrders, setMonthlyOrders] = useState([0,0,0,0,0,0,0,0,0,0,0,0]);
    const [allTimeOrders, setAllTimeOrders] = useState([]);

    const [testPoundsData, setTestPoundsData] = useState([]);
    const [noneSubData, setNoneSubData] = useState([]);
    const [studentSubData, setStudentSubData] = useState([]);
    const [standardSubData, setStandardSubData] = useState([]);
    const [plusSubData, setPlusSubData] = useState([]);
    const [familySubData, setFamilySubData] = useState([]);
    /*
    for (var i = 0; i < 30; i++) {
        monthStrings[i] = [mm + '-' + i + '-' + yyyy];
    }
    */
    useEffect(() => {
        const fetchData = async () => {
            //strategy: query a specific date like http://localhost:5000/api/subscriptions/getstartdate/10-25-2020
            //for each entry in the response, check the subscriptionType value and increment the corresponding count
            //for the subscription type
            
            /*
            let newArr = [...monthlyOrders];
            for(var i = 0; i < allTimeStrings.length; i++) {
                const result1 = await Axios.get('http://localhost:5000/api/orders/getdate/' + allTimeStrings[i]);
                for(var j = 0; j < result1.data.length; j++) {
                    if(result1.data[0] == null) {
                        setAllTimeOrders(allTimeOrders => [...allTimeOrders, 0]);
                    }
                    else {
                        setAllTimeOrders(allTimeOrders => [...allTimeOrders, result1.data[j].orderWeight]);
                        console.log(allTimeStrings[i] + "     " + result1.data[j].orderWeight)
                    }
                    if (result1.data.length != 0) {
                        let newIndex = parseInt(allTimeStrings[i].substr(0,allTimeStrings[i].indexOf('-')));
                        newArr[newIndex-1] = newArr[newIndex-1] + result1.data[j].orderWeight;
                        setMonthlyOrders(newArr);
                    }
                }
            }
            */
            let newArr2 = [...standardSubData];
            for(var i = 0; i < monthStrings.length; i++) {
                const result2 = await Axios.get('http://localhost:5000/api/subscriptions/getstartdate/' + monthStrings[i]);
                console.log(result2.data);
                if(result2.data[0] == null) {
                    newArr2[i] = 0;
                    setStandardSubData(newArr2);
                    //setOrderMonthData(orderMonthData => [...orderMonthData, 0]);
                    if(i > 22) {
                        //setOrderWeekData(orderWeekData => [...orderWeekData, 0]);
                        newArr2[i] = 0;
                        setStandardSubData(newArr2);
                    }
                }
                else {
                    for(var j = 0; j < result2.data.length; j++) {
                    //console.log(result2.data[j].subscriptionType);
                        if(j == 0) {
                            if (result2.data[j].subscriptionType === "standard")
                            newArr2[i] = newArr2[i] + 1;
                        }
                        else {
                            if (result2.data[j].subscriptionType === "standard")
                            newArr2[i] = newArr2[i] + 1;
                        }
                            
                        setStandardSubData(newArr2);
                        //console.log(newArr2);
                        //setOrderMonthData(orderMonthData => [...orderMonthData, result2.data[0].orderWeight]);
                        //console.log(monthStrings[i] + "     " + result2.data[j].orderWeight)
                        if(i > 22) {
                            setOrderWeekData(orderWeekData => [...orderWeekData, newArr2[i]]);
                        }
                        
                    }
                }
                
            }
/*
            for (var i = 0; i < 7; i++){
                orderWeekData[i] = orderMonthData[23 + i];
            } 
  */          
        };
        
        fetchData();
    }, []);

    console.log(standardSubData);

    const chart = () =>{
        setChartData({
            labels:weekLabels, 
            datasets: [{
                    data: orderWeekData,
                    label: 'Subscriptions',
                    color:['rgba(54, 162, 235, 1.0)'],
                    backgroundColor:['rgba(54, 162, 235, 1.0)'],
                    fill: false,
                    lineTension: 0.2,
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
                    data: standardSubData,
                    label: 'Subscriptions Started Last Month',
                    color:['rgba(54, 162, 235, 1.0)'],
                    backgroundColor:['rgba(54, 162, 235, 1.0)'],
                    fill: false,
                    lineTension: 0.2,
                }
            ]
        })
        
    }
    function updateChartAllTime(chart) {
        setChartData({
            labels:yearLabels, 
            datasets: [{
                    data: monthlyOrders,
                    label: 'Subscriptions Started Last Year',
                    color:['rgba(54, 162, 235, 1.0)'],
                    backgroundColor:['rgba(54, 162, 235, 1.0)'],
                    fill: false,
                    lineTension: 0.2,
                }
            ]
        })
        
    }
    function updateChart(chart) {
        setChartData({
            labels:weekLabels, 
            datasets: [{
                    data: orderWeekData,
                    label: 'Subscriptions Started Last Week',
                    color:['rgba(54, 162, 235, 1.0)'],
                    backgroundColor:['rgba(54, 162, 235, 1.0)'],
                    fill: false,
                    lineTension: 0.2,
                }
            ]
        })
    }
    
return(
    <div>
        <div>
        <Line data = {chartData} options ={{title:{text:'Subscription Metrics', fontFamily: 'Calmer', fontSize: 25, display: true}}}></Line>
        <button onClick = {updateChart}>Week</button>
        <button onClick = {updateChartMonth}>Month</button>
        <button onClick = {updateChartAllTime}>All Time</button>
        </div>
    </div>
)
    
};
