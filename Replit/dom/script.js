const txtName = document.getElementById("txtName");
const txtPoint = document.getElementById("txtPoint");
const btnAdd = document.getElementById("btnAdd");
const tbodyEl = document.querySelector("tbody");
const avg = document.querySelector(".avg");
const v1 = `<i class="fa-solid fa-pencil margin"></i>
<i class="fa-solid fa-trash-can"></i
>`;
const v2 = `<i class="fa-solid fa-check margin"></i>
<i class="fa-solid fa-xmark"></i>`;

let previousName = "";
let previousPoint = "";



btnAdd.addEventListener("click",()=>{
    
    let trEl = document.createElement("tr");
    
    let tdId = document.createElement("td"); 
    let tdName = document.createElement("td"); 
    let tdPoint = document.createElement("td"); 
    let tdLast = document.createElement("td"); 
   
    if(!txtPoint.value||!txtName.value){
      alert("Please enter a valid name and point")
    }else{
    tdName.innerHTML=txtName.value;
    tdPoint.innerHTML=txtPoint.value;
    tdLast.innerHTML = v1;

  trEl.appendChild(tdId);
  trEl.appendChild(tdName);
  trEl.appendChild(tdPoint);
  trEl.appendChild(tdLast);

  tbodyEl.prepend(trEl);

  tdLast.classList.add("text-center");

  let tdInTbody = tbodyEl.querySelectorAll("tr td:first-child")


  for (let i = 0; i < tdInTbody.length; i++){
        
    tdInTbody[i].innerText = i + 1;       
}


let tdInTbodyAvg = tbodyEl.querySelectorAll("tr td:nth-child(3)")

let sum =0;
for (let i = 0; i < tdInTbodyAvg.length; i++){
    sum+=Number(tdInTbodyAvg[i].innerText);
}
avg.innerHTML=(sum/tdInTbodyAvg.length).toFixed(2);

  txtName.value="";
  txtPoint.value="";
  txtName.focus();}
 
});

tbodyEl.addEventListener("click",(e)=>{

   let cells =  e.target.parentElement.parentElement.querySelectorAll("td");

if(e.target.classList.contains("fa-pencil")){

  let  previousName1=previousName;
  let previousPoint1 = previousPoint;

  

 for(let x of tbodyEl.querySelectorAll("td:last-child")){
   if(x.querySelector("i:nth-child(1)").classList.contains("fa-check")){
   
     x.parentElement.querySelectorAll("td")[1].innerText=previousName1;
     x.parentElement.querySelectorAll("td")[2].innerText=previousPoint1;
    
     console.log(x.parentElement.querySelectorAll("td")[1])
   }
   
  x.parentElement.querySelectorAll("td")[1].setAttribute("contentEditable", false);
  x.parentElement.querySelectorAll("td")[2].setAttribute("contentEditable", false);
  x.innerHTML=v1;
 }


 previousName=cells[1].innerText;
 previousPoint=cells[2].innerText;

  cells[3].innerHTML=v2;

 cells[1].setAttribute("contentEditable", true);
 cells[2].setAttribute("contentEditable", true);
 cells[1].focus();

cells[2].addEventListener("keypress", (event) => {
  let charCode = event.which ? event.which : event.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    event.preventDefault();
  }
});
    




}else if(e.target.classList.contains("fa-trash-can")){
//   let deleteItem = true;
// if (confirm("Are you sure you want to delete this?")) {
//   deleteItem = true;
// } else {
//   deleteItem = false;
// }

let deleteItem = (confirm("Are you sure you want to delete this?"))? true: false;

if (deleteItem) {
  e.target.parentElement.parentElement.remove();
}
 

  let tdInTbody = tbodyEl.querySelectorAll("tr td:first-child")

  
 for (let i = 0; i < tdInTbody.length; i++){
        
        tdInTbody[i].innerText = i + 1;       
    }

    let tdInTbodyAvg = tbodyEl.querySelectorAll("tr td:nth-child(3)")

let sum =0;
for (let i = 0; i < tdInTbodyAvg.length; i++){
    sum+=Number(tdInTbodyAvg[i].innerText);
}
avg.innerHTML=(sum/tdInTbodyAvg.length).toFixed(2);

} else if(e.target.classList.contains("fa-check")){

    cells[1].setAttribute("contentEditable", false);
    cells[2].setAttribute("contentEditable", false);
    cells[3].innerHTML=v1;

    let tdInTbodyAvg = tbodyEl.querySelectorAll("tr td:nth-child(3)")

let sum =0;
for (let i = 0; i < tdInTbodyAvg.length; i++){
    sum+=Number(tdInTbodyAvg[i].innerText);
}
avg.innerHTML=(sum/tdInTbodyAvg.length).toFixed(2);

   }else if(e.target.classList.contains("fa-xmark")){

    cells[1].setAttribute("contentEditable", false);
    cells[2].setAttribute("contentEditable", false);
    cells[1].innerText=previousName;
    cells[2].innerText=previousPoint;
    cells[3].innerHTML=v1;
   }
})
