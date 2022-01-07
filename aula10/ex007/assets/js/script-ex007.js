const button = document.querySelector("button")
button.addEventListener("click", printOnScreen)

const input1 = document.querySelector(".input1")
const input2 = document.querySelector(".input2")

const result = document.querySelector(".result")

const isEmpty = () => input1.value && input2.value;

const convertElement = (htmlElement) => Number(htmlElement.value);

const sum = (x, y) => convertElement(x) + convertElement(y);

function clean()
{
  input1.value = ""
  input2.value = ""
}

function printOnScreen()
{
  if (isEmpty())
    result.innerHTML = `${input1.value} + ${input2.value} = ${sum(input1,input2)}`

  clean()
}