// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
const currentDateElement = $('#currentDay')
$(function () {
  const currentDate = dayjs().format('ddd MMMM DD, YYYY')
  console.log(currentDate)
   currentDateElement.text(currentDate)
   
   const currentHour = dayjs().format('H')
   console.log(currentHour)
 
  //  if hour is equal to current hour display color red else, if  hour is less than current hour display color gray, else ,hour is more than current hour display color green 
//   const rows = $("row");
// let currentHour = parseInt(moment().format('H'));

// Array.from(rows).forEach(row => {
//   let
//     rowIdString = row.id,
//     rowHour;
//   if (rowIdString) {
//     rowHour = parseInt(rowIdString);
//   }
//   if (rowHour) {
//     // Compares row id to current hour and sets color accordingly
//     if (currentHour === rowHour) {
//       setColor(row, "red");
//     } else if ((currentHour < rowHour) && (currentHour > rowHour - 6)) {
//       setColor(row, "green");
//     } else if ((currentHour > rowHour) && (currentHour < rowHour + 6)) {
//       setColor(row, "lightgrey");
//     } else {
//       setColor(row, "white");
//     }
//   }
// });

// function setColor(element, color) {
//   element.style.backgroundColor = color;
// }
   /*
   A conditional statement that checks every timeblock
   */

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
