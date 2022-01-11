const button = document.querySelector("button");
button.addEventListener("click", printOnScreen);

const inputYear = document.querySelector(".input-year");

const inputSex = document.getElementsByName("sex");

const isEmpty = () => inputYear.value && (inputSex[0].checked || inputSex[1].checked);

const conversions = (htmlElement) => Math.abs(Number(htmlElement.value));

const date = new Date();

const currentYear = date.getFullYear();

const calculateAge = (year) => year - conversions(inputYear);

function checkLifeStage(age) {
  if (age < 1)
    return 0;

  if (age < 10)
    return 1;

  if (age < 21)
    return 2;

  if (age < 50)
    return 3;

  return 4;
}

const checkSex = () => inputSex[0].checked ? "Man" : "Woman";

const imageError = "https://images.pexels.com/photos/5422779/pexels-photo-5422779.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";

const childMan = "https://images.pexels.com/photos/1697847/pexels-photo-1697847.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";

const childWoman = "https://images.pexels.com/photos/1087722/pexels-photo-1087722.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";

const youngMan = "https://images.pexels.com/photos/8590251/pexels-photo-8590251.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";

const youngWoman = "https://images.pexels.com/photos/7275385/pexels-photo-7275385.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";

const adultMan = "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";

const adultWoman = "https://images.pexels.com/photos/7490734/pexels-photo-7490734.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";

const oldMan = "https://images.pexels.com/photos/9923562/pexels-photo-9923562.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";

const oldWoman = "https://images.pexels.com/photos/3778171/pexels-photo-3778171.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";

const img = document.querySelector("img");

const setImage = (image) => img.src = image;

function formatted() {
  const sex = checkSex();
  const age = calculateAge(currentYear);
  const option = checkLifeStage(age);
  switch (option) {
    case 0: setImage(imageError); return `!ERROR!`;
    case 1:
      switch (sex) {
        case "Man": setImage(childMan);
          break;
        case "Woman": setImage(childWoman);
          break;
      } return `Child ${sex} ${age} years`;
    case 2:
      switch (sex) {
        case "Man": setImage(youngMan);
          break;
        case "Woman": setImage(youngWoman);
          break;
      } return `Young ${sex} ${age} years`;
    case 3:
      switch (sex) {
        case "Man": setImage(adultMan);
          break;
        case "Woman": setImage(adultWoman);
          break;
      } return `Adult ${sex} ${age} years`;
    case 4:
      switch (sex) {
        case "Man": setImage(oldMan);
          break;
        case "Woman": setImage(oldWoman);
          break;
      } return `Old ${sex} ${age} years`;
  }
}

const result = document.querySelector(".result");

function printOnScreen() {
  if (isEmpty())
    result.innerHTML = formatted();
}