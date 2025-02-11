const addEvent = document.getElementById("handelAdd");

addEvent.addEventListener("click", (event)=>{
    const innerPart = document.getElementById("textPart").value;
    console.log(innerPart);

    const container = document.getElementById("comment-container");

    const p = document.createElement('p');

    p.innerText = innerPart;
    p.classList.add("child");

    container.appendChild(p);

    document.getElementById("textPart").value = "";

    const allComment = document.getElementsByClassName("child");

    for (const element of allComment){
        // console.log(element);
        element.addEventListener("click",(event)=>{
            event.target.parentNode.removeChild(element);
        });
    }
})