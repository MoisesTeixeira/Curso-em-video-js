const button = document.querySelector("button");
button.addEventListener("click", printOnScreen);

const input = document.querySelector("input");

const conversion = (value) => value.toUpperCase().trim();

function checkCountry(country) {
  switch (country) {
    case "BRASIL": return "Brasileiro!";
    case "FRANÇA": return "Francês!";
    case "UGANDA": return "Ugandense!";
    case "HUNGRIA": return "Húngaro!";
  }
  return "!ERROR! Options: Brasil, França, Uganda e Hungria";
}

const clean = () => input.value = "";

const formatted = () => `Nationality: ${checkCountry(conversion(input.value))}`;

const result = document.querySelector(".result");

function printOnScreen() {
  if (input.value)
    result.innerHTML = formatted();

  clean();
}