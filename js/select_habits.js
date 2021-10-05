var _boxes = [];
var _mainBoxes = [];


async function getHabbits() {
  let response = await fetch("js/data.json");
  let data = await response.json();
console.log(data)
  _boxes = data;
  appendHabbits(data);
}

getHabbits();

function appendHabbits(habbits) {
  let htmlTemplate = "";
  for (let habbit of habbits) {
    htmlTemplate += /*html*/ `
<article onclick="putHabbitToMain(${habbit.id})">
      <img src="${habbit.icon}">
        <h4>  ${habbit.name}  </h4>
        <p>  ${habbit.tag}  </p>
        </article>
    `;
 
  }
  document.querySelector('#container_slct').innerHTML = htmlTemplate;
}



function appendMainHabbit() {
  let html = "";
  for (const habbit of _mainBoxes) {

    html += /*html*/`
    <article>
    <img src="${habbit.icon}">
      <p>  ${habbit.name}  </p>
      <p>  ${habbit.tag}  </p>
      </article>
    `;
  }
  // if no movies display a default text
  if (_mainBoxes.length === 0) {
    html = "<p>No movies added to favorites</p>"
  }
  document.querySelector("#container_tsk").innerHTML = html;
}
appendMainHabbit()


function search(value) {
  let searchQuery = value.toLowerCase();
  let filteredHabbits = [];
  for (let habbit of _boxes) {
    let name = habbit.name.toLowerCase();
    let tag  = habbit.tag.toLowerCase();
    if (name.includes(searchQuery) || tag.includes(searchQuery)) {
      filteredHabbits.push(habbit);
    }
  }
  appendHabbits(filteredHabbits);
}

function putHabbitToMain (id) {
  let addHabbit = _boxes.find(habbit => habbit.id === id);
  _mainBoxes.push(addHabbit)
  navigateTo("tasks")
}