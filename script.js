$(document).ready(function () {
//   console.log("Hello World");

  // DOM VARIABLES

var timeBlockContainer = $(".time-block");
var timeSlots = ["9:00 am", "10:00 am", "11:00 am", "12:00 pm", "1:00 pm", "2:00 pm", "3:00 pm", "4:00 pm", "5:00 pm"];
var timesInMilitary = [9, 10, 11, 12, 13, 14, 15, 16, 17];
var currentHour = moment().format("H");
var thisTime = $(".thisHour");
var saveBtn = $(".saveBtn");

//   Time on header
function getHeader() {
    var currentHeader = moment().format('dddd, MMMM Do');
    console.log(currentHeader);
    $("#currentDay").text(currentHeader);
};


//   var currentDay = $("#currentDay").on("click", function() {
// console.log("clicked");
//   });
//   var hour = $(".hour").on("click", function () {
//     console.log("clicked");
//   });
//   var row = $(".row").on("click", function () {
//     console.log("clicked");
//   });

//   var textarea = $("textarea").on("click", function () {
//     console.log("clicked");
//   });


// Creating time-blocks using a for loop

// timeSlots.forEach(function(thisTime){




for (var i = 0; i < timeSlots.length; i++){

    var rowTimeEl = $("<div>").addClass("row time-block");
    var rowHourEl = $("<div>").addClass("hour col-sm-1").text(timeSlots[i]); 
    var textInput = $("<div>").addClass("col-sm-10");

    rowTimeEl.append(rowHourEl, textInput);
    timeBlockContainer.append(rowTimeEl);



    var textAreaEl = $("<textarea>").attr("id", timesInMilitary[i]).css({"width": "100%", "height": "100%"});
    console.log(textAreaEl)
    textInput.append(textAreaEl);
    console.log($(textAreaEl).attr("id"));
    currentHour = parseInt(currentHour);
    timeBlockHour = parseInt($(textAreaEl).attr("id"));
    if (timeBlockHour < currentHour){
        $(textAreaEl).attr (
            "class", "past"
        );
    } else if (timeBlockHour === currentHour) {
        $(textAreaEl).attr (
            "class", "present"
        );
    } else if (timeBlockHour > currentHour) {
        $(textAreaEl).attr(
            "class", "future"
        );
    }
    var saveBtn = $("<button>").attr("class", "col-sm-1 saveBtn").html('<i class="fab fa-diaspora"></i>');
    rowTimeEl.append(saveBtn);
    console.log(saveBtn);
// });
        saveBtn.on("click", function(){
            var savedInfo = ($(this).data("id"));
            console.log("clicked");
            console.log("id", savedInfo);
        })
    };
   
   
        // Function call for header
getHeader();
      });
     
        



    

  






   
    



// var timeSlots = ["9:00 am", "10:00 am", "11:00 am", "12:00 pm", "1:00 pm", "2:00 pm", "3:00 pm", "4:00 pm", "5:00 pm"];
// for (i = 0; i < timeSlots.length; i++) {
//     var hour = $(".hour");
//     hour.text(timeSlots[i]);
//     $(".hour").append(timeSlots);
//   hour.text(timeSlots[i]);

// }

// function renderPlanner(){
//     var currentTime = moment().format('H');
//     var currentClass = "";
//     var isDisabled = "";
//     for(i=0; i<9; i++){
//         var time = twelveHr(9 + i)
//         if (currentTime > (9 + i)){
//             currentClass = "past";
//             isDisabled = "disabled";
//         } else if (currentTime == (9 + i)) {
//             currentClass = "present";
//             isDisabled = "";
//         } else {
//             currentClass = "future";
//             isDisabled = "";
//         }
//         if(myStorage.getItem(time) == null){
//             myStorage.setItem(time, " ");
//         };
//     };
// };


// function saveReminders() {
//     localStorage.setItem("timeSlots", JSON.stringify(timeSlots));
// }

// saveReminders();

//   timeSlots.forEach(function(thisHour) {
//     // creates timeblocks row
//     var hourRow = $("<form>").attr({
//         "class": "row"
//     });
//     $(".container").append(hourRow)});


//   function dailyTimeBlock(){
  
//   }
  // JS VARIABLES

  // FUNCTION DEFINITIONS

  // FUNCTION CALLS

  // EVENT LISTENER

