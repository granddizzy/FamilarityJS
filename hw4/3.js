"use strict";

/*
Используя Math.random() необходимо сгенерировать массив, содержащий 5 цифр в 
диапазоне [0, 9].
После создания массива необходимо вывести в консоль следующие значения:
1. Сумму элементов массива
2. Минимальное значение в массиве
3. Новый массив, содержащий индексы сгенерированного выше массива, в которых 
значение равно 3.
Пример: Если у нас сгенерировался массив [2, 3, 5, 7, 3], то мы должны вывести 
в консоль массив [1, 4]. Такой массив получился потому что в сгенерированном
массиве тройки лежат под индексами 1 и 4. Если троек в сгенерированном массиве
не окажется, значит нужно будет вывести пустой массив.
*/

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function arrGenerate(size) {
  const arr = [];
  for (let i = 0; i < size; i++) {
    arr[i] = getRandomInt(0, 10);
  }
  return arr;
}

function getArrSum(arr) {
  let sum = 0;
  arr.forEach(function (val) {
    sum += val;
  });
  return sum;
}

function getArrMin(arr) {
  if (arr.length === 0) {
    return undefined;
  } else if (arr.length === 1) {
    return arr[0];
  }

  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  return min;
}

function getIndexesOfValue(arr, val) {
  const findIndexes = [];
  arr.forEach(function (arrVal, index) {
    if (arrVal === val) {
      findIndexes.push(index);
    }
  });
  return findIndexes;
}

const arr = arrGenerate(5);
console.log(arr);
console.log(getArrSum(arr));
console.log(getArrMin(arr));
console.log(getIndexesOfValue(arr, 3));