// Display current day in the header 
var currentDay = $("#currentDay");
currentDay.text (moment().format('MMMM Do YYYY, h:mm:ss a'));


// Time-Block Text Areas
$(".time-block").each(function() {
// value of each hour
var blockHour = $(this).attr("id");
// Get value from local storage and display in Time-Block text area
var textEntry = localStorage.getItem(blockHour);
var textArea = $(this).find(".description");
textArea.val (textEntry);
// Current hour to Time Block conditional statements
// add class to dsiplay correct color
if (blockHour < currentDay) {
    $(this).find(".description").addClass("past");
}
else if (blockHour == currentHour) {
    $(this).find(".description").addClass("present");
}
else {
    $(this).find(".description").addClass("future");
}

});

// Function for clicking Save Button 
$(".saveBtn").on("click", function() {
var key = $
});