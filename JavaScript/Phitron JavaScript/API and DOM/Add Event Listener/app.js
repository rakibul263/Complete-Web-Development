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
});

// Api


fetch("https://jsonplaceholder.typicode.com/users")
.then(res=>res.json())
.then(data=>{
    displayData(data)
})
.catch((err) => {
    console.log(err);
});

const displayData = (userData) => {
    const container = document.getElementById("userData-container");

    userData.forEach((user)=>{
        const div = document.createElement("div");
        div.classList.add("user");

        div.innerHTML = `
            <h2>Title</h2>
            <p>Description</p>
            <button>Button</button>
        `;
        // container.appendChild(div);
        container.appendChild(div);
    });
};