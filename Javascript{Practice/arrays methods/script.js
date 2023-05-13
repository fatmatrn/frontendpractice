let city = ["Ankara","İstanbul", "İzmir"];
const txtInput =document.querySelector('#txtInput');
const add =document.querySelector('#add');
const removeAll =document.querySelector('#remove-all');
const removeFirst =document.querySelector('#remove-first');
const removeLast =document.querySelector('#remove-last');
const sort =document.querySelector('#sort');
const reverse =document.querySelector('#reverse');
const mix =document.querySelector('#mix');
const list =document.querySelector('#list')
let forMetodu = ()=>{
    for (let eleman of city ){
        console.log(eleman)
        list.innerHTML +=`<li> ${eleman} </li>` ;
    }
}
add.addEventListener('click', ()=>{
   txtInput.focus();
    let yeniEleman = txtInput.value;
   yeniEleman =yeniEleman.trim()
    if(!yeniEleman){
        return;
    }
    list.innerHTML +=`<li> ${yeniEleman} </li>`
    city.push(yeniEleman);
    txtInput.value = "";
});
sort.addEventListener('click',()=>{
    list.innerHTML = "";
    city.sort();
    forMetodu();
});
reverse.addEventListener('click',()=>{
    list.innerHTML = "";
    city.reverse();
    forMetodu();
});
removeLast.addEventListener('click',()=>{
    list.innerHTML = "";
    city.pop();
    forMetodu();
})
removeFirst.addEventListener('click',()=>{
    list.innerHTML = "";
    city.shift();
    forMetodu();
})
removeAll.addEventListener('click',()=>{
    list.innerHTML = "";
    city = [];
});
mix.addEventListener('click',()=>{
    list.innerHTML="";
    city.sort(() => Math.random() - 0.5);
    forMetodu();
//     const array = [1, 2, 3, 4, 5];
// const shuffledArray = array.slice(); // Orijinal dizinin bir kopyasını oluştur
// shuffledArray.sort(() => Math.random() - 0.5);
// console.log(shuffledArray); // Karıştırılmış dizi
    //let newCity=[];
            // do{
            //    let random = Math.floor(Math.random()*city.length);
            //    console.log(random)
            //    let sil =city.splice(random,1).toString();
            //    newCity.push(sil);
            //   list.innerHTML +=`<li> ${sil} </li>` ;
            // }while(city.length===1)
        // do{
        //     let random = Math.floor(Math.random()*city.length);
        //     console.log(random)
        //     if (!newCity.includes(city[random])){
        //           newCity.push(city[random]);
        //             list.innerHTML +=`<li> ${city[random]} </li>` ;
        //     }
        // }while(newCity.length !==city.length  )
});




