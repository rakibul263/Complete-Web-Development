let btns = document.querySelectorAll("button");

for(btn of btns){
    // btn.addEventListener("c lick", sayHello);
    // btn.addEventListener("click", sayName);
    btn.addEventListener("dblclick", function(){
        console.log("You doubled clicked me !");
    })
}

function sayHello(){
    alert("Hello ! ")
}
function sayName(){
    alert("Rakibul Hasan")
}