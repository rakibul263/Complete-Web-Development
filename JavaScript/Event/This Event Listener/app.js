let btn = document.querySelector("button");

btn.addEventListener("click", function(){
    console.dir(this.innerText);
    this.style.backgroundColor = "skyblue";
});