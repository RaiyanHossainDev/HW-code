let input  = document.querySelector(".input")
let button = document.querySelector(".button")
let result = document.querySelector(".result")
let error  = document.querySelector(".error")
let clear  = document.querySelector(".clear")


button.addEventListener('click' , ()=>{
    if(input.value == ''){
        error.innerHTML = "This input is Incorrect";
    }else{
        error.innerHTML = '';
        result.innerHTML = '';
        for(let i = 1 ; i <= 10 ; i++){
            result.innerHTML += input.value + " X " + i + " = " + input.value*i + "<br>"
        }
    }
})
clear.addEventListener("click" , ()=>{
    input.value = '';
    result.innerHTML = '';
})