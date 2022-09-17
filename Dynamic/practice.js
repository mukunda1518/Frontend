console.log(document.getElementById("headingElement"))

// Eevents

let inputElement = document.getElementById("inputElement")
let signInTextElement = document.getElementById("signInText")

function signIn() {
    let inputValue = inputElement.value 
    let verifyText = "Hi " + inputValue + "Verifying your account"
    signInTextElement.textContent = verifyText
}

// DOM Manipulations


let h1Element = document.createElement('h1')
let buttonElement = document.createElement('button')
let removeStylesButtonElement = document.createElement('button')
h1Element.textContent = "Web technologies"
buttonElement.textContent = "Change Heading"
removeStylesButtonElement.textContent = "Remove Styles"


let containerElement = document.getElementById("myContainer")
containerElement.appendChild(h1Element)
containerElement.appendChild(buttonElement)
containerElement.appendChild(removeStylesButtonElement)


buttonElement.onclick = function() {
    h1Element.textContent = "4.0 Technologies"
    h1Element.classList.add("heading")
}

removeStylesButtonElement.onclick = function() {
    h1Element.classList.remove("heading")
}


// Objects concept

let person = {
    name: "John",
    age: 25,
    city: "Banglore",
    run: function() {
        console.log("start running")
    },
    habits: ["playing", "Singing"],
    car: {
        name: "Audi6",
        model: "A6",
        color: "White"
    }
}

console.log(person.car.name)
console.log(person.car["name"])
console.log(person["car"]["name"])

console.log(person["habits"][0])
console.log(person.habits[0])

console.log(person.name)
console.log(person["name"])
console.log(person["1"])
console.log(person.gender)
let key = "age"
console.log(person[key])
console.log(person.key)
let { name, age, city } = person
console.log(name)
console.log(age)
console.log(city)

console.log(person)
person["name"] = "xyz"
console.log(person)
person.name = "abc"
console.log(person)
person.run()


