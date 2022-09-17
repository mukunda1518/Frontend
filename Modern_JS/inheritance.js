// Array Constructor

let myArray = ["a", 2, true]
console.log(myArray.length)
console.log(Array.prototype)

let array = new Array("a", 2, true)
console.log(Object.getPrototypeOf(array))


// Function Constructor 

let Car = new Function("color", "brand", `
                                            this.color = color;
                                            thid.brand = brand;
                                            this.start = function(){
                                                console.log("started")
                                            }`);
console.log(Function.prototype)
console.log(Object.getPrototypeOf(Car))