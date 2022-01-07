const imput = document.querySelector(".input");
const button = document.querySelector(".enviar");
const result = document.querySelector(".result");

button.addEventListener("click", () => printResult());

const convertElement = htmlElement => htmlElement.value;

const literalValue = () => convertElement(imput);

const clean = () => {imput.value = ""};

const printResult = () => {
  if (literalValue())
    result.innerHTML = `Seu nome é: ${literalValue()}!`;

  clean();
}