const INPUT = document.querySelector("input");

const conversions = (input) => Number(input.value);

function theValueIsAtTheLimit() {
	let value = conversions(INPUT);
	if (value >= 1 && value <= 100)
		return true;

	return false;
}

let listOfNumbers = [];

function theValueIsRepeated() {
	let value = conversions(INPUT);
	for (let i = 0; i < listOfNumbers.length; i++)
		if (value == listOfNumbers[i])
			return false;

	return true;
}

function addNumbers(input) {
	if (theValueIsAtTheLimit() && theValueIsRepeated()) {
		listOfNumbers.push(conversions(input));
		return true;
	}
	else
		return false;
}

const messageSucefful = () => alert("Sucefful!");

const messageError = () => alert("Error!");

const SELECT = document.querySelector("select");

function showOption() {
	let item = document.createElement("option");
	item.text = `Added value ${conversions(INPUT)}`;
	SELECT.appendChild(item);
}

let isEmpty = (input) => input.value;

const OUTPUT = document.querySelector(".output");

const BUTTON_ADD = document.querySelector(".add");

BUTTON_ADD.addEventListener("click", () => {
	if (isEmpty(INPUT) && addNumbers(INPUT)) {
		messageSucefful();
		addNumbers(INPUT);
		showOption();
		if (wasClicked()) {
			OUTPUT.innerHTML = "";
		}
		console.log(listOfNumbers);
	}
	else
		messageError();
});

function highestValue() {
	let larger = 0;
	for (let i = 0; i < listOfNumbers.length; i++)
		larger = Math.max(...listOfNumbers);

	return larger;
}

function lowerValue() {
	let lower = 0;
	for (let i = 0; i < listOfNumbers.length; i++)
		lower = Math.min(...listOfNumbers);

	return lower;
}

function sumAllValues() {
	let total = 0;
	for (let i = 0; i < listOfNumbers.length; i++)
		total += listOfNumbers[i];

	return total;
}

const average = () => sumAllValues() / listOfNumbers.length;

function formatting() {
	return `Number of entries ${listOfNumbers.length}<br><br>
	Highest value ${highestValue()}<br><br>
	Lower value ${lowerValue()}<br><br>
	Sum of all values ${sumAllValues()}<br><br>
	Average of values ${average()}`;
}

const BUTTON_GENERATE_ANALYSIS = document.querySelector(".generate-analysis");

function wasClicked() {
	BUTTON_GENERATE_ANALYSIS.addEventListener("click", () => {
		if (listOfNumbers.length)
			OUTPUT.innerHTML = formatting();
	});
	return true;
}
