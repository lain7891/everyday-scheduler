$(document).ready(function () {
//   console.log("Hello World");

  // DOM VARIABLES

//   var $rowDiv = $('<div>');
//   $rowDiv.addClass("row");
//   $rowDiv.addClass("hour");
//   $rowDiv.addClass("time-block");
//   $rowDiv.addClass("saveBtn");
var test = false

  var currentDay = $("#currentDay").on("click", function() {
console.log("clicked");
  });
  var hour = $(".hour").on("click", function () {
    console.log("clicked");
  });
  var row = $(".row").on("click", function () {
    console.log("clicked");
  });

  var textarea = $("textarea").on("click", function () {
    console.log("clicked");
  });


// var todaysDate = moment().format('MMMM Do YYYY');
// console.log(todaysDate);


// var dateHour24 = moment().format('H');
//   var dateHour12 = moment().format('h');

//   if (test) {
//     todaysDateHour24 = 13;
//     todaysDateHour12 = 1;
//   }

//   var $dateSlot = $(".currentDay");
//   $dateSlot.text(todaysDate);

 function getHeader() {
    var currentHeader = moment().format('dddd, MMMM Do');
    console.log(currentHeader);
    $("#currentDay").text(currentHeader);
};

getHeader();


  var timeSlots = ["9:00 am", "10:00 am", "11:00 am", "12:00 pm", "1:00 pm", "2:00 pm", "3:00 pm", "4:00 pm", "5:00 pm"];
  for (i = 0; i < timeSlots.length; i++) {
    hour.text(timeSlots[i]);
  }

//   function dailyTimeBlock(){
  
//   }
  // JS VARIABLES

  // FUNCTION DEFINITIONS

  // FUNCTION CALLS

  // EVENT LISTENER
});
