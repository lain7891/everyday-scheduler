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
            var value = ($(this).siblings("input").val());
            console.log(saveBtn);
            var time = ($(this).siblings(".hour").attr("id"));
            console.log("id", value);
           console.log($(this).siblings("input").val());
           console.log($(this).siblings(".hour").attr("id"));
            localStorage.setItem(time, value);
        })

        $("#H900AM").siblings("input").val(localStorage.getItem("H900AM"));
        $("#H1000AM").siblings("input").val(localStorage.getItem("H1000AM"));
        $("#H1100AM").siblings("input").val(localStorage.getItem("H1100AM"));
        $("#H1200pM").siblings("input").val(localStorage.getItem("H1200pM"));
        $("#H100pM").siblings("input").val(localStorage.getItem("H100pM"));
        $("#H200pM").siblings("input").val(localStorage.getItem("H200pM"));
        $("#H300pM").siblings("input").val(localStorage.getItem("H300pM"));
        $("#H400pM").siblings("input").val(localStorage.getItem("H400pM"));
        $("#H500pM").siblings("input").val(localStorage.getItem("H500pM"));
    };
   
   
   
        // Function call for header
getHeader();

      });
     
        



    

  






   
    



