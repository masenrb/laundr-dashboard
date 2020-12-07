import React, {Component, useEffect, useState} from 'react';
import {Line} from 'react-chartjs-2';
import  {yearTotalSubs, StudentDataWeek, FamilyDataWeek, StandardDataWeek, PlusDataWeek, DefaultStudent, YearDays, SubsDataMonth, SubsMonthDays, SubsDataWeek, SubsweekDays, SubsFamilyData, SubsPlusData, SubsStandardData, SubsStudentData, yearFamilySubs, yearPlusSubs, yearStandardSubs, yearStudentSubs} from './ChartData';


var MonthData = SubsDataMonth;
var DefaultData = DefaultStudent; 
var WeekData = SubsDataWeek;
var weekLabels = SubsweekDays;
var monthLabels = SubsMonthDays;
var defaultLabels = SubsweekDays;
var StudentData = SubsStudentData;
var StandardData = SubsStandardData;
var FamilyData = SubsFamilyData;
var PlusData = SubsPlusData;
var wstu = StudentDataWeek ;
var wsta = StandardDataWeek ;
var wfam = FamilyDataWeek ;
var wplu = PlusDataWeek ;
var years = YearDays;
var yearsubs = yearTotalSubs;
var yearfamily = yearFamilySubs;
var yearplus = yearPlusSubs;
var yearstudent = yearStudentSubs;
var yearstandard = yearStandardSubs;


var RandomOrg = require('random-org');

const SubsChart = () =>{
const [chartData, setChartData] = useState({});
    

    /*var random = new RandomOrg({ apiKey: '15aa22b5-8b99-444f-9287-4e704cfe66b0' });
    let maybe = random.generateIntegers({ min: 0, max: 255, n: 3 })
        .then(function(result) {
            console.log(result.random.data); // [55, 3]
        });

    let random_color = random.generateIntegers({ min: 0, max: 255, n: 3 });
    console.log(random);
    console.log(maybe);
    console.log(random_color);*/

    const SubsChart = () =>{
        setChartData({
            labels:defaultLabels, 
            datasets: [{
                    data: DefaultData,
                    label: "All Active Subscribers",
                    backgroundColor:['rgba(54, 162, 235, 0.0)'],
                    borderColor: ['rgba(1, 201, 225, 1)'],
                    lineTension: 0.1,
                }
            ]
        })
    }
    useEffect(()=>{
        SubsChart()
    }, [])
    function updateChartMonth(chart) {
        setChartData({
            labels:monthLabels, 
            datasets: [{
                    data: MonthData,
                    label: "All Active Subscribers",
                    backgroundColor:['rgba(54, 162, 235, 0.0)'],
                    borderColor: ['rgba(1, 201, 225, 1)'],
                    lineTension: 0.1,
                }, 
                {
                    data: StudentData,
                    label: "Student Plan",
                    backgroundColor:['rgba(54, 162, 235, 0.0)'],
                    borderColor: ['rgba(154, 162, 235, 1)'],
                    lineTension: 0.1,
                },
                {
                    data: FamilyData,
                    label: "Family Plan",
                    backgroundColor:['rgba(54, 162, 235, 0.0)'],
                    borderColor: ['rgba(54, 162, 235, 1)'],
                    lineTension: 0.1,
                }, 
                {
                    data: StandardData,
                    label: "Standard Plan",
                    backgroundColor:['rgba(54, 162, 235, 0.0)'],
                    borderColor: ['rgba(200, 162, 235, 1)'],
                    lineTension: 0.1,
                }, 
                {
                    data: PlusData,
                    label: "Plus Plan",
                    backgroundColor:['rgba(54, 162, 235, 0.0)'],
                    borderColor: ['rgba(0, 200, 235, 1)'],
                    lineTension: 0.1,
                }  
            ]
        })
        
    }
    function updateChart(chart) {
        setChartData({
            labels:weekLabels, 
            datasets: [{
                    data: WeekData,
                    label: "All Active Subscribers",
                    backgroundColor:['rgba(54, 162, 235, 0.0)'],
                    borderColor: ['rgba(1, 201, 225, 1)'],
                    lineTension: 0.1,
                }, 
                {
                    data: wstu,
                    label: "Week Student Plan",
                    backgroundColor:['rgba(54, 162, 235, 0.0)'],
                    borderColor: ['rgba(154, 162, 235, 1)'],
                    lineTension: 0.1,
                },
                {
                    data: wfam,
                    label: "Week Family Plan",
                    backgroundColor:['rgba(54, 162, 235, 0.0)'],
                    borderColor: ['rgba(54, 162, 235, 1)'],
                    lineTension: 0.1,
                }, 
                {
                    data: wsta,
                    label: "Week Standard Plan",
                    backgroundColor:['rgba(54, 162, 235, 0.0)'],
                    borderColor: ['rgba(200, 162, 235, 1)'],
                    lineTension: 0.1,
                }, 
                {
                    data: wplu,
                    label: "Week Plus Plan",
                    backgroundColor:['rgba(54, 162, 235, 0.0)'],
                    borderColor: ['rgba(0, 200, 235, 1)'],
                    lineTension: 0.1,
                } 
            ]
        })
    }

    function updateChartYear(chart) {
        setChartData({
            labels: years, 
            datasets: [{
                    data: yearsubs,
                    label: "All Active Subscribers",
                    backgroundColor:['rgba(54, 162, 235, 0.0)'],
                    borderColor: ['rgba(1, 201, 225, 1)'],
                    lineTension: 0.1,
                }, 
                {
                    data: yearstudent,
                    label: "All Time Student Plan",
                    backgroundColor:['rgba(54, 162, 235, 0.0)'],
                    borderColor: ['rgba(154, 162, 235, 1)'],
                    lineTension: 0.1,
                },
                {
                    data: yearfamily,
                    label: "All Time Family Plan",
                    backgroundColor:['rgba(54, 162, 235, 0.0)'],
                    borderColor: ['rgba(54, 162, 235, 1)'],
                    lineTension: 0.1,
                }, 
                {
                    data: yearstandard,
                    label: "All Time Standard Plan",
                    backgroundColor:['rgba(54, 162, 235, 0.0)'],
                    borderColor: ['rgba(200, 162, 235, 1)'],
                    lineTension: 0.1,
                }, 
                {
                    data: yearplus,
                    label: "All Time Plus Plan",
                    backgroundColor:['rgba(54, 162, 235, 0.0)'],
                    borderColor: ['rgba(50, 0, 235, 1)'],
                    lineTension: 0.1,
                } 
            ]
        })
    }
    
return(
    <div>
    <div>
        <Line data = {chartData} options ={{title:{text: 'Active Subscriptions', fontFamily: 'Calmer', fontSize: 25, display: true}}}></Line>
        <button onClick = {updateChart}>Week</button>
        <button onClick = {updateChartMonth}>Month</button>
        <button onClick = {updateChartYear}>All Time</button>
        </div>
    </div>
)
    
}


export default SubsChart;