var leapYear = function(year) {
  if ((year % 4 === 0) && (year % 100 !==)) {
    return true;
  } else {
    return false;
  }
};

// User-Interface Logic Starts Here

$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    event.preventDefault();
    var year = parseInt($("input#year").val());
    var result = leapYear(year);
    $("#result").text(result);
  });
});
