const button = document.querySelector("button");
button.addEventListener("click", printOnScreen);

const input = document.querySelector("input");

const isEmpty = () => input.value;

const conversions = (htmlElement) => Math.abs(Number(htmlElement.value));

function checkSpeed(speed) {
  const limit = 66, maximumSpeed = 256;
  if (speed < 1)
    return 1;

  if (speed < limit)
    return 2;

  if (speed < maximumSpeed)
    return 3;

  return 4;
}

const result = document.querySelector(".result");

const background = (color) => result.style.background = color;

function formatted() {
  const speed = conversions(input)
  const option = checkSpeed(speed);
  switch (option) {
    case 1: background("#ff0"); return `!ERROR! ${speed}Km/h Invalid!`;
    case 2: background("#0f0"); return `${speed}Km/h! There was no infraction!`;
    case 3: background("#f00"); return `${speed}Km/h! Fined!`;
    case 4: background("orange"); return `Valid maximum speed: 256Km/h!`;
  }
}

const clean = () => input.value = "";

function printOnScreen() {
  if (isEmpty())
    result.innerHTML = formatted();

  clean()
}

    // function radar()
    // {
    //     const limit = 60;

    //     (conversions(input) > limit)
    //         ? result.innerHTML = `multado`
    //         : result.innerHTML = `Dirija com segurança`
    // }