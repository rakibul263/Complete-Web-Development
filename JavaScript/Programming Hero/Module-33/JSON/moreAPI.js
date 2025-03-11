userData = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            displayUser(data)
        })
}


const displayUser = (users) => {
    console.log(users[0]);
}