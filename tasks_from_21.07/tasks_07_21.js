//#1-------------------------------------------------------------------------------------
/*Написать функции, которые сортируют массив по возрастанию и по убыванию. 
В функцию массив передается в качестве аргумента.*/

function sortArrAsc(arr) {
  if (!arr.length) return "Maссив пуст";
  for (let i = 1; i < arr.length; i++)
    for (let j = 0; j < i; j++)
      if (arr[i] < arr[j]) {
        let tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
      }
  return arr;
}
function sortArrDesc(arr) {
  if (!arr.length) return "Maссив пуст";
  for (let i = 1; i < arr.length; i++)
    for (let j = 0; j < i; j++)
      if (arr[i] > arr[j]) {
        let tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
      }
  return arr;
}

/*console.log(sortArrAsc([2, 3, -5, 0, 2, 1]));
console.log(sortArrDesc([2, 3, -5, 0, 2, 1]));*/

//#2-------------------------------------------------------------------------------------
/*Написать функции, которые находят минимальный и максимальные элемент массива.
 В функцию массив передается в качестве аргумента.*/
function findMin(arr) {
  if (!arr.length) return "Maссив пуст";
  let min = 0;
  for (let i = 0; i < arr.length; i++) {
    min = min < arr[i] ? min : arr[i];
  }
  return min;
}

function findMax(arr) {
  if (!arr.length) return "Maссив пуст";
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    max = max > arr[i] ? max : arr[i];
  }
  return max;
}
//если в массиве только числа, можем использовать спред оператор и Math
function findMin_Better(arr) {
  if (!arr.length) return "Maссив пуст";
  return Math.min(...arr);
}
function findMax_Better(arr) {
  if (!arr.length) return "Maссив пуст";
  return Math.max(...arr);
}

/*console.log(findMin([2, 5.5, 0, -1, 1]));
console.log(findMax([2, 5.5, 0, -1, 1]));
console.log(findMin_Better([2, 5.5, 0, -1, 1]));
console.log(findMax_Better([2, 5.5, 0, -1, 1]));*/

//#3-------------------------------------------------------------------------------------
/*Дана строка; нужно написать функцию, которая позволяет вернуть значение true, если строка является палиндромом, 
и false — если нет. При этом нужно учитывать пробелы и знаки препинания.*/
function polindrom(str) {
  if (!str) return "Строка пуста";
  str = str.toLowerCase();
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i] !== str[str.length - i - 1]) {
      return false;
    }
  }
  return true;
}

function polindrom_Better(str) {
  if (!str) return "Строка пуста";
  return str === str.toLowerCase().split("").reverse().join("");
}
/*console.log(polindrom("m , m"));
console.log(polindrom_Better("m , m"));*/

//#4-------------------------------------------------------------------------------------
/*Требуется написать функцию, выводящую в консоль числа от 1 до n,
 где n — это целое число, которая функция принимает в качестве параметра,
  с такими условиями:
   вывод fizz вместо чисел, кратных 3;
   вывод buzz вместо чисел, кратных 5;
   вывод fizzbuzz вместо чисел, кратных как 3, так и 5.*/

function getFizzBuzz(num) {
  let arr = [];
  for (let i = 0; i <= num; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      arr.push("fizzbuzz")
    } else if (i % 5 === 0) {
      arr.push("buzz")
    } else if (i % 3 === 0) {
      arr.push("fizz")
    } else {
      arr.push(i)
    }
  }
  return arr.join(';')
}
console.log(getFizzBuzz(15));

//#5-------------------------------------------------------------------------------------
/*Нужно написать функцию, которая проверяет, 
являются ли две строки анаграммами, причем регистр букв не имеет значения. 
Учитываются лишь символы; пробелы или знаки препинания в расчет не берутся*/

function setAnagramm(str1, str2) {
  str1 = str1.replace(/[\s.,!?]/g, "");
  str2 = str2.replace(/[\s.,!?]/g, "");
  if (str1.length !== str2.length) return false;
  return str1.split("").sort().join("") === str2.split("").sort().join("")

}
/*console.log(setAnagramm(",ff!!", ",ff!"));*/
//#6-------------------------------------------------------------------------------------
/*Нужно написать функцию, принимающую строку в качестве аргумента и возвращающую количество гласных,
 которые содержатся в строке. Гласными являются «a», «e», «i», «o», «u».*/
function countVowels(str) {
  if (!str) return "Строка пуста";
  const arr = ["a", "e", "i", "o", "u"];
  let obj = {};
  for (let char of str) {
    if (arr.includes(char)) {
      obj[char] = obj[char] ? obj[char] + 1 : 1;
    }
  }
  return obj;
}
/*console.log(countVowels("mamamemo , mu. me miu 0 12"));*/

//#7-----------------------------------------------------------------------------------
/*Дан массив с числами. 
Не используя метода reverse переверните его элементы в обратном порядке.*/

function myReverse(arr) {
  let arrNew = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    arrNew.push(arr[i]);
  }
  return arrNew;
}

/*console.log(myReverse([2, 3, 5, 6]));*/

//#8-------------------------------------------------------------------------------------
/*Дан массив с числами. 
Найдите среднее арифметическое его элементов (сумма элементов, делить на количество)*/

function getAvg(arr) {
  if (!arr.length) return 'Массив пуст'
  let sum = 0;
  for (let el of arr) {
    sum += el;
  }
  return sum / arr.length;
}

/*console.log(getAvg([2, 3]));*/

//#9-------------------------------------------------------------------------------------
/*Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом или нет.
Функция первым параметром должна принимать текст элемента, а вторым - массив, в котором делается поиск.
Функция должна возвращать true или false.*/

function findElement(str, arr) {
  let result = false;
  for (let el of arr) {
    if (el == str) {
      result = true;
      break;
    }
  }
  return result;
}

/*console.log(findElement("0", ["mama", "papa", 0, 1]));
console.log(findElement("1", ["mama", "papa", 0, 1]));
console.log(findElement("mama", ["mama", "papa", 0, 1]));*/

//#10------------------------------------------------------------------------------------
/*Дана строка, например, '123456'. Сделайте из нее '214365'.*/

function getPartReverse(str) {
  arr = str.split("");
  for (let i = 0; i < arr.length;) {
    let tmp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = tmp;
    i += 2;
  }
  return arr.join("");
}
/*console.log(getPartReverse("123456"));*/
//#11------------------------------------------------------------------------------------
/*В переменной day лежит какое-то число из интервала от 1 до 31.
 Определите в какую декаду месяца попадает это число (в первую, вторую или третью).*/

//1..10 - 1 декада
//11...20 - 2 декада
//21...31 - 3 декада

function getDecada(num) {
  const part = parseInt((num - 1) / 10);
  switch (part) {
    case 0:
      return "1 декада месяца";
    case 1:
      return "2 декада месяца";
    case 2:
    case 3:
      return "3 декада месяца";
    default:
      break;
  }
}

/*console.log(getDecada(11));*/

//#12------------------------------------------------------------------------------------
/* В переменной month лежит какое-то число из интервала от 1 до 12.
 Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).*/

//12,1,2 - зима
//3,4,5 - весна
//6,7,8 - лето
//9,10,11 - осень

function getTimeYear(month) {
  if (month >= 3 && month <= 5) {
    return "Весна";
  } else if (month >= 6 && month <= 8) {
    return "Лето";
  } else if (month >= 9 && month <= 11) {
    return "Осень";
  } else if ([12, 1, 2].includes(month)) {
    return "Зима";
  } else {
    return 'Входные данные некорректны. Задайте значение от 1 до 12'
  }
}

/*console.log(getTimeYear(0));*/
