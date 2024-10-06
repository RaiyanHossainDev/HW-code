
let start = document.querySelector(".button")

start.addEventListener("click", () => {
    let age = prompt("Your age")

    if(age >= 20){
        alert("ok, thik ase")
        let income = prompt("tomar sallary koto")

        if(income >= 100000){
            alert("jau biye koro")
        }else{
            alert("ami goriber kase meye dibo nah!")
        }
    }else {
        alert("age boro hou")
    }
})