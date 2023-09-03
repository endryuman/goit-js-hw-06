const input = document.querySelector("#validation-input");
input.addEventListener("blur", changeBorder);
console.dir(input.dataset.length);

function changeBorder(evt) {
  if (evt.currentTarget.value.trim().length == input.dataset.length) {
    input.classList.add("valid");
  } else {
    input.classList.add("invalid");
  }
}
