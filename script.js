$(document).ready(function () {
  // populates current date when dom is loaded
  var dateParagraph = $("#currentDay");
  var todayDate = moment().format("dddd, MMMM Do YYYY");
  dateParagraph.text(todayDate);
});

//button to clear local storage and refresh the page
$("#clear").click(function () {
  localStorage.clear();
  location.reload();
});
