const loadUser = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {
            showUser(data)
        })
}


const showUser = (users) =>{
    const ul = document.getElementById('users');
    users.forEach(element => {
        const li = document.createElement("li");
        li.innerText = element.name;
        ul.appendChild(li);
    });
}