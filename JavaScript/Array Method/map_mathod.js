/* let number = [2,4,6,8];

let double  = number.map(
    (element)=>{
        return element*2;
    }
)

console.log(double); */


let students = [
    {
        name : "Rakibul",
        marks : 89
    },
    {
        name : "Aysha",
        marks : 99.99
    },
    {
        name : "Luna",
        marks : 95.97
    }
];


let gpa = students.map(
    (element) => {
        return element.marks / 10;
    }
);

console.log(gpa); 


