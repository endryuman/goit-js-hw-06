function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const span = document.querySelector(".color");
const button = document.querySelector(".change-color");

button.addEventListener("click", colorChange);

function colorChange(evt) {
  const color = getRandomHexColor();
  span.textContent = color;
  document.body.style.backgroundColor = `${color}`;
}
