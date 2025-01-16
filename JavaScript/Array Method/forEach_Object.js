/* let students = [
    {
        name : "Rakibul",
        age : 21,
        marks: 96,
    },
    {
        name : "Arman",
        age : 22,
        marks : 87,
    }
]; */

let sum = 0;
const number = [10, 20, 30, 5];
number.forEach(myFunction);

function myFunction(item){
    sum+=item;
}

console.log(sum);