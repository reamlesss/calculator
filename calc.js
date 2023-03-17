
const result = document.querySelector("#result")



function numberButton(id){
    const buttonval = document.querySelector(id)
    alert(buttonval.textContent)
    result.textContent = buttonval.textContent



}