const container = document.querySelector(".container");
const mainHeadings = document.querySelectorAll("h1");
const secondaryHeadings = document.querySelectorAll("h2");
const topCards = document.querySelectorAll(".card");
const bottomCards = document.querySelectorAll(".card-bottom");
const btn = document.querySelector("input");

btn.addEventListener("click", function () {
  container.classList.toggle("light");
  mainHeadings.forEach(function (mainHeading) {
    mainHeading.classList.toggle("light");
  });
  secondaryHeadings.forEach(function (secondaryHeading) {
    secondaryHeading.classList.toggle("light");
  });
  topCards.forEach(function (topCard) {
    topCard.classList.toggle("light");
  });
  bottomCards.forEach(function (bottomCard) {
    bottomCard.classList.toggle("light");
  });
});
