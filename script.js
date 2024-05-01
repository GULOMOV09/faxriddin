// OOP Object Orient Programming

// class Human {
//     constructor({ name, age }) {
//         this.name = name
//         this.age = age
//     }
//     info() {
//         return `My name is ${this.name}. My age is ${this.age}`
//     }

// }
// const Bobur = new Human({
//     name: 'Bobur',
//     age: 25
// })
// const Faxriddin = new Human({
//     name: 'Faxriddin',
//     age: 15
// })
// console.log(Bobur.info());
// console.log(Faxriddin.info());
// Bobur.name = "Sardor"
// console.log(Bobur.info());
class Human {
    constructor({ name, age }) {
        if (this.contructor === Human) {
            console.log("Abstact class");
        }
        this.name = name
        this.age = age
        this.person = "Inson"
    }
}
class Adults extends Human {
    constructor(props) {
        super(props)
        this.id = props.passportId
    }
    info() {
        return `My name is ${this.name}. My age is ${this.age} My passportId:${this.id}`
    }
}
class Children extends Human {
    constructor(props) {
        super(props)
        this.metrics = props.metrics
    }
    info() {
        return `My name is ${this.name}. My age is ${this.age} My metrics:${this.metrics}`
    }
}
const Alisher = new Adults({
    name: "Alisher",
    age: 18,
    passportId: 255
})
const Faxriddin = new Children({
    name: "Faxriddin",
    age: 13,
    metrics: 'Metrka bor koroci'
})
console.log(Alisher.info());
console.log(Faxriddin.info());