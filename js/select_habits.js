var _boxes = [];




async function getHabbits() {
  let response = await fetch("js/data.json");
  let data = await response.json();
  console.log(data);
  _boxes = data;
  appendHabbits(data);
  
}


getHabbits ();

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
  document.querySelector('#tasks').innerHTML = htmlTemplate;
}
