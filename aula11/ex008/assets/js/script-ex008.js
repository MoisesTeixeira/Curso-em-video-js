const button = document.querySelector("button");
button.addEventListener("click", printOnScreen);

const input = document.querySelector("input");

const result = document.querySelector(".result");

const isEmpty = () => input.value;

const convertElement = (htmlElement) => Math.abs(Number(htmlElement.value));

function radar()
{
  const speed = convertElement(input), limit = 60;

  if (speed > limit)
    return result.innerHTML = `Report: speed ${speed}Km/h Fined!!!`;

  return result.innerHTML = `Report: speed ${speed}Km/h There was no infraction!!!`;
}

const clean = () => {input.value = ""};

function printOnScreen()
{
  if (isEmpty()){

    radar()
  }

  clean();
}