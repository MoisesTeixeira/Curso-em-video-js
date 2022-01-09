const body = document.querySelector("body");
body.addEventListener("load", () => printOnScreen());

const date = new Date();

const currentTime = date.getHours();

function checkTime(time) {
  if (time < 6)
  return 1;

  if (time < 12)
  return 2;

  if (time < 18)
  return 3;

  if (time < 24)
  return 4

  return 1;
}

const img = document.querySelector("img");

function setBackgroundAndImage(color, image) {
  body.style.background = color;
  img.src = image;
}

const imgDawn = "https://images.pexels.com/photos/2885320/pexels-photo-2885320.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";

const imgMorning = "https://images.pexels.com/photos/955658/pexels-photo-955658.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260";

const imgAfternoon = "https://images.pexels.com/photos/69224/pexels-photo-69224.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260";

const imgNight = "https://images.pexels.com/photos/771883/pexels-photo-771883.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";

function formatted() {
  const option = checkTime(currentTime);
  switch (option) {
    case 1: setBackgroundAndImage("#191970", imgDawn); return "Good dawn";
    case 2: setBackgroundAndImage("#ff0", imgMorning); return "Good Morning";
    case 3: setBackgroundAndImage("#FFA500", imgAfternoon); return "Good Afternoon";
    case 4: setBackgroundAndImage("#483D8B", imgNight); return "Good Night";
  }
}

const message = document.querySelector(".message");

const printOnScreen = () => message.innerHTML = formatted();

printOnScreen();