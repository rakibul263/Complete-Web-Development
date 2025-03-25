const awaitFunction = async()=>{
    console.log('first')
    console.log('second')
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log(data);
    console.log('forth')
}


awaitFunction()
