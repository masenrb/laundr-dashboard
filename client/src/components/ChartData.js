import userData from '../User_Data.json';

let userCreatedDates = [];
for (var i = 0; i < userCreatedDates.length; i++) {
    userCreatedDates[i] = [];
}
for (var key in userData) {
    if(userData.hasOwnProperty(key)) {
        var value = userData[key];
        userCreatedDates.push(value.accountCreatedDate);
    }  
}

for (var i in userCreatedDates) {
    console.log(userCreatedDates)
}

var MonthDays = []; 
for(var i = 0; i < 30; i++){
    const today = new Date();
    var dd = today.getDate() - 29 + i;
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
    var D = mm + '/' + dd;
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


export default MonthDays;
export {weekDays, YearDays};