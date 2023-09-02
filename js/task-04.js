const minusBtn = document.querySelector('button[data-action="decrement"]');

const plusBtn = document.querySelector('button[data-action="increment"]');

const value = document.querySelector("#value");

let counterValue = 0;

minusBtn.addEventListener("click", minus);
plusBtn.addEventListener("click", plus);

function minus(evt) {
  counterValue -= 1;
  value.textContent = counterValue;
}

function plus(evt) {
  counterValue += 1;
  value.textContent = counterValue;
}
