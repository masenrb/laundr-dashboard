import Order_Data from '../Order_Data.json';
import Subscription_Data from '../Subscription_Data.json';
var MonthDays = []; 
var SubsMonthDays = [];
var hoursDay = [];
var calculationHoursDay = [];
const today = new Date(2014, 0, 30);
//Calculates and stores the year, month, and day
for(var i = 0; i < 30; i++){
    var dd = today.getDate() - 29 + i;
    var yyyy = today.getFullYear();
    if(dd <= 0 ){ //if the day is before the current month calculates the correct day
        var mm = today.getMonth();
        if(mm == 0 ){
            mm = 12;
            dd = dd + 31
            yyyy = yyyy - 1;
        }
        else if(mm == 1 || mm == 3 || mm == 5 || mm == 7 || mm == 8 || mm == 10){
            dd = 31 + dd;
        }
        else if (mm == 2){dd = dd + 28;}
        else {dd = dd + 30;}
    }
    else{
    var mm = (today.getMonth() + 1);}
    var S = mm + '-' + dd + '-'+ yyyy;
    MonthDays.push(S);
    SubsMonthDays.push(S);
}


    var ddd = today.getDate();
    var mmm = today.getMonth();
    var yyy = today.getFullYear();
for(var i = 0; i < 24; i++){
    var hhh = today.getHours() - 23 + i;
    if(hhh <= 0){
        hhh = hhh + 23;
        var D = (ddd - 1) + '-' + hhh;
        hoursDay.push(D)
        if(hhh > 12){var H = (ddd - 1) + '-' + (hhh - 12) + "PM";
        calculationHoursDay.push(H);}
        else{ var H = (ddd - 1) + '-' + (hhh) + "AM";
            calculationHoursDay.push(H);}
    }
    else{
        var D = ddd + '-' + hhh;
        hoursDay.push(D)
        if(hhh > 12){var H = (ddd) + '-' + (hhh - 12) + "PM";
        calculationHoursDay.push(H);}
        else{ var H = (ddd) + '-' + (hhh) + "AM";
            calculationHoursDay.push(H);}
    }
}


var weekDays = [];
var SubsweekDays = [];
for (var i = 0; i < 7; i++){
    weekDays[i] = MonthDays[23 + i];
    SubsweekDays[i] = SubsMonthDays[23 + i];
}


var YearDays = [];
for(var j = 2010; j <= yyy; j++){ //put start year here
    YearDays.push(j.toString());
}


var OrderDataMonth = Array(MonthDays.length).fill(0);
var PoundDataMonthCompounded = Array(MonthDays.length).fill(0);
var PoundDataMonth = Array(MonthDays.length).fill(0);
for (var j = 0; j < MonthDays.length; j++){  
    var order =  MonthDays[j];
    var firsto =  order.indexOf('-');
    var orderMONTH = order.substr(0, firsto);
    var secondo = order.indexOf('-', firsto + 1);
    var orderday = order.substr(firsto + 1, firsto +1);
    if (orderday.length > 2){orderday = orderday.substr(0,2);}
    var orderyear = order.substr(secondo+1);
    //MonthDays[j] = orderday;
    for (var i = 0; i < Order_Data.length; i++){
        if(Order_Data[i].orderDate === MonthDays[j]){
            OrderDataMonth[j] = OrderDataMonth[j] + 1;
            PoundDataMonth[j] = PoundDataMonth[j] + Order_Data[j].orderWeight;
        }
        var orderi =  Order_Data[i].orderDate;
    var firstoi =  orderi.indexOf('-');
    var orderMONTHi = orderi.substr(0, firstoi);
    var secondoi = orderi.indexOf('-', firstoi + 1);
    var orderdayi = orderi.substr(firstoi+ 1, firstoi + 1);
    if (orderdayi.length > 2){orderdayi = orderdayi.substr(0,2);}
    var orderyeari = orderi.substr(secondoi+1);
if(parseInt(orderyeari) < parseInt(orderyear)){
    PoundDataMonthCompounded[j] = PoundDataMonthCompounded[j] + Order_Data[i].orderWeight;
}
else if(parseInt(orderyeari) === parseInt(orderyear)){
    if(parseInt(orderMONTHi) < parseInt(orderMONTH)){
        PoundDataMonthCompounded[j] = PoundDataMonthCompounded[j] + Order_Data[i].orderWeight;
    }
    else if(parseInt(orderMONTHi) === parseInt(orderMONTH)){
        if(parseInt(orderdayi) <= parseInt(orderday)){
            PoundDataMonthCompounded[j] = PoundDataMonthCompounded[j] + Order_Data[i].orderWeight;
        }}}
    }
}
var OrderDataWeek = [];
var PoundDataWeekCompounded = [];
var PoundDataWeek = [];
for (var c = 0; c < 7; c++){
    OrderDataWeek[c] = (OrderDataMonth[23 + c]);
    PoundDataWeekCompounded[c] = (PoundDataMonthCompounded[23 + c]);
    PoundDataWeek[c] = (PoundDataMonth[23 + c]);
}
var OrderDataDefault = [];
var PoundDataDefault = [];
for (var c = 0; c < 7; c++){
    OrderDataDefault[c] = (OrderDataWeek[c]);
    PoundDataDefault[c] = (PoundDataWeek[c]);
}


var SubsDataMonthCompunded = Array(SubsMonthDays.length).fill(0);
var SubsDataMonth = Array(SubsMonthDays.length).fill(0);
var SubsFamilyData = Array(SubsMonthDays.length).fill(0);
var SubsStandardData = Array(SubsMonthDays.length).fill(0);
var SubsStudentData = Array(SubsMonthDays.length).fill(0);
var SubsPlusData = Array(SubsMonthDays.length).fill(0);
for (var j = 0; j < SubsMonthDays.length; j++){ 
    var month =  SubsMonthDays[j];
    var first =  month.indexOf('-');
    var monthmonth = month.substr(0, first);
    var second = month.indexOf('-', first + 1);
    var monthday = month.substr(first+ 1, second -3);
    var monthyear = month.substr(second+1);
    for (var i = 0; i < Subscription_Data.length; i++){
        if(SubsMonthDays[j] === Subscription_Data[i].startDate){
            if(Subscription_Data[i].subscriptionType == "family"){
                SubsFamilyData[j] = SubsFamilyData[j] + 1;
                SubsDataMonth[j] =SubsDataMonth[j] + 1;
            }
            else if(Subscription_Data[i].subscriptionType == "standard"){
                SubsStandardData[j] = SubsStandardData[j] + 1;
                SubsDataMonth[j] =SubsDataMonth[j] + 1;
            }
            else if(Subscription_Data[i].subscriptionType == "plus"){
                SubsPlusData[j] = SubsPlusData[j] + 1;
                SubsDataMonth[j] =SubsDataMonth[j] + 1;
            }
            else if(Subscription_Data[i].subscriptionType == "student"){
                SubsStudentData[j] = SubsStudentData[j] + 1;
                SubsDataMonth[j] =SubsDataMonth[j] + 1;
            }
        }
        var string = Subscription_Data[i].startDate;
        var firstS =  string.indexOf('-');
        var stringmonth = string.substr(0, firstS);
        var secondS = string.indexOf('-', firstS + 1);
        var stringday = string.substr(firstS+ 1, secondS -3);
        var stringyear = string.substr(secondS+1);
         if(parseInt(stringyear) < parseInt(monthyear)){
             if(Subscription_Data[i].isActive){
            SubsDataMonthCompunded[j] = SubsDataMonthCompunded[j] + 1;}}
        else if (parseInt(stringyear) === parseInt(monthyear)){
             if(parseInt(stringmonth) < parseInt(monthmonth)){
                if(Subscription_Data[i].isActive){
                    SubsDataMonthCompunded[j] = SubsDataMonthCompunded[j] + 1;}}
             else if(parseInt(stringmonth) === parseInt(monthmonth)){
               if(parseInt(stringday) <= parseInt(monthday)){
                if(Subscription_Data[i].isActive){
                    SubsDataMonthCompunded[j] = SubsDataMonthCompunded[j] + 1;}}
        }}
    }
}

var YearOrderData = Array(YearDays.length).fill(0);
var YearPoundData = Array(YearDays.length).fill(0);
for(var i = 0; i < YearDays.length; i++){
    for(var j = 0; j < Order_Data.length; j++){
        if(YearDays[i] === Order_Data[j].orderDate.substr(Order_Data[j].orderDate.length - 4)){
            YearOrderData[i] = YearOrderData[i] + 1;
            YearPoundData[i] = YearPoundData[i] + Order_Data[j].orderWeight;
        }
    }
}


var PoundDataDay =  Array(calculationHoursDay.length).fill(0);
var currDay =  mmm+1 + '-' + ddd + '-' + yyy;
var dash = currDay.indexOf('-');
var dash2 = currDay.indexOf('-', dash + 1);
var OrderDataDay = Array(calculationHoursDay.length).fill(0);
for(var i = 0; i < calculationHoursDay.length; i++){
    var dashs =calculationHoursDay[i].indexOf('-');
    var hrs = calculationHoursDay[i].substr(dashs + 1)
if(currDay.substr(dash, dash2) !== calculationHoursDay[i].substr(0, dashs)){
    currDay = currDay.substr(0, dash + 1) + calculationHoursDay[i].substr(0, dashs) + currDay.substr(dash2);
}
    for(var j = 0; j < Order_Data.length; j++){
        if(Order_Data[j].orderDate === currDay){
            var tme = Order_Data[j].deliveryTime.substr(0, Order_Data[j].deliveryTime.indexOf(':')) + Order_Data[j].deliveryTime.substr(Order_Data[j].deliveryTime.length - 2);
            if(hrs === tme){
                OrderDataDay[i] = OrderDataDay[i] + 1;
                PoundDataDay[i] = PoundDataDay[i] + Order_Data[j].orderWeight;
            }        
        }
    }
}


var SubsDataWeek = [];
var PlusDataWeek = [];
var FamilyDataWeek = [];
var StandardDataWeek = [];
var StudentDataWeek = [];
for (var c = 0; c < 7; c++){
    SubsDataWeek[c] = (SubsDataMonth[23 + c]);
    PlusDataWeek[c] = SubsPlusData[23 + c];
    StudentDataWeek[c] = SubsStudentData[23 + c];
    FamilyDataWeek[c] = SubsFamilyData[23 + c];
    StandardDataWeek[c] = SubsStandardData[23 + c];
}

export default MonthDays;
export {StudentDataWeek, FamilyDataWeek, StandardDataWeek, PlusDataWeek, calculationHoursDay, weekDays, YearOrderData, YearPoundData, YearDays, OrderDataDay, PoundDataMonth, PoundDataWeek, OrderDataMonth, OrderDataWeek, OrderDataDefault, PoundDataDefault, SubsDataMonthCompunded, SubsMonthDays, SubsDataWeek, SubsweekDays, SubsDataMonth, PoundDataMonthCompounded, PoundDataWeekCompounded, PoundDataDay, SubsFamilyData, SubsPlusData, SubsStandardData, SubsStudentData };
