const txtNum = document.querySelector("#txtNum");
const btnGuess= document.querySelector("#bnGuess");
const btnStart = document.querySelector("#btnStart");
const txtResult = document.querySelector("#txtResult");



let randomNumber = 0;
const minRandomNumber = 20;
const maxRandomNumber = 80;
const totalShot = 10;


txtNum.setAttribute("placeholder",`Type number between ${minRandomNumber}  and ${maxRandomNumber}`);


const guess = ()=>{

    const number = Number(txtNum.value);

    if(!number || isNaN(number) || number>=0  ||   number<=100)

     if(number)


    }



