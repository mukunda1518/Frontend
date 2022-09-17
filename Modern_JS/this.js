// Object methods - this refer object

let car = {
    color: "blue",
    brand: "Audi",
    start: function(){
        console.log(this)
    }
}

car.start()

// Regular Function - this refer window object

function start(){
    console.log(this);
}
start();


// Arrow Function - this - 1. when the code is defined 2. Context

let car1 = {
    color: "blue",
    brand: "Audi",
    start: function(){
        setTimeout(function(){
            console.log("Testing")
        }, 1000)
    }
}

car1.start()

let cars = ["Audi", "BMW", "Mercedes"]

let car2 = {
    color: "blue",
    brand: "Audi",
    start: () => {
        console.log("Arrow")
    },
    end: function(){
        setTimeout(() => {
            console.log(this)
        }, 1000)
    },
    checkIndex: function() {
        console.log("hello")
        let audiIndex = cars.findIndex(
            (cars) => console.log(this)
        )
        console.log("hello")
    }
}
car2.end()
car2.checkIndex()


// Constructor Function

function Car(color, brand) {
    this.color = color
    this.brand = brand
    this.start = function() {
        console.log(this)
    };
    this.arrow = () => {
        console.log(this)
    }
}

let car4 = new Car("blue", "Testing")
car4.start()

let car5 = new Car("green", "object Audi")
car5.arrow()
