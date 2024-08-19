const equalTo = document.getElementById("equals")
const displayField = document.getElementById("result")
const numBtn = document.getElementsByClassName("grid-item")
const clearBtn = document.getElementById("Clear")
console.log(numBtn)

for(let i = 0; i<numBtn.length; i++){
numBtn[i].addEventListener("click", ()=>{
    console.log(numBtn[i])
    displayField.value = displayField.value + numBtn[i].value
})

}

equalTo.addEventListener("click", ()=> {
    displayField.value = eval(displayField.value)
    console.log(equalTo)
})

clearBtn.addEventListener("click", ()=>{
    displayField.value = ""
})
