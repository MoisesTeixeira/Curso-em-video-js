const button = document.querySelector("button");
button.addEventListener("click", printOnScreen);

const inputYear = document.querySelector(".input-year");

const inputSex = document.getElementsByName("sex");

const isEmpty = () => inputYear.value && (inputSex[0].checked || inputSex[1].checked);

const conversions = (htmlElement) => Math.abs(Number(htmlElement.value));

const date = new Date();

const currentYear = date.getFullYear();

const calculateAge = (year) => year - conversions(inputYear);

function checkLifeStage(age) {
	if (age < 1)
		return 0;

	if (age < 10)
		return 1;

	if (age < 21)
		return 2;

	if (age < 50)
		return 3;

	return 4;
}

const checkSex = () => inputSex[0].checked ? "Man" : "Woman";

function provideImages() {
	const manImages = [5422779, 1697847, 8590251, 2182970, 9923562];
	const womanImages = [5422779, 1087722, 7275385, 7490734, 3778171];

	let sex = checkSex();

	if (sex == "Man")
		return manImages;

	return womanImages;
}

function insertImage(index) {
	const images = provideImages();

	for (let i = 0; i < 6; i++)
		if (index == i)
			return `https://images.pexels.com/photos/${images[i]}/pexels-photo-${images[i]}.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260`;
}

function provideMessage(index) {
	const sex = checkSex();
	const age = calculateAge(currentYear);

	const messages = ["!ERROR!", `Child ${sex} ${age} years`, `Young ${sex} ${age} years`, `Adult ${sex} ${age} years`, `Old ${sex} ${age} years`];

	for (let i = 0; i < 6; i++)
		if (index == i)
			return messages[i];
}

const img = document.querySelector("img");

const setImage = (image) => img.src = image;

function formatted() {
	const option = checkLifeStage(calculateAge(currentYear));

	for (let i = 0; i < 6; i++)
		switch (option) {
		case 0:
			setImage(insertImage(i)); return provideMessage(i);
		case i:
			switch (checkSex()) {
			case "Man": setImage(insertImage(i));
				break;
			case "Woman": setImage(insertImage(i));
				break;
			} return provideMessage(i);
		}
}

function printOnScreen() {
	const result = document.querySelector(".result");
	
	if (isEmpty())
		result.innerHTML = formatted();
}