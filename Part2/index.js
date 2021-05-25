console.log("test");

let idInput = document.getElementById('idInput');
let colorInput = document.getElementById('colorInput');
let submitBtn = document.querySelector('#submitBtn');

submitBtn.addEventListener('click', setCard);

function setCard() {
  let card = document.getElementById(idInput.value);
  card.style.color = colorInput.value;
}
