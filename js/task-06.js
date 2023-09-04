const input = document.querySelector("#validation-input");
input.addEventListener("blur", changeBorder);

function changeBorder(evt) {
  if (
    evt.currentTarget.value.trim().length === parseInt(input.dataset.length)
  ) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
}
