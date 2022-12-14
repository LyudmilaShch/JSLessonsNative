console.log('lesson 4');

// http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
// https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/


// Task 01
// Создайте промис, который постоянно находиться в состоянии pending.
// В конструкторе промиса выведите в консоль сообщение "Promise is created".

console.log('------lesson 4 -- Task1-----')
let pendingPromise = new Promise((res, rej) => {
    console.log( "Promise is created")
})
console.log(pendingPromise)
// Task 02
// Создайте промис, который после создания сразу же переходит в состояние resolve
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль

/*console.log('------lesson 4 -- Task2-----')
let resolvePromise = new Promise((res, rej) => {
    res("Im resolved")
    console.log( "Promise Data")
})

resolvePromise.then((res) => {
    console.log(res)
})

console.log(resolvePromise)*/
// Task 03
// Создайте промис, который после создания сразу же переходит в состояние rejected
// и возвращает строку 'Promise Error'
// Получите данные промиса и выведите их в консоль

console.log('------lesson 4 -- Task3-----')
let rejectedPromise = new Promise((res, rej) => {
    rej('i am rejected')
    console.log('Promise Error')
})

rejectedPromise.then((rej) => {
    console.log(rej)
})

// Task 04
// Создайте промис, который переходит в состояние resolved через 3с.
// (Используйте setTimeout)
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль

console.log('------lesson 4 -- Task4-----')
let resolve3secPromise = new Promise((res, rej) => {
    setTimeout(() => {
        res( "Promise Data")
    }, 3000)
    return

})
console.log(resolve3secPromise)
resolve3secPromise.then((res) => {
    console.log(res)
})

// Task 05
// Создайте литерал объекта handlePromise со следующими свойствами:
// promise, resolve, reject, onSuccess, onError
// Проинициализируйте первые три свойства null,
// а последние два функциями, которые принимают один параметр и выводят
// в консоль сообщения: первая - `Promise is resolved with data: ${paramName}`
// вторая - `Promise is rejected with error: ${paramName}`
// Создайте три обработчика события click для кнопок "Create Promise", "Resolve Promise", "Reject Promise".
// Первый обработчик, создает промис, заполняет первые три свойства,
// описаного выше объекта: свойство promise получает новый созданный промис,
// свойства resolve и reject получают ссылки на соответствующие функции
// resolve и reject. Следующие два обработчика запускают методы resolve и reject.

console.log('------lesson 4 -- Task5-----')

let handlePromise = {
    promise:  null,
    resolve: null,
    reject: null,
    onSuccess: (paramName: string) => {console.log(`Promise is resolved with data: ${paramName}`)},
    onError: (paramName: string) => {console.log(`Promise is rejected with error: ${paramName}`)}
}

const createPromise = () => {
    // @ts-ignore
    handlePromise.promise = new Promise((res, rej) => {
        // @ts-ignore
        res(handlePromise.onSuccess('data'))
        // @ts-ignore
        rej(handlePromise.onError('error'))
    })
}

const resolvePromise = () => {
    // @ts-ignore
    handlePromise.promise.then((res) => {
       console.log(res)
    })
}
const rejectPromise = () => {
    // @ts-ignore
    handlePromise.promise.catch((rej) => {
        console.log(rej)
    })
}

// Task 06
// Создайте промис, который через 1 с возвращает строку "My name is".
// Создайте функцию onSuccess, которая получает один параметр,
// прибавляет к нему Ваше имя и возвращает новую строку из функции
// Создайте функцию print, которая выводит в консоль значение своего параметра
// Добавьте два метода then и передайте созданные функции.


// Task 7
// Создайте три промиса. Первый промис возвращает объект { name: "Anna" } через 2с,
// второй промис возвращает объект {age: 16} через 3 с, а третий {city: ''} через 4с.
// Получите результаты работы промисов, объедините свойства объектов
// и выведите в консоль {name, age, city}



// just a plug
export default ()=>{};