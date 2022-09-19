/* Напишите функцию counter(), которая при каждом вызове возвращает число на единицу большее предыдушего  */

/* const counter = (function() {
    let i = 0
    return function () {
        return ++i
    }
})() */

const counter = ((i = 0) => ()=> ++i)()

console.log( counter() ); //1
console.log( counter() ); //2
console.log( counter() ); //3