// Spread Operator - Un packing

let arr1 = [2, 4]
let arr2 = [1, ...arr1, 5]
console.log(arr2)

let person = {name: "Ram", age: 27}
let address = {city: "Hyderabad", pincode: 567123}
let personObject = {...person, ...address}
console.log(personObject)

function add(a, b, c){
    return a + b + c
}

let nums = [1, 2, 3, 4, 6]

console.log(add(...nums))

// Rest Parameter - For Packing

function numbers(...a){
    console.log(a)
}
numbers(1, 2, 3) 

function numbers1(a, b, ...agrest){
    console.log(a)
    console.log(b)
    console.log(agrest)
}
numbers1(1, 2, 3, 4, 5)


function sum(...args){
    result = 0
    for (let arg of args) {
        result = result + arg
    }
    return result
}
console.log(sum(1, 2, 3))
console.log(sum(1, 2, 3, 4, 5, 6))

let [a, b, c, ...rest] = [1, 2, 3, 4, 5, 6]
console.log(a)
console.log(b)
console.log(c)
console.log(rest)


let {firstName, ...rest1} = {
    firstName: "Ram",
    age: 17,
    city: "Hyderabad"
}

console.log(firstName)
console.log(rest1)

function numbers2(a="aa", b="bb"){
    console.log(a)
    console.log(b)
}

numbers2()
numbers2("cc")
numbers2("dd", "ee")

let name = "Everyone";
console.log(`Hello ${name}!`)
console.log(`The sum is ${2 + 3}`)
console.log(`The object key - age - ${rest1.age}`)

console.log(` Hello ${name},
Good Morning 
Have a nice day
`)


// Ternary Operator

let speed = 70
let message = (speed >= 100) ? "To Fast": "OK";
console.log(message)


let x = 10
let y = 20

let minvalue =(a < b)? a: b;
console.log(minvalue)

let day = "0"
switch(day) {
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid")
}

// Arrow Function

let sum1 = (a, b) => {
    let result = a + b;
    return result
}

let sum3 = (a, b) => a + b

console.log(sum1(3, 4))
console.log(sum3(4, 6))

let greeting = name => `Hi ${name}!`
console.log(greeting("Rahul"))

let square = n => n * n 
console.log(square(5))

let morning = () => "Hello Morining"
console.log(morning())


let createUser = name => ({ firstName: name})
console.log(createUser("my name"))


function createCar(color, brand){
    return {
        color,
        brand,
        start(){
            console.log("started")
        }
    }
}

let car1 = createCar("Blue", "Audi")
let car2 = createCar("Green", "Tata")
console.log(car1)
console.log(car2)


function Car(color, brand) {
    this.color = color
    this.brand = brand
    this.start = function(){
        console.log("started")
    }
}

let myCar = new Car("Blue", "Audi")
console.log(myCar)
console.log(myCar.color)
console.log(Car.length)
console.log(typeof(myCar))
console.log(myCar.constructor)


// Date constructor function

let now = new Date("2021-01-21")
let new_date = new Date(2022, 0, 23, 4, 50, 30)
console.log(now.getMonth())
now.setYear(2022)
now.setDate(15)
console.log(now.getFullYear())
console.log(now.getDate())
console.log(typeof(now))



