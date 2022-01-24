const [ BUTTON, INPUT] = [ document.querySelector("button"), document.querySelector("input")];

BUTTON.addEventListener("click", render);

const isEmpty = (input) => input.value;

const conversions = (htmlElement) => Number(htmlElement.value);

function multiplication() {
	let number = conversions(INPUT), getResults = [];
	const MULTIPLIER = 10;
	for (let i = 0; i <= MULTIPLIER; i++)
		getResults[i] = number * i;

	return getResults;
}

function formatting() {
	let results = multiplication(), message = "", number = conversions(INPUT), getMessages = [];
	const LENGTH = results.length;
	for (let i = 0; i < LENGTH; i++) {
		message = `${number} x ${i} = ${results[i]}`;
		getMessages[i] = message;
	}
	return getMessages;
}

let select = document.querySelector("select");

const clear = () => select.innerHTML = "";

function render() {
	let messages = formatting();
	const LENGTH = messages.length;
	if (isEmpty(INPUT)) {
		clear();
		for (let i = 0; i < LENGTH; i++) {
			let item = document.createElement("option");
			item.text = messages[i];
			select.appendChild(item);
		}
	}
}