// Selector
const day = document.querySelector("#day");
const night = document.querySelector("#night");
const sun = document.querySelector("#sun");
const moon = document.querySelector("#moon");
const lmount = document.querySelector("#lmount");
const nmount = document.querySelector("#nmount");
const locean = document.querySelector("#locean");
const nocean = document.querySelector("#nocean");

// Event Listeners
sun.addEventListener("click", () => {
  sun.style.transform = "translate(200px)";
  moon.style.transform = "translate(0px)";
  day.style.opacity = 0;
  night.style.opacity = 1;
  lmount.style.transform = "translate(-200px)";
  nmount.style.transform = "translate(0px)";
  locean.style.transform = "translate(100%)";
  nocean.style.transform = "translate(0)";
});
moon.addEventListener("click", () => {
  moon.style.transform = "translate(200px)";
  sun.style.transform = "translate(0px)";
  day.style.opacity = 1;
  night.style.opacity = 0;
  lmount.style.transform = "translate(0px)";
  nmount.style.transform = "translate(-200px)";
  nocean.style.transform = "translate(100%)";
  locean.style.transform = "translate(0)";
});
