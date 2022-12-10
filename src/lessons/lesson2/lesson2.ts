console.log('lesson 2');

// Lexical environment
// http://jsflow.org/docs/lex-env/

//// Closure
// https://learn.javascript.ru/closure
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://www.youtube.com/watch?v=pahO5XjnfLA

//// Сurrying
// https://learn.javascript.ru/currying-partials
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827

// Pattern Module
// https://habr.com/ru/company/ruvds/blog/419997/

// Recursion
// https://learn.javascript.ru/recursion
// https://www.youtube.com/watch?v=Kuq6oIN3PH0


// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9
/*console.log('------task 1 -----')
function sum(a: number) {
    return function (b: number) {
        return a + b; // берёт "a" из внешнего лексического окружения
    };
}

console.log(sum(3)(6))*/


// Task 02
// Реализовать функцию makescounter которая работает следующим образом:
// const counter = makescounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makescounter();
// counter2(); // 1
// counter(); // 3
// @ts-ignore

/*const makescounter = () => {
        let count = 0
        return () => {
            console.log(++count)
        }
}
const counter = makescounter();
counter(); // 1
counter(); // 2
const counter2 = makescounter();
counter2(); // 1
counter(); // 3*/


// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;

/*
console.log('------task 3 -----')
const makescounter = (a: number) => {
    let count = a
    return () => {
        let increase = () => ++count
        let decrease = () => --count
        let reset = () => count = 0
        let set = () => count = a
        console.log('increase ' + increase())
        console.log('decrease ' + decrease())
        console.log('reset ' + reset())
        console.log('set ' + set())
    }
}
const counter = makescounter(0);
counter(); // 1 0 0 0
const counter2 = makescounter(5);
counter2(); // 6 5 0 5
*/


// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10
// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore
console.log('------task 4 -----')


const superSum = (a: number) => {
    if (a === 0) return 0;
    if (a === 1) return a;

    let numbers: Array<number> = []

    function summer(...arg: Array<number> ) {
        numbers=[...numbers, ...arg];

        if(numbers.length >= a) {
            numbers.length = a;
            return numbers.reduce((acc, number) => acc + number)
        } else {
            return summer;
        }
    }
    return summer()
}
// @ts-ignore
console.log(superSum(3)(2)(5)(3))
// @ts-ignore
console.log(superSum(3)(2,5)(3,9))






// Task 05
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion
// @ts-ignore

/*function sumTo(n) {
    if (n == 1) return 1;
    return n + sumTo(n - 1)
}

alert(sumTo(100)); // 5050

// @ts-ignore
function factorial(n) {
    if (n == 1) return 1;
    return n * factorial(n - 1)
}

alert(factorial(5)); // 120*/


// @ts-ignore
/*
function fib(n) {
    if (n == 1 || n == 2) return 1;
    return fib(n - 1) + fib(n - 2)
}

alert(fib(2)); // 1
alert(fib(3)); // 2
alert(fib(7)); // 13
*/


// @ts-ignore
/*let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};*/

// @ts-ignore
/*function printList(list) {

    alert(list.value); // выводим текущий элемент

    if (list.next) {
        printList(list.next); // делаем то же самое для остальной части списка
    }

}

printList(list);

// @ts-ignore
let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};*/

// @ts-ignore
/*function printList(list) {

    // выводим текущий элемент

    if (list.next) {
        printList(list.next); // делаем то же самое для остальной части списка
    }
    alert(list.value);
}

printList(list);*/

// Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.

// function makeFlat(value) {
//     return value.reduce(function (arr, e) {
//
//         if (Array.isArray(e)) {
//             arr.push(...makeFlat(e))
//
//         }
//         else arr.push(e);
//         return arr;
//     }, []);
// }


// @ts-ignore
/*alert(makeFlat([333, [222, [444, [985]]]]))*/

// just a plug
export default () => {
};