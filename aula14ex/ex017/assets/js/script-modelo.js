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
	let results = multiplication(), message = "", number = conversions(INPUT);
	const LENGTH = results.length;
	for (let i = 0; i < LENGTH; i++)
		message += `${number} x ${i} = ${results[i]}\n`;

	return message;
}

function render() {
	let textArea = document.querySelector("textarea");
	if (isEmpty(INPUT))
		textArea.innerHTML = formatting();
}