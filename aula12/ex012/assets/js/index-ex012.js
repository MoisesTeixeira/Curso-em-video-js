const button = document.querySelector("button");
button.addEventListener("click", printOnSecreen);

const date = new Date();

const currentSystemTime = date.getHours();

function checkTime(hours) {
  if (hours < 6)
    return 1;

  if (hours < 12)
    return 2;

  if (hours < 18)
    return 3;

  if (hours < 24)
    return 4;

  return 5;
}

function formatted() {
  const hour = currentSystemTime;
  const option = checkTime(hour);
  switch (option) {
    case 1: return `Boa madrugada`;
    case 2: return `Bom dia!`;
    case 3: return `Boa tarde!`;
    case 4: return `Boa noite!`;
    case 5: return `Hora invalida!`;
  }
}

const resultHour = document.querySelector(".result-hour");

const resultMessage = document.querySelector(".result-message");

function printOnSecreen() {
  resultHour.innerHTML = `${currentSystemTime} : 00`
  resultMessage.innerHTML = formatted();
}