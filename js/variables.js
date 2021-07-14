console.log(`variables`)

console.log(student) // undefined

var student = 'Vova'
console.log(student)

var count // обьявление переменной без инициализации
console.log(count) //undefined

count = 1
console.log(count) //1
count = 2
console.log(count) // 2

// console.log(number) //index.js:6 Uncaught ReferenceError: Cannot access 'number' before initialization
let number = 30
console.log(number)

let age // обьявление переменной без инициализации
console.log(age) //undefined

age = 18
console.log(age)

age = 22
console.log(age)

// console.log(userName) //index.js:10 Uncaught ReferenceError: Cannot access 'userName' before initialization
// const user //Uncaught SyntaxError: Missing initializer in const declaration
const userName = 'Sasha'
console.log(userName)

// userName = '' //Uncaught TypeError: Assignment to constant variable.
// at

//
