const addEvent = document.getElementById("handelAdd");

addEvent.addEventListener("click", (event)=>{
    const innerPart = document.getElementById("textPart").value;
    console.log(innerPart);

    const container = document.getElementById("comment-container");

    const p = document.createElement('p');

    p.innerText = innerPart;

    container.appendChild(p);

    document.getElementById("textPart").value = "";
    
})