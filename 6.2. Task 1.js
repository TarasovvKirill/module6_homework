/* 6.2 Задание 1
Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.

На этот раз оформите решение в виде функции, постарайтесь дать этой функции корректное название, вызовите функцию, проанализируйте синтаксис.
*/

function evenOrOdd (x) {

if (isNaN(x)) {
   console.log('Упс, кажется, вы ошиблись');
} else {
   if (x%2===0) {
      console.log('Чётное');
   } else {
      console.log('Не чётное');
     }
  } 
}

evenOrOdd (5);

