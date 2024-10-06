
let result   = document.querySelector('.result')
let myArray  = ['1' , '2' , '3' , '4' , '5', "Techno gamer"]
let myArray2 = ["six", 'seven', 'eight' , 'nine' , 'ten']
let data     = myArray.concat(myArray2)

let inputKey = (key)=>{
    if(key.key == "Enter"){
        search()
    }
}

let search = ()=>{
    myArray.find((curentValue, )=>{
        if( curentValue === document.querySelector(".input").value){
            result.innerHTML = curentValue
        }
    })
}
