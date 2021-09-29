var _boxes = [];

async function getHabbits() {
  let response = await fetch("js/data.json");
  let data = await response.json();
  console.log(data);
  _boxes = data;
  appendHabbits(data);
}

getHabbits();

function appendHabbits(habbits) {
  let htmlTemplate = "";
  for (let habbit of habbits) {
    htmlTemplate += /*html*/ `
      <article>
      <img src="${habbit.icon}" >
        <p> ${habbit.name} </p>
        <p>${habbit.tag}  </p>
      </article>
    `;
  }
  document.querySelector("#tasks").innerHTML = htmlTemplate;
}

// ========== CREATE ==========
// create a habit
function add() {
  // references to the input fields
  let nameInput = document.querySelector("#name");
  let tagInput = document.querySelector("#tag");
  let descriptionInput = document.querySelector("#description");
  let repetitionInput = document.querySelector("#repetition");
  let timeInput = document.querySelector("#time");

  let newHabit = {
    name: nameInput.value,
    tag: tagInput.value,
    description: descriptionInput.value,
    repetition: repetitionInput.value,
    time: timeInput.value,
  };

  _boxes.push(newHabit);
  appendHabbits(_boxes);
}
