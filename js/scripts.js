// Business/Backend logic here

var leapYear = function(year) {
  if (year % 4 === 0 && !(year % 100 === 0)) {
    return true;
  } else if (year % 400 === 0){
    return true;
  } else {
  return false;
  }
};


$(function() {
  $("#leap-form").submit(function(event){
    event.preventDefault();
    var year = parseInt($("input#year").val());
    var result = leapYear(year);
    $("#result").text(result);
  });
});
