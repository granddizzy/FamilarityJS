"use strict";

/*
Необходимо попросить пользователя ввести число.
Если пользователь ввел отличное от числа значение, необходимо вывести в консоль
строку: "Значение задано неверно", иначе необходимо будет вызвать функцию 
(нужно будет ее создать), которая будет принимать введенное пользователем 
число. Функция должна вычесть из переданного ей числа 13% и вывести в консоль 
сообщение "Размер заработной платы за вычетом налогов равен N."
*/

function showTaxFreeSalary(salary) {
  console.log(`Размер заработной платы за вычетом налогов равен ${(salary * 0.87).toFixed(2)}`);
}

const inputSalary = prompt('Введите размер зарплаты');
if (inputSalary !== null) {
  const salary = Number.parseFloat(inputSalary);
  if (Number.isNaN(salary) || salary <= 0 || !Number.isFinite(salary)) {
    console.log(`Значение задано неверно`);
  } else {
    showTaxFreeSalary(salary)
  }
} else {
  console.log(`Ввод отменен`);
}