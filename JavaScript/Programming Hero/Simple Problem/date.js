
// some way to get the date
const way01 = new Date();//today date 
console.log(way01);

const way02 = new Date("2021-10-01");
console.log(way02);

const way03 = new Date(2021,10);
console.log(way03);

const way04 = new Date(2020, 11, 23);
console.log(way04);

const date = new Date (Date.UTC(2021, 5, 11));
console.log();
console.log(date.toUTCString());



// Date.UTC

const d1 = new Date(Date.UTC(78));
console.log(d1);

//1978 feb
const d2 = new Date(Date.UTC(78, 1));
console.log(d2.toUTCString());

//1978 feb 21
const d3 = new Date(Date.UTC(78, 1, 21)); 

// console.log(d3.toUTCString());
console.log(d3.toDateString());