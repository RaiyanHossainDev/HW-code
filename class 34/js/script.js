// ============================== DOM
let numberTaker = document.querySelectorAll(".numberTaker")
let text        = document.querySelectorAll(".text")



let countText   = document.querySelectorAll(".counterText")


// ============================== Function 
let numberAdder = (item)=>{
    countText[item].innerHTML = numberTaker[item].value
    countText[item].dataset.num = numberTaker[item].value
    text[item].innerHTML      = numberTaker[item].value
    numberTaker[item].value   = ''
}



let count = ()=>{
    countText.forEach((item)=>{
        let number = 0
        let incree = ()=>{
            number++
            item.innerHTML = number
            if(number == item.dataset.num){
                clearInterval(stop)
            }
        }
        let stop = setInterval(() => {
            incree()
        }, 100);
        if(item.dataset.num == 0){
            clearInterval(stop)  
        }
    })
}
