const buttons=document.querySelectorAll("btn");
const ekranEl=document.querySelector("#ekran");
function hesapla(){
   
   for(let i=0; i<buttons.length; i++){
      ekranEl.value+=buttons[i].value
  }

    

    

}

function  ekle(){
//ekranEl.value+=el8.value;



switch(true){
         case el8.value==8:
            ekranEl.value+=el8.value;
         break;
         case el7.value==7:
            ekranEl.value+=el7.value;
         break;
         case el3:
            ekranEl+=3;
         break;
         case el4:
            ekranEl+=4;
         break;
         case el5:
            ekranEl+=5;
         break;
         case el6:
            ekranEl+=6;
         break;
         case el7:
            alert("hello");
            ekranEl.value+="7";
         break;
         case el8:
            ekranEl+=8;
         break;
         case el9:
            ekranEl+=9;
         break;
         case elplus:
            ekranEl+="+";
         break;
         case elminus:
            ekranEl+="-";
         break;
         case eldivide:
            ekranEl+="/";
         break;
         case elmultiply:
            ekranEl+="*";
         break;
         case el0:
            ekranEl+=0;
         break;
         case eldot:
            ekranEl+=".";
         break;


             

    }
}