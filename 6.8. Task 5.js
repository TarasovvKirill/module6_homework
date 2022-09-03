/*
6.8 Задание 5.
Напишите функцию, которая принимает два натуральных числа x и n и возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.

Используйте Arrow Function синтаксис.

*/

let exponentiation = (a, b) => {
  let result = 1;
  for (let i = 1; i <= b; i++) {
    result = result * a;
  }
  return result;
};

let x = exponentiation(5, 5);

console.log(x);
