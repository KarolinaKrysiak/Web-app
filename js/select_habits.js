var _habits = [];
var _mainHabits = [];
let _favHabits = [];



async function getHabits() {
  let response = await fetch("js/data.json");
  let data = await response.json();
console.log(data)
  _habits = data;
  appendHabits(data);
}
getHabits();



function appendHabits(habits) {
  let html = "";
  for (const habit of habits) {
    html += /*html*/ `
<article>

      <img src="${habit.icon}">
        <h4>${habit.name}</h4>
        <p >${habit.tag}</p>
        ${generateFavhabitButton(habit.id)}
        </article>
    `;
 
  }
  document.querySelector('#container_slct').innerHTML = html;
}

// function addMainHb (){
//  document.querySelector("container_tsk").innerHTML +=/*html*/ `
  //<article onclick="addMainHb(${habit.id})">
//
  //    <img src="${habit.icon}">
    //    <h4>${habit.name}</h4>
      //  <p >${habit.tag}</p>
//
//        </article>
//`;

//}



function search(value) {
  let searchQuery = value.toLowerCase();
  let filteredHabits = [];
  for (let habit of _habits) {
    let name = habit.name.toLowerCase();
    let tag  = habit.tag.toLowerCase();
    if (name.includes(searchQuery) || tag.includes(searchQuery)) {
      filteredHabits.push(habit);
    }
  }
  appendHabits(filteredHabits);
}


/* ---------- Main page tasks ---------- */

/**
 * Appending fav habits to the DOM by looping through _favHabits
 */
function appendFavHabits() {
  let html = "";
  for (const habit of _favHabits) {
    console.log(habit);
    html += /*html*/`
      <article>
      <img src="${habit.icon}">
      <h4>${habit.name}</h4>
      <p >${habit.tag}</p>

       ${generateFavhabitButton(habit.id)}
      </article>
    `;
  }
  // if no habits display a default text
  if (_favHabits.length === 0) {
    html = "<p>No habits added</p>"
  }
  document.querySelector("#container_tsk").innerHTML = html;
}

/**
 * Generating the fav button
 */
function generateFavhabitButton(habitId) {
  let btnTemplate = `
    <button class="move-buttons" onclick="addToFavourites('${habitId}')">✔</button>`;
  if (isFavhabit(habitId)) {
    btnTemplate = `
      <button onclick="removeFromFavourites('${habitId}')" class="rm move-buttons">✖</button>`;
  }
  return btnTemplate;
}

/**
 * Adding habit to favorites by given habitId
 */
function addToFavourites(habitId) {
  let favhabit = _habits.find(habit => habit.id === habitId);
  _favHabits.push(favhabit);
  appendHabits(_habits); // update the DOM to display the right button
  appendFavHabits(); // update the DOM to display the right items from the _favHabits list
}

/**
 * Removing habit from favorites by given habitId
 */
function removeFromFavourites(habitId) {
  _favHabits = _favHabits.filter(habit => habit.id !== habitId);
  appendHabits(_habits); // update the DOM to display the right button
  appendFavHabits(); // update the DOM to display the right items from the _favHabits list
}

/**
 * Checking if habit already is added to _favHabits
 */
function isFavhabit(habitId) {
  return _favHabits.find(habit => habit.id === habitId); // checking if _favHabits has the habit with matching id or not
}