const input = document.querySelector("input");
const button = document.querySelector("button");
const result = document.querySelector(".result");

button.addEventListener("click", () => printResult());

const convertElement = htmlElement => htmlElement.value;

const clean = () => {input.value = ""};

const printResult = () => {
  if (input.value)
    result.innerHTML = `Seu nome é: ${convertElement(input)}!`;

  clean()
}