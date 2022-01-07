// var numero = Number(prompt("Digite um número com ponto flutante"))
// alert(`O número informado: ${numero} / Formatado: ${numero.toFixed(2).replace(".", ",")}`)
// document.write(`${numero.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`) // 'USD', 'EUR'

const button1 = document.querySelector(".button-1");
button1.addEventListener("click", printOnScreen);

const button2 = document.querySelector(".button-2");
button2.addEventListener("click", printOnScreen);

const input1 = document.querySelector(".input-1");
const input2 = document.querySelector(".input-2");

const isEmpty = () => input1.value || input2.value;

const convertElement = (htmlElement) => htmlElement.value;

function clean()
{
  input1.value = "";
  input2.value = "";
}

const result1 = document.querySelector(".result-1");
const result2 = document.querySelector(".result-2");

function printOnScreen()
{
  if (isEmpty())
  {
    result1.innerHTML = `Your name is: ${convertElement(input1)}`;
    result2.innerHTML = `Formatted value: ${convertElement(input2)}`;
  }
  clean();
}