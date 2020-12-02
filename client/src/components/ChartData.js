import Order_Data from '../Order_Data.json';
var MonthDays = []; 
for(var i = 0; i < 30; i++){
    const today = new Date();
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
    if (mm < 10){var D = dd + '.0' + mm + '.' + yyyy;}
    else{var D = dd + '.' + mm + '.' + yyyy;}
    
    console.log(D);
    MonthDays.push(D);
}
var weekDays = [];
for (var i = 0; i < 7; i++){
    weekDays[i] = MonthDays[23 + i];
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
for (var j = 0; j < MonthDays.length; j++){  
    for (var i = 0; i < Order_Data.length; i++){
        if(Order_Data[i].orderDate === MonthDays[j]){
            OrderDataMonth[j] = OrderDataMonth[j] + 1;
        }
    }
}
var OrderDataWeek = [];
for (var c = 0; c < 7; c++){
    OrderDataWeek[c] = (OrderDataMonth[23 + c]);
}
var OrderDataDefault = [];
for (var c = 0; c < 7; c++){
    OrderDataDefault[c] = (OrderDataMonth[23 + c]);
}

export default MonthDays;
export {weekDays, YearDays, OrderDataMonth, OrderDataWeek, OrderDataDefault};