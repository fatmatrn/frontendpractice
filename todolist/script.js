const inputBox = document.querySelector("#input-box");
const button = document.querySelector("#addbutton");
const ul = document.querySelector("#list-container");


button.addEventListener("click",addTask);

function addTask(){

    if(inputBox.value===""){
        alert("Please  enter your task");
    }else{
        let li = document.createElement("li");
       li.innerHTML=inputBox.value;
       ul.appendChild(li)
       let span = document.createElement("span");
       span.innerHTML="\u00d7";
       li.appendChild(span)
     }
     inputBox.value="";
     inputBox.focus();
     saveData();
    
    }
    ul.addEventListener("click",removeTask);

    function removeTask(e){
if(e.target.tagName==="LI"){
    e.target.classList.toggle("checked");
    saveData();
}else if(e.target.tagName==="SPAN"){
    e.target.parentElement.remove();
    saveData();
}
    }

    function saveData(){
   localStorage.setItem("data",ul.innerHTML)
    }
    function showTask(){
        ul.innerHTML = localStorage.getItem("data");
    }
    showTask()