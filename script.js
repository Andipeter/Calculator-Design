import {add, subtract, Person, divideNew, multiply, studentJson} from "./calculate.js"
console.log(add(24,15))
console.log(subtract(40,10))
console.log(Person.name)
console.log(divideNew(40,5))
console.log(multiply(12,5))
// let convertedstudentJson = JSON.parse(studentJson)
// console.log(convertedstudentJson)


console.log(JSON.parse(    {
    "student": [
        {"firstname": "John", "Lastname": "Doe"},
        {"firstname": "Smith", "Lastname": "Benson"}
    ]
}
))