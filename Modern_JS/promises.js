//Synchronus
alert("First Line")
alert("Secons Line")
alert("Third Line")

Asynchronus

const url = "https://apis.ccbp.in/jokes/random"
fetch(url)
.then(function(response){
    return response.json()
})
.then(function(jsonData){
    console.log(jsonData)
})
console.log("Fectching Done")

fetch(url)
.then((response) => {
    console.log(response)
})
.catch((error) => {
    console.log(error)
})

let url1 = "https://apis.ccbp.in/jokes/random"
let responseObject = fetch(url1);
responseObject.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data)
})

responseObject.catch((error) => {
    console.log(error)
})

