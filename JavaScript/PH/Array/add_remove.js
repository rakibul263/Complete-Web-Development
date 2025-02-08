const names = ["Shuvo", "Ragib", "Arman", "Bulbul", "Hasib", "Aysha", "Asha", "Mili"];
// popoing array
const poping = [];
// add end of the array
names.push("Maruf");
console.log(names);
names.push("Abir");
console.log(names);


// remove end of the array
poping.push(names.pop());
console.log(names);
// console.log(poping);
poping.push(names.pop());
console.log(names);

let ans = console.log("After Poping : ", poping);
console.log("After poping : "+ poping);
console.log(typeof(ans));

// make it string 
console.log("After adding the value last of the array = "+ names);
// console it using datatype
console.log("After adding the value last of the array = ", names);



console.log();
console.log();
console.log();


// add and remove the value start of the array
console.log(names);
names.shift();
console.log(names);
names.unshift("Raha");
console.log(""+names);