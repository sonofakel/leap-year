// Business/Backend logic here

var leapYear = function(year) {
  return false;
}


$(function() {
  $("#leap-form").submit(function(event){
    event.preventDefault();
    var year = parseInt($("input#year").val());
    var result = leapYear(year);
    $("#result").text(result);
  });
});
