const txtName = document.getElementById("txtName");
const txtPoint = document.getElementById("txtPoint");
const btnAdd = document.getElementById("btnAdd");
const tbodyEl = document.querySelector("tbody");
const v1 = `<i class="fa-solid fa-pencil margin"></i>
<i class="fa-solid fa-trash-can"></i
>`;
const v2 = `<i class="fa-solid fa-check margin"></i>
<i class="fa-solid fa-xmark"></i>`;

btnAdd.addEventListener("click",()=>{
    
    let trEl = document.createElement("tr");
    console.log(trEl)
    
    let tdId = document.createElement("td"); 
    let tdName = document.createElement("td"); 
    let tdPoint = document.createElement("td"); 
    let tdLast = document.createElement("td"); 
   
    tdName.innerHTML=txtName.value;
    console.log(txtName.value)
    tdPoint.innerHTML=txtPoint.value;
    tdLast.innerHTML = v1;

  trEl.appendChild(tdId);
  trEl.appendChild(tdName);
  trEl.appendChild(tdPoint);
  trEl.appendChild(tdLast);

  tbodyEl.prepend(trEl);

  tdLast.classList.add("text-center");

  let tdInTbody = tbodyEl.querySelectorAll("tr td:first-child")


  for(let i in tdInTbody){
    tdInTbody[i].innerText=i+1;
  }
  txtName.value="";
  txtPoint.value="";
  txtName.focus();
 
});

tbodyEl.addEventListener("click",(e)=>{
   let cells =  e.target.parentElement.parentElement.querySelectorAll("td");

if(e.target.classList.contains("fa-pencil")){

cells[3].innerHTML=v2;

 cells[1].setAttribute("contentEditable", true);
 cells[2].setAttribute("contentEditable", true);
 cells[1].focus();

}else if(e.target.classList.contains("fa-trash-can")){
  e.target.parentElement.parentElement.remove();

  let tdInTbody = tbodyEl.querySelectorAll("tr td:first-child")
  
  for(let i in tdInTbody){
    console.log(i)
    tdInTbody[i].innerText=`${i*1}+1`;
  }

}else if(e.target.classList.contains("fa-check")){

  cells[3].innerHTML=v1;

}
})
