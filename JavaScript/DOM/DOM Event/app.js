let btn = document.querySelector('button');
// console.dir(btn);

/* btn.onclick = function(){
    alert("Button was clicked");
} */

function sayHello(){
    alert("Hello!");
}

btn.onclick = sayHello;