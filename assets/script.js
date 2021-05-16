// Display current day in the header 
var currentDay = $("#currentDay");
currentDay.text (moment().format('dddd, MMM, Do, YYYY'));

// Display current hour
var currentHour = moment().hour();

