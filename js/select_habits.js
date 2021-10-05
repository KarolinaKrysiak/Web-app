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
  let html = "";
  for (let habbit of habbits) {
    html += /*html*/ `
<article >

      <img src="${habbit.icon}">
        <h4>${habbit.name}</h4>
        <p >${habbit.tag}</p>

        </article>
    `;
 
  }
  document.querySelector('#container_slct').innerHTML = html;
}

function addMainHb (){
  document.querySelector("container_tsk").innerHTML +=/*html*/ `
  <article onclick="addMainHb(${habbit.id})">

      <img src="${habbit.icon}">
        <h4>${habbit.name}</h4>
        <p >${habbit.tag}</p>

        </article>
`;

}



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