// ================= Dom part start
let result = document.querySelector(".result")
let input  = document.querySelector(".input")



let handleButton = ()=>{
    result.innerHTML = input.value;
    input.value = null
}

let inputKey = (item)=>{
    if( item.key == "Enter"){
        handleButton()
    }
}
