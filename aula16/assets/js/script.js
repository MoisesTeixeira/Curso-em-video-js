// function parImpar(number) {
// 	if (number % 2 == 0)
// 		return "Par!";

// 	return "Ímpar!";
// }

// function parImpar(number) {
// 	return number % 2 == 0
// 		? "Par!"
// 		: "Ímpar";
// }

// let parImpar = (number) => number % 2 == 0 ? "Par!" : "Ímpar!";

// console.log(parImpar(11));

// let sum = (numberOne = 0, numberTwo = 0) => numberOne + numberTwo;

// console.log(sum());

// let double = function(number) {
// 	return number * 2;
// };

// console.log(double(3));

// function factorial(number) {
// 	// 5! = 5 x 4 x 3 x 2
// 	let factorial = 1;
// 	for (let i = number; i > 1; i--)
// 		factorial *= i;

// 	return factorial;
// }

// function factorial(number) {
// 	if (number == 1)
// 		return 1;

// 	return number * factorial(number - 1);
// }

// RECURSIVIDADE
const factorial = (number) => number == 1 ? 1 : number * factorial(number - 1);

// 5! = 5 x 4 x 3 x 2 x 1
// 5! = 5 x 4!

// n! = n x (n - 1)!
// 1! = 1

console.log(factorial(5));