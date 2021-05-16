// Display current day in the header 
var currentDay = $("#currentDay");
currentDay.text (moment().format('dddd, MMM, Do, YYYY'));

// Display current hour
var currentHour = moment().hour();

// Time-Block Text Areas
$(".time-block").each(function() {
// value of each hour
var blockHour = $(this).attr("id");
// Get value from local storage and display in Time-Block text area
var textEntry = localStorage.getItem(blockHour);
var textArea = $(this).find(".description");
textArea.val (textEntry);
});