const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", changeOutput);

function changeOutput(evt) {
  if (evt.currentTarget.value === "") {
    output.textContent = "Anonymous";
  } else {
    output.textContent = evt.currentTarget.value.trim();
  }
}
