var currentMonth = document.getElementById('currant_month');
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var date = new Date();
var getMonth = month[date.getMonth()];
var setMonth = currentMonth.innerText = 'Plan for the month of ' + getMonth;
