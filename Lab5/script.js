const changeTextbutton = document.getElementById("buttonChangeText");
const textElement = document.getElementById("changeText");

const hoverButton = document.getElementById("hoverButton");

const listItems = document.getElementById("list");
const addBtnList = document.getElementById("addBtn");

const pushBtn = document.getElementById("pushBtn");

buttonChangeText.addEventListener("click", () => {
  console.log("Кнопка була натиснута!");
  console.log(textElement);
  textElement.innerHTML = prompt("Введіть новий текст:");
});

hoverButton.addEventListener("mouseover", () => {
  console.log("Курсор наведено на кнопку!");
  hoverButton.classList.add("active");
});

hoverButton.addEventListener("mouseout", () => {
  console.log("Курсор покинув кнопку!");
  hoverButton.classList.remove("active");
});

addBtnList.addEventListener("click", () => {
  console.log("Кнопка додавання була натиснута!");
  const newItem = document.createElement("li");
  newItem.textContent = prompt("Введіть текст для нового елемента списку:");
  listItems.appendChild(newItem);
});

let count = 0;
pushBtn.addEventListener("click", (event) => {
  count++;

  if (count > 4) {
    return;
  }
  if (count < 4) {
    pushBtn.textContent = `Натисни ще ${4 - count} рази`;
  }

  if (count === 4) {
    pushBtn.textContent = "Верик Олександр,  варіант номер - 4!";
    alert("Верик Олександр, варіант номер - 4!");
  }

  console.log(count);
  console.log("Кнопка була натиснута!");
});
