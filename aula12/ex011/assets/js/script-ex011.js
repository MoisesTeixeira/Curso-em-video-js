const button = document.querySelector("button");
button.addEventListener("click", printOnScreen);

const input = document.querySelector("input");

const isEmpty = () => input.value;

const conversions = (htmlElement) => Math.abs(Number(htmlElement.value));

function checkAge(age) {
  if (age < 1)
    return 4;

  if (age < 16)
    return 1;

  if (age < 18)
    return 2;

  if (age < 71)
    return 3;

  if (age < 123)
    return 2;

  return 4;
}

function formatted() {
  const age = conversions(input);
  const option = checkAge(age);
  switch (option) {
    case 1: return `For age ${age} is (Don't vote) !!!`
    case 2: return `For age ${age} is (Optional) !!!`;
    case 3: return `For age ${age} is (Mandatory) !!!`;
    case 4: return `For age ${age} is (Invalid) !!!`;
  }
}

const clean = () => input.value = "";

const result = document.querySelector(".result");

function printOnScreen() {
  if (isEmpty())
    result.innerHTML = formatted();

  clean()
}