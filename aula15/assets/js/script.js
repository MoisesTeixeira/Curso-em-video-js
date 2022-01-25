const [BUTTON, INPUT] = [document.querySelector("button"), document.querySelector("input")];

const isEmpty = (input) => input.value;

const conversions = (htmlElement) => Number(htmlElement.value);

function addAttempts(input) {
	let attemptOfTime = conversions(input), attempts = [];
	for (let i = 0; i < 3; i++)
		attempts.push(attemptOfTime);

	return attempts;
}

const generateLuckyNumber = (min, max) => Number(Math.floor(Math.random() * (max - min + 1)) + min);

let drawnNumber = generateLuckyNumber(0, 10);

function checkAttempt() {
	let getAttempts = addAttempts(INPUT);
	const LENGHT = getAttempts.length;
	for (let i = 0; i < LENGHT; i++)
		return getAttempts[i] == drawnNumber ? "V" : "X";
}

function formating() {
	let option = checkAttempt();
	switch (option) {
	case "V": return `Drawn Number: ${drawnNumber} Congratulations you got it right!`;
	case "X": return "Try again you were wrong!";
	}
}

BUTTON.addEventListener("click", () => {
	let output = document.querySelector(".output");
	if (isEmpty(INPUT))
		output.innerHTML = formating();
});

// let number = [6, 2, 5, 100];

// number.sort();
// number.push(4);

// number.push(20);
// number.sort();

// console.log(`O comprimento do array é [${number.length}]`);

// console.log(`O valor do elemento na posição do index 2 é [${number[2]}] `);

// console.log(number); // elementos formatados -> [1 ,7 , 0]

// console.log(number[0]); // elemento sem formatação -> 6

// for (let i = 0; i < number.length; i++) { // elementos serão imprimidos sem formatação
// 	console.log(`Index [${i}] Valor : ${number[i]}`); // aqui foi formatado manualmente
// }

// for (let i in number) // funciona para array/object mas
// 	console.log(`Index [${i}] Valor : ${number[i]}`);

// let position = number.indexOf(100); // se o valor existir ele retornará o index que no caso é o 3 se não -1
// console.log(position);