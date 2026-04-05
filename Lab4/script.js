//1.	Привітання користувача
function greetUser(name) {
  return `Привіт, ${name}! Радий тебе бачити!`;
}

const userName = prompt("Привіт! Як тебе звати?");
alert(greetUser(userName));
console.log(greetUser(userName));

// 2.	Проста арифметика
num_1 = prompt("Введи перше число:");
num_2 = prompt("Введи друге число:");

function calculateSumAndDifference(a, b) {
  const sum = Number(a) + Number(b);
  const difference = Number(a) - Number(b);
  return [sum, difference];
}

alert(
  `Сума: ${calculateSumAndDifference(num_1, num_2)[0]} а також різниця: ${calculateSumAndDifference(num_1, num_2)[1]} `,
);
console.log(
  `Сума: ${calculateSumAndDifference(num_1, num_2)[0]} а також різниця: ${calculateSumAndDifference(num_1, num_2)[1]} `,
);

// 3.	Обчислення віку користувача
OWNER_BIRTH_YEAR = 1990;
const currentYear = 2026;

const age = (currentYear, birthYear) => {
  return currentYear - birthYear;
};

const differenceAge = (age, ownerAge) => {
  const difference = age - ownerAge;
  if (difference > 0) {
    return `Ти старший за мене на ${difference} років.`;
  } else if (difference < 0) {
    return `Ти молодший за мене на ${Math.abs(difference)} років.`;
  } else {
    return "Ми одного віку!";
  }
};

const birthYear = parseFloat(prompt("Введи свій рік народження:"));
const userAge = age(currentYear, birthYear);
alert(
  `Тобі ${userAge} років. ${differenceAge(userAge, age(currentYear, OWNER_BIRTH_YEAR))}`,
);
console.log(
  `Тобі ${userAge} років. ${differenceAge(userAge, age(currentYear, OWNER_BIRTH_YEAR))}`,
);
