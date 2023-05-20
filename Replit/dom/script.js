const txtName = document.getElementById("txtName");
const txtPoint = document.getElementById("txtPoint");
const btnAdd = document.getElementById("btnAdd");
const tbodyEl = document.querySelector("tbody");


btnAdd.addEventListener("click",()=>{
    
    let trEl = document.createElement("tr");
    console.log(trEl)
    
    let tdId = document.createElement("td"); 
    let tdName = document.createElement("td"); 
    let tdPoint = document.createElement("td"); 
    let tdLast = document.createElement("td").classList.add("d-flex gap-2"); 
   
    tdName.innerHTML=txtName.value;
    console.log(txtName.value)
    tdPoint.innerHTML=tdPoint.value;
    tdLast.innerHTML = `<i class="fa-solid fa-pencil">
    <i class="fa-solid fa-trash-can"></i
  ></i>`;

  trEl.appendChild(tdId);
  trEl.appendChild(tdName);
  trEl.appendChild(tdPoint);
  trEl.appendChild(tdLast);

  tbodyEl.prepend(trEl);

  let tdInTbody = document.querySelectorAll("tbody tr td:first-child")


  for(let i in tdInTbody){
    tdInTbody[i].innerText=i+1;
  }
 
});
