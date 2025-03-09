const numbers = [1,2,3,4,5,6];

for(let i=0;i<numbers.length;i++){
    console.log(numbers[i]);
}


const names = ['Rohim', 'korim', 'borkot', 'salam', 'jobbar'];
for(let index = 0; index < names.length; index++){
    console.log(names[index]);
}


// mapping 
console.log();
console.log('Start Mapping : ');

const number = [1,2,3,4,5,6,7];
const increaseNumber = number.map(element => element+1);
console.log(...increaseNumber);  // spread operator


const name = ['Rakibul', 'Bulbul', 'Culbul', 'Kabul', 'Abul'];
const nameMapping = name.map((element, index) =>{
    console.log(`My element name is ${element} and it's ID is ${index}`);
});
