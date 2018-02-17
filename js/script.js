var currentdate = new Date();
var day = currentdate.getDay();
var timehr = currentdate.getHours();
var timemin = currentdate.getMinutes();
var time = (timehr*100)+timemin;
var DAY = ["SUNDAY","MONDAY","TUESDAY","WEDNESSDAY","THURSDAY","FRIDAY","SATURDAY"];
var MONTH = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"]
var datetime = " " + currentdate.getDate() + " "
                + MONTH[(currentdate.getMonth())]  + ", "
                + currentdate.getFullYear() ;

    document.getElementById("DATE").innerHTML = datetime;
    document.getElementById("DAY").innerHTML = DAY[currentdate.getDay()];


       
    
    