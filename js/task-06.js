const input = document.querySelector("#validation-input");
input.addEventListener("blur", changeBorder);

function changeBorder(evt) {
  if (
    evt.currentTarget.value.trim().length === parseInt(input.dataset.length)
  ) {
    input.classList.add("valid");
  } else {
    input.classList.add("invalid");
  }
}
