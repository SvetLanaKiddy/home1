"use strict";

// Первая задача

const text = prompt("Hello!");

alert(text);

console.log(text);

// Вторая задача

const a = prompt("Введите первое число");
const b = prompt("Введите второе число");
const c = prompt("Введите третье число");
alert(+a + +b + +c);
console.log(+a + +b + +c);

// Третья задача

const name = prompt("Введите своё имя");
const age = prompt("Введите свой возраст");

if (age >= 18) alert(`Добро пожаловать, ${name}`);
else alert(`Простите, ${name}, доступ закрыт`);

// Пятая задача

const d = prompt("Введите первое число");
const e = prompt("Введите второе число");
let choice = prompt(
  "Выберите нужную арифметическую операция (div, plus, mult, minus)"
);
if (choice === `plus`) alert(+d + +e);
if (choice === `minus`) alert(+d - +e);
if (choice === `div`) alert(+d / +e);
if (choice === `mult`) alert(+d * +e);

// Четвертая задача

let question1 = confirm("Хотите ввести название блока?");
if (question1 === false) {
  alert("Название блока не введено");
} else {
  const block = prompt("Введите название блока");

  let question2 = confirm("Хотите ввести название элемента?");
  if (question2 === false) {
    alert(`${block}`);
  } else {
    const element = prompt("Введите название элемента");
    let question3 = confirm("Хотите ввести название модификатора?");

    if (question3 === false) {
      alert(`${block} ${element}`);
    } else {
      const modifikator = prompt("Введите название модификатора");
      alert(`${block} ${element} ${modifikator}`);
    }
  }
}
