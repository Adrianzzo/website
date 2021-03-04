document.querySelector('.mass-button').addEventListener
('click', function (event) {
event.target.innerText = 'CLICKED';
});

const inputColor = document.querySelector('.color-input');
const paragraphColor = document.querySelector('.color-box');

inputColor.addEventListener("change", function() {
paragraphColor.style.backgroundColor = inputColor.value;
});

const inputo = document.querySelector('.input-here');
const paragrapho = document.querySelector('.p-for-input');

inputo.addEventListener("keyup", function() {
paragrapho.innerText = inputo.value;
});

const toChange = document.querySelectorAll('.js-target');
for (let i = 0; i < toChange.length; i++) {
const currentElem = toChange[i];
currentElem.innerText ="Modified by javascript!";
}

let cars = ["Citroen", "Toyota", "Fiat", "Opel"];

cars.unshift(["Seat"]);
cars.push(["Volvo"]);

document.getElementById('demo1').innerHTML= cars.join(", ");

  const monthlyRent = 500;
  const yearlyRent = monthlyRent * 12;
  document.getElementById("demo").innerHTML= "My yearly rent worths " + yearlyRent + ".";


function greet(firstName = "Adrian", lastName = "Iacob", greeting = "Salutations", honorific = "Lord") {


  return `${greeting} ${honorific} ${lastName}, I'm pleased you could join us ${honorific}.`;
}
document.getElementById('demo1').innerHTML= greet();

const button = document.querySelector('.event-button');
button.addEventListener('click', function() {
alert("Hey there!");
});
