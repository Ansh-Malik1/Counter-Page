const value=document.querySelector("#counter");
// random=Math.random()*
const decrement=() =>{
    let current=parseInt(value.innerText);
    current=current-1;
    value.innerText=current;
    minus.classList.add("plusActive");
    minus.classList.remove("hidden")
    setTimeout(function(){
        minus.classList.add("hidden");
        minus.classList.remove("plusActive");
    },1030)
};
const increment=() =>{
    let current=parseInt(value.innerText);
    current=current+1;
    value.innerText=current;
    plus.classList.add("plusActive");
    plus.classList.remove("hidden");
    setTimeout(function(){
        plus.classList.add("hidden");
        plus.classList.remove("plusActive");
    },1030)
}