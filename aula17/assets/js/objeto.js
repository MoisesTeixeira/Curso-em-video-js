// let amigo = []; // typeof = object
// let amigo = {}; // typeof = object

let amigo =
{ nome: "Moisés",
	sexo: "M",
	peso: 65.5,
	engordar(p = 0) {
		this.peso += p;
	}};

amigo.engordar(2);

console.log(`${amigo.nome} pesa: ${amigo.peso}`);