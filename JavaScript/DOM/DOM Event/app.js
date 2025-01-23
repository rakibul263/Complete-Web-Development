/* let btn = document.querySelector('button');
// console.dir(btn);

/* btn.onclick = function(){
    alert("Button was clicked");
} */
/*


btn.onclick = sayHello; */


let btns = document.querySelectorAll("button");

for(btn of btns){
    btn.onclick = sayHello;
    btn.onmouseenter = mouseEntered;
}

function sayHello(){
    alert("Hello!");
}

function mouseEntered(){
    console.log("You entered a button");
}