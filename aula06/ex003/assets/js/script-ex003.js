const input1 = document.querySelector(".input-1");
const input2 = document.querySelector(".input-2");
const button = document.querySelector("button");
const result = document.querySelector(".result");

button.addEventListener("click", printResult);

const isEmpty = () => input1.value || input2.value;

const convertElement = htmlElement => Number(htmlElement.value);

function sum(x, y)
{
  x = convertElement(input1);
  y = convertElement(input2);

  return x + y;
}

function clean()
{
  input1.value = "";
  input2.value = "";
}

function printResult()
{
  if (isEmpty())
    result.innerHTML = `${convertElement(input1)} + ${convertElement(input2)} = ${sum(input1, input2)}`;

  clean();
}