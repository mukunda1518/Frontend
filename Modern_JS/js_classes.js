class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName
    }
    displayFullname() {
        return this.firstName + " " + this.lastName;
    }
}
console.log(Person.prototype)

let person1 = new Person("Virat", "kohli")
console.log(person1.displayFullname())


class Animal {
    constructor(name) {
        this.name = name
    }

    eat(){
        return `${this.name} is eating`
    }

    makeSound(){
        return `${this.name} is shouting`
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name)
        this.breed = breed
    }
    sniff() {
        return `${this.name} is sniffing`
    }
}

let dog = new Dog("Some Dog", "German Sheperd")

console.log(dog)
console.log(dog.sniff())
console.log(dog.eat())
console.log(dog.makeSound())

let animal1 = new Animal("gorilla");
console.log(animal1)
console.log(animal1.makeSound())
console.log(animal1.eat())


