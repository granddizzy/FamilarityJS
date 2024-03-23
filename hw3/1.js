"use strict";

/*
Создайте функцию которая принимает число, возводит переданное число в куб и 
возвращает полученное значение. 
Необходимо продемонстрировать вызов данной функции, с выводом результата, 
который получаем от функции, в консоль.
*/

// комментарий оставлен для примера
// function getThirdDegree(num) {
//   return num ** 3;
// }
const getThirdDegree = num => num ** 3;

const inputNum = prompt('Введите число');
const num = Number.parseFloat(inputNum);
if (Number.isNaN(num)) {
  console.log(`${inputNum} это не число!!!`);
} else {
  console.log(`Число ${num} в кубе равно ${getThirdDegree(num)}`);
}