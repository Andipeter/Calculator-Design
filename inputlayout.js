let inputField = document.querySelector(".nameInput")
let passwordField = document.querySelector(".passwordInput")
let submitBtn = document.querySelector(".submitBtn")
let error = document.getElementsByClassName("error")
submitBtn.addEventListener("click", ()=> {
if (inputField.value.trim()===""){
        inputField.style.border ="1px Solid red";
        error[0].textContent = "Please Enter Username";
        error[0].style.color = "red";}
if (passwordField.value.trim()==""){
        passwordField.style.border ="1px Solid red";
        error[1].textContent = "Please Enter Password";
        error[1].style.color = "red";}
if (inputField.value.trim()!==""){
        inputField.style.border ="1px Solid green"}
if (passwordField.value.trim()!==""){
        passwordField.style.border = "1px Solid green"
}
})

