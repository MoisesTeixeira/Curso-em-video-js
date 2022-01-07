const button = document.querySelector("button");
button.addEventListener("click", () => printOnSreen());

const date = new Date();

var currentDayOfTheWeek = date.getDay();

function checkDay() {
  switch (currentDayOfTheWeek) {
    case 0: return `Sunday`;    // 0 = Domingo
    case 1: return `Monday`;    // 1 = Segunda
    case 2: return `Tuesday`;   // 2 = Terça
    case 3: return `Wednesday`; // 3 = Quarta
    case 4: return `Thursday`;  // 4 = Quinta
    case 5: return `Friday`;    // 5 = Sexta
    case 6: return `Saturday`;  // 6 = Sabado
  }
  return `Invalid day`;
}

function formatted() {
  const nameOfTheDay = checkDay();

  if (nameOfTheDay === "Sunday" || nameOfTheDay === "Saturday")
    return `${nameOfTheDay} Weekend!`;

  if (nameOfTheDay === "Invalid day")
    return `!ERROR! ${nameOfTheDay}!`;

  return `${nameOfTheDay}!`;
}

const result = document.querySelector(".result");

const printOnSreen = () => result.innerHTML = formatted();