
const giris = document.querySelector(".calculator-buttons");
const ekran = document.querySelector(".calculator-input");
let displayValue ="0";
updateDisplay();


giris.addEventListener("click",function(e){


const input = e.target;


//console.log(input);

if(!input.matches("button")) return;


if(input.classList.contains("operator")){
console.log("operator")
inputOperator(input.value);//+


}

if(input.classList.contains("decimal")){
console.log("decimal")
}


inputNumber(input.value)





});
function updateDisplay(){
ekran.value=displayValue;
}
function inputNumber(num){
  

   displayValue==="0" ? displayValue= num : displayValue+=num;

   updateDisplay();
}
function inputDecimal(decimal){

}
function inputOperator(operator){

}








