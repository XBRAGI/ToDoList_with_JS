// import './style.css'
// import { setupCounter } from './counter.js'
import './node_modules/bootstrap/dist/css/bootstrap.css'

const input = document.querySelector("input[type = 'text']");
const ul = document.getElementById("ul");
const lists = document.querySelectorAll("li");
const buttonAdd = document.getElementById("button-addon2");
const span = document.getElementById("spans");

buttonAdd.onclick = function(addText) {
	let li = document.createElement("li");
	li.textContent = input.value;
	let spanElement = document.createElement("span");
	let icon = document.createElement("i");
	input.value = '';
			
	icon.classList.add('bi', 'bi-trash3');
	spanElement.append(icon);
	ul.appendChild(li).append(spanElement);
	spanElement.id = "spans";
};

span.onclick = function(deleteText) {
	alert('работает')
}

