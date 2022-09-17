// Promise - old way

const myPromise = () => {
    return new Promise((reslove1, refect) => {
        setTimeout(() => {
            refect("2 seconds completed rejected")
        }, 2000)
    })
}
myPromise().then((fromReslove) => {
    console.log(fromReslove)
})
myPromise().catch((fromReslove) => {
    console.log(fromReslove)
})

// Mordern way to consume promises

const url = "https://apis.ccbp.in/jokes/random"
const doNetworkCall = async() => {
    try{
        const response = await fetch(url);
        const jsonData = await response.json();
        console.log(jsonData);
    }catch(err){
        console.log(err)
    }
};
const asyncPromise = doNetworkCall();
console.log(asyncPromise)

const myString = " Hello World! "
console.log(myString)
console.log(myString.trim())
const text = "The quick brown box"
console.log(text.slice(2, 8))
console.log(text.toUpperCase())


// Hoisting
// For function delclarations, functions will be moved to top
// Doesn't work for Function expressions and Arrow Functions

// Map

const numbers = [1, 2, 3, 4]
const result = numbers.map((number) => number * number)
console.log(result)

const integers = [-3, 6, -2, 7, 9, -5]
const output = integers.filter((integer) => integer > 0)
console.log(output)


let arr = [1, 2, 4, 5, 10]
const sum = arr.reduce((acc, currentVal) => acc + currentVal)
console.log(sum)