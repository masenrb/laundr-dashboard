import Order_Data from '../Order_Data.json';
import Subscription_Data from '../Subscription_Data.json';
var MonthDays = []; 
var SubsMonthDays = [];
for(var i = 0; i < 30; i++){
    const today = new Date(2020, 6, 30);
    var dd = today.getDate() - 29 + i;
    var yyyy = today.getFullYear();
    if(dd <= 0 ){
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
    //console.log(D);
    MonthDays.push(S);
    SubsMonthDays.push(S);
}
var weekDays = [];
var SubsweekDays = [];
for (var i = 0; i < 7; i++){
    weekDays[i] = MonthDays[23 + i];
    SubsweekDays[i] = SubsMonthDays[23 + i];
}
var YearDays = [];
for(var j = 0; j < 12; j++){
    const today = new Date();
    var mm = (today.getMonth() + 1 -11 + j);
    if (mm <= 0){
        mm = mm + 12;
    }
    var D = mm + '/1'; 
    YearDays.push(D);
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
for (var c = 0; c < 7; c++){
    OrderDataDefault[c] = (OrderDataMonth[23 + c]);
}


var SubsDataMonthCompunded = Array(SubsMonthDays.length).fill(0);
var SubsDataMonth = Array(SubsMonthDays.length).fill(0);
for (var j = 0; j < SubsMonthDays.length; j++){ 
    var month =  SubsMonthDays[j];
    var first =  month.indexOf('-');
    var monthmonth = month.substr(0, first);
    var second = month.indexOf('-', first + 1);
    var monthday = month.substr(first+ 1, second -3);
    var monthyear = month.substr(second+1);
    for (var i = 0; i < Subscription_Data.length; i++){
        if(SubsMonthDays[j] === Subscription_Data[i].startDate)
        {SubsDataMonth[j] =SubsDataMonth[j] + 1;}
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

var SubsDataWeekCompunded = [];
var SubsDataWeek = [];
for (var c = 0; c < 7; c++){
    SubsDataWeekCompunded[c] = (SubsDataMonthCompunded[23 + c]);
    SubsDataWeek[c] = (SubsDataMonth[23 + c]);
}

export default MonthDays;
export {weekDays, YearDays, PoundDataMonth, PoundDataWeek,  OrderDataMonth, OrderDataWeek, OrderDataDefault, SubsDataMonthCompunded, SubsMonthDays, SubsDataWeekCompunded, SubsDataWeek, SubsweekDays, SubsDataMonth, PoundDataMonthCompounded, PoundDataWeekCompounded };