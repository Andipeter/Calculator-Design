// export function add (num1, num2){
// let firstNumber = Number(num1)
// let secondNumber = Number(num2)
// return firstNumber + secondNumber;
// }


// export function subtract (num1, num2){
//     let firstNumber = Number(num1)
//     let secondNumber = Number(num2)
//     return firstNumber - secondNumber;
//     }

// export function multiply (num1, num2) {
//     let firstNumber = Number(num1)
//     let secondNumber = Number(num2)
//     return firstNumber*secondNumber;
    
// }

// export function divideNew (num1, num2){
//     let firstNumber = Number(num1)
//     let secondNumber = Number(num2)
    
//     try {
//     if (secondNumber === 0) {
//         throw new Error ("Cannot be divided by zero");
//     }
//         else 
//      {
//       return firstNumber/secondNumber;
//     }
// }
// catch(error) {
//        return error.message;
//     }
// }
//     export const Person = {
//         name:"Andy",
//         age:27,
//     }
    
//     export let studentJson = 
//     {
//         "student": [
//             {"firstname": "John", "Lastname": "Doe"},
//             {"firstname": "Smith", "Lastname": "Benson"}
//         ]
//     }



    const employees = [
        { name: "Esther",
            role: "Manager",
        },
        {name: "Ebube",
            role: "Director"
        },
        {name: "Smith" ,
            role: "Accountant"
        }
    ]
    console.log(employees)

     const jsonObject = JSON.stringify(employees)
     console.log(jsonObject)

     const convertedJson = JSON.parse(jsonObject)
     console.log(convertedJson)
     console.log(convertedJson[1].role)

     //finction returns a string;
     function printEsther( ){
        return "My name is Esther"
     }

     //void function
     function printvoidEsther (){
        console.log("My name is Esther")
     }

     //using a void function
     printvoidEsther()
     
     //calling a function that returns a string 
     let printed = printEsther()
     console.log(printed)
     // or console.log(printEsther())

     //dynamic function: functions that accepts particular
     function printName (name, age){
        return "my name is "+name + " and my age is " + age;
     }
     console.log(printName("Andy", 49))
     console.log(printName("Gabriel", 199))

     class Car { 
        constructor(name, year ){
            this.name = name;
            this.year = year;
        }
        printCarDetails(){
            return "the name of my car is " + this.name + " the year of my car is " + this.year
        }
        
     }
     //the object
     let AndyCar = new Car("Lexus", 2013);
        let cardetails = AndyCar.printCarDetails();
        console.log(cardetails)

     //for another object
        let EstherCar = new Car("Royce", 2020);
        let Esthercardetails = EstherCar.printCarDetails();
        console.log(Esthercardetails)

    //inheritance
    class Model extends Car {
        constructor(name,year,model){
            super(name,year);
            this.model = model;
        }
        show(){
            return this.printCarDetails()+ " my car model is "+this.model
        }
    } 
    const repairedCar = new Model ("Camry", 2020, "1920")
    console.log(repairedCar.show())


    //Promise
    const buyBread = new Promise (function (fulfill, unfulfill){ 
        let AndyBuyBread = false 
        if (AndyBuyBread){
            fulfill ("Andy Bought Bread today");
        }
        else { 
            unfulfill ("Andy did not buy bread");
        }
    })
   //to use promise u make use of then
   buyBread.then ((success)=> {
    console.log(success)
   },
   (failure)=>{
    console.log(failure)
    }
    )

    //another way of accessing Promise is async & await
    async function displayPromiseResult(){
        try {
        let result = await buyBread;
        console.log(result)
    }
    catch (error){
        console.log(error);
    }
    }
    displayPromiseResult();

    //JS DOM
    //DOM - DOCUMENT OBJECCT MODEL
    // getElementById (2)getElementByClassName (3)QuerySelector (4)QuerySelectorAll
    const button = document.getElementById("andy");
    const changeText = ()=>{
        button.innerText = "Leave "
    }
    button.addEventListener("click", changeText);
    
    console.log(button)

    const classButton = document.getElementsByClassName("buttonclass")
    console.log(classButton)

    const text = document.querySelector("#andy")
    const form = document.querySelector(".calc")
    console.log(text)
    console.log(form)
    const free = document.querySelectorAll(".buttonclass")
    console.log(free)
    const buttonChangeBackground = document.getElementById("changebackground")
    buttonChangeBackground.addEventListener("click", ()=> {
        document.body.style.backgroundColor = "black"
    })
    console.log(document)
    const headingIds = document.querySelectorAll(".checkQuery")
    console.log(headingIds)

    //add an element into a html
    let insertTextBtn = document.querySelector(".insertTextBtn")
    insertTextBtn.addEventListener("click", ()=> {
        const h1 = document.createElement("h1")
        h1.textContent = "This is a H1 from Javascript";
        document.body.append(h1)
    })

    //to add a new div inside a dom
    let addName = document.querySelector(".myname")
    let newDiv = document.querySelector(".specialdiv")
    addName.addEventListener("click", ()=> {
        const name = document.createElement("p")
        name.textContent = "Andy Peter Eldimakaccao";
        newDiv.append(name)
    })

    let removeBtn = document.getElementById("subBtn")
    console.log(removeBtn)
    removeBtn.addEventListener("click", ()=> {
        removeBtn.remove()
    })   


