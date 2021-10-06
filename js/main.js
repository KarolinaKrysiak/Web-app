"use strict";
//Karolina

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

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}


//--------------------------------------------------------------------------------------

// Mika 

/* global variables: _user _selectedUserId*/
let _user = [];
let _selectedUserId;

/*
Fetches json data from the file user.json
*/
async function getUser() {
  let response = await fetch("json/user.json");
  let data = await response.json();
  console.log(data);
  _user = data;
  appendUser(data);
}

getUser();

function appendUser(users) {
  let htmlTemplate = "";
  for (let user of users) {
    htmlTemplate += /*html*/ `
    <button onclick="goToEdit(${user.id})" id="edit-button">Edit info</button>
      <article class="${user.status}">
        <article>
          <img src="${user.img}">
          <h2>Name: ${user.name}</h2>
          <h3> Email: ${user.email}</h3>
        </article>
        
      </article>
    `;
  }
  document.querySelector("#user-container").innerHTML = htmlTemplate;
}

function goToEdit(id) {
  // save id in global variable
  _selectedUserId = id;
  // find user to edit by using array.find and id
  const userToEdit = _user.find((user) => user.id === _selectedUserId);
  // set input field values with the userToEdit properties
  document.querySelector("#nameEdit").value = userToEdit.name;
  document.querySelector("#emailEdit").value = userToEdit.email;
  document.querySelector("#imgEdit").value = userToEdit.img;
  //navigate to edit view
  navigateTo("editprofile");
}

function saveUser() {
  // find index of the user to update in _user
  let index = _user.findIndex((user) => user.id === _selectedUserId);
  // update values of user in array
  _user[index].name = document.querySelector("#nameEdit").value;
  _user[index].email = document.querySelector("#emailEdit").value;
  _user[index].img = document.querySelector("#imgEdit").value;
  // update dom usind appendUser()
  appendUser(_user);
  //navigating back
  navigateTo("products");
}

//--------------------------------------------------------------------------------------------