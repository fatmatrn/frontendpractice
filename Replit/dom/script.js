const txtName = document.getElementById("txtName");
const txtPoint = document.getElementById("txtPoint");
const btnAdd = document.getElementById("btnAdd");
let id = 1;

btnAdd.addEventListener("click",()=>{
     let html ="";
      html+=`  <tr>
     <td>${id++}</td>
     <td>${txtName.value}</td>
     <td>${txtPoint.value}</td>
     <td class="d-flex justify-content-around " ><i class="fa-solid  fa-pencil "></i> 
         <i class="fa-solid   fa-trash-can"></i></td>
 </tr>`;
document.querySelector("tbody").innerHTML+=html;
 
});