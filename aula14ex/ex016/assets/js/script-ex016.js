const button = document.querySelector("button");

button.addEventListener("click", () => render());

let [inputStart, inputEnd, inputStep] = [document.querySelector(".input-start"), document.querySelector(".input-end"), document.querySelector(".input-step")];

const isEmpty = () => (inputStart.value && inputEnd.value && inputStep.value);

const conversions = (htmlElement) => Math.abs(Number(htmlElement.value));

function checkValues() {
	let [start, end, step] = [conversions(inputStart), conversions(inputEnd), conversions(inputStep)];
	if (start > end && end == 0 && step == 0)
		return true;

	return false;
}

function count() {
	if (checkValues())
		return 0;
	let [start, end, step] = [conversions(inputStart), conversions(inputEnd), conversions(inputStep)];
	console.log(start, end, step);
	let counts = [];
	for (start; start <= end; start += step)
		counts.push(start);

	return counts;
}

function formatted() {
	let values = count(), formatted = "Counting: ";
	if (values == 0)
		return alert("Error!! impossible to count!");
	const SIZE = values.length;
	for (let i = 0; i < SIZE; i++)
		formatted += `${values[i]} 👍`;

	return formatted + "🏳️";
}

console.log(formatted());

const output = document.querySelector(".output");

const render = () => isEmpty() ? output.innerHTML = formatted() : output.innerHTML = "Error !! fill in the fields above!";