let parent = document.querySelector(".certeficatdetail-main");  //parent variable for popup windo

let button = document.querySelector("button");
let x = document.querySelector(".X");

button.addEventListener("click", appear); //When we click button the function appear works


function appear(){
    parent.style.display="block";

}
x.addEventListener("click", dissappearX);//when we click the X the pop-up window disappeares

function dissappearX(){
    parent.style.display="none";

}


//second pop-up window
let parent2 = document.querySelector(".certeficatdetail-main2");
let button2=document.getElementById("button2");
let x2 = document.querySelector(".X2");

button2.addEventListener("click", appear2);
function appear2(){
    parent2.style.display="block";
}
x2.addEventListener("click", dissappearX2);
function dissappearX2 (){
    parent2.style.display="none";
}