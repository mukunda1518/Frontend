function displayGreeting(displayName) {
    console.log("hello")
    displayName()
    console.log("Good Evening")
}

displayGreeting(function(){
    console.log("John")
})

function displayRam() {
    console.log("ram")
}

displayGreeting(displayRam)

let displayHarry = function() {
    console.log("Harry")
}
displayGreeting(displayHarry)

// let counter1 = 0
// setInterval(function(){
//     console.log(counter1)
//     counter1 = counter1 + 1
// }, 2000)

let setIntervalBtn = document.getElementById("setInterval")
let clearIntervalBtn = document.getElementById("clearInterval")
let counter = 0
let uniqueId = null
setIntervalBtn.onclick = function() {
    uniqueId = setInterval(function() {
        console.log(counter)
        counter = counter + 1
    }, 1000)
}

clearIntervalBtn.onclick = function() {
    clearInterval(uniqueId)
}

let setTimeIntervalBtn = document.getElementById("setTimeIntervalBtn")
let clearTimeIntervalBtn = document.getElementById("clearTimeIntervalBtn")

let uniqueId1
setTimeIntervalBtn.onclick = function() {
    uniqueId1 = setTimeout(function(){
        console.log("Hello World")
    }, 2000)
}

clearTimeIntervalBtn.onclick = function() {
    clearInterval(uniqueId1)
}



// Inline Eevent Listeners

function inlineEventLis() {
    console.log("Inline Event Listener")
}

// On Event Listeners

let greetBtnEl = document.getElementById("greetBtnEl")
greetBtnEl.onclick = function() {
    console.log("On Event listener")
} 


// Add Event Listener

let AddEventEl = document.getElementById("AddEventEl")
AddEventEl.addEventListener("click", function() {
    console.log("Add Event Listener")
})


// Keydown, keyup
// Event Object - contains propreties

let inputEl = document.createElement("input")

function printKeyDown(event) {
    console.log("pressed keydown")
    console.log(event)
    console.log(event.type)
    console.log(event.target)
    console.log(event.key)
}

inputEl.addEventListener("keydown", printKeyDown)

document.body.appendChild(inputEl)




