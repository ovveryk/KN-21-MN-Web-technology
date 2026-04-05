const form = document.querySelector("form");
const button = document.querySelector("button");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = event.target.elements.name.value;
  const email = event.target.elements.email.value;
  const password = event.target.elements.password.value;
  const repeatPassword = event.target.elements.repeatPassword.value;
  const sex = event.target.elements.sex.value;
  const age = event.target.elements.age.value;

  if (!username || !email || !password || !repeatPassword) {
    alert("Будь ласка, заповніть всі обов'язкові поля!");
    return;
  }

  if (password !== repeatPassword) {
    alert("Паролі не співпадають!");
    return;
  }

  if (password.length < 6) {
    alert("Пароль повинен містити не менше 6 символів!");
    return;
  }

  if (age < 10) {
    alert("Ви повинні бути старше 10 років для реєстрації!");
    return;
  }

  alert("Реєстрація успішна!");
  console.log({ username, email, password, repeatPassword, sex, age });
  form.reset();
});
