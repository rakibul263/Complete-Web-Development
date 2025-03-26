// call stack 
/* function hello(){
    console.log('Inside Hello Function.');
    console.log('Hello Function is Finished');
}

function demo(){
    console.log('Hello Function call.');
    hello();
    console.log('Hello Function call Finished.');
}

console.log('Demo Function call start.');
demo();
console.log('End of the call'); */


// call stack 2
/* function one(){
    return 1;
}

function two(){
    return one()+one();
}

function three(){
    const result = one()+two();
    console.log('Result is : ', result);
}

three(); */


// single threaded
/* 
const num1=10;
console.log(num1);
const num2 = 20;
console.log(num2);
const ans = num1+num2;
console.log(ans);
 */

/* setTimeout(()=>{
    console.log('Rakibul Hasan.');
}, 2000);

console.log('Welcome, JS');
 */

// Async Keyword
/* async function greet(){
    throw 'akta error catch kora hoyeche.'
    return 'Welcome JavaScript';
}

greet()
.then((result)=>{
    console.log('promise was resolved.');
    console.log('Your result is : ', result);
})
.catch((error)=>{
    console.log('This is an error : ', error)
})
 */
// arrow async fuction
/* const welcome = async () =>{
    throw 'arrow function problem identifed';
    return 'Arrow Function';
}

welcome()
.then((result)=>{
    console.log('promise was resolved in arrow function')
    console.log(result);
})
.catch((error)=>{
    console.log(error);
}) */

// await function  

/* function getRandomNumber(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            let num = Math.floor(Math.random()*10)+1;
            console.log(num);
            resolve();
        }, 1000);
    });
}

async function callFunction(){
    await getRandomNumber();
    await getRandomNumber();
    await getRandomNumber();
    await getRandomNumber();
    getRandomNumber();
}

callFunction();
 */

// color changed function
/* const h1  = document.querySelector('h1');
// h1.style.color = 'red';
function changeColor(color, delay){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            h1.style.color = `${color}`;
            resolve('color changed!');
        }, delay)
    })
}

async function callChange(){
    try{
        await changeColor('red', 1000);
        await changeColor('orange', 1000);
        await changeColor('green', 1000);
        changeColor('blue', 1000);
    }
    catch(error){
        console.log(error);
    }
}

callChange(); */


// API
/* const url = 'https://catfact.ninja/fact';

async function getFacts(){
    try{
        let response = await fetch(url)
        let data = await response.json(); //because ata promise return kore
        console.log(data.fact);
    }
    catch(error){
        console.log('error - ', error);
    }
}

getFacts(); */


// Axios 

/* 
let btn = document.querySelector('button');
btn.addEventListener('click', async ()=>{
    let fac= await getFacts();
    console.log(fac);
})

const url = 'https://catfact.ninja/fact';

async function getFacts(){
    try{
        let response = await axios.get(url);
        return response.data.fact;
    }catch(error){
        console.log('error-', error)
    }
}

const displayData = (data) =>{
    
} */


const url = 'https://catfact.ninja/fact';
const url2 = 'https://dog.ceo/api/breeds/image/random';

let btn = document.getElementById('factsBtn');
btn.addEventListener('click', async()=>{
    let data = await getFacts();
    document.getElementById('fact').innerText = data;
    console.log(data);
})

async function getFacts(){
    try{
        const response = await axios.get(url);
        return response.data.fact;
    }catch(error){
        console.log('error - ', error);
    }
}

let dogBtn = document.getElementById('dogBtn');
dogBtn.addEventListener('click', async()=>{
    let dogData = await getDogImage();
    // console.log(dogData);
    const ImageDiv = document.getElementById('dog-image');
    ImageDiv.innerHTML = `
        <img src="${dogData.message}" alt="">
    `
})

const getDogImage = async() =>{
    try{
        let dogFetch = await axios.get(url2);
        return dogFetch.data;
    }catch(error){
        console.log('error-', error);
    }
}