//date,day

var currentday = moment().format("M/D/YYYY");
console.log(currentday);
$("#currentDay").html(currentday);
//add click function
$(document).ready(function() {


$(".time-block").each(function(){
    
    var rowhour = parseInt($(this).attr("id"))
    if(rowhour<moment().hours()){
        $(this).addClass("past")
    }
    else if (rowhour===moment().hours()){
        $(this).addClass("present")
    }
    else {
        $(this).addClass("future")
    }
})
$(".saveBtn").on ("click",function(){
    
    var time = $(this).parent().attr("id");
    console.log(time)
    var text = $(this).siblings(".description").val();
    console.log(text)
    localStorage.setItem(time,text);
})
    $("#10 .description").val(localStorage.getItem("10"))
    $("#11 .description").val(localStorage.getItem("11"))
    $("#12 .description").val(localStorage.getItem("12"))
    $("#13 .description").val(localStorage.getItem("13"))
    $("#14 .description").val(localStorage.getItem("14"))
    $("#15 .description").val(localStorage.getItem("15"))
    $("#16 .description").val(localStorage.getItem("16"))
    $("#17 .description").val(localStorage.getItem("17"))
})


        