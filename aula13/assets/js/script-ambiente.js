// var c = 1, d = 0;

// while (c <= 500) {
// 	console.log(d += 1);
// 	c++;
// }

// do {
// 	console.log(d += 1);
// 	c++;
// } while (c < 10);

const button = document.querySelector("button");
button.addEventListener("click", printOnScreen);

const input = document.querySelector("input");

const isEmpty = () => input.value;

const conversions = (htmlElement) => Math.abs(Number(htmlElement.value));

function checkNumber(informedNumber) {
	const drawnNumber = 5;

	if (drawnNumber === informedNumber)
		return "Congradulations!";

	return informedNumber;
}

function formatted() {
	const CHANCES = 10;
	const wrongNumber = checkNumber(conversions(input));
	let message = [];

	for (let i = 0; i <= CHANCES; i++) {
		if (i == wrongNumber)
			message[i] = "X";

		message[i] = "V";
	}

	return message;
}

function printOnScreen() {
	const output = document.querySelector(".output");

	if (isEmpty())
		output.innerHTML = formatted();
}