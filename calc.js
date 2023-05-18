
const result = document.querySelector("#result")

let number1
let operator
let changedisplay 

function numberButton(number){
   if(result.textContent == "result" || result.textContent == "cleared!" || changedisplay){
     result.textContent = ""
     result.textContent += number
     if(changedisplay){
        changedisplay = false
     }
   }else{
    result.textContent += number
   }
}
function mathOp(op){
   number1 = result.textContent

    result.textContent = op
    operator  = op

}

function sign(){
    if(result.textContent.substring(0,1) != "-"){
        result.textContent = "-"+result.textContent


    }else{
        result.textContent = result.textContent.substring(1)
    }

}

function clr(){
    result.textContent = "cleared!"
    number = 0 
}
function calc(){
 let number2
 let op  = result.textContent.substring(0,1)
 number2 = result.textContent.split(1)
if(op == "-"){
   number2 = result.textContent.substring(1)
}
 let a = parseInt(number1)
 let b = parseInt(number2)


 let intresult
 switch(op){
    case "+":
        intresult = a+b
        break;
    case "-":
          intresult = a-b
        break;
    case "x":
            intresult = a*b
        break;
    case "÷":
            intresult = a/b
        break;
 }
 
  result.textContent = String(intresult)
  changedisplay = true

}