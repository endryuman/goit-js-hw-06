const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text");
input.addEventListener("input", handleChange);

function handleChange(evt) {
  let size = evt.currentTarget.value;
  span.style.fontSize = `${size}px`;
}
