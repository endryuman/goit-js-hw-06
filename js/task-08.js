const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(evt) {
  evt.preventDefault();
  const { email, password } = evt.currentTarget.elements;
  const info = {
    email: email.value,
    password: password.value,
  };
  if (email.value === "" || password.value === "") {
    alert("Всі поля повинні бути заповнені!");
  } else {
    console.log(info);
  }
}
