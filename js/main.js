"use strict";

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// ========== CREATE ==========
// create a habit
function createHabit() {
  // references to the input fields
  let habitInput = document.querySelector("#name");
  let descriptionInput = document.querySelector("#mail");

  let newHabit = {
    habit: habitInput.value,
    description: descriptionInput.value,
  };

  _habitRef.add(newHabit);
  navigateTo("home");
}
