/* 
6.5 Задание 3.
Написать функцию, которая принимает число как аргумент и возвращает функцию, которая также принимает число как аргумент и возвращает сумму этих двух чисел. Выведите в консоль результат.
*/

function sum(x) {
    return function(y) {
        return x + y;
    };
}

let result = sum(1);

console.log(result(2));
console.log(sum(1)(2));

