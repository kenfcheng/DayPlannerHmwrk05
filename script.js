// Clears info/refresh
$("#clear").click(function () {
  localStorage.clear();
  location.reload();
});

$("#currentDay").text(moment().format("dddd MMMM Do"));

//Saves text input to timeslots

const input_textarea1 = document.querySelector("#note1");
const save_button1 = document.querySelector("#saveNote1");
//retrieves old text
input_textarea1.value = localStorage.getItem("content1");
//Input placed in local storage
saveNote1.addEventListener("click", updateOutput1);
//Input placed in local storage
function updateOutput1() {
  localStorage.setItem("content1", input_textarea1.value);
}

const input_textarea2 = document.querySelector("#note2");
const save_button2 = document.querySelector("#saveNote2");
//retrieves old text
input_textarea2.value = localStorage.getItem("content2");
//Input placed in local storage
saveNote2.addEventListener("click", updateOutput2);
//Input placed in local storage
function updateOutput2() {
  localStorage.setItem("content2", input_textarea2.value);
}

const input_textarea3 = document.querySelector("#note3");
const save_button3 = document.querySelector("#saveNote3");
//retrieves old text
input_textarea3.value = localStorage.getItem("content3");
//Input placed in local storage

saveNote3.addEventListener("click", updateOutput3);
//sets the input of text area into local storage
function updateOutput3() {
  localStorage.setItem("content3", input_textarea3.value);
}

const input_textarea4 = document.querySelector("#note4");
const save_button4 = document.querySelector("#saveNote4");
//retrieves old text
input_textarea4.value = localStorage.getItem("content4");
//Input placed in local storage
saveNote4.addEventListener("click", updateOutput4);
//sets the input of text area into local storage
function updateOutput4() {
  localStorage.setItem("content4", input_textarea4.value);
}

const input_textarea5 = document.querySelector("#note5");
const save_button5 = document.querySelector("#saveNote5");
//retrieves old text
input_textarea5.value = localStorage.getItem("content5");
//Input placed in local storage
saveNote5.addEventListener("click", updateOutput5);
//sets the input of text area into local storage
function updateOutput5() {
  localStorage.setItem("content5", input_textarea5.value);
}

const input_textarea6 = document.querySelector("#note6");
const save_button6 = document.querySelector("#saveNote6");
//retrieves old text
input_textarea6.value = localStorage.getItem("content6");
//Input placed in local storage
saveNote6.addEventListener("click", updateOutput6);
//sets the input of text area into local storage
function updateOutput6() {
  localStorage.setItem("content6", input_textarea6.value);
}

const input_textarea7 = document.querySelector("#note7");
const save_button7 = document.querySelector("#saveNote7");
//retrieves old text
input_textarea7.value = localStorage.getItem("content7");
//Input placed in local storage
saveNote7.addEventListener("click", updateOutput7);
//sets the input of text area into local storage
function updateOutput7() {
  localStorage.setItem("content7", input_textarea7.value);
}

const input_textarea8 = document.querySelector("#note8");
const save_button8 = document.querySelector("#saveNote8");
//retrieves old text
input_textarea8.value = localStorage.getItem("content8");
//Input placed in local storage
saveNote8.addEventListener("click", updateOutput8);
//sets the input of text area into local storage
function updateOutput8() {
  localStorage.setItem("content8", input_textarea8.value);
}

const input_textarea9 = document.querySelector("#note9");
const save_button9 = document.querySelector("#saveNote9");
//retrieves old text
input_textarea9.value = localStorage.getItem("content9");
//Input placed in local storage
saveNote9.addEventListener("click", updateOutput9);
//sets the input of text area into local storage
function updateOutput9() {
  localStorage.setItem("content9", input_textarea9.value);
}

//Time Color Code
let now = new Date().getHours();

if (now > 9) {
  $("#note1").addClass("past");
} else if (now >= 9 && now < 10) {
  $("#note1").addClass("present");
} else if (now < 9) {
  $("#note1").addClass("future");
}

if (now > 10) {
  $("#note2").addClass("past");
} else if (now >= 10 && now < 11) {
  $("#note2").addClass("present");
} else if (now < 10) {
  $("#note2").addClass("future");
}

if (now > 11) {
  $("#note3").addClass("past");
} else if (now >= 11 && now < 12) {
  $("#note3").addClass("present");
} else if (now < 11) {
  $("#note3").addClass("future");
}

if (now > 12) {
  $("#note4").addClass("past");
} else if (now >= 12 && now < 13) {
  $("#note4").addClass("present");
} else if (now < 12) {
  $("#note4").addClass("future");
}

if (now > 13) {
  $("#note5").addClass("past");
} else if (now >= 13 && now < 14) {
  $("#note5").addClass("present");
} else if (now < 13) {
  $("#note5").addClass("future");
}

if (now > 14) {
  $("#note6").addClass("past");
} else if (now >= 14 && now < 15) {
  $("#note6").addClass("present");
} else if (now < 14) {
  $("#note6").addClass("future");
}

if (now > 15) {
  $("#note7").addClass("past");
} else if (now >= 15 && now < 16) {
  $("#note7").addClass("present");
} else if (now < 15) {
  $("#note7").addClass("future");
}

if (now > 16) {
  $("#note8").addClass("past");
} else if (now >= 16 && now < 17) {
  $("#note8").addClass("present");
} else if (now < 16) {
  $("#note8").addClass("future");
}

if (now > 17) {
  $("#note9").addClass("past");
} else if (now >= 17 && now < 18) {
  $("#note9").addClass("present");
} else if (now < 17) {
  $("#note9").addClass("future");
}
