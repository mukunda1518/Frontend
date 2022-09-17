let counterElement = document.getElementById("counterValue")

function onDecrement() {
    let previousCounterValue = counterElement.textContent
    let updatedCounterValue = parseInt(previousCounterValue) - 1 
    counterElement.textContent = updatedCounterValue
    if (updatedCounterValue < 0) {
        counterElement.style.color = "red"
    }
    else if (updatedCounterValue > 0) {
        counterElement.style.color = "green"
    }
    else {
        counterElement.style.color = "black"
    }
    
}

function onIncrement() {
    let previousCounterValue = counterElement.textContent
    let updatedCounterValue = parseInt(previousCounterValue) + 1 
    counterElement.textContent = updatedCounterValue
     if (updatedCounterValue < 0) {
        counterElement.style.color = "red"
    }
    else if (updatedCounterValue > 0) {
        counterElement.style.color = "green"
    }
    else {
        counterElement.style.color = "black"
    }
}

function onReset() {
    let updatedCounterValue = 0;
    counterElement.textContent = updatedCounterValue
    counterElement.style.color = "black"
}